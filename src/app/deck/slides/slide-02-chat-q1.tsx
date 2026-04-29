import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide02ChatQ1({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Opening · Question 01
          </span>
          <div className='deck-mono'>Drop a number in chat. We&apos;ll wait.</div>
        </div>

        <div className='deck-stack-lg' style={{ maxWidth: 1500 }}>
          <h1 className='deck-display' style={{ fontSize: '5rem' }}>
            Have you ever fed a BRD <em>straight into an AI tool</em> and asked
            it to build the screens?
          </h1>
          <div style={{ display: 'flex', gap: 32, marginTop: 24 }}>
            <div className='deck-box deck-box-hot' style={{ padding: '24px 32px', minWidth: 220 }}>
              <div className='deck-box-head'>
                <span style={{ color: 'var(--d-accent)' }}>Yes</span>
                <span className='k'>1</span>
              </div>
              <div className='deck-h3'>Drop a 1</div>
            </div>
            <div className='deck-box deck-box-mute' style={{ padding: '24px 32px', minWidth: 220 }}>
              <div className='deck-box-head'>
                <span>No</span>
                <span className='k'>2</span>
              </div>
              <div className='deck-h3'>Drop a 2</div>
            </div>
          </div>
        </div>

        <div className='deck-mono'>
          Cursor · Claude · v0 · Lovable · whatever you reach for
        </div>
      </div>
    </SlideShell>
  )
}
