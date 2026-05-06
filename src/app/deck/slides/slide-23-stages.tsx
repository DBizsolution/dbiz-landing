import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const stages = [
  { marker: 'L·01', name: 'Vessel', desc: 'In transit · ETA known' },
  { marker: 'L·02', name: 'Wharf', desc: 'Arrived · awaiting unpack' },
  { marker: 'L·03', name: 'Unpacked', desc: 'Cleared · in storage' },
  { marker: 'L·04', name: 'Ready', desc: 'Available for pickup' },
  { marker: 'L·05', name: 'Picked', desc: 'Released to driver' },
]

export function Slide23Stages({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 01 · From states &amp; lifecycles to design &amp; dev specs
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            From <em>intent model</em> to design and dev specs.
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            One canonical lifecycle, written in the canvas. The designer reads
            it. The engineer reads it. Same source, three views.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 24,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Panel 1 — Canvas artifact */}
          <div
            className='deck-box deck-box-hot'
            style={{ display: 'flex', flexDirection: 'column', padding: 24 }}
          >
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>DBiz Canvas · structured TypeScript</span>
              <span className='k'>L · 00</span>
            </div>
            <div className='deck-mono' style={{ marginTop: 12, fontSize: '0.66rem' }}>
              The canonical lifecycle
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16, flex: 1 }}>
              {stages.map((s, i) => (
                <div
                  key={s.marker}
                  style={{
                    border: '1px solid var(--d-orange-hair-soft)',
                    padding: '10px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>{s.marker}</span>
                    <span className='deck-mono' style={{ fontSize: '0.6rem' }}>step {i + 1}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--d-ink)', letterSpacing: '-0.01em' }}>
                    {s.name}
                  </div>
                  <div className='deck-mono' style={{ fontSize: '0.62rem', textTransform: 'none', letterSpacing: 0 }}>
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2 — Source file (screenshot placeholder) */}
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 24 }}>
            <div className='deck-box-head'>
              <span>Source file</span>
              <span className='k'>SRC · 01</span>
            </div>
            <div className='deck-mono' style={{ marginTop: 12, fontSize: '0.66rem' }}>
              intent-model.ts · in repo
            </div>
            <div className='deck-mockup' style={{ flex: 1, minHeight: 320, marginTop: 16 }}>
              <div className='label'>
                <Icon icon='lucide:image' width={36} />
                <span>[ SCREENSHOT · intent-model.md source ]</span>
                <span className='k'>add manually</span>
              </div>
            </div>
          </div>

          {/* Panel 3 — Live screen */}
          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', padding: 24 }}>
            <div className='deck-box-head'>
              <span>Live screen · same stages</span>
              <span className='k'>UI · 01</span>
            </div>
            <div className='deck-mono' style={{ marginTop: 12, fontSize: '0.66rem' }}>
              Shipment card on /wharf/dashboard
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16, flex: 1 }}>
              {stages.map((s, i) => (
                <div
                  key={s.marker}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '110px 1fr',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 12px',
                    border: '1px dashed var(--d-hair)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px 10px',
                      border: `1px solid ${i === 3 ? 'var(--d-orange-hair)' : 'var(--d-hair-strong)'}`,
                      background: i === 3 ? 'var(--d-accent-bg)' : 'transparent',
                      color: i === 3 ? 'var(--d-accent)' : 'var(--d-ink-2)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      width: 'fit-content',
                    }}
                  >
                    {s.name}
                  </span>
                  <span className='deck-mono' style={{ fontSize: '0.62rem' }}>SHIP-2026-{String(i + 47).padStart(4, '0')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
