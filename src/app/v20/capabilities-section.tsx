'use client'

import { useState, useEffect } from 'react'

const CYCLE_MS = 5000
const PAUSE_MS = 15000

type Capability = {
  num: string
  kicker: string
  title: string
  subtitle: string
  tags: string[]
  body: string
  cta: string
}

const capabilities: Capability[] = [
  {
    num: '01',
    kicker: 'Tech Advisory',
    title: 'Strategy for AI, Architecture for Scale',
    subtitle: 'Futures Studio · TechOffice Foundry',
    tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture, before a single line of code gets written.',
    cta: 'Get an AI readiness assessment',
  },
  {
    num: '02',
    kicker: 'Cloud',
    title: 'AI-Ready Infrastructure',
    subtitle: 'Multi-hyperscaler · Purpose-built',
    tags: ['DBiz Scoop', 'Multi-Hyperscaler', 'Sovereign Cloud', 'GPU Orchestration', 'FinOps'],
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments purpose-built for agents, data pipelines, and AI models, with governance, cost controls, and observability enterprise IT requires.',
    cta: 'Talk to a cloud architect',
  },
  {
    num: '03',
    kicker: 'Data & AI',
    title: 'The Intelligence Layer',
    subtitle: 'FactWeavers\u2122 · Domain Data Cloud',
    tags: ['FactWeavers\u2122', 'Domain Data Cloud', 'Data Mesh'],
    body: "Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data, pre-modelled for your industry, ready for agents from day one.",
    cta: 'See FactWeavers\u2122 in action',
  },
  {
    num: '04',
    kicker: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    subtitle: 'No rip and replace',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],
    body: "CRM, ERP, and platform investments don\u2019t need replacing, they need unlocking \u2014 for agents. We connect existing systems so agents can read, write, and act across your entire application landscape.",
    cta: 'Explore integration options',
  },
  {
    num: '05',
    kicker: 'Product & AI Engineering',
    title: 'Engineered with AI, Shipped Continuously',
    subtitle: 'Agent Studio \u00b7 Nexus \u00b7 Perpetual Engineering',
    tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],
    body: 'AI-native applications built by AI-first teams. Agent Studio for multi-agent orchestration, Nexus as the dev platform, Perpetual Engineering across the SDLC.',
    cta: 'See what we\u2019ve built',
  },
  {
    num: '06',
    kicker: 'Research & Design',
    title: 'Designed for Humans, Trusted by Agents',
    subtitle: 'Research-led · Design engineering',
    tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],
    body: 'Designing for humans in an increasingly agentic world is our core. We map human needs into design, iterate with AI-driven workflows, and turn requirements into shipped screens in days \u2014 structured enough to scale, human enough to trust.',
    cta: 'Explore our design practice',
  },
  {
    num: '07',
    kicker: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
    body: "AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.",
    cta: 'Learn about managed services',
  },
]


/* Geometric SVG icons — mirror the stack-diagram layer shapes (scaled for 80×80) */
function CapIcon({ index }: { index: number }) {
  const ink = 'rgba(255,255,255,0.38)'
  const acc = 'var(--v20-accent)'

  const hex = (r: number) => {
    const a = r * 0.866
    const b = r * 0.5
    return `40,${40 - r} ${40 + a},${40 - b} ${40 + a},${40 + b} 40,${40 + r} ${40 - a},${40 + b} ${40 - a},${40 - b}`
  }

  const icons = [
    /* 0 Strategy — target concentric rings + crosshair */
    <svg key={0} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v20-icon-circle-draw v20-icon-delay-1' />
      <circle cx='40' cy='40' r='25' stroke={ink} strokeWidth='1' className='v20-icon-circle-draw v20-icon-delay-2' />
      <circle cx='40' cy='40' r='15' stroke={acc} strokeWidth='1.2' className='v20-icon-circle-draw v20-icon-delay-3' />
      <circle cx='40' cy='40' r='6' stroke={acc} strokeWidth='1' className='v20-icon-circle-draw v20-icon-delay-4' />
      <line x1='2' y1='40' x2='13' y2='40' stroke={ink} strokeWidth='0.8' className='v20-icon-line-draw v20-icon-delay-3' />
      <line x1='67' y1='40' x2='78' y2='40' stroke={ink} strokeWidth='0.8' className='v20-icon-line-draw v20-icon-delay-3' />
      <line x1='40' y1='2' x2='40' y2='13' stroke={ink} strokeWidth='0.8' className='v20-icon-line-draw v20-icon-delay-3' />
      <line x1='40' y1='67' x2='40' y2='78' stroke={ink} strokeWidth='0.8' className='v20-icon-line-draw v20-icon-delay-3' />
      <circle cx='40' cy='40' r='2.5' fill={acc} className='v20-icon-scale-in v20-icon-delay-5' />
    </svg>,
    /* 1 Cloud — server rack with 3 blades (mechanical infrastructure) */
    <svg key={1} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {/* Outer dashed housing */}
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v20-icon-circle-draw v20-icon-delay-1' />
      {/* Rack chassis */}
      <rect x='14' y='16' width='52' height='48' stroke={ink} strokeWidth='1' fill='rgba(255,255,255,0.03)' className='v20-icon-rect-draw v20-icon-delay-2' />
      {/* Mounting holes at the 4 corners */}
      {[[18, 20], [62, 20], [18, 60], [62, 60]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r='1.4' fill='none' stroke={ink} strokeWidth='0.7' className='v20-icon-scale-in' style={{ animationDelay: `${0.3 + i * 0.05}s` }} />
      ))}
      {/* Blade 1 — idle */}
      <rect x='22' y='23' width='36' height='8' stroke={ink} strokeWidth='0.8' fill='rgba(255,255,255,0.04)' className='v20-icon-rect-draw v20-icon-delay-3' />
      <rect x='24.5' y='25' width='3.5' height='4' stroke={ink} strokeWidth='0.4' fill='none' />
      <rect x='29' y='25' width='3.5' height='4' stroke={ink} strokeWidth='0.4' fill='none' />
      <line x1='47' y1='26' x2='55' y2='26' stroke={ink} strokeWidth='0.4' />
      <line x1='47' y1='28' x2='55' y2='28' stroke={ink} strokeWidth='0.4' />
      <circle cx='56' cy='27' r='0.9' fill={ink} />
      {/* Blade 2 — ACTIVE (orange) */}
      <rect x='22' y='36' width='36' height='8' stroke={acc} strokeWidth='1.1' fill='rgba(240,123,47,0.1)' className='v20-icon-rect-draw v20-icon-delay-4' />
      <rect x='24.5' y='38' width='3.5' height='4' stroke={acc} strokeWidth='0.5' fill='none' />
      <rect x='29' y='38' width='3.5' height='4' stroke={acc} strokeWidth='0.5' fill='none' />
      <line x1='47' y1='39' x2='55' y2='39' stroke={acc} strokeWidth='0.5' />
      <line x1='47' y1='41' x2='55' y2='41' stroke={acc} strokeWidth='0.5' />
      <circle cx='56' cy='40' r='1.2' fill={acc} className='v20-icon-pulse v20-icon-scale-in v20-icon-delay-5' />
      {/* Blade 3 — idle */}
      <rect x='22' y='49' width='36' height='8' stroke={ink} strokeWidth='0.8' fill='rgba(255,255,255,0.04)' className='v20-icon-rect-draw v20-icon-delay-3' />
      <rect x='24.5' y='51' width='3.5' height='4' stroke={ink} strokeWidth='0.4' fill='none' />
      <rect x='29' y='51' width='3.5' height='4' stroke={ink} strokeWidth='0.4' fill='none' />
      <line x1='47' y1='52' x2='55' y2='52' stroke={ink} strokeWidth='0.4' />
      <line x1='47' y1='54' x2='55' y2='54' stroke={ink} strokeWidth='0.4' />
      <circle cx='56' cy='53' r='0.9' fill={ink} />
    </svg>,
    /* 2 Data — hex grid (mirrors stack-layer 07) */
    <svg key={2} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v20-icon-circle-draw v20-icon-delay-1' />
      <polygon points={hex(32)} stroke={ink} strokeWidth='1' className='v20-icon-polygon-draw v20-icon-delay-2' />
      <polygon points={hex(16)} stroke={acc} strokeWidth='1.2' className='v20-icon-polygon-draw v20-icon-delay-3' />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <circle key={i} cx={40 + Math.cos(r) * 24} cy={40 + Math.sin(r) * 24} r='2' fill={acc} className='v20-icon-scale-in' style={{ animationDelay: `${0.5 + i * 0.06}s` }} />
      })}
      {[30, 90, 150, 210, 270, 330].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <line key={i} x1='40' y1='40' x2={40 + Math.cos(r) * 16} y2={40 + Math.sin(r) * 16} stroke={ink} strokeWidth='0.4' strokeDasharray='1.5 1.5' className='v20-icon-line-draw v20-icon-delay-4' />
      })}
      <circle cx='40' cy='40' r='2.5' fill={acc} className='v20-icon-scale-in v20-icon-delay-5' />
    </svg>,
    /* 3 Connected — hub with 6 nodes (mirrors stack-layer 06 Orchestration) */
    <svg key={3} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v20-icon-circle-draw v20-icon-delay-1' />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2
        const nx = 40 + Math.cos(a) * 26
        const ny = 40 + Math.sin(a) * 26
        return (
          <g key={i}>
            <line x1='40' y1='40' x2={nx} y2={ny} stroke={ink} strokeWidth='0.8' strokeDasharray='2 2' className='v20-icon-line-draw v20-icon-delay-3' />
            <circle cx={nx} cy={ny} r='3' fill={acc} className='v20-icon-scale-in' style={{ animationDelay: `${0.5 + i * 0.07}s` }} />
          </g>
        )
      })}
      <circle cx='40' cy='40' r='8' stroke={acc} strokeWidth='1.3' fill={acc} fillOpacity='0.15' className='v20-icon-circle-draw v20-icon-delay-4' />
      <circle cx='40' cy='40' r='3' fill={acc} className='v20-icon-scale-in v20-icon-delay-5' />
    </svg>,
    /* 4 AI Engineering — CPU chip with pins and AI core */
    <svg key={4} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {/* Outer housing */}
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v20-icon-circle-draw v20-icon-delay-1' />
      {/* Chip pins — 3 per side */}
      {[22, 36, 50].map((coord, i) => (
        <g key={i}>
          <line x1={coord} y1='14' x2={coord} y2='20' stroke={ink} strokeWidth='1' className='v20-icon-line-draw' style={{ animationDelay: `${0.3 + i * 0.04}s` }} />
          <line x1={coord} y1='60' x2={coord} y2='66' stroke={ink} strokeWidth='1' className='v20-icon-line-draw' style={{ animationDelay: `${0.35 + i * 0.04}s` }} />
          <line x1='14' y1={coord} x2='20' y2={coord} stroke={ink} strokeWidth='1' className='v20-icon-line-draw' style={{ animationDelay: `${0.4 + i * 0.04}s` }} />
          <line x1='60' y1={coord} x2='66' y2={coord} stroke={ink} strokeWidth='1' className='v20-icon-line-draw' style={{ animationDelay: `${0.45 + i * 0.04}s` }} />
        </g>
      ))}
      {/* Chip body — main square with notched corner indicator */}
      <rect x='20' y='20' width='40' height='40' stroke={ink} strokeWidth='1.2' fill='rgba(255,255,255,0.04)' className='v20-icon-rect-draw v20-icon-delay-2' />
      {/* Orientation notch — small circle in top-left corner of the chip */}
      <circle cx='24' cy='24' r='1.4' fill='none' stroke={ink} strokeWidth='0.7' className='v20-icon-scale-in v20-icon-delay-3' />
      {/* AI core — inner orange square with diagonal trace */}
      <rect x='30' y='30' width='20' height='20' stroke={acc} strokeWidth='1.3' fill='rgba(240,123,47,0.12)' className='v20-icon-rect-draw v20-icon-delay-4' />
      {/* Circuit traces inside core */}
      <line x1='30' y1='35' x2='35' y2='35' stroke={acc} strokeWidth='0.8' className='v20-icon-line-draw v20-icon-delay-5' />
      <line x1='35' y1='35' x2='35' y2='40' stroke={acc} strokeWidth='0.8' className='v20-icon-line-draw v20-icon-delay-5' />
      <line x1='45' y1='40' x2='45' y2='45' stroke={acc} strokeWidth='0.8' className='v20-icon-line-draw v20-icon-delay-5' />
      <line x1='45' y1='45' x2='50' y2='45' stroke={acc} strokeWidth='0.8' className='v20-icon-line-draw v20-icon-delay-5' />
      {/* Register dots — 4 corner markers on the core */}
      <circle cx='33' cy='33' r='1.2' fill={acc} className='v20-icon-scale-in v20-icon-delay-6' />
      <circle cx='47' cy='33' r='1.2' fill={acc} className='v20-icon-scale-in v20-icon-delay-6' />
      <circle cx='33' cy='47' r='1.2' fill={acc} className='v20-icon-scale-in v20-icon-delay-6' />
      <circle cx='47' cy='47' r='1.2' fill={acc} className='v20-icon-scale-in v20-icon-delay-6' />
      {/* Center activity dot */}
      <circle cx='40' cy='40' r='2' fill={acc} className='v20-icon-pulse v20-icon-scale-in v20-icon-delay-5' />
    </svg>,
    /* 5 Design — tri-orbital ellipses (mirrors stack-layer 05 Productivity) */
    <svg key={5} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v20-icon-circle-draw v20-icon-delay-1' />
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={ink} strokeWidth='0.9' className='v20-icon-circle-draw v20-icon-delay-2' />
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={ink} strokeWidth='0.9' transform='rotate(60 40 40)' className='v20-icon-circle-draw v20-icon-delay-3' />
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={acc} strokeWidth='1.2' transform='rotate(120 40 40)' className='v20-icon-circle-draw v20-icon-delay-4' />
      <circle cx='72' cy='40' r='2' fill={acc} className='v20-icon-scale-in v20-icon-delay-5' />
      <circle cx='8' cy='40' r='2' fill={acc} className='v20-icon-scale-in v20-icon-delay-5' />
      <circle cx='56' cy='12' r='2' fill={acc} opacity='0.7' className='v20-icon-scale-in v20-icon-delay-6' />
      <circle cx='24' cy='68' r='2' fill={acc} opacity='0.7' className='v20-icon-scale-in v20-icon-delay-6' />
      <circle cx='40' cy='40' r='4' fill={acc} className='v20-icon-scale-in v20-icon-delay-5' />
    </svg>,
    /* 6 Operations — nested hexagons (mirrors stack-layer 02 Architecture) */
    <svg key={6} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v20-icon-circle-draw v20-icon-delay-1' />
      <polygon points={hex(32)} stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v20-icon-polygon-draw v20-icon-delay-2' />
      <polygon points={hex(22)} stroke={ink} strokeWidth='1' className='v20-icon-polygon-draw v20-icon-delay-3' />
      <polygon points={hex(12)} stroke={acc} strokeWidth='1.3' className='v20-icon-polygon-draw v20-icon-delay-4' />
      <circle cx='40' cy='40' r='2.5' fill={acc} className='v20-icon-scale-in v20-icon-delay-5' />
    </svg>,
  ]
  return icons[index] || icons[0]
}

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [cycleMs, setCycleMs] = useState(CYCLE_MS)
  const cap = capabilities[active]

  // Auto-cycle through capabilities — honors extended pause after a manual click
  useEffect(() => {
    const id = setTimeout(() => {
      setActive((i) => (i + 1) % capabilities.length)
      setCycleMs(CYCLE_MS)
    }, cycleMs)
    return () => clearTimeout(id)
  }, [active, cycleMs])

  const selectTab = (i: number) => {
    setCycleMs(PAUSE_MS)
    setActive(i)
  }

  return (
    <section className='v20-section' id='solutions'>
      <div className='v20-container'>
        <div className='v20-cap-head'>
          <div className='v20-cap-head-left'>
            <div className='num'>N°03 / What we do</div>
            <h2>Six layers. <span style={{ color: 'var(--v20-accent)' }}>One partner.</span>{' '}<span style={{ whiteSpace: 'nowrap' }}>No handoff.</span></h2>
            <p className='lead'>Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer, not within silos.</p>
          </div>
        </div>

        <div className='v20-cap-interactive'>
            {/* Desktop: left sidebar tab list */}
            <div className='v20-cap-tabs' role='tablist'>
              {capabilities.map((c, i) => (
                <button
                  key={c.num}
                  role='tab'
                  aria-selected={i === active}
                  className={`v20-cap-tab ${i === active ? 'active' : ''}`}
                  onClick={() => selectTab(i)}
                >
                  <span className='tab-num'>{c.num}</span>
                  <span className='tab-label'>
                    <span className='tab-title'>{c.title}</span>
                    <span className='tab-kicker'>{c.kicker}</span>
                  </span>
                  <span
                    className='v20-cap-tab-progress'
                    style={i === active ? { animationDuration: `${cycleMs}ms` } : undefined}
                  />
                </button>
              ))}
            </div>

            {/* Mobile: compact prev/next navigator */}
            <div className='v20-cap-mobile-nav'>
              <button
                className='v20-cap-arrow'
                onClick={() => selectTab((active - 1 + capabilities.length) % capabilities.length)}
                aria-label='Previous capability'
              >
                ←
              </button>
              <div className='v20-cap-mobile-label'>
                <span className='mob-num'>{cap.num}</span>
                <span className='mob-title'>{cap.title}</span>
                <span className='mob-dots'>
                  {capabilities.map((_, i) => (
                    <span key={i} className={`mob-dot ${i === active ? 'active' : ''}`} onClick={() => selectTab(i)} />
                  ))}
                </span>
              </div>
              <button
                className='v20-cap-arrow'
                onClick={() => selectTab((active + 1) % capabilities.length)}
                aria-label='Next capability'
              >
                →
              </button>
              <span className='v20-cap-mobile-progress' />
            </div>

            {/* Detail panel — content left, icon column right */}
            <div className='v20-cap-detail' role='tabpanel'>
              <div className='v20-cap-detail-content'>
                <div className='v20-cap-detail-meta'>
                  <span className='detail-kicker'>{cap.kicker}</span>
                  <h3>{cap.title}</h3>
                  <span className='detail-subtitle'>{cap.subtitle}</span>
                </div>
                <p>{cap.body}</p>
                <div className='v20-cap-pills'>
                  {cap.tags.map((tag) => (
                    <span key={tag} className='v20-cap-pill'>{tag}</span>
                  ))}
                </div>
              </div>
              <div className='v20-cap-detail-icon'>
                <div className='v20-cap-icon-ring'>
                  <CapIcon index={active} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export function StackSection() {
  return (
    <section className='v20-section v20-stack-section' id='stack'>
      <div className='v20-stack-head'>
        <div className='num'>N°04 / The full stack</div>
        <h2>Our AI Transformation <span style={{ color: 'var(--v20-accent)' }}>Stack.</span></h2>
        <p className='lead'>Seven layers, one mechanical assembly. Drag to orbit, scroll to zoom — every component is built, integrated, and operated by us.</p>
      </div>
      <div className='v20-stack-3d-frame'>
        <iframe
          src='/v20/3d-stack/index.html'
          title='DBiz AI Transformation Stack — Exploded Assembly'
          loading='lazy'
          className='v20-stack-3d'
        />
      </div>
    </section>
  )
}
