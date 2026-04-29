'use client'

import { useState, useEffect } from 'react'

const CYCLE_MS = 4500

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
    title: 'Strategy for AI, Architecture for Scale',
    subtitle: 'Futures Studio · TechOffice Foundry',
    tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture, before a single line of code gets written.',
    cta: 'Get an AI readiness assessment',
  },
  {
    num: '02',
    kicker: 'AI-Ready Infrastructure',
    altLabel: 'Cloud',
    title: 'Purpose-built for AI Workloads',
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
    subtitle: 'FactWeavers\u2122 · Domain Data Cloud',
    tags: ['FactWeavers\u2122', 'Domain Data Cloud', 'Data Mesh'],
    body: "Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data, pre-modelled for your industry, ready for agents from day one.",
    cta: 'See FactWeavers\u2122 in action',
  },
  {
    num: '04',
    kicker: 'Orchestration',
    altLabel: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    subtitle: 'No rip and replace',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],
    body: "CRM, ERP, and platform investments don\u2019t need replacing, they need unlocking \u2014 for agents. We connect existing systems so agents can read, write, and act across your entire application landscape.",
    cta: 'Explore integration options',
  },
  {
    num: '05',
    kicker: 'AI Engineering',
    altLabel: 'Product & AI Engineering',
    title: 'Engineered with AI, Shipped Continuously',
    subtitle: 'Agent Studio \u00b7 Nexus \u00b7 Perpetual Engineering',
    tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],
    body: 'AI-native applications built by AI-first teams. Agent Studio for multi-agent orchestration, Nexus as the dev platform, Perpetual Engineering across the SDLC.',
    cta: 'See what we\u2019ve built',
  },
  {
    num: '06',
    kicker: 'Human Experience',
    altLabel: 'Research & Design',
    title: 'Designed for Humans, Trusted by Agents',
    subtitle: 'Research-led · Experience engineering',
    tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],
    body: 'Designing for humans in an increasingly agentic world is our core. We map human needs into design, iterate with AI-driven workflows, and turn requirements into shipped screens in days \u2014 structured enough to scale, human enough to trust.',
    cta: 'Explore our design practice',
  },
  {
    num: '07',
    kicker: 'AI Operations',
    altLabel: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
    body: "AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.",
    cta: 'Learn about managed services',
  },
]


export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)
  // Mobile accordion open row — independent of desktop active so taps can toggle
  const [mobileOpen, setMobileOpen] = useState<number | null>(0)
  const c = capabilities[active]

  // Auto-cycle through capabilities; hover/click locks
  useEffect(() => {
    if (locked) return
    const id = setTimeout(() => setActive((i) => (i + 1) % capabilities.length), CYCLE_MS)
    return () => clearTimeout(id)
  }, [active, locked])

  const select = (i: number) => {
    setLocked(true)
    setActive(i)
  }

  // Mobile accordion tap — toggle open/close on the tapped row
  const toggleMobile = (i: number) => {
    setMobileOpen((cur) => (cur === i ? null : i))
    setLocked(true)
    setActive(i)
  }

  // Stack geometry (Option A — grid-aligned 40px, centred front face)
  const svgW = 560
  const baseX = 120
  const boxW = 320
  const boxH = 46
  const rowGap = 66
  const skew = 20
  const firstY = 40
  const stackTop = firstY - 16
  const stackBot = firstY + (capabilities.length - 1) * rowGap + boxH + 16
  const svgH = stackBot + 40

  // Scattered textured layers (grey, subtle)
  const texturedLayers = new Set([0, 3, 5])
  const patternForLayer = (i: number) => (texturedLayers.has(i) ? `url(#v22alt-cs-tex-${i})` : 'transparent')

  return (
    <section className='v22alt-section' id='solutions' data-surface='light' style={{ ['--v22alt-paper' as string]: '#F3F0EC', ['--v22alt-paper-2' as string]: '#EAE5DB' }}>
      <div className='v22alt-container'>
        <div className='v22alt-section-head v22alt-cs-head'>
          <div className='num'>N°03 / What we do</div>
          <h2>Seven layers. <span style={{ color: 'var(--v22alt-accent)' }}>One Frontier.</span>{' '}<span style={{ whiteSpace: 'nowrap' }}>No handoff.</span></h2>
          <p className='lead'>We re&#8209;architect every layer for the AI&#8209;native enterprise. No retrofits, no silos.</p>
        </div>

        <div className='v22alt-cs-desktop'>
        <div className='v22alt-cs-grid'>
          <div className='v22alt-cs-stack-wrap'>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} xmlns='http://www.w3.org/2000/svg' className='v22alt-cs-stack' aria-label='Capabilities stack'>
              <defs>
                <pattern id='v22alt-cs-grid-pat' patternUnits='userSpaceOnUse' width='40' height='40'>
                  <path d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(240,123,47,0.08)' strokeWidth='0.5' />
                </pattern>
                <pattern id='v22alt-cs-dot-pat' patternUnits='userSpaceOnUse' width='10' height='10'>
                  <circle cx='1' cy='1' r='0.6' fill='rgba(240,123,47,0.18)' />
                </pattern>
                <pattern id='v22alt-cs-tex-0' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
                  <line x1='0' y1='0' x2='0' y2='6' stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' />
                </pattern>
                <pattern id='v22alt-cs-tex-3' patternUnits='userSpaceOnUse' width='16' height='16'>
                  <path d='M 0 0 L 16 16 M 16 0 L 0 16' stroke='rgba(255,255,255,0.1)' strokeWidth='0.5' />
                </pattern>
                <pattern id='v22alt-cs-tex-5' patternUnits='userSpaceOnUse' width='18' height='14'>
                  <circle cx='1' cy='1' r='0.7' fill='rgba(255,255,255,0.18)' />
                </pattern>
                <filter id='v22alt-cs-particle-glow' x='-50%' y='-50%' width='200%' height='200%'>
                  <feGaussianBlur stdDeviation='1.6' result='blur' />
                  <feMerge><feMergeNode in='blur' /><feMergeNode in='SourceGraphic' /></feMerge>
                </filter>
              </defs>

              <rect x='0' y='0' width={svgW} height={svgH} fill='url(#v22alt-cs-grid-pat)' />
              <rect x='0' y='0' width={svgW} height={svgH} fill='url(#v22alt-cs-dot-pat)' />

              {/* Left-edge tick marks — only span the stack region */}
              <g stroke='rgba(255,255,255,0.15)' strokeWidth='0.5'>
                {Array.from({ length: Math.floor((stackBot - stackTop) / 40) + 1 }).map((_, i) => (
                  <line key={i} x1='62' y1={stackTop + i * 40} x2={i % 2 === 0 ? 72 : 68} y2={stackTop + i * 40} />
                ))}
              </g>

              {/* FRONTIER ORGANISATION vertical label */}
              <g>
                <line x1='56' y1={stackTop} x2='56' y2={stackBot} stroke='rgba(240,123,47,0.45)' strokeWidth='1' />
                <line x1='50' y1={stackTop} x2='62' y2={stackTop} stroke='rgba(240,123,47,0.45)' strokeWidth='1' />
                <line x1='50' y1={stackBot} x2='62' y2={stackBot} stroke='rgba(240,123,47,0.45)' strokeWidth='1' />
                <text
                  x='40'
                  y={(stackTop + stackBot) / 2}
                  fontFamily='var(--font-mono)'
                  fontSize='11'
                  fontWeight='700'
                  letterSpacing='3'
                  fill='var(--v22alt-accent)'
                  textAnchor='middle'
                  transform={`rotate(-90 40 ${(stackTop + stackBot) / 2})`}
                >
                  FRONTIER ORGANISATION
                </text>
              </g>

              {/* Particles — organic flow, 3/1/2/3/1/2 across 6 gaps */}
              {(() => {
                const gapCounts = [3, 1, 2, 3, 1, 2]
                const xPools = [
                  [baseX + 80, baseX + 160, baseX + 250],
                  [baseX + 180],
                  [baseX + 100, baseX + 230],
                  [baseX + 60, baseX + 150, baseX + 260],
                  [baseX + 200],
                  [baseX + 110, baseX + 220],
                ]
                return capabilities.slice(0, -1).map((_, i) => {
                  const fromY = firstY + i * rowGap + boxH
                  const toY = firstY + (i + 1) * rowGap
                  const count = gapCounts[i]
                  const xs = xPools[i].slice(0, count)
                  const gapDelay = i * 0.55
                  return (
                    <g key={`flow-${i}`}>
                      {xs.map((x, pIdx) => (
                        <circle
                          key={pIdx}
                          cx={x}
                          cy={fromY}
                          r={2.2 + (pIdx % 2) * 0.4}
                          fill='var(--v22alt-accent)'
                          className='v22alt-cs-flow-particle'
                          filter='url(#v22alt-cs-particle-glow)'
                          style={{
                            '--cs-flow-distance': `${toY - fromY}px`,
                            '--cs-flow-delay': `${gapDelay + pIdx * 0.42}s`,
                          } as React.CSSProperties}
                        />
                      ))}
                    </g>
                  )
                })
              })()}

              {/* Layers */}
              {capabilities.map((cap, i) => {
                const y = firstY + i * rowGap
                const isActive = i === active
                const stroke = isActive ? 'var(--v22alt-accent)' : 'rgba(255,255,255,0.32)'
                const sw = isActive ? 1.6 : 1
                const x = baseX
                return (
                  <g
                    key={cap.num}
                    className={`v22alt-cs-layer ${isActive ? 'is-active' : ''}`}
                    onClick={() => select(i)}
                    onMouseEnter={() => select(i)}
                    role='button'
                    aria-label={`Select ${cap.kicker}`}
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && select(i)}
                  >
                    <polygon points={`${x},${y} ${x + boxW},${y} ${x + boxW + skew},${y - 14} ${x + skew},${y - 14}`} fill='transparent' stroke={stroke} strokeWidth={sw} />
                    <rect x={x} y={y} width={boxW} height={boxH} fill={isActive ? 'rgba(240,123,47,0.1)' : 'transparent'} stroke='none' />
                    <rect x={x} y={y} width={boxW} height={boxH} fill={patternForLayer(i)} stroke={stroke} strokeWidth={sw} opacity={isActive ? 1 : 0.85} />
                    <polygon points={`${x + boxW},${y} ${x + boxW + skew},${y - 14} ${x + boxW + skew},${y + boxH - 14} ${x + boxW},${y + boxH}`} fill='transparent' stroke={stroke} strokeWidth={sw} />
                    <text x={x - 12} y={y + boxH / 2 + 4} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='1' fill={isActive ? 'var(--v22alt-accent)' : 'rgba(255,255,255,0.55)'} textAnchor='end'>L{cap.num}</text>
                    {/* Eyebrow — familiar service name */}
                    <text x={x + 18} y={y + boxH / 2 - 6} fontFamily='var(--font-mono)' fontSize='8' fontWeight='500' letterSpacing='1.6' fill={isActive ? 'var(--v22alt-accent)' : 'rgba(255,255,255,0.5)'}>
                      {cap.altLabel.toUpperCase()}
                    </text>
                    {/* Main kicker — architectural name */}
                    <text x={x + 18} y={y + boxH / 2 + 12} fontFamily='var(--font-mono)' fontSize='12' fontWeight='600' letterSpacing='1.6' fill={isActive ? 'var(--v22alt-accent)' : 'rgba(255,255,255,0.92)'}>
                      {cap.kicker.toUpperCase()}
                    </text>
                  </g>
                )
              })}

              {/* Bottom dimension marker */}
              <g stroke='rgba(255,255,255,0.22)' strokeWidth='0.6'>
                <line x1={baseX} y1={stackBot + 6} x2={baseX + boxW} y2={stackBot + 6} />
                <line x1={baseX} y1={stackBot + 2} x2={baseX} y2={stackBot + 10} />
                <line x1={baseX + boxW} y1={stackBot + 2} x2={baseX + boxW} y2={stackBot + 10} />
              </g>
              <text x={baseX + boxW / 2} y={stackBot + 20} fontFamily='var(--font-mono)' fontSize='8' fill='rgba(255,255,255,0.55)' textAnchor='middle' letterSpacing='1.5'>7 × LAYER · ONE ENTERPRISE</text>
            </svg>
          </div>

          <div className='v22alt-cs-detail' key={active}>
            <div className='v22alt-cs-detail-kicker'>L{c.num} · {c.kicker.toUpperCase()}</div>
            <h3 className='v22alt-cs-detail-title'>{c.title}</h3>
            <p className='v22alt-cs-detail-sub'>{c.subtitle}</p>
            <p className='v22alt-cs-detail-body'>{c.body}</p>
            <div className='v22alt-cs-detail-tags'>
              {c.tags.slice(0, 4).map((t) => (
                <span key={t} className='v22alt-cs-tag'>{t}</span>
              ))}
            </div>
            <a href='#' className='v22alt-cs-detail-cta'>{c.cta} <span>→</span></a>
            {locked && (
              <button className='v22alt-cs-resume' onClick={() => setLocked(false)}>
                Resume auto-cycle →
              </button>
            )}
          </div>
        </div>
        </div>{/* /v22alt-cs-desktop */}

        {/* Mobile accordion — full 7-row stack, tap to expand/collapse inline */}
        <div className='v22alt-cs-mobile-acc' role='list'>
          {capabilities.map((cap, i) => {
            const isOpen = i === mobileOpen
            const stroke = 'var(--v22alt-accent)'
            const sw = isOpen ? 1.6 : 1
            return (
              <div key={cap.num} className={`v22alt-csm-row ${isOpen ? 'is-open' : ''}`} role='listitem'>
                <button
                  className='v22alt-csm-trigger'
                  onClick={() => toggleMobile(i)}
                  aria-expanded={isOpen}
                  aria-controls={`v22alt-csm-body-${i}`}
                >
                  <svg viewBox='0 0 72 44' className='v22alt-csm-mark' aria-hidden='true'>
                    <rect x='2' y='14' width='56' height='26' fill={isOpen ? 'rgba(240,123,47,0.16)' : 'transparent'} />
                    <rect x='2' y='14' width='56' height='26' fill={texturedLayers.has(i) ? `url(#v22alt-cs-tex-${i})` : 'transparent'} />
                    <rect x='2' y='14' width='56' height='26' fill='none' stroke={stroke} strokeOpacity={isOpen ? 1 : 0.55} strokeWidth={sw} />
                    <polygon points='2,14 58,14 70,2 14,2' fill='transparent' stroke={stroke} strokeOpacity={isOpen ? 1 : 0.55} strokeWidth={sw} />
                    <polygon points='58,14 70,2 70,28 58,40' fill='transparent' stroke={stroke} strokeOpacity={isOpen ? 1 : 0.55} strokeWidth={sw} />
                    <text x='30' y='32' fontFamily='var(--font-mono)' fontSize='11' fontWeight='700' letterSpacing='0.8' fill='var(--v22alt-accent)' opacity={isOpen ? 1 : 0.8} textAnchor='middle'>L{cap.num}</text>
                  </svg>
                  <span className='v22alt-csm-labels'>
                    <span className='v22alt-csm-kicker'>{cap.kicker.toUpperCase()}</span>
                    <span className='v22alt-csm-alt'>{cap.altLabel.toUpperCase()}</span>
                  </span>
                  <span className='v22alt-csm-chevron' aria-hidden='true'>{isOpen ? '−' : '+'}</span>
                </button>
                <div id={`v22alt-csm-body-${i}`} className='v22alt-csm-body' hidden={!isOpen}>
                  <h3 className='v22alt-csm-title'>{cap.title}</h3>
                  <p className='v22alt-csm-sub'>{cap.subtitle}</p>
                  <p className='v22alt-csm-copy'>{cap.body}</p>
                  <div className='v22alt-csm-tags'>
                    {cap.tags.slice(0, 4).map((t) => (
                      <span key={t} className='v22alt-csm-tag'>{t}</span>
                    ))}
                  </div>
                  <a href='#' className='v22alt-csm-cta'>{cap.cta} <span>→</span></a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bookend CTA — scrolls to the framework section (N°04) below */}
        <div className='v22alt-cs-bookend'>
          <div className='v22alt-cs-bookend-meta'>
            <span className='v22alt-cs-bookend-num'>N°04 · NEXT</span>
            <span className='v22alt-cs-bookend-sep' aria-hidden='true' />
            <span className='v22alt-cs-bookend-text'>
              Every capability above maps to a layer of the stack.
            </span>
          </div>
          <a href='#framework' className='v22alt-cs-stack-cta'>
            <span className='v22alt-cs-stack-cta-icon' aria-hidden='true'>
              <svg viewBox='0 0 24 16' fill='none'>
                <polygon points='2,6 16,6 22,2 8,2' stroke='currentColor' strokeWidth='1.2' />
                <rect x='2' y='6' width='14' height='8' stroke='currentColor' strokeWidth='1.2' fill='none' />
                <polygon points='16,6 22,2 22,10 16,14' stroke='currentColor' strokeWidth='1.2' fill='none' />
              </svg>
            </span>
            See how we do it
            <span className='v22alt-cs-stack-cta-arrow' aria-hidden='true'>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
