'use client'

import { useState, type CSSProperties } from 'react'
import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const compCards = [
  { src: '/deck/comp-showcase-1.png', alt: 'Button — primary, secondary, outline, ghost variants' },
  { src: '/deck/comp-showcase-2.png', alt: 'Input — text, password, email with validation states' },
  { src: '/deck/comp-showcase-3.png', alt: 'Card — header, body, footer composition' },
  { src: '/deck/comp-showcase-4.png', alt: 'Status pill — booked, pending, processed, collected' },
  { src: '/deck/comp-showcase-5.png', alt: 'Badge — default, secondary, destructive, outline, with icons' },
]

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
  const [order, setOrder] = useState(0)
  const cycle = () => setOrder((o) => (o + 1) % compCards.length)

  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 28 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 04a · Design system, layered
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Three layers. <em>The AI uses all three.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            One breath each — tokens, components, registry. There&rsquo;s a structure
            to the design side too, separate from the canvas. Not going into the
            details today; live showcase next.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 40fr) minmax(0, 60fr)',
            gap: 56,
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
            <div
              className='deck-comp-carousel'
              role='button'
              tabIndex={-1}
              onClick={cycle}
              aria-label='Cycle component showcase'
            >
              {compCards.map((card, originalIdx) => {
                const i = (originalIdx - order + compCards.length) % compCards.length
                const rise = -i * 64
                const depth = -i * 170
                const layer = compCards.length - i
                return (
                  <div
                    key={card.src}
                    className='deck-comp-card'
                    style={{
                      ['--rise' as string]: `${rise}px`,
                      ['--depth' as string]: `${depth}px`,
                      ['--layer' as string]: `${layer}`,
                    } as CSSProperties}
                  >
                    <img src={card.src} alt={card.alt} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
