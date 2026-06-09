import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide22WorkingRepo({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 0 · Repository to build
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            From canvas to <em>working repository.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1400 }}>
            Canvas specs and the UI kit go in as a pair — one canvas spec, one
            design-system spec. The AI reads from this one place. The
            design-system side has its own structure; we&rsquo;re not going into it
            today.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.95fr auto 1.5fr auto 0.9fr',
            alignItems: 'stretch',
            gap: 0,
            marginTop: 32,
          }}
        >
          {/* DBiz Canvas (input) */}
          <div className='deck-box deck-box-hot' style={{ display: 'flex', flexDirection: 'column', padding: 28, justifyContent: 'space-between' }}>
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>DBiz Canvas</span>
              <span className='k'>FIN</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '24px 0 16px' }}>
              <Icon icon='lucide:file-code-2' width={72} color='var(--d-accent)' strokeWidth={3} />
              <div className='deck-mono-accent' style={{ fontSize: '0.7rem', textAlign: 'center' }}>
                Finalised intent model
              </div>
              <div
                className='deck-mono'
                style={{
                  fontSize: '0.62rem',
                  textAlign: 'center',
                  color: 'var(--d-ink-2)',
                  textTransform: 'none',
                  letterSpacing: 0,
                }}
              >
                (collaboration + artifacts)
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
              <span className='deck-mono' style={{ fontSize: '0.62rem' }}>.ts</span>
              <span className='deck-mono' style={{ fontSize: '0.62rem' }}>.md</span>
            </div>
          </div>

          {/* Arrow 1 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
            <Icon icon='lucide:arrow-right' width={32} color='var(--d-accent)' strokeWidth={3} />
          </div>

          {/* Working repository */}
          <div className='deck-box' style={{ padding: 28 }}>
            <div className='deck-box-head'>
              <span>Working repository</span>
              <span className='k'>R·00</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 14 }}>
              <div className='deck-box deck-box-hot' style={{ padding: 18 }}>
                <div className='deck-box-head' style={{ marginBottom: 10, paddingBottom: 8 }}>
                  <span style={{ color: 'var(--d-accent)' }}>Canvas specs</span>
                  <span className='k'>R·01</span>
                </div>
                <ul className='deck-list' style={{ gap: 8 }}>
                  <li data-marker='.ts' style={{ fontSize: '0.95rem' }}>intent-model.ts</li>
                  <li data-marker='.ts' style={{ fontSize: '0.95rem' }}>actors.ts</li>
                  <li data-marker='.ts' style={{ fontSize: '0.95rem' }}>entities.ts</li>
                  <li data-marker='.md' style={{ fontSize: '0.95rem' }}>journeys.md</li>
                  <li data-marker='.md' style={{ fontSize: '0.95rem' }}>rules.md</li>
                </ul>
              </div>

              <div className='deck-box' style={{ padding: 18 }}>
                <div className='deck-box-head' style={{ marginBottom: 10, paddingBottom: 8 }}>
                  <span>Design system specs</span>
                  <span className='k'>R·02</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
                  <div style={{ border: '1px solid var(--d-hair-strong)', padding: '10px 12px' }}>
                    <div className='deck-mono' style={{ fontSize: '0.66rem' }}>Layer 03 · Registry</div>
                    <div className='deck-body-text' style={{ fontSize: '0.95rem', marginTop: 4, color: 'var(--d-ink-2)' }}>
                      Theme tokens · light/dark · project binding
                    </div>
                  </div>
                  <div style={{ border: '1px solid var(--d-hair-strong)', padding: '10px 12px' }}>
                    <div className='deck-mono' style={{ fontSize: '0.66rem' }}>Layer 02 · Components</div>
                    <div className='deck-body-text' style={{ fontSize: '0.95rem', marginTop: 4, color: 'var(--d-ink-2)' }}>
                      Buttons · inputs · tables · cards
                    </div>
                  </div>
                  <div style={{ border: '1px solid var(--d-hair-strong)', padding: '10px 12px' }}>
                    <div className='deck-mono' style={{ fontSize: '0.66rem' }}>Layer 01 · Tokens</div>
                    <div className='deck-body-text' style={{ fontSize: '0.95rem', marginTop: 4, color: 'var(--d-ink-2)' }}>
                      Colour · spacing · type · radii
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow 2 */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
            <Icon icon='lucide:arrow-right' width={32} color='var(--d-ink-3)' strokeWidth={3} />
          </div>

          {/* AI build */}
          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: 28, gap: 16 }}>
            <div className='deck-box-head' style={{ width: '100%' }}>
              <span>AI build</span>
              <span className='k'>BLD</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <Icon icon='lucide:sparkles' width={56} color='var(--d-accent)' strokeWidth={3} />
              <div className='deck-mono' style={{ fontSize: '0.66rem', textAlign: 'center' }}>
                Cursor · Claude · Codex · Gemini
              </div>
            </div>
            <div className='deck-mono' style={{ fontSize: '0.62rem', textAlign: 'center', lineHeight: 1.5 }}>
              Reads canvas + design system from one place
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
