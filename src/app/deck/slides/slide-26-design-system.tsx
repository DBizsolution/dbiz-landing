import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const layers = [
  {
    n: '03',
    name: 'Registry',
    contrib: 'Project binding · theme tokens · light/dark',
    accent: true,
  },
  {
    n: '02',
    name: 'Components',
    contrib: 'Buttons · inputs · cards · tables · all unstyled',
  },
  {
    n: '01',
    name: 'Tokens',
    contrib: 'Colour · spacing · type · radii',
  },
]

export function Slide26DesignSystem({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 04 · Design system, layered
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Three layers. <em>The AI uses all three.</em>
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 64,
            flex: 1,
            minHeight: 0,
            alignItems: 'stretch',
          }}
        >
          {/* Layer stack */}
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 28 }}>
            <div className='deck-box-head'>
              <span>Design system spec</span>
              <span className='k'>DS · 00</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16, flex: 1 }}>
              {layers.map((l) => (
                <div
                  key={l.n}
                  style={{
                    border: `1px solid ${l.accent ? 'var(--d-orange-hair)' : 'var(--d-hair-strong)'}`,
                    background: l.accent ? 'var(--d-accent-bg)' : 'transparent',
                    padding: 20,
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gap: 20,
                    alignItems: 'center',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span className='deck-mono-accent' style={{ fontSize: '0.6rem' }}>Layer</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: 800, color: l.accent ? 'var(--d-accent)' : 'var(--d-ink)', letterSpacing: '-0.03em' }}>
                      {l.n}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--d-ink)' }}>
                      {l.name}
                    </div>
                    <div className='deck-mono' style={{ fontSize: '0.7rem', textTransform: 'none', letterSpacing: 0 }}>
                      {l.contrib}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annotated card */}
          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', padding: 28 }}>
            <div className='deck-box-head'>
              <span>One VBS card · annotated</span>
              <span className='k'>FIG · 26</span>
            </div>
            <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
              <div
                style={{
                  width: '100%',
                  border: '1px solid var(--d-hair-strong)',
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  background: 'rgba(255,255,255,0.02)',
                  position: 'relative',
                }}
              >
                <Tag corner='tl' label='L·01 · tokens (colour, type)' />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className='deck-mono-accent' style={{ fontSize: '0.66rem' }}>SHIP-2026-0048</span>
                  <span style={{ padding: '4px 10px', border: '1px solid var(--d-orange-hair)', color: 'var(--d-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    Ready
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--d-ink)' }}>
                  Acme Pty Ltd
                </div>
                <div className='deck-mono' style={{ fontSize: '0.7rem' }}>ETA · 14 Apr · 1,250 kg</div>
                <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                  <button
                    style={{
                      padding: '8px 16px',
                      background: 'var(--d-accent)',
                      border: '1px solid var(--d-accent)',
                      color: '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'default',
                    }}
                  >
                    Release
                  </button>
                  <button
                    style={{
                      padding: '8px 16px',
                      background: 'transparent',
                      border: '1px solid var(--d-hair-strong)',
                      color: 'var(--d-ink-2)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'default',
                    }}
                  >
                    Delegate
                  </button>
                  <Tag corner='br' label='L·02 · components (button)' />
                </div>
              </div>
            </div>
            <div className='deck-mono' style={{ marginTop: 16, fontSize: '0.66rem' }}>
              <Icon icon='ph:layers-bold' width={14} style={{ verticalAlign: 'middle', marginRight: 8 }} />
              Layer 03 (registry) flips this whole card light/dark with one token swap.
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

function Tag({ corner, label }: { corner: 'tl' | 'br'; label: string }) {
  const pos = corner === 'tl' ? { top: -10, left: 16 } : { bottom: -10, right: 16 }
  return (
    <span
      style={{
        position: 'absolute',
        padding: '3px 8px',
        background: 'var(--d-paper)',
        border: '1px solid var(--d-orange-hair)',
        color: 'var(--d-accent)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.58rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        ...pos,
      }}
    >
      {label}
    </span>
  )
}
