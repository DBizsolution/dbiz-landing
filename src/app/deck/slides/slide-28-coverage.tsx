import { SlideShell, type SlideMeta } from '../slide-shell'

type Coverage = { name: string; required: number; built: number }

const coverage: Coverage[] = [
  { name: 'Flows', required: 7, built: 5 },
  { name: 'Screens', required: 17, built: 13 },
  { name: 'Business rules', required: 23, built: 21 },
  { name: 'Lifecycle stages', required: 5, built: 5 },
  { name: 'Data fields', required: 28, built: 26 },
  { name: 'Validation rules', required: 14, built: 11 },
]

export function Slide28Coverage({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 04 · Coverage tracker
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            What the canvas requires <em>vs. what the app actually has.</em>
          </h1>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 32, display: 'flex', flexDirection: 'column' }}>
          <div className='deck-box-head'>
            <span>VBS · coverage</span>
            <span className='k'>computed nightly</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 24, flex: 1 }}>
            {coverage.map((c, i) => {
              const pct = Math.round((c.built / c.required) * 100)
              return (
                <div key={c.name} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 100px', gap: 24, alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span className='deck-mono-accent' style={{ fontSize: '0.6rem' }}>{`COV·${String(i + 1).padStart(2, '0')}`}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--d-ink)' }}>
                      {c.name}
                    </span>
                  </div>
                  <div style={{ position: 'relative', height: 14, border: '1px solid var(--d-hair)' }}>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: `${pct}%`,
                        background: pct >= 90 ? 'var(--d-accent)' : 'var(--d-orange-hair)',
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'right' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 800, color: pct >= 90 ? 'var(--d-accent)' : 'var(--d-ink)', letterSpacing: '-0.02em' }}>
                      {pct}%
                    </span>
                    <span className='deck-mono' style={{ fontSize: '0.6rem' }}>{c.built} / {c.required}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='deck-mono'>
          Built · stale · missing — visible at a glance, every day, for everyone.
        </div>
      </div>
    </SlideShell>
  )
}
