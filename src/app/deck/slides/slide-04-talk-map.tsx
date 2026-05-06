import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide04TalkMap({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <style>{`
        [data-slide='04'] .deck-box {
          transition: background-color 220ms ease, border-color 220ms ease, color 220ms ease;
        }
        [data-slide='04'] .deck-box:hover {
          border-color: var(--d-orange-hair);
          background: var(--d-accent-bg, rgba(232, 106, 42, 0.08));
        }
        [data-slide='04'] .deck-box:hover .deck-box-head span:first-child,
        [data-slide='04'] .deck-box:hover .deck-h3 {
          color: var(--d-accent);
        }
      `}</style>
      <div data-slide='04' style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
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
          <div className='deck-box'>
            <div className='deck-box-head'>
              <span>Part three</span>
              <span className='k'>M·03</span>
            </div>
            <div className='deck-h3'>How we shipped in 3 weeks, despite three BRD revisions.</div>
          </div>
        </div>

        <div className='deck-mono'>
          37–40 minutes. Q&amp;A in chat as we go, or unmute at the end.
        </div>
      </div>
    </SlideShell>
  )
}
