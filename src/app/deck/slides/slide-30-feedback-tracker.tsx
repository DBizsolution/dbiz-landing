import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Note = {
  mark: string
  screen: string
  body: string
  status: 'open' | 'done' | 'rule'
  by: string
}

const notes: Note[] = [
  { mark: 'FB·01', screen: '/wharf/dashboard', body: 'Status badge for "Ready" needs more contrast on the consignee column.', status: 'done', by: 'Roni' },
  { mark: 'FB·02', screen: '/book/new', body: 'Slot picker — can we show the next 3 days by default, not 7?', status: 'rule', by: 'Ranjith' },
  { mark: 'FB·03', screen: '/driver/pickups', body: '"Confirm release" button position feels buried below the fold.', status: 'open', by: 'Roni' },
  { mark: 'FB·04', screen: '/admin/coverage', body: 'Coverage % feels like the wrong unit. Show counts first?', status: 'open', by: 'Kavya' },
  { mark: 'FB·05', screen: '/wharf/delegate', body: 'Disabled state needs a tooltip explaining why (status not unpacked).', status: 'rule', by: 'Roni' },
  { mark: 'FB·06', screen: '/book/mine', body: 'Empty state copy is too cute. Make it instructional.', status: 'done', by: 'Ranjith' },
]

const statusMeta = {
  open: { color: 'var(--d-accent)', label: 'OPEN' },
  done: { color: 'rgba(255,255,255,0.4)', label: 'DONE' },
  rule: { color: 'var(--d-ink-2)', label: '→ CANVAS' },
} as const

export function Slide30FeedbackTracker({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 06 · Feedback tracker
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Pinned to the screen <em>they refer to.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            As we walked through screens with Roni and Ranjith, we logged what
            worked and what didn&apos;t. Rule changes fed back into the canvas;
            styling fed back into the design system.
          </p>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 28, display: 'flex', flexDirection: 'column' }}>
          <div className='deck-box-head'>
            <span>VBS · feedback log</span>
            <span className='k'>{notes.length} of 24 shown</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 14,
              marginTop: 16,
              flex: 1,
              minHeight: 0,
            }}
          >
            {notes.map((n) => {
              const m = statusMeta[n.status]
              return (
                <div
                  key={n.mark}
                  style={{
                    border: `1px solid ${n.status === 'open' ? 'var(--d-orange-hair)' : 'var(--d-hair-strong)'}`,
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    background: n.status === 'open' ? 'var(--d-accent-bg)' : 'transparent',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>{n.mark}</span>
                      <Icon icon='ph:push-pin-bold' width={12} color='var(--d-ink-3)' />
                      <span className='deck-mono' style={{ fontSize: '0.62rem' }}>{n.screen}</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 8, height: 8, background: m.color }} />
                      <span className='deck-mono' style={{ fontSize: '0.6rem', color: m.color }}>{m.label}</span>
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--d-ink)', lineHeight: 1.45 }}>
                    {n.body}
                  </div>
                  <div className='deck-mono' style={{ fontSize: '0.6rem' }}>by · {n.by}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='deck-mono'>Same loop, both directions: canvas ↔ design system ↔ screens.</div>
      </div>
    </SlideShell>
  )
}
