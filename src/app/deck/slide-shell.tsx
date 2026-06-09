'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type SlideMeta = {
  index: number
  total: number
  act: string
  title: string
  marker: string
  time?: string
}

type SlideShellProps = {
  meta: SlideMeta
  children: ReactNode
  /** Hide the inner frame (e.g., for full-bleed title slides) */
  noFrame?: boolean
  /** Background image URL — shown in dark theme (and in light if no light variant) */
  bgImage?: string
  /** Optional second image shown when light theme is active */
  bgImageLight?: string
  /** Dark-overlay alpha (0–1) over `bgImage` */
  bgOverlay?: number
  /** Light-overlay alpha (0–1) over `bgImageLight` (defaults to 0 — none) */
  bgOverlayLight?: number
  /** Background sizing mode (default 'cover') */
  bgSize?: 'cover' | 'contain' | '100% 100%'
  /** Render bg layers outside the 16:9 stage so they pin to the actual viewport
   *  on all sides regardless of aspect ratio (used for cover/title slides). */
  bgFullBleed?: boolean
}

export function SlideShell({
  meta,
  children,
  noFrame,
  bgImage,
  bgImageLight,
  bgOverlay = 0.35,
  bgOverlayLight = 0,
  bgSize = 'cover',
  bgFullBleed = false,
}: SlideShellProps) {
  const { act, title } = meta
  const layerStyle = {
    position: 'absolute' as const,
    inset: 0,
    backgroundSize: bgSize,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 0,
  }

  const [bgHost, setBgHost] = useState<HTMLElement | null>(null)
  useEffect(() => {
    if (!bgFullBleed) return
    setBgHost(document.querySelector<HTMLElement>('.deck-viewport'))
  }, [bgFullBleed])

  const bgLayers = (
    <>
      {bgImage ? (
        <div
          aria-hidden
          className={`deck-bg-layer deck-bg-dark${bgImageLight ? ' deck-bg-paired' : ''}${bgFullBleed ? ' deck-bg-fullbleed' : ''}`}
          style={{ ...layerStyle, backgroundImage: `url('${bgImage}')` }}
        >
          {bgOverlay > 0 ? (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `rgba(7, 15, 34, ${bgOverlay})`,
              }}
            />
          ) : null}
        </div>
      ) : null}
      {bgImageLight ? (
        <div
          aria-hidden
          className={`deck-bg-layer deck-bg-light${bgFullBleed ? ' deck-bg-fullbleed' : ''}`}
          style={{ ...layerStyle, backgroundImage: `url('${bgImageLight}')` }}
        >
          {bgOverlayLight > 0 ? (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `rgba(255, 255, 255, ${bgOverlayLight})`,
              }}
            />
          ) : null}
        </div>
      ) : null}
    </>
  )

  return (
    <>
      {bgFullBleed ? (bgHost ? createPortal(bgLayers, bgHost) : null) : bgLayers}
      {!noFrame && <div className='deck-frame' style={{ zIndex: 1 }} />}
      <div className='deck-meta' style={{ zIndex: 2 }}>
        <span className='k'>{act}</span>
        <span>{title}</span>
      </div>
      <div className='deck-body' style={{ zIndex: 2 }}>{children}</div>
      <div className='deck-foot' style={{ zIndex: 2 }}>
        <span>DBiz</span>
      </div>
    </>
  )
}
