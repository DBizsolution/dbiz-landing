import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const sections = [
  { mark: 'CV·01', name: 'Consensus', count: '12 facts' },
  { mark: 'CV·02', name: 'Actors', count: '4 roles' },
  { mark: 'CV·03', name: 'Entities', count: '9 things' },
  { mark: 'CV·04', name: 'Journeys', count: '7 flows' },
  { mark: 'CV·05', name: 'Business rules', count: '23 rules' },
  { mark: 'CV·06', name: 'Constraints', count: '6 limits' },
  { mark: 'CV·07', name: 'Open questions', count: '5 open · 14 resolved' },
]

export function Slide13Canvas({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · The canvas, in one breath
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One structured doc. <em>Same fields every time.</em>
          </h1>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: 36 }}>
          <div className='deck-box-head'>
            <span>VBS · DBiz Canvas</span>
            <span className='k'>REV 2026-04-29 · sheet 01 / 01</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 16,
              flex: 1,
              minHeight: 0,
              marginTop: 16,
            }}
          >
            {sections.slice(0, 4).map((s) => (
              <CanvasSection key={s.mark} {...s} />
            ))}
            {sections.slice(4).map((s) => (
              <CanvasSection key={s.mark} {...s} />
            ))}
            <div
              style={{
                gridColumn: 'span 1',
                border: '1px dashed var(--d-hair)',
                padding: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--d-ink-3)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Icon icon='ph:plus-bold' width={20} />
                <div className='deck-mono' style={{ fontSize: '0.62rem' }}>add section</div>
              </div>
            </div>
          </div>
        </div>

        <div className='deck-mono'>
          Two uses, coming up: collaboration first, then artifacts for build.
        </div>
      </div>
    </SlideShell>
  )
}

function CanvasSection({ mark, name, count }: { mark: string; name: string; count: string }) {
  return (
    <div
      style={{
        border: '1px solid var(--d-hair-strong)',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        position: 'relative',
        minWidth: 0,
      }}
    >
      <div className='deck-mono-accent' style={{ fontSize: '0.62rem' }}>{mark}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--d-ink)' }}>
        {name}
      </div>
      <div className='deck-mono' style={{ fontSize: '0.66rem' }}>{count}</div>
    </div>
  )
}
