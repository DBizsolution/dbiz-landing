import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide19Part2Artifacts({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 40, maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Use 2 of 2
          </span>
          <div className='deck-coord' style={{ fontSize: '1rem' }}>Artifacts — structured for AI to consume</div>
        </div>

        <h1 className='deck-display'>
          Implicit in a BRD. <em>Explicit in the canvas.</em>
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1400 }}>
          A BRD has rules and relationships hidden in prose. The canvas writes
          them as a structured spec the AI can read directly — so it doesn&rsquo;t
          have to guess, and doesn&rsquo;t hallucinate. We already do this as humans
          when we draw flows or data models. Same step. Same starting point. Now
          for the AI.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <span className='deck-tag'>Stages &amp; lifecycles</span>
          <span className='deck-tag'>Data fields</span>
          <span className='deck-tag'>Information architecture</span>
          <span className='deck-tag'>Screen list</span>
          <span
            className='deck-tag'
            style={{ borderStyle: 'dashed', color: 'var(--d-ink-3)' }}
          >
            API integration <span style={{ marginLeft: 6, opacity: 0.7 }}>· WIP</span>
          </span>
          <span
            className='deck-tag'
            style={{ borderStyle: 'dashed', color: 'var(--d-ink-3)' }}
          >
            DB schema <span style={{ marginLeft: 6, opacity: 0.7 }}>· WIP</span>
          </span>
        </div>
      </div>
    </SlideShell>
  )
}
