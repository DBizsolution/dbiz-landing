'use client'

import { useState, useEffect } from 'react'

const reasons = [
  { idx: '01', label: 'EXPERTISE', title: 'Expertise that works together.', body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos.', angle: 0 },
  { idx: '02', label: 'SCALE', title: 'Transformation at scale.', body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.', angle: 60 },
  { idx: '03', label: 'DELIVERY', title: 'Time-boxed delivery.', body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don\u2019t allow it.', angle: 120 },
  { idx: '04', label: 'PLATFORMS', title: 'Production platforms.', body: 'NEXUS, Agent Studio, FactWeavers\u2122, DBiz Canvas — production systems deployed in enterprise environments.', angle: 180 },
  { idx: '05', label: 'PARTNERS', title: 'Certified at the highest tiers.', body: 'AWS Advanced, Azure Solutions, Salesforce, Dynamics 365, Snowflake, Databricks, Anthropic, Boomi, MuleSoft.', angle: 240 },
  { idx: '06', label: 'DOMAIN', title: 'Sector expertise, engineered.', body: 'Financial Services, Logistics, Real Estate, Aged Care, Automotive, Government — with FactWeavers\u2122 pre-built for every vertical.', angle: 300 },
]

function WhyDiagram({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  const cx = 220
  const cy = 220
  const r = 150
  const nodeR = 30
  const hubR = 36

  const nodes = reasons.map((reason, i) => {
    const a = (reason.angle - 90) * Math.PI / 180
    return { ...reason, i, x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, a }
  })

  return (
    <svg viewBox='0 0 440 440' xmlns='http://www.w3.org/2000/svg' className='v14-why-diagram'>
      <defs>
        <filter id='v14-why-glow'>
          <feGaussianBlur stdDeviation='4' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        <filter id='v14-why-glow-sm'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        {/* Blueprint textures */}
        <pattern id='v14-why-hatch' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
          <line x1='0' y1='0' x2='0' y2='6' stroke='rgba(240,123,47,0.15)' strokeWidth='0.8' />
        </pattern>
        <pattern id='v14-why-cross' patternUnits='userSpaceOnUse' width='8' height='8'>
          <line x1='0' y1='0' x2='8' y2='8' stroke='rgba(26,45,90,0.09)' strokeWidth='0.4' />
          <line x1='8' y1='0' x2='0' y2='8' stroke='rgba(26,45,90,0.09)' strokeWidth='0.4' />
        </pattern>
        <pattern id='v14-why-grid' patternUnits='userSpaceOnUse' width='20' height='20'>
          <path d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(26,45,90,0.1)' strokeWidth='0.5' />
        </pattern>
        <clipPath id='v14-why-clip'><rect x='12' y='12' width='416' height='416' /></clipPath>
      </defs>

      {/* Frame */}
      <rect x='10' y='10' width='420' height='420' fill='url(#v14-why-grid)' stroke='rgba(26,45,90,0.15)' strokeWidth='1' />
      {/* Corner brackets */}
      <g stroke='#F07B2F' strokeWidth='1.5'>
        <line x1='10' y1='10' x2='28' y2='10' /><line x1='10' y1='10' x2='10' y2='28' />
        <line x1='430' y1='10' x2='412' y2='10' /><line x1='430' y1='10' x2='430' y2='28' />
        <line x1='10' y1='430' x2='28' y2='430' /><line x1='10' y1='430' x2='10' y2='412' />
        <line x1='430' y1='430' x2='412' y2='430' /><line x1='430' y1='430' x2='430' y2='412' />
      </g>
      {/* Drawing number */}
      <text x='220' y='26' fontFamily='var(--font-mono)' fontSize='6' fill='rgba(26,45,90,0.35)' textAnchor='middle' letterSpacing='1.5'>DWG·WHY-01</text>

      <g clipPath='url(#v14-why-clip)'>
        {/* Crosshatch texture fill behind orbit */}
        <circle cx={cx} cy={cy} r={r + 20} fill='url(#v14-why-cross)' />

        {/* Construction lines — light blue */}
        <line x1={cx} y1='20' x2={cx} y2='420' stroke='rgba(26,45,90,0.12)' strokeWidth='0.5' strokeDasharray='8 4' />
        <line x1='20' y1={cy} x2='420' y2={cy} stroke='rgba(26,45,90,0.12)' strokeWidth='0.5' strokeDasharray='8 4' />
        <line x1='20' y1='20' x2='420' y2='420' stroke='rgba(26,45,90,0.07)' strokeWidth='0.5' strokeDasharray='6 6' />
        <line x1='420' y1='20' x2='20' y2='420' stroke='rgba(26,45,90,0.07)' strokeWidth='0.5' strokeDasharray='6 6' />

        {/* Ruler ticks — left */}
        <g stroke='rgba(26,45,90,0.15)' strokeWidth='0.5'>
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`rl${i}`} x1='12' y1={22 + i * 21} x2={i % 5 === 0 ? '24' : '18'} y2={22 + i * 21} />
          ))}
        </g>
        {/* Ruler ticks — top */}
        <g stroke='rgba(26,45,90,0.15)' strokeWidth='0.5'>
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`rt${i}`} x1={22 + i * 21} y1='12' x2={22 + i * 21} y2={i % 5 === 0 ? '24' : '18'} />
          ))}
        </g>

        {/* Orbit rings */}
        <circle cx={cx} cy={cy} r={r + 30} fill='none' stroke='rgba(240,123,47,0.08)' strokeWidth='0.6' strokeDasharray='3 6' />
        <circle cx={cx} cy={cy} r={r} fill='none' stroke='rgba(240,123,47,0.18)' strokeWidth='0.8' strokeDasharray='5 4' className='v14-why-orbit' />
        <circle cx={cx} cy={cy} r={r - 50} fill='none' stroke='rgba(240,123,47,0.1)' strokeWidth='0.6' strokeDasharray='3 5' />

        {/* Hatched ring between inner orbits */}
        <path d={`M ${cx} ${cy - r + 50} A ${r - 50} ${r - 50} 0 1 1 ${cx - 0.01} ${cy - r + 50}`} fill='url(#v14-why-hatch)' stroke='none' />

        {/* Dimension annotation — radius */}
        <g stroke='rgba(26,45,90,0.22)' strokeWidth='0.5'>
          <line x1={cx} y1={cy} x2={cx + r} y2={cy} strokeDasharray='2 3' />
          <line x1={cx + r - 4} y1={cy - 3} x2={cx + r + 4} y2={cy + 3} />
        </g>
        <text x={cx + r / 2} y={cy - 5} fontFamily='var(--font-mono)' fontSize='5.5' fill='rgba(26,45,90,0.3)' textAnchor='middle'>R={r}</text>

        {/* Section marker — bottom */}
        <g>
          <line x1='60' y1='418' x2='380' y2='418' stroke='rgba(26,45,90,0.12)' strokeWidth='0.5' />
          <text x='220' y='414' fontFamily='var(--font-mono)' fontSize='5' fill='rgba(26,45,90,0.25)' textAnchor='middle' letterSpacing='1'>SECTION A-A</text>
        </g>

        {/* Spokes */}
        {nodes.map((node) => {
          const isActive = node.i === active
          const sx = cx + Math.cos(node.a) * (hubR + 2)
          const sy = cy + Math.sin(node.a) * (hubR + 2)
          const ex = node.x - Math.cos(node.a) * (nodeR + 2)
          const ey = node.y - Math.sin(node.a) * (nodeR + 2)

          return (
            <g key={`spoke-${node.idx}`}>
              <line x1={sx} y1={sy} x2={ex} y2={ey} stroke='#F07B2F' strokeWidth={isActive ? 1.5 : 0.8} strokeDasharray='5 4' opacity={isActive ? 0.9 : 0.25} className='v14-why-spoke' />
              <circle r='2' fill='#F07B2F' opacity={isActive ? 0.9 : 0.2} filter='url(#v14-why-glow-sm)'>
                <animateMotion dur={`${2.5 + node.i * 0.2}s`} repeatCount='indefinite'>
                  <mpath xlinkHref={`#spoke-path-${node.i}`} />
                </animateMotion>
              </circle>
              <path id={`spoke-path-${node.i}`} d={`M ${sx} ${sy} L ${ex} ${ey}`} fill='none' stroke='none' />
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = node.i === active
          return (
            <g key={node.idx} className={`v14-why-node ${isActive ? 'active' : ''}`} onClick={() => onSelect(node.i)} style={{ cursor: 'pointer' }}>
              {isActive && <circle cx={node.x} cy={node.y} r={nodeR + 6} fill='none' stroke='#F07B2F' strokeWidth='0.8' opacity='0.4' strokeDasharray='3 3' className='v14-why-active-ring' />}
              {/* Hatched fill for inactive */}
              {!isActive && <circle cx={node.x} cy={node.y} r={nodeR - 1} fill='url(#v14-why-hatch)' />}
              <circle cx={node.x} cy={node.y} r={nodeR} fill={isActive ? '#F07B2F' : 'rgba(13,27,62,0.85)'} stroke={isActive ? '#F07B2F' : '#1A2D5A'} strokeWidth={isActive ? 2 : 1.5} filter={isActive ? 'url(#v14-why-glow)' : 'none'} className='v14-why-node-circle' />
              <text x={node.x} y={node.y + 1} fontFamily='var(--font-mono)' fontSize='6.5' fontWeight='700' fill='#fff' textAnchor='middle' dominantBaseline='middle' letterSpacing='0.6'>{node.label}</text>
              {/* Callout line + index */}
              <line x1={node.x + Math.cos(node.a) * nodeR} y1={node.y + Math.sin(node.a) * nodeR} x2={node.x + Math.cos(node.a) * (nodeR + 10)} y2={node.y + Math.sin(node.a) * (nodeR + 10)} stroke='#F07B2F' strokeWidth='0.6' />
              <text x={node.x + Math.cos(node.a) * (nodeR + 16)} y={node.y + Math.sin(node.a) * (nodeR + 16)} fontFamily='var(--font-mono)' fontSize='7.5' fontWeight='600' fill='#F07B2F' textAnchor='middle' dominantBaseline='middle'>{node.idx}</text>
            </g>
          )
        })}

        {/* Center hub */}
        <circle cx={cx} cy={cy} r={hubR} fill='#F07B2F' stroke='rgba(240,123,47,0.5)' strokeWidth='2.5' />
        <circle cx={cx} cy={cy} r={hubR + 6} fill='none' stroke='rgba(240,123,47,0.12)' strokeWidth='0.8' strokeDasharray='3 3' className='v14-why-active-ring' />
        <circle cx={cx} cy={cy} r='18' fill='#E06B1F' className='v14-why-hub-pulse' />
        <text x={cx} y={cy - 4} fontFamily='var(--font-mono)' fontSize='6.5' fontWeight='700' fill='#fff' textAnchor='middle' letterSpacing='0.8'>WHY</text>
        <text x={cx} y={cy + 7} fontFamily='var(--font-sans)' fontSize='9' fontWeight='800' fill='#fff' textAnchor='middle' letterSpacing='1'>DBIZ</text>
      </g>
    </svg>
  )
}

export default function WhySection() {
  const [active, setActive] = useState(0)
  const reason = reasons[active]

  /* Auto-rotate every 5s */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % reasons.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className='v14-section' id='about' data-surface='light'>
      <div className='v14-container'>
        <div className='v14-why-head'>
          <div className='num'>N°06 / Why DBiz</div>
          <h2>Why enterprises choose <em>DBiz.</em></h2>
          <p className='lead'>Six differentiators — all evidenced by delivery, not brochures.</p>
        </div>

        <div className='v14-why-interactive'>
          {/* Diagram — center */}
          <div className='v14-why-diagram-wrap'>
            <WhyDiagram active={active} onSelect={setActive} />
          </div>

          {/* Detail panel — right */}
          <div className='v14-why-detail' key={active}>
            <span className='v14-why-detail-idx'>{reason.idx} / {reason.label}</span>
            <h3>{reason.title}</h3>
            <p>{reason.body}</p>
            <a href='#cta' className='v14-why-cta'>Learn more about us <span className='arrow'>→</span></a>
            <div className='v14-why-detail-nav'>
              {reasons.map((_, i) => (
                <button
                  key={i}
                  className={`v14-why-detail-dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Reason ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
