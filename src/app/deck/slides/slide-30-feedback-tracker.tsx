import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

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
            As we walked through screens with the BA, we logged what worked and
            what didn&apos;t. Rule changes fed back into the canvas; styling fed
            back into the design system. Same loop, both directions.
          </p>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 28, display: 'flex', flexDirection: 'column' }}>
          <div className='deck-box-head'>
            <span>VBS · feedback log · live in the app</span>
            <span className='k'>FIG · 30</span>
          </div>
          <div className='deck-mockup' style={{ flex: 1, minHeight: 460, marginTop: 14 }}>
            <div className='label'>
              <Icon icon='lucide:image' width={42} />
              <span>[ SCREENSHOT · feedback tracker on a live screen ]</span>
              <span className='k'>add manually · pins, comments, statuses</span>
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
          <div className='deck-mono'>Same loop, both directions: canvas ↔ design system ↔ screens.</div>
          <div className='deck-mono-accent' style={{ fontSize: '0.72rem' }}>
            ↪ live demo: open the feedback tracker on /wharf/dashboard
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
