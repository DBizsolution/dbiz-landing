import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Field = { mark: string; name: string; type: string; req: boolean; choices?: string }

const fields: Field[] = [
  { mark: 'F·01', name: 'shipment_id', type: 'string', req: true },
  { mark: 'F·02', name: 'consignee', type: 'string', req: true },
  { mark: 'F·03', name: 'eta', type: 'date', req: true },
  { mark: 'F·04', name: 'status', type: 'enum', req: true, choices: '5 stages' },
  { mark: 'F·05', name: 'weight_kg', type: 'number', req: true },
  { mark: 'F·06', name: 'priority', type: 'enum', req: false, choices: 'std · exp' },
  { mark: 'F·07', name: 'driver_id', type: 'string', req: false },
]

export function Slide24DataDictionary({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 02 · Data dictionary
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One field list. <em>Designer and engineer read the same row.</em>
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
            gap: 32,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Dictionary table */}
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 24 }}>
            <div className='deck-box-head'>
              <span>Shipment · field list</span>
              <span className='k'>D · 01</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 1.2fr 0.8fr 0.6fr 1fr',
                gap: 0,
                marginTop: 12,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                letterSpacing: '0.12em',
                color: 'var(--d-ink-3)',
                textTransform: 'uppercase',
                paddingBottom: 8,
                borderBottom: '1px dashed var(--d-hair)',
              }}
            >
              <span>mark</span>
              <span>field</span>
              <span>type</span>
              <span>req</span>
              <span>choices</span>
            </div>
            {fields.map((f) => (
              <div
                key={f.mark}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '70px 1.2fr 0.8fr 0.6fr 1fr',
                  gap: 0,
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--d-hair)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  color: 'var(--d-ink)',
                }}
              >
                <span className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>{f.mark}</span>
                <span>{f.name}</span>
                <span style={{ color: 'var(--d-ink-2)' }}>{f.type}</span>
                <span style={{ color: f.req ? 'var(--d-accent)' : 'var(--d-ink-3)' }}>{f.req ? 'yes' : 'no'}</span>
                <span className='deck-mono' style={{ fontSize: '0.66rem', textTransform: 'none', letterSpacing: 0 }}>
                  {f.choices ?? '—'}
                </span>
              </div>
            ))}
          </div>

          {/* Card mockup */}
          <div className='deck-box deck-box-mute' style={{ display: 'flex', flexDirection: 'column', padding: 24 }}>
            <div className='deck-box-head'>
              <span>Shipment card · live UI</span>
              <span className='k'>UI · 02</span>
            </div>
            <div
              style={{
                marginTop: 16,
                border: '1px solid var(--d-hair-strong)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                background: 'rgba(255,255,255,0.02)',
                flex: 1,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className='deck-mono-accent' style={{ fontSize: '0.66rem' }}>SHIP-2026-0048</span>
                <span style={{ padding: '4px 10px', border: '1px solid var(--d-orange-hair)', color: 'var(--d-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Ready
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--d-ink)', letterSpacing: '-0.01em' }}>
                Acme Pty Ltd
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--d-ink-2)' }}>
                <FieldRow label='ETA' value='14 Apr 2026' />
                <FieldRow label='Weight' value='1,250 kg' />
                <FieldRow label='Priority' value='Express' />
                <FieldRow label='Driver' value='—' />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', color: 'var(--d-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                <Icon icon='ph:arrows-left-right-bold' width={14} />
                Each row links back to a row in the dictionary.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, paddingBottom: 8, borderBottom: '1px dashed var(--d-hair)' }}>
      <span className='deck-mono' style={{ fontSize: '0.62rem' }}>{label}</span>
      <span style={{ color: 'var(--d-ink)' }}>{value}</span>
    </div>
  )
}
