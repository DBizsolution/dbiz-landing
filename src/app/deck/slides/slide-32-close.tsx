import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide32Close({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Close · 1 min
          </span>
          <div className='deck-mono'>What we shipped, and what&apos;s next.</div>
        </div>

        <div className='deck-stack-lg' style={{ marginBottom: 40 }}>
          <h1 className='deck-display' style={{ fontSize: '4.6rem' }}>
            We shipped VBS in a week. <em>The AI wasn&apos;t doing magic.</em>
          </h1>
          <p className='deck-lede'>
            We put a stable thing between the BRD and the AI. Same source, two
            uses: collaboration first, structured artifacts second. The mess
            didn&apos;t pile up because the source stayed put.
          </p>

          <div className='deck-rule' style={{ margin: '32px 0 0' }}>
            <span className='line' />
            <span className='lbl'>What&apos;s next</span>
            <span className='line' />
          </div>

          <div className='deck-box deck-box-hot' style={{ padding: 28 }}>
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>Roadmap · Q3</span>
              <span className='k'>NX · 01</span>
            </div>
            <div className='deck-h3'>
              BAs and PMs authoring the canvas directly — so we can do this for more than one project at a time.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className='deck-mono'>
            Right now: built by Rahul + Kavya in tight loops.
          </div>
          <div className='deck-mono-accent'>Questions next →</div>
        </div>
      </div>
    </SlideShell>
  )
}
