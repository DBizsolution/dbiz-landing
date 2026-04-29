import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide04TalkMap({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Opening · What this talk does
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Three things, <em>in order.</em>
          </h1>
        </div>

        <div className='deck-stack-lg' style={{ marginTop: 40 }}>
          <div className='deck-box'>
            <div className='deck-box-head'>
              <span>Part one</span>
              <span className='k'>M·01</span>
            </div>
            <div className='deck-h3'>What goes wrong with BRD + AI.</div>
          </div>
          <div className='deck-box'>
            <div className='deck-box-head'>
              <span>Part two</span>
              <span className='k'>M·02</span>
            </div>
            <div className='deck-h3'>What we did differently for VBS.</div>
          </div>
          <div className='deck-box deck-box-hot'>
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>Part three</span>
              <span className='k'>M·03</span>
            </div>
            <div className='deck-h3'>Why we shipped in a week, despite three BRD revisions.</div>
          </div>
        </div>

        <div className='deck-mono'>
          37–40 minutes. Q&amp;A in chat as we go, or unmute at the end.
        </div>
      </div>
    </SlideShell>
  )
}
