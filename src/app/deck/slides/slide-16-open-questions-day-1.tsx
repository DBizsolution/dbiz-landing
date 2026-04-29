import { SlideShell, type SlideMeta } from '../slide-shell'

type Q = { mark: string; status: 'open' | 'pending' | 'answered'; text: string; owner?: string }

const questions: Q[] = [
  { mark: 'OQ·01', status: 'open', text: 'Can the wharf actor delegate to a driver before unpack?', owner: 'Roni' },
  { mark: 'OQ·02', status: 'pending', text: 'How is fee calculated for split shipments?', owner: 'Client' },
  { mark: 'OQ·03', status: 'open', text: 'Auth model: SSO, magic link, or both?', owner: 'Roni' },
  { mark: 'OQ·04', status: 'open', text: 'DO hierarchy: parent / child or flat?', owner: 'Client' },
  { mark: 'OQ·05', status: 'pending', text: 'Slot booking — exclusive or contested?', owner: 'Roni' },
  { mark: 'OQ·06', status: 'open', text: 'What triggers a status change to "Ready"?' },
  { mark: 'OQ·07', status: 'open', text: 'Notifications on every state change or daily digest?' },
  { mark: 'OQ·08', status: 'pending', text: 'Audit trail granularity — every action or stages only?' },
  { mark: 'OQ·09', status: 'open', text: 'Can a single shipment have two consignees?' },
  { mark: 'OQ·10', status: 'open', text: 'Fee waiver — admin override or rule-based?' },
  { mark: 'OQ·11', status: 'pending', text: 'Print receipt format — PDF or web?' },
  { mark: 'OQ·12', status: 'open', text: 'Driver mobile or desktop only?' },
]

export function Slide16OpenQuestionsDay1({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Open questions · Day 1
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Anything we couldn&apos;t answer <em>became a card.</em>
          </h1>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: 28 }}>
          <div className='deck-box-head'>
            <span>VBS · Open questions panel</span>
            <span className='k'>{questions.length} cards · 0 resolved</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 12,
              marginTop: 14,
              flex: 1,
              minHeight: 0,
              overflow: 'hidden',
            }}
          >
            {questions.map((q) => (
              <QuestionCard key={q.mark} q={q} />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Legend status='open' label='Open · waiting on us' />
          <Legend status='pending' label='Pending · waiting on stakeholder' />
          <Legend status='answered' label='Answered · folds into a rule' />
        </div>
      </div>
    </SlideShell>
  )
}

function QuestionCard({ q }: { q: Q }) {
  const dotColor = q.status === 'open' ? 'var(--d-accent)' : q.status === 'pending' ? 'var(--d-ink-3)' : 'var(--d-ink-4)'
  return (
    <div
      style={{
        border: '1px solid var(--d-hair-strong)',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>{q.mark}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, background: dotColor }} />
          <span className='deck-mono' style={{ fontSize: '0.6rem' }}>{q.status}</span>
        </span>
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--d-ink)', lineHeight: 1.4 }}>
        {q.text}
      </div>
      {q.owner ? (
        <div className='deck-mono' style={{ fontSize: '0.6rem' }}>owner · {q.owner}</div>
      ) : null}
    </div>
  )
}

function Legend({ status, label }: { status: Q['status']; label: string }) {
  const dotColor = status === 'open' ? 'var(--d-accent)' : status === 'pending' ? 'var(--d-ink-3)' : 'var(--d-ink-4)'
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 8, height: 8, background: dotColor }} />
      <span className='deck-mono' style={{ fontSize: '0.7rem' }}>{label}</span>
    </span>
  )
}
