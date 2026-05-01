'use client'

/* Option C — Orbital constellation around the Frontier Organisation core.
   No card containers — just geometric icons floating on spokes around the big
   central hub. Auto-cycling highlight; hover/click locks; detail panel on the right. */

import { useEffect, useState } from 'react'
import { capabilities } from './data'

const CYCLE_MS = 4200

/* v20-style geometric icons — 80x80 viewBox.
   Duotone stays fixed: ink is always white-ish, acc is always orange.
   The active state is shown by the surrounding hue + corner brackets, not by
   recoloring the icon itself. Ink brightens slightly when active. */
function CapIcon({ index, active }: { index: number; active: boolean }) {
  const ink = active ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.6)'
  const acc = 'var(--v22-accent)'
  const strokeCol = ink                  // keep duotone — never flip to orange

  const hex = (r: number) => {
    const a = r * 0.866
    const b = r * 0.5
    return `40,${40 - r} ${40 + a},${40 - b} ${40 + a},${40 + b} 40,${40 + r} ${40 - a},${40 + b} ${40 - a},${40 - b}`
  }

  const icons = [
    <svg key={0} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40' cy='40' r='32' stroke={strokeCol} strokeWidth='0.8' strokeDasharray='3 2' className='v22-icon-circle-draw v22-icon-delay-2' />
      <circle cx='40' cy='40' r='22' stroke={strokeCol} strokeWidth='1' className='v22-icon-circle-draw v22-icon-delay-3' />
      <circle cx='40' cy='40' r='12' stroke={acc} strokeWidth='1.4' className='v22-icon-circle-draw v22-icon-delay-4' />
      <circle cx='40' cy='40' r='3' fill={acc} className='v22-icon-scale-in v22-icon-delay-5' />
    </svg>,
    <svg key={1} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='14' y='16' width='52' height='48' stroke={strokeCol} strokeWidth='1' fill='rgba(255,255,255,0.04)' className='v22-icon-rect-draw v22-icon-delay-2' />
      <rect x='22' y='23' width='36' height='8' stroke={strokeCol} strokeWidth='0.8' fill='rgba(255,255,255,0.04)' className='v22-icon-rect-draw v22-icon-delay-3' />
      <circle cx='56' cy='27' r='1.1' fill={strokeCol} />
      <rect x='22' y='36' width='36' height='8' stroke={acc} strokeWidth='1.2' fill='rgba(240,123,47,0.16)' className='v22-icon-rect-draw v22-icon-delay-4' />
      <circle cx='56' cy='40' r='1.5' fill={acc} className='v22-icon-pulse v22-icon-scale-in v22-icon-delay-5' />
      <rect x='22' y='49' width='36' height='8' stroke={strokeCol} strokeWidth='0.8' fill='rgba(255,255,255,0.04)' className='v22-icon-rect-draw v22-icon-delay-3' />
      <circle cx='56' cy='53' r='1.1' fill={strokeCol} />
    </svg>,
    <svg key={2} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <polygon points={hex(30)} stroke={strokeCol} strokeWidth='1' className='v22-icon-polygon-draw v22-icon-delay-2' />
      <polygon points={hex(16)} stroke={acc} strokeWidth='1.4' className='v22-icon-polygon-draw v22-icon-delay-3' />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = (a - 90) * Math.PI / 180
        return <circle key={i} cx={40 + Math.cos(r) * 23} cy={40 + Math.sin(r) * 23} r='2' fill={acc} className='v22-icon-scale-in' style={{ animationDelay: `${0.5 + i * 0.06}s` }} />
      })}
      <circle cx='40' cy='40' r='3' fill={acc} className='v22-icon-scale-in v22-icon-delay-5' />
    </svg>,
    <svg key={3} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2
        const nx = 40 + Math.cos(a) * 28
        const ny = 40 + Math.sin(a) * 28
        return (
          <g key={i}>
            <line x1='40' y1='40' x2={nx} y2={ny} stroke={strokeCol} strokeWidth='0.9' strokeDasharray='2 2' className='v22-icon-line-draw v22-icon-delay-3' />
            <rect x={nx - 3} y={ny - 3} width='6' height='6' fill={acc} className='v22-icon-scale-in' style={{ animationDelay: `${0.5 + i * 0.07}s` }} />
          </g>
        )
      })}
      <rect x='32' y='32' width='16' height='16' stroke={acc} strokeWidth='1.4' fill='rgba(240,123,47,0.18)' className='v22-icon-rect-draw v22-icon-delay-4' />
    </svg>,
    <svg key={4} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      {[22, 40, 58].map((coord, i) => (
        <g key={i}>
          <line x1={coord} y1='10' x2={coord} y2='18' stroke={strokeCol} strokeWidth='1.2' className='v22-icon-line-draw' style={{ animationDelay: `${0.3 + i * 0.04}s` }} />
          <line x1={coord} y1='62' x2={coord} y2='70' stroke={strokeCol} strokeWidth='1.2' className='v22-icon-line-draw' style={{ animationDelay: `${0.35 + i * 0.04}s` }} />
          <line x1='10' y1={coord} x2='18' y2={coord} stroke={strokeCol} strokeWidth='1.2' className='v22-icon-line-draw' style={{ animationDelay: `${0.4 + i * 0.04}s` }} />
          <line x1='62' y1={coord} x2='70' y2={coord} stroke={strokeCol} strokeWidth='1.2' className='v22-icon-line-draw' style={{ animationDelay: `${0.45 + i * 0.04}s` }} />
        </g>
      ))}
      <rect x='18' y='18' width='44' height='44' stroke={strokeCol} strokeWidth='1.3' fill='rgba(255,255,255,0.04)' className='v22-icon-rect-draw v22-icon-delay-2' />
      <rect x='28' y='28' width='24' height='24' stroke={acc} strokeWidth='1.4' fill='rgba(240,123,47,0.16)' className='v22-icon-rect-draw v22-icon-delay-4' />
      <circle cx='40' cy='40' r='2.5' fill={acc} className='v22-icon-pulse v22-icon-scale-in v22-icon-delay-5' />
    </svg>,
    <svg key={5} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={strokeCol} strokeWidth='1' className='v22-icon-circle-draw v22-icon-delay-2' />
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={strokeCol} strokeWidth='1' transform='rotate(60 40 40)' className='v22-icon-circle-draw v22-icon-delay-3' />
      <ellipse cx='40' cy='40' rx='32' ry='12' stroke={acc} strokeWidth='1.4' transform='rotate(120 40 40)' className='v22-icon-circle-draw v22-icon-delay-4' />
      <rect x='37' y='37' width='6' height='6' fill={acc} className='v22-icon-scale-in v22-icon-delay-5' />
    </svg>,
    <svg key={6} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <polygon points={hex(32)} stroke={strokeCol} strokeWidth='0.9' strokeDasharray='3 2' className='v22-icon-polygon-draw v22-icon-delay-2' />
      <polygon points={hex(22)} stroke={strokeCol} strokeWidth='1' className='v22-icon-polygon-draw v22-icon-delay-3' />
      <polygon points={hex(12)} stroke={acc} strokeWidth='1.5' className='v22-icon-polygon-draw v22-icon-delay-4' />
      <circle cx='40' cy='40' r='3' fill={acc} className='v22-icon-scale-in v22-icon-delay-5' />
    </svg>,
  ]
  return icons[index] || icons[0]
}

export function OptionC() {
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

  // Orbit geometry (viewBox-relative, aspect 1:1)
  const size = 820            // stage viewBox is 0..size × 0..size
  const cx = size / 2
  const cy = size / 2
  const hubR = 140            // big, prevalent hub
  const orbitR = 320          // ring radius where icons sit

  const nodes = capabilities.map((cap, i) => {
    const angle = (-90 + (i / capabilities.length) * 360) * (Math.PI / 180)
    const px = cx + Math.cos(angle) * orbitR
    const py = cy + Math.sin(angle) * orbitR
    // Spoke anchor — just outside the hub
    const hubEdgeX = cx + Math.cos(angle) * (hubR + 6)
    const hubEdgeY = cy + Math.sin(angle) * (hubR + 6)
    // Icon end — just before the icon (icons are 88px in viewBox units)
    const iconEdgeX = cx + Math.cos(angle) * (orbitR - 48)
    const iconEdgeY = cy + Math.sin(angle) * (orbitR - 48)
    return { ...cap, i, px, py, hubEdgeX, hubEdgeY, iconEdgeX, iconEdgeY, angle }
  })

  return (
    <section className='v22-section' id='cap-c'>
      <div className='v22-container'>
        <div className='v22-section-head'>
          <div className='num'>Option C / Orbital constellation</div>
          <h2>Seven capabilities.<br /><span style={{ color: 'var(--v22-accent)' }}>One Frontier Org.</span></h2>
          <p className='lead'>Every capability orbits the Frontier Organisation core. The highlight auto-cycles; hover or click to lock.</p>
        </div>

        <div className='capC-orbit-grid'>
          <div className='capC-stage'>
            <svg viewBox={`0 0 ${size} ${size}`} xmlns='http://www.w3.org/2000/svg' className='capC-stage-svg' aria-label='Capabilities orbital diagram'>
              <defs>
                <filter id='capC-glow' x='-50%' y='-50%' width='200%' height='200%'>
                  <feGaussianBlur stdDeviation='5' result='blur' />
                  <feMerge><feMergeNode in='blur' /><feMergeNode in='SourceGraphic' /></feMerge>
                </filter>
                <filter id='capC-hub-glow' x='-50%' y='-50%' width='200%' height='200%'>
                  <feGaussianBlur stdDeviation='26' />
                </filter>
                {/* Tighter grid background — 12px dots + 60px cross grid */}
                <pattern id='capC-stage-dot' patternUnits='userSpaceOnUse' width='12' height='12'>
                  <circle cx='1' cy='1' r='0.6' fill='rgba(255,255,255,0.07)' />
                </pattern>
                <pattern id='capC-stage-grid' patternUnits='userSpaceOnUse' width='60' height='60'>
                  <path d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.04)' strokeWidth='0.5' />
                </pattern>
                {/* Warm orange radial hue at center — replaces the dark orb */}
                <radialGradient id='capC-hub-hue' cx='50%' cy='50%' r='50%'>
                  <stop offset='0%'  stopColor='#F07B2F' stopOpacity='0.55' />
                  <stop offset='45%' stopColor='#F07B2F' stopOpacity='0.22' />
                  <stop offset='100%' stopColor='#F07B2F' stopOpacity='0' />
                </radialGradient>
              </defs>

              {/* Background — subtle dots only (removed cross-grid for less noise) */}
              <rect x='0' y='0' width={size} height={size} fill='url(#capC-stage-dot)' />

              {/* Single orbit ring — quiet anchor line, no rotation */}
              <circle cx={cx} cy={cy} r={orbitR} fill='none' stroke='rgba(240,123,47,0.12)' strokeWidth='0.8' strokeDasharray='4 6' />

              {/* Spokes — static thin lines, no traveling particles. Active one brightens. */}
              {nodes.map((n) => {
                const isActive = n.i === active
                return (
                  <line
                    key={`spoke-${n.i}`}
                    x1={n.hubEdgeX}
                    y1={n.hubEdgeY}
                    x2={n.iconEdgeX}
                    y2={n.iconEdgeY}
                    stroke={isActive ? 'var(--v22-accent)' : 'rgba(240,123,47,0.18)'}
                    strokeWidth={isActive ? 1.4 : 0.8}
                    strokeDasharray='4 6'
                    style={{ transition: 'stroke 0.35s ease, stroke-width 0.35s ease' }}
                  />
                )
              })}

              {/* Hub — orange hue + corner tick brackets + label. Quiet anchor. */}
              <g className='capC-hub'>
                <circle cx={cx} cy={cy} r={hubR * 1.2} fill='url(#capC-hub-hue)' className='capC-hub-hue' style={{ transformOrigin: `${cx}px ${cy}px` }} />
                {/* Corner tick brackets — mark the hub as the anchor frame */}
                {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sy], i) => (
                  <g key={i} stroke='var(--v22-accent)' strokeWidth='1.6'>
                    <line x1={cx + sx * hubR * 0.62} y1={cy + sy * hubR * 0.62} x2={cx + sx * hubR * 0.44} y2={cy + sy * hubR * 0.62} />
                    <line x1={cx + sx * hubR * 0.62} y1={cy + sy * hubR * 0.62} x2={cx + sx * hubR * 0.62} y2={cy + sy * hubR * 0.44} />
                  </g>
                ))}
                <text x={cx} y={cy - 6} fontFamily='var(--font-mono)' fontSize='15' fontWeight='700' fill='#fff' textAnchor='middle' letterSpacing='3'>FRONTIER</text>
                <text x={cx} y={cy + 14} fontFamily='var(--font-mono)' fontSize='15' fontWeight='700' fill='#fff' textAnchor='middle' letterSpacing='3'>ENTERPRISE</text>
              </g>
            </svg>

            {/* Icons as absolute-positioned elements above the SVG */}
            {nodes.map((n) => {
              const isActive = n.i === active
              const leftPct = (n.px / size) * 100
              const topPct  = (n.py / size) * 100
              // Top-half nodes (angle < 0) put the label ABOVE the icon so the
              // spoke from the hub doesn't pass through the label text.
              const isTopHalf = n.angle < 0
              return (
                <button
                  key={n.num}
                  className={`capC-node ${isActive ? 'is-active' : ''} ${isTopHalf ? 'capC-node--top' : ''}`}
                  style={{ left: `${leftPct}%`, top: `${topPct}%` }}
                  onClick={() => select(n.i)}
                  onMouseEnter={() => select(n.i)}
                  aria-pressed={isActive}
                  aria-label={`View ${n.kicker} capability`}
                >
                  <div className='capC-node-frame'>
                    <span className='capC-node-hue' aria-hidden='true' />
                    <div className='capC-node-icon' key={`${n.i}-${isActive}`}>
                      <CapIcon index={n.i} active={isActive} />
                    </div>
                  </div>
                  <div className='capC-node-label'>
                    <span className='capC-node-num'>L{n.num}</span>
                    <span className='capC-node-kicker'>{n.kicker.toUpperCase()}</span>
                  </div>
                </button>
              )
            })}
          </div>

          <aside className='capC-detail'>
            <div className='capC-detail-inner' key={active}>
              <div className='capC-detail-kicker'>L{c.num} · {c.kicker.toUpperCase()}</div>
              <h3 className='capC-detail-title'>{c.title}</h3>
              <p className='capC-detail-sub'>{c.subtitle}</p>
              <p className='capC-detail-body'>{c.body}</p>
              <div className='capC-detail-tags'>
                {c.tags.slice(0, 4).map((t) => (
                  <span key={t} className='capC-tag'>{t}</span>
                ))}
              </div>
              <a href='#' className='capC-detail-cta'>{c.cta} →</a>
              {locked && (
                <button className='capC-resume' onClick={() => setLocked(false)}>
                  Resume auto-cycle →
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
