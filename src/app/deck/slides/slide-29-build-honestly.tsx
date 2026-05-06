import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const events = [
  { date: '2026-03-21', change: 'BRD revision · split shipments rule', updates: 'Rule R·19, Entity E·03', regen: '4 screens' },
  { date: '2026-03-26', change: 'BRD revision · auth model clarified', updates: 'Constraint C·04', regen: '2 screens' },
  { date: '2026-04-02', change: 'BRD revision · slot booking exclusivity', updates: 'Rule R·22', regen: '3 screens' },
]

export function Slide29BuildHonestly({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 05 · The build, honestly
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            The build was messy. <em>The source stayed put.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            Things broke. AI got things wrong. Every time, we went back to the
            canvas, fixed the root cause there, and regenerated forward. The mess
            didn&apos;t pile up across phases.
          </p>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 28, display: 'flex', flexDirection: 'column' }}>
          <div className='deck-box-head'>
            <span>BRD revisions during build · 3 of them</span>
            <span className='k'>TL · 01</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20, flex: 1 }}>
            {events.map((e, i) => (
              <div key={e.date} style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto 1fr auto 1fr auto 120px', gap: 14, alignItems: 'stretch' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4 }}>
                  <span className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>EV·{String(i + 1).padStart(2, '0')}</span>
                  <span className='deck-mono' style={{ fontSize: '0.72rem' }}>{e.date}</span>
                </div>

                <Step kind='change' title='BRD change' detail={e.change} />
                <Arrow />
                <Step kind='canvas' title='Canvas update' detail={e.updates} />
                <Arrow />
                <Step kind='regen' title='Regenerate' detail={e.regen} />
                <Arrow />
                <Step kind='ship' title='Ship' detail='same day' accent />
              </div>
            ))}
          </div>

          {/* Effort timeline */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr auto 1fr auto 1fr auto 120px',
              gap: 14,
              marginTop: 22,
              paddingTop: 18,
              borderTop: '1px dashed var(--d-hair)',
              alignItems: 'center',
            }}
          >
            <span />
            <div
              style={{
                gridColumn: '2 / 7',
                padding: '10px 16px',
                border: '1px solid var(--d-hair-strong)',
                background: 'rgba(255,255,255,0.025)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--d-ink-2)',
                textAlign: 'center',
              }}
            >
              2 weeks · human effort
            </div>
            <span />
            <div
              style={{
                gridColumn: '8 / 9',
                padding: '10px 16px',
                border: '1px solid var(--d-orange-hair)',
                background: 'var(--d-accent-bg)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--d-accent)',
                textAlign: 'center',
              }}
            >
              3 weeks · shipping
            </div>
          </div>
        </div>

        <div className='deck-mono'>
          We shipped in 3 weeks because there was always a stable place to come back to.
        </div>
      </div>
    </SlideShell>
  )
}

function Step({ kind, title, detail, accent }: { kind: string; title: string; detail: string; accent?: boolean }) {
  return (
    <div
      style={{
        border: `1px solid ${accent ? 'var(--d-orange-hair)' : 'var(--d-hair-strong)'}`,
        background: accent ? 'var(--d-accent-bg)' : 'transparent',
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        minWidth: 0,
      }}
    >
      <span className='deck-mono' style={{ fontSize: '0.6rem', color: accent ? 'var(--d-accent)' : undefined }}>{kind}</span>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--d-ink)', lineHeight: 1.3 }}>
        {title}
      </span>
      <span className='deck-mono' style={{ fontSize: '0.62rem', textTransform: 'none', letterSpacing: 0 }}>{detail}</span>
    </div>
  )
}

function Arrow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon icon='lucide:arrow-right' width={18} color='var(--d-ink-3)' />
    </div>
  )
}
