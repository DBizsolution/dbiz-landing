import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide10Act2Title({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 48, maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 02 · 7–8 min
          </span>
          <div className='deck-coord' style={{ fontSize: '1rem' }}>The canvas in the bigger picture</div>
        </div>

        <h1 className='deck-display'>
          We put a <em> stable thing </em> <br /> between the BRD and the AI.
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1300 }}>
          Before I show you the canvas, here&apos;s where it sits in the broader
          workflow. Then we&apos;ll go inside.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
          <span className='deck-tag'>Pipeline</span>
          <span className='deck-tag'>The mess that went in</span>
          <span className='deck-tag'>Two parts: collaboration · artifacts</span>
        </div>
      </div>
    </SlideShell>
  )
}
