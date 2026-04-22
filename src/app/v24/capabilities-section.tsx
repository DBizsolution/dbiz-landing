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
  const svgH = 580

  const shaftY = 200
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
      top:    { name: 'AI-Ready Hyperscalers', desc: 'Enterprise AI Foundation rollout' },
      bottom: { name: 'DBiz Scoop',                         desc: 'AI-Powered migration pipeline' } },
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
      top:    { name: 'DBiz Data Compass', desc: 'AI-infused data engineering' },
      bottom: { name: 'Factweavers.ai',    desc: 'Domain data cloud & quick insights' } },
  ]

  // Per-layer inner shape renderer — duotone: grey structure + orange accents.
  // Icons are constrained to r≈44 so the gear teeth around them stay legible.
  const renderShape = (i: number, cx: number, cy: number) => {
    const acc = 'var(--v24-accent)'
    const ink = 'rgba(255,255,255,0.55)'
    switch (i) {
      case 0: // 01 Strategy — simple bullseye with crosshair ticks
        return (
          <g>
            <circle cx={cx} cy={cy} r='34' stroke={ink} strokeWidth='0.9' strokeDasharray='3 2' fill='none' />
            <circle cx={cx} cy={cy} r='18' stroke={acc} strokeWidth='1.4' fill='none' />
            <line x1={cx - 42} y1={cy} x2={cx - 28} y2={cy} stroke={ink} strokeWidth='0.9' />
            <line x1={cx + 28} y1={cy} x2={cx + 42} y2={cy} stroke={ink} strokeWidth='0.9' />
            <line x1={cx} y1={cy - 42} x2={cx} y2={cy - 28} stroke={ink} strokeWidth='0.9' />
            <line x1={cx} y1={cy + 28} x2={cx} y2={cy + 42} stroke={ink} strokeWidth='0.9' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 1: { // 02 Architecture — single hex with inner accent
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(38)} stroke={ink} strokeWidth='1' strokeDasharray='3 2' fill='none' />
            <polygon points={hex(20)} stroke={acc} strokeWidth='1.5' fill='none' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      case 2: // 03 Cloud — cloud outline with orange core
        return (
          <g>
            <path d={`M ${cx - 34} ${cy + 8} Q ${cx - 38} ${cy - 4} ${cx - 24} ${cy - 8} Q ${cx - 18} ${cy - 22} ${cx - 2} ${cy - 18} Q ${cx + 10} ${cy - 26} ${cx + 20} ${cy - 14} Q ${cx + 36} ${cy - 10} ${cx + 34} ${cy + 8} Z`} stroke={ink} strokeWidth='1.1' fill='none' />
            <circle cx={cx} cy={cy + 2} r='10' stroke={acc} strokeWidth='1.4' fill='none' />
            <circle cx={cx} cy={cy + 2} r='3' fill={acc} />
          </g>
        )
      case 3: // 04 Development — code chevrons < / >
        return (
          <g>
            <polyline points={`${cx - 10},${cy - 16} ${cx - 26},${cy} ${cx - 10},${cy + 16}`} stroke={ink} strokeWidth='1.5' fill='none' strokeLinecap='round' strokeLinejoin='round' />
            <polyline points={`${cx + 10},${cy - 16} ${cx + 26},${cy} ${cx + 10},${cy + 16}`} stroke={ink} strokeWidth='1.5' fill='none' strokeLinecap='round' strokeLinejoin='round' />
            <line x1={cx - 4} y1={cy + 18} x2={cx + 4} y2={cy - 18} stroke={acc} strokeWidth='1.6' strokeLinecap='round' />
          </g>
        )
      case 4: // 05 Productivity — two overlapping rings + central spark
        return (
          <g>
            <circle cx={cx - 12} cy={cy} r='20' stroke={ink} strokeWidth='1.2' fill='none' />
            <circle cx={cx + 12} cy={cy} r='20' stroke={acc} strokeWidth='1.4' fill='none' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 5: // 06 Orchestration — central hub with 6 satellite nodes
        return (
          <g>
            {Array.from({ length: 6 }).map((_, nIdx) => {
              const a = (nIdx / 6) * Math.PI * 2 - Math.PI / 2
              const nx = cx + Math.cos(a) * 32
              const ny = cy + Math.sin(a) * 32
              return <circle key={nIdx} cx={nx} cy={ny} r='3' fill={acc} opacity='0.85' />
            })}
            <circle cx={cx} cy={cy} r='10' stroke={acc} strokeWidth='1.4' fill={acc} fillOpacity='0.15' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 6: { // 07 Data & Insights — hex with vertex data points
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(38)} stroke={ink} strokeWidth='1' strokeDasharray='3 2' fill='none' />
            <polygon points={hex(20)} stroke={acc} strokeWidth='1.4' fill='none' />
            {[0, 60, 120, 180, 240, 300].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return <circle key={idx} cx={cx + Math.cos(r) * 30} cy={cy + Math.sin(r) * 30} r='2.2' fill={acc} />
            })}
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      default:
        return null
    }
  }

  const layerNameY = 296   // y of layer name (below disc)

  // Two category rows below the discs — Offerings, then Accelerators
  // name reserves 2 lines (line1, line1+13); desc starts ~28px below line2
  const offerings     = { divider: 332, name: 356, desc: 396 }
  const accelerators  = { divider: 448, name: 472, desc: 512 }

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

  // Gear polygon — trapezoidal teeth (flat tip, sloped sides, flat root valley).
  // Shape: 15% rise ramp → 40% tip top → 15% fall ramp → 30% valley → next tooth.
  const gearPoints = (cx: number, cy: number, rOuter: number, rInner: number, teeth: number) => {
    const pts: string[] = []
    const step = (Math.PI * 2) / teeth
    for (let k = 0; k < teeth; k++) {
      const base = k * step - Math.PI / 2
      const ring: [number, number][] = [
        [rInner, base + step * 0.00],   // root-left (end of previous valley)
        [rOuter, base + step * 0.15],   // tip-left  (top of rise ramp)
        [rOuter, base + step * 0.55],   // tip-right (start of fall ramp)
        [rInner, base + step * 0.70],   // root-right (start of valley)
      ]
      for (const [r, a] of ring) {
        pts.push(`${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`)
      }
    }
    return pts.join(' ')
  }

  // SVG arc path (angles in degrees, measured from 12 o'clock clockwise)
  const arcPath = (cx: number, cy: number, r: number, startDeg: number, endDeg: number, cw: boolean) => {
    const toXY = (deg: number) => {
      const a = (deg - 90) * Math.PI / 180
      return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r }
    }
    const s = toXY(startDeg)
    const e = toXY(endDeg)
    const span = cw ? (endDeg - startDeg + 360) % 360 : (startDeg - endDeg + 360) % 360
    const largeArc = span > 180 ? 1 : 0
    const sweep = cw ? 1 : 0
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} ${sweep} ${e.x} ${e.y}`
  }

  // Arrowhead triangle tangent to a circle at the given degree
  const tangentArrow = (cx: number, cy: number, r: number, deg: number, cw: boolean, size = 5) => {
    const a = (deg - 90) * Math.PI / 180
    const px = cx + Math.cos(a) * r
    const py = cy + Math.sin(a) * r
    const sign = cw ? 1 : -1
    const tdx = -Math.sin(a) * sign, tdy = Math.cos(a) * sign   // tangent (direction of motion)
    const ndx = Math.cos(a),         ndy = Math.sin(a)          // outward normal
    const tip = { x: px + tdx * size,        y: py + tdy * size }
    const b1  = { x: px - tdx * size * 0.3 + ndx * size * 0.55, y: py - tdy * size * 0.3 + ndy * size * 0.55 }
    const b2  = { x: px - tdx * size * 0.3 - ndx * size * 0.55, y: py - tdy * size * 0.3 - ndy * size * 0.55 }
    return `${tip.x},${tip.y} ${b1.x},${b1.y} ${b2.x},${b2.y}`
  }

  // Force names to two lines — split at the most balanced word boundary.
  // Single-word names (e.g. "Factweavers.ai") stay on line 1, line 2 empty
  // so the desc position stays aligned across all columns.
  const splitName = (text: string): [string, string] => {
    const words = text.trim().split(/\s+/)
    if (words.length <= 1) return [text, '']
    if (words.length === 2) return [words[0], words[1]]
    let bestI = 1, bestDiff = Infinity
    for (let i = 1; i < words.length; i++) {
      const a = words.slice(0, i).join(' ').length
      const b = words.slice(i).join(' ').length
      const diff = Math.abs(a - b)
      if (diff < bestDiff) { bestDiff = diff; bestI = i }
    }
    return [words.slice(0, bestI).join(' '), words.slice(bestI).join(' ')]
  }

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      xmlns='http://www.w3.org/2000/svg'
      className='v24-stack-diagram'
      aria-label='DBiz Transformation Assembly — Exploded View'
    >
      <defs>
        <pattern id='v24-ex-dot' patternUnits='userSpaceOnUse' width='14' height='14'>
          <circle cx='1' cy='1' r='0.6' fill='var(--v24-ink-dot)' />
        </pattern>
        <pattern id='v24-disc-grid' patternUnits='userSpaceOnUse' width='14' height='14'>
          <path d='M 14 0 L 0 0 0 14' fill='none' stroke='rgba(255,255,255,0.14)' strokeWidth='0.6' />
        </pattern>
        <filter id='v24-halo-blur' x='-30%' y='-30%' width='160%' height='160%'>
          <feGaussianBlur stdDeviation='14' />
        </filter>
        <radialGradient id='v24-disc-halo'>
          <stop offset='0%' stopColor='var(--v24-accent)' stopOpacity='0.85' />
          <stop offset='35%' stopColor='var(--v24-accent)' stopOpacity='0.45' />
          <stop offset='70%' stopColor='var(--v24-accent)' stopOpacity='0.15' />
          <stop offset='100%' stopColor='var(--v24-accent)' stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* Frame + blueprint background — grid + sparse dot texture */}
      <rect x='8' y='8' width={svgW - 16} height={svgH - 16} fill='url(#v24-ex-dot)' />
      <rect x='8' y='8' width={svgW - 16} height={svgH - 16} fill='url(#v24-disc-grid)' opacity='0.55' />
      <g stroke='var(--v24-ink-corner)' strokeWidth='2'>
        <line x1='8' y1='8' x2='26' y2='8' /><line x1='8' y1='8' x2='8' y2='26' />
        <line x1={svgW - 8} y1='8' x2={svgW - 26} y2='8' /><line x1={svgW - 8} y1='8' x2={svgW - 8} y2='26' />
        <line x1='8' y1={svgH - 8} x2='26' y2={svgH - 8} /><line x1='8' y1={svgH - 8} x2='8' y2={svgH - 26} />
        <line x1={svgW - 8} y1={svgH - 8} x2={svgW - 26} y2={svgH - 8} /><line x1={svgW - 8} y1={svgH - 8} x2={svgW - 8} y2={svgH - 26} />
      </g>

      {/* Top strip — promise anchor (moved up from bottom) */}
      <text x='50' y='32' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v24-ink-label-strong)' letterSpacing='2'>SCALE 1:1</text>
      <line x1={svgW / 2 - 260} y1={44} x2={svgW / 2 + 260} y2={44} stroke='var(--v24-ink-corner)' strokeWidth='0.8' />
      <line x1={svgW / 2 - 260} y1={40} x2={svgW / 2 - 260} y2={48} stroke='var(--v24-ink-corner)' strokeWidth='0.8' />
      <line x1={svgW / 2 + 260} y1={40} x2={svgW / 2 + 260} y2={48} stroke='var(--v24-ink-corner)' strokeWidth='0.8' />
      <text x={svgW / 2} y='32' fontFamily='var(--font-mono)' fontSize='10' fill='var(--v24-ink-dim)' textAnchor='middle' letterSpacing='3'>FULL STACK  ·  NO CAPABILITY GAPS  ·  NO VENDOR LOCK-IN</text>
      <text x={svgW - 50} y='32' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v24-ink-label-strong)' textAnchor='end' letterSpacing='1'>SHEET A1</text>

      {/* Central shaft — the spine connecting all components (grey main line) */}
      <line x1='80' y1={shaftY} x2={svgW - 80} y2={shaftY} stroke='rgba(255,255,255,0.32)' strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY - 8} stroke='rgba(255,255,255,0.32)' strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY + 8} stroke='rgba(255,255,255,0.32)' strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY - 8} stroke='rgba(255,255,255,0.32)' strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY + 8} stroke='rgba(255,255,255,0.32)' strokeWidth='1' />


      {/* Components */}
      {layers.map((layer, i) => {
        const cx = discCenters[i]
        const rotateReverse = i % 2 === 1   // alternating spin direction
        // All gears share the shaft centreline — middle-aligned gear train
        const cy = shaftY
        return (
          <g key={layer.n} className='v24-stack-layer' style={{ '--layer-index': i } as React.CSSProperties}>
            {/* Traveling halo — circular glow, staggered via CSS delay */}
            <circle cx={cx} cy={cy} r={discR + 18} fill='var(--v24-accent)' fillOpacity='0.35' filter='url(#v24-halo-blur)' className='v24-disc-halo' style={{ animationDelay: `${i * 1.4}s` } as React.CSSProperties} />

            {(() => {
              const cw = i % 2 === 0   // alternating rotation direction
              const outerR1 = discR + 8
              const outerR2 = discR + 16
              // Stagger which arcs render and where the arrow sits so each gear feels unique
              const arcStart = cw ? 40 : 220
              const arcEnd   = cw ? 220 : 40
              const arrowDeg = cw ? 220 : 40
              return (
                <>
                  <clipPath id={`v24-gear-clip-${i}`}>
                    <circle cx={cx} cy={cy} r={discR - 10} />
                  </clipPath>

                  {/* Outer orbital references — orange dashed rings outside the teeth */}
                  <circle cx={cx} cy={cy} r={outerR1} stroke='rgba(232,106,42,0.32)' strokeWidth='0.5' strokeDasharray='1 3' fill='none' />
                  <path d={arcPath(cx, cy, outerR2, arcStart, arcEnd, cw)} stroke='rgba(232,106,42,0.4)' strokeWidth='0.6' strokeDasharray='3 3' fill='none' />
                  <polygon points={tangentArrow(cx, cy, outerR2, arrowDeg, cw, 4.5)} fill='var(--v24-accent)' opacity='0.75' />
                  {/* Tiny scatter dots along the outer orbit */}
                  {[15, 95, 175, 300].map((deg, j) => {
                    const a = (deg - 90) * Math.PI / 180
                    return <circle key={j} cx={cx + Math.cos(a) * outerR1} cy={cy + Math.sin(a) * outerR1} r='1' fill='var(--v24-accent)' opacity='0.7' />
                  })}

                  {/* Rotating gear body — defined teeth + root + pitch references */}
                  <g>
                    <animateTransform attributeName='transform' type='rotate'
                      from={`${cw ? 0 : 360} ${cx} ${cy}`} to={`${cw ? 360 : 0} ${cx} ${cy}`}
                      dur='80s' repeatCount='indefinite' />
                    <polygon points={gearPoints(cx, cy, discR, discR - 12, 14)} stroke='rgba(255,255,255,0.38)' strokeWidth='0.8' strokeLinejoin='miter' fill='var(--v24-paper)' fillOpacity='0.8' />
                    {/* Inner reference ring — sits well inside the teeth so it breathes */}
                    <circle cx={cx} cy={cy} r={discR - 20} stroke='rgba(255,255,255,0.22)' strokeWidth='0.5' strokeDasharray='2 2' fill='none' />
                  </g>

                  {/* Blueprint mesh grid inside the gear body */}
                  <rect x={cx - discR} y={cy - discR} width={discR * 2} height={discR * 2} fill='url(#v24-disc-grid)' clipPath={`url(#v24-gear-clip-${i})`} opacity='0.75' />

                  {/* Cardinal crosshair ticks — dashed lines N/E/S/W across the teeth into the gear body */}
                  {[
                    { x1: 0, y1: -(discR + 18), x2: 0, y2: -(discR - 10) },
                    { x1: 0, y1: (discR + 18),  x2: 0, y2: (discR - 10) },
                    { x1: -(discR + 18), y1: 0, x2: -(discR - 10), y2: 0 },
                    { x1: (discR + 18),  y1: 0, x2: (discR - 10),  y2: 0 },
                  ].map((l, j) => (
                    <line key={j} x1={cx + l.x1} y1={cy + l.y1} x2={cx + l.x2} y2={cy + l.y2} stroke='rgba(232,106,42,0.35)' strokeWidth='0.5' strokeDasharray='3 2' />
                  ))}
                </>
              )
            })()}

            {/* Inner geometry — rotates slowly (alternating direction) */}
            <g>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from={`${rotateReverse ? 360 : 0} ${cx} ${cy}`}
                to={`${rotateReverse ? 0 : 360} ${cx} ${cy}`}
                dur='45s'
                repeatCount='indefinite'
              />
              {renderShape(i, cx, cy)}
            </g>

            {/* Shaft marker — orange dot stays anchored to the shaft line */}
            <circle cx={cx} cy={shaftY} r='2.5' fill='var(--v24-accent)' />

            {/* Layer number tag — just above each disc (follows the offset) */}
            <text x={cx - 14} y={cy - discR - 16} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='rgba(255,255,255,0.5)' textAnchor='end' letterSpacing='2'>L{layer.n}</text>

            {/* Layer name — just below disc */}
            <text x={cx} y={layerNameY} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='#ffffff' textAnchor='middle' letterSpacing='2.5'>{layer.label}</text>

            {/* Offerings — previously the top callout, now below the disc */}
            {splitName(layer.top.name.toUpperCase()).map((line, li) => (
              line ? (
                <text key={li} x={cx} y={offerings.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v24-accent)' textAnchor='middle'>{line}</text>
              ) : null
            ))}
            {wrapDesc(layer.top.desc).map((line, li) => (
              <text key={li} x={cx} y={offerings.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.38)' textAnchor='middle'>{line}</text>
            ))}

            {/* Accelerators — previously the bottom callout */}
            {splitName(layer.bottom.name.toUpperCase()).map((line, li) => (
              line ? (
                <text key={li} x={cx} y={accelerators.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v24-accent)' textAnchor='middle'>{line}</text>
              ) : null
            ))}
            {wrapDesc(layer.bottom.desc).map((line, li) => (
              <text key={li} x={cx} y={accelerators.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.38)' textAnchor='middle'>{line}</text>
            ))}
          </g>
        )
      })}

      {/* Gear-train mesh indicators — orange dots on the shaft between adjacent gears */}
      <g className='v24-stack-connector'>
        {discCenters.slice(0, -1).map((cxA, idx) => {
          const cxB = discCenters[idx + 1]
          const midX = (cxA + cxB) / 2
          return (
            <g key={idx}>
              <line x1={cxA + discR + 2} y1={shaftY} x2={cxB - discR - 2} y2={shaftY} stroke='rgba(232,106,42,0.35)' strokeWidth='0.5' strokeDasharray='2 2' />
              <circle cx={midX} cy={shaftY} r='2.4' fill='var(--v24-accent)' opacity='0.85' />
            </g>
          )
        })}
      </g>

      {/* Category row labels + dividers (span all 7 columns) */}
      {/* Line starts right after each label; orange tick dot only at the left anchor. */}
      <g className='v24-stack-connector'>
        <text x='30' y={offerings.divider + 4} fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' fill='rgba(255,255,255,0.55)' letterSpacing='2.5'>OFFERINGS</text>
        <circle cx='120' cy={offerings.divider} r='2.4' fill='var(--v24-accent)' />
        <line x1='128' y1={offerings.divider} x2={svgW - 90} y2={offerings.divider} stroke='rgba(255,255,255,0.14)' strokeWidth='0.6' strokeDasharray='2 2' />

        <text x='30' y={accelerators.divider + 4} fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' fill='rgba(255,255,255,0.55)' letterSpacing='2.5'>ACCELERATORS</text>
        <circle cx='148' cy={accelerators.divider} r='2.4' fill='var(--v24-accent)' />
        <line x1='156' y1={accelerators.divider} x2={svgW - 90} y2={accelerators.divider} stroke='rgba(255,255,255,0.14)' strokeWidth='0.6' strokeDasharray='2 2' />
      </g>


      {/* Bottom strip — drawing metadata (moved down from top) */}
      <text x={svgW / 2} y={svgH - 26} fontFamily='var(--font-mono)' fontSize='9' fill='var(--v24-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG-STACK-01  ·  EXPLODED ASSEMBLY</text>
    </svg>
  )
}

/* Geometric SVG icons — mirror the stack-diagram layer shapes (scaled for 80×80) */
function CapIcon({ index }: { index: number }) {
  const ink = 'rgba(255,255,255,0.38)'
  const acc = 'var(--v24-accent)'

  const hex = (r: number) => {
    const a = r * 0.866
    const b = r * 0.5
    return `40,${40 - r} ${40 + a},${40 - b} ${40 + a},${40 + b} 40,${40 + r} ${40 - a},${40 + b} ${40 - a},${40 - b}`
  }

  const icons = [
    /* 0 Strategy — target concentric rings + crosshair */
    <svg key={0} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v24-icon-circle-draw v24-icon-delay-1' />
      <circle cx='40' cy='40' r='25' stroke={ink} strokeWidth='1' className='v24-icon-circle-draw v24-icon-delay-2' />
      <circle cx='40' cy='40' r='15' stroke={acc} strokeWidth='1.2' className='v24-icon-circle-draw v24-icon-delay-3' />
      <circle cx='40' cy='40' r='6' stroke={acc} strokeWidth='1' className='v24-icon-circle-draw v24-icon-delay-4' />
      <line x1='2' y1='40' x2='13' y2='40' stroke={ink} strokeWidth='0.8' className='v24-icon-line-draw v24-icon-delay-3' />
      <line x1='67' y1='40' x2='78' y2='40' stroke={ink} strokeWidth='0.8' className='v24-icon-line-draw v24-icon-delay-3' />
      <line x1='40' y1='2' x2='40' y2='13' stroke={ink} strokeWidth='0.8' className='v24-icon-line-draw v24-icon-delay-3' />
      <line x1='40' y1='67' x2='40' y2='78' stroke={ink} strokeWidth='0.8' className='v24-icon-line-draw v24-icon-delay-3' />
      <circle cx='40' cy='40' r='2.5' fill={acc} className='v24-icon-scale-in v24-icon-delay-5' />
    </svg>,
    /* 1 Cloud — server rack with 3 blades (mechanical infrastructure) */
    <svg key={1} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {/* Outer dashed housing */}
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v24-icon-circle-draw v24-icon-delay-1' />
      {/* Rack chassis */}
      <rect x='14' y='16' width='52' height='48' stroke={ink} strokeWidth='1' fill='rgba(255,255,255,0.03)' className='v24-icon-rect-draw v24-icon-delay-2' />
      {/* Mounting holes at the 4 corners */}
      {[[18, 20], [62, 20], [18, 60], [62, 60]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r='1.4' fill='none' stroke={ink} strokeWidth='0.7' className='v24-icon-scale-in' style={{ animationDelay: `${0.3 + i * 0.05}s` }} />
      ))}
      {/* Blade 1 — idle */}
      <rect x='22' y='23' width='36' height='8' stroke={ink} strokeWidth='0.8' fill='rgba(255,255,255,0.04)' className='v24-icon-rect-draw v24-icon-delay-3' />
      <rect x='24.5' y='25' width='3.5' height='4' stroke={ink} strokeWidth='0.4' fill='none' />
      <rect x='29' y='25' width='3.5' height='4' stroke={ink} strokeWidth='0.4' fill='none' />
      <line x1='47' y1='26' x2='55' y2='26' stroke={ink} strokeWidth='0.4' />
      <line x1='47' y1='28' x2='55' y2='28' stroke={ink} strokeWidth='0.4' />
      <circle cx='56' cy='27' r='0.9' fill={ink} />
      {/* Blade 2 — ACTIVE (orange) */}
      <rect x='22' y='36' width='36' height='8' stroke={acc} strokeWidth='1.1' fill='rgba(240,123,47,0.1)' className='v24-icon-rect-draw v24-icon-delay-4' />
      <rect x='24.5' y='38' width='3.5' height='4' stroke={acc} strokeWidth='0.5' fill='none' />
      <rect x='29' y='38' width='3.5' height='4' stroke={acc} strokeWidth='0.5' fill='none' />
      <line x1='47' y1='39' x2='55' y2='39' stroke={acc} strokeWidth='0.5' />
      <line x1='47' y1='41' x2='55' y2='41' stroke={acc} strokeWidth='0.5' />
      <circle cx='56' cy='40' r='1.2' fill={acc} className='v24-icon-pulse v24-icon-scale-in v24-icon-delay-5' />
      {/* Blade 3 — idle */}
      <rect x='22' y='49' width='36' height='8' stroke={ink} strokeWidth='0.8' fill='rgba(255,255,255,0.04)' className='v24-icon-rect-draw v24-icon-delay-3' />
      <rect x='24.5' y='51' width='3.5' height='4' stroke={ink} strokeWidth='0.4' fill='none' />
      <rect x='29' y='51' width='3.5' height='4' stroke={ink} strokeWidth='0.4' fill='none' />
      <line x1='47' y1='52' x2='55' y2='52' stroke={ink} strokeWidth='0.4' />
      <line x1='47' y1='54' x2='55' y2='54' stroke={ink} strokeWidth='0.4' />
      <circle cx='56' cy='53' r='0.9' fill={ink} />
    </svg>,
    /* 2 Data — hex grid (mirrors stack-layer 07) */
    <svg key={2} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v24-icon-circle-draw v24-icon-delay-1' />
      <polygon points={hex(32)} stroke={ink} strokeWidth='1' className='v24-icon-polygon-draw v24-icon-delay-2' />
      <polygon points={hex(16)} stroke={acc} strokeWidth='1.2' className='v24-icon-polygon-draw v24-icon-delay-3' />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <circle key={i} cx={40 + Math.cos(r) * 24} cy={40 + Math.sin(r) * 24} r='2' fill={acc} className='v24-icon-scale-in' style={{ animationDelay: `${0.5 + i * 0.06}s` }} />
      })}
      {[30, 90, 150, 210, 270, 330].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <line key={i} x1='40' y1='40' x2={40 + Math.cos(r) * 16} y2={40 + Math.sin(r) * 16} stroke={ink} strokeWidth='0.4' strokeDasharray='1.5 1.5' className='v24-icon-line-draw v24-icon-delay-4' />
      })}
      <circle cx='40' cy='40' r='2.5' fill={acc} className='v24-icon-scale-in v24-icon-delay-5' />
    </svg>,
    /* 3 Connected — hub with 6 nodes (mirrors stack-layer 06 Orchestration) */
    <svg key={3} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v24-icon-circle-draw v24-icon-delay-1' />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2
        const nx = 40 + Math.cos(a) * 26
        const ny = 40 + Math.sin(a) * 26
        return (
          <g key={i}>
            <line x1='40' y1='40' x2={nx} y2={ny} stroke={ink} strokeWidth='0.8' strokeDasharray='2 2' className='v24-icon-line-draw v24-icon-delay-3' />
            <circle cx={nx} cy={ny} r='3' fill={acc} className='v24-icon-scale-in' style={{ animationDelay: `${0.5 + i * 0.07}s` }} />
          </g>
        )
      })}
      <circle cx='40' cy='40' r='8' stroke={acc} strokeWidth='1.3' fill={acc} fillOpacity='0.15' className='v24-icon-circle-draw v24-icon-delay-4' />
      <circle cx='40' cy='40' r='3' fill={acc} className='v24-icon-scale-in v24-icon-delay-5' />
    </svg>,
    /* 4 AI Engineering — CPU chip with pins and AI core */
    <svg key={4} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {/* Outer housing */}
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v24-icon-circle-draw v24-icon-delay-1' />
      {/* Chip pins — 3 per side */}
      {[22, 36, 50].map((coord, i) => (
        <g key={i}>
          <line x1={coord} y1='14' x2={coord} y2='20' stroke={ink} strokeWidth='1' className='v24-icon-line-draw' style={{ animationDelay: `${0.3 + i * 0.04}s` }} />
          <line x1={coord} y1='60' x2={coord} y2='66' stroke={ink} strokeWidth='1' className='v24-icon-line-draw' style={{ animationDelay: `${0.35 + i * 0.04}s` }} />
          <line x1='14' y1={coord} x2='20' y2={coord} stroke={ink} strokeWidth='1' className='v24-icon-line-draw' style={{ animationDelay: `${0.4 + i * 0.04}s` }} />
          <line x1='60' y1={coord} x2='66' y2={coord} stroke={ink} strokeWidth='1' className='v24-icon-line-draw' style={{ animationDelay: `${0.45 + i * 0.04}s` }} />
        </g>
      ))}
      {/* Chip body — main square with notched corner indicator */}
      <rect x='20' y='20' width='40' height='40' stroke={ink} strokeWidth='1.2' fill='rgba(255,255,255,0.04)' className='v24-icon-rect-draw v24-icon-delay-2' />
      {/* Orientation notch — small circle in top-left corner of the chip */}
      <circle cx='24' cy='24' r='1.4' fill='none' stroke={ink} strokeWidth='0.7' className='v24-icon-scale-in v24-icon-delay-3' />
      {/* AI core — inner orange square with diagonal trace */}
      <rect x='30' y='30' width='20' height='20' stroke={acc} strokeWidth='1.3' fill='rgba(240,123,47,0.12)' className='v24-icon-rect-draw v24-icon-delay-4' />
      {/* Circuit traces inside core */}
      <line x1='30' y1='35' x2='35' y2='35' stroke={acc} strokeWidth='0.8' className='v24-icon-line-draw v24-icon-delay-5' />
      <line x1='35' y1='35' x2='35' y2='40' stroke={acc} strokeWidth='0.8' className='v24-icon-line-draw v24-icon-delay-5' />
      <line x1='45' y1='40' x2='45' y2='45' stroke={acc} strokeWidth='0.8' className='v24-icon-line-draw v24-icon-delay-5' />
      <line x1='45' y1='45' x2='50' y2='45' stroke={acc} strokeWidth='0.8' className='v24-icon-line-draw v24-icon-delay-5' />
      {/* Register dots — 4 corner markers on the core */}
      <circle cx='33' cy='33' r='1.2' fill={acc} className='v24-icon-scale-in v24-icon-delay-6' />
      <circle cx='47' cy='33' r='1.2' fill={acc} className='v24-icon-scale-in v24-icon-delay-6' />
      <circle cx='33' cy='47' r='1.2' fill={acc} className='v24-icon-scale-in v24-icon-delay-6' />
      <circle cx='47' cy='47' r='1.2' fill={acc} className='v24-icon-scale-in v24-icon-delay-6' />
      {/* Center activity dot */}
      <circle cx='40' cy='40' r='2' fill={acc} className='v24-icon-pulse v24-icon-scale-in v24-icon-delay-5' />
    </svg>,
    /* 5 Design — tri-orbital ellipses (mirrors stack-layer 05 Productivity) */
    <svg key={5} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v24-icon-circle-draw v24-icon-delay-1' />
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={ink} strokeWidth='0.9' className='v24-icon-circle-draw v24-icon-delay-2' />
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={ink} strokeWidth='0.9' transform='rotate(60 40 40)' className='v24-icon-circle-draw v24-icon-delay-3' />
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={acc} strokeWidth='1.2' transform='rotate(120 40 40)' className='v24-icon-circle-draw v24-icon-delay-4' />
      <circle cx='72' cy='40' r='2' fill={acc} className='v24-icon-scale-in v24-icon-delay-5' />
      <circle cx='8' cy='40' r='2' fill={acc} className='v24-icon-scale-in v24-icon-delay-5' />
      <circle cx='56' cy='12' r='2' fill={acc} opacity='0.7' className='v24-icon-scale-in v24-icon-delay-6' />
      <circle cx='24' cy='68' r='2' fill={acc} opacity='0.7' className='v24-icon-scale-in v24-icon-delay-6' />
      <circle cx='40' cy='40' r='4' fill={acc} className='v24-icon-scale-in v24-icon-delay-5' />
    </svg>,
    /* 6 Operations — nested hexagons (mirrors stack-layer 02 Architecture) */
    <svg key={6} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v24-icon-circle-draw v24-icon-delay-1' />
      <polygon points={hex(32)} stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' className='v24-icon-polygon-draw v24-icon-delay-2' />
      <polygon points={hex(22)} stroke={ink} strokeWidth='1' className='v24-icon-polygon-draw v24-icon-delay-3' />
      <polygon points={hex(12)} stroke={acc} strokeWidth='1.3' className='v24-icon-polygon-draw v24-icon-delay-4' />
      <circle cx='40' cy='40' r='2.5' fill={acc} className='v24-icon-scale-in v24-icon-delay-5' />
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
    <section className='v24-section' id='solutions'>
      <div className='v24-container'>
        <div className='v24-cap-head'>
          <div className='v24-cap-head-left'>
            <div className='num'>N°03 / What we do</div>
            <h2>Six layers. <span style={{ color: 'var(--v24-accent)' }}>One partner.</span>{' '}<span style={{ whiteSpace: 'nowrap' }}>No handoff.</span></h2>
            <p className='lead'>Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer, not within silos.</p>
          </div>
          <div className='v24-cap-toggle'>
            <button
              className={`v24-toggle-btn ${view === 'capabilities' ? 'active' : ''}`}
              onClick={() => setView('capabilities')}
            >
              Our Capabilities
            </button>
            <button
              className={`v24-toggle-btn ${view === 'framework' ? 'active' : ''}`}
              onClick={() => setView('framework')}
            >
              Our AI Transformation Stack
            </button>
          </div>
        </div>

        {view === 'capabilities' ? (
          <div className='v24-cap-interactive'>
            {/* Desktop: left sidebar tab list */}
            <div className='v24-cap-tabs' role='tablist'>
              {capabilities.map((c, i) => (
                <button
                  key={c.num}
                  role='tab'
                  aria-selected={i === active}
                  className={`v24-cap-tab ${i === active ? 'active' : ''}`}
                  onClick={() => selectTab(i)}
                >
                  <span className='tab-num'>{c.num}</span>
                  <span className='tab-label'>
                    <span className='tab-title'>{c.title}</span>
                    <span className='tab-kicker'>{c.kicker}</span>
                  </span>
                  <span
                    className='v24-cap-tab-progress'
                    style={i === active ? { animationDuration: `${cycleMs}ms` } : undefined}
                  />
                </button>
              ))}
            </div>

            {/* Mobile: compact prev/next navigator */}
            <div className='v24-cap-mobile-nav'>
              <button
                className='v24-cap-arrow'
                onClick={() => selectTab((active - 1 + capabilities.length) % capabilities.length)}
                aria-label='Previous capability'
              >
                ←
              </button>
              <div className='v24-cap-mobile-label'>
                <span className='mob-num'>{cap.num}</span>
                <span className='mob-title'>{cap.title}</span>
                <span className='mob-dots'>
                  {capabilities.map((_, i) => (
                    <span key={i} className={`mob-dot ${i === active ? 'active' : ''}`} onClick={() => selectTab(i)} />
                  ))}
                </span>
              </div>
              <button
                className='v24-cap-arrow'
                onClick={() => selectTab((active + 1) % capabilities.length)}
                aria-label='Next capability'
              >
                →
              </button>
              <span className='v24-cap-mobile-progress' />
            </div>

            {/* Detail panel — content left, icon column right */}
            <div className='v24-cap-detail' role='tabpanel'>
              <div className='v24-cap-detail-content'>
                <div className='v24-cap-detail-meta'>
                  <span className='detail-kicker'>{cap.kicker}</span>
                  <h3>{cap.title}</h3>
                  <span className='detail-subtitle'>{cap.subtitle}</span>
                </div>
                <p>{cap.body}</p>
                <div className='v24-cap-pills'>
                  {cap.tags.map((tag) => (
                    <span key={tag} className='v24-cap-pill'>{tag}</span>
                  ))}
                </div>
              </div>
              <div className='v24-cap-detail-icon'>
                <div className='v24-cap-icon-ring'>
                  <CapIcon index={active} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* AI Transformation Framework — animated schematic */
          <div className='v24-stack-diagram-wrap'>
            <StackDiagram />
          </div>
        )}
      </div>
    </section>
  )
}
