import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide08Drift({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)',
          gap: 96,
          height: '100%',
          alignItems: 'center',
        }}
      >
        <div className='deck-stack-lg'>
          <span className='deck-marker'>Problem · 2 of 3</span>
          <h1 className='deck-h1'>Drift.</h1>
          <p className='deck-body-text'>
            Same prompt. Different day. Different output. Not wildly different —
            just enough that two teammates working from two runs are building
            two incompatible apps.
          </p>
          <ul className='deck-list' style={{ marginTop: 8 }}>
            <li data-marker='S·04'>
              <strong>Field names shift.</strong> &quot;Customer ID&quot; in v1,
              &quot;Account&quot; in v2.
            </li>
            <li data-marker='S·05'>
              <strong>State flow shifts.</strong> One step appears, another
              disappears, an order changes.
            </li>
            <li data-marker='S·06'>
              <strong>No single source.</strong> Whichever output you happened to
              build on becomes the law.
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className='deck-box'>
            <div className='deck-box-head'>
              <span>AI output · v1 · Monday</span>
              <span className='k'>FIG · 08A</span>
            </div>
            <div className='deck-mockup' style={{ height: 260 }}>
              <div className='label'>
                <Icon icon='ph:image-square-bold' width={36} />
                <span>Same prompt, run on Monday</span>
              </div>
            </div>
          </div>

          <div className='deck-box deck-box-mute'>
            <div className='deck-box-head'>
              <span>AI output · v2 · Tuesday</span>
              <span className='k'>FIG · 08B</span>
            </div>
            <div className='deck-mockup' style={{ height: 260 }}>
              <div className='label'>
                <Icon icon='ph:image-square-bold' width={36} />
                <span>Same prompt, run on Tuesday</span>
                <span className='k'>diff: 6 fields renamed · 2 steps reordered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
