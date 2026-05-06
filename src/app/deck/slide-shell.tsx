import type { ReactNode } from 'react'

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
  /** Optional full-bleed background image URL */
  bgImage?: string
  /** Optional dark overlay (0–1) to keep text legible over the bg */
  bgOverlay?: number
  /** Background sizing mode (default 'cover') */
  bgSize?: 'cover' | 'contain' | '100% 100%'
}

export function SlideShell({ meta, children, noFrame, bgImage, bgOverlay = 0.35, bgSize = 'cover' }: SlideShellProps) {
  const { act, title } = meta

  return (
    <>
      {bgImage ? (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: bgSize,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
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
