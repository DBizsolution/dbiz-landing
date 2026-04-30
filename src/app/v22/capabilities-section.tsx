'use client'

import { useState, useEffect } from 'react'

const CYCLE_MS = 5000

type Capability = {
  num: string
  kicker: string          // architectural name (e.g., INTELLIGENCE)
  altLabel: string        // familiar service-area name (e.g., DATA & AI)
  title: string
  subtitle: string
  tags: string[]
  body: string
  cta: string
}

const capabilities: Capability[] = [
  {
    num: '01',
    kicker: 'AI Strategy & Architecture',
    altLabel: 'Tech Advisory',
    title: 'Strategy & Architecture',
    subtitle: 'Futures Studio · TechOffice Foundry',
    tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture, before a single line of code gets written.',
    cta: 'Get an AI readiness assessment',
  },
  {
    num: '02',
    kicker: 'AI-Ready Infrastructure',
    altLabel: 'Cloud',
    title: 'The AI Foundational Layer',
    subtitle: 'Multi-hyperscaler · Sovereign · Governed',
    tags: ['DBiz Scoop', 'Multi-Hyperscaler', 'Sovereign Cloud', 'GPU Orchestration', 'FinOps'],
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments purpose-built for agents, data pipelines, and AI models, with governance, cost controls, and observability enterprise IT requires.',
    cta: 'Talk to a cloud architect',
  },
  {
    num: '03',
    kicker: 'Intelligence',
    altLabel: 'Data & AI',
    title: 'The Intelligence Layer',
    subtitle: 'FactWeavers™ · Domain Data Cloud',
    tags: ['FactWeavers™', 'Domain Data Cloud', 'Data Mesh'],
    body: "Every AI initiative stalls on the same thing: the data isn’t ready. FactWeavers™ cleans, unifies, and activates enterprise data, pre-modelled for your industry, ready for agents from day one.",
    cta: 'See FactWeavers™ in action',
  },
  {
    num: '04',
    kicker: 'Orchestration',
    altLabel: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    subtitle: 'No rip and replace',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],
    body: "CRM, ERP, and platform investments don’t need replacing, they need unlocking — for agents. We connect existing systems so agents can read, write, and act across your entire application landscape.",
    cta: 'Explore integration options',
  },
  {
    num: '05',
    kicker: 'AI Engineering',
    altLabel: 'Product & AI Engineering',
    title: 'Engineered with AI, Shipped Continuously',
    subtitle: 'Agent Studio · Nexus · Perpetual Engineering',
    tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],
    body: 'AI-native applications built by AI-first teams. Agent Studio for multi-agent orchestration, Nexus as the dev platform, Perpetual Engineering across the SDLC.',
    cta: 'See what we’ve built',
  },
  {
    num: '06',
    kicker: 'Human Experience',
    altLabel: 'Experience Design',
    title: 'The Human-Agent Experience',
    subtitle: 'Research-led · Experience engineering',
    tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],
    body: 'Designing for humans in an increasingly agentic world is our core. We map human needs into design, iterate with AI-driven workflows, and turn requirements into shipped screens in days — structured enough to scale, human enough to trust.',
    cta: 'Explore our design practice',
  },
  {
    num: '07',
    kicker: 'AI Operations',
    altLabel: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
    body: "AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that’s never seen the architecture.",
    cta: 'Learn about managed services',
  },
]

/* Geometric SVG icons — navy strokes + orange accents (v22 light-mode tokens) */
function CapIcon({ index }: { index: number }) {
  const icons = [
    /* 0 Strategy — target */
    <svg key={0} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v22-ink-2)' strokeWidth='1' strokeDasharray='4 3' className='v22-icon-circle-draw v22-icon-delay-1' />
      <circle cx='40' cy='40' r='24' stroke='var(--v22-ink-2)' strokeWidth='1.2' className='v22-icon-circle-draw v22-icon-delay-2' />
      <circle cx='40' cy='40' r='14' stroke='var(--v22-accent)' strokeWidth='1.5' className='v22-icon-circle-draw v22-icon-delay-3' />
      <circle cx='40' cy='40' r='4' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-4' />
      <line x1='40' y1='3' x2='40' y2='15' stroke='var(--v22-ink-2)' strokeWidth='0.8' className='v22-icon-line-draw v22-icon-delay-3' />
      <line x1='40' y1='65' x2='40' y2='77' stroke='var(--v22-ink-2)' strokeWidth='0.8' className='v22-icon-line-draw v22-icon-delay-3' />
      <line x1='3' y1='40' x2='15' y2='40' stroke='var(--v22-ink-2)' strokeWidth='0.8' className='v22-icon-line-draw v22-icon-delay-3' />
      <line x1='65' y1='40' x2='77' y2='40' stroke='var(--v22-ink-2)' strokeWidth='0.8' className='v22-icon-line-draw v22-icon-delay-3' />
      <circle cx='40' cy='5' r='2' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-5' />
    </svg>,
    /* 1 Cloud — layered diamond */
    <svg key={1} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='4 3' className='v22-icon-circle-draw v22-icon-delay-1' />
      <path d='M 20 48 L 40 38 L 60 48 L 40 58 Z' stroke='var(--v22-ink-2)' strokeWidth='1.2' fill='none' className='v22-icon-polygon-draw v22-icon-delay-2' />
      <path d='M 24 40 L 40 32 L 56 40 L 40 48 Z' stroke='var(--v22-ink-2)' strokeWidth='1.2' fill='none' className='v22-icon-polygon-draw v22-icon-delay-3' />
      <path d='M 28 32 L 40 26 L 52 32 L 40 38 Z' stroke='var(--v22-accent)' strokeWidth='1.5' fill='none' className='v22-icon-polygon-draw v22-icon-delay-4' />
      <line x1='40' y1='26' x2='40' y2='58' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='2 2' className='v22-icon-line-draw v22-icon-delay-5' />
      <circle cx='40' cy='29' r='2.5' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-6' />
      <circle cx='28' cy='32' r='1.5' fill='var(--v22-accent)' opacity='0.6' className='v22-icon-scale-in v22-icon-delay-6' />
      <circle cx='52' cy='32' r='1.5' fill='var(--v22-accent)' opacity='0.6' className='v22-icon-scale-in v22-icon-delay-6' />
    </svg>,
    /* 2 Data — hexagon */
    <svg key={2} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='4 3' className='v22-icon-circle-draw v22-icon-delay-1' />
      <polygon points='40,8 68,23 68,57 40,72 12,57 12,23' stroke='var(--v22-ink-2)' strokeWidth='1.2' fill='none' className='v22-icon-polygon-draw v22-icon-delay-2' />
      <polygon points='40,20 56,29 56,51 40,60 24,51 24,29' stroke='var(--v22-accent)' strokeWidth='1.5' fill='none' className='v22-icon-polygon-draw v22-icon-delay-3' />
      <circle cx='40' cy='40' r='6' fill='var(--v22-accent)' opacity='0.15' stroke='var(--v22-accent)' strokeWidth='1.2' className='v22-icon-fade-in-el v22-icon-delay-4' />
      <circle cx='40' cy='40' r='2.5' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-5' />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <circle key={i} cx={40 + Math.cos(r) * 14} cy={40 + Math.sin(r) * 14} r='2' fill='var(--v22-accent)' opacity='0.6' className='v22-icon-scale-in' style={{ animationDelay: `${0.6 + i * 0.08}s` }} />
      })}
    </svg>,
    /* 3 Apps — connected nodes */
    <svg key={3} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='4 3' className='v22-icon-circle-draw v22-icon-delay-1' />
      <line x1='20' y1='27' x2='32' y2='40' stroke='var(--v22-ink-2)' strokeWidth='1' className='v22-icon-line-draw v22-icon-delay-3' />
      <line x1='60' y1='27' x2='48' y2='40' stroke='var(--v22-ink-2)' strokeWidth='1' className='v22-icon-line-draw v22-icon-delay-3' />
      <line x1='20' y1='53' x2='32' y2='40' stroke='var(--v22-ink-2)' strokeWidth='1' className='v22-icon-line-draw v22-icon-delay-4' />
      <line x1='60' y1='53' x2='48' y2='40' stroke='var(--v22-ink-2)' strokeWidth='1' className='v22-icon-line-draw v22-icon-delay-4' />
      <rect x='12' y='19' width='16' height='16' stroke='var(--v22-ink-2)' strokeWidth='1.2' fill='none' className='v22-icon-rect-draw v22-icon-delay-2' />
      <rect x='52' y='19' width='16' height='16' stroke='var(--v22-ink-2)' strokeWidth='1.2' fill='none' className='v22-icon-rect-draw v22-icon-delay-2' />
      <rect x='12' y='45' width='16' height='16' stroke='var(--v22-ink-2)' strokeWidth='1.2' fill='none' className='v22-icon-rect-draw v22-icon-delay-2' />
      <rect x='52' y='45' width='16' height='16' stroke='var(--v22-ink-2)' strokeWidth='1.2' fill='none' className='v22-icon-rect-draw v22-icon-delay-2' />
      <circle cx='40' cy='40' r='8' stroke='var(--v22-accent)' strokeWidth='1.5' fill='none' className='v22-icon-circle-draw v22-icon-delay-5' />
      <circle cx='40' cy='40' r='3' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-6' />
    </svg>,
    /* 4 Engineering — orbital */
    <svg key={4} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='4 3' className='v22-icon-circle-draw v22-icon-delay-1' />
      <circle cx='40' cy='40' r='26' stroke='var(--v22-ink-2)' strokeWidth='1.2' className='v22-icon-circle-draw v22-icon-delay-2' />
      <circle cx='40' cy='40' r='17' stroke='var(--v22-accent)' strokeWidth='1.5' className='v22-icon-circle-draw v22-icon-delay-3' />
      <circle cx='40' cy='40' r='3' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-5' />
      <ellipse cx='40' cy='40' rx='35' ry='14' stroke='var(--v22-ink-2)' strokeWidth='0.8' transform='rotate(30 40 40)' className='v22-icon-circle-draw v22-icon-delay-4' />
      <circle cx='62.5' cy='20' r='2.5' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-6' />
    </svg>,
    /* 5 Human Experience — radar */
    <svg key={5} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v22-ink-2)' strokeWidth='1.2' className='v22-icon-circle-draw v22-icon-delay-1' />
      <circle cx='40' cy='40' r='24' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='4 3' className='v22-icon-circle-draw v22-icon-delay-2' />
      <circle cx='40' cy='40' r='13' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='4 3' className='v22-icon-circle-draw v22-icon-delay-3' />
      <line x1='40' y1='5' x2='40' y2='75' stroke='var(--v22-ink-2)' strokeWidth='0.6' className='v22-icon-line-draw v22-icon-delay-4' />
      <line x1='5' y1='40' x2='75' y2='40' stroke='var(--v22-ink-2)' strokeWidth='0.6' className='v22-icon-line-draw v22-icon-delay-4' />
      <path d='M 40 40 L 40 5' stroke='var(--v22-accent)' strokeWidth='2' className='v22-icon-line-draw v22-icon-delay-5' />
      <circle cx='40' cy='40' r='3' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-6' />
      <circle cx='54' cy='22' r='2.5' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-7' />
    </svg>,
    /* 6 AI Operations — shield */
    <svg key={6} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='4 3' className='v22-icon-circle-draw v22-icon-delay-1' />
      <path d='M 40 6 L 70 21 L 70 51 L 40 74 L 10 51 L 10 21 Z' stroke='var(--v22-ink-2)' strokeWidth='1.2' fill='none' className='v22-icon-polygon-draw v22-icon-delay-2' />
      <path d='M 40 16 L 60 27 L 60 49 L 40 62 L 20 49 L 20 27 Z' stroke='var(--v22-accent)' strokeWidth='1.5' fill='none' className='v22-icon-polygon-draw v22-icon-delay-3' />
      <line x1='40' y1='16' x2='40' y2='62' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='2 2' className='v22-icon-line-draw v22-icon-delay-4' />
      <line x1='20' y1='38' x2='60' y2='38' stroke='var(--v22-ink-2)' strokeWidth='0.8' strokeDasharray='2 2' className='v22-icon-line-draw v22-icon-delay-4' />
      <circle cx='40' cy='38' r='6' fill='var(--v22-accent)' opacity='0.15' stroke='var(--v22-accent)' strokeWidth='1.2' className='v22-icon-fade-in-el v22-icon-delay-5' />
      <circle cx='40' cy='38' r='2.5' fill='var(--v22-accent)' className='v22-icon-scale-in v22-icon-delay-6' />
    </svg>,
  ]
  return icons[index] || icons[0]
}

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)
  const c = capabilities[active]

  // Auto-cycle through capabilities; click locks
  useEffect(() => {
    if (locked) return
    const id = setTimeout(() => setActive((i) => (i + 1) % capabilities.length), CYCLE_MS)
    return () => clearTimeout(id)
  }, [active, locked])

  const select = (i: number) => {
    setLocked(true)
    setActive(i)
  }

  return (
    <section className='v22-section' id='solutions' data-surface='light' style={{ ['--v22-paper' as string]: '#F3F0EC', ['--v22-paper-2' as string]: '#EAE5DB' }}>
      <div className='v22-container'>
        <div className='v22-cap-head'>
          <div className='v22-cap-head-left'>
            <div className='num'>N°03 / What we do</div>
            <h2>Seven layers. <span style={{ color: 'var(--v22-accent)' }}>One Frontier.</span>{' '}<span style={{ whiteSpace: 'nowrap' }}>No handoff.</span></h2>
            <p className='lead'>We re&#8209;architect every layer for the AI&#8209;native enterprise. No retrofits, no silos.</p>
          </div>
        </div>

        <div className='v22-cap-interactive'>
          {/* Desktop: left sidebar tab list */}
          <div className='v22-cap-tabs' role='tablist'>
            {capabilities.map((cap, i) => (
              <button
                key={cap.num}
                role='tab'
                aria-selected={i === active}
                className={`v22-cap-tab ${i === active ? 'active' : ''}`}
                onClick={() => select(i)}
              >
                <span className='tab-num'>{cap.num}</span>
                <span className='tab-label'>
                  <span className='tab-title'>{cap.title}</span>
                  <span className='tab-kicker'>{cap.altLabel.toUpperCase()}</span>
                </span>
                <span className='v22-cap-tab-progress' />
              </button>
            ))}
          </div>

          {/* Mobile: compact prev/next navigator */}
          <div className='v22-cap-mobile-nav'>
            <button
              className='v22-cap-arrow'
              onClick={() => select((active - 1 + capabilities.length) % capabilities.length)}
              aria-label='Previous capability'
            >
              ←
            </button>
            <div className='v22-cap-mobile-label'>
              <span className='mob-num'>{c.num}</span>
              <span className='mob-title'>{c.title}</span>
              <span className='mob-dots'>
                {capabilities.map((_, i) => (
                  <span key={i} className={`mob-dot ${i === active ? 'active' : ''}`} onClick={() => select(i)} />
                ))}
              </span>
            </div>
            <button
              className='v22-cap-arrow'
              onClick={() => select((active + 1) % capabilities.length)}
              aria-label='Next capability'
            >
              →
            </button>
            {!locked && <span className='v22-cap-mobile-progress' />}
          </div>

          {/* Detail panel — content left, icon column right */}
          <div className='v22-cap-detail' role='tabpanel' key={active}>
            <div className='v22-cap-detail-content'>
              <div className='v22-cap-detail-meta'>
                <span className='detail-kicker'>{c.altLabel.toUpperCase()}</span>
                <h3>{c.title}</h3>
                <span className='detail-subtitle'>{c.subtitle}</span>
              </div>
              <p>{c.body}</p>
              <div className='v22-cap-pills'>
                {c.tags.map((tag) => (
                  <span key={tag} className='v22-cap-pill'>{tag}</span>
                ))}
              </div>
              <a href='#cta' className='v22-cap-cta'>
                {c.cta} <span className='arrow'>&rarr;</span>
              </a>
            </div>
            <div className='v22-cap-detail-icon'>
              <div className='v22-cap-icon-ring'>
                <CapIcon index={active} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
