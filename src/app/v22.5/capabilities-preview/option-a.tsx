'use client'

/* Option A — Exploded isometric stack (blueprinty, auto-cycling).
   - Each layer has its own texture pattern (diagonal hatch, dots, grid, etc.)
     so the 7 layers read as distinct even though they share the isometric shape.
   - Particles flow between each adjacent pair of layers, hero-style.
   - Orbital particles float around the active layer.
   - Active layer auto-cycles every ~4s; hover/click locks. */

import { useEffect, useState } from 'react'
import { capabilities } from './data'

const CYCLE_MS = 4200

export function OptionA() {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (locked) return
    const id = setTimeout(() => setActive((i) => (i + 1) % capabilities.length), CYCLE_MS)
    return () => clearTimeout(id)
  }, [active, locked])

  const select = (i: number) => {
    setLocked(true)
    setActive(i)
  }

  const c = capabilities[active]

  // Stack geometry — all snapped to the 40px grid, front face centered in svgW.
  // svgW - boxW - skew = 560 - 320 - 20 = 220 → split 120L / 100R → centers the
  // box front face at svgW/2 = 280. Left margin holds FRONTIER label + L## numbers.
  const svgW = 560
  const svgH = 640
  const baseX = 120              // 3 grid cells from left
  const boxW = 320               // 8 grid cells wide
  const boxH = 48
  const rowGap = 80              // 2 grid cells per row
  const skew = 20
  const firstY = 40              // 1 grid cell from top

  const stackTop = firstY - 16
  const stackBot = firstY + (capabilities.length - 1) * rowGap + boxH + 16

  // Scatter textures on only a few layers so they pop visually.
  // Leaving most transparent keeps the stack breathing; the textured ones
  // read like callout-variants within the blueprint.
  const texturedLayers = new Set([0, 3, 5])    // L01, L04, L06
  const patternForLayer = (i: number) =>
    texturedLayers.has(i) ? `url(#capA-tex-${i})` : 'transparent'

  return (
    <section className='v22-section' id='cap-a'>
      <div className='v22-container'>
        <div className='v22-section-head'>
          <div className='num'>Option A / Exploded stack</div>
          <h2>Every layer.<br /><span style={{ color: 'var(--v22-accent)' }}>In motion.</span></h2>
          <p className='lead'>Particles flow between every pair of layers; the highlight auto-cycles. Click to lock.</p>
        </div>

        <div className='capA-grid'>
          <div className='capA-stack-wrap'>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} xmlns='http://www.w3.org/2000/svg' className='capA-stack' aria-label='Capabilities stack'>
              <defs>
                {/* Background — subtle orange blueprint grid */}
                <pattern id='capA-grid' patternUnits='userSpaceOnUse' width='40' height='40'>
                  <path d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(240,123,47,0.08)' strokeWidth='0.5' />
                </pattern>
                <pattern id='capA-dot' patternUnits='userSpaceOnUse' width='10' height='10'>
                  <circle cx='1' cy='1' r='0.6' fill='rgba(240,123,47,0.18)' />
                </pattern>

                {/* Seven per-layer textures — grey so the orange accent stays for particles/active */}
                {/* 0 Tech Advisory — diagonal hatch */}
                <pattern id='capA-tex-0' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
                  <line x1='0' y1='0' x2='0' y2='6' stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' />
                </pattern>
                {/* 1 Cloud — horizontal thin lines */}
                <pattern id='capA-tex-1' patternUnits='userSpaceOnUse' width='8' height='5'>
                  <line x1='0' y1='2.5' x2='8' y2='2.5' stroke='rgba(255,255,255,0.2)' strokeWidth='0.8' />
                </pattern>
                {/* 2 Data & AI — dot grid */}
                <pattern id='capA-tex-2' patternUnits='userSpaceOnUse' width='7' height='7'>
                  <circle cx='1' cy='1' r='0.9' fill='rgba(255,255,255,0.28)' />
                </pattern>
                {/* 3 Orchestration — sparse crossed lines (reduced) */}
                <pattern id='capA-tex-3' patternUnits='userSpaceOnUse' width='16' height='16'>
                  <path d='M 0 0 L 16 16 M 16 0 L 0 16' stroke='rgba(255,255,255,0.1)' strokeWidth='0.5' />
                </pattern>
                {/* 4 Product & AI Engineering — vertical thin lines */}
                <pattern id='capA-tex-4' patternUnits='userSpaceOnUse' width='5' height='8'>
                  <line x1='2.5' y1='0' x2='2.5' y2='8' stroke='rgba(255,255,255,0.2)' strokeWidth='0.8' />
                </pattern>
                {/* 5 Research & Design — sparse minimal dots (reduced from tight squares) */}
                <pattern id='capA-tex-5' patternUnits='userSpaceOnUse' width='18' height='14'>
                  <circle cx='1' cy='1' r='0.7' fill='rgba(255,255,255,0.18)' />
                </pattern>
                {/* 6 Managed Services — grid */}
                <pattern id='capA-tex-6' patternUnits='userSpaceOnUse' width='6' height='6'>
                  <path d='M 6 0 L 0 0 0 6' fill='none' stroke='rgba(255,255,255,0.18)' strokeWidth='0.6' />
                </pattern>

                <filter id='capA-particle-glow' x='-50%' y='-50%' width='200%' height='200%'>
                  <feGaussianBlur stdDeviation='1.6' result='blur' />
                  <feMerge><feMergeNode in='blur' /><feMergeNode in='SourceGraphic' /></feMerge>
                </filter>
              </defs>

              {/* Background — orange grid + dots */}
              <rect x='0' y='0' width={svgW} height={svgH} fill='url(#capA-grid)' />
              <rect x='0' y='0' width={svgW} height={svgH} fill='url(#capA-dot)' />

              {/* Corner crop marks */}
              <g stroke='rgba(255,255,255,0.35)' strokeWidth='0.8'>
                <line x1='8' y1='8' x2='28' y2='8' /><line x1='8' y1='8' x2='8' y2='28' />
                <line x1={svgW - 28} y1='8' x2={svgW - 8} y2='8' /><line x1={svgW - 8} y1='8' x2={svgW - 8} y2='28' />
                <line x1='8' y1={svgH - 8} x2='28' y2={svgH - 8} /><line x1='8' y1={svgH - 8} x2='8' y2={svgH - 28} />
                <line x1={svgW - 28} y1={svgH - 8} x2={svgW - 8} y2={svgH - 8} /><line x1={svgW - 8} y1={svgH - 8} x2={svgW - 8} y2={svgH - 28} />
              </g>

              {/* Left-edge tick marks — aligned to 40px grid */}
              <g stroke='rgba(255,255,255,0.15)' strokeWidth='0.5'>
                {Array.from({ length: 15 }).map((_, i) => (
                  <line key={i} x1='62' y1={40 + i * 40} x2={i % 2 === 0 ? 72 : 68} y2={40 + i * 40} />
                ))}
              </g>

              {/* FRONTIER ORGANISATION vertical label on left border */}
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
                  fill='var(--v22-accent)'
                  textAnchor='middle'
                  transform={`rotate(-90 40 ${(stackTop + stackBot) / 2})`}
                >
                  FRONTIER ORGANISATION
                </text>
              </g>

              {/* Particles — organic flow: different count per gap (3 / 2 / 1 / 3 / 2 / 1),
                  horizontally scattered at varied x positions so no two gaps look alike. */}
              {(() => {
                // 6 gaps between 7 layers. Mix of 3/2/1 for organic rhythm.
                const gapCounts = [3, 1, 2, 3, 1, 2]
                // Per-gap x-position pools — picks out different sets each gap
                const xPools = [
                  [baseX + 90,  baseX + 180, baseX + 280],         // gap 0: 3 particles
                  [baseX + 210],                                    // gap 1: 1 centered-ish
                  [baseX + 110, baseX + 260],                       // gap 2: 2
                  [baseX + 70,  baseX + 170, baseX + 290],          // gap 3: 3
                  [baseX + 230],                                    // gap 4: 1
                  [baseX + 130, baseX + 250],                       // gap 5: 2
                ]
                return capabilities.slice(0, -1).map((_, i) => {
                  const fromY = firstY + i * rowGap + boxH
                  const toY   = firstY + (i + 1) * rowGap
                  const count = gapCounts[i]
                  const xs = xPools[i].slice(0, count)
                  // Delay pattern — each gap breathes at its own rhythm
                  const gapDelay = i * 0.55
                  return (
                    <g key={`flow-${i}`}>
                      {xs.map((x, pIdx) => (
                        <circle
                          key={pIdx}
                          cx={x}
                          cy={fromY}
                          r={2.2 + (pIdx % 2) * 0.4}
                          fill='var(--v22-accent)'
                          className='capA-flow-particle'
                          filter='url(#capA-particle-glow)'
                          style={{
                            '--capA-flow-distance': `${toY - fromY}px`,
                            '--capA-flow-delay': `${gapDelay + pIdx * 0.42}s`,
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
                const stroke = isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.32)'
                const sw = isActive ? 1.6 : 1
                const x = baseX
                return (
                  <g
                    key={cap.num}
                    className={`capA-layer ${isActive ? 'is-active' : ''}`}
                    style={{ '--layer-i': i } as React.CSSProperties}
                    onClick={() => select(i)}
                    onMouseEnter={() => select(i)}
                    role='button'
                    aria-label={`Select ${cap.kicker}`}
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && select(i)}
                  >
                    {/* Top face */}
                    <polygon points={`${x},${y} ${x + boxW},${y} ${x + boxW + skew},${y - 14} ${x + skew},${y - 14}`} fill='transparent' stroke={stroke} strokeWidth={sw} />
                    {/* Front face — base fill on active, texture pattern overlay always */}
                    <rect
                      x={x}
                      y={y}
                      width={boxW}
                      height={boxH}
                      fill={isActive ? 'rgba(240,123,47,0.1)' : 'transparent'}
                      stroke='none'
                    />
                    <rect
                      x={x}
                      y={y}
                      width={boxW}
                      height={boxH}
                      fill={patternForLayer(i)}
                      stroke={stroke}
                      strokeWidth={sw}
                      opacity={isActive ? 1 : 0.85}
                    />
                    {/* Right face */}
                    <polygon points={`${x + boxW},${y} ${x + boxW + skew},${y - 14} ${x + boxW + skew},${y + boxH - 14} ${x + boxW},${y + boxH}`} fill='transparent' stroke={stroke} strokeWidth={sw} />
                    {/* L## label on left — centered to the new two-line stack */}
                    <text x={x - 12} y={y + boxH / 2 + 4} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500' letterSpacing='1' fill={isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.55)'} textAnchor='end'>L{cap.num}</text>
                    {/* Eyebrow on top (small): familiar service name (e.g., DATA & AI) */}
                    <text x={x + 18} y={y + boxH / 2 - 6} fontFamily='var(--font-mono)' fontSize='8' fontWeight='500' letterSpacing='1.6' fill={isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.5)'}>
                      {cap.altLabel.toUpperCase()}
                    </text>
                    {/* Title below (big): architectural name (e.g., INTELLIGENCE) */}
                    <text x={x + 18} y={y + boxH / 2 + 12} fontFamily='var(--font-mono)' fontSize='12' fontWeight='600' letterSpacing='1.6' fill={isActive ? 'var(--v22-accent)' : 'rgba(255,255,255,0.92)'}>
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

          <div className='capA-detail' key={active}>
            <div className='capA-detail-kicker'>L{c.num} · {c.kicker.toUpperCase()}</div>
            <h3 className='capA-detail-title'>{c.title}</h3>
            <p className='capA-detail-sub'>{c.subtitle}</p>
            <p className='capA-detail-body'>{c.body}</p>
            <div className='capA-detail-tags'>
              {c.tags.slice(0, 4).map((t) => (
                <span key={t} className='capA-tag'>{t}</span>
              ))}
            </div>
            <a href='#' className='capA-detail-cta'>{c.cta} <span>→</span></a>
            {locked && (
              <button className='capA-resume' onClick={() => setLocked(false)}>
                Resume auto-cycle →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
