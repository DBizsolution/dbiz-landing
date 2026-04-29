import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide21Act3Title({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 48, maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 03 · 15 min
          </span>
          <div className='deck-coord' style={{ fontSize: '1rem' }}>From canvas to product, despite changes</div>
        </div>

        <h1 className='deck-display'>
          The artifacts <em>doing real work.</em>
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1300 }}>
          Six phases, in the order we shipped them. Each one is a concrete VBS
          example. Plain language only — no state machines, no TypeScript types.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
          <span className='deck-tag'>Working repo</span>
          <span className='deck-tag'>Stages</span>
          <span className='deck-tag'>Data dictionary</span>
          <span className='deck-tag'>Layout</span>
          <span className='deck-tag'>Design system</span>
          <span className='deck-tag'>The build, honestly</span>
        </div>
      </div>
    </SlideShell>
  )
}
