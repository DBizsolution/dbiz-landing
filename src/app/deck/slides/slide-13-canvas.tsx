'use client'

import { useEffect, useState } from 'react'
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

const PILL_HOLD_MS = 700
const FADE_DURATION_MS = 650
const TILE_BASE_DELAY_MS = 350
const TILE_STAGGER_MS = 70
const TILE_DURATION_MS = 420

export function Slide13Canvas({ meta }: { meta: SlideMeta }) {
  const [phase, setPhase] = useState<'pill' | 'open'>('pill')

  useEffect(() => {
    const id = window.setTimeout(() => setPhase('open'), PILL_HOLD_MS)
    return () => window.clearTimeout(id)
  }, [])

  const open = phase === 'open'

  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 32 }}>
        <div
          className='deck-stack-md'
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(-8px)',
            transition: `opacity ${FADE_DURATION_MS}ms ease, transform ${FADE_DURATION_MS}ms ease`,
          }}
        >
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Inside the pill
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '2.2rem',
                letterSpacing: '-0.04em',
                color: 'var(--d-accent)',
              }}
            >
              DBiz<span style={{ color: 'var(--d-ink)' }}>·</span>Canvas
            </span>
            <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
              One structured doc. <em>Same fields every time.</em>
            </h1>
          </div>
        </div>

        <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
          <div
            className='deck-box'
            style={{
              flex: 1,
              minHeight: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: 36,
              opacity: open ? 1 : 0,
              transform: open ? 'scale(1)' : 'scale(0.92)',
              transformOrigin: 'center center',
              transition: `opacity ${FADE_DURATION_MS}ms ease, transform ${FADE_DURATION_MS}ms cubic-bezier(.2,.7,.2,1)`,
            }}
          >
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
              {sections.map((s, i) => (
                <CanvasSection
                  key={s.mark}
                  index={i}
                  open={open}
                  {...s}
                />
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
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity ${TILE_DURATION_MS}ms ease, transform ${TILE_DURATION_MS}ms cubic-bezier(.2,.7,.2,1)`,
                  transitionDelay: `${TILE_BASE_DELAY_MS + sections.length * TILE_STAGGER_MS}ms`,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <Icon icon='lucide:plus' width={20} />
                  <div className='deck-mono' style={{ fontSize: '0.62rem' }}>add section</div>
                </div>
              </div>
            </div>
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
              transform: open
                ? 'translate(-50%, -50%) scale(0.12)'
                : 'translate(-50%, -50%) scale(1)',
              opacity: open ? 0 : 1,
              transition: `transform ${FADE_DURATION_MS}ms cubic-bezier(.65,.02,.35,1), opacity ${FADE_DURATION_MS}ms ease`,
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
          Two uses, coming up: collaboration first, then artifacts for build.
        </div>
      </div>
    </SlideShell>
  )
}

type CanvasSectionProps = {
  mark: string
  name: string
  count: string
  index: number
  open: boolean
}

function CanvasSection({ mark, name, count, index, open }: CanvasSectionProps) {
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
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity ${TILE_DURATION_MS}ms ease, transform ${TILE_DURATION_MS}ms cubic-bezier(.2,.7,.2,1)`,
        transitionDelay: `${TILE_BASE_DELAY_MS + index * TILE_STAGGER_MS}ms`,
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
