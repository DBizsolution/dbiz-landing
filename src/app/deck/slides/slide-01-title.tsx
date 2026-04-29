import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide01Title({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div>
          <span className='deck-eyebrow'>
            <span className='bar' />
            DBiz · Talk · 2026-04
          </span>
        </div>

        <div className='deck-stack-lg'>
          <div className='deck-mono-accent'>The DBiz Canvas</div>
          <h1 className='deck-display'>
            How we build apps with AI <em>without losing the plot.</em>
          </h1>
          <p className='deck-lede' style={{ maxWidth: 1100 }}>
            A working method for going from a messy BRD to a shipped front-end —
            with the canvas sitting between the requirements and the AI to keep both
            sides honest.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div className='deck-stack-md'>
            <div className='deck-mono'>Speaker</div>
            <div className='deck-h3'>Rahul · Design</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
            <span className='deck-marker'>Case study · VBS Pickup Portal</span>
            <span className='deck-mono'>30–40 min · Q&amp;A in chat</span>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
