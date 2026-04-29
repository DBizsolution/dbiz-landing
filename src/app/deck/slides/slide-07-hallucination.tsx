import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide07Hallucination({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 96,
          height: '100%',
          alignItems: 'center',
        }}
      >
        {/* LEFT — the why */}
        <div className='deck-stack-lg'>
          <span className='deck-marker'>Problem · 1 of 3</span>
          <h1 className='deck-h1'>Hallucination.</h1>
          <p className='deck-body-text'>
            The AI invented a rule. There&apos;s a field on the screen that nobody
            wrote in the BRD.
          </p>
          <ul className='deck-list' style={{ marginTop: 8 }}>
            <li data-marker='S·01'>
              <strong>Looks reasonable.</strong> Most reviewers won&apos;t catch it.
            </li>
            <li data-marker='S·02'>
              <strong>Drafts in.</strong> Code, copy, validation rules — all built
              around the made-up field.
            </li>
            <li data-marker='S·03'>
              <strong>Surfaces late.</strong> Usually during stakeholder review,
              after the rebuild cost is real.
            </li>
          </ul>
        </div>

        {/* RIGHT — the evidence frame */}
        <div className='deck-box' style={{ display: 'flex', flexDirection: 'column' }}>
          <div className='deck-box-head'>
            <span>AI output · v1</span>
            <span className='k'>FIG · 07</span>
          </div>
          <div className='deck-mockup' style={{ height: 360 }}>
            <div className='label'>
              <Icon icon='ph:image-square-bold' width={42} />
              <span>Booking screen — first AI output</span>
              <span className='k'>circle the hallucinated field</span>
            </div>
          </div>
          <div className='deck-mono' style={{ marginTop: 18, color: 'var(--d-accent)' }}>
            ↑ &quot;Priority tier&quot; — invented.
          </div>
          <div className='deck-mono' style={{ marginTop: 4 }}>
            Not in the BRD anywhere.
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
