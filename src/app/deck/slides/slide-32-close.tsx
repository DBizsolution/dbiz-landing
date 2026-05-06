import { SlideShell, type SlideMeta } from '../slide-shell'

const worked = [
  {
    mark: 'W·01',
    title: 'Stable canvas as the source.',
    body: 'Three BRD revisions during build. We changed the canvas, not the screens.',
  },
  {
    mark: 'W·02',
    title: 'Same source, two uses.',
    body: 'Collaboration first (consensus, open questions), structured artifacts second.',
  },
  {
    mark: 'W·03',
    title: 'Regenerate forward, never backward.',
    body: 'Mess didn’t pile up across phases — root cause fixed in the canvas, downstream rebuilt.',
  },
]

const didnt = [
  {
    mark: 'D·01',
    title: 'Dev didn’t use the intent model.',
    body: 'Backend folks worked off the BRD instead of the canvas. Handoff had gaps for that reason.',
  },
  {
    mark: 'D·02',
    title: 'One-person bottleneck early.',
    body: 'Initial canvas was built by prompting alone. Collaboration features got introduced midway, not from day one.',
  },
  {
    mark: 'D·03',
    title: 'Missing user stories layer.',
    body: 'Requirements weren’t turned into user stories inside the canvas — that gap surfaced at handoff.',
  },
  {
    mark: 'D·04',
    title: 'Backend + dev not in the canvas.',
    body: 'Backend requirements and dev integration weren’t represented. Next iteration must include them upstream.',
  },
]

export function Slide32Close({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Reflections · what worked, what didn&apos;t
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Honest, <em>not polished.</em>
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 28,
            flex: 1,
            minHeight: 0,
          }}
        >
          <div className='deck-box deck-box-hot' style={{ display: 'flex', flexDirection: 'column', padding: 28 }}>
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>What worked</span>
              <span className='k'>RF · 01</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 16 }}>
              {worked.map((w) => (
                <ReflectionItem key={w.mark} {...w} accent />
              ))}
            </div>
          </div>

          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 28 }}>
            <div className='deck-box-head'>
              <span>What didn&apos;t work</span>
              <span className='k'>RF · 02</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
              {didnt.map((d) => (
                <ReflectionItem key={d.mark} {...d} />
              ))}
            </div>
          </div>
        </div>

        <div className='deck-mono'>
          Next: BAs and PMs authoring the canvas directly, with backend + dev represented from day one.
        </div>
      </div>
    </SlideShell>
  )
}

function ReflectionItem({
  mark,
  title,
  body,
  accent,
}: {
  mark: string
  title: string
  body: string
  accent?: boolean
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span
        className={accent ? 'deck-mono-accent' : 'deck-mono'}
        style={{ fontSize: '0.66rem' }}
      >
        {mark}
      </span>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'var(--d-ink)',
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          color: 'var(--d-ink-2)',
          lineHeight: 1.5,
        }}
      >
        {body}
      </div>
    </div>
  )
}
