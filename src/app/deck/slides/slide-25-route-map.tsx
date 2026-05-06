import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Actor = {
  marker: string
  name: string
  role: string
  pages: string[]
}

const actors: Actor[] = [
  {
    marker: 'A·01',
    name: 'Wharf operator',
    role: 'Onboards shipments',
    pages: ['Dashboard', 'Inbound shipments', 'Unpack queue', 'Delegate to driver', 'Audit log'],
  },
  {
    marker: 'A·02',
    name: 'Driver',
    role: 'Picks up shipments',
    pages: ['My pickups', 'Pickup detail', 'Confirm release'],
  },
  {
    marker: 'A·03',
    name: 'Consignee',
    role: 'Books pickup slots',
    pages: ['Browse', 'Book pickup', 'My bookings', 'Receipts'],
  },
  {
    marker: 'A·04',
    name: 'ACFS admin',
    role: 'Oversees operations',
    pages: ['Coverage', 'Fee config', 'Slot config', 'User mgmt', 'Reports'],
  },
]

export function Slide25RouteMap({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 03 · How the app is laid out
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            The actor list <em>is the navigation.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            Each actor gets their own area. Each thing they do becomes a page.
            The layout falls out without anyone arguing about it in a room.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 20,
            flex: 1,
            minHeight: 0,
          }}
        >
          {actors.map((a) => (
            <div key={a.marker} className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 24 }}>
              <div className='deck-box-head'>
                <span>{a.name}</span>
                <span className='k'>{a.marker}</span>
              </div>
              <div className='deck-mono' style={{ marginTop: 12, fontSize: '0.66rem' }}>{a.role}</div>
              <div className='deck-rule' style={{ margin: '14px 0' }}>
                <span className='line' />
                <span className='lbl'>routes</span>
                <span className='line' />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {a.pages.map((p, i) => (
                  <div
                    key={p}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr auto',
                      alignItems: 'center',
                      gap: 12,
                      padding: '11px 14px',
                      border: '1px dashed var(--d-hair)',
                    }}
                  >
                    <Icon icon='lucide:file' width={16} color='var(--d-accent)' />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--d-ink)' }}>{p}</span>
                    <span className='deck-mono' style={{ fontSize: '0.66rem' }}>p{String(i + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='deck-mono' style={{ fontSize: '1rem' }}>17 routes total · grouped by actor · derived from the canvas</div>
      </div>
    </SlideShell>
  )
}
