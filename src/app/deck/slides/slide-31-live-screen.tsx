import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide31LiveScreen({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 06 · A live screen
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            This is <em>what shipped.</em>
          </h1>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 24px',
              borderBottom: '1px solid var(--d-hair-strong)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--d-ink-3)',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon icon='lucide:box' width={14} color='var(--d-accent)' />
              VBS Pickup · Wharf · ACFS Whitefield
            </span>
            <span>FIG · 31</span>
          </div>
          <div className='deck-mockup' style={{ flex: 1, minHeight: 540, border: 'none', background: 'transparent' }}>
            <div className='label'>
              <Icon icon='lucide:image' width={42} />
              <span>[ SCREENSHOT · /wharf/dashboard — original VBS shipped screen ]</span>
              <span className='k'>add manually</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div className='deck-mono'>
            Built spec-first. Same fields as the canvas, same stages as the lifecycle.
          </div>
          <div className='deck-mono-accent' style={{ fontSize: '0.72rem' }}>
            ↪ live demo: jump to the running app
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
