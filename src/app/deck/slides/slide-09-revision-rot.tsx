import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide09RevisionRot({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
          gap: 96,
          height: '100%',
          alignItems: 'center',
        }}
      >
        <div className='deck-stack-lg'>
          <span className='deck-marker'>Problem · 3 of 3</span>
          <h1 className='deck-h1'>Revision rot.</h1>
          <p className='deck-body-text'>
            BRD changes. Small change. You re-prompt. The new output is fine on
            its own — but it doesn&apos;t fit the app you already built around the
            first version.
          </p>
          <ul className='deck-list' style={{ marginTop: 8 }}>
            <li data-marker='S·07'>
              <strong>Re-build from scratch.</strong> Throw away yesterday&apos;s
              work.
            </li>
            <li data-marker='S·08'>
              <strong>Or stitch incompatible halves.</strong> Old code beside new
              code, both half-right.
            </li>
            <li data-marker='S·09'>
              <strong>Either way: telephone game.</strong> Every revision loses
              something.
            </li>
          </ul>
        </div>

        <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className='deck-box-head'>
            <span>App shell · before vs after</span>
            <span className='k'>FIG · 09</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className='deck-mockup' style={{ height: 220, flex: 1 }}>
              <div className='label'>
                <Icon icon='ph:image-square-bold' width={32} />
                <span>App built on v1</span>
              </div>
            </div>
            <Icon icon='ph:arrow-right-bold' width={28} color='var(--d-ink-3)' />
            <div className='deck-mockup' style={{ height: 220, flex: 1, borderColor: 'var(--d-orange-hair)' }}>
              <div className='label'>
                <Icon icon='ph:warning-bold' width={32} color='var(--d-accent)' />
                <span style={{ color: 'var(--d-accent)' }}>v2 dropped into same shell</span>
                <span className='k'>fields don&apos;t line up</span>
              </div>
            </div>
          </div>
          <div className='deck-rule'>
            <span className='line' />
            <span className='lbl'>after one BRD clarification</span>
            <span className='line' />
          </div>
          <div className='deck-mono' style={{ color: 'var(--d-accent)' }}>
            ↑ Visibly broken at field-name boundaries.
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
