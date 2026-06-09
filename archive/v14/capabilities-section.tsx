'use client'

import { useState, useEffect } from 'react'

const CYCLE_MS = 5000

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
    kicker: 'Start here',
    title: 'Strategy & Architecture',
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
    tags: ['AWS', 'Azure', 'GCP', 'GPU Orchestration'],
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
    body: "CRM, ERP, and platform investments don\u2019t need replacing, they need unlocking. We connect existing systems so AI agents can read, write, and act across your entire application landscape.",
    cta: 'Explore integration options',
  },
  {
    num: '05',
    kicker: 'Product & Experience',
    title: 'What People Actually Use',
    subtitle: 'AI-native · Perpetual Engineering',
    tags: ['AI-native Apps', 'Digital Twins', 'Perpetual Engineering'],
    body: 'AI-native applications, digital twins, and next-gen experiences that evolve with the business. Designed for the new interaction patterns between humans and agents.',
    cta: 'See what we\u2019ve built',
  },
  {
    num: '06',
    kicker: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
    body: "AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.",
    cta: 'Learn about managed services',
  },
  {
    num: '07',
    kicker: 'Governance',
    title: 'Security & AI Risk',
    subtitle: 'Built in, not bolted on',
    tags: ['Data Sovereignty', 'AI Governance', 'Compliance'],
    body: 'Data sovereignty, AI governance frameworks, hallucination risk management, model drift monitoring, and compliance-ready architecture, embedded into every layer from day one.',
    cta: 'Review our governance framework',
  },
]

type StackRow = {
  layer: string
  idx: string
  products: { name: string; desc: string }[]
}

const stackRows: StackRow[] = [
  {
    layer: 'Data & Insights',
    idx: '07',
    products: [
      { name: 'Factweavers.ai', desc: 'Domain data cloud & quick insights' },
      { name: 'DBiz Compass', desc: 'AI-infused data engineering' },
    ],
  },
  {
    layer: 'Orchestration',
    idx: '06',
    products: [
      { name: 'Agent Studio', desc: 'Agentic AI & multi-agent orchestration' },
      { name: 'Nexus iConnector', desc: 'No rip & replace integration' },
    ],
  },
  {
    layer: 'Productivity',
    idx: '05',
    products: [
      { name: 'Productivity Automation', desc: 'Claude Co-work & Copilot' },
      { name: 'AI-Infused BizApps', desc: 'Autonomous agents for SaaS platforms' },
    ],
  },
  {
    layer: 'Development',
    idx: '04',
    products: [
      { name: 'Nexus Platform', desc: 'Enterprise AI dev environment' },
      { name: 'Perpetual Engineering', desc: 'AI agents across the full SDLC' },
    ],
  },
  {
    layer: 'Cloud',
    idx: '03',
    products: [
      { name: 'Multi-Cloud AI Foundation', desc: 'Enterprise AI Foundation rollout' },
      { name: 'DBiz Scoop', desc: 'AI-Powered migration pipeline' },
    ],
  },
  {
    layer: 'Architecture',
    idx: '02',
    products: [
      { name: 'TechOffice Foundry', desc: 'AI foundation & Well-Architected review' },
      { name: 'DBiz Adapt', desc: 'Architecting Secure and Sovereign AI' },
    ],
  },
  {
    layer: 'Strategy',
    idx: '01',
    products: [
      { name: 'Futures Studio', desc: 'AI ambition, roadmap & use case prioritisation' },
      { name: 'DBiz Canvas', desc: 'Concept to code in days' },
    ],
  },
]

/* ─── Stack Diagram SVG — Vertical Exploded Isometric ─── */
function StackDiagram() {
  /* Wide, thin, tilted slabs stacked top→bottom with left/right callouts */
  const slabW = 300   /* wide front face */
  const slabH = 22    /* thin */
  const skew = 46     /* isometric depth tilt */
  const skewY = 11    /* vertical offset for tilt */
  const gap = 62      /* vertical gap between slabs */
  const startY = 60
  const cx = 440      /* horizontal center of slab stack */
  const svgH = startY + 7 * gap + slabH + 50

  return (
    <svg
      viewBox={`0 0 900 ${svgH}`}
      xmlns='http://www.w3.org/2000/svg'
      className='v14-stack-diagram'
      aria-label='DBiz AI Transformation Stack — Exploded View'
    >
      <defs>
        <pattern id='v14-ex-dot' patternUnits='userSpaceOnUse' width='12' height='12'>
          <circle cx='1' cy='1' r='0.6' fill='var(--v14-ink-dot)' />
        </pattern>
        <filter id='v14-ex-glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        <pattern id='v14-ex-hatch' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
          <line x1='0' y1='0' x2='0' y2='6' stroke='var(--v14-ink-hatch)' strokeWidth='0.8' />
        </pattern>
      </defs>

      {/* Frame + dot background */}
      <rect x='8' y='8' width='884' height={svgH - 16} fill='url(#v14-ex-dot)' />
      <rect x='8' y='8' width='884' height={svgH - 16} fill='none' stroke='var(--v14-ink-frame)' strokeWidth='1' />
      <g stroke='var(--v14-ink-corner)' strokeWidth='2'>
        <line x1='8' y1='8' x2='26' y2='8' /><line x1='8' y1='8' x2='8' y2='26' />
        <line x1='892' y1='8' x2='874' y2='8' /><line x1='892' y1='8' x2='892' y2='26' />
        <line x1='8' y1={svgH - 8} x2='26' y2={svgH - 8} /><line x1='8' y1={svgH - 8} x2='8' y2={svgH - 26} />
        <line x1='892' y1={svgH - 8} x2='874' y2={svgH - 8} /><line x1='892' y1={svgH - 8} x2='892' y2={svgH - 26} />
      </g>

      {/* Drawing label + annotations */}
      <text x='450' y='28' fontFamily='var(--font-mono)' fontSize='7.5' fill='var(--v14-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·STACK-01 &nbsp; EXPLODED VIEW</text>
      <text x='876' y='28' fontFamily='var(--font-mono)' fontSize='5.5' fill='var(--v14-accent)' textAnchor='end' letterSpacing='1'>SHEET A1</text>
      <text x='30' y='28' fontFamily='var(--font-mono)' fontSize='5.5' fill='var(--v14-ink-dim)' letterSpacing='1'>SCALE 1:1</text>

      {/* Left ruler ticks */}
      <g stroke='var(--v14-ink-frame)' strokeWidth='0.5'>
        {Array.from({ length: Math.floor((svgH - 60) / 18) }).map((_, i) => {
          const ty = 42 + i * 18
          return <line key={`lt${i}`} x1='18' y1={ty} x2={i % 3 === 0 ? '28' : '24'} y2={ty} />
        })}
      </g>

      {/* Left dimension bracket */}
      <g stroke='var(--v14-ink-hair)' strokeWidth='0.8'>
        <line x1='36' y1={startY} x2='36' y2={startY + 6 * gap + slabH + skewY} />
        <line x1='32' y1={startY} x2='40' y2={startY} />
        <line x1='32' y1={startY + 6 * gap + slabH + skewY} x2='40' y2={startY + 6 * gap + slabH + skewY} />
      </g>
      <text x='24' y={startY + 3 * gap} fontFamily='var(--font-mono)' fontSize='6.5' letterSpacing='1.5' fill='#F07B2F' transform={`rotate(-90 24 ${startY + 3 * gap})`} textAnchor='middle'>7 LAYERS</text>

      {/* Layers — stacked top to bottom */}
      {stackRows.map((row, i) => {
        const y = startY + i * gap
        const x1 = cx - slabW / 2
        const x2 = cx + slabW / 2
        const isHighlight = i === 3 || i === 6

        return (
          <g key={row.idx} className='v14-stack-layer' style={{ '--layer-index': i } as React.CSSProperties}>
            {/* Isometric slab — top face (tilted) */}
            <polygon
              points={`${x1},${y + skewY} ${x1 + skew},${y} ${x2 + skew},${y} ${x2},${y + skewY}`}
              fill={isHighlight ? 'url(#v14-ex-hatch)' : 'var(--v14-ink-layer-fill)'}
              stroke='var(--v14-ink-corner)' strokeWidth='1'
            />
            {/* Front face */}
            <rect x={x1} y={y + skewY} width={slabW} height={slabH} fill='var(--v14-ink-layer-fill)' stroke='var(--v14-ink-corner)' strokeWidth='1' />
            {/* Right face */}
            <polygon
              points={`${x2},${y + skewY} ${x2 + skew},${y} ${x2 + skew},${y + slabH} ${x2},${y + skewY + slabH}`}
              fill='var(--v14-ink-layer-right)' stroke='var(--v14-ink-corner)' strokeWidth='1'
            />

            {/* Layer label on front face */}
            <text x={cx} y={y + skewY + slabH / 2 + 4} fontFamily='var(--font-sans)' fontSize='10' fontWeight='700' fill='#ffffff' textAnchor='middle' letterSpacing='1.5'>{row.layer.toUpperCase()}</text>

            {/* Layer code on right face */}
            <text x={x2 + skew / 2 + 4} y={y + slabH / 2 + 4} fontFamily='var(--font-mono)' fontSize='6' fill='var(--v14-ink-label)' textAnchor='middle' letterSpacing='0.5'>{row.idx}</text>

            {/* Left callout — Product 1 */}
            <line x1={x1} y1={y + skewY + slabH / 2} x2={x1 - 24} y2={y + skewY + slabH / 2} stroke='var(--v14-ink-callout)' strokeWidth='0.8' strokeDasharray='2 2' className='v14-stack-connector' />
            <circle cx={x1} cy={y + skewY + slabH / 2} r='1.8' fill='#F07B2F' className='v14-stack-dot' />
            <text x={x1 - 30} y={y + skewY + slabH / 2 - 3} fontFamily='var(--font-sans)' fontSize='9' fontWeight='700' fill='#F07B2F' textAnchor='end'>{row.products[0].name}</text>
            <text x={x1 - 30} y={y + skewY + slabH / 2 + 11} fontFamily='var(--font-sans)' fontSize='6.5' fill='var(--v14-ink-label-strong)' textAnchor='end'>{row.products[0].desc}</text>

            {/* Right callout — Product 2 */}
            {row.products[1] && (
              <>
                <line x1={x2 + skew} y1={y + slabH / 2} x2={x2 + skew + 24} y2={y + slabH / 2} stroke='var(--v14-ink-callout)' strokeWidth='0.8' strokeDasharray='2 2' className='v14-stack-connector' />
                <circle cx={x2 + skew} cy={y + slabH / 2} r='1.8' fill='#F07B2F' className='v14-stack-dot' />
                <text x={x2 + skew + 30} y={y + slabH / 2 - 3} fontFamily='var(--font-sans)' fontSize='9' fontWeight='700' fill='#F07B2F'>{row.products[1].name}</text>
                <text x={x2 + skew + 30} y={y + slabH / 2 + 11} fontFamily='var(--font-sans)' fontSize='6.5' fill='var(--v14-ink-label-strong)'>{row.products[1].desc}</text>
              </>
            )}

            {/* Inter-layer flow blobs */}
            {i < stackRows.length - 1 && (
              <>
                <circle cx={cx - 30} cy={y + skewY + slabH + (gap - slabH) / 2} r='2' fill='#F07B2F' className='v14-stack-blob' style={{ '--blob-delay': `${i * 0.7}s` } as React.CSSProperties} filter='url(#v14-ex-glow)' />
                <circle cx={cx + 40} cy={y + skewY + slabH + (gap - slabH) / 2 + 3} r='1.2' fill='var(--v14-ink-corner)' className='v14-stack-blob' style={{ '--blob-delay': `${i * 0.7 + 0.35}s` } as React.CSSProperties} />
              </>
            )}
          </g>
        )
      })}

      {/* Bottom measurement */}
      <g stroke='var(--v14-ink-measure)' strokeWidth='0.6'>
        <line x1={cx - slabW / 2} y1={svgH - 28} x2={cx + slabW / 2 + skew} y2={svgH - 28} />
        <line x1={cx - slabW / 2} y1={svgH - 32} x2={cx - slabW / 2} y2={svgH - 24} />
        <line x1={cx + slabW / 2 + skew} y1={svgH - 32} x2={cx + slabW / 2 + skew} y2={svgH - 24} />
      </g>
      <text x='450' y={svgH - 14} fontFamily='var(--font-mono)' fontSize='6.5' fill='var(--v14-ink-dim)' textAnchor='middle' letterSpacing='1.5'>FULL STACK · NO CAPABILITY GAPS · NO VENDOR LOCK-IN</text>
    </svg>
  )
}

/* Geometric SVG icons.navy strokes + orange accents */
function CapIcon({ index }: { index: number }) {
  const icons = [
    /* 0 Strategy.target */
    <svg key={0} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v14-ink-corner)' strokeWidth='1' strokeDasharray='4 3' className='v14-icon-circle-draw v14-icon-delay-1' />
      <circle cx='40' cy='40' r='24' stroke='var(--v14-ink-corner)' strokeWidth='1.2' className='v14-icon-circle-draw v14-icon-delay-2' />
      <circle cx='40' cy='40' r='14' stroke='var(--v14-accent)' strokeWidth='1.5' className='v14-icon-circle-draw v14-icon-delay-3' />
      <circle cx='40' cy='40' r='4' fill='var(--v14-accent)' className='v14-icon-scale-in v14-icon-delay-4' />
      <line x1='40' y1='3' x2='40' y2='15' stroke='var(--v14-ink-corner)' strokeWidth='0.8' className='v14-icon-line-draw v14-icon-delay-3' />
      <line x1='40' y1='65' x2='40' y2='77' stroke='var(--v14-ink-corner)' strokeWidth='0.8' className='v14-icon-line-draw v14-icon-delay-3' />
      <line x1='3' y1='40' x2='15' y2='40' stroke='var(--v14-ink-corner)' strokeWidth='0.8' className='v14-icon-line-draw v14-icon-delay-3' />
      <line x1='65' y1='40' x2='77' y2='40' stroke='var(--v14-ink-corner)' strokeWidth='0.8' className='v14-icon-line-draw v14-icon-delay-3' />
      <circle cx='40' cy='5' r='2' fill='var(--v14-accent)' className='v14-icon-pulse v14-icon-scale-in v14-icon-delay-5' />
    </svg>,
    /* 1 Cloud.layers */
    <svg key={1} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v14-icon-circle-draw v14-icon-delay-1' />
      <path d='M 20 48 L 40 38 L 60 48 L 40 58 Z' stroke='var(--v14-ink-corner)' strokeWidth='1.2' fill='none' className='v14-icon-polygon-draw v14-icon-delay-2' />
      <path d='M 24 40 L 40 32 L 56 40 L 40 48 Z' stroke='var(--v14-ink-corner)' strokeWidth='1.2' fill='none' className='v14-icon-polygon-draw v14-icon-delay-3' />
      <path d='M 28 32 L 40 26 L 52 32 L 40 38 Z' stroke='var(--v14-accent)' strokeWidth='1.5' fill='none' className='v14-icon-polygon-draw v14-icon-delay-4' />
      <line x1='40' y1='26' x2='40' y2='58' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v14-icon-line-draw v14-icon-delay-5' />
      <circle cx='40' cy='29' r='2.5' fill='var(--v14-accent)' className='v14-icon-scale-in v14-icon-delay-6' />
      <circle cx='28' cy='32' r='1.5' fill='var(--v14-accent)' opacity='0.6' className='v14-icon-scale-in v14-icon-delay-6' />
      <circle cx='52' cy='32' r='1.5' fill='var(--v14-accent)' opacity='0.6' className='v14-icon-scale-in v14-icon-delay-6' />
    </svg>,
    /* 2 Data.hexagon */
    <svg key={2} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v14-icon-circle-draw v14-icon-delay-1' />
      <polygon points='40,8 68,23 68,57 40,72 12,57 12,23' stroke='var(--v14-ink-corner)' strokeWidth='1.2' fill='none' className='v14-icon-polygon-draw v14-icon-delay-2' />
      <polygon points='40,20 56,29 56,51 40,60 24,51 24,29' stroke='var(--v14-accent)' strokeWidth='1.5' fill='none' className='v14-icon-polygon-draw v14-icon-delay-3' />
      <circle cx='40' cy='40' r='6' fill='var(--v14-accent)' opacity='0.15' stroke='var(--v14-accent)' strokeWidth='1.2' className='v14-icon-fade-in-el v14-icon-delay-4' />
      <circle cx='40' cy='40' r='2.5' fill='var(--v14-accent)' className='v14-icon-scale-in v14-icon-delay-5' />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <circle key={i} cx={40 + Math.cos(r) * 14} cy={40 + Math.sin(r) * 14} r='2' fill='var(--v14-accent)' opacity='0.6' className='v14-icon-scale-in' style={{ animationDelay: `${0.6 + i * 0.08}s` }} />
      })}
    </svg>,
    /* 3 Apps.nodes */
    <svg key={3} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v14-icon-circle-draw v14-icon-delay-1' />
      <line x1='20' y1='27' x2='32' y2='40' stroke='var(--v14-ink-corner)' strokeWidth='1' className='v14-icon-line-draw v14-icon-delay-3' />
      <line x1='60' y1='27' x2='48' y2='40' stroke='var(--v14-ink-corner)' strokeWidth='1' className='v14-icon-line-draw v14-icon-delay-3' />
      <line x1='20' y1='53' x2='32' y2='40' stroke='var(--v14-ink-corner)' strokeWidth='1' className='v14-icon-line-draw v14-icon-delay-4' />
      <line x1='60' y1='53' x2='48' y2='40' stroke='var(--v14-ink-corner)' strokeWidth='1' className='v14-icon-line-draw v14-icon-delay-4' />
      <rect x='12' y='19' width='16' height='16' stroke='var(--v14-ink-corner)' strokeWidth='1.2' fill='none' className='v14-icon-rect-draw v14-icon-delay-2' />
      <rect x='52' y='19' width='16' height='16' stroke='var(--v14-ink-corner)' strokeWidth='1.2' fill='none' className='v14-icon-rect-draw v14-icon-delay-2' />
      <rect x='12' y='45' width='16' height='16' stroke='var(--v14-ink-corner)' strokeWidth='1.2' fill='none' className='v14-icon-rect-draw v14-icon-delay-2' />
      <rect x='52' y='45' width='16' height='16' stroke='var(--v14-ink-corner)' strokeWidth='1.2' fill='none' className='v14-icon-rect-draw v14-icon-delay-2' />
      <circle cx='40' cy='40' r='8' stroke='var(--v14-accent)' strokeWidth='1.5' fill='none' className='v14-icon-circle-draw v14-icon-delay-5' />
      <circle cx='40' cy='40' r='3' fill='var(--v14-accent)' className='v14-icon-scale-in v14-icon-delay-6' />
    </svg>,
    /* 4 Product.orbital */
    <svg key={4} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v14-icon-circle-draw v14-icon-delay-1' />
      <circle cx='40' cy='40' r='26' stroke='var(--v14-ink-corner)' strokeWidth='1.2' className='v14-icon-circle-draw v14-icon-delay-2' />
      <circle cx='40' cy='40' r='17' stroke='var(--v14-accent)' strokeWidth='1.5' className='v14-icon-circle-draw v14-icon-delay-3' />
      <circle cx='40' cy='40' r='3' fill='var(--v14-accent)' className='v14-icon-scale-in v14-icon-delay-5' />
      <ellipse cx='40' cy='40' rx='35' ry='14' stroke='var(--v14-ink-corner)' strokeWidth='0.8' transform='rotate(30 40 40)' className='v14-icon-circle-draw v14-icon-delay-4' />
      <circle cx='62.5' cy='20' r='2.5' fill='var(--v14-accent)' className='v14-icon-pulse v14-icon-scale-in v14-icon-delay-6' />
    </svg>,
    /* 5 Ops.radar */
    <svg key={5} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v14-ink-corner)' strokeWidth='1.2' className='v14-icon-circle-draw v14-icon-delay-1' />
      <circle cx='40' cy='40' r='24' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v14-icon-circle-draw v14-icon-delay-2' />
      <circle cx='40' cy='40' r='13' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v14-icon-circle-draw v14-icon-delay-3' />
      <line x1='40' y1='5' x2='40' y2='75' stroke='var(--v14-ink-corner)' strokeWidth='0.6' className='v14-icon-line-draw v14-icon-delay-4' />
      <line x1='5' y1='40' x2='75' y2='40' stroke='var(--v14-ink-corner)' strokeWidth='0.6' className='v14-icon-line-draw v14-icon-delay-4' />
      <path d='M 40 40 L 40 5' stroke='var(--v14-accent)' strokeWidth='2' className='v14-icon-line-draw v14-icon-delay-5' />
      <circle cx='40' cy='40' r='3' fill='var(--v14-accent)' className='v14-icon-scale-in v14-icon-delay-6' />
      <circle cx='54' cy='22' r='2.5' fill='var(--v14-accent)' className='v14-icon-pulse v14-icon-scale-in v14-icon-delay-7' />
    </svg>,
    /* 6 Governance.shield */
    <svg key={6} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='35' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='4 3' className='v14-icon-circle-draw v14-icon-delay-1' />
      <path d='M 40 6 L 70 21 L 70 51 L 40 74 L 10 51 L 10 21 Z' stroke='var(--v14-ink-corner)' strokeWidth='1.2' fill='none' className='v14-icon-polygon-draw v14-icon-delay-2' />
      <path d='M 40 16 L 60 27 L 60 49 L 40 62 L 20 49 L 20 27 Z' stroke='var(--v14-accent)' strokeWidth='1.5' fill='none' className='v14-icon-polygon-draw v14-icon-delay-3' />
      <line x1='40' y1='16' x2='40' y2='62' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v14-icon-line-draw v14-icon-delay-4' />
      <line x1='20' y1='38' x2='60' y2='38' stroke='var(--v14-ink-corner)' strokeWidth='0.8' strokeDasharray='2 2' className='v14-icon-line-draw v14-icon-delay-4' />
      <circle cx='40' cy='38' r='6' fill='var(--v14-accent)' opacity='0.15' stroke='var(--v14-accent)' strokeWidth='1.2' className='v14-icon-fade-in-el v14-icon-delay-5' />
      <circle cx='40' cy='38' r='2.5' fill='var(--v14-accent)' className='v14-icon-scale-in v14-icon-delay-6' />
    </svg>,
  ]
  return icons[index] || icons[0]
}

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [view, setView] = useState<'capabilities' | 'framework'>('capabilities')
  const cap = capabilities[active]

  // Auto-cycle through capabilities
  useEffect(() => {
    if (view !== 'capabilities') return
    const id = setTimeout(() => {
      setActive((i) => (i + 1) % capabilities.length)
    }, CYCLE_MS)
    return () => clearTimeout(id)
  }, [active, view])

  return (
    <section className='v14-section' id='solutions'>
      <div className='v14-container'>
        <div className='v14-cap-head'>
          <div className='v14-cap-head-left'>
            <div className='num'>N°03 / What we do</div>
            <h2>Six layers. <span style={{ color: 'var(--v14-accent)' }}>One partner.</span>{' '}<span style={{ whiteSpace: 'nowrap' }}>No handoff.</span></h2>
            <p className='lead'>Every enterprise transformation stalls at the seams between strategy, data, and delivery. We work across every layer, not within silos.</p>
          </div>
          <div className='v14-cap-toggle'>
            <button
              className={`v14-toggle-btn ${view === 'capabilities' ? 'active' : ''}`}
              onClick={() => setView('capabilities')}
            >
              Our Capabilities
            </button>
            <button
              className={`v14-toggle-btn ${view === 'framework' ? 'active' : ''}`}
              onClick={() => setView('framework')}
            >
              AI Transformation Framework
            </button>
          </div>
        </div>

        {view === 'capabilities' ? (
          <div className='v14-cap-interactive'>
            {/* Desktop: left sidebar tab list */}
            <div className='v14-cap-tabs' role='tablist'>
              {capabilities.map((c, i) => (
                <button
                  key={c.num}
                  role='tab'
                  aria-selected={i === active}
                  className={`v14-cap-tab ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className='tab-num'>{c.num}</span>
                  <span className='tab-label'>
                    <span className='tab-title'>{c.title}</span>
                    <span className='tab-kicker'>{c.kicker}</span>
                  </span>
                  <span className='v14-cap-tab-progress' />
                </button>
              ))}
            </div>

            {/* Mobile: compact prev/next navigator */}
            <div className='v14-cap-mobile-nav'>
              <button
                className='v14-cap-arrow'
                onClick={() => setActive((active - 1 + capabilities.length) % capabilities.length)}
                aria-label='Previous capability'
              >
                ←
              </button>
              <div className='v14-cap-mobile-label'>
                <span className='mob-num'>{cap.num}</span>
                <span className='mob-title'>{cap.title}</span>
                <span className='mob-dots'>
                  {capabilities.map((_, i) => (
                    <span key={i} className={`mob-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} />
                  ))}
                </span>
              </div>
              <button
                className='v14-cap-arrow'
                onClick={() => setActive((active + 1) % capabilities.length)}
                aria-label='Next capability'
              >
                →
              </button>
              <span className='v14-cap-mobile-progress' />
            </div>

            {/* Detail panel — content left, icon column right */}
            <div className='v14-cap-detail' role='tabpanel'>
              <div className='v14-cap-detail-content'>
                <div className='v14-cap-detail-meta'>
                  <span className='detail-kicker'>{cap.kicker}</span>
                  <h3>{cap.title}</h3>
                  <span className='detail-subtitle'>{cap.subtitle}</span>
                </div>
                <p>{cap.body}</p>
                <div className='v14-cap-pills'>
                  {cap.tags.map((tag) => (
                    <span key={tag} className='v14-cap-pill'>{tag}</span>
                  ))}
                </div>
                <a href='#cta' className='v14-cta-secondary'>
                  See our work <span className='arrow'>&rarr;</span>
                </a>
              </div>
              <div className='v14-cap-detail-icon'>
                <div className='v14-cap-icon-ring'>
                  <CapIcon index={active} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* AI Transformation Framework — animated schematic */
          <div className='v14-stack-diagram-wrap'>
            <StackDiagram />
          </div>
        )}
      </div>
    </section>
  )
}
