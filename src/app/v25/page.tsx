/* V25 — Ingress
   Editorial blueprint. Palantir-leaning restraint, DBiz DNA.
   Typographic-first, with blueprint illustration weight at the right moments. */

'use client'

import { useEffect, useRef, useState } from 'react'

/* ═══ Data ═══════════════════════════════════════════════════════════════ */

const problems = [
  {
    idx: 'I',
    kicker: 'The ambition gap',
    title: 'POCs that never shipped.',
    body: 'Most enterprises have already run AI pilots. Most of those pilots never became systems. The problem isn\u2019t the model — it\u2019s the distance between the demo and the runtime.',
  },
  {
    idx: 'II',
    kicker: 'The data gap',
    title: 'Models trained on stale truth.',
    body: 'Agents are only as sharp as the data they read. When the data is siloed, stale, or unmodelled for the domain, even the best model hallucinates confidently.',
  },
  {
    idx: 'III',
    kicker: 'The operation gap',
    title: 'Agents without orchestration.',
    body: 'One clever agent doesn\u2019t move the needle. What does: many agents, coordinated across your application estate, with humans in the loop where judgment matters.',
  },
]

const capabilities = [
  { num: '01', kicker: 'Tech Advisory',                 title: 'Strategy for AI, Architecture for Scale',    subtitle: 'Futures Studio · TechOffice Foundry',         tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],  body: 'Your business priorities become an AI and technology roadmap. Use-case prioritisation, readiness assessment, architecture blueprint, data governance and security posture — before a single line of code gets written.', cta: 'Get an AI readiness assessment' },
  { num: '02', kicker: 'Cloud',                         title: 'AI-Ready Infrastructure',                     subtitle: 'Multi-hyperscaler · Purpose-built',           tags: ['DBiz Scoop', 'Multi-Hyperscaler', 'Sovereign Cloud', 'GPU Orchestration', 'FinOps'], body: 'Cloud built for AI workloads, not retrofitted for them. Environments purpose-built for agents, data pipelines, and AI models — with governance, cost controls, and observability enterprise IT requires.', cta: 'Talk to a cloud architect' },
  { num: '03', kicker: 'Data & AI',                     title: 'The Intelligence Layer',                      subtitle: 'FactWeavers\u2122 · Domain Data Cloud',        tags: ['FactWeavers\u2122', 'Domain Data Cloud', 'Data Mesh'],                               body: 'Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers cleans, unifies, and activates enterprise data — pre-modelled for your industry, ready for agents from day one.', cta: 'See FactWeavers in action' },
  { num: '04', kicker: 'Business Apps & Integration',   title: 'Connected Systems, Not Silos',                subtitle: 'No rip and replace',                          tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],                                   body: 'CRM, ERP, and platform investments don\u2019t need replacing — they need unlocking for agents. We connect existing systems so agents can read, write, and act across your entire application landscape.', cta: 'Explore integration options' },
  { num: '05', kicker: 'Product & AI Engineering',      title: 'Engineered with AI, Shipped Continuously',    subtitle: 'Agent Studio · Nexus · Perpetual Engineering', tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],         body: 'AI-native applications built by AI-first teams. Agent Studio for multi-agent orchestration, Nexus as the dev platform, Perpetual Engineering across the SDLC.', cta: 'See what we\u2019ve built' },
  { num: '06', kicker: 'Research & Design',             title: 'Designed for Humans, Trusted by Agents',      subtitle: 'Research-led · Design engineering',           tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],             body: 'Designing for humans in an increasingly agentic world is our core. We map human needs into design, iterate with AI-driven workflows, and turn requirements into shipped screens in days — structured enough to scale, human enough to trust.', cta: 'Explore our design practice' },
  { num: '07', kicker: 'Managed Services',              title: 'AI-First Operations',                         subtitle: 'The team that built it runs it',              tags: ['Monitoring', 'Governance', 'Continuous Improvement'],                                body: 'AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.', cta: 'Learn about managed services' },
]

const stackLayers = [
  { n: '01', label: 'STRATEGY',         offering: { name: 'Futures Studio',        desc: 'AI ambition, roadmap & use-case prioritisation' },  accelerator: { name: 'DBiz Canvas',             desc: 'Concept to code in days' } },
  { n: '02', label: 'ARCHITECTURE',     offering: { name: 'TechOffice Foundry',    desc: 'AI foundation & Well-Architected review' },         accelerator: { name: 'DBiz Adapt',              desc: 'Architecting secure & sovereign AI' } },
  { n: '03', label: 'CLOUD',            offering: { name: 'AI-Ready Hyperscalers', desc: 'Enterprise AI foundation rollout' },                accelerator: { name: 'DBiz Scoop',              desc: 'AI-powered migration pipeline' } },
  { n: '04', label: 'DEVELOPMENT',      offering: { name: 'Perpetual Engineering', desc: 'AI agents across the full SDLC' },                  accelerator: { name: 'Nexus Platform',          desc: 'Enterprise AI dev environment' } },
  { n: '05', label: 'PRODUCTIVITY',     offering: { name: 'AI-Infused BizApps',    desc: 'Autonomous agents for SaaS platforms' },            accelerator: { name: 'Productivity Automation', desc: 'Claude Co-work & Copilot' } },
  { n: '06', label: 'ORCHESTRATION',    offering: { name: 'Agent Studio',          desc: 'Agentic AI & multi-agent orchestration' },          accelerator: { name: 'Nexus iConnector',        desc: 'No rip & replace integration' } },
  { n: '07', label: 'DATA & INSIGHTS',  offering: { name: 'DBiz Data Compass',     desc: 'AI-infused data engineering' },                     accelerator: { name: 'Factweavers.ai',          desc: 'Domain data cloud & quick insights' } },
]

const proofMetrics = [
  { val: '500+', label: 'Engineers across 6 countries' },
  { val: '50+',  label: 'Enterprise clients' },
  { val: '120',  label: 'Solutions delivered' },
  { val: '40+',  label: 'Agents running order-to-cash' },
]

const cases = [
  { metric: '38% faster',    kicker: 'Financial Services', title: 'Credit decisioning in hours, not weeks.',  body: 'Agent-driven risk models cut the underwriting cycle across retail, SME, and corporate books for a tier-1 lender.',          techs: ['Agent Studio', 'AWS', 'Snowflake'] },
  { metric: '$14M saved',    kicker: 'Logistics & Fleet',  title: 'Dispatch, rewritten nightly.',              body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.',                   techs: ['Azure', 'Boomi', 'Agent Studio'] },
  { metric: '6\u00d7 throughput', kicker: 'Aged Care',          title: 'Clinical documentation, automated.',        body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.',               techs: ['Claude', 'AWS', 'FactWeavers'] },
]

const method = [
  { days: '5',  title: 'Align & assess',        body: 'Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced. A costed roadmap.' },
  { days: '15', title: 'Specify & validate',    body: 'System specification generated. Data foundations validated. A working system shipped and tested with real users.' },
  { days: '90', title: 'Industrialise & scale', body: 'Enterprise-grade system live. Agents deployed. Data democratised. Operations handed to the team that built it.' },
]

const voices = [
  { quote: 'DBiz didn\u2019t sell us a roadmap. They delivered one — with the system live in production while the rest of the market was still running POCs.',                      name: 'Priya Nair',      role: 'Chief Data & AI Officer', company: 'Southern Cross Logistics' },
  { quote: 'We went from a six-month data clean-up estimate to production-ready FactWeavers in five weeks. The team understood our domain before we finished explaining it.',      name: 'Marcus Chen',     role: 'CTO',                     company: 'Carlisle Homes' },
  { quote: 'Agent Studio didn\u2019t just automate our workflows — it rewired how our teams think about operations. 40 agents running order-to-cash, zero handoff gaps.',           name: 'Sarah Al-Rashid', role: 'VP Operations',           company: 'Custom Fleet' },
]

const trust = ['ACFS Logistics', 'Aldar', 'Carlisle Homes', 'Custom Fleet', 'Southern Cross Care', 'Angle Auto', 'Smart Group', 'Nationwide Towing', 'Fleet Partners', 'Ventia']

/* ═══ Reveal hook — adds .in-view when element scrolls into viewport ═══ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('v25-in', e.isIntersecting)),
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/* ═══ Illustrations ═════════════════════════════════════════════════════ */

function HeroArtifact() {
  const labels = ['STRATEGY','ARCHITECTURE','CLOUD','DATA','APPLICATIONS','AGENTS','OPERATIONS']
  return (
    <svg viewBox='0 0 360 460' xmlns='http://www.w3.org/2000/svg' className='v25-hero-art' aria-hidden>
      <defs>
        <pattern id='v25-hero-grid' patternUnits='userSpaceOnUse' width='20' height='20'>
          <path d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(13,27,62,0.06)' strokeWidth='0.6' />
        </pattern>
      </defs>
      <rect x='0' y='0' width='360' height='460' fill='url(#v25-hero-grid)' />

      {/* Corner brackets */}
      <g stroke='#0D1B3E' strokeWidth='1'>
        <line x1='8' y1='8' x2='28' y2='8' /><line x1='8' y1='8' x2='8' y2='28' />
        <line x1='352' y1='8' x2='332' y2='8' /><line x1='352' y1='8' x2='352' y2='28' />
        <line x1='8' y1='452' x2='28' y2='452' /><line x1='8' y1='452' x2='8' y2='432' />
        <line x1='352' y1='452' x2='332' y2='452' /><line x1='352' y1='452' x2='352' y2='432' />
      </g>

      {/* Header strip */}
      <line x1='44' y1='44' x2='316' y2='44' stroke='rgba(13,27,62,0.2)' strokeWidth='0.6' />
      <text x='44' y='36' fontFamily='var(--font-mono)' fontSize='9' fill='rgba(13,27,62,0.55)' letterSpacing='1.5'>MEMO 001</text>
      <text x='180' y='36' fontFamily='var(--font-mono)' fontSize='9' fill='rgba(13,27,62,0.55)' textAnchor='middle' letterSpacing='1.5'>FRONTIER ORG</text>
      <text x='316' y='36' fontFamily='var(--font-mono)' fontSize='9' fill='rgba(13,27,62,0.55)' textAnchor='end' letterSpacing='1.5'>REV · 04</text>

      {/* Left ruler */}
      <g stroke='rgba(13,27,62,0.25)' strokeWidth='0.5'>
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1='22' y1={82 + i * 38} x2={i % 2 === 0 ? 34 : 28} y2={82 + i * 38} />
        ))}
      </g>

      {/* Layer stack */}
      {labels.map((lbl, i) => {
        const y = 80 + i * 38
        const isFocus = i === 3
        return (
          <g key={i}>
            <rect x='44' y={y} width='260' height='24' fill={isFocus ? '#E86A2A' : '#FFFFFF'} stroke='#0D1B3E' strokeWidth='0.8' />
            <text x='56' y={y + 16} fontFamily='var(--font-mono)' fontSize='9' fill={isFocus ? '#FFFFFF' : '#0D1B3E'} letterSpacing='1.4'>L·0{i + 1}</text>
            <text x='96' y={y + 16} fontFamily='var(--font-sans)' fontSize='10' fontWeight='600' fill={isFocus ? '#FFFFFF' : '#0D1B3E'} letterSpacing='0.3'>{lbl}</text>
            <circle cx='292' cy={y + 12} r='2.5' fill={isFocus ? '#FFFFFF' : '#E86A2A'} />
            {/* Callout to right */}
            <line x1='304' y1={y + 12} x2='328' y2={y + 12} stroke='rgba(13,27,62,0.22)' strokeWidth='0.4' strokeDasharray='2 2' />
            <text x='332' y={y + 15} fontFamily='var(--font-mono)' fontSize='7' fill='rgba(13,27,62,0.45)' letterSpacing='1'>L{i + 1}</text>
          </g>
        )
      })}

      {/* Footer dimension */}
      <line x1='44' y1='402' x2='304' y2='402' stroke='rgba(13,27,62,0.35)' strokeWidth='0.5' />
      <line x1='44' y1='398' x2='44' y2='406' stroke='rgba(13,27,62,0.35)' strokeWidth='0.5' />
      <line x1='304' y1='398' x2='304' y2='406' stroke='rgba(13,27,62,0.35)' strokeWidth='0.5' />
      <text x='174' y='418' fontFamily='var(--font-mono)' fontSize='9' fill='rgba(13,27,62,0.5)' textAnchor='middle' letterSpacing='1.5'>7 × LAYER · ONE PARTNER</text>

      {/* Pulse highlight on focus layer */}
      <rect x='41' y='195' width='266' height='30' fill='none' stroke='#E86A2A' strokeWidth='0.6' strokeDasharray='3 3' className='v25-hero-pulse' />
    </svg>
  )
}

function ThesisIcon({ i }: { i: number }) {
  const ink = 'rgba(13,27,62,0.55)'
  const acc = '#E86A2A'
  if (i === 0) {
    /* Ambition gap — two shapes with a dashed void between */
    return (
      <svg viewBox='0 0 160 72' xmlns='http://www.w3.org/2000/svg' className='v25-thesis-illo' aria-hidden>
        <rect x='8' y='18' width='44' height='36' fill='none' stroke={ink} strokeWidth='1' />
        <rect x='108' y='18' width='44' height='36' fill='none' stroke={ink} strokeWidth='1' />
        <line x1='52' y1='36' x2='108' y2='36' stroke={acc} strokeWidth='0.8' strokeDasharray='3 3' />
        <text x='80' y='14' fontFamily='var(--font-mono)' fontSize='8' fill={acc} textAnchor='middle' letterSpacing='1.5'>GAP</text>
        <circle cx='52' cy='36' r='2' fill={acc} />
        <circle cx='108' cy='36' r='2' fill={acc} />
        <text x='16' y='66' fontFamily='var(--font-mono)' fontSize='7' fill={ink} letterSpacing='1'>AMBITION</text>
        <text x='116' y='66' fontFamily='var(--font-mono)' fontSize='7' fill={ink} letterSpacing='1'>RUNTIME</text>
      </svg>
    )
  }
  if (i === 1) {
    /* Data gap — source → blocker → model */
    return (
      <svg viewBox='0 0 160 72' xmlns='http://www.w3.org/2000/svg' className='v25-thesis-illo' aria-hidden>
        <rect x='8' y='24' width='36' height='24' fill='none' stroke={ink} strokeWidth='1' />
        <text x='26' y='40' fontFamily='var(--font-mono)' fontSize='7' fill={ink} textAnchor='middle' letterSpacing='1'>DATA</text>
        <line x1='44' y1='36' x2='68' y2='36' stroke={ink} strokeWidth='0.8' strokeDasharray='2 2' />
        <g stroke={acc} strokeWidth='1.2'>
          <line x1='72' y1='28' x2='88' y2='44' />
          <line x1='88' y1='28' x2='72' y2='44' />
        </g>
        <line x1='92' y1='36' x2='116' y2='36' stroke={ink} strokeWidth='0.8' strokeDasharray='2 2' />
        <rect x='116' y='24' width='36' height='24' fill='none' stroke={ink} strokeWidth='1' />
        <text x='134' y='40' fontFamily='var(--font-mono)' fontSize='7' fill={ink} textAnchor='middle' letterSpacing='1'>MODEL</text>
        <text x='80' y='16' fontFamily='var(--font-mono)' fontSize='8' fill={acc} textAnchor='middle' letterSpacing='1.5'>STALE</text>
      </svg>
    )
  }
  /* Operation gap — lone node surrounded by disconnected nodes */
  return (
    <svg viewBox='0 0 160 72' xmlns='http://www.w3.org/2000/svg' className='v25-thesis-illo' aria-hidden>
      <circle cx='80' cy='36' r='10' fill='#E86A2A' opacity='0.85' />
      <text x='80' y='39' fontFamily='var(--font-mono)' fontSize='7' fill='#fff' textAnchor='middle'>A</text>
      {[[24, 18], [40, 58], [120, 18], [136, 58]].map(([x, y], k) => (
        <g key={k}>
          <circle cx={x} cy={y} r='6' fill='none' stroke={ink} strokeWidth='0.8' strokeDasharray='2 2' />
          <line x1='80' y1='36' x2={x} y2={y} stroke={ink} strokeWidth='0.4' strokeDasharray='1 3' opacity='0.4' />
        </g>
      ))}
      <text x='80' y='12' fontFamily='var(--font-mono)' fontSize='8' fill={acc} textAnchor='middle' letterSpacing='1.5'>NO ORCHESTRATION</text>
    </svg>
  )
}

function StackFrame() {
  return (
    <svg viewBox='0 0 1400 760' xmlns='http://www.w3.org/2000/svg' className='v25-stack-illo' aria-hidden preserveAspectRatio='none'>
      <defs>
        <pattern id='v25-stack-grid' patternUnits='userSpaceOnUse' width='24' height='24'>
          <path d='M 24 0 L 0 0 0 24' fill='none' stroke='rgba(255,255,255,0.03)' strokeWidth='0.5' />
        </pattern>
      </defs>
      <rect width='1400' height='760' fill='url(#v25-stack-grid)' />
    </svg>
  )
}

/* Per-layer blueprint icon — matches v24 DNA, simplified for editorial layout */
function StackIcon({ i }: { i: number }) {
  const ink = 'rgba(255,255,255,0.45)'
  const acc = '#E86A2A'
  const hex = (r: number) => `32,${32 - r} ${32 + r * 0.866},${32 - r / 2} ${32 + r * 0.866},${32 + r / 2} 32,${32 + r} ${32 - r * 0.866},${32 + r / 2} ${32 - r * 0.866},${32 - r / 2}`

  return (
    <svg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' className='v25-stack-icon' aria-hidden>
      <rect x='2' y='2' width='60' height='60' fill='none' stroke='rgba(255,255,255,0.12)' strokeWidth='0.6' strokeDasharray='2 2' />
      {i === 0 && (
        /* Strategy — bullseye + crosshair */
        <g>
          <circle cx='32' cy='32' r='22' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none' />
          <circle cx='32' cy='32' r='12' stroke={acc} strokeWidth='1.4' fill='none' />
          <line x1='6' y1='32' x2='12' y2='32' stroke={ink} strokeWidth='0.8' />
          <line x1='52' y1='32' x2='58' y2='32' stroke={ink} strokeWidth='0.8' />
          <line x1='32' y1='6' x2='32' y2='12' stroke={ink} strokeWidth='0.8' />
          <line x1='32' y1='52' x2='32' y2='58' stroke={ink} strokeWidth='0.8' />
          <circle cx='32' cy='32' r='2.5' fill={acc} />
        </g>
      )}
      {i === 1 && (
        /* Architecture — hex nested */
        <g>
          <polygon points={hex(24)} stroke={ink} strokeWidth='0.9' strokeDasharray='3 2' fill='none' />
          <polygon points={hex(14)} stroke={acc} strokeWidth='1.4' fill='none' />
          <circle cx='32' cy='32' r='2.5' fill={acc} />
        </g>
      )}
      {i === 2 && (
        /* Cloud — stacked lamellae */
        <g>
          <path d='M 12 44 L 32 30 L 52 44 L 32 54 Z' stroke={ink} strokeWidth='0.9' fill='none' />
          <path d='M 16 36 L 32 24 L 48 36 L 32 46 Z' stroke={ink} strokeWidth='0.9' fill='none' />
          <path d='M 20 28 L 32 18 L 44 28 L 32 38 Z' stroke={acc} strokeWidth='1.4' fill='none' />
          <circle cx='32' cy='23' r='2.5' fill={acc} />
        </g>
      )}
      {i === 3 && (
        /* Development — code chevrons </> */
        <g>
          <polyline points='24,18 14,32 24,46' stroke={ink} strokeWidth='1.4' fill='none' strokeLinecap='round' strokeLinejoin='round' />
          <polyline points='40,18 50,32 40,46' stroke={ink} strokeWidth='1.4' fill='none' strokeLinecap='round' strokeLinejoin='round' />
          <line x1='30' y1='48' x2='34' y2='16' stroke={acc} strokeWidth='1.6' strokeLinecap='round' />
        </g>
      )}
      {i === 4 && (
        /* Productivity — dual rings */
        <g>
          <circle cx='24' cy='32' r='14' stroke={ink} strokeWidth='1.1' fill='none' />
          <circle cx='40' cy='32' r='14' stroke={acc} strokeWidth='1.3' fill='none' />
          <circle cx='32' cy='32' r='2.5' fill={acc} />
        </g>
      )}
      {i === 5 && (
        /* Orchestration — hub + 6 nodes */
        <g>
          {[0, 1, 2, 3, 4, 5].map((n) => {
            const a = (n / 6) * Math.PI * 2 - Math.PI / 2
            const nx = 32 + Math.cos(a) * 20
            const ny = 32 + Math.sin(a) * 20
            return <circle key={n} cx={nx} cy={ny} r='2.5' fill={acc} opacity='0.85' />
          })}
          <circle cx='32' cy='32' r='8' stroke={acc} strokeWidth='1.2' fill={acc} fillOpacity='0.15' />
          <circle cx='32' cy='32' r='2.5' fill={acc} />
        </g>
      )}
      {i === 6 && (
        /* Data & Insights — hex data grid */
        <g>
          <polygon points={hex(24)} stroke={ink} strokeWidth='0.9' strokeDasharray='3 2' fill='none' />
          <polygon points={hex(14)} stroke={acc} strokeWidth='1.2' fill='none' />
          {[0, 60, 120, 180, 240, 300].map((a, idx) => {
            const r = (a - 90) * Math.PI / 180
            return <circle key={idx} cx={32 + Math.cos(r) * 19} cy={32 + Math.sin(r) * 19} r='1.6' fill={acc} />
          })}
          <circle cx='32' cy='32' r='2.2' fill={acc} />
        </g>
      )}
    </svg>
  )
}

/* ═══ Capabilities ══════════════════════════════════════════════════════ */

function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [cycleMs, setCycleMs] = useState(6000)
  const c = capabilities[active]
  const revealRef = useReveal<HTMLElement>()

  useEffect(() => {
    const t = setTimeout(() => {
      setActive((i) => (i + 1) % capabilities.length)
      setCycleMs(6000)
    }, cycleMs)
    return () => clearTimeout(t)
  }, [active, cycleMs])

  const select = (i: number) => {
    setCycleMs(15000)
    setActive(i)
  }

  return (
    <section id='capabilities' className='v25-caps v25-reveal' ref={revealRef}>
      <div className='v25-container'>
        <header className='v25-section-head'>
          <span className='v25-num'>§ 02 · Capabilities</span>
          <h2>
            Seven practices. <em>One partner.</em> No handoff.
          </h2>
          <p className='v25-section-lede'>
            We work across every layer of the enterprise transformation — with named products, shipped engagements, and a team that has done it fifty times before.
          </p>
        </header>

        <div className='v25-caps-layout'>
          <aside className='v25-caps-list' role='tablist'>
            {capabilities.map((cap, i) => (
              <button
                key={cap.num}
                role='tab'
                aria-selected={i === active}
                className={`v25-caps-row ${i === active ? 'active' : ''}`}
                onClick={() => select(i)}
              >
                <span className='v25-caps-row-num'>{cap.num}</span>
                <span className='v25-caps-row-label'>
                  <span className='v25-caps-row-kicker'>{cap.kicker}</span>
                  <span className='v25-caps-row-title'>{cap.title}</span>
                </span>
                <span className='v25-caps-row-arrow' aria-hidden>→</span>
                {i === active && (
                  <span
                    className='v25-caps-row-progress'
                    style={{ animationDuration: `${cycleMs}ms` }}
                  />
                )}
              </button>
            ))}
          </aside>

          <article className='v25-caps-detail' key={active}>
            <div className='v25-caps-detail-meta'>
              <span className='v25-mono'>{c.kicker}</span>
              <span className='v25-caps-sep' />
              <span className='v25-mono-tiny'>0{active + 1} / 07</span>
            </div>
            <h3 className='v25-caps-detail-title'>{c.title}</h3>
            <p className='v25-caps-detail-sub'>{c.subtitle}</p>
            <p className='v25-caps-detail-body'>{c.body}</p>
            <div className='v25-caps-detail-tags'>
              {c.tags.map((t) => <span key={t} className='v25-pill'>{t}</span>)}
            </div>
            <a href='#cta' className='v25-caps-detail-cta'>
              {c.cta} <span>→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ═══ Stack — blueprint diagram ═════════════════════════════════════════ */

function StackSection() {
  const revealRef = useReveal<HTMLElement>()
  return (
    <section id='stack' className='v25-stack v25-reveal' ref={revealRef}>
      <div className='v25-container'>
        <header className='v25-section-head v25-head-dark'>
          <span className='v25-num'>§ 03 · The Stack</span>
          <h2>
            Seven layers. <em>Fourteen products.</em> One assembly.
          </h2>
          <p className='v25-section-lede'>
            Every layer ships with a named offering (the engagement) and a named accelerator (the tool that shortens it). This is the operating pattern, not a slide.
          </p>
        </header>

        <div className='v25-stack-frame'>
          <StackFrame />

          {/* Blueprint corner brackets */}
          <span className='v25-stack-corner tl' aria-hidden />
          <span className='v25-stack-corner tr' aria-hidden />
          <span className='v25-stack-corner bl' aria-hidden />
          <span className='v25-stack-corner br' aria-hidden />

          {/* Meta strip */}
          <div className='v25-stack-meta'>
            <span>DWG · STACK-01</span>
            <span className='v25-stack-meta-bar' />
            <span>7 × LAYER · 14 × PRODUCT</span>
            <span className='v25-stack-meta-bar' />
            <span>REV · 04</span>
          </div>

          {/* Layers */}
          <ol className='v25-stack-layers'>
            {stackLayers.map((l, i) => (
              <li key={l.n} className='v25-stack-layer' style={{ '--i': i } as React.CSSProperties}>
                <div className='v25-stack-rail' aria-hidden>
                  <span className='v25-stack-rail-num'>L·{l.n}</span>
                  <StackIcon i={i} />
                  {i < stackLayers.length - 1 && <span className='v25-stack-rail-line' />}
                </div>
                <div className='v25-stack-body'>
                  <div className='v25-stack-head'>
                    <h3>{l.label}</h3>
                    <span className='v25-stack-head-ref'>SECTION {l.n}</span>
                  </div>
                  <div className='v25-stack-products'>
                    <div className='v25-stack-prod offering'>
                      <span className='v25-stack-prod-kind'>Offering</span>
                      <span className='v25-stack-prod-name'>{l.offering.name}</span>
                      <span className='v25-stack-prod-desc'>{l.offering.desc}</span>
                    </div>
                    <span className='v25-stack-plus' aria-hidden>+</span>
                    <div className='v25-stack-prod accelerator'>
                      <span className='v25-stack-prod-kind'>Accelerator</span>
                      <span className='v25-stack-prod-name'>{l.accelerator.name}</span>
                      <span className='v25-stack-prod-desc'>{l.accelerator.desc}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Foot strip */}
          <div className='v25-stack-foot'>
            <span>HUMAN-LED</span>
            <span className='v25-stack-foot-dot' aria-hidden />
            <span>AGENT-OPERATED</span>
            <span className='v25-stack-foot-dot' aria-hidden />
            <span>DATA-POWERED</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══ Page ═══════════════════════════════════════════════════════════════ */

export default function V25Page() {
  const [voice, setVoice] = useState(0)
  const [caseIdx, setCaseIdx] = useState(0)
  const heroRef = useReveal<HTMLElement>()
  const manifestoRef = useReveal<HTMLElement>()
  const thesisRef = useReveal<HTMLElement>()
  const proofRef = useReveal<HTMLElement>()
  const casesRef = useReveal<HTMLElement>()
  const methodRef = useReveal<HTMLElement>()
  const voicesRef = useReveal<HTMLElement>()
  const ctaRef = useReveal<HTMLElement>()

  useEffect(() => {
    const t = setInterval(() => setVoice((i) => (i + 1) % voices.length), 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* ─── Nav ─── */}
      <nav className='v25-nav'>
        <div className='v25-nav-inner'>
          <a href='/v25' className='v25-nav-brand'>
            <img src='/dbiz-logo-dark.svg' alt='DBiz.ai' width='80' height='42' />
          </a>
          <ul className='v25-nav-links'>
            <li><a href='#thesis'>Thesis</a></li>
            <li><a href='#capabilities'>Capabilities</a></li>
            <li><a href='#stack'>The Stack</a></li>
            <li><a href='#method'>Method</a></li>
          </ul>
          <a href='#cta' className='v25-nav-cta'>Book an assessment <span>→</span></a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className='v25-hero v25-reveal' ref={heroRef}>
        <div className='v25-container'>
          <div className='v25-hero-grid'>
            <div className='v25-hero-copy'>
              <div className='v25-kicker'>
                <span className='v25-kicker-tick' />
                <span>Memo 001 · The Frontier Organisation</span>
              </div>
              <h1 className='v25-hero-title'>
                You don&apos;t have an <br />
                AI problem. You have <br />
                <em>a coordination problem.</em>
              </h1>
              <p className='v25-hero-lede'>
                Most enterprises have already tried AI. Most of it didn&apos;t scale — not because the technology failed, but because no one connected ambition to architecture, architecture to data, data to delivery. We operate the layer between.
              </p>
              <div className='v25-hero-ctas'>
                <a href='#thesis' className='v25-cta-primary'>Read the thesis <span>→</span></a>
                <a href='#cta' className='v25-cta-ghost'>Book an assessment</a>
              </div>
              <div className='v25-hero-foot'>
                <span>Human-led</span>
                <span className='v25-dot' aria-hidden />
                <span>Agent-operated</span>
                <span className='v25-dot' aria-hidden />
                <span>Data-powered</span>
              </div>
            </div>
            <div className='v25-hero-side'>
              <HeroArtifact />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Manifesto ─── */}
      <section className='v25-manifesto v25-reveal' ref={manifestoRef}>
        <div className='v25-container'>
          <p className='v25-manifesto-line'>
            The Frontier Organisation is not a product.
            <br />
            <em>It is a coordination pattern.</em>
          </p>
        </div>
      </section>

      {/* ─── Trust ─── */}
      <section className='v25-trust'>
        <div className='v25-container'>
          <div className='v25-trust-label'>
            <span>Engaged by</span>
            <span className='v25-hair' />
            <span>Client register</span>
          </div>
          <div className='v25-trust-row' aria-hidden>
            <div className='v25-trust-track'>
              {[...trust, ...trust].map((c, i) => (
                <span key={i} className='v25-trust-chip'>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Thesis ─── */}
      <section id='thesis' className='v25-thesis v25-reveal' ref={thesisRef}>
        <div className='v25-container'>
          <header className='v25-section-head'>
            <span className='v25-num'>§ 01 · Thesis</span>
            <h2>
              Three gaps live between <em>ambition</em> and <em>runtime.</em>
            </h2>
            <p className='v25-section-lede'>
              Closing them is not a tool purchase. It is an operating discipline — applied across strategy, data, systems, and agents — with a team that has shipped it fifty times before.
            </p>
          </header>
          <div className='v25-thesis-grid'>
            {problems.map((p, i) => (
              <article key={p.idx} className='v25-thesis-card'>
                <span className='v25-thesis-idx'>{p.idx}</span>
                <ThesisIcon i={i} />
                <span className='v25-thesis-kicker'>{p.kicker}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Capabilities (§02) ─── */}
      <CapabilitiesSection />

      {/* ─── Stack (§03) ─── */}
      <StackSection />

      {/* ─── Proof (§04) ─── */}
      <section id='proof' className='v25-proof v25-reveal' ref={proofRef}>
        <div className='v25-container'>
          <header className='v25-section-head'>
            <span className='v25-num'>§ 04 · Proof</span>
            <h2>
              A track record of <em>enterprise delivery.</em>
            </h2>
          </header>
          <div className='v25-proof-grid'>
            {proofMetrics.map((m, i) => (
              <div key={i} className='v25-proof-cell'>
                <span className='v25-proof-val'>{m.val}</span>
                <span className='v25-proof-lbl'>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Evidence (§05) ─── */}
      <section className='v25-cases v25-reveal' ref={casesRef}>
        <div className='v25-container'>
          <header className='v25-section-head'>
            <span className='v25-num'>§ 05 · Evidence</span>
            <h2>
              Proof, where it <em>matters.</em>
            </h2>
          </header>
          <div className='v25-cases-tabs' role='tablist'>
            {cases.map((c, i) => (
              <button
                key={i}
                className={`v25-cases-tab ${i === caseIdx ? 'active' : ''}`}
                onClick={() => setCaseIdx(i)}
                role='tab'
                aria-selected={i === caseIdx}
              >
                <span className='v25-cases-tab-idx'>0{i + 1}</span>
                <span className='v25-cases-tab-label'>{c.kicker}</span>
              </button>
            ))}
          </div>
          <article className='v25-case' key={caseIdx}>
            <div className='v25-case-metric'>
              <span className='v25-case-val'>{cases[caseIdx].metric}</span>
              <span className='v25-case-kicker'>{cases[caseIdx].kicker}</span>
            </div>
            <div className='v25-case-body'>
              <h3>{cases[caseIdx].title}</h3>
              <p>{cases[caseIdx].body}</p>
              <div className='v25-case-techs'>
                {cases[caseIdx].techs.map((t) => <span key={t} className='v25-pill'>{t}</span>)}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ─── Method (§06) ─── */}
      <section id='method' className='v25-method v25-reveal' ref={methodRef}>
        <div className='v25-container'>
          <header className='v25-section-head v25-head-dark'>
            <span className='v25-num'>§ 06 · Method</span>
            <h2>
              Built for pace, <em>not paperwork.</em>
            </h2>
            <p className='v25-section-lede'>
              Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated early, not late.
            </p>
          </header>
          <div className='v25-method-grid'>
            {method.map((m, i) => (
              <article key={i} className='v25-method-card'>
                <div className='v25-method-days'>
                  <span className='v25-method-val'>{m.days}</span>
                  <span className='v25-method-lbl'>days</span>
                </div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
                <span className='v25-method-idx'>Phase 0{i + 1}</span>
              </article>
            ))}
          </div>
          <p className='v25-method-foot'>
            Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by environment.
          </p>
        </div>
      </section>

      {/* ─── Voices (§07) ─── */}
      <section className='v25-voices v25-reveal' ref={voicesRef}>
        <div className='v25-container'>
          <header className='v25-section-head'>
            <span className='v25-num'>§ 07 · Voices</span>
          </header>
          <figure className='v25-voice' key={voice}>
            <blockquote>
              <span className='v25-quote-mark' aria-hidden>&ldquo;</span>
              {voices[voice].quote}
            </blockquote>
            <figcaption>
              <span className='v25-voice-name'>{voices[voice].name}</span>
              <span className='v25-voice-sep' />
              <span className='v25-voice-role'>{voices[voice].role}, {voices[voice].company}</span>
            </figcaption>
            <div className='v25-voice-nav'>
              {voices.map((_, i) => (
                <button
                  key={i}
                  className={`v25-voice-dot ${i === voice ? 'active' : ''}`}
                  onClick={() => setVoice(i)}
                  aria-label={`Voice ${i + 1}`}
                />
              ))}
            </div>
          </figure>
        </div>
      </section>

      {/* ─── CTA (§08) ─── */}
      <section id='cta' className='v25-cta v25-reveal' ref={ctaRef}>
        <div className='v25-container'>
          <div className='v25-cta-inner'>
            <span className='v25-num v25-cta-num'>§ 08 · Ingress</span>
            <h2 className='v25-cta-title'>
              Become a <em>Frontier Organisation.</em>
            </h2>
            <p className='v25-cta-lede'>
              Start with a costed roadmap and an architecture assessment. Five days from conversation to plan.
            </p>
            <div className='v25-cta-actions'>
              <a href='/contact' className='v25-cta-primary'>Book your assessment <span>→</span></a>
              <a href='/contact' className='v25-cta-ghost'>Or talk to our team</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className='v25-footer'>
        <div className='v25-container'>
          <div className='v25-footer-top'>
            <div className='v25-footer-brand'>
              <img src='/dbiz-logo.svg' alt='DBiz.ai' width='80' height='42' />
              <p>Human-led · Agent-operated · Data-powered</p>
              <p className='v25-mono-tiny'>10 offices · 6 countries · 800+ people</p>
            </div>
            <div className='v25-footer-cols'>
              <div>
                <span className='v25-mono'>Company</span>
                <ul><li><a href='#'>About</a></li><li><a href='#'>Careers</a></li><li><a href='#'>Contact</a></li><li><a href='#'>Blog</a></li></ul>
              </div>
              <div>
                <span className='v25-mono'>Solutions</span>
                <ul><li><a href='#'>Strategy</a></li><li><a href='#'>Cloud</a></li><li><a href='#'>Data &amp; AI</a></li><li><a href='#'>Agents</a></li></ul>
              </div>
              <div>
                <span className='v25-mono'>Partners</span>
                <ul><li><a href='#'>AWS</a></li><li><a href='#'>Azure</a></li><li><a href='#'>Salesforce</a></li><li><a href='#'>Anthropic</a></li></ul>
              </div>
            </div>
          </div>
          <div className='v25-footer-legal'>
            <span className='v25-mono-tiny'>© 2026 DBiz.ai · All rights reserved.</span>
            <span className='v25-mono-tiny'>Built for coordination.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
