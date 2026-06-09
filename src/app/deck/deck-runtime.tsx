'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { slides } from './slides'

const STAGE_W = 1920
const STAGE_H = 1080
const VIEWPORT_PADDING = 0

export default function DeckRuntime() {
  const searchParams = useSearchParams()
  const total = slides.length

  /** Read ?s= once at mount via useSearchParams so a deeplink lands on the
   *  right slide without a setState-in-effect cycle. */
  const initialIndex = useMemo(() => {
    const raw = searchParams?.get('s')
    const parsed = raw ? Number.parseInt(raw, 10) : Number.NaN
    if (Number.isFinite(parsed) && parsed >= 1 && parsed <= total) {
      return parsed - 1
    }
    return 0
    // eslint-disable-next-line react-hooks/exhaustive-deps -- initial only
  }, [])

  const [index, setIndex] = useState(initialIndex)

  const safeIndex = Math.max(0, Math.min(index, total - 1))
  const entry = slides[safeIndex]
  const stageRef = useRef<HTMLDivElement>(null)
  const channelRef = useRef<BroadcastChannel | null>(null)
  const indexRef = useRef(safeIndex)
  indexRef.current = safeIndex
  const skipNextBroadcastRef = useRef(true)

  /** Keep ?s= in sync with state. Pure DOM mutation, no React state writes. */
  useEffect(() => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    url.searchParams.set('s', String(safeIndex + 1))
    window.history.replaceState(null, '', url.toString())
  }, [safeIndex])

  /** Cross-window sync. Either /deck or /deck/speaker can drive; the other
   *  follows. Receivers compare incoming vs current, so the natural echo
   *  posted by the receiving window's own effect is a no-op (same value). */
  useEffect(() => {
    if (typeof window === 'undefined' || typeof BroadcastChannel === 'undefined') return
    const channel = new BroadcastChannel('dbiz-deck')
    channelRef.current = channel
    channel.onmessage = (event) => {
      const next = event.data?.index
      if (typeof next === 'number' && next !== indexRef.current) {
        setIndex(next)
      }
    }
    return () => {
      channel.close()
      channelRef.current = null
    }
  }, [])

  useEffect(() => {
    if (skipNextBroadcastRef.current) {
      skipNextBroadcastRef.current = false
      return
    }
    channelRef.current?.postMessage({ index: safeIndex })
  }, [safeIndex])

  /** Fit the 1920×1080 stage into the viewport via DOM mutation on the ref —
   *  avoids React state for a value that only the stage element cares about. */
  useEffect(() => {
    const update = () => {
      const el = stageRef.current
      if (!el) return
      const w = window.innerWidth - VIEWPORT_PADDING * 2
      const h = window.innerHeight - VIEWPORT_PADDING * 2
      const scale = Math.min(w / STAGE_W, h / STAGE_H)
      el.style.setProperty('--deck-scale', String(scale))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  /** Keyboard navigation. */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
        case 'l':
          e.preventDefault()
          setIndex((i) => Math.min(i + 1, total - 1))
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'h':
          e.preventDefault()
          setIndex((i) => Math.max(i - 1, 0))
          break
        case 'Home':
          e.preventDefault()
          setIndex(0)
          break
        case 'End':
          e.preventDefault()
          setIndex(total - 1)
          break
        case 'f':
          e.preventDefault()
          if (document.fullscreenElement) {
            document.exitFullscreen()
          } else {
            document.documentElement.requestFullscreen()
          }
          break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [total])

  const Component = entry.Component
  const meta = {
    index: safeIndex,
    total,
    act: entry.act,
    title: entry.title,
    marker: entry.marker,
    time: entry.time,
  }
  const progress = ((safeIndex + 1) / total) * 100

  return (
    <>
      <div className='deck-progress'>
        <div className='fill' style={{ width: `${progress}%` }} />
      </div>

      <div className='deck-viewport'>
        <div className='deck-stage' ref={stageRef}>
          <Component meta={meta} />
        </div>
      </div>

      <div className='deck-nav'>
        <span className='hint'>← → · t</span>
        <span className='counter'>
          {String(safeIndex + 1).padStart(2, '0')} · {String(total).padStart(2, '0')}
        </span>
      </div>
    </>
  )
}
