import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide03ChatQ2({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Opening · Question 02
          </span>
          <div className='deck-mono'>For everyone who said Y.</div>
        </div>

        <div className='deck-stack-lg' style={{ maxWidth: 1500 }}>
          <h1 className='deck-display' style={{ fontSize: '5.4rem' }}>
            What didn&apos;t work? <em> <br /> Speak up.</em>
          </h1>
          <p className='deck-lede'>
            Unmute and shout it out. I&apos;ll let two or three voices land before we move on.
          </p>
        </div>

        <div className='deck-mono'>
          The audience is writing the next slide for me.
        </div>
      </div>
    </SlideShell>
  )
}
