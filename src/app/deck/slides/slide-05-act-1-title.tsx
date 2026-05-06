import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide05Act1Title({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 48, maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 01 · 6 min
          </span>
          <div className='deck-coord' style={{ fontSize: '1rem' }}>
            What goes wrong
          </div>
        </div>

        <h1 className='deck-display'>
          BRD &rarr; AI &rarr; Screen <em> <br /> breaks in three ways.</em>
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1300 }}>
          A real chunk of the VBS BRD, fed to an AI tool, asking for a screen.
          Three failure modes that show up before any product owner has time to
          push back.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
          <span className='deck-tag'>Hallucination</span>
          <span className='deck-tag'>Drift</span>
          <span className='deck-tag'>Revision rot</span>
        </div>
      </div>
    </SlideShell>
  )
}
