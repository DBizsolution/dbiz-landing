import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide31LiveScreen({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span className='deck-eyebrow'>
              <span className='bar' />
              Phase 06b · A live screen
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '4px 10px',
                border: '1px solid var(--d-orange-hair)',
                background: 'var(--d-accent-bg)',
                color: 'var(--d-accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              <Icon icon='lucide:external-link' width={12} />
              Demo live · skip in deck
            </span>
          </div>
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
          <div
            className='deck-mockup'
            style={{
              flex: 1,
              minHeight: 0,
              padding: 0,
              border: 'none',
              background: '#ffffff',
              display: 'block',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            <img
              src='/deck/live-screen.png'
              alt='VBS Pickup Portal — live Bookings dashboard with booking detail drawer'
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div className='deck-mono'>
            Built spec-first. Same fields as the canvas, same stages as the lifecycle.
          </div>
          <a
            href='https://vbsportal.dbizapps.ai/'
            target='_blank'
            rel='noreferrer'
            className='deck-mono-accent'
            style={{ fontSize: '0.72rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            <Icon icon='lucide:arrow-up-right' width={12} />
            vbsportal.dbizapps.ai
          </a>
        </div>
      </div>
    </SlideShell>
  )
}
