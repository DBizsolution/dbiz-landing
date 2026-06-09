'use client'

import { useState } from 'react'
import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Bucket = {
  key: string
  icon: string
  count: number
  kind: string
  label: string
  hint: string
}

const buckets: Bucket[] = [
  {
    key: 'brd',
    icon: 'lucide:file-text',
    count: 8,
    kind: 'BRD',
    label: '8 versions of the BRD',
    hint: 'first draft → scope adds → edits → sign-off',
  },
  {
    key: 'flows',
    icon: 'lucide:network',
    count: 3,
    kind: 'Process flows',
    label: 'Distinct process flows',
    hint: 'on Miro · actors, journeys, exceptions',
  },
  {
    key: 'notes',
    icon: 'lucide:message-circle',
    count: 4,
    kind: 'Meeting notes',
    label: '4 meeting / call notes',
    hint: 'fees · auth · approvals · pickup',
  },
]

const TILE_DURATION_MS = 2200
const TILE_STAGGER_MS = 140
const CANVAS_DELAY_MS = 1300
const CANVAS_DURATION_MS = 1400

export function Slide12Mess({ meta }: { meta: SlideMeta }) {
  const [phase, setPhase] = useState<'rest' | 'collapsing'>('rest')

  const trigger = () => {
    if (phase !== 'rest') return
    window.requestAnimationFrame(() =>
      window.requestAnimationFrame(() => setPhase('collapsing'))
    )
  }

  return (
    <SlideShell meta={meta}>
      <style>{`
        .bucket-icons-grid svg {
          stroke-width: 1.5;
        }
      `}</style>
      <div
        onClick={trigger}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          gap: 32,
          cursor: phase === 'rest' ? 'pointer' : 'default',
        }}
      >
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · What went in
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            All of <em>this.</em> Over 3 weeks.
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            Structured and unstructured. Different people, different shapes of input.
            None of it bad. All of it inconsistent.
          </p>
        </div>

        <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 48,
              height: '100%',
              alignItems: 'stretch',
            }}
          >
            {buckets.map((bucket, i) => {
              const cx = 1
              const dx = cx - i
              const collapsing = phase === 'collapsing'

              return (
                <div
                  key={bucket.key}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 22,
                    padding: '24px 16px',
                    transformOrigin: 'center center',
                    transform: collapsing
                      ? `translateX(calc(${dx} * (100% + 48px))) scale(0.08)`
                      : 'translateX(0) scale(1)',
                    opacity: collapsing ? 0 : 1,
                    transition: `transform ${TILE_DURATION_MS}ms cubic-bezier(.65,.02,.35,1), opacity ${TILE_DURATION_MS}ms cubic-bezier(.65,.02,.35,1)`,
                    transitionDelay: `${i * TILE_STAGGER_MS}ms`,
                    willChange: 'transform, opacity',
                  }}
                >
                  <BucketIcons icon={bucket.icon} count={bucket.count} />
                  <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--d-accent)',
                      }}
                    >
                      {bucket.kind}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        fontSize: '1.55rem',
                        color: 'var(--d-ink)',
                        lineHeight: 1.15,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {bucket.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        color: 'var(--d-ink-2)',
                        lineHeight: 1.4,
                      }}
                    >
                      {bucket.hint}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              display: 'flex',
              alignItems: 'center',
              gap: 28,
              padding: '36px 56px',
              background: 'var(--d-accent)',
              color: '#fff',
              borderRadius: 'var(--brand-r-lg, 24px)',
              boxShadow: '0 30px 80px -20px rgba(232, 106, 42, 0.45)',
              transformOrigin: 'center center',
              transform:
                phase === 'collapsing'
                  ? 'translate(-50%, -50%) scale(1)'
                  : 'translate(-50%, -50%) scale(0.15)',
              opacity: phase === 'collapsing' ? 1 : 0,
              transition: `transform ${CANVAS_DURATION_MS}ms cubic-bezier(.2,.7,.2,1), opacity ${CANVAS_DURATION_MS}ms ease-out`,
              transitionDelay: phase === 'collapsing' ? `${CANVAS_DELAY_MS}ms` : '0ms',
              pointerEvents: 'none',
              willChange: 'transform, opacity',
            }}
          >
            <Icon icon='lucide:cog' width={72} color='#fff' />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  opacity: 0.78,
                }}
              >
                One source of intent
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: '2.6rem',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.05,
                }}
              >
                DBiz<span style={{ opacity: 0.65, margin: '0 0.25em' }}>·</span>Canvas
              </div>
            </div>
          </div>
        </div>

        <div className='deck-mono' style={{ color: 'var(--d-ink-2)' }}>
          The canvas gives all of this one shape — independent of how it arrived.
        </div>
      </div>
    </SlideShell>
  )
}

const GRID_LAYOUTS: Record<number, { cols: number; rows: number }> = {
  3: { cols: 3, rows: 1 },
  4: { cols: 2, rows: 2 },
  8: { cols: 4, rows: 2 },
}

function BucketIcons({ icon, count }: { icon: string; count: number }) {
  const visible = Math.min(count, 8)
  const layout = GRID_LAYOUTS[visible] ?? { cols: visible, rows: 1 }
  const iconSize = 44
  const gap = 12
  return (
    <div
      className='bucket-icons-grid'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${layout.cols}, ${iconSize}px)`,
        gridAutoRows: `${iconSize}px`,
        gap,
        minHeight: 110,
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {Array.from({ length: visible }).map((_, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.25))',
          }}
        >
          <Icon icon={icon} width={iconSize} color='var(--d-ink)' />
        </div>
      ))}
    </div>
  )
}
