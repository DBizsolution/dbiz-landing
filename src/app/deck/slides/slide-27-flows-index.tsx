import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Route = { actor: string; path: string; status: 'built' | 'wip' | 'pending' }

const routes: Route[] = [
  { actor: 'Wharf', path: '/wharf/dashboard', status: 'built' },
  { actor: 'Wharf', path: '/wharf/inbound', status: 'built' },
  { actor: 'Wharf', path: '/wharf/unpack', status: 'built' },
  { actor: 'Wharf', path: '/wharf/delegate', status: 'wip' },
  { actor: 'Wharf', path: '/wharf/audit', status: 'pending' },
  { actor: 'Driver', path: '/driver/pickups', status: 'built' },
  { actor: 'Driver', path: '/driver/pickup/:id', status: 'built' },
  { actor: 'Driver', path: '/driver/confirm', status: 'wip' },
  { actor: 'Consignee', path: '/book/browse', status: 'built' },
  { actor: 'Consignee', path: '/book/new', status: 'built' },
  { actor: 'Consignee', path: '/book/mine', status: 'built' },
  { actor: 'Admin', path: '/admin/coverage', status: 'built' },
  { actor: 'Admin', path: '/admin/fees', status: 'pending' },
]

const statusMeta = {
  built: { color: 'var(--d-accent)', label: 'BUILT' },
  wip: { color: 'rgba(255,255,255,0.55)', label: 'WIP' },
  pending: { color: 'var(--d-ink-3)', label: 'PENDING' },
} as const

export function Slide27FlowsIndex({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 04 · The handoff page
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One page in dev tools. <em>Engineer&apos;s first stop.</em>
          </h1>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 28, display: 'flex', flexDirection: 'column' }}>
          <div className='deck-box-head'>
            <span>/dev/flows</span>
            <span className='k'>FIG · 27</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 120px 90px',
              padding: '12px 0',
              borderBottom: '1px dashed var(--d-hair)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              letterSpacing: '0.14em',
              color: 'var(--d-ink-3)',
              textTransform: 'uppercase',
              marginTop: 14,
            }}
          >
            <span>Actor</span>
            <span>Route</span>
            <span>Status</span>
            <span>Open</span>
          </div>
          <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {routes.map((r) => {
              const m = statusMeta[r.status]
              return (
                <div
                  key={r.path}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr 120px 90px',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--d-hair)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    color: 'var(--d-ink)',
                  }}
                >
                  <span className='deck-mono' style={{ fontSize: '0.66rem' }}>{r.actor}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: 'var(--d-ink)' }}>{r.path}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 8, height: 8, background: m.color }} />
                    <span className='deck-mono' style={{ fontSize: '0.62rem', color: m.color }}>{m.label}</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: 'var(--d-ink-3)' }}>
                    <Icon icon='ph:arrow-up-right-bold' width={14} />
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className='deck-mono'>
          Engineer reads canvas → looks at design system → checks this list → builds the next page.
        </div>
      </div>
    </SlideShell>
  )
}
