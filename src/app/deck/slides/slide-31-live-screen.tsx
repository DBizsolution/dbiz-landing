import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const shipments = [
  { id: 'SHIP-2026-0048', name: 'Acme Pty Ltd', stage: 'Ready', eta: '14 Apr', kg: '1,250' },
  { id: 'SHIP-2026-0049', name: 'Northwind', stage: 'Unpacked', eta: '14 Apr', kg: '880' },
  { id: 'SHIP-2026-0050', name: 'Globex Imports', stage: 'Wharf', eta: '15 Apr', kg: '2,400' },
  { id: 'SHIP-2026-0051', name: 'Initech', stage: 'Vessel', eta: '17 Apr', kg: '610' },
  { id: 'SHIP-2026-0052', name: 'Hooli Logistics', stage: 'Picked', eta: '12 Apr', kg: '1,100' },
]

const stageColor = (s: string) => (s === 'Ready' ? 'var(--d-accent)' : 'var(--d-ink-2)')

export function Slide31LiveScreen({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 06 · A live screen
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            This is <em>what shipped.</em>
          </h1>
        </div>

        {/* App chrome */}
        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
          {/* top bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid var(--d-hair-strong)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Icon icon='ph:cube-bold' width={20} color='var(--d-accent)' />
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--d-ink)' }}>VBS Pickup</span>
              <span className='deck-mono' style={{ fontSize: '0.62rem' }}>Wharf · ACFS Whitefield</span>
            </span>
            <span className='deck-mono' style={{ fontSize: '0.62rem' }}>Roni · operator</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', flex: 1, minHeight: 0 }}>
            {/* left nav */}
            <div style={{ borderRight: '1px solid var(--d-hair-strong)', padding: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <NavItem label='Dashboard' active />
              <NavItem label='Inbound' />
              <NavItem label='Unpack queue' />
              <NavItem label='Delegate' />
              <NavItem label='Audit log' />
            </div>

            {/* main */}
            <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--d-ink)', letterSpacing: '-0.02em' }}>
                  Inbound shipments
                </span>
                <span className='deck-mono' style={{ fontSize: '0.66rem' }}>updated 2m ago</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr 110px 80px 80px 90px',
                  gap: 0,
                  padding: '10px 0',
                  borderBottom: '1px dashed var(--d-hair)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  color: 'var(--d-ink-3)',
                  textTransform: 'uppercase',
                }}
              >
                <span>ID</span>
                <span>Consignee</span>
                <span>Stage</span>
                <span>ETA</span>
                <span>Weight</span>
                <span style={{ textAlign: 'right' }}>Action</span>
              </div>

              {shipments.map((s) => (
                <div
                  key={s.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr 110px 80px 80px 90px',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--d-hair)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    color: 'var(--d-ink)',
                  }}
                >
                  <span className='deck-mono-accent' style={{ fontSize: '0.66rem' }}>{s.id}</span>
                  <span style={{ fontWeight: 600 }}>{s.name}</span>
                  <span
                    style={{
                      padding: '4px 10px',
                      border: `1px solid ${s.stage === 'Ready' ? 'var(--d-orange-hair)' : 'var(--d-hair-strong)'}`,
                      background: s.stage === 'Ready' ? 'var(--d-accent-bg)' : 'transparent',
                      color: stageColor(s.stage),
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      width: 'fit-content',
                    }}
                  >
                    {s.stage}
                  </span>
                  <span className='deck-mono' style={{ fontSize: '0.7rem' }}>{s.eta}</span>
                  <span className='deck-mono' style={{ fontSize: '0.7rem' }}>{s.kg} kg</span>
                  <span style={{ textAlign: 'right' }}>
                    <Icon icon='ph:arrow-up-right-bold' width={14} color='var(--d-ink-3)' />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      style={{
        padding: '10px 12px',
        borderLeft: `2px solid ${active ? 'var(--d-accent)' : 'transparent'}`,
        background: active ? 'var(--d-accent-bg)' : 'transparent',
        color: active ? 'var(--d-accent)' : 'var(--d-ink-2)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.92rem',
        fontWeight: active ? 600 : 400,
      }}
    >
      {label}
    </div>
  )
}
