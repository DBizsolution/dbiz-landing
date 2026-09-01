/* dRSTi — Research & Innovation: interactive islands.
   · ResearchAreas  — auto-cycling area selector with A·SEQUENCE / B·INDEX layouts
   · ProcessPipeline — six-stage / five-gate pipeline that draws itself in on mount
   · PortfolioBar    — 70/20/10 horizon bar that animates its widths on mount
   · CareersTour     — collapsible "how a tour of duty works" panel
   Geometry and components follow DESIGN-SYSTEM.md: tokenized radii
   (--brand-r / --brand-r-sm), 100px pills, brand buttons. Light sections
   scope via [data-surface="light"] and read ink through --v22-ink-*. */

'use client'

import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { InlineSvg } from '@/components/inline-svg'
import { AREAS } from './areas-data'
import {
  drstiArea01AgenticArchitectures,
  drstiArea02DataReadiness,
  drstiArea03SecurityPrivacy,
  drstiArea04GovernanceAssurance,
  drstiArea05BusinessTransformation,
} from '@/lib/svg-assets'

const ACCENT = 'var(--v22-accent)'
const ACCENT_DEEP = 'var(--brand-orange-hover)'
const NAVY_DEEP = 'var(--brand-navy-deep)'
const MONO = 'var(--font-mono)'

/* ─── Data ────────────────────────────────────────────────────────────────── */


const STAGES = [
  { name: 'Discover', note: 'Scan & frame' },
  { name: 'Scope', note: 'Problem & fit' },
  { name: 'Business Case', note: 'Value & risk' },
  { name: 'Build', note: 'Prototype the risk' },
  { name: 'Validate', note: 'Test with users' },
  { name: 'Transfer', note: 'Hand off or scale' },
]

/* ─── Area plates — design-system SVG assets (public/assets/svg) ──────────── */

const AREA_PLATES = [
  drstiArea01AgenticArchitectures,
  drstiArea02DataReadiness,
  drstiArea03SecurityPrivacy,
  drstiArea04GovernanceAssurance,
  drstiArea05BusinessTransformation,
]

function AreaGlyph({ i }: { i: number }) {
  return <InlineSvg markup={AREA_PLATES[i] ?? AREA_PLATES[0]} />
}


/* Human-readable category labels for the tabs (from each area's kicker) */
const AREA_TABS = [
  'Agentic Architectures',
  'Data Readiness',
  'Security & Privacy',
  'Governance & Assurance',
  'Business Transformation',
]

export function ResearchAreas() {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (locked) return
    const t = setTimeout(() => setActive((a) => (a + 1) % AREAS.length), 5200)
    return () => clearTimeout(t)
  }, [active, locked])

  const select = (i: number) => { setActive(i); setLocked(true) }
  const area = AREAS[active]

  return (
    <section id='areas' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
      <div className='v22-container'>
        {/* Head row — title left, subtitle top-right (matches section-note style) */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 'clamp(28px,4vw,44px)' }}>
          <div>
            <span className='v22-cdp-block-num'>Research areas</span>
            <h2 className='v22-cdp-block-title' style={{ marginBottom: 0 }}>Agentic AI, <em>taken seriously.</em></h2>
          </div>
          <p className='v22-cdp-block-kicker' style={{ margin: 0, textAlign: 'right', maxWidth: 360 }}>Five research categories. Including the parts that are not the model.</p>
        </div>
        {/* Tabs left (narrow rail) · panel right, top-aligned */}
        <div className='v22-ri-areas-grid'>
          <div>
            <div role='tablist' aria-label='Research categories' aria-orientation='vertical'
              style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(13,27,62,0.12)' }}>
              {AREA_TABS.map((label, i) => (
                <button
                  key={label}
                  type='button'
                  role='tab'
                  id={`ri-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls={`ri-panel-${i}`}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => select(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14, width: '100%', padding: '14px 2px',
                    cursor: 'pointer', background: 'transparent', border: 'none',
                    borderBottom: '1px solid rgba(13,27,62,0.12)',
                    borderLeft: i === active ? '2px solid var(--v22-accent)' : '2px solid transparent',
                    paddingLeft: 14, font: 'inherit', textAlign: 'left',
                    color: i === active ? 'var(--v22-ink)' : 'rgba(13,27,62,0.55)',
                    fontWeight: i === active ? 700 : 500, fontSize: 15, letterSpacing: '-0.01em',
                    transition: 'color .2s ease, border-color .2s ease',
                  }}
                >
                  <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', opacity: 0.55, minWidth: 22 }}>{AREAS[i].num}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className='v22-cdp-services-tabs' style={{ marginTop: 0 }}>
              <div
                role='tabpanel'
                id={`ri-panel-${active}`}
                aria-labelledby={`ri-tab-${active}`}
                className='v22-cdp-services-panel'
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
                  <div style={{ minWidth: 0, flex: '1 1 300px' }}>
                    <h3 className='v22-cdp-services-panel-name'>{area.title}</h3>
                    <p className='v22-cdp-services-panel-lede'>{area.body}</p>
                  </div>
                  <div style={{ flex: 'none', width: 'clamp(120px, 16vw, 168px)', aspectRatio: '1', border: '1px solid rgba(13,27,62,0.14)', padding: 10 }} aria-hidden='true'>
                    <AreaGlyph i={active} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '18px 0 0' }}>
                  {area.tags.map((t) => <span key={t} className='v22-cap-pill'>{t}</span>)}
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', marginTop: 22, paddingTop: 16, fontFamily: MONO, fontSize: 11, letterSpacing: '0.13em', color: 'rgba(13,27,62,0.55)' }}>
                  {area.horizon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Process pipeline — draws itself in on mount ─────────────────────────── */

export function ProcessPipeline() {
  const [drawn, setDrawn] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 400)
    return () => clearTimeout(t)
  }, [])

  const W = 1060, H = 230, y = 110, x0 = 78
  const gap = (W - x0 * 2) / (STAGES.length - 1)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      <line x1={x0} y1={y} x2={W - x0} y2={y} stroke='rgba(255,255,255,0.14)' strokeWidth={1} />
      <line
        x1={x0} y1={y} x2={W - x0} y2={y} stroke={ACCENT} strokeWidth={2}
        strokeDasharray={W} strokeDashoffset={drawn ? 0 : W}
        style={{ transition: 'stroke-dashoffset 1.8s cubic-bezier(.22,.61,.36,1)' }}
      />
      {STAGES.map((s, i) => {
        const x = x0 + gap * i
        const tr: CSSProperties = { transition: `opacity .5s ease ${0.16 * i}s`, opacity: drawn ? 1 : 0 }
        const mx = x + gap / 2
        return (
          <g key={s.name}>
            <circle cx={x} cy={y} r={13} fill={NAVY_DEEP} stroke={ACCENT} strokeWidth={1.5} style={tr} />
            <circle cx={x} cy={y} r={4.5} fill={ACCENT} style={tr} />
            <text x={x} y={y + 46} textAnchor='middle' fill='#fff' style={{ ...tr, font: '700 16px var(--font-sans)', letterSpacing: '-0.01em' }}>{s.name}</text>
            <text x={x} y={y + 68} textAnchor='middle' fill='rgba(255,255,255,0.5)' style={{ ...tr, font: '400 13px var(--font-sans)' }}>{s.note}</text>
            {i < STAGES.length - 1 && (
              <>
                <path d={`M${mx} ${y - 9} L${mx + 9} ${y} L${mx} ${y + 9} L${mx - 9} ${y} Z`} fill={NAVY_DEEP} stroke='rgba(255,255,255,0.45)' strokeWidth={1} style={tr} />
                <text x={mx} y={y - 22} textAnchor='middle' fill='rgba(255,255,255,0.5)' style={{ ...tr, font: '400 10px var(--font-mono)', letterSpacing: '0.14em' }}>GATE</text>
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/* ─── Portfolio bar — 70/20/10, animates widths on mount ──────────────────── */

export function PortfolioBar() {
  const [bars, setBars] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setBars(true), 400)
    return () => clearTimeout(t)
  }, [])
  const base: CSSProperties = { display: 'block', height: '100%', transition: 'width 1.2s cubic-bezier(.22,.61,.36,1)' }
  return (
    <div style={{ display: 'flex', height: 12, borderRadius: 100, overflow: 'hidden', background: 'rgba(13,27,62,0.08)', marginBottom: 40 }}>
      <span style={{ ...base, width: bars ? '70%' : '0%', background: ACCENT }} />
      <span style={{ ...base, width: bars ? '20%' : '0%', background: 'rgba(240,123,47,0.6)', transitionDelay: '.15s' }} />
      <span style={{ ...base, width: bars ? '10%' : '0%', background: 'rgba(240,123,47,0.3)', transitionDelay: '.3s' }} />
    </div>
  )
}

/* ─── Careers — collapsible "how a tour of duty works" panel ──────────────── */

export function CareersTour() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div style={{ display: 'flex', gap: 26, flexWrap: 'wrap', alignItems: 'center', marginTop: 36 }}>
        <a href='#contact' className='v22-cta-primary'>Express interest <span className='arrow'>→</span></a>
        <button onClick={() => setOpen((o) => !o)} className='v22-cta-text' style={{ background: 'none', border: 'none', borderBottom: '1px solid currentColor', cursor: 'pointer' }}>
          How a tour of duty works {open ? '−' : '+'}
        </button>
      </div>
      {open && (
        <div style={{ marginTop: 28, border: '1px solid rgba(255,255,255,0.1)', padding: 'clamp(24px,3vw,32px)', background: 'rgba(255,255,255,0.02)', maxWidth: 760 }}>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', color: ACCENT, marginBottom: 14 }}>TALENT MODEL</div>
          <p style={{ margin: '0 0 18px', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)' }}>
            Start lean with three to five core people. Staff each bet with a fixed-term tour of duty. Rotate people back into their home team when the tour ends, so the capability spreads instead of staying siloed in the unit.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 20 }}>
            {[
              'Apply or get nominated for an open bet that needs your skill set.',
              'Join for the tour, typically one to two quarters, working inside the core team.',
              'Rotate back to your home team, carrying the methods and findings with you.',
            ].map((txt, i) => (
              <div key={i}>
                <div style={{ fontSize: 22, fontWeight: 800, color: ACCENT, letterSpacing: '-0.03em' }}>{i + 1}.</div>
                <p style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.65)' }}>{txt}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
