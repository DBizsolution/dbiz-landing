import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide21Act3Title({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 40, maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 03 · ~11 min
          </span>
          <div className='deck-coord' style={{ fontSize: '1rem' }}>A real case study — ACFS VBS</div>
        </div>

        <h1 className='deck-display'>
          From canvas to product, <em>despite the changes.</em>
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1400 }}>
          A real case study. The BRD was revised three times during the build.
          The screens kept up — because the source of truth was the canvas, not
          the BRD.
        </p>
      </div>
    </SlideShell>
  )
}
