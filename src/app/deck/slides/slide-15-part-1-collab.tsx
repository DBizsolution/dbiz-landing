import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide15Part1Collab({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 48, maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Part 01 of 02
          </span>
          <div className='deck-coord' style={{ fontSize: '1rem' }}>The canvas as a working surface</div>
        </div>

        <h1 className='deck-display'>
          Collaboration: <em>where we lived day-to-day.</em>
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1300 }}>
          Roni, Kavya, Ranjith, and me. We added to it, argued in it, marked
          things approved or pending. The artifact mattered, but the practice of
          editing it together is what kept us aligned.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
          <span className='deck-tag'>Actors</span>
          <span className='deck-tag'>Entities</span>
          <span className='deck-tag'>Journeys</span>
          <span className='deck-tag'>Rules</span>
          <span className='deck-tag'>Open questions</span>
        </div>
      </div>
    </SlideShell>
  )
}
