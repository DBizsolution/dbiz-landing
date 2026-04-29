import { SlideShell, type SlideMeta } from '../slide-shell'

const expected = [
  { q: 'Could we have shipped without the canvas?', a: 'Yes — but rebuilding screens every BRD change.' },
  { q: 'How long did the canvas take to build?', a: 'About a week and a half, in parallel with discovery.' },
  { q: 'Does this work for small projects?', a: 'Probably overkill below ~3 actors and ~3 stages.' },
  { q: 'Can BAs really write the canvas themselves?', a: 'Not yet. That’s the next step.' },
  { q: 'What didn’t the canvas catch?', a: 'Visual density · real-data overflow on the dashboard.' },
]

export function Slide33QA({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Q&amp;A · 5–7 min
          </span>
          <h1 className='deck-display' style={{ fontSize: '5.4rem' }}>
            Questions <em>?</em>
          </h1>
          <p className='deck-lede' style={{ maxWidth: 1300 }}>
            Drop them in chat as we close, or unmute now.
          </p>
        </div>

        <div className='deck-box' style={{ padding: 28, marginTop: 32 }}>
          <div className='deck-box-head'>
            <span>Anticipated questions</span>
            <span className='k'>QA · 01</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 18,
              marginTop: 16,
            }}
          >
            {expected.map((e, i) => (
              <div
                key={e.q}
                style={{
                  border: '1px dashed var(--d-hair)',
                  padding: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                <span className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>Q · {String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600, color: 'var(--d-ink)' }}>
                  {e.q}
                </span>
                <span className='deck-mono' style={{ fontSize: '0.66rem', textTransform: 'none', letterSpacing: 0 }}>
                  {e.a}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 32 }}>
          <div className='deck-mono'>
            Thanks. Catch me after if you&apos;d rather not ask in front of everyone.
          </div>
          <div className='deck-mono-accent'>End · sheet 33 / 33</div>
        </div>
      </div>
    </SlideShell>
  )
}
