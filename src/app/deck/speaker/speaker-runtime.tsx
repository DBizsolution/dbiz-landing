'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { slides } from '../slides'
import { ScriptPanel } from './script-panel'
import type { ScriptSection } from './script-parser'

type SpeakerRuntimeProps = {
  sections: Record<string, ScriptSection>
  frame: string
}

export function SpeakerRuntime({ sections, frame }: SpeakerRuntimeProps) {
  const searchParams = useSearchParams()
  const total = slides.length

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
  const nextEntry = safeIndex + 1 < total ? slides[safeIndex + 1] : null

  const channelRef = useRef<BroadcastChannel | null>(null)
  const indexRef = useRef(safeIndex)
  indexRef.current = safeIndex
  const skipNextBroadcastRef = useRef(true)
  const iframeInitialSrc = useMemo(() => `/deck?s=${initialIndex + 1}`, [initialIndex])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const url = new URL(window.location.href)
    url.searchParams.set('s', String(safeIndex + 1))
    window.history.replaceState(null, '', url.toString())
  }, [safeIndex])

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

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target as HTMLElement | null
      if (target?.matches('input, textarea, select, [contenteditable=true]')) return
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
        case 'l':
          event.preventDefault()
          setIndex((i) => Math.min(i + 1, total - 1))
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'h':
          event.preventDefault()
          setIndex((i) => Math.max(i - 1, 0))
          break
        case 'Home':
          event.preventDefault()
          setIndex(0)
          break
        case 'End':
          event.preventDefault()
          setIndex(total - 1)
          break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [total])

  const section = sections[entry.marker]
  const progress = ((safeIndex + 1) / total) * 100

  return (
    <div className='speaker-shell'>
      <header className='speaker-bar'>
        <div className='speaker-bar-l'>
          <span className='speaker-kicker'>Speaker</span>
          <span className='speaker-act'>{entry.act}</span>
          <span className='speaker-marker'>{entry.marker}</span>
          <span className='speaker-title'>{entry.title}</span>
        </div>
        <div className='speaker-bar-r'>
          {entry.time ? <span className='speaker-time'>{entry.time}</span> : null}
          <span className='speaker-counter'>
            {String(safeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <div className='speaker-controls'>
            <button
              type='button'
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              disabled={safeIndex === 0}
              aria-label='Previous slide'
            >
              ←
            </button>
            <select
              value={safeIndex}
              onChange={(event) => setIndex(Number.parseInt(event.target.value, 10))}
              aria-label='Jump to slide'
            >
              {slides.map((slide, idx) => (
                <option key={slide.marker} value={idx}>
                  {String(idx + 1).padStart(2, '0')} · {slide.marker} — {slide.title}
                </option>
              ))}
            </select>
            <button
              type='button'
              onClick={() => setIndex((i) => Math.min(i + 1, total - 1))}
              disabled={safeIndex === total - 1}
              aria-label='Next slide'
            >
              →
            </button>
          </div>
        </div>
      </header>

      <div className='speaker-progress'>
        <div className='fill' style={{ width: `${progress}%` }} />
      </div>

      <main className='speaker-main'>
        <section className='speaker-preview'>
          <div className='speaker-preview-frame'>
            <iframe
              src={iframeInitialSrc}
              title='Live deck preview'
              className='speaker-iframe'
            />
          </div>
          <p className='speaker-preview-hint'>
            Live deck mirror · drives /deck via BroadcastChannel
          </p>
        </section>
        <aside className='speaker-script'>
          <ScriptPanel section={section} frame={frame} nextEntry={nextEntry} />
        </aside>
      </main>
    </div>
  )
}
