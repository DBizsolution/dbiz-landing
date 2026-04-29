import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide18HandoffMoment({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · A concrete moment
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One open question. <em>Two days. Then the canvas updates.</em>
          </h1>
        </div>

        <div
          className='deck-box deck-box-hot'
          style={{ flex: 1, minHeight: 0, padding: 40, display: 'flex', flexDirection: 'column' }}
        >
          <div className='deck-box-head'>
            <span style={{ color: 'var(--d-accent)' }}>OQ · 01</span>
            <span className='k'>opened 2026-03-21 · resolved 2026-03-23</span>
          </div>

          <div style={{ marginTop: 20, fontFamily: 'var(--font-sans)', fontSize: '1.7rem', fontWeight: 700, color: 'var(--d-ink)', letterSpacing: '-0.02em', lineHeight: 1.3, maxWidth: 1500 }}>
            Can the wharf actor delegate to a driver before the shipment is unpacked?
          </div>

          <div style={{ marginTop: 16 }}>
            <div className='deck-mono' style={{ fontSize: '0.7rem' }}>Reason</div>
            <p className='deck-body-text' style={{ marginTop: 6, fontSize: '1.15rem', maxWidth: 1500 }}>
              BRD 4.2 says delegation only after unpack. But the design shows a
              delegate button before unpack on the dashboard. Pick one.
            </p>
          </div>

          <div className='deck-rule' style={{ margin: '24px 0' }}>
            <span className='line' />
            <span className='lbl'>Two days later</span>
            <span className='line' />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)', gap: 24, alignItems: 'start' }}>
            <div className='deck-box deck-box-mute' style={{ padding: 18 }}>
              <div className='deck-box-head' style={{ marginBottom: 10, paddingBottom: 8 }}>
                <span>Roni&apos;s answer</span>
                <span className='k'>R·12</span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--d-ink)', lineHeight: 1.45 }}>
                Delegation allowed only when status ∈ {'{ Unpacked, Ready }'}.
                Disable button otherwise.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Icon icon='ph:arrow-right-bold' width={28} color='var(--d-accent)' />
            </div>

            <div className='deck-box' style={{ padding: 18 }}>
              <div className='deck-box-head' style={{ marginBottom: 10, paddingBottom: 8 }}>
                <span style={{ color: 'var(--d-accent)' }}>Downstream</span>
                <span className='k'>auto-updated</span>
              </div>
              <ul className='deck-list' style={{ gap: 8 }}>
                <li data-marker='UI'><strong>Delegate button</strong> disabled on three screens</li>
                <li data-marker='LOGIC'><strong>Validation rule</strong> regenerated</li>
                <li data-marker='DOC'><strong>Rule R·12</strong> added to canvas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='deck-mono'>
          Nobody went back and edited screens by hand. The canvas was the source.
        </div>
      </div>
    </SlideShell>
  )
}
