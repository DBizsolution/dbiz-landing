import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide06Setup({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 40 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 1 · The setup
          </span>
          <h1 className='deck-h1'>
            One BRD chunk. <em>One AI prompt.</em>
          </h1>
          <p className='deck-body-text'>
            Real text from the VBS BRD. Pasted into an AI tool. Asked for the
            booking screen. Here&apos;s what came back.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
            gap: 32,
            alignItems: 'stretch',
            flex: 1,
            minHeight: 0,
          }}
        >
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='deck-box-head'>
              <span>BRD · Section 4.2</span>
              <span className='k'>IN · 01</span>
            </div>
            <div className='deck-mockup' style={{ flex: 1, minHeight: 320 }}>
              <div className='label'>
                <Icon icon='ph:file-text-bold' width={42} />
                <span>BRD prose · ~1 page</span>
                <span className='k'>actor / rules / lifecycle</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon='ph:arrow-right-bold' width={36} color='var(--d-accent)' />
          </div>

          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='deck-box-head'>
              <span>AI output · v1</span>
              <span className='k'>OUT · 01</span>
            </div>
            <div className='deck-mockup' style={{ flex: 1, minHeight: 320 }}>
              <div className='label'>
                <Icon icon='ph:image-square-bold' width={42} />
                <span>Booking screen mockup</span>
                <span className='k'>first AI generation</span>
              </div>
            </div>
          </div>
        </div>

        <div className='deck-mono'>Watch what breaks. Three things, one at a time.</div>
      </div>
    </SlideShell>
  )
}
