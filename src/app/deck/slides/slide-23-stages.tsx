import { SlideShell, type SlideMeta } from '../slide-shell'

const stages = [
  { marker: 'L·01', name: 'On Vessel', desc: 'In transit · ETA known', icon: 'lucide:ship', tone: '#3b82f6', toneBg: 'rgba(59, 130, 246, 0.14)' },
  { marker: 'L·02', name: 'At Wharf', desc: 'Arrived · awaiting unload', icon: 'lucide:anchor', tone: 'var(--d-accent)', toneBg: 'var(--d-accent-bg)' },
  { marker: 'L·03', name: 'In Yard', desc: 'Storage · still packed', icon: 'lucide:box', tone: 'var(--d-ink-2)', toneBg: 'rgba(148, 163, 184, 0.14)' },
  { marker: 'L·04', name: 'Unpacked', desc: 'Cleared · ready for pickup', icon: 'lucide:package-check', tone: '#10b981', toneBg: 'rgba(16, 185, 129, 0.14)' },
  { marker: 'L·05', name: 'Picked', desc: 'Released to driver', icon: 'lucide:truck', tone: '#a855f7', toneBg: 'rgba(168, 85, 247, 0.14)' },
]

export function Slide23Stages({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 20 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 01 · Stages and lifecycle
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            From <em>canvas → artifact → screen.</em> No hallucination.
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 24,
            alignItems: 'end',
            marginBottom: -8,
          }}
        >
          <ColumnLabel kicker='Step 1' name='Consensus' detail='Life-cycle definition in the canvas' />
          <ColumnLabel kicker='Step 2' name='Artifact' detail='Structured spec the AI reads' />
          <ColumnLabel kicker='Step 3' name='Screen' detail='Final UI in the live app' />
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
            <div className='deck-mono' style={{ marginTop: 10, fontSize: '0.62rem' }}>
              The canonical lifecycle
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12, flex: 1 }}>
              {stages.map((s, i) => (
                <div
                  key={s.marker}
                  style={{
                    border: '1px solid var(--d-orange-hair-soft)',
                    padding: '7px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='deck-mono-accent' style={{ fontSize: '0.58rem' }}>{s.marker}</span>
                    <span className='deck-mono' style={{ fontSize: '0.56rem' }}>step {i + 1}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--d-ink)', letterSpacing: '-0.01em', lineHeight: 1.15 }}>
                    {s.name}
                  </div>
                  <div className='deck-mono' style={{ fontSize: '0.58rem', textTransform: 'none', letterSpacing: 0 }}>
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2 — Source file (intent-model.ts) */}
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 0, minHeight: 0, overflow: 'hidden' }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>Source file · intent-model.ts</span>
              <span className='k'>SRC · 01</span>
            </div>
            <div
              style={{
                flex: 1,
                minHeight: 0,
                background: '#1e1e2e',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <img
                src='/deck/intent-model-source.png'
                alt='intent-model.ts — lifecycle states and transitions: on_vessel, at_wharf, in_yard, unpacked, collected'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Panel 3 — Live screen */}
          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', padding: 0, minHeight: 0, overflow: 'hidden' }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>Live screen · same stages</span>
              <span className='k'>UI · 01</span>
            </div>
            <div
              style={{
                flex: 1,
                minHeight: 0,
                background: '#ffffff',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <img
                src='/deck/shipments-live.png'
                alt='VBS Pickup Portal — Shipments view with HBL milestones (At Wharf, On Vessel, In Yard, Unpacked)'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

function ColumnLabel({ kicker, name, detail }: { kicker: string; name: string; detail: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '0 4px' }}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--d-accent)',
        }}
      >
        {kicker}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: '1.4rem',
          color: 'var(--d-ink)',
          letterSpacing: '-0.015em',
          lineHeight: 1.05,
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.86rem',
          color: 'var(--d-ink-2)',
          lineHeight: 1.35,
        }}
      >
        {detail}
      </span>
    </div>
  )
}
