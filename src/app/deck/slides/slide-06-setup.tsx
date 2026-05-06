import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide06Setup({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <style>{`.deck-body:has([data-slide="06"]) { padding-bottom: 0; }`}</style>
      <div data-slide='06' style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 40 }}>
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
            gridTemplateColumns: 'minmax(0, 2fr) auto minmax(0, 3fr)',
            gap: 32,
            alignItems: 'stretch',
            flex: 1,
            minHeight: 0,
          }}
        >
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', minHeight: 0, padding: 0 }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>BRD · Section 4.2</span>
              <span className='k'>IN · 01</span>
            </div>
            <div
              className='deck-mockup'
              style={{
                flex: 1,
                minHeight: 0,
                padding: 0,
                overflowY: 'auto',
                overflowX: 'hidden',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              <img
                src='/deck/brd-section-4-2.png'
                alt='VBS BRD section 4.2 — LSP Pickup Booking Journey'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon='lucide:arrow-right' width={36} color='var(--d-accent)' />
          </div>

          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', minHeight: 0, padding: 0 }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>AI output · v1</span>
              <span className='k'>OUT · 01</span>
            </div>
            <div
              className='deck-mockup'
              style={{
                flex: 1,
                minHeight: 0,
                padding: 0,
                overflowY: 'auto',
                overflowX: 'hidden',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              <img
                src='/deck/vbs-ai-output.png'
                alt='AI-generated VBS booking screen'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        <div className='deck-mono'>Watch what breaks. Three things, one at a time.</div>
      </div>
    </SlideShell>
  )
}
