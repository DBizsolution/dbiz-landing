'use client'

import { useEffect, useRef, useState } from 'react'
import { useMouseParallax, useRevealOnScroll, useScrollParallax } from './motion'

/* ═══════════════════════════════════════════════════════════════
   V26 — Organic Frontier
   Same content and palette as V24, restructured around curves,
   parallax layers, organic shapes, WCAG AA compliant.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Data (verbatim from v24) ─── */

const stats = [
  { coord: 'A · 01', val: '500+', lbl: 'Engineers' },
  { coord: 'A · 02', val: '50+', lbl: 'Enterprise Clients' },
  { coord: 'A · 03', val: '120', lbl: 'Solutions delivered' },
  { coord: 'A · 04', val: '6', lbl: 'Countries' },
]

const logos = ['ASCEND', 'VERTEX', 'NORTHLINE', 'MERIDIAN', 'HELIX', 'KRONOS', 'ORBIT.AI', 'PRISM SYSTEMS', 'ATLAS', 'FJORD LABS', 'CIPHER', 'SOLARIS', 'TESSERA', 'ARCANUM', 'NIMBUS', 'HEDRON', 'SENTIR GROUP', 'LUMEN CO.']

const capabilities = [
  {
    num: '01',
    kicker: 'Tech Advisory',
    title: 'Strategy for AI, Architecture for Scale',
    subtitle: 'Futures Studio · TechOffice Foundry',
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture, before a single line of code gets written.',
    cta: 'Get an AI readiness assessment',
    tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],
  },
  {
    num: '02',
    kicker: 'Cloud',
    title: 'AI-Ready Infrastructure',
    subtitle: 'Multi-hyperscaler · Purpose-built',
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments purpose-built for agents, data pipelines, and AI models, with governance, cost controls, and observability enterprise IT requires.',
    cta: 'Talk to a cloud architect',
    tags: ['DBiz Scoop', 'Multi-Hyperscaler', 'Sovereign Cloud', 'GPU Orchestration', 'FinOps'],
  },
  {
    num: '03',
    kicker: 'Data & AI',
    title: 'The Intelligence Layer',
    subtitle: 'FactWeavers™ · Domain Data Cloud',
    body: 'Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data, pre-modelled for your industry, ready for agents from day one.',
    cta: 'See FactWeavers\u2122 in action',
    tags: ['FactWeavers™', 'Domain Data Cloud', 'Data Mesh'],
  },
  {
    num: '04',
    kicker: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    subtitle: 'No rip and replace',
    body: 'CRM, ERP, and platform investments don\u2019t need replacing, they need unlocking \u2014 for agents. We connect existing systems so agents can read, write, and act across your entire application landscape.',
    cta: 'Explore integration options',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],
  },
  {
    num: '05',
    kicker: 'Product & AI Engineering',
    title: 'Engineered with AI, Shipped Continuously',
    subtitle: 'Agent Studio · Nexus · Perpetual Engineering',
    body: 'AI-native applications built by AI-first teams. Agent Studio for multi-agent orchestration, Nexus as the dev platform, Perpetual Engineering across the SDLC.',
    cta: 'See what we\u2019ve built',
    tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],
  },
  {
    num: '06',
    kicker: 'Research & Design',
    title: 'Designed for Humans, Trusted by Agents',
    subtitle: 'Research-led · Design engineering',
    body: 'Designing for humans in an increasingly agentic world is our core. We map human needs into design, iterate with AI-driven workflows, and turn requirements into shipped screens in days \u2014 structured enough to scale, human enough to trust.',
    cta: 'Explore our design practice',
    tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],
  },
  {
    num: '07',
    kicker: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    body: 'AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.',
    cta: 'Learn about managed services',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
  },
]

const stackLayers = [
  { num: 'L01', label: 'STRATEGY', top: 'Futures Studio', topDesc: 'AI ambition, roadmap & use-case prioritisation', bot: 'DBiz Canvas', botDesc: 'Concept to code in days' },
  { num: 'L02', label: 'ARCHITECTURE', top: 'TechOffice Foundry', topDesc: 'AI foundation & Well-Architected review', bot: 'DBiz Adapt', botDesc: 'Architecting Secure and Sovereign AI' },
  { num: 'L03', label: 'CLOUD', top: 'AI-Ready Hyperscalers', topDesc: 'Enterprise AI Foundation rollout', bot: 'DBiz Scoop', botDesc: 'AI-Powered migration pipeline' },
  { num: 'L04', label: 'DEVELOPMENT', top: 'Perpetual Engineering', topDesc: 'AI agents across the full SDLC', bot: 'Nexus Platform', botDesc: 'Enterprise AI dev environment' },
  { num: 'L05', label: 'PRODUCTIVITY', top: 'AI-Infused BizApps', topDesc: 'Autonomous agents for SaaS platforms', bot: 'Productivity Automation', botDesc: 'Claude Co-work & Copilot' },
  { num: 'L06', label: 'ORCHESTRATION', top: 'Agent Studio', topDesc: 'Agentic AI & multi-agent orchestration', bot: 'Nexus iConnector', botDesc: 'No rip & replace integration' },
  { num: 'L07', label: 'DATA & INSIGHTS', top: 'DBiz Data Compass', topDesc: 'AI-infused data engineering', bot: 'Factweavers.ai', botDesc: 'Domain data cloud & quick insights' },
]

const testimonials = [
  { quote: 'DBiz didn\u2019t sell us a roadmap. They delivered one \u2014 with the system live in production while the rest of the market was still running POCs.', name: 'Priya Nair', role: 'Chief Data & AI Officer', company: 'Southern Cross Logistics' },
  { quote: 'We went from a six-month data clean-up estimate to production-ready FactWeavers in five weeks. The team understood our domain before we finished explaining it.', name: 'Marcus Chen', role: 'CTO', company: 'Carlisle Homes' },
  { quote: 'Agent Studio didn\u2019t just automate our workflows \u2014 it rewired how our teams think about operations. 40 agents running order-to-cash, zero handoff gaps.', name: 'Sarah Al-Rashid', role: 'VP Operations', company: 'Custom Fleet' },
  { quote: 'Most consultancies pitch AI. DBiz ships it. Our underwriting cycle went from weeks to hours \u2014 and the architecture scales without rework.', name: 'James Whitfield', role: 'Head of Digital Transformation', company: 'Angle Auto Finance' },
]

type ProvenTag = 'industry' | 'solution' | 'technology'
const cases: { metric: string; title: string; kicker: string; body: string; image: string; tag: ProvenTag; techs: string[] }[] = [
  { metric: '38% faster', title: 'Credit decisioning in hours, not weeks', kicker: 'Financial Services', body: 'Agent-driven risk models cut the underwriting cycle time for a tier-1 lender across retail, SME, and corporate books.', image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'industry', techs: ['Agent Studio', 'AWS', 'Snowflake'] },
  { metric: '$14M saved', title: 'Dispatch, rewritten nightly', kicker: 'Logistics & Fleet', body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.', image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'industry', techs: ['Azure', 'Boomi', 'Agent Studio'] },
  { metric: '6\u00d7 throughput', title: 'Clinical documentation, automated', kicker: 'Aged Care', body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.', image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'industry', techs: ['Claude', 'AWS', 'FactWeavers'] },
  { metric: '11 domains', title: 'Industry-ready data cloud', kicker: 'FactWeavers\u2122', body: 'Pre-modelled data products shipped without a six-month clean-up phase.', image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'solution', techs: ['Snowflake', 'Databricks', 'AWS'] },
  { metric: '40+ agents', title: 'Multi-agent orchestration at scale', kicker: 'Agent Studio', body: 'Cross-system agents running order-to-cash for a Fortune 500 manufacturer.', image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'solution', techs: ['Claude', 'GPT', 'MuleSoft'] },
  { metric: '5 days', title: 'Concept to working build', kicker: 'DBiz Canvas', body: 'Product teams move from brief to production code inside a single sprint.', image: 'https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'solution', techs: ['Nexus', 'AWS', 'React'] },
  { metric: '40+', title: 'AWS certified experts across the practice', kicker: 'Cloud & AI', body: 'AWS Advanced, Azure Solutions, GCP \u2014 multi-cloud foundations built for AI workloads.', image: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'technology', techs: ['AWS', 'Azure', 'GCP'] },
  { metric: '200+', title: 'Microsoft certifications across the team', kicker: 'Business Apps', body: 'Salesforce, Dynamics 365, Power Platform \u2014 connected systems, not silos.', image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'technology', techs: ['Salesforce', 'Dynamics 365', 'Power Platform'] },
  { metric: '4 platforms', title: 'Data platforms unified under one roof', kicker: 'Data Platforms', body: 'Snowflake, Databricks, Fabric, BigQuery \u2014 with FactWeavers\u2122 built on top.', image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop', tag: 'technology', techs: ['Snowflake', 'Databricks', 'BigQuery'] },
]

const phases = [
  { days: '5', title: 'Align & Assess', body: 'Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.', outcome: 'Board-aligned AI roadmap.' },
  { days: '15', title: 'Specify & Validate', body: 'System specification generated. Data foundations validated. Working system shipped and tested with real users in your environment.', outcome: 'Validated MVP in production.' },
  { days: '50', title: 'Industrialise & Scale', body: 'Enterprise-grade system live. Agents deployed. Data democratised. Operations handed to the team that built it.', outcome: 'Frontier Organisation operational.' },
]

const reasons = [
  { idx: '01', label: 'EXPERTISE', title: 'Expertise that works together.', body: 'Strategy, cloud, data, platforms, product, design, operations \u2014 our teams work across every layer, not within silos.', angle: 0 },
  { idx: '02', label: 'SCALE', title: 'Transformation at scale.', body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery \u2014 not a pitch deck.', angle: 60 },
  { idx: '03', label: 'DELIVERY', title: 'Time-boxed delivery.', body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery \u2014 so we don\u2019t allow it.', angle: 120 },
  { idx: '04', label: 'PLATFORMS', title: 'Production platforms.', body: 'NEXUS, Agent Studio, FactWeavers\u2122, DBiz Canvas \u2014 production systems deployed in enterprise environments.', angle: 180 },
  { idx: '05', label: 'PARTNERS', title: 'Certified at the highest tiers.', body: 'AWS Advanced, Azure Solutions, Salesforce, Dynamics 365, Snowflake, Databricks, Anthropic, Boomi, MuleSoft.', angle: 240 },
  { idx: '06', label: 'DOMAIN', title: 'Sector expertise, engineered.', body: 'Financial Services, Logistics, Real Estate, Aged Care, Automotive, Government \u2014 with FactWeavers\u2122 pre-built for every vertical.', angle: 300 },
]

/* ─── Nav ─── */

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <nav className={`v26-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className='v26-nav-inner'>
        <a className='v26-nav-logo' href='#top' aria-label='DBiz.ai home'>
          <img src='/dbiz-logo.svg' alt='DBiz.ai' />
        </a>
        <ul className='v26-nav-links'>
          <li><a href='#solutions'>Our Solutions</a></li>
          <li><a href='#work'>Our Work</a></li>
          <li><a href='#about'>About Us</a></li>
          <li><a href='#careers'>Careers</a></li>
        </ul>
        <a href='#cta' className='v26-nav-cta'>Get an assessment <span aria-hidden>→</span></a>
        <details className='v26-nav-mobile'>
          <summary className='v26-nav-burger' aria-label='Menu'><span /><span /><span /></summary>
          <ul className='v26-nav-mobile-panel'>
            <li><a href='#solutions'>Our Solutions</a></li>
            <li><a href='#work'>Our Work</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#careers'>Careers</a></li>
            <li><a href='#cta'>Get an assessment →</a></li>
          </ul>
        </details>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */

function Hero() {
  const orbRef = useMouseParallax<HTMLDivElement>(18)
  const bgRef = useScrollParallax(0.3) as React.RefObject<HTMLDivElement>
  return (
    <section className='v26-hero' id='top'>
      <div ref={bgRef} className='v26-hero-bg' aria-hidden />
      <svg className='v26-hero-contour' viewBox='0 0 1440 900' preserveAspectRatio='none' aria-hidden>
        <defs>
          <linearGradient id='v26-contour-grad' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0%' stopColor='rgba(255,255,255,0.08)' />
            <stop offset='100%' stopColor='rgba(255,255,255,0)' />
          </linearGradient>
        </defs>
        {Array.from({ length: 18 }).map((_, i) => (
          <path
            key={i}
            d={`M -100 ${120 + i * 44} Q 360 ${80 + i * 42 + (i % 2 ? 20 : -20)} 720 ${140 + i * 44} T 1540 ${160 + i * 44}`}
            fill='none'
            stroke='url(#v26-contour-grad)'
            strokeWidth='1'
          />
        ))}
      </svg>

      <div className='v26-container v26-hero-inner'>
        <div>
          <div className='v26-hero-eyebrow'>
            <span className='dot' aria-hidden />
            <span>Human-Led</span>
            <span className='sep' aria-hidden>·</span>
            <span>Agent-Operated</span>
            <span className='sep' aria-hidden>·</span>
            <span>Data-Powered</span>
          </div>
          <div className='v26-hero-title'>
            <h1>
              <span className='line'><span>Your enterprise.</span></span>
              <span className='line'><span><em>Agent-operated.</em></span></span>
              <span className='line'><span>Starting now.</span></span>
            </h1>
          </div>
          <p className='v26-hero-body'>
            Most enterprises have tried AI. Most of it didn&rsquo;t scale &mdash; not because the technology failed, but because no one connected the ambition to what actually got built. We close that gap. We call the result a Frontier Organisation: human-led, agent-operated, data-powered.
          </p>
          <div className='v26-hero-ctas'>
            <a href='#solutions' className='v26-cta-primary'>
              Explore our AI stack <span className='arrow' aria-hidden>→</span>
            </a>
            <a href='/contact' className='v26-cta-text'>Talk to our team</a>
          </div>
        </div>
        <div ref={orbRef} className='v26-hero-orb' aria-hidden>
          <HeroOrb />
        </div>
      </div>
      <div className='v26-scroll-hint' aria-hidden>Scroll</div>
    </section>
  )
}

function HeroOrb() {
  // V24's exploded stack blueprint — ported to V26 tokens + organic wrapper
  const layers = [
    { label: 'STRATEGY', code: 'S·01' },
    { label: 'ARCHITECTURE', code: 'S·02' },
    { label: 'CLOUD', code: 'S·03' },
    { label: 'DATA', code: 'S·04' },
    { label: 'APPS', code: 'S·05' },
    { label: 'AGENTS', code: 'S·06' },
    { label: 'OPS', code: 'S·07' },
  ]
  const particlePositions = [200, 230, 250, 270, 300]
  return (
    <svg viewBox='0 0 520 560' xmlns='http://www.w3.org/2000/svg' aria-hidden>
      <defs>
        <pattern id='v26-hatch' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
          <line x1='0' y1='0' x2='0' y2='6' stroke='rgba(255,255,255,0.15)' strokeWidth='1' />
        </pattern>
        <pattern id='v26-dot' patternUnits='userSpaceOnUse' width='10' height='10'>
          <circle cx='1' cy='1' r='0.8' fill='rgba(255,255,255,0.08)' />
        </pattern>
        <filter id='v26-glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <radialGradient id='v26-halo' cx='0.5' cy='0.5'>
          <stop offset='0%' stopColor='rgba(232,106,42,0.22)' />
          <stop offset='100%' stopColor='rgba(232,106,42,0)' />
        </radialGradient>
      </defs>

      {/* Soft organic halo behind the stack */}
      <ellipse cx='260' cy='280' rx='260' ry='280' fill='url(#v26-halo)' />

      {/* Corner brackets */}
      <g stroke='rgba(255,255,255,0.35)' strokeWidth='0.6' fill='none'>
        <polyline points='20,20 40,20' /><polyline points='20,20 20,40' />
        <polyline points='500,20 480,20' /><polyline points='500,20 500,40' />
        <polyline points='20,540 40,540' /><polyline points='20,540 20,520' />
        <polyline points='500,540 480,540' /><polyline points='500,540 500,520' />
      </g>

      {/* Side ruler ticks */}
      <g stroke='rgba(255,255,255,0.22)' strokeWidth='0.6'>
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1='40' y1={60 + i * 32} x2={i % 2 === 0 ? 48 : 44} y2={60 + i * 32} />
        ))}
      </g>

      {/* Dotted canvas */}
      <rect x='60' y='60' width='400' height='440' fill='url(#v26-dot)' />

      {/* Particles flowing between layers */}
      {layers.map((layer, i) => {
        if (i === layers.length - 1) return null
        const fromY = 90 + i * 56 + 32
        const particleDelay = i * 1.5
        return (
          <g key={`particles-${i}`}>
            {particlePositions.map((x, pIdx) => (
              <circle
                key={`${i}-${pIdx}`}
                cx={x}
                cy={fromY}
                r='2.6'
                fill='#F18943'
                className='v26-orb-particle'
                style={{ animationDelay: `${particleDelay + pIdx * 0.2 + (pIdx % 2) * 0.1}s` }}
                filter='url(#v26-glow)'
              />
            ))}
          </g>
        )
      })}

      {/* Isometric exploded layers */}
      {layers.map((layer, i) => {
        const y = 90 + i * 56
        const skew = 26
        return (
          <g key={layer.code} className='v26-orb-layer' style={{ animationDelay: `${i * 0.12}s` }}>
            {/* Top face */}
            <polygon
              points={`${140},${y} ${360},${y} ${360 + skew},${y - 14} ${140 + skew},${y - 14}`}
              fill='rgba(26,45,90,0.92)'
              stroke='rgba(255,255,255,0.42)'
              strokeWidth='1'
            />
            {/* Front face */}
            <rect x='140' y={y} width='220' height='32' fill='rgba(13,27,62,0.96)' />
            <rect
              x='140'
              y={y}
              width='220'
              height='32'
              fill={i === 3 ? 'url(#v26-hatch)' : 'none'}
              stroke='rgba(255,255,255,0.42)'
              strokeWidth='1'
            />
            {/* Right side face */}
            <polygon
              points={`${360},${y} ${360 + skew},${y - 14} ${360 + skew},${y + 18} ${360},${y + 32}`}
              fill='rgba(10,18,44,0.98)'
              stroke='rgba(255,255,255,0.42)'
              strokeWidth='1'
            />
            <text x='156' y={y + 20} fontFamily='var(--font-mono)' fontSize='10' letterSpacing='1.5' fill='rgba(255,255,255,0.86)'>
              {layer.label}
            </text>
            {/* Callout dash + code */}
            <line x1={360 + skew} y1={y + 8} x2='450' y2={y + 8} stroke='rgba(232,106,42,0.7)' strokeWidth='0.8' strokeDasharray='2 2' />
            <circle cx={360 + skew} cy={y + 8} r='1.6' fill='#F18943' />
            <text x='454' y={y + 11} fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1' fill='#F18943'>
              {layer.code}
            </text>
          </g>
        )
      })}

      {/* Left edge spine */}
      <g stroke='rgba(255,255,255,0.3)' strokeWidth='0.8'>
        <line x1='96' y1='76' x2='96' y2='484' />
        <line x1='92' y1='76' x2='100' y2='76' />
        <line x1='92' y1='484' x2='100' y2='484' />
      </g>
      <text x='80' y='284' fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.5' fill='#F18943' transform='rotate(-90 80 284)'>
        FRONTIER ORG · STACK
      </text>

      {/* Bottom measure bar */}
      <g stroke='rgba(255,255,255,0.45)' strokeWidth='0.6'>
        <line x1='140' y1='520' x2='360' y2='520' />
        <line x1='140' y1='516' x2='140' y2='524' />
        <line x1='360' y1='516' x2='360' y2='524' />
      </g>
      <text x='250' y='534' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.5' fill='rgba(255,255,255,0.86)' textAnchor='middle'>
        DIM: 7 × LAYER
      </text>
    </svg>
  )
}

/* ─── Trust logos ─── */

function Logos() {
  const doubled = [...logos, ...logos]
  return (
    <section className='v26-logos' aria-label='Client register'>
      <div className='v26-container'>
        <div className='v26-logos-head'>
          <span className='v26-logos-kicker'>01 · B &middot; Client register</span>
        </div>
      </div>
      <div className='v26-logos-marquee'>
        <div className='v26-logos-track'>
          {doubled.map((name, i) => (
            <span className='v26-logo-item' key={`${name}-${i}`}>
              <span className='v26-logo-name'>{name}</span>
              <span className='v26-logo-sep' aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */

function Stats() {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>()
  return (
    <section className='v26-section v26-stats' data-surface='light'>
      <div className='v26-container' ref={ref}>
        <div className={`v26-section-head v26-reveal ${visible ? 'is-visible' : ''}`}>
          <div className='v26-num'>N° 02 &middot; By the numbers</div>
          <h2>A track record<br />of enterprise <em>delivery.</em></h2>
          <p className='lead'>Not a POC &mdash; measurable, deployed, running in production today.</p>
        </div>
        <div className='v26-stats-grid'>
          {stats.map((s, i) => (
            <div key={s.coord} className={`v26-stat v26-reveal delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
              <span className='coord'>{s.coord}</span>
              <div className='val'>{s.val}</div>
              <div className='lbl'>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Capabilities ─── */

function Capabilities() {
  const [active, setActive] = useState(0)
  const [view, setView] = useState<'caps' | 'stack'>('caps')
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || view !== 'caps') return
    const t = setInterval(() => setActive((a) => (a + 1) % capabilities.length), 5500)
    return () => clearInterval(t)
  }, [paused, view])

  const cap = capabilities[active]

  return (
    <section className='v26-section v26-caps' data-surface='light' id='solutions'>
      <div className='v26-container'>
        <div className='v26-caps-head'>
          <div>
            <div className='v26-num'>N° 03 &middot; What we do</div>
            <h2>Six layers. <em>One partner.</em> No handoff.</h2>
            <p className='lead' style={{ marginTop: 18 }}>
              Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer, not within silos.
            </p>
          </div>
          <div className='v26-caps-toggle' role='tablist' aria-label='View switcher'>
            <button className={`v26-toggle-btn ${view === 'caps' ? 'active' : ''}`} onClick={() => setView('caps')} aria-pressed={view === 'caps'}>
              Our Capabilities
            </button>
            <button className={`v26-toggle-btn ${view === 'stack' ? 'active' : ''}`} onClick={() => setView('stack')} aria-pressed={view === 'stack'}>
              Our AI Transformation Stack
            </button>
          </div>
        </div>

        {view === 'caps' ? (
          <div className='v26-caps-interactive' onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className='v26-caps-tabs' role='tablist'>
              {capabilities.map((c, i) => (
                <button
                  key={c.num}
                  className={`v26-caps-tab ${i === active ? 'active' : ''}`}
                  onClick={() => { setActive(i); setPaused(true) }}
                  role='tab'
                  aria-selected={i === active}
                >
                  <span className='tab-num'>{c.num}</span>
                  <span className='tab-label'>{c.kicker}</span>
                </button>
              ))}
            </div>
            <div className='v26-caps-detail' key={active} role='tabpanel' aria-live='polite'>
              <span className='v26-caps-kicker'>{cap.kicker}</span>
              <h3 className='v26-caps-title'>{cap.title}</h3>
              <span className='v26-caps-sub'>{cap.subtitle}</span>
              <p className='v26-caps-body'>{cap.body}</p>
              <div className='v26-caps-pills'>
                {cap.tags.map((t) => <span key={t} className='v26-pill'>{t}</span>)}
              </div>
              <a href='#cta' className='v26-caps-cta'>{cap.cta} <span aria-hidden>→</span></a>
            </div>
          </div>
        ) : (
          <div className='v26-stack-wrap'>
            {stackLayers.map((l) => (
              <div key={l.num} className='v26-stack-layer'>
                <span className='num'>{l.num}</span>
                <span className='lbl'>{l.label}</span>
                <div className='offering'>{l.top}</div>
                <div className='desc'>{l.topDesc}</div>
                <div className='sep-line' />
                <div className='accel-lbl'>Accelerator</div>
                <div className='offering'>{l.bot}</div>
                <div className='desc'>{l.botDesc}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */

function Testimonials() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6500)
    return () => clearInterval(t)
  }, [])
  const q = testimonials[active]
  return (
    <section className='v26-section v26-quote' data-surface='light'>
      <div className='v26-container'>
        <div className='v26-quote-inner'>
          <div className='v26-quote-meta'>
            <span>N° 04 &middot; Testimonial</span>
            <span aria-hidden>·</span>
            <span>{q.company.toUpperCase()}</span>
          </div>
          <div className='v26-quote-mark' aria-hidden>&ldquo;</div>
          <p className='v26-quote-body' key={active}>{q.quote}</p>
          <cite className='v26-quote-cite'>
            <span className='name'>{q.name}</span> &mdash; {q.role}, {q.company}
          </cite>
          <svg className='v26-quote-wave' viewBox='0 0 520 40' aria-hidden>
            <path d='M 0 20 Q 65 5 130 20 T 260 20 T 390 20 T 520 20' fill='none' stroke='var(--v26-accent)' strokeWidth='1.6' strokeLinecap='round' />
          </svg>
          <div className='v26-quote-nav'>
            <button className='v26-quote-arrow' aria-label='Previous testimonial' onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}>←</button>
            <div className='v26-quote-dots'>
              {testimonials.map((_, i) => (
                <button key={i} className={`v26-quote-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <button className='v26-quote-arrow' aria-label='Next testimonial' onClick={() => setActive((a) => (a + 1) % testimonials.length)}>→</button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Proven ─── */

function Proven() {
  const [filter, setFilter] = useState<'all' | ProvenTag>('all')
  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const filtered = filter === 'all' ? cases : cases.filter((c) => c.tag === filter)

  useEffect(() => { setActiveIdx(0) }, [filter])
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[activeIdx] as HTMLElement | undefined
    if (card) track.scrollTo({ left: card.offsetLeft - 24, behavior: 'smooth' })
  }, [activeIdx])

  return (
    <section className='v26-section v26-proven' id='work' data-surface='light'>
      <div className='v26-container'>
        <div className='v26-proven-header'>
          <div>
            <div className='v26-num'>N° 05 &middot; Proven</div>
            <h2>Proven where it <em>matters.</em></h2>
          </div>
          <p className='lead' style={{ marginTop: 0 }}>
            50+ enterprise deployments across 11 industries. Real outcomes, not slide decks.
          </p>
        </div>
        <div className='v26-proven-filters' role='tablist' aria-label='Case filter'>
          {(['all', 'industry', 'solution', 'technology'] as const).map((f) => (
            <button key={f} className={`v26-filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)} aria-pressed={filter === f}>
              {f === 'all' ? 'All' : f === 'industry' ? 'By Industry' : f === 'solution' ? 'By Solution' : 'By Technology'}
            </button>
          ))}
        </div>
        <div className='v26-proven-track' ref={trackRef}>
          {filtered.map((c, i) => (
            <article key={c.title} className='v26-proven-card'>
              <div className='v26-proven-img'>
                <img src={c.image} alt={c.kicker} loading='lazy' />
                <span className='v26-proven-metric'>{c.metric}</span>
              </div>
              <div className='v26-proven-content'>
                <span className='v26-proven-kicker'>{c.kicker}</span>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
                <div className='v26-proven-techs'>
                  {c.techs.map((t) => <span key={t} className='v26-proven-tech'>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className='v26-proven-nav'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button className='v26-quote-arrow' aria-label='Previous case' onClick={() => setActiveIdx((i) => Math.max(0, i - 1))}>←</button>
            <div className='v26-proven-dots'>
              {filtered.map((_, i) => (
                <button key={i} className={`v26-proven-dot ${i === activeIdx ? 'active' : ''}`} onClick={() => setActiveIdx(i)} aria-label={`Case ${i + 1}`} />
              ))}
            </div>
            <button className='v26-quote-arrow' aria-label='Next case' onClick={() => setActiveIdx((i) => Math.min(filtered.length - 1, i + 1))}>→</button>
          </div>
          <a href='/case-studies' className='v26-proven-all'>See all case studies <span aria-hidden>→</span></a>
        </div>
      </div>
    </section>
  )
}

/* ─── How we work ─── */

function HowWeWork() {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>()
  return (
    <section className='v26-section v26-how' id='how' data-surface='light'>
      <div className='v26-container'>
        <div className='v26-section-head'>
          <div className='v26-num'>N° 06 &middot; How we work</div>
          <h2>Built for pace, <em>not paperwork.</em></h2>
          <p className='lead'>Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated early.</p>
        </div>
        <div className='v26-how-canvas' ref={ref}>
          <svg className='v26-how-curve' viewBox='0 0 1200 320' preserveAspectRatio='none' aria-hidden>
            <path d='M 60 180 Q 300 60 600 180 T 1140 160' fill='none' stroke='var(--v26-orange)' strokeWidth='2' strokeLinecap='round' strokeDasharray='6 8' style={{ animationPlayState: visible ? 'running' : 'paused' }} />
          </svg>
          {phases.map((p, i) => (
            <div key={p.title} className={`v26-how-card v26-reveal delay-${i + 1} ${visible ? 'is-visible' : ''}`}>
              <div className='marker'>{i + 1}</div>
              <div className='days'>{p.days} <sub>days</sub></div>
              <div className='phase'>{p.title}</div>
              <p>{p.body}</p>
              <div className='outcome'>{p.outcome}</div>
            </div>
          ))}
        </div>
        <p className='v26-how-note'>Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by environment.</p>
      </div>
    </section>
  )
}

/* ─── Why DBiz ─── */

function WhyOrbit({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  const R = 170
  return (
    <svg viewBox='-240 -240 480 480' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <radialGradient id='v26-why-core' cx='0.5' cy='0.5'>
          <stop offset='0%' stopColor='rgba(232,106,42,0.4)' />
          <stop offset='100%' stopColor='rgba(232,106,42,0)' />
        </radialGradient>
      </defs>

      {/* Ambient rings */}
      <circle r='220' fill='url(#v26-why-core)' opacity='0.4' />
      <g className='ring'>
        <circle r='210' fill='none' stroke='rgba(13,27,62,0.08)' strokeWidth='0.8' strokeDasharray='2 8' />
      </g>
      <g className='ring r2'>
        <circle r='170' fill='none' stroke='rgba(13,27,62,0.12)' strokeWidth='0.8' strokeDasharray='4 4' />
      </g>

      {/* Hub */}
      <circle r='42' className='v26-why-hub' />
      <circle r='16' className='v26-why-hub-core' />
      <text y='-58' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='2' fill='var(--v26-accent-ink)'>WHY</text>
      <text y='70' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='2' fill='var(--v26-accent-ink)'>DBIZ</text>

      {/* Nodes */}
      {reasons.map((r, i) => {
        const rad = (r.angle - 90) * Math.PI / 180
        const x = Math.cos(rad) * R
        const y = Math.sin(rad) * R
        const textY = y < -10 ? -30 : y > 10 ? 36 : 4
        return (
          <g key={r.label} className={`v26-why-node ${i === active ? 'active' : ''}`} transform={`translate(${x} ${y})`} onClick={() => onSelect(i)} tabIndex={0} role='button' aria-label={`${r.label} — ${r.title}`}
             onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(i) } }}>
            <circle r='26' className='pod' />
            <text y='4' textAnchor='middle' className='pod-label' fontSize='7.5' fontWeight='600'>{r.idx}</text>
            <text y={textY} textAnchor='middle' className='pod-label'>{r.label}</text>
            {/* spoke */}
            <line x1='0' y1='0' x2={-x * 0.55} y2={-y * 0.55} stroke={i === active ? 'var(--v26-orange)' : 'rgba(13,27,62,0.12)'} strokeWidth='1' />
          </g>
        )
      })}
    </svg>
  )
}

function Why() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % reasons.length), 5500)
    return () => clearInterval(t)
  }, [])
  const r = reasons[active]
  return (
    <section className='v26-section v26-why' id='about' data-surface='light'>
      <div className='v26-container'>
        <div className='v26-section-head'>
          <div className='v26-num'>N° 06 &middot; Why DBiz</div>
          <h2>Why enterprises choose <em>DBiz.</em></h2>
          <p className='lead'>Six differentiators &mdash; all evidenced by delivery, not brochures.</p>
        </div>
        <div className='v26-why-interactive'>
          <div className='v26-why-orbit'>
            <WhyOrbit active={active} onSelect={setActive} />
          </div>
          <div className='v26-why-detail' key={active}>
            <span className='v26-why-detail-idx'>{r.idx} / {r.label}</span>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
            <a href='#cta' className='v26-caps-cta'>Learn more about us <span aria-hidden>→</span></a>
            <div className='v26-why-detail-nav' style={{ marginTop: 28 }}>
              {reasons.map((_, i) => (
                <button key={i} className={`v26-why-detail-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} aria-label={`Reason ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */

function FinalCTA() {
  return (
    <section className='v26-cta-section' id='cta'>
      <div className='v26-container'>
        <span className='v26-cta-label'>Z · 01 &middot; Next step</span>
        <h2>
          Your Frontier Organisation<br />
          starts with a <em>conversation.</em>
        </h2>
        <div className='v26-cta-sub'>One partner &middot; Full stack &middot; No handoff</div>
        <div className='v26-cta-actions'>
          <a href='#' className='v26-cta-primary'>Contact us <span className='arrow' aria-hidden>→</span></a>
          <a href='#' className='v26-cta-text'>Or get an architecture assessment</a>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className='v26-footer' id='careers'>
      <div className='v26-container'>
        <div className='v26-foot-top'>
          <div className='v26-foot-brand'>
            <img src='/dbiz-logo.svg' alt='DBiz.ai' />
            <div className='tag'>Human-Led &middot; Agent-Operated &middot; Data-Powered</div>
            <div className='meta'>10 offices &middot; 6 countries &middot; 800+ people</div>
          </div>
          <div className='v26-foot-col'>
            <div className='v26-mono'>Company</div>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Our Work</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Contact Us</a></li>
              <li><a href='#'>Blog</a></li>
            </ul>
          </div>
          <div className='v26-foot-col'>
            <div className='v26-mono'>Solutions</div>
            <ul>
              <li><a href='#'>Strategy &amp; Architecture</a></li>
              <li><a href='#'>Cloud</a></li>
              <li><a href='#'>Data &amp; AI</a></li>
              <li><a href='#'>Business Apps &amp; Integration</a></li>
              <li><a href='#'>Product &amp; Experience</a></li>
              <li><a href='#'>Managed Services</a></li>
            </ul>
          </div>
          <div className='v26-foot-col'>
            <div className='v26-mono'>Partners</div>
            <ul>
              <li><a href='#'>AWS</a></li>
              <li><a href='#'>Microsoft Azure</a></li>
              <li><a href='#'>Salesforce</a></li>
              <li><a href='#'>Snowflake</a></li>
              <li><a href='#'>Databricks</a></li>
              <li><a href='#'>Boomi</a></li>
              <li><a href='#'>Anthropic</a></li>
            </ul>
          </div>
        </div>
        <div className='v26-foot-legal'>
          <p className='ack'>We acknowledge the Traditional Custodians of the lands on which we work and live, and pay our respects to Elders past, present, and emerging.</p>
          <div className='links'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Legal</a>
            <a href='#'>Terms of Use</a>
            <a href='#'>Modern Slavery Statement</a>
          </div>
          <div className='v26-foot-copy'>© 2026 DBiz.ai. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

/* ─── Page ─── */

export default function V26Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Logos />
      <Stats />
      <Capabilities />
      <Testimonials />
      <Proven />
      <HowWeWork />
      <Why />
      <FinalCTA />
      <Footer />
    </>
  )
}
