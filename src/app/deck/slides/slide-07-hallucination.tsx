import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide07Hallucination({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <style>{`.deck-body:has([data-slide="07"]) { padding-bottom: 0; }`}</style>
      <div
        data-slide='07'
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 3fr)',
          gap: 64,
          height: '100%',
          alignItems: 'center',
        }}
      >
        {/* LEFT — the why */}
        <div className='deck-stack-lg'>
          <span className='deck-marker'>Problem · 1 of 3</span>
          <h1 className='deck-h1'>Hallucination.</h1>
          <p className='deck-body-text'>
            The AI invented a column. The BRD lists thirteen fields for an HBL.
            Consignor isn&apos;t one of them.
          </p>
          <ul className='deck-list' style={{ marginTop: 8 }}>
            <li data-marker='S·01'>
              <strong>Looks reasonable. </strong> Most reviewers won&apos;t catch it.
            </li>
            <li data-marker='S·02'>
              <strong>Drafts in.</strong> Code, copy, validation rules. All built
              around the made-up field.
            </li>
            <li data-marker='S·03'>
              <strong>Surfaces late.</strong> Usually during stakeholder review.
              After the rebuild cost is real.
            </li>
          </ul>
        </div>

        {/* RIGHT — the evidence frame */}
        <div
          className='deck-box'
          style={{ display: 'flex', flexDirection: 'column', padding: 0 }}
        >
          <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
            <span>AI output · v1</span>
            <span className='k'>FIG · 07</span>
          </div>
          <div className='deck-mockup' style={{ padding: 0, overflow: 'hidden', minHeight: 0 }}>
            <img
              src='/deck/vbs-ai-output-zoom.png'
              alt='AI booking screen with the invented Consignor column circled'
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <div style={{ padding: '14px 18px' }}>
            <div className='deck-mono' style={{ color: 'var(--d-accent)' }}>
              ↑ &quot;Consignor&quot; column — invented.
            </div>
            <div className='deck-mono' style={{ marginTop: 4 }}>
              The BRD&apos;s party concept is &quot;Next Hop&quot; (Section 4.1).
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
