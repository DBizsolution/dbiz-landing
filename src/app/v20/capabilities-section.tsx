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


/* ─── Stack Diagram SVG — Deconstructed Assembly (machine reference) ─── */
function StackDiagram() {
  const svgW = 1400
  const svgH = 720

  const shaftY = 360
  const discR = 68
  // 7 discs evenly spaced along the horizontal shaft
  const discCenters = [180, 340, 500, 660, 820, 980, 1140]

  type Side = { name: string; desc: string }
  // Order: left-to-right — Strategy (01) first, Data (07) last
  const layers: { n: string; label: string; top: Side; bottom: Side }[] = [
    { n: '01', label: 'STRATEGY',
      top:    { name: 'Futures Studio', desc: 'AI ambition, roadmap & use-case prioritisation' },
      bottom: { name: 'DBiz Canvas',    desc: 'Concept to code in days' } },
    { n: '02', label: 'ARCHITECTURE',
      top:    { name: 'TechOffice Foundry', desc: 'AI foundation & Well-Architected review' },
      bottom: { name: 'DBiz Adapt',         desc: 'Architecting Secure and Sovereign AI' } },
    { n: '03', label: 'CLOUD',
      top:    { name: 'Multi-Cloud AI Foundation', desc: 'Enterprise AI Foundation rollout' },
      bottom: { name: 'DBiz Scoop',                desc: 'AI-Powered migration pipeline' } },
    { n: '04', label: 'DEVELOPMENT',
      top:    { name: 'Perpetual Engineering', desc: 'AI agents across the full SDLC' },
      bottom: { name: 'Nexus Platform',        desc: 'Enterprise AI dev environment' } },
    { n: '05', label: 'PRODUCTIVITY',
      top:    { name: 'AI-Infused BizApps',     desc: 'Autonomous agents for SaaS platforms' },
      bottom: { name: 'Productivity Automation', desc: 'Claude Co-work & Copilot' } },
    { n: '06', label: 'ORCHESTRATION',
      top:    { name: 'Agent Studio',     desc: 'Agentic AI & multi-agent orchestration' },
      bottom: { name: 'Nexus iConnector', desc: 'No rip & replace integration' } },
    { n: '07', label: 'DATA & INSIGHTS',
      top:    { name: 'DBiz Compass',    desc: 'AI-infused data engineering' },
      bottom: { name: 'Factweavers.ai',  desc: 'Domain data cloud & quick insights' } },
  ]

  // Per-layer inner shape renderer — duotone: grey structure + orange accents
  const renderShape = (i: number, cx: number, cy: number) => {
    const acc = 'var(--v20-accent)'
    const ink = 'rgba(255,255,255,0.38)'
    switch (i) {
      case 0: // 01 Strategy — concentric target rings + crosshair
        return (
          <g>
            <circle cx={cx} cy={cy} r='48' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none' />
            <circle cx={cx} cy={cy} r='34' stroke={ink} strokeWidth='1' fill='none' />
            <circle cx={cx} cy={cy} r='20' stroke={acc} strokeWidth='1.2' fill='none'>
              <animate attributeName='r' values='20;21.5;20' dur='5s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
            </circle>
            <circle cx={cx} cy={cy} r='8' stroke={acc} strokeWidth='1' fill='none'>
              <animate attributeName='r' values='8;6.5;8' dur='5s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
            </circle>
            <line x1={cx - 58} y1={cy} x2={cx - 42} y2={cy} stroke={ink} strokeWidth='0.8'>
              <animate attributeName='opacity' values='0.5;1;0.5' dur='3s' begin='0s' repeatCount='indefinite' />
            </line>
            <line x1={cx + 42} y1={cy} x2={cx + 58} y2={cy} stroke={ink} strokeWidth='0.8'>
              <animate attributeName='opacity' values='0.5;1;0.5' dur='3s' begin='0.75s' repeatCount='indefinite' />
            </line>
            <line x1={cx} y1={cy - 58} x2={cx} y2={cy - 42} stroke={ink} strokeWidth='0.8'>
              <animate attributeName='opacity' values='0.5;1;0.5' dur='3s' begin='1.5s' repeatCount='indefinite' />
            </line>
            <line x1={cx} y1={cy + 42} x2={cx} y2={cy + 58} stroke={ink} strokeWidth='0.8'>
              <animate attributeName='opacity' values='0.5;1;0.5' dur='3s' begin='2.25s' repeatCount='indefinite' />
            </line>
            <circle cx={cx} cy={cy} r='3' fill={acc}>
              <animate attributeName='r' values='3;4;3' dur='4s' repeatCount='indefinite' />
              <animate attributeName='opacity' values='1;0.65;1' dur='4s' repeatCount='indefinite' />
            </circle>
          </g>
        )
      case 1: { // 02 Architecture — nested hexagons
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(46)} stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none'>
              <animate attributeName='stroke-dashoffset' values='0;28' dur='8s' repeatCount='indefinite' />
            </polygon>
            <polygon points={hex(32)} stroke={ink} strokeWidth='1' fill='none'>
              <animate attributeName='opacity' values='0.6;1;0.6' dur='6s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
            </polygon>
            <polygon points={hex(18)} stroke={acc} strokeWidth='1.3' fill='none'>
              <animate attributeName='stroke-width' values='1.3;1.8;1.3' dur='4s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
              <animate attributeName='stroke-opacity' values='1;0.6;1' dur='4s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
            </polygon>
            <circle cx={cx} cy={cy} r='3' fill={acc}>
              <animate attributeName='r' values='3;4;3' dur='4s' repeatCount='indefinite' />
              <animate attributeName='opacity' values='1;0.65;1' dur='4s' repeatCount='indefinite' />
            </circle>
          </g>
        )
      }
      case 2: // 03 Cloud — three rhombus lamellae (color cycles, no rotation)
        return (
          <g>
            <path d={`M ${cx - 44} ${cy + 18} L ${cx} ${cy - 2} L ${cx + 44} ${cy + 18} L ${cx} ${cy + 38} Z`} fill='none' className='v20-cloud-rhombus v20-cloud-rhombus-1' />
            <path d={`M ${cx - 34} ${cy + 6} L ${cx} ${cy - 12} L ${cx + 34} ${cy + 6} L ${cx} ${cy + 24} Z`} fill='none' className='v20-cloud-rhombus v20-cloud-rhombus-2' />
            <path d={`M ${cx - 24} ${cy - 6} L ${cx} ${cy - 22} L ${cx + 24} ${cy - 6} L ${cx} ${cy + 10} Z`} fill='none' className='v20-cloud-rhombus v20-cloud-rhombus-3' />
            <line x1={cx} y1={cy - 22} x2={cx} y2={cy + 38} stroke={ink} strokeWidth='0.6' strokeDasharray='2 2' />
            <circle cx={cx} cy={cy - 14} r='2.5' fill={acc} />
          </g>
        )
      case 3: // 04 Development — gear with slow tick rotation + inner pulse
        return (
          <g>
            {/* Outer gear ring — slow stepping rotation */}
            <g>
              <animateTransform attributeName='transform' type='rotate' from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur='60s' repeatCount='indefinite' />
              <circle cx={cx} cy={cy} r='32' stroke={ink} strokeWidth='1' fill='none' />
              {Array.from({ length: 12 }).map((_, t) => {
                const a = (t / 12) * Math.PI * 2
                const x1 = cx + Math.cos(a) * 32
                const y1 = cy + Math.sin(a) * 32
                const x2 = cx + Math.cos(a) * 44
                const y2 = cy + Math.sin(a) * 44
                return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ink} strokeWidth='2' />
              })}
            </g>
            {/* Dashed orbit ring */}
            <circle cx={cx} cy={cy} r='44' stroke={ink} strokeWidth='0.6' strokeDasharray='3 2' fill='none' />
            {/* Middle ring — gentle breathe */}
            <circle cx={cx} cy={cy} r='22' stroke={acc} strokeWidth='1.2' fill='none'>
              <animate attributeName='r' values='22;24;22' dur='4s' repeatCount='indefinite' />
            </circle>
            {/* Inner ring — counter-breathe */}
            <circle cx={cx} cy={cy} r='10' stroke={acc} strokeWidth='1' fill='none'>
              <animate attributeName='r' values='10;8;10' dur='4s' repeatCount='indefinite' />
            </circle>
            {/* Core dot — subtle pulse */}
            <circle cx={cx} cy={cy} r='3' fill={acc}>
              <animate attributeName='r' values='3;4;3' dur='4s' repeatCount='indefinite' />
              <animate attributeName='opacity' values='1;0.7;1' dur='4s' repeatCount='indefinite' />
            </circle>
          </g>
        )
      case 4: { // 05 Productivity — dual-ring co-work (human + AI converging, breathe animation)
        const spread = 16
        return (
          <g>
            {/* Left ring — "human" (grey) */}
            <g>
              <animateTransform attributeName='transform' type='translate' values={`0,0; ${spread * 0.4},0; 0,0`} dur='6s' repeatCount='indefinite' />
              <circle cx={cx - spread} cy={cy} r='24' stroke={ink} strokeWidth='1.1' fill='none' />
              <circle cx={cx - spread} cy={cy} r='16' stroke={ink} strokeWidth='0.6' strokeDasharray='2 2' fill='none' />
              <circle cx={cx - spread} cy={cy} r='2' fill={ink} />
            </g>
            {/* Right ring — "AI" (orange) */}
            <g>
              <animateTransform attributeName='transform' type='translate' values={`0,0; ${-spread * 0.4},0; 0,0`} dur='6s' repeatCount='indefinite' />
              <circle cx={cx + spread} cy={cy} r='24' stroke={acc} strokeWidth='1.3' fill='none' />
              <circle cx={cx + spread} cy={cy} r='16' stroke={acc} strokeWidth='0.6' strokeDasharray='2 2' fill='none' />
              <circle cx={cx + spread} cy={cy} r='2' fill={acc} />
            </g>
            {/* Convergence core — shared spark at the intersection */}
            <circle cx={cx} cy={cy} r='7' fill={acc} fillOpacity='0.18' stroke={acc} strokeWidth='1.3'>
              <animate attributeName='r' values='7;9;7' dur='6s' repeatCount='indefinite' />
              <animate attributeName='fillOpacity' values='0.18;0.35;0.18' dur='6s' repeatCount='indefinite' />
            </circle>
            <circle cx={cx} cy={cy} r='2.5' fill={acc} />
            {/* Subtle accent dots top & bottom of overlap */}
            <circle cx={cx} cy={cy - 32} r='1.6' fill={acc} opacity='0.5' />
            <circle cx={cx} cy={cy + 32} r='1.6' fill={acc} opacity='0.5' />
          </g>
        )
      }
      case 5: // 06 Orchestration — hub with 6 connected nodes (no outer ring)
        return (
          <g>
            {Array.from({ length: 6 }).map((_, nIdx) => {
              const a = (nIdx / 6) * Math.PI * 2 - Math.PI / 2
              const nx = cx + Math.cos(a) * 38
              const ny = cy + Math.sin(a) * 38
              return (
                <g key={nIdx}>
                  <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={ink} strokeWidth='0.8' strokeDasharray='2 2'>
                    <animate attributeName='stroke-dashoffset' values='0;-8' dur='2s' begin={`${nIdx * 0.3}s`} repeatCount='indefinite' />
                  </line>
                  <circle cx={nx} cy={ny} r='4.5' fill={acc} opacity='0.85'>
                    <animate attributeName='r' values='4.5;5.5;4.5' dur='3s' begin={`${nIdx * 0.5}s`} calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
                    <animate attributeName='opacity' values='0.85;0.5;0.85' dur='3s' begin={`${nIdx * 0.5}s`} calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
                  </circle>
                </g>
              )
            })}
            <circle cx={cx} cy={cy} r='12' stroke={acc} strokeWidth='1.5' fill={acc} fillOpacity='0.15'>
              <animate attributeName='r' values='12;14;12' dur='4s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
              <animate attributeName='fillOpacity' values='0.15;0.25;0.15' dur='4s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
            </circle>
            <circle cx={cx} cy={cy} r='3.5' fill={acc}>
              <animate attributeName='r' values='3.5;4.5;3.5' dur='4s' repeatCount='indefinite' />
            </circle>
          </g>
        )
      case 6: { // 07 Data & Insights — hexagonal data grid
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(48)} stroke={ink} strokeWidth='1' fill='none'>
              <animate attributeName='opacity' values='0.7;1;0.7' dur='5s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
            </polygon>
            <polygon points={hex(24)} stroke={acc} strokeWidth='1.2' fill='none'>
              <animate attributeName='stroke-width' values='1.2;1.7;1.2' dur='4s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
              <animate attributeName='stroke-opacity' values='1;0.6;1' dur='4s' calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
            </polygon>
            {[0, 60, 120, 180, 240, 300].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return (
                <circle key={idx} cx={cx + Math.cos(r) * 36} cy={cy + Math.sin(r) * 36} r='2.2' fill={acc}>
                  <animate attributeName='r' values='2.2;3.2;2.2' dur='3s' begin={`${idx * 0.5}s`} calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
                  <animate attributeName='opacity' values='1;0.5;1' dur='3s' begin={`${idx * 0.5}s`} calcMode='spline' keySplines='0.4 0 0.6 1;0.4 0 0.6 1' repeatCount='indefinite' />
                </circle>
              )
            })}
            {[30, 90, 150, 210, 270, 330].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return (
                <line key={idx} x1={cx} y1={cy} x2={cx + Math.cos(r) * 24} y2={cy + Math.sin(r) * 24} stroke={ink} strokeWidth='0.5' strokeDasharray='1.5 1.5'>
                  <animate attributeName='stroke-dashoffset' values='0;-6' dur='2s' begin={`${idx * 0.3}s`} repeatCount='indefinite' />
                </line>
              )
            })}
            <circle cx={cx} cy={cy} r='3' fill={acc}>
              <animate attributeName='r' values='3;4;3' dur='4s' repeatCount='indefinite' />
              <animate attributeName='opacity' values='1;0.65;1' dur='4s' repeatCount='indefinite' />
            </circle>
          </g>
        )
      }
      default:
        return null
    }
  }

  const layerNameY = 452   // y of layer name (below disc)

  // Both connector lines 110px — frameworks + products equally close to discs
  // Top line: y=174 → y=284 (110px)
  // Bottom line: y=466 → y=576 (110px)
  // Order: name (orange) ABOVE desc (grey) on BOTH top and bottom callouts
  const tp = { name: 100, desc: 135, dot: 172 }
  const bp = { dot: 578,  name: 600, desc: 630 }

  // Soft-wrap helper — splits a string into up to 2 lines at a char limit
  const wrapDesc = (text: string, maxChars = 22): string[] => {
    if (text.length <= maxChars) return [text]
    const words = text.split(' ')
    let line1 = '', line2 = ''
    for (const w of words) {
      const next = (line1 ? line1 + ' ' : '') + w
      if (next.length <= maxChars && !line2) line1 = next
      else line2 = (line2 ? line2 + ' ' : '') + w
    }
    return line2 ? [line1, line2] : [line1]
  }

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      xmlns='http://www.w3.org/2000/svg'
      className='v20-stack-diagram'
      aria-label='DBiz Transformation Assembly — Exploded View'
    >
      <defs>
        <pattern id='v20-ex-dot' patternUnits='userSpaceOnUse' width='14' height='14'>
          <circle cx='1' cy='1' r='0.6' fill='var(--v20-ink-dot)' />
        </pattern>
        <pattern id='v20-disc-grid' patternUnits='userSpaceOnUse' width='14' height='14'>
          <path d='M 14 0 L 0 0 0 14' fill='none' stroke='rgba(255,255,255,0.14)' strokeWidth='0.6' />
        </pattern>
        <filter id='v20-halo-blur' x='-30%' y='-30%' width='160%' height='160%'>
          <feGaussianBlur stdDeviation='14' />
        </filter>
        <radialGradient id='v20-disc-halo'>
          <stop offset='0%' stopColor='var(--v20-accent)' stopOpacity='0.85' />
          <stop offset='35%' stopColor='var(--v20-accent)' stopOpacity='0.45' />
          <stop offset='70%' stopColor='var(--v20-accent)' stopOpacity='0.15' />
          <stop offset='100%' stopColor='var(--v20-accent)' stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* Frame + dot background */}
      <rect x='8' y='8' width={svgW - 16} height={svgH - 16} fill='url(#v20-ex-dot)' />
      <g stroke='var(--v20-ink-corner)' strokeWidth='2'>
        <line x1='8' y1='8' x2='26' y2='8' /><line x1='8' y1='8' x2='8' y2='26' />
        <line x1={svgW - 8} y1='8' x2={svgW - 26} y2='8' /><line x1={svgW - 8} y1='8' x2={svgW - 8} y2='26' />
        <line x1='8' y1={svgH - 8} x2='26' y2={svgH - 8} /><line x1='8' y1={svgH - 8} x2='8' y2={svgH - 26} />
        <line x1={svgW - 8} y1={svgH - 8} x2={svgW - 26} y2={svgH - 8} /><line x1={svgW - 8} y1={svgH - 8} x2={svgW - 8} y2={svgH - 26} />
      </g>

      {/* Top strip — promise anchor (moved up from bottom) */}
      <text x='50' y='32' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label-strong)' letterSpacing='2'>SCALE 1:1</text>
      <line x1={svgW / 2 - 260} y1={44} x2={svgW / 2 + 260} y2={44} stroke='var(--v20-ink-corner)' strokeWidth='0.8' />
      <line x1={svgW / 2 - 260} y1={40} x2={svgW / 2 - 260} y2={48} stroke='var(--v20-ink-corner)' strokeWidth='0.8' />
      <line x1={svgW / 2 + 260} y1={40} x2={svgW / 2 + 260} y2={48} stroke='var(--v20-ink-corner)' strokeWidth='0.8' />
      <text x={svgW / 2} y='32' fontFamily='var(--font-mono)' fontSize='10' fill='var(--v20-ink-dim)' textAnchor='middle' letterSpacing='3'>FULL STACK  ·  NO CAPABILITY GAPS  ·  NO VENDOR LOCK-IN</text>
      <text x={svgW - 50} y='32' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label-strong)' textAnchor='end' letterSpacing='1'>SHEET A1</text>

      {/* Central shaft — the spine connecting all components */}
      <line x1='80' y1={shaftY} x2={svgW - 80} y2={shaftY} stroke='var(--v20-ink-corner)' strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY - 8} stroke='var(--v20-ink-corner)' strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY + 8} stroke='var(--v20-ink-corner)' strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY - 8} stroke='var(--v20-ink-corner)' strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY + 8} stroke='var(--v20-ink-corner)' strokeWidth='1' />


      {/* Components */}
      {layers.map((layer, i) => {
        const cx = discCenters[i]
        const rotateReverse = i % 2 === 1   // alternating spin direction
        return (
          <g key={layer.n} className='v20-stack-layer' style={{ '--layer-index': i } as React.CSSProperties}>
            {/* Traveling halo — staggered via CSS delay, sweeps across all discs */}
            <rect x={cx - discR - 14} y={shaftY - discR - 14} width={(discR + 14) * 2} height={(discR + 14) * 2} fill='var(--v20-accent)' fillOpacity='0.35' filter='url(#v20-halo-blur)' className='v20-disc-halo' style={{ animationDelay: `${i * 1.4}s` } as React.CSSProperties} />

            {/* Outer housing — dashed square (grey) */}
            <rect x={cx - discR} y={shaftY - discR} width={discR * 2} height={discR * 2} stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' strokeDasharray='4 3' fill='var(--v20-paper)' fillOpacity='0.85' />
            {/* Second housing — inset square */}
            <rect x={cx - discR + 6} y={shaftY - discR + 6} width={(discR - 6) * 2} height={(discR - 6) * 2} stroke='rgba(255,255,255,0.16)' strokeWidth='0.6' fill='none' />
            {/* Inner groove — thin dashed square */}
            <rect x={cx - discR + 14} y={shaftY - discR + 14} width={(discR - 14) * 2} height={(discR - 14) * 2} stroke='rgba(255,255,255,0.12)' strokeWidth='0.4' strokeDasharray='1.5 2' fill='none' />
            {/* Subtle graph-paper grid inside the housing */}
            <rect x={cx - discR + 15} y={shaftY - discR + 15} width={(discR - 15) * 2} height={(discR - 15) * 2} fill='url(#v20-disc-grid)' />

            {/* Inner geometry — rotates slowly (alternating direction); CLOUD (i=2) stays still and pulses color */}
            <g>
              {i !== 2 && i !== 3 && i !== 4 && (
                <animateTransform
                  attributeName='transform'
                  type='rotate'
                  from={`${rotateReverse ? 360 : 0} ${cx} ${shaftY}`}
                  to={`${rotateReverse ? 0 : 360} ${cx} ${shaftY}`}
                  dur='45s'
                  repeatCount='indefinite'
                />
              )}
              {renderShape(i, cx, shaftY)}
            </g>

            {/* Shaft marker — orange dot where disc meets shaft (always on top, doesn't rotate) */}
            <circle cx={cx} cy={shaftY} r='2.5' fill='var(--v20-accent)' />

            {/* Layer number tag — just above disc */}
            <text x={cx - 14} y={shaftY - discR - 16} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='rgba(255,255,255,0.5)' textAnchor='end' letterSpacing='2'>L{layer.n}</text>

            {/* Layer name — just below disc */}
            <text x={cx} y={layerNameY} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='#ffffff' textAnchor='middle' letterSpacing='2.5'>{layer.label}</text>

            {/* Top callout — name (orange, emphasised) ABOVE, desc (grey) BELOW */}
            <line x1={cx} y1={tp.dot + 2} x2={cx} y2={shaftY - discR - 8} stroke='rgba(255,255,255,0.18)' strokeWidth='0.7' strokeDasharray='3 2' className='v20-stack-connector' />
            <circle cx={cx} cy={tp.dot} r='2.8' fill='var(--v20-accent)' className='v20-stack-dot' />
            {wrapDesc(layer.top.name.toUpperCase(), 15).map((line, li) => (
              <text key={li} x={cx} y={tp.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v20-accent)' textAnchor='middle'>{line}</text>
            ))}
            {wrapDesc(layer.top.desc).map((line, li) => (
              <text key={li} x={cx} y={tp.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.38)' textAnchor='middle'>{line}</text>
            ))}

            {/* Bottom callout — name (orange, emphasised) ABOVE, desc (grey) BELOW */}
            <line x1={cx} y1={layerNameY + 14} x2={cx} y2={bp.dot - 2} stroke='rgba(255,255,255,0.18)' strokeWidth='0.7' strokeDasharray='3 2' className='v20-stack-connector' />
            <circle cx={cx} cy={bp.dot} r='2.8' fill='var(--v20-accent)' className='v20-stack-dot' />
            {wrapDesc(layer.bottom.name.toUpperCase(), 15).map((line, li) => (
              <text key={li} x={cx} y={bp.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v20-accent)' textAnchor='middle'>{line}</text>
            ))}
            {wrapDesc(layer.bottom.desc).map((line, li) => (
              <text key={li} x={cx} y={bp.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.38)' textAnchor='middle'>{line}</text>
            ))}
          </g>
        )
      })}


      {/* Bottom strip — drawing metadata (moved down from top) */}
      <text x={svgW / 2} y={svgH - 26} fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG-STACK-01  ·  EXPLODED ASSEMBLY</text>
    </svg>
  )
}

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
  const [view, setView] = useState<'capabilities' | 'framework'>('capabilities')
  const [cycleMs, setCycleMs] = useState(CYCLE_MS)
  const cap = capabilities[active]

  // Auto-cycle through capabilities — honors extended pause after a manual click
  useEffect(() => {
    if (view !== 'capabilities') return
    const id = setTimeout(() => {
      setActive((i) => (i + 1) % capabilities.length)
      setCycleMs(CYCLE_MS)
    }, cycleMs)
    return () => clearTimeout(id)
  }, [active, view, cycleMs])

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
          <div className='v20-cap-toggle'>
            <button
              className={`v20-toggle-btn ${view === 'capabilities' ? 'active' : ''}`}
              onClick={() => setView('capabilities')}
            >
              Our Capabilities
            </button>
            <button
              className={`v20-toggle-btn ${view === 'framework' ? 'active' : ''}`}
              onClick={() => setView('framework')}
            >
              Our AI Transformation Stack
            </button>
          </div>
        </div>

        {view === 'capabilities' ? (
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
        ) : (
          /* AI Transformation Framework — animated schematic */
          <div className='v20-stack-diagram-wrap'>
            <StackDiagram />
          </div>
        )}
      </div>
    </section>
  )
}
