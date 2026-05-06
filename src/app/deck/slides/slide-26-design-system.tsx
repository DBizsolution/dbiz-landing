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

          {/* Styleguide screenshot */}
          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', padding: 0, minHeight: 0 }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Component showcase · live
                <a
                  href='https://vbsportal.dbizapps.ai/dev/components'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    color: 'var(--d-accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  open
                  <Icon icon='lucide:arrow-up-right' width={11} />
                </a>
              </span>
              <span className='k'>FIG · 26</span>
            </div>
            <a
              href='https://vbsportal.dbizapps.ai/dev/components'
              target='_blank'
              rel='noopener noreferrer'
              className='deck-mockup'
              style={{
                flex: 1,
                minHeight: 0,
                padding: 0,
                overflow: 'hidden',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                display: 'flex',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <img
                src='/deck/comp-showcase.png'
                alt='VBS Portal — live component showcase, primitives and domain components'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
