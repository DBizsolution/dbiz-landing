import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide19Part2Artifacts({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 48, maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Part 02 of 02
          </span>
          <div className='deck-coord' style={{ fontSize: '1rem' }}>The canvas as a source of structured specs</div>
        </div>

        <h1 className='deck-display'>
          Artifacts: <em>structured specs </em> the build can consume.
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1300 }}>
          Once collaboration settles, the canvas exports artifacts in a fixed
          shape. Each one serves a different swim lane. AI works better with
          consistent shape. So we hand the AI the canvas, not the BRD.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
          <span className='deck-tag'>Stages &amp; lifecycles</span>
          <span className='deck-tag'>Data fields</span>
          <span className='deck-tag'>Information architecture</span>
          <span className='deck-tag'>Screen list</span>
          <span className='deck-tag'>Validation</span>
        </div>
      </div>
    </SlideShell>
  )
}
