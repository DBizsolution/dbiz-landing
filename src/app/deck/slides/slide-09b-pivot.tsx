import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide09bPivot({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          gap: 40,
          maxWidth: 1500,
        }}
      >
        <span className='deck-eyebrow'>
          <span className='bar' />
          Between the problems and the answer
        </span>

        <h1 className='deck-display'>
          Three problems.{' '}
          <br /><em>How do you fix these?</em>
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1300 }}>
          What would have to exist between the BRD and the AI for hallucination,
          drift, and revision rot to all stop happening?
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
          <span className='deck-tag'>S·07 · Hallucination</span>
          <span className='deck-tag'>S·08 · Drift</span>
          <span className='deck-tag'>S·09 · Revision rot</span>
        </div>

        <div className='deck-mono' style={{ marginTop: 8, opacity: 0.55 }}>
          (rhetorical — the answer is next)
        </div>
      </div>
    </SlideShell>
  )
}
