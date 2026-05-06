import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide09RevisionRot({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <style>{`.deck-body:has([data-slide="09"]) { padding-bottom: 0; }`}</style>
      <div
        data-slide='09'
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
          gap: 64,
          height: '100%',
          alignItems: 'center',
        }}
      >
        <div className='deck-stack-lg'>
          <span className='deck-marker'>Problem · 3 of 3</span>
          <h1 className='deck-h1'>Revision rot.</h1>
          <p className='deck-body-text'>
            BRD changes. You re-prompt. The new output is fine on its own — but
            it doesn&apos;t fit the app you already built around the first
            version.
          </p>
          <ul className='deck-list' style={{ marginTop: 8 }}>
            <li data-marker='S·07'>
              <strong>Fields rename. </strong>{' '}
              <code>consignor</code> becomes <code>shipper</code>. Same column,
              new word.
            </li>
            <li data-marker='S·08'>
              <strong>New steps appear. </strong> Step 0 — &quot;booking on
              behalf of an LSP&quot; — pushes the whole form down.
            </li>
            <li data-marker='S·09'>
              <strong>New billing line. </strong> &quot;Pay&quot; becomes
              &quot;invoice&quot;. New fee, new total, new CTA.
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%', minHeight: 0 }}>
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 0, flex: 1, minHeight: 0 }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>App · built on BRD v1</span>
              <span className='k'>FIG · 09A</span>
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
                src='/deck/rev-rot-v1.png'
                alt='Pickup booking screen built on BRD v1 — LSP self-books, two steps, "Confirm booking & pay"'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', padding: 0, flex: 1, minHeight: 0 }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>BRD v2 · same shell, fields don&apos;t line up</span>
              <span className='k'>FIG · 09B</span>
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
                src='/deck/rev-rot-v2.png'
                alt='Same screen after a BRD revision — Terminal Operator books on behalf of LSP. New Step 0, consignor renamed to shipper, new LSP fee, "Confirm & invoice"'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
