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

const ACCENT = 'var(--v22-accent)'
const ACCENT_DEEP = 'var(--brand-orange-hover)'
const NAVY_DEEP = 'var(--brand-navy-deep)'
const MONO = 'var(--font-mono)'

/* ─── Data ────────────────────────────────────────────────────────────────── */

type Area = {
  num: string
  kicker: string
  title: string
  horizon: string
  body: string
  tags: string[]
}

const AREAS: Area[] = [
  {
    num: '01', kicker: 'AGENTIC ARCHITECTURES', title: 'Multi-agent systems for enterprise work', horizon: 'HORIZON 2 · EMERGING',
    body: 'How agents should be decomposed, orchestrated, and supervised when the work spans several enterprise systems and the cost of a wrong action is real.',
    tags: ['Orchestration patterns', 'Tool use', 'Long-running tasks', 'Human-in-the-loop'],
  },
  {
    num: '02', kicker: 'DATA READINESS', title: 'Data foundations agents can act on', horizon: 'HORIZON 1 · CORE',
    body: 'Most agent programmes stall on the data, not the model. We research the modelling, lineage, and retrieval patterns that make enterprise data usable by autonomous systems.',
    tags: ['Domain modelling', 'Retrieval', 'Lineage', 'Freshness'],
  },
  {
    num: '03', kicker: 'SECURITY & PRIVACY', title: 'Trust boundaries for autonomous systems', horizon: 'HORIZON 1 · CORE',
    body: 'Identity, permissioning, and data residency when the actor is an agent. Prompt-injection and exfiltration surfaces, tested against real enterprise topologies.',
    tags: ['Agent identity', 'Least privilege', 'Injection defence', 'Residency'],
  },
  {
    num: '04', kicker: 'GOVERNANCE & ASSURANCE', title: 'Evaluation, auditability, and control', horizon: 'HORIZON 2 · EMERGING',
    body: 'What it takes to certify an agent for production and keep it certified: evaluation harnesses, drift detection, audit trails, and the regulatory reporting that follows.',
    tags: ['Evals', 'Drift', 'Audit trail', 'Regulatory reporting'],
  },
  {
    num: '05', kicker: 'BUSINESS TRANSFORMATION', title: 'Agent-led operating models', horizon: 'HORIZON 3 · DISRUPTIVE',
    body: 'How work, roles, and accountability change once agents run parts of the process, and which reliability and cost thresholds have to be met before they can.',
    tags: ['Process redesign', 'Accountability', 'Unit economics', 'Change'],
  },
]

const STAGES = [
  { name: 'Discover', note: 'Scan & frame' },
  { name: 'Scope', note: 'Problem & fit' },
  { name: 'Business Case', note: 'Value & risk' },
  { name: 'Build', note: 'Prototype the risk' },
  { name: 'Validate', note: 'Test with users' },
  { name: 'Transfer', note: 'Hand off or scale' },
]

/* ─── Area glyphs — blueprint schematics, one per research area ───────────── */

function AreaGlyph({ i }: { i: number }) {
  const ink = 'rgba(13, 27, 62, 0.8)'
  const dim = 'rgba(13, 27, 62, 0.28)'
  const acc = ACCENT
  const common = { width: '100%', height: '100%' } as CSSProperties

  if (i === 0) return ( /* Multi-agent orchestration — supervisor + worker mesh */
    <svg viewBox='0 0 80 80' style={common} aria-hidden='true'>
      <circle cx='40' cy='16' r='8' fill='none' stroke={acc} strokeWidth='1.4' />
      <circle cx='40' cy='16' r='3' fill={acc} />
      {[18, 40, 62].map((cx, k) => (
        <g key={k}>
          <line x1='40' y1='24' x2={cx} y2='52' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
          <circle cx={cx} cy='58' r='6' fill='none' stroke={ink} strokeWidth='1.1' />
          <circle cx={cx} cy='58' r='1.8' fill={ink} />
        </g>
      ))}
      <line x1='18' y1='72' x2='62' y2='72' stroke={dim} strokeWidth='0.8' strokeDasharray='1.5 2.5' />
    </svg>
  )
  if (i === 1) return ( /* Data readiness — layered store feeding a node */
    <svg viewBox='0 0 80 80' style={common} aria-hidden='true'>
      <ellipse cx='32' cy='24' rx='18' ry='7' fill='none' stroke={ink} strokeWidth='1.1' />
      <path d='M14 24 v20 a18 7 0 0 0 36 0 V24' fill='none' stroke={ink} strokeWidth='1.1' />
      <path d='M14 34 a18 7 0 0 0 36 0' fill='none' stroke={dim} strokeWidth='0.9' />
      <line x1='50' y1='40' x2='64' y2='52' stroke={acc} strokeWidth='1.3' strokeDasharray='3 3' />
      <circle cx='66' cy='56' r='7' fill='none' stroke={acc} strokeWidth='1.4' />
      <circle cx='66' cy='56' r='2.4' fill={acc} />
    </svg>
  )
  if (i === 2) return ( /* Security — shield with agent dot inside boundary */
    <svg viewBox='0 0 80 80' style={common} aria-hidden='true'>
      <path d='M40 12 L64 22 V42 C64 56 54 66 40 70 C26 66 16 56 16 42 V22 Z' fill='none' stroke={ink} strokeWidth='1.2' />
      <path d='M40 22 L56 29 V42 C56 51 49 58 40 61 C31 58 24 51 24 42 V29 Z' fill='none' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      <circle cx='40' cy='42' r='4' fill={acc} />
      <line x1='40' y1='46' x2='40' y2='54' stroke={acc} strokeWidth='1.2' />
    </svg>
  )
  if (i === 3) return ( /* Governance — gauge + audit ticks */
    <svg viewBox='0 0 80 80' style={common} aria-hidden='true'>
      <path d='M16 56 A28 28 0 0 1 64 56' fill='none' stroke={ink} strokeWidth='1.2' />
      {[210, 240, 270, 300, 330].map((a, k) => {
        const rad = (a * Math.PI) / 180
        return <line key={k} x1={40 + Math.cos(rad) * 24} y1={56 + Math.sin(rad) * 24} x2={40 + Math.cos(rad) * 28} y2={56 + Math.sin(rad) * 28} stroke={dim} strokeWidth='1' />
      })}
      <line x1='40' y1='56' x2='54' y2='38' stroke={acc} strokeWidth='1.6' />
      <circle cx='40' cy='56' r='3' fill={acc} />
      <line x1='20' y1='68' x2='60' y2='68' stroke={dim} strokeWidth='0.8' strokeDasharray='1.5 2.5' />
    </svg>
  )
  return ( /* Operating models — org grid re-forming around agent node */
    <svg viewBox='0 0 80 80' style={common} aria-hidden='true'>
      {[[16, 16], [40, 16], [64, 16], [16, 40], [64, 40], [16, 64], [40, 64], [64, 64]].map(([x, y], k) => (
        <rect key={k} x={x - 5} y={y - 5} width='10' height='10' fill='none' stroke={dim} strokeWidth='0.9' />
      ))}
      <circle cx='40' cy='40' r='9' fill='none' stroke={acc} strokeWidth='1.4' />
      <circle cx='40' cy='40' r='3' fill={acc} />
      {[[40, 16], [16, 40], [64, 40], [40, 64]].map(([x, y], k) => (
        <line key={k} x1='40' y1='40' x2={x} y2={y} stroke={acc} strokeWidth='0.8' strokeDasharray='2 2.5' opacity='0.6' />
      ))}
    </svg>
  )
}

/* ─── Research areas — auto-cycling, A·SEQUENCE / B·INDEX layouts ──────────── */

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
        <div className='v22-cdp-block-grid'>
          <div className='v22-cdp-block-head'>
            <span className='v22-cdp-block-num'>Research areas</span>
            <h2 className='v22-cdp-block-title'>Agentic AI, <em>taken seriously.</em></h2>
            <p className='v22-cdp-block-kicker'>Five research categories. Including the parts that are not the model.</p>
          </div>
          <div className='v22-cdp-block-body'>
            {/* Same tab element as the What-we-do sections on the other pages */}
            <div className='v22-cdp-services-tabs'>
              <div className='v22-cdp-services-tablist' role='tablist' aria-label='Research categories'>
                {AREA_TABS.map((label, i) => (
                  <button
                    key={label}
                    type='button'
                    role='tab'
                    id={`ri-tab-${i}`}
                    aria-selected={i === active}
                    aria-controls={`ri-panel-${i}`}
                    tabIndex={i === active ? 0 : -1}
                    className={`v22-cdp-services-tab${i === active ? ' is-active' : ''}`}
                    onClick={() => select(i)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div
                role='tabpanel'
                id={`ri-panel-${active}`}
                aria-labelledby={`ri-tab-${active}`}
                className='v22-cdp-services-panel'
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
                  <div style={{ minWidth: 0 }}>
                    <h3 className='v22-cdp-services-panel-name'>{area.title}</h3>
                    <p className='v22-cdp-services-panel-lede'>{area.body}</p>
                  </div>
                  <div style={{ flex: 'none', width: 92, height: 92, border: '1px solid rgba(13,27,62,0.14)', padding: 12 }} aria-hidden='true'>
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
