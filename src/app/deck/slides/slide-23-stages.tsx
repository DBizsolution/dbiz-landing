import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const stages = [
  { marker: 'L·01', name: 'Vessel', desc: 'Container in transit · ETA known' },
  { marker: 'L·02', name: 'Wharf', desc: 'Arrived · awaiting unpack' },
  { marker: 'L·03', name: 'Unpacked', desc: 'Cleared customs · in storage' },
  { marker: 'L·04', name: 'Ready', desc: 'Available for pickup' },
  { marker: 'L·05', name: 'Picked', desc: 'Released to driver' },
]

export function Slide23Stages({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 01 · Stages and lifecycle
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            A shipment lives <em>five stages.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            Written down in the canvas before any screen got designed. Once
            stages exist, the designer knows badge colour, label, icon. The
            engineer knows transitions. Same list, both sides.
          </p>
        </div>

        {/* Lifecycle */}
        <div className='deck-box' style={{ padding: 28 }}>
          <div className='deck-box-head'>
            <span>Lifecycle · canonical</span>
            <span className='k'>L · 00</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr auto 1fr',
              gap: 0,
              alignItems: 'stretch',
              marginTop: 16,
            }}
          >
            {stages.flatMap((s, i) => {
              const cell = (
                <div
                  key={s.marker}
                  style={{
                    border: '1px solid var(--d-hair-strong)',
                    padding: 18,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                    minWidth: 0,
                  }}
                >
                  <span className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>{s.marker}</span>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--d-ink)', letterSpacing: '-0.02em' }}>
                    {s.name}
                  </div>
                  <div className='deck-mono' style={{ fontSize: '0.66rem', textTransform: 'none', letterSpacing: 0 }}>
                    {s.desc}
                  </div>
                </div>
              )
              if (i === stages.length - 1) return [cell]
              const arrow = (
                <div key={`arr-${i}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 12px' }}>
                  <Icon icon='ph:arrow-right-bold' width={22} color='var(--d-ink-3)' />
                </div>
              )
              return [cell, arrow]
            })}
          </div>
        </div>

        {/* Live UI badges */}
        <div className='deck-box deck-box-mute' style={{ padding: 28 }}>
          <div className='deck-box-head'>
            <span>Same stages, on a live shipment card</span>
            <span className='k'>UI · 01</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
            {stages.map((s, i) => (
              <div
                key={s.marker}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr auto',
                  alignItems: 'center',
                  gap: 24,
                  padding: '10px 16px',
                  border: '1px dashed var(--d-hair)',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px 14px',
                    border: `1px solid ${i === 3 ? 'var(--d-orange-hair)' : 'var(--d-hair-strong)'}`,
                    background: i === 3 ? 'var(--d-accent-bg)' : 'transparent',
                    color: i === 3 ? 'var(--d-accent)' : 'var(--d-ink-2)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    width: 'fit-content',
                  }}
                >
                  {s.name}
                </span>
                <span className='deck-mono' style={{ fontSize: '0.7rem' }}>SHIP-2026-{String(i + 47).padStart(4, '0')}</span>
                <span className='deck-mono' style={{ fontSize: '0.7rem' }}>updated 2h ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
