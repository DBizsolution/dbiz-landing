'use client'

const SEGMENTS = [
  { code: 'L01', name: 'STRATEGY',       sub: 'Futures Studio',            ref: 'AI ambition & roadmap' },
  { code: 'L02', name: 'ARCHITECTURE',   sub: 'TechOffice Foundry',        ref: 'Foundation & posture' },
  { code: 'L03', name: 'CLOUD',          sub: 'Multi-Cloud AI Foundation', ref: 'AI-ready infrastructure' },
  { code: 'L04', name: 'DEVELOPMENT',    sub: 'Perpetual Engineering',     ref: 'Agents across SDLC' },
  { code: 'L05', name: 'PRODUCTIVITY',   sub: 'BizApps & Co-work',         ref: 'Claude · Copilot · agents' },
  { code: 'L06', name: 'ORCHESTRATION',  sub: 'Agent Studio',              ref: 'Multi-agent control' },
  { code: 'L07', name: 'DATA & INSIGHTS',sub: 'FactWeavers' + '\u2122',    ref: 'Domain data cloud' },
]

const W = 1600
const H = 720
const AXIS_Y = 360
const CXS = [180, 380, 580, 780, 980, 1180, 1380]

const ACC = 'var(--v20-accent)'
const INK_LO = 'rgba(255,255,255,0.18)'
const INK_MID = 'rgba(255,255,255,0.32)'
const INK_HI = 'rgba(255,255,255,0.55)'

/* Reusable: front-facing ellipse cap for a horizontal cylinder */
function Cap({ cx, cy, r, ratio = 0.4, stroke = INK_MID, sw = 1, dashed = false, fill = 'none' }: {
  cx: number; cy: number; r: number; ratio?: number; stroke?: string; sw?: number; dashed?: boolean; fill?: string
}) {
  return (
    <ellipse cx={cx} cy={cy} rx={r * ratio} ry={r} fill={fill} stroke={stroke} strokeWidth={sw}
      strokeDasharray={dashed ? '3 2' : undefined} />
  )
}

/* L01 — Strategy: bullet head with target rings */
function StrategyHead({ cx }: { cx: number }) {
  const tipX = cx - 70
  const baseX = cx - 30
  const tailX = cx + 50
  const r = 26
  return (
    <g className='alg-seg' style={{ animationDelay: '0.2s' }}>
      {/* hidden back cap */}
      <Cap cx={tipX + 2} cy={AXIS_Y} r={r * 0.2} dashed stroke={INK_LO} />
      {/* cone */}
      <path d={`M ${tipX} ${AXIS_Y} L ${baseX} ${AXIS_Y - r} L ${baseX} ${AXIS_Y + r} Z`}
        fill='var(--v20-paper-2)' stroke={INK_HI} strokeWidth='1' />
      {/* body — top edge */}
      <line x1={baseX} y1={AXIS_Y - r} x2={tailX} y2={AXIS_Y - r} stroke={INK_HI} strokeWidth='1' />
      {/* body — bottom edge */}
      <line x1={baseX} y1={AXIS_Y + r} x2={tailX} y2={AXIS_Y + r} stroke={INK_HI} strokeWidth='1' />
      {/* hidden bottom seam */}
      <line x1={baseX} y1={AXIS_Y + r * 0.3} x2={tailX} y2={AXIS_Y + r * 0.3} stroke={INK_LO} strokeWidth='0.6' strokeDasharray='2 2' />
      {/* front cap (right) */}
      <Cap cx={tailX} cy={AXIS_Y} r={r} stroke={INK_HI} fill='var(--v20-paper-2)' />
      {/* target rings on body face */}
      <ellipse cx={tailX} cy={AXIS_Y} rx={r * 0.4 * 0.66} ry={r * 0.66} fill='none' stroke={ACC} strokeWidth='1.1' />
      <ellipse cx={tailX} cy={AXIS_Y} rx={r * 0.4 * 0.32} ry={r * 0.32} fill='none' stroke={ACC} strokeWidth='1' />
      <circle cx={tailX} cy={AXIS_Y} r='2' fill={ACC} />
      {/* tip aim marker */}
      <circle cx={tipX} cy={AXIS_Y} r='3' fill={ACC}>
        <animate attributeName='r' values='3;5;3' dur='2.2s' repeatCount='indefinite'
          calcMode='spline' keySplines='0.4 0 0.6 1; 0.4 0 0.6 1' />
        <animate attributeName='opacity' values='1;0.5;1' dur='2.2s' repeatCount='indefinite' />
      </circle>
      {/* range ticks along the body */}
      {[-18, -6, 6, 18].map((dx, i) => (
        <line key={i} x1={cx + dx} y1={AXIS_Y - r - 3} x2={cx + dx} y2={AXIS_Y - r + 1}
          stroke={INK_MID} strokeWidth='0.6' />
      ))}
    </g>
  )
}

/* L02 — Architecture: hex prism foundation */
function HexPrism({ cx }: { cx: number }) {
  const r = 30
  const depth = 70
  const x1 = cx - depth / 2
  const x2 = cx + depth / 2
  const a = r * 0.866
  const b = r * 0.5
  // hex (vertical) at given x
  const hex = (x: number) =>
    [[x, AXIS_Y - r], [x + a * 0.4, AXIS_Y - b], [x + a * 0.4, AXIS_Y + b], [x, AXIS_Y + r], [x - a * 0.4, AXIS_Y + b], [x - a * 0.4, AXIS_Y - b]] as const
  const back = hex(x1)
  const front = hex(x2)
  return (
    <g className='alg-seg' style={{ animationDelay: '0.5s' }}>
      {/* back hex (dashed, hidden) */}
      <polygon points={back.map(p => p.join(',')).join(' ')} fill='var(--v20-paper-2)' stroke={INK_LO} strokeWidth='0.8' strokeDasharray='3 2' />
      {/* connecting edges (only top three visible) */}
      {[0, 1, 2, 5].map((i) => (
        <line key={i} x1={back[i][0]} y1={back[i][1]} x2={front[i][0]} y2={front[i][1]}
          stroke={INK_HI} strokeWidth='0.9' />
      ))}
      {/* hidden connecting edges */}
      {[3, 4].map((i) => (
        <line key={i} x1={back[i][0]} y1={back[i][1]} x2={front[i][0]} y2={front[i][1]}
          stroke={INK_LO} strokeWidth='0.6' strokeDasharray='2 2' />
      ))}
      {/* front hex */}
      <polygon points={front.map(p => p.join(',')).join(' ')} fill='var(--v20-paper-2)' stroke={INK_HI} strokeWidth='1' />
      {/* inner orange hex on face */}
      <polygon points={hex(x2).map(([x, y]) => [x - (x - x2) * 0.45, AXIS_Y + (y - AXIS_Y) * 0.55].join(',')).join(' ')} fill='none' stroke={ACC} strokeWidth='1.2' />
      {/* bolt heads at vertices */}
      {front.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r='2' fill='var(--v20-paper)' stroke={INK_HI} strokeWidth='0.6' />
      ))}
      {/* center bore */}
      <circle cx={x2} cy={AXIS_Y} r='2.5' fill={ACC} />
      {/* axis through-line mark */}
      <line x1={x1} y1={AXIS_Y} x2={x2} y2={AXIS_Y} stroke={ACC} strokeWidth='0.4' strokeDasharray='1.5 2' opacity='0.6' />
    </g>
  )
}

/* L03 — Cloud: lamellar drum (3 stacked layers along axis) */
function CloudDrum({ cx }: { cx: number }) {
  const r = 28
  const slices = [
    { x: cx - 38, w: 22, color: INK_MID, delay: '0s' },
    { x: cx - 11, w: 22, color: ACC,     delay: '0.6s' },
    { x: cx + 16, w: 22, color: INK_MID, delay: '1.2s' },
  ]
  return (
    <g className='alg-seg' style={{ animationDelay: '0.8s' }}>
      {slices.map((s, i) => {
        const isAcc = s.color === ACC
        return (
          <g key={i}>
            {/* back cap (hidden) */}
            <Cap cx={s.x} cy={AXIS_Y} r={r} dashed stroke={INK_LO} />
            {/* top edge */}
            <line x1={s.x} y1={AXIS_Y - r} x2={s.x + s.w} y2={AXIS_Y - r} stroke={s.color} strokeWidth={isAcc ? 1.2 : 0.9} />
            {/* bottom edge */}
            <line x1={s.x} y1={AXIS_Y + r} x2={s.x + s.w} y2={AXIS_Y + r} stroke={s.color} strokeWidth={isAcc ? 1.2 : 0.9} />
            {/* front cap */}
            <Cap cx={s.x + s.w} cy={AXIS_Y} r={r} stroke={s.color} sw={isAcc ? 1.2 : 0.9} fill='var(--v20-paper-2)' />
            {/* breathing pulse for the active orange slice */}
            {isAcc && (
              <ellipse cx={s.x + s.w} cy={AXIS_Y} rx={r * 0.4} ry={r} fill={ACC} fillOpacity='0.08'>
                <animate attributeName='fill-opacity' values='0.04;0.18;0.04' dur='3s' repeatCount='indefinite'
                  calcMode='spline' keySplines='0.4 0 0.6 1; 0.4 0 0.6 1' />
              </ellipse>
            )}
          </g>
        )
      })}
      {/* terminal end (right tail) */}
      <Cap cx={cx + 44} cy={AXIS_Y} r={r * 0.6} stroke={INK_HI} fill='var(--v20-paper-2)' />
      <line x1={cx + 38} y1={AXIS_Y - r * 0.6} x2={cx + 44} y2={AXIS_Y - r * 0.6} stroke={INK_HI} strokeWidth='1' />
      <line x1={cx + 38} y1={AXIS_Y + r * 0.6} x2={cx + 44} y2={AXIS_Y + r * 0.6} stroke={INK_HI} strokeWidth='1' />
    </g>
  )
}

/* L04 — Development: turbine with rotating blades */
function Turbine({ cx }: { cx: number }) {
  const r = 32
  const x1 = cx - 50
  const x2 = cx + 50
  return (
    <g className='alg-seg' style={{ animationDelay: '1.1s' }}>
      {/* spindle (left small cylinder) */}
      <Cap cx={x1 - 14} cy={AXIS_Y} r={8} dashed stroke={INK_LO} />
      <line x1={x1 - 14} y1={AXIS_Y - 8} x2={x1} y2={AXIS_Y - 8} stroke={INK_HI} strokeWidth='0.9' />
      <line x1={x1 - 14} y1={AXIS_Y + 8} x2={x1} y2={AXIS_Y + 8} stroke={INK_HI} strokeWidth='0.9' />
      <Cap cx={x1} cy={AXIS_Y} r={8} stroke={INK_HI} fill='var(--v20-paper-2)' />

      {/* main turbine cylinder */}
      <Cap cx={x1} cy={AXIS_Y} r={r} dashed stroke={INK_LO} />
      <line x1={x1} y1={AXIS_Y - r} x2={x2} y2={AXIS_Y - r} stroke={INK_HI} strokeWidth='1' />
      <line x1={x1} y1={AXIS_Y + r} x2={x2} y2={AXIS_Y + r} stroke={INK_HI} strokeWidth='1' />
      <Cap cx={x2} cy={AXIS_Y} r={r} stroke={INK_HI} fill='var(--v20-paper-2)' />

      {/* blade assembly on the front face — rotates */}
      <g style={{ transformOrigin: `${x2}px ${AXIS_Y}px` }}>
        <animateTransform attributeName='transform' type='rotate'
          from={`0 ${x2} ${AXIS_Y}`} to={`360 ${x2} ${AXIS_Y}`} dur='12s' repeatCount='indefinite' />
        {Array.from({ length: 8 }).map((_, i) => {
          const ang = (i / 8) * Math.PI * 2
          const innerR = 8
          const outerR = r - 4
          const x_ = Math.cos(ang)
          const y_ = Math.sin(ang)
          return (
            <line key={i}
              x1={x2 + r * 0.4 * x_ * (innerR / outerR)} y1={AXIS_Y + innerR * y_}
              x2={x2 + r * 0.4 * x_} y2={AXIS_Y + outerR * y_}
              stroke={i === 0 ? ACC : INK_MID} strokeWidth={i === 0 ? 1.4 : 0.9} strokeLinecap='round' />
          )
        })}
        <ellipse cx={x2} cy={AXIS_Y} rx={r * 0.4 * 0.32} ry={r * 0.32} fill={ACC} />
      </g>

      {/* radial vent ticks on body */}
      {Array.from({ length: 6 }).map((_, i) => {
        const px = x1 + 14 + i * 14
        return (
          <line key={i} x1={px} y1={AXIS_Y - r - 4} x2={px} y2={AXIS_Y - r + 4}
            stroke={INK_MID} strokeWidth='0.7' />
        )
      })}
    </g>
  )
}

/* L05 — Productivity: dual rotor with orbiting orb */
function DualRotor({ cx }: { cx: number }) {
  const r = 26
  const xL = cx - 24
  const xR = cx + 24
  // orbit ellipse path
  const orbitId = 'alg-prod-orbit'
  return (
    <g className='alg-seg' style={{ animationDelay: '1.4s' }}>
      {/* axis sleeve */}
      <Cap cx={cx - 50} cy={AXIS_Y} r={6} stroke={INK_HI} fill='var(--v20-paper-2)' />
      <line x1={cx - 50} y1={AXIS_Y - 6} x2={cx - 32} y2={AXIS_Y - 6} stroke={INK_HI} strokeWidth='0.8' />
      <line x1={cx - 50} y1={AXIS_Y + 6} x2={cx - 32} y2={AXIS_Y + 6} stroke={INK_HI} strokeWidth='0.8' />

      {/* left rotor disc */}
      <Cap cx={xL} cy={AXIS_Y} r={r} dashed stroke={INK_LO} />
      <Cap cx={xL + 6} cy={AXIS_Y} r={r} stroke={INK_MID} sw={1} fill='var(--v20-paper-2)' />
      {/* right rotor disc — orange */}
      <Cap cx={xR} cy={AXIS_Y} r={r} dashed stroke={INK_LO} />
      <Cap cx={xR + 6} cy={AXIS_Y} r={r} stroke={ACC} sw={1.2} fill='var(--v20-paper-2)' />
      {/* coupling between rotors */}
      <line x1={xL + 6} y1={AXIS_Y - r * 0.5} x2={xR + 6} y2={AXIS_Y - r * 0.5} stroke={INK_HI} strokeWidth='0.7' />
      <line x1={xL + 6} y1={AXIS_Y + r * 0.5} x2={xR + 6} y2={AXIS_Y + r * 0.5} stroke={INK_HI} strokeWidth='0.7' />
      {/* core spark */}
      <circle cx={cx + 6} cy={AXIS_Y} r='3.5' fill={ACC}>
        <animate attributeName='r' values='3;4.5;3' dur='2.4s' repeatCount='indefinite'
          calcMode='spline' keySplines='0.4 0 0.6 1; 0.4 0 0.6 1' />
      </circle>
      {/* orbit path (invisible) */}
      <ellipse id={orbitId} cx={cx + 6} cy={AXIS_Y} rx={r * 1.4} ry={r * 0.5} fill='none' stroke={INK_LO} strokeWidth='0.5' strokeDasharray='2 3' />
      {/* orbiting orb */}
      <circle r='3.2' fill={ACC}>
        <animateMotion dur='5s' repeatCount='indefinite' rotate='auto'>
          <mpath href={`#${orbitId}`} />
        </animateMotion>
      </circle>
    </g>
  )
}

/* L06 — Orchestration: hub with radial spokes */
function HubSpokes({ cx }: { cx: number }) {
  const r = 38
  const nodes = 6
  return (
    <g className='alg-seg' style={{ animationDelay: '1.7s' }}>
      {/* central spindle (left, going to axis) */}
      <line x1={cx - r - 14} y1={AXIS_Y} x2={cx - r} y2={AXIS_Y} stroke={INK_HI} strokeWidth='1.2' />
      {/* hub sphere */}
      <circle cx={cx} cy={AXIS_Y} r='10' fill='var(--v20-paper-2)' stroke={ACC} strokeWidth='1.4' />
      <circle cx={cx} cy={AXIS_Y} r='3.5' fill={ACC} />
      {/* radial spokes + node spheres */}
      {Array.from({ length: nodes }).map((_, i) => {
        const ang = (i / nodes) * Math.PI * 2 - Math.PI / 2
        const nx = cx + Math.cos(ang) * r
        const ny = AXIS_Y + Math.sin(ang) * r * 0.65 // foreshorten vertical for iso
        const isActive = i === 1
        return (
          <g key={i}>
            <line x1={cx} y1={AXIS_Y} x2={nx} y2={ny} stroke={INK_MID} strokeWidth='0.8' strokeDasharray='2 2' />
            <circle cx={nx} cy={ny} r='4.2' fill={isActive ? ACC : 'var(--v20-paper-2)'} stroke={ACC} strokeWidth={isActive ? 0 : 1.1}>
              {isActive && (
                <animate attributeName='r' values='4;5.5;4' dur='1.8s'
                  begin={`${i * 0.25}s`} repeatCount='indefinite'
                  calcMode='spline' keySplines='0.4 0 0.6 1; 0.4 0 0.6 1' />
              )}
            </circle>
            {/* tiny "data packet" travelling along the spoke */}
            <circle r='1.6' fill={ACC} opacity='0.85'>
              <animateMotion dur={`${3 + i * 0.4}s`} repeatCount='indefinite'
                begin={`${i * 0.5}s`} keyPoints='1;0' keyTimes='0;1' calcMode='linear'
                path={`M ${cx} ${AXIS_Y} L ${nx} ${ny}`} />
              <animate attributeName='opacity' values='0;0.85;0' dur={`${3 + i * 0.4}s`}
                begin={`${i * 0.5}s`} repeatCount='indefinite' />
            </circle>
          </g>
        )
      })}
    </g>
  )
}

/* L07 — Data & Insights: terminal data brick */
function DataBrick({ cx }: { cx: number }) {
  const w = 110
  const h = 68
  const dx = 18 // iso depth
  const dy = -10
  const x1 = cx - w / 2
  const y1 = AXIS_Y - h / 2
  const x2 = x1 + w
  const y2 = y1 + h
  // hex helper for face
  const hexAt = (hx: number, hy: number, r: number) => {
    const a = r * 0.866
    const b = r * 0.5
    return `${hx},${hy - r} ${hx + a},${hy - b} ${hx + a},${hy + b} ${hx},${hy + r} ${hx - a},${hy + b} ${hx - a},${hy - b}`
  }
  return (
    <g className='alg-seg' style={{ animationDelay: '2.0s' }}>
      {/* back face (hidden, dashed) */}
      <rect x={x1 + dx} y={y1 + dy} width={w} height={h} fill='var(--v20-paper-2)' stroke={INK_LO} strokeWidth='0.6' strokeDasharray='3 2' />
      {/* connecting edges */}
      <line x1={x1} y1={y1} x2={x1 + dx} y2={y1 + dy} stroke={INK_HI} strokeWidth='0.9' />
      <line x1={x2} y1={y1} x2={x2 + dx} y2={y1 + dy} stroke={INK_HI} strokeWidth='0.9' />
      <line x1={x2} y1={y2} x2={x2 + dx} y2={y2 + dy} stroke={INK_HI} strokeWidth='0.9' />
      {/* hidden bottom-back corner */}
      <line x1={x1} y1={y2} x2={x1 + dx} y2={y2 + dy} stroke={INK_LO} strokeWidth='0.6' strokeDasharray='2 2' />
      {/* top face */}
      <polygon points={`${x1},${y1} ${x2},${y1} ${x2 + dx},${y1 + dy} ${x1 + dx},${y1 + dy}`}
        fill='var(--v20-paper)' stroke={INK_HI} strokeWidth='0.9' />
      {/* right face */}
      <polygon points={`${x2},${y1} ${x2 + dx},${y1 + dy} ${x2 + dx},${y2 + dy} ${x2},${y2}`}
        fill='var(--v20-paper-2)' stroke={INK_HI} strokeWidth='0.9' />
      {/* front face */}
      <rect x={x1} y={y1} width={w} height={h} fill='var(--v20-paper-2)' stroke={INK_HI} strokeWidth='1' />
      {/* hex lattice on front face */}
      {[
        { x: cx - 36, y: AXIS_Y - 10, r: 9, acc: false },
        { x: cx - 18, y: AXIS_Y + 10, r: 9, acc: false },
        { x: cx, y: AXIS_Y - 10, r: 9, acc: true },
        { x: cx + 18, y: AXIS_Y + 10, r: 9, acc: false },
        { x: cx + 36, y: AXIS_Y - 10, r: 9, acc: false },
      ].map((n, i) => (
        <g key={i}>
          <polygon points={hexAt(n.x, n.y, n.r)} fill='none' stroke={n.acc ? ACC : INK_MID} strokeWidth={n.acc ? 1.2 : 0.8} />
          <circle cx={n.x} cy={n.y} r='1.4' fill={n.acc ? ACC : INK_MID}>
            {n.acc && <animate attributeName='opacity' values='0.3;1;0.3' dur='2.6s' repeatCount='indefinite' />}
          </circle>
        </g>
      ))}
      {/* output port */}
      <line x1={x2 + dx} y1={AXIS_Y + dy} x2={x2 + dx + 30} y2={AXIS_Y + dy} stroke={INK_HI} strokeWidth='1.2' />
      <circle cx={x2 + dx + 30} cy={AXIS_Y + dy} r='3' fill={ACC} />
    </g>
  )
}

/* Joint marker — chevrons between segments to indicate assembly direction */
function Joint({ x }: { x: number }) {
  return (
    <g opacity='0.6'>
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M ${x - 6 + i * 5} ${AXIS_Y - 4} L ${x - 2 + i * 5} ${AXIS_Y} L ${x - 6 + i * 5} ${AXIS_Y + 4}`}
          fill='none' stroke={ACC} strokeWidth='1' strokeLinecap='round' opacity={0.3 + i * 0.25} />
      ))}
    </g>
  )
}

const SEG_RENDERERS = [StrategyHead, HexPrism, CloudDrum, Turbine, DualRotor, HubSpokes, DataBrick]

function AlgorithmIllustration() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns='http://www.w3.org/2000/svg'
      className='alg-svg' role='img' aria-labelledby='alg-title alg-desc'>
      <title id='alg-title'>DBiz AI Transformation Algorithm — Exploded Assembly</title>
      <desc id='alg-desc'>Seven-segment isometric mechanical assembly representing the AI transformation stack: Strategy, Architecture, Cloud, Development, Productivity, Orchestration, Data &amp; Insights.</desc>

      <defs>
        <pattern id='alg-dot' patternUnits='userSpaceOnUse' width='14' height='14'>
          <circle cx='1' cy='1' r='0.6' fill='var(--v20-ink-dot)' />
        </pattern>
        <linearGradient id='alg-axis-shimmer' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor={ACC} stopOpacity='0' />
          <stop offset='50%' stopColor={ACC} stopOpacity='1' />
          <stop offset='100%' stopColor={ACC} stopOpacity='0'>
            <animate attributeName='offset' values='0;1' dur='1s' begin='0s' fill='freeze' />
          </stop>
        </linearGradient>
        <radialGradient id='alg-scan-glow'>
          <stop offset='0%' stopColor={ACC} stopOpacity='0.6' />
          <stop offset='100%' stopColor={ACC} stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* dotted background */}
      <rect x='8' y='8' width={W - 16} height={H - 16} fill='url(#alg-dot)' />

      {/* corner brackets */}
      <g stroke='var(--v20-ink-corner)' strokeWidth='2'>
        <line x1='8' y1='8' x2='28' y2='8' /><line x1='8' y1='8' x2='8' y2='28' />
        <line x1={W - 8} y1='8' x2={W - 28} y2='8' /><line x1={W - 8} y1='8' x2={W - 8} y2='28' />
        <line x1='8' y1={H - 8} x2='28' y2={H - 8} /><line x1='8' y1={H - 8} x2='8' y2={H - 28} />
        <line x1={W - 8} y1={H - 8} x2={W - 28} y2={H - 8} /><line x1={W - 8} y1={H - 8} x2={W - 8} y2={H - 28} />
      </g>

      {/* header strip */}
      <text x='50' y='34' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label-strong)' letterSpacing='2'>SCALE 1:1</text>
      <line x1={W / 2 - 320} y1='44' x2={W / 2 + 320} y2='44' stroke='var(--v20-ink-corner)' strokeWidth='0.8' />
      <line x1={W / 2 - 320} y1='40' x2={W / 2 - 320} y2='48' stroke='var(--v20-ink-corner)' strokeWidth='0.8' />
      <line x1={W / 2 + 320} y1='40' x2={W / 2 + 320} y2='48' stroke='var(--v20-ink-corner)' strokeWidth='0.8' />
      <text x={W / 2} y='34' fontFamily='var(--font-mono)' fontSize='10' fill='var(--v20-ink-dim)' textAnchor='middle' letterSpacing='3'>
        ALGORITHM · SEVEN-PART ASSEMBLY · HUMAN-LED · AGENT-OPERATED · DATA-POWERED
      </text>
      <text x={W - 50} y='34' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label-strong)' textAnchor='end' letterSpacing='1'>SHEET A2</text>

      {/* dimension brackets — top */}
      <g stroke='var(--v20-ink-corner)' strokeWidth='0.6' fill='none'>
        <line x1={CXS[0]} y1='64' x2={CXS[6]} y2='64' />
        <line x1={CXS[0]} y1='60' x2={CXS[0]} y2='68' />
        <line x1={CXS[6]} y1='60' x2={CXS[6]} y2='68' />
      </g>
      <text x={W / 2} y='80' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='2.5'>
        Σ = ENTERPRISE TRANSFORMATION
      </text>

      {/* central axis (the spine) */}
      <line x1='80' y1={AXIS_Y} x2={W - 80} y2={AXIS_Y} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='6 4' />
      {/* solid orange centerline draws on load */}
      <line x1='80' y1={AXIS_Y} x2={W - 80} y2={AXIS_Y} stroke={ACC} strokeWidth='0.8' className='alg-axis' />
      {/* axis end pins */}
      <line x1='80' y1={AXIS_Y - 10} x2='80' y2={AXIS_Y + 10} stroke='var(--v20-ink-corner)' strokeWidth='1' />
      <line x1={W - 80} y1={AXIS_Y - 10} x2={W - 80} y2={AXIS_Y + 10} stroke='var(--v20-ink-corner)' strokeWidth='1' />

      {/* joint markers between adjacent segments */}
      {CXS.slice(0, -1).map((cx, i) => {
        const next = CXS[i + 1]
        const mid = (cx + next) / 2
        return <Joint key={i} x={mid} />
      })}

      {/* segments */}
      {SEGMENTS.map((seg, i) => {
        const Render = SEG_RENDERERS[i]
        const cx = CXS[i]
        return (
          <g key={seg.code}>
            {/* layer code (above) */}
            <text x={cx} y={AXIS_Y - 130} fontFamily='var(--font-mono)' fontSize='10' fill='var(--v20-ink-label)'
              textAnchor='middle' letterSpacing='2'>{seg.code}</text>
            {/* dropline above to segment */}
            <line x1={cx} y1={AXIS_Y - 122} x2={cx} y2={AXIS_Y - 80} stroke={INK_LO} strokeWidth='0.6' strokeDasharray='2 3' />
            <circle cx={cx} cy={AXIS_Y - 122} r='2' fill={ACC} />

            {/* the segment itself */}
            <Render cx={cx} />

            {/* axis dot under segment */}
            <circle cx={cx} cy={AXIS_Y} r='2.6' fill={ACC} />

            {/* segment name (below) */}
            <text x={cx} y={AXIS_Y + 110} fontFamily='var(--font-mono)' fontSize='11' fontWeight='500'
              fill='#ffffff' textAnchor='middle' letterSpacing='2.5'>{seg.name}</text>
            <text x={cx} y={AXIS_Y + 128} fontFamily='var(--font-mono)' fontSize='9'
              fill={ACC} textAnchor='middle' letterSpacing='2'>{seg.sub.toUpperCase()}</text>
            <text x={cx} y={AXIS_Y + 144} fontFamily='var(--font-sans)' fontSize='9'
              fill='rgba(255,255,255,0.42)' textAnchor='middle'>{seg.ref}</text>
          </g>
        )
      })}

      {/* dimension brackets — bottom */}
      <g stroke='var(--v20-ink-corner)' strokeWidth='0.6' fill='none'>
        <line x1={CXS[0]} y1={H - 64} x2={CXS[2]} y2={H - 64} />
        <line x1={CXS[0]} y1={H - 60} x2={CXS[0]} y2={H - 68} />
        <line x1={CXS[2]} y1={H - 60} x2={CXS[2]} y2={H - 68} />
        <line x1={CXS[3]} y1={H - 64} x2={CXS[6]} y2={H - 64} />
        <line x1={CXS[3]} y1={H - 60} x2={CXS[3]} y2={H - 68} />
        <line x1={CXS[6]} y1={H - 60} x2={CXS[6]} y2={H - 68} />
      </g>
      <text x={(CXS[0] + CXS[2]) / 2} y={H - 50} fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='2'>FOUNDATION</text>
      <text x={(CXS[3] + CXS[6]) / 2} y={H - 50} fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='2'>ACTIVATION</text>

      {/* travelling scan glow — sweeps the assembly */}
      <circle r='40' fill='url(#alg-scan-glow)' opacity='0.7'>
        <animateMotion dur='9s' repeatCount='indefinite' path={`M 80 ${AXIS_Y} L ${W - 80} ${AXIS_Y}`} />
      </circle>

      {/* footer */}
      <text x={W / 2} y={H - 26} fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label-strong)' textAnchor='middle' letterSpacing='2'>
        DWG-ALG-01  ·  EXPLODED ASSEMBLY  ·  REV 0.1
      </text>
    </svg>
  )
}

export default function AlgorithmPage() {
  return (
    <main className='alg-page'>
      <style>{`
        .alg-page {
          min-height: 100vh;
          background: var(--v20-paper);
          color: var(--v20-ink);
          padding: 96px clamp(16px, 5vw, 48px) 64px;
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 5vw, 56px);
          align-items: stretch;
        }
        .alg-head {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .alg-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--v20-accent);
          text-transform: uppercase;
        }
        .alg-title {
          font-family: var(--font-sans);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.08;
          margin: 0;
        }
        .alg-title em {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--v20-accent);
        }
        .alg-lead {
          font-size: 1.05rem;
          color: var(--v20-ink-2);
          line-height: 1.6;
          margin: 0;
          max-width: 640px;
          margin-inline: auto;
        }

        .alg-frame {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          background: var(--v20-paper);
          border: 1px solid var(--v20-ink-frame);
          border-radius: 4px;
          padding: 4px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .alg-svg {
          min-width: 960px;
          width: 100%;
          height: auto;
          display: block;
        }

        /* Stroke draw for the central axis (one-shot on load) */
        .alg-axis {
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: alg-axis-draw 1.2s ease-out 0.1s forwards;
        }
        @keyframes alg-axis-draw {
          to { stroke-dashoffset: 0; }
        }

        /* Each segment fades up / draws in with a stagger */
        .alg-seg {
          opacity: 0;
          transform: translateY(8px);
          animation: alg-seg-in 0.7s ease-out forwards;
        }
        @keyframes alg-seg-in {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .alg-page { padding-top: 56px; padding-bottom: 40px; }
          .alg-kicker { font-size: 10px; letter-spacing: 2px; }
          .alg-lead { font-size: 0.95rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .alg-axis, .alg-seg {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            stroke-dashoffset: 0 !important;
          }
          .alg-svg * {
            animation-duration: 0s !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <header className='alg-head'>
        <span className='alg-kicker'>DWG-ALG-01 · The Algorithm</span>
        <h1 className='alg-title'>
          Seven parts. One <em>assembly.</em>
        </h1>
        <p className='alg-lead'>
          The DBiz AI transformation stack as an exploded mechanical drawing — each capability a milled component on a single shared axis. No part ships alone.
        </p>
      </header>

      <div className='alg-frame'>
        <AlgorithmIllustration />
      </div>
    </main>
  )
}
