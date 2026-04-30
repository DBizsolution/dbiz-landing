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
}

export function SlideShell({ meta, children, noFrame }: SlideShellProps) {
  const { index, total, act, title } = meta
  const slideNo = String(index + 1).padStart(2, '0')
  const totalNo = String(total).padStart(2, '0')

  return (
    <>
      {!noFrame && <div className='deck-frame' />}
      <div className='deck-meta'>
        <span className='k'>{act}</span>
        <span>{title}</span>
      </div>
      <div className='deck-body'>{children}</div>
      <div className='deck-foot'>
        <span>DBiz</span>
        <span>
          {slideNo} / {totalNo}
        </span>
      </div>
    </>
  )
}
