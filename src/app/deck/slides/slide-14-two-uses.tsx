import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide14TwoUses({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Same source, two uses
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One canvas, <em>two phases of life.</em>
          </h1>
        </div>

        <div className='deck-cols' style={{ flex: 1, alignItems: 'stretch', marginTop: 40 }}>
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='deck-box-head'>
              <span>Part 1</span>
              <span className='k'>U·01</span>
            </div>
            <div className='deck-stack-md' style={{ flex: 1 }}>
              <div className='deck-mono-accent'>Collaboration</div>
              <h2 className='deck-h2'>Reach consensus on what the system actually is.</h2>
              <ul className='deck-list' style={{ marginTop: 8 }}>
                <li data-marker='C·01'>Actors</li>
                <li data-marker='C·02'>Entities (the things in the system)</li>
                <li data-marker='C·03'>Journeys</li>
                <li data-marker='C·04'>Business rules &amp; constraints</li>
                <li data-marker='C·05'>Open questions, kept visible</li>
              </ul>
            </div>
            <div className='deck-rule'>
              <span className='line' />
              <span className='lbl'>who lives here</span>
              <span className='line' />
            </div>
            <div className='deck-mono'>Roni · Kavya · Ranjith · Rahul</div>
          </div>

          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='deck-box-head'>
              <span>Part 2</span>
              <span className='k'>U·02</span>
            </div>
            <div className='deck-stack-md' style={{ flex: 1 }}>
              <div className='deck-mono-accent'>Artifacts for build</div>
              <h2 className='deck-h2'>Generate the structured specs the build can consume.</h2>
              <ul className='deck-list' style={{ marginTop: 8 }}>
                <li data-marker='A·01'>Stages &amp; lifecycles</li>
                <li data-marker='A·02'>Data fields (shape, optional, choices)</li>
                <li data-marker='A·03'>Information architecture</li>
                <li data-marker='A·04'>Screen list</li>
                <li data-marker='A·05'>Validation &amp; transitions</li>
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

        <div className='deck-mono' style={{ marginTop: 24, textAlign: 'center' }}>
          Same source. Two uses. That&apos;s the whole thing.
        </div>
      </div>
    </SlideShell>
  )
}
