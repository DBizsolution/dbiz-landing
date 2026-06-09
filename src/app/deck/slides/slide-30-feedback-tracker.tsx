import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide30FeedbackTracker({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span className='deck-eyebrow'>
              <span className='bar' />
              Phase 06a · Feedback tracker
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
              Demo live next
            </span>
          </div>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Pinned to the screen <em>they refer to.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            As we walked through screens with the team, we logged what worked
            and what didn&apos;t — right against the screen it was about. Rule
            changes fed back into the canvas; styling fed back into the design
            system. Same loop, both directions.
          </p>
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
              <Icon icon='lucide:message-square' width={14} color='var(--d-accent)' />
              VBS · feedback log · live in the app
            </span>
            <span>FIG · 30</span>
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
              src='/deck/feedback-tracker.png'
              alt='Feedback Tracker — pinned comments, statuses, and resolutions on a live screen'
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        <div className='deck-mono'>Same loop, both directions: canvas ↔ design system ↔ screens.</div>
      </div>
    </SlideShell>
  )
}
