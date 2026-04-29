import { SlideShell, type SlideMeta } from '../slide-shell'

type Lane = {
  marker: string
  name: string
  active: boolean
  artifacts: string[]
}

const lanes: Lane[] = [
  {
    marker: 'L·01',
    name: 'Design',
    active: true,
    artifacts: ['Information architecture', 'Screen list', 'User journeys', 'Personas'],
  },
  {
    marker: 'L·02',
    name: 'Front end',
    active: true,
    artifacts: ['Data fields', 'Validation rules', 'State transitions', 'Component contracts'],
  },
  {
    marker: 'L·03',
    name: 'Back end',
    active: false,
    artifacts: ['Entities', 'DB schema', 'API endpoints', 'Domain events'],
  },
  {
    marker: 'L·04',
    name: 'Architecture',
    active: false,
    artifacts: ['Service map', 'Data flow', 'Integration points', 'Auth model'],
  },
]

export function Slide20SwimLane({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Artifacts by swim lane
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Each artifact <em>has a consumer.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            For VBS we leaned on the design and front-end lanes. Back end and
            architecture exist in the canvas — they&apos;re not what today is about.
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
          {lanes.map((lane) => (
            <div
              key={lane.marker}
              className={`deck-box ${lane.active ? 'deck-box-hot' : 'deck-box-mute'}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 24,
                opacity: lane.active ? 1 : 0.55,
              }}
            >
              <div className='deck-box-head'>
                <span style={{ color: lane.active ? 'var(--d-accent)' : undefined }}>{lane.name}</span>
                <span className='k'>{lane.marker}</span>
              </div>
              <div className='deck-mono' style={{ marginTop: 12, fontSize: '0.66rem' }}>
                {lane.active ? 'Today · in scope' : 'Out of scope today'}
              </div>
              <ul className='deck-list' style={{ gap: 12, marginTop: 16 }}>
                {lane.artifacts.map((a, i) => (
                  <li key={a} data-marker={`${lane.marker.charAt(0)}·${String(i + 1).padStart(2, '0')}`} style={{ fontSize: '1rem' }}>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='deck-mono'>
          Let me show you the artifacts that actually drove the build.
        </div>
      </div>
    </SlideShell>
  )
}
