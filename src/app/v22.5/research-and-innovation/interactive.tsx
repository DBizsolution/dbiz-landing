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


const STAGES = [
  { name: 'Discover', note: 'Scan & frame' },
  { name: 'Scope', note: 'Problem & fit' },
  { name: 'Business Case', note: 'Value & risk' },
  { name: 'Build', note: 'Prototype the risk' },
  { name: 'Validate', note: 'Test with users' },
  { name: 'Transfer', note: 'Hand off or scale' },
]

/* ─── Who we work with — tabs with the content below each tab ─────────────── */

const AUDIENCES = [
  {
    tab: 'Enterprises', k: 'ENTERPRISES', t: 'You have the constraint that makes it real',
    b: 'Co-fund a research bet on a problem your roadmap keeps deferring: data readiness, agent assurance, autonomy in a regulated process. You get evidence and a transferable result; we get a problem worth solving.',
    tags: ['Co-funded bets', 'Agreed IP terms'],
  },
  {
    tab: 'Universities & Institutes', k: 'UNIVERSITIES & RESEARCH INSTITUTES', t: 'Enterprise problems, at real scale',
    b: 'Joint studies, supervised student projects, and placements inside live engagements. We bring industrial problems, data access, and engineers; you bring method and depth. Results are published.',
    tags: ['Joint studies', 'Placements', 'Publication'],
  },
  {
    tab: 'Technology Partners', k: 'TECHNOLOGY PARTNERS', t: 'Test it where it has to survive',
    b: 'Hyperscalers, model providers, and platform vendors use the unit to put early capability in front of enterprise conditions: governance, cost, and integration. Findings come back to you.',
    tags: ['Early access', 'Co-engineering'],
  },
]

export function AudienceTabs() {
  const [active, setActive] = useState(0)
  const a = AUDIENCES[active]
  return (
    <div className='v22-cdp-services-tabs' style={{ marginTop: 0 }}>
      <div className='v22-cdp-services-tablist' role='tablist' aria-label='Who we work with'>
        {AUDIENCES.map((x, i) => (
          <button
            key={x.tab}
            type='button'
            role='tab'
            id={`ri-aud-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`ri-aud-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={`v22-cdp-services-tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {x.tab}
          </button>
        ))}
      </div>
      <div role='tabpanel' id={`ri-aud-panel-${active}`} aria-labelledby={`ri-aud-tab-${active}`} className='v22-cdp-services-panel'>
        <h3 className='v22-cdp-services-panel-name'>{a.t}</h3>
        <p className='v22-cdp-services-panel-lede'>{a.b}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
          {a.tags.map((t) => <span key={t} className='v22-cap-pill'>{t}</span>)}
        </div>
      </div>
    </div>
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
