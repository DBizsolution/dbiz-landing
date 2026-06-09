import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide08Drift({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <style>{`.deck-body:has([data-slide="08"]) { padding-bottom: 0; }`}</style>
      <div
        data-slide='08'
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
          gap: 64,
          height: '100%',
          alignItems: 'center',
        }}
      >
        <div className='deck-stack-lg'>
          <span className='deck-marker'>Problem · 2 of 3</span>
          <h1 className='deck-h1'>Drift.</h1>
          <p className='deck-payoff'>
            <em>One prompt.</em> Different outputs.
          </p>
          <p className='deck-body-text'>
            Same prompt. Different day. Different output. Not wildly different —
            just enough that two teammates working from two runs are building
            two incompatible apps.
          </p>
          <ul className='deck-list' style={{ marginTop: 8 }}>
            <li data-marker='S·04'>
              <strong>Field names shift. </strong> Same concept, different names across runs.
            </li>
            <li data-marker='S·05'>
              <strong>Layout shifts.</strong> Sidebar reframes, slot picker
              recolors.
            </li>
            <li data-marker='S·06'>
              <strong>No single source.</strong> Whichever output you happened to
              build on becomes the law.
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%', minHeight: 0 }}>
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 0, flex: 1, minHeight: 0 }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>AI output · v1 · Monday</span>
              <span className='k'>FIG · 08A</span>
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
                src='/deck/vbs-drift-v1.png'
                alt='AI booking screen — first generation'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', padding: 0, flex: 1, minHeight: 0 }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>AI output · v2 · same BRD, different run</span>
              <span className='k'>FIG · 08B</span>
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
                src='/deck/vbs-drift-v2.png'
                alt='AI booking screen — second generation, same BRD, drifted layout and labels'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
