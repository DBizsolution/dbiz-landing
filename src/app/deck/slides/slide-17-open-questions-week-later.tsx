import { SlideShell, type SlideMeta } from '../slide-shell'

type Q = { mark: string; text: string; folded?: string }

const resolved: Q[] = [
  { mark: 'OQ·01', text: 'Can wharf actor delegate before unpack?', folded: 'Rule R·12' },
  { mark: 'OQ·02', text: 'Fee calc for split shipments?', folded: 'Rule R·19' },
  { mark: 'OQ·03', text: 'Auth model — SSO + magic link?', folded: 'Constraint C·04' },
  { mark: 'OQ·04', text: 'DO hierarchy: parent / child', folded: 'Entity E·03' },
  { mark: 'OQ·05', text: 'Slot booking — exclusive', folded: 'Rule R·22' },
  { mark: 'OQ·06', text: 'Trigger for "Ready"?', folded: 'Lifecycle L·02' },
  { mark: 'OQ·08', text: 'Audit granularity — stages only', folded: 'Constraint C·06' },
  { mark: 'OQ·11', text: 'Receipt format — PDF', folded: 'Constraint C·07' },
  { mark: 'OQ·12', text: 'Driver — desktop only for now', folded: 'Constraint C·08' },
]

const stillOpen: Q[] = [
  { mark: 'OQ·07', text: 'Notifications on every change or daily digest?' },
  { mark: 'OQ·09', text: 'Can a shipment have two consignees?' },
  { mark: 'OQ·10', text: 'Fee waiver — admin override or rule-based?' },
]

export function Slide17OpenQuestionsWeekLater({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Open questions · One week later
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Most resolved. <em>Each one folded into a rule.</em>
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
            gap: 24,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Resolved */}
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 28 }}>
            <div className='deck-box-head'>
              <span>Resolved · folded into the canvas</span>
              <span className='k'>{resolved.length} of 12</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: 10,
                marginTop: 12,
              }}
            >
              {resolved.map((q) => (
                <div
                  key={q.mark}
                  style={{
                    border: '1px solid var(--d-ink-4)',
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    opacity: 0.55,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className='deck-mono' style={{ fontSize: '0.58rem' }}>{q.mark}</span>
                    <span className='deck-mono-accent' style={{ fontSize: '0.58rem' }}>→ {q.folded}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--d-ink-2)', lineHeight: 1.35, textDecoration: 'line-through', textDecorationColor: 'var(--d-ink-3)' }}>
                    {q.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Still open */}
          <div className='deck-box deck-box-hot' style={{ display: 'flex', flexDirection: 'column', padding: 28 }}>
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>Still open</span>
              <span className='k'>{stillOpen.length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
              {stillOpen.map((q) => (
                <div
                  key={q.mark}
                  style={{
                    border: '1px solid var(--d-orange-hair)',
                    padding: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <span className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>{q.mark}</span>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--d-ink)', lineHeight: 1.45 }}>
                    {q.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='deck-mono'>
          The visible-until-resolved pattern is what kept the BAs on the same page as us.
        </div>
      </div>
    </SlideShell>
  )
}
