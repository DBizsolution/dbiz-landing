/* V22 — N°04 How we do it.
   AI Transformation Stack — Deconstructed Assembly (ported from v20).
   7 discs on a central horizontal shaft, each with a rotating inner geometry,
   a traveling halo that sweeps across the row, and paired top/bottom callouts
   for the offering and accelerator powering that layer. */

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
    const acc = 'var(--v22-accent)'
    const ink = 'rgba(255,255,255,0.38)'
    switch (i) {
      case 0: // 01 Strategy — concentric target rings + crosshair
        return (
          <g>
            <circle cx={cx} cy={cy} r='48' stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none' />
            <circle cx={cx} cy={cy} r='34' stroke={ink} strokeWidth='1' fill='none' />
            <circle cx={cx} cy={cy} r='20' stroke={acc} strokeWidth='1.2' fill='none' />
            <circle cx={cx} cy={cy} r='8' stroke={acc} strokeWidth='1' fill='none' />
            <line x1={cx - 58} y1={cy} x2={cx - 42} y2={cy} stroke={ink} strokeWidth='0.8' />
            <line x1={cx + 42} y1={cy} x2={cx + 58} y2={cy} stroke={ink} strokeWidth='0.8' />
            <line x1={cx} y1={cy - 58} x2={cx} y2={cy - 42} stroke={ink} strokeWidth='0.8' />
            <line x1={cx} y1={cy + 42} x2={cx} y2={cy + 58} stroke={ink} strokeWidth='0.8' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 1: { // 02 Architecture — nested hexagons
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(46)} stroke={ink} strokeWidth='0.8' strokeDasharray='3 2' fill='none' />
            <polygon points={hex(32)} stroke={ink} strokeWidth='1' fill='none' />
            <polygon points={hex(18)} stroke={acc} strokeWidth='1.3' fill='none' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      case 2: // 03 Cloud — stacked cloud lamellae
        return (
          <g>
            <path d={`M ${cx - 44} ${cy + 18} L ${cx} ${cy - 2} L ${cx + 44} ${cy + 18} L ${cx} ${cy + 38} Z`} stroke={ink} strokeWidth='1' fill='none' />
            <path d={`M ${cx - 34} ${cy + 6} L ${cx} ${cy - 12} L ${cx + 34} ${cy + 6} L ${cx} ${cy + 24} Z`} stroke={ink} strokeWidth='1' fill='none' />
            <path d={`M ${cx - 24} ${cy - 6} L ${cx} ${cy - 22} L ${cx + 24} ${cy - 6} L ${cx} ${cy + 10} Z`} stroke={acc} strokeWidth='1.3' fill='none' />
            <line x1={cx} y1={cy - 22} x2={cx} y2={cy + 38} stroke={ink} strokeWidth='0.6' strokeDasharray='2 2' />
            <circle cx={cx} cy={cy - 14} r='2.5' fill={acc} />
          </g>
        )
      case 3: // 04 Development — gear teeth ring
        return (
          <g>
            <circle cx={cx} cy={cy} r='32' stroke={ink} strokeWidth='1' fill='none' />
            {Array.from({ length: 12 }).map((_, t) => {
              const a = (t / 12) * Math.PI * 2
              const x1 = cx + Math.cos(a) * 32
              const y1 = cy + Math.sin(a) * 32
              const x2 = cx + Math.cos(a) * 44
              const y2 = cy + Math.sin(a) * 44
              return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ink} strokeWidth='2' />
            })}
            <circle cx={cx} cy={cy} r='44' stroke={ink} strokeWidth='0.6' strokeDasharray='3 2' fill='none' />
            <circle cx={cx} cy={cy} r='22' stroke={acc} strokeWidth='1.2' fill='none' />
            <circle cx={cx} cy={cy} r='10' stroke={acc} strokeWidth='1' fill='none' />
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      case 4: // 05 Productivity — dual-ring co-work (human + AI converging)
        return (
          <g>
            <circle cx={cx - 16} cy={cy} r='24' stroke={ink} strokeWidth='1.1' fill='none' />
            <circle cx={cx - 16} cy={cy} r='16' stroke={ink} strokeWidth='0.6' strokeDasharray='2 2' fill='none' />
            <circle cx={cx - 16} cy={cy} r='2' fill={ink} />
            <circle cx={cx + 16} cy={cy} r='24' stroke={acc} strokeWidth='1.3' fill='none' />
            <circle cx={cx + 16} cy={cy} r='16' stroke={acc} strokeWidth='0.6' strokeDasharray='2 2' fill='none' />
            <circle cx={cx + 16} cy={cy} r='2' fill={acc} />
            <circle cx={cx} cy={cy} r='7' fill={acc} fillOpacity='0.18' stroke={acc} strokeWidth='1.3' />
            <circle cx={cx} cy={cy} r='2.5' fill={acc} />
            <circle cx={cx} cy={cy - 32} r='1.6' fill={acc} opacity='0.5' />
            <circle cx={cx} cy={cy + 32} r='1.6' fill={acc} opacity='0.5' />
          </g>
        )
      case 5: // 06 Orchestration — hub with 6 connected nodes (no outer ring)
        return (
          <g>
            {Array.from({ length: 6 }).map((_, nIdx) => {
              const a = (nIdx / 6) * Math.PI * 2 - Math.PI / 2
              const nx = cx + Math.cos(a) * 38
              const ny = cy + Math.sin(a) * 38
              return (
                <g key={nIdx}>
                  <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={ink} strokeWidth='0.8' strokeDasharray='2 2' />
                  <circle cx={nx} cy={ny} r='4.5' fill={acc} opacity='0.85' />
                </g>
              )
            })}
            <circle cx={cx} cy={cy} r='12' stroke={acc} strokeWidth='1.5' fill={acc} fillOpacity='0.15' />
            <circle cx={cx} cy={cy} r='3.5' fill={acc} />
          </g>
        )
      case 6: { // 07 Data & Insights — hexagonal data grid
        const hex = (r: number) => `${cx},${cy - r} ${cx + r * 0.866},${cy - r / 2} ${cx + r * 0.866},${cy + r / 2} ${cx},${cy + r} ${cx - r * 0.866},${cy + r / 2} ${cx - r * 0.866},${cy - r / 2}`
        return (
          <g>
            <polygon points={hex(48)} stroke={ink} strokeWidth='1' fill='none' />
            <polygon points={hex(24)} stroke={acc} strokeWidth='1.2' fill='none' />
            {[0, 60, 120, 180, 240, 300].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return <circle key={idx} cx={cx + Math.cos(r) * 36} cy={cy + Math.sin(r) * 36} r='2.2' fill={acc} />
            })}
            {[30, 90, 150, 210, 270, 330].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return <line key={idx} x1={cx} y1={cy} x2={cx + Math.cos(r) * 24} y2={cy + Math.sin(r) * 24} stroke={ink} strokeWidth='0.5' strokeDasharray='1.5 1.5' />
            })}
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      default:
        return null
    }
  }

  const layerNameY = 452

  // Top line: y=174 → y=284 (110px). Bottom line: y=466 → y=576 (110px).
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

  const inkCorner = 'rgba(240,123,47,0.5)'
  const inkLabelStrong = 'rgba(255,255,255,0.55)'
  const inkDim = 'rgba(255,255,255,0.4)'

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      xmlns='http://www.w3.org/2000/svg'
      className='v22-fw-diagram'
      aria-label='DBiz Transformation Assembly — Exploded View'
    >
      <defs>
        <pattern id='v22-fw-ex-dot' patternUnits='userSpaceOnUse' width='14' height='14'>
          <circle cx='1' cy='1' r='0.6' fill='rgba(240,123,47,0.14)' />
        </pattern>
        <pattern id='v22-fw-disc-grid' patternUnits='userSpaceOnUse' width='14' height='14'>
          <path d='M 14 0 L 0 0 0 14' fill='none' stroke='rgba(255,255,255,0.14)' strokeWidth='0.6' />
        </pattern>
        <filter id='v22-fw-halo-blur' x='-30%' y='-30%' width='160%' height='160%'>
          <feGaussianBlur stdDeviation='14' />
        </filter>
        <radialGradient id='v22-fw-disc-halo'>
          <stop offset='0%' stopColor='var(--v22-accent)' stopOpacity='0.85' />
          <stop offset='35%' stopColor='var(--v22-accent)' stopOpacity='0.45' />
          <stop offset='70%' stopColor='var(--v22-accent)' stopOpacity='0.15' />
          <stop offset='100%' stopColor='var(--v22-accent)' stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* Frame + dot background */}
      <rect x='8' y='8' width={svgW - 16} height={svgH - 16} fill='url(#v22-fw-ex-dot)' />
      <g stroke={inkCorner} strokeWidth='2'>
        <line x1='8' y1='8' x2='26' y2='8' /><line x1='8' y1='8' x2='8' y2='26' />
        <line x1={svgW - 8} y1='8' x2={svgW - 26} y2='8' /><line x1={svgW - 8} y1='8' x2={svgW - 8} y2='26' />
        <line x1='8' y1={svgH - 8} x2='26' y2={svgH - 8} /><line x1='8' y1={svgH - 8} x2='8' y2={svgH - 26} />
        <line x1={svgW - 8} y1={svgH - 8} x2={svgW - 26} y2={svgH - 8} /><line x1={svgW - 8} y1={svgH - 8} x2={svgW - 8} y2={svgH - 26} />
      </g>

      {/* Top strip — promise anchor */}
      <text x='50' y='32' fontFamily='var(--font-mono)' fontSize='9' fill={inkLabelStrong} letterSpacing='2'>SCALE 1:1</text>
      <line x1={svgW / 2 - 260} y1={44} x2={svgW / 2 + 260} y2={44} stroke={inkCorner} strokeWidth='0.8' />
      <line x1={svgW / 2 - 260} y1={40} x2={svgW / 2 - 260} y2={48} stroke={inkCorner} strokeWidth='0.8' />
      <line x1={svgW / 2 + 260} y1={40} x2={svgW / 2 + 260} y2={48} stroke={inkCorner} strokeWidth='0.8' />
      <text x={svgW / 2} y='32' fontFamily='var(--font-mono)' fontSize='10' fill={inkDim} textAnchor='middle' letterSpacing='3'>FULL STACK  ·  NO CAPABILITY GAPS  ·  NO VENDOR LOCK-IN</text>
      <text x={svgW - 50} y='32' fontFamily='var(--font-mono)' fontSize='9' fill={inkLabelStrong} textAnchor='end' letterSpacing='1'>SHEET A1</text>

      {/* Central shaft — the spine connecting all components */}
      <line x1='80' y1={shaftY} x2={svgW - 80} y2={shaftY} stroke={inkCorner} strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY - 8} stroke={inkCorner} strokeWidth='1' />
      <line x1='80' y1={shaftY} x2='80' y2={shaftY + 8} stroke={inkCorner} strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY - 8} stroke={inkCorner} strokeWidth='1' />
      <line x1={svgW - 80} y1={shaftY} x2={svgW - 80} y2={shaftY + 8} stroke={inkCorner} strokeWidth='1' />

      {/* Components */}
      {layers.map((layer, i) => {
        const cx = discCenters[i]
        const rotateReverse = i % 2 === 1
        return (
          <g key={layer.n} className='v22-fw-stack-layer' style={{ '--layer-index': i } as React.CSSProperties}>
            {/* Traveling halo — staggered via CSS delay, sweeps across all discs */}
            <rect x={cx - discR - 14} y={shaftY - discR - 14} width={(discR + 14) * 2} height={(discR + 14) * 2} fill='var(--v22-accent)' fillOpacity='0.35' filter='url(#v22-fw-halo-blur)' className='v22-fw-disc-halo' style={{ animationDelay: `${i * 1.4}s` } as React.CSSProperties} />

            {/* Outer housing — dashed square (grey) */}
            <rect x={cx - discR} y={shaftY - discR} width={discR * 2} height={discR * 2} stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' strokeDasharray='4 3' fill='var(--brand-navy-deep)' fillOpacity='0.85' />
            {/* Second housing — inset square */}
            <rect x={cx - discR + 6} y={shaftY - discR + 6} width={(discR - 6) * 2} height={(discR - 6) * 2} stroke='rgba(255,255,255,0.16)' strokeWidth='0.6' fill='none' />
            {/* Inner groove — thin dashed square */}
            <rect x={cx - discR + 14} y={shaftY - discR + 14} width={(discR - 14) * 2} height={(discR - 14) * 2} stroke='rgba(255,255,255,0.12)' strokeWidth='0.4' strokeDasharray='1.5 2' fill='none' />
            {/* Subtle graph-paper grid inside the housing */}
            <rect x={cx - discR + 15} y={shaftY - discR + 15} width={(discR - 15) * 2} height={(discR - 15) * 2} fill='url(#v22-fw-disc-grid)' />

            {/* Inner geometry — rotates slowly (alternating direction) */}
            <g>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from={`${rotateReverse ? 360 : 0} ${cx} ${shaftY}`}
                to={`${rotateReverse ? 0 : 360} ${cx} ${shaftY}`}
                dur='45s'
                repeatCount='indefinite'
              />
              {renderShape(i, cx, shaftY)}
            </g>

            {/* Shaft marker — orange dot where disc meets shaft */}
            <circle cx={cx} cy={shaftY} r='2.5' fill='var(--v22-accent)' />

            {/* Layer number tag — just above disc */}
            <text x={cx - 14} y={shaftY - discR - 16} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='rgba(255,255,255,0.5)' textAnchor='end' letterSpacing='2'>L{layer.n}</text>

            {/* Layer name — just below disc */}
            <text x={cx} y={layerNameY} fontFamily='var(--font-mono)' fontSize='10' fontWeight='500' fill='#ffffff' textAnchor='middle' letterSpacing='2.5'>{layer.label}</text>

            {/* Top callout — name (orange, emphasised) ABOVE, desc (grey) BELOW */}
            <line x1={cx} y1={tp.dot + 2} x2={cx} y2={shaftY - discR - 8} stroke='rgba(255,255,255,0.18)' strokeWidth='0.7' strokeDasharray='3 2' className='v22-fw-stack-connector' />
            <circle cx={cx} cy={tp.dot} r='2.8' fill='var(--v22-accent)' className='v22-fw-stack-dot' />
            {wrapDesc(layer.top.name.toUpperCase(), 15).map((line, li) => (
              <text key={li} x={cx} y={tp.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v22-accent)' textAnchor='middle'>{line}</text>
            ))}
            {wrapDesc(layer.top.desc).map((line, li) => (
              <text key={li} x={cx} y={tp.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.45)' textAnchor='middle'>{line}</text>
            ))}

            {/* Bottom callout — name (orange, emphasised) ABOVE, desc (grey) BELOW */}
            <line x1={cx} y1={layerNameY + 14} x2={cx} y2={bp.dot - 2} stroke='rgba(255,255,255,0.18)' strokeWidth='0.7' strokeDasharray='3 2' className='v22-fw-stack-connector' />
            <circle cx={cx} cy={bp.dot} r='2.8' fill='var(--v22-accent)' className='v22-fw-stack-dot' />
            {wrapDesc(layer.bottom.name.toUpperCase(), 15).map((line, li) => (
              <text key={li} x={cx} y={bp.name + li * 13} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='2' fill='var(--v22-accent)' textAnchor='middle'>{line}</text>
            ))}
            {wrapDesc(layer.bottom.desc).map((line, li) => (
              <text key={li} x={cx} y={bp.desc + li * 11} fontFamily='var(--font-sans)' fontSize='9' fill='rgba(255,255,255,0.45)' textAnchor='middle'>{line}</text>
            ))}
          </g>
        )
      })}

      {/* Bottom strip — drawing metadata */}
      <text x={svgW / 2} y={svgH - 26} fontFamily='var(--font-mono)' fontSize='9' fill={inkLabelStrong} textAnchor='middle' letterSpacing='2'>DWG-STACK-01  ·  EXPLODED ASSEMBLY</text>
    </svg>
  )
}

export default function FrameworkSection() {
  return (
    <section className='v22-section v22-framework' id='framework'>
      <div className='v22-container'>
        <div className='v22-section-head v22-fw-head'>
          <div className='num'>N°04 / How we do it</div>
          <h2>
            Our AI Transformation Stack, <span style={{ color: 'var(--v22-accent)' }}>deconstructed.</span>
          </h2>
          <p className='lead'>
            Seven layers. Each one pairs a proprietary offering with a custom accelerator — mapped to an exploded assembly of the Frontier Enterprise.
          </p>
        </div>

        <div className='v22-fw-diagram-wrap'>
          <StackDiagram />
        </div>
      </div>
    </section>
  )
}
