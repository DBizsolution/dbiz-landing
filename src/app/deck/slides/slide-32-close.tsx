import { SlideShell, type SlideMeta } from '../slide-shell'

const worked = [
  {
    mark: 'W·01',
    title: 'Generated screens with confidence.',
    body: 'Knew it wouldn’t break. Didn’t have to backtrack AI slop on every regeneration.',
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
    title: 'One-person bottleneck early.',
    body: 'Initial canvas was built by prompting alone. Collaboration features got introduced midway, not from day one.',
  },
  {
    mark: 'D·02',
    title: 'Missing user-stories layer.',
    body: 'Requirements weren’t turned into user stories inside the canvas — that gap surfaced at handoff.',
  },
  {
    mark: 'D·03',
    title: 'Devs unable to use the intent model.',
    body: 'Backend folks worked off the BRD instead of the canvas. Handoff had gaps because of that — fixable upstream.',
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.7rem',
              letterSpacing: '-0.02em',
              color: 'var(--d-ink)',
              flex: 1,
              minWidth: 0,
            }}
          >
            Human effort{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--d-accent)' }}>&gt; shipping.</em>{' '}
            Structure is what made the ship possible.
          </div>
          <div className='deck-mono' style={{ color: 'var(--d-ink-3)' }}>
            Next: BAs &amp; PMs authoring directly · backend + dev from day 1
          </div>
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
        style={{ fontSize: '0.72rem' }}
      >
        {mark}
      </span>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.4rem',
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
          fontSize: '1.1rem',
          color: 'var(--d-ink-2)',
          lineHeight: 1.5,
        }}
      >
        {body}
      </div>
    </div>
  )
}
