'use client'

import { useState } from 'react'
import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Thumb = {
  marker: string
  icon: string
  kind: string
  label: string
  hint?: string
}

const thumbs: Thumb[] = [
  { marker: 'BRD · 01', icon: 'lucide:file-text', kind: 'BRD', label: 'V1', hint: 'first draft' },
  { marker: 'BRD · 02', icon: 'lucide:file-text', kind: 'BRD', label: 'V2', hint: 'scope adds' },
  { marker: 'BRD · 03', icon: 'lucide:file-text', kind: 'BRD', label: 'V3', hint: 'scope expanded' },
  { marker: 'BRD · 04', icon: 'lucide:file-text', kind: 'BRD', label: 'V4', hint: 'edge cases' },
  { marker: 'BRD · 05', icon: 'lucide:file-text', kind: 'BRD', label: 'V5', hint: 'rules rewrite' },
  { marker: 'BRD · 06', icon: 'lucide:file-text', kind: 'BRD', label: 'V6', hint: 'approvals' },
  { marker: 'BRD · 07', icon: 'lucide:file-text', kind: 'BRD', label: 'V7 · final', hint: 'signed off' },
  { marker: 'JM · 01', icon: 'lucide:network', kind: 'Journey map', label: 'Wharf actor', hint: 'actor map' },
  { marker: 'JM · 02', icon: 'lucide:network', kind: 'Journey map', label: 'Booking flow', hint: 'happy path' },
  { marker: 'JM · 03', icon: 'lucide:network', kind: 'Journey map', label: 'Driver pickup', hint: 'edge cases' },
  { marker: 'NT · 01', icon: 'lucide:message-circle', kind: 'Call', label: 'Call · 14 Mar', hint: 'fees' },
  { marker: 'NT · 02', icon: 'lucide:message-circle', kind: 'Call', label: 'Call · 19 Mar', hint: 'auth' },
]

const COLS = 6
const TILE_DURATION_MS = 3600
const TILE_STAGGER_MS = 60
const CANVAS_DELAY_MS = 1800
const CANVAS_DURATION_MS = 1600

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
            BRD revisions. Journey maps. Call notes. Different people, different
            shapes of input. None of it bad. All of it inconsistent.
          </p>
        </div>

        <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
              gap: 16,
              height: '100%',
            }}
          >
            {thumbs.map((t, i) => {
              const col = i % COLS
              const row = Math.floor(i / COLS)
              const rows = Math.ceil(thumbs.length / COLS)
              const cx = (COLS - 1) / 2
              const cy = (rows - 1) / 2
              const dx = cx - col
              const dy = cy - row
              const collapsing = phase === 'collapsing'
              return (
                <div
                  key={t.marker}
                  className='deck-box deck-box-mute'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '14px 16px',
                    minWidth: 0,
                    transformOrigin: 'center center',
                    transform: collapsing
                      ? `translate(calc(${dx} * (100% + 16px)), calc(${dy} * (100% + 16px))) scale(0.05)`
                      : 'translate(0, 0) scale(1)',
                    opacity: collapsing ? 0 : 1,
                    transition: `transform ${TILE_DURATION_MS}ms cubic-bezier(.65,.02,.35,1), opacity ${TILE_DURATION_MS}ms cubic-bezier(.65,.02,.35,1)`,
                    transitionDelay: `${i * TILE_STAGGER_MS}ms`,
                    willChange: 'transform, opacity',
                  }}
                >
                  <div className='deck-box-head' style={{ marginBottom: 8, paddingBottom: 6, fontSize: '0.62rem' }}>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.kind}</span>
                    <span className='k' style={{ fontSize: '0.6rem' }}>{t.marker}</span>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      border: '1px dashed var(--d-hair)',
                      padding: 16,
                      minHeight: 140,
                    }}
                  >
                    <Icon icon={t.icon} width={56} color='var(--d-ink-3)' />
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--d-ink)', textAlign: 'center', lineHeight: 1.3 }}>
                      {t.label}
                    </div>
                    {t.hint ? (
                      <div className='deck-mono' style={{ fontSize: '0.6rem', textAlign: 'center' }}>{t.hint}</div>
                    ) : null}
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

        <div className='deck-mono'>
          The canvas gives all of this one shape — independent of how it arrived.
          {phase === 'rest' ? (
            <span style={{ opacity: 0.55, marginLeft: 8 }}>(click anywhere)</span>
          ) : null}
        </div>
      </div>
    </SlideShell>
  )
}
