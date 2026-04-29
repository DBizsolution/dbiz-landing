import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide22WorkingRepo({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 3 · Phase 0
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1400 }}>
            The working <em>repository.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            One folder holds two kinds of specs. The AI reads from this single
            place. That&apos;s what keeps the build coherent when we regenerate.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr auto 0.9fr', alignItems: 'stretch', gap: 0, marginTop: 40 }}>
          {/* Working repository box (left) */}
          <div className='deck-box' style={{ padding: 36 }}>
            <div className='deck-box-head'>
              <span>Working repository</span>
              <span className='k'>R·00</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 16 }}>
              {/* Canvas specs */}
              <div className='deck-box deck-box-hot' style={{ padding: 24 }}>
                <div className='deck-box-head'>
                  <span style={{ color: 'var(--d-accent)' }}>Canvas specs</span>
                  <span className='k'>R·01</span>
                </div>
                <ul className='deck-list' style={{ gap: 10 }}>
                  <li data-marker='.md'>intent-model.md</li>
                  <li data-marker='.json'>actors.json</li>
                  <li data-marker='.json'>entities.json</li>
                  <li data-marker='.md'>journeys.md</li>
                  <li data-marker='.md'>rules.md</li>
                </ul>
              </div>

              {/* Design system specs (layered) */}
              <div className='deck-box' style={{ padding: 24 }}>
                <div className='deck-box-head'>
                  <span>Design system specs</span>
                  <span className='k'>R·02</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                  <div style={{ border: '1px solid var(--d-orange-hair-soft)', padding: '14px 16px', background: 'var(--d-accent-bg)' }}>
                    <div className='deck-mono-accent' style={{ fontSize: '0.74rem' }}>Layer 03 · Registry</div>
                    <div className='deck-body-text' style={{ fontSize: '1.1rem', marginTop: 6, color: 'var(--d-ink)' }}>Project binding · theming</div>
                  </div>
                  <div style={{ border: '1px solid var(--d-hair-strong)', padding: '14px 16px' }}>
                    <div className='deck-mono' style={{ fontSize: '0.74rem' }}>Layer 02 · Components</div>
                    <div className='deck-body-text' style={{ fontSize: '1.1rem', marginTop: 6, color: 'var(--d-ink)' }}>Buttons · inputs · tables · cards</div>
                  </div>
                  <div style={{ border: '1px solid var(--d-hair)', padding: '14px 16px' }}>
                    <div className='deck-mono' style={{ fontSize: '0.74rem' }}>Layer 01 · Tokens</div>
                    <div className='deck-body-text' style={{ fontSize: '1.1rem', marginTop: 6, color: 'var(--d-ink-2)' }}>Colour · spacing · type · radii</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}>
            <Icon icon='ph:arrow-right-bold' width={36} color='var(--d-ink-3)' />
          </div>

          {/* AI builder box (right) */}
          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 32, gap: 20 }}>
            <Icon icon='ph:sparkle-bold' width={48} color='var(--d-accent)' />
            <div style={{ textAlign: 'center' }}>
              <div className='deck-h3'>AI build</div>
              <div className='deck-mono' style={{ marginTop: 10 }}>Cursor · Claude · Lovable</div>
            </div>
            <div className='deck-divider-dashed' style={{ width: '100%' }} />
            <div className='deck-mono' style={{ textAlign: 'center', maxWidth: 280, lineHeight: 1.6 }}>
              Reads canvas specs <br />
              <span style={{ color: 'var(--d-accent)' }}>+</span> design system <br />
              from one place
            </div>
          </div>
        </div>

        <div className='deck-mono' style={{ marginTop: 24 }}>
          One repo. Two kinds of spec. The AI reads from one place — that&apos;s the rule.
        </div>
      </div>
    </SlideShell>
  )
}
