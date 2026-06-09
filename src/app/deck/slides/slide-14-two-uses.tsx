import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide14TwoUses({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · One canvas, two uses
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One canvas. <em>Two uses.</em>
          </h1>
        </div>

        <div className='deck-cols' style={{ flex: 1, alignItems: 'stretch', marginTop: 40 }}>
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='deck-box-head'>
              <span>Use 1</span>
              <span className='k'>U·01</span>
            </div>
            <div className='deck-stack-md' style={{ flex: 1 }}>
              <div className='deck-mono-accent'>Collaboration</div>
              <h2 className='deck-h2'>Humans align on the spine.</h2>
              <ul className='deck-list' style={{ marginTop: 8 }}>
                <li data-marker='C·01'>Actors</li>
                <li data-marker='C·02'>Entities</li>
                <li data-marker='C·03'>Journeys</li>
                <li data-marker='C·04'>Rules &amp; constraints</li>
                <li data-marker='C·05'>Open questions, kept visible</li>
              </ul>
            </div>
            <div className='deck-rule'>
              <span className='line' />
              <span className='lbl'>who lives here</span>
              <span className='line' />
            </div>
            <div className='deck-mono'>BA · Designer · Tech lead</div>
          </div>

          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='deck-box-head'>
              <span>Use 2</span>
              <span className='k'>U·02</span>
            </div>
            <div className='deck-stack-md' style={{ flex: 1 }}>
              <div className='deck-mono-accent'>Artifacts for AI</div>
              <h2 className='deck-h2'>Structured for AI to consume — so it doesn&rsquo;t hallucinate.</h2>
              <ul className='deck-list' style={{ marginTop: 8 }}>
                <li data-marker='A·01'>Stages &amp; lifecycles</li>
                <li data-marker='A·02'>Data fields</li>
                <li data-marker='A·03'>Information architecture</li>
                <li data-marker='A·04'>Screen list</li>
                <li data-marker='A·05'>API integration <span style={{ opacity: 0.6 }}>(WIP)</span></li>
                <li data-marker='A·06'>DB schema <span style={{ opacity: 0.6 }}>(WIP)</span></li>
              </ul>
            </div>
            <div className='deck-rule'>
              <span className='line' />
              <span className='lbl'>who consumes it</span>
              <span className='line' />
            </div>
            <div className='deck-mono'>Designers · front end · back end · architecture</div>
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            textAlign: 'center',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '1.6rem',
            letterSpacing: '-0.02em',
            color: 'var(--d-ink)',
          }}
        >
          Collaboration for <em style={{ fontStyle: 'normal', color: 'var(--d-accent)' }}>humans.</em>
          {' '}Artifacts for <em style={{ fontStyle: 'normal', color: 'var(--d-accent)' }}>AI.</em>
        </div>
      </div>
    </SlideShell>
  )
}
