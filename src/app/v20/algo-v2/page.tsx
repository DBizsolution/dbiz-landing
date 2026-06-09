'use client'

/* ────────────────────────────────────────────────────────────
 * V2 — True isometric projection of the algorithm assembly.
 * Same 7 capabilities as v1, but rendered as one machined
 * part (engineering-drawing style with leader-line callouts
 * and dimension annotations).
 * ──────────────────────────────────────────────────────────── */

const W = 1600
const H = 820

const ACC = 'var(--v20-accent)'
const INK_LO = 'rgba(255,255,255,0.18)'
const INK_MID = 'rgba(255,255,255,0.38)'
const INK_HI = 'rgba(255,255,255,0.78)'
const FILL_TOP = 'var(--v20-iso-top, #11203f)'
const FILL_FRONT = 'var(--v20-iso-front, #0a1733)'
const FILL_RIGHT = 'var(--v20-iso-right, #060e22)'

const COS30 = Math.cos(Math.PI / 6)
const SIN30 = Math.sin(Math.PI / 6)

/* Iso projection: world (x, y, z) → screen. +X = down-right, +Y = down-left, +Z = up */
const OX = 830
const OY = 435
const SCALE = 1.4
type Pt = [number, number]
const iso = (x: number, y: number, z: number): Pt => [
  OX + (x - y) * COS30 * SCALE,
  OY + ((x + y) * SIN30 - z) * SCALE,
]

/* ─── Iso box helper ────────────────────────────────────── */
type BoxOpts = { stroke?: string; sw?: number; accent?: boolean; hideBack?: boolean }
function isoBox(x0: number, y0: number, z0: number, dx: number, dy: number, dz: number, opts: BoxOpts = {}) {
  const stroke = opts.stroke ?? INK_HI
  const sw = opts.sw ?? 0.9
  const c = [
    iso(x0,      y0,      z0),       // 0 back-left-bottom
    iso(x0 + dx, y0,      z0),       // 1 back-right-bottom
    iso(x0 + dx, y0 + dy, z0),       // 2 front-right-bottom
    iso(x0,      y0 + dy, z0),       // 3 front-left-bottom
    iso(x0,      y0,      z0 + dz),  // 4 back-left-top
    iso(x0 + dx, y0,      z0 + dz),  // 5 back-right-top
    iso(x0 + dx, y0 + dy, z0 + dz),  // 6 front-right-top
    iso(x0,      y0 + dy, z0 + dz),  // 7 front-left-top
  ]
  const poly = (...idxs: number[]) => idxs.map(i => c[i].join(',')).join(' ')

  return (
    <g>
      {!opts.hideBack && (
        <>
          <line x1={c[0][0]} y1={c[0][1]} x2={c[1][0]} y2={c[1][1]} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='3 2' />
          <line x1={c[0][0]} y1={c[0][1]} x2={c[3][0]} y2={c[3][1]} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='3 2' />
          <line x1={c[0][0]} y1={c[0][1]} x2={c[4][0]} y2={c[4][1]} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='3 2' />
        </>
      )}
      <polygon points={poly(3, 2, 6, 7)} fill={FILL_FRONT} stroke={stroke} strokeWidth={sw} />
      <polygon points={poly(1, 2, 6, 5)} fill={FILL_RIGHT} stroke={stroke} strokeWidth={sw} />
      <polygon points={poly(4, 5, 6, 7)} fill={FILL_TOP} stroke={opts.accent ? ACC : stroke} strokeWidth={opts.accent ? 1.1 : sw} />
    </g>
  )
}

/* Project a polygon that lives on the top face (z = ztop) of a part — for engraved details */
function topFacePolygon(z: number, points: Array<[number, number]>, props: React.SVGProps<SVGPolygonElement>) {
  const pts = points.map(([x, y]) => iso(x, y, z).join(',')).join(' ')
  return <polygon points={pts} {...props} />
}

/* Iso point dot — for accent markers */
function dot(x: number, y: number, z: number, color = ACC, r = 2.4) {
  const [sx, sy] = iso(x, y, z)
  return <circle cx={sx} cy={sy} r={r} fill={color} />
}

/* ─── 7 segments — each is a milled feature on a shared base rail ─── */
type Seg = {
  code: string
  name: string
  sub: string
  spec: string
  x0: number       // start along X axis
  dx: number       // length along X
  yMargin?: number // padding from rail edge
  render: (x0: number, dx: number) => React.ReactNode
}

const Y_BACK = 0
const Y_FRONT = 70
const RAIL_HEIGHT = 14
const Z_RAIL_TOP = RAIL_HEIGHT  // top of base rail = 14

/* L01 — Strategy: striker pyramid (cone-like wedge) */
const renderStrategy: Seg['render'] = (x0, dx) => {
  const cy = (Y_BACK + Y_FRONT) / 2
  const tipX = x0
  const baseX = x0 + dx
  const half = (Y_FRONT - Y_BACK) / 2 - 4
  const peakZ = Z_RAIL_TOP + 50
  // pyramid: tip at (tipX, cy, Z_RAIL_TOP+10), base at baseX with corners
  const tip: Pt = iso(tipX, cy, peakZ - 10)
  const blf: Pt = iso(baseX, cy - half, Z_RAIL_TOP)
  const brf: Pt = iso(baseX, cy + half, Z_RAIL_TOP)
  const back: Pt = iso(baseX, cy, Z_RAIL_TOP + peakZ - Z_RAIL_TOP) // top apex of base
  return (
    <g className='av-seg' style={{ animationDelay: '0.3s' }}>
      {/* base block */}
      {isoBox(x0 + dx - 30, Y_BACK + 6, Z_RAIL_TOP, 30, Y_FRONT - Y_BACK - 12, 18)}
      {/* striker tip — triangular wedge */}
      <polygon points={`${tip.join(',')} ${blf.join(',')} ${brf.join(',')}`}
        fill={FILL_FRONT} stroke={INK_HI} strokeWidth='0.9' />
      <polygon points={`${tip.join(',')} ${brf.join(',')} ${back.join(',')}`}
        fill={FILL_RIGHT} stroke={INK_HI} strokeWidth='0.9' />
      <polygon points={`${tip.join(',')} ${back.join(',')} ${blf.join(',')}`}
        fill={FILL_TOP} stroke={INK_HI} strokeWidth='0.9' />
      {/* aim mark on tip */}
      {dot(tipX, cy, peakZ - 10, ACC, 3)}
      <circle cx={tip[0]} cy={tip[1]} r='6' fill='none' stroke={ACC} strokeWidth='0.9'>
        <animate attributeName='r' values='5;9;5' dur='2.4s' repeatCount='indefinite' />
        <animate attributeName='opacity' values='0.9;0.2;0.9' dur='2.4s' repeatCount='indefinite' />
      </circle>
    </g>
  )
}

/* L02 — Architecture: hex prism standing on the base */
const renderArchitecture: Seg['render'] = (x0, dx) => {
  const cy = (Y_BACK + Y_FRONT) / 2
  const cx = x0 + dx / 2
  const r = 16
  const hZ = 36
  // hex prism with vertical axis (extruded along Z)
  // 6 base vertices (in XY plane on top of rail)
  const verts2D: Array<[number, number]> = []
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 - Math.PI / 2
    verts2D.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
  }
  const bot = verts2D.map(([x, y]) => iso(x, y, Z_RAIL_TOP))
  const top = verts2D.map(([x, y]) => iso(x, y, Z_RAIL_TOP + hZ))
  // visible vertical edges: 4 (front-most) — skip the back-most one
  return (
    <g className='av-seg' style={{ animationDelay: '0.55s' }}>
      {/* base socket */}
      {isoBox(x0, Y_BACK + 4, Z_RAIL_TOP, dx, Y_FRONT - Y_BACK - 8, 6)}
      {/* hex sides */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const j = (i + 1) % 6
        const isHidden = i === 4 || i === 5 // back-facing sides
        return (
          <polygon key={i} points={[bot[i], bot[j], top[j], top[i]].map(p => p.join(',')).join(' ')}
            fill={i % 2 ? FILL_RIGHT : FILL_FRONT}
            stroke={isHidden ? INK_LO : INK_HI}
            strokeWidth={isHidden ? 0.5 : 0.9}
            strokeDasharray={isHidden ? '3 2' : undefined} />
        )
      })}
      {/* top hex face */}
      <polygon points={top.map(p => p.join(',')).join(' ')} fill={FILL_TOP} stroke={ACC} strokeWidth='1.1' />
      {/* inner hex bore */}
      {topFacePolygon(Z_RAIL_TOP + hZ, verts2D.map(([x, y]) => [cx + (x - cx) * 0.45, cy + (y - cy) * 0.45]),
        { fill: 'none', stroke: ACC, strokeWidth: '0.9' })}
      {dot(cx, cy, Z_RAIL_TOP + hZ, ACC, 1.8)}
    </g>
  )
}

/* L03 — Cloud: 3 stacked slabs (lamellar) */
const renderCloud: Seg['render'] = (x0, dx) => {
  const slabH = 8
  const gap = 3
  const slabs = [
    { z: Z_RAIL_TOP,                     accent: false },
    { z: Z_RAIL_TOP + slabH + gap,       accent: true  },
    { z: Z_RAIL_TOP + (slabH + gap) * 2, accent: false },
  ]
  return (
    <g className='av-seg' style={{ animationDelay: '0.8s' }}>
      {slabs.map((s, i) => (
        <g key={i}>
          {isoBox(x0 + 2, Y_BACK + 4, s.z, dx - 4, Y_FRONT - Y_BACK - 8, slabH, { accent: s.accent, stroke: s.accent ? ACC : INK_HI })}
        </g>
      ))}
      {/* breathing pulse on the active slab */}
      <g>
        {(() => {
          const pulseZ = Z_RAIL_TOP + slabH + gap + slabH
          const corners = [
            iso(x0 + 2, Y_BACK + 4, pulseZ),
            iso(x0 + dx - 2, Y_BACK + 4, pulseZ),
            iso(x0 + dx - 2, Y_FRONT - 4, pulseZ),
            iso(x0 + 2, Y_FRONT - 4, pulseZ),
          ]
          return (
            <polygon points={corners.map(p => p.join(',')).join(' ')} fill={ACC} fillOpacity='0.05'>
              <animate attributeName='fill-opacity' values='0.04;0.18;0.04' dur='2.8s' repeatCount='indefinite'
                calcMode='spline' keySplines='0.4 0 0.6 1; 0.4 0 0.6 1' />
            </polygon>
          )
        })()}
      </g>
    </g>
  )
}

/* L04 — Development: cylinder lying along X-axis (gear/turbine) */
const renderDevelopment: Seg['render'] = (x0, dx) => {
  const cy = (Y_BACK + Y_FRONT) / 2
  const r = 18
  const cz = Z_RAIL_TOP + r + 4
  // Cylinder along X-axis. Cap = circle in YZ plane.
  // Iso projection of YZ-plane circle: ellipse with major≈0.816r, minor≈0.471r, rotated 60°.
  const [bsx, bsy] = iso(x0, cy, cz)
  const [fsx, fsy] = iso(x0 + dx, cy, cz)
  const rxE = r * 0.816
  const ryE = r * 0.471
  const upOffX = rxE * 0.5
  const upOffY = -rxE * 0.866
  return (
    <g className='av-seg' style={{ animationDelay: '1.05s' }}>
      {/* cradle */}
      {isoBox(x0, Y_BACK + 6, Z_RAIL_TOP, dx, Y_FRONT - Y_BACK - 12, 8)}
      {/* back cap (hidden, dashed) */}
      <ellipse cx={bsx} cy={bsy} rx={rxE} ry={ryE}
        transform={`rotate(60 ${bsx} ${bsy})`}
        fill={FILL_FRONT} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='3 2' />
      {/* body silhouette top + bottom */}
      <line x1={bsx + upOffX} y1={bsy + upOffY} x2={fsx + upOffX} y2={fsy + upOffY}
        stroke={INK_HI} strokeWidth='0.9' />
      <line x1={bsx - upOffX} y1={bsy - upOffY} x2={fsx - upOffX} y2={fsy - upOffY}
        stroke={INK_HI} strokeWidth='0.9' />
      {/* vent ticks on top */}
      {[0.2, 0.4, 0.6, 0.8].map((t, i) => {
        const x = x0 + dx * t
        const [tsx, tsy] = iso(x, cy, cz)
        return (
          <line key={i}
            x1={tsx + upOffX * 1.05} y1={tsy + upOffY * 1.05}
            x2={tsx + upOffX * 1.18} y2={tsy + upOffY * 1.18}
            stroke={INK_MID} strokeWidth='0.6' />
        )
      })}
      {/* front cap with rotating blades */}
      <ellipse cx={fsx} cy={fsy} rx={rxE} ry={ryE}
        transform={`rotate(60 ${fsx} ${fsy})`}
        fill={FILL_TOP} stroke={ACC} strokeWidth='1.1' />
      {/* blade pattern (rotates) */}
      <g style={{ transformOrigin: `${fsx}px ${fsy}px` }}>
        <animateTransform attributeName='transform' type='rotate'
          from={`0 ${fsx} ${fsy}`} to={`360 ${fsx} ${fsy}`} dur='14s' repeatCount='indefinite' />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2
          const x1 = fsx + Math.cos(a) * rxE * 0.3
          const y1 = fsy + Math.sin(a) * rxE * 0.3
          const x2 = fsx + Math.cos(a) * rxE * 0.85
          const y2 = fsy + Math.sin(a) * rxE * 0.85
          // tilt to match ellipse rotation (60°)
          const rot = (60 * Math.PI) / 180
          const cs = Math.cos(rot), sn = Math.sin(rot)
          const r1x = fsx + (x1 - fsx) * cs - (y1 - fsy) * sn
          const r1y = fsy + (x1 - fsx) * sn + (y1 - fsy) * cs * 0.471 / 0.816
          const r2x = fsx + (x2 - fsx) * cs - (y2 - fsy) * sn
          const r2y = fsy + (x2 - fsx) * sn + (y2 - fsy) * cs * 0.471 / 0.816
          return (
            <line key={i} x1={r1x} y1={r1y} x2={r2x} y2={r2y}
              stroke={i === 0 ? ACC : INK_MID} strokeWidth={i === 0 ? 1.2 : 0.7} strokeLinecap='round' />
          )
        })}
        <circle cx={fsx} cy={fsy} r='2.5' fill={ACC} />
      </g>
    </g>
  )
}

/* L05 — Productivity: dual rotor (two short cylinders side-by-side along X) */
const renderProductivity: Seg['render'] = (x0, dx) => {
  const cy = (Y_BACK + Y_FRONT) / 2
  const r = 14
  const cz = Z_RAIL_TOP + r + 4
  const rxE = r * 0.816
  const ryE = r * 0.471
  const upOffX = rxE * 0.5
  const upOffY = -rxE * 0.866
  // two rotors spaced along X
  const rotors = [
    { x0: x0 + 4,           x1: x0 + dx / 2 - 6, accent: false },
    { x0: x0 + dx / 2 + 6,  x1: x0 + dx - 4,     accent: true  },
  ]
  return (
    <g className='av-seg' style={{ animationDelay: '1.3s' }}>
      {/* saddle */}
      {isoBox(x0, Y_BACK + 6, Z_RAIL_TOP, dx, Y_FRONT - Y_BACK - 12, 8)}
      {rotors.map((rot, idx) => {
        const [bsx, bsy] = iso(rot.x0, cy, cz)
        const [fsx, fsy] = iso(rot.x1, cy, cz)
        const stk = rot.accent ? ACC : INK_HI
        return (
          <g key={idx}>
            <ellipse cx={bsx} cy={bsy} rx={rxE} ry={ryE}
              transform={`rotate(60 ${bsx} ${bsy})`}
              fill={FILL_FRONT} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='3 2' />
            <line x1={bsx + upOffX} y1={bsy + upOffY} x2={fsx + upOffX} y2={fsy + upOffY} stroke={stk} strokeWidth='0.9' />
            <line x1={bsx - upOffX} y1={bsy - upOffY} x2={fsx - upOffX} y2={fsy - upOffY} stroke={stk} strokeWidth='0.9' />
            <ellipse cx={fsx} cy={fsy} rx={rxE} ry={ryE}
              transform={`rotate(60 ${fsx} ${fsy})`}
              fill={FILL_TOP} stroke={stk} strokeWidth={rot.accent ? 1.2 : 0.9} />
            {rot.accent && (
              <circle cx={fsx} cy={fsy} r='2.5' fill={ACC}>
                <animate attributeName='r' values='2;3.5;2' dur='2s' repeatCount='indefinite' />
              </circle>
            )}
          </g>
        )
      })}
    </g>
  )
}

/* L06 — Orchestration: pedestal with sphere + radial spokes */
const renderOrchestration: Seg['render'] = (x0, dx) => {
  const cy = (Y_BACK + Y_FRONT) / 2
  const cx = x0 + dx / 2
  const padZ = Z_RAIL_TOP + 14
  const sphereZ = padZ + 24
  const [sphX, sphY] = iso(cx, cy, sphereZ)
  return (
    <g className='av-seg' style={{ animationDelay: '1.55s' }}>
      {/* pad */}
      {isoBox(x0 + 2, Y_BACK + 6, Z_RAIL_TOP, dx - 4, Y_FRONT - Y_BACK - 12, 14)}
      {/* pedestal */}
      {isoBox(cx - 6, cy - 6, padZ, 12, 12, 22)}
      {/* sphere (drawn as plain circle in screen space) */}
      <circle cx={sphX} cy={sphY} r='10' fill={FILL_TOP} stroke={ACC} strokeWidth='1.2' />
      <circle cx={sphX} cy={sphY} r='3.5' fill={ACC} />
      {/* radial spokes — projected as iso lines in 3D from the sphere outward in XY plane at sphereZ */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * Math.PI * 2
        const nx = cx + Math.cos(a) * 22
        const ny = cy + Math.sin(a) * 22
        const [esx, esy] = iso(nx, ny, sphereZ)
        const isActive = i === 1
        return (
          <g key={i}>
            <line x1={sphX} y1={sphY} x2={esx} y2={esy} stroke={INK_MID} strokeWidth='0.7' strokeDasharray='2 2' />
            <circle cx={esx} cy={esy} r='3' fill={isActive ? ACC : FILL_TOP} stroke={ACC} strokeWidth={isActive ? 0 : 1}>
              {isActive && (
                <animate attributeName='r' values='2.5;4.2;2.5' dur='1.8s'
                  begin={`${i * 0.2}s`} repeatCount='indefinite' />
              )}
            </circle>
            <circle r='1.2' fill={ACC} opacity='0.85'>
              <animateMotion dur={`${3 + i * 0.3}s`} repeatCount='indefinite' begin={`${i * 0.4}s`}
                path={`M ${sphX} ${sphY} L ${esx} ${esy}`} />
              <animate attributeName='opacity' values='0;0.85;0' dur={`${3 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount='indefinite' />
            </circle>
          </g>
        )
      })}
    </g>
  )
}

/* L07 — Data & Insights: long block with hex grid on top face + output port */
const renderData: Seg['render'] = (x0, dx) => {
  return (
    <g className='av-seg' style={{ animationDelay: '1.8s' }}>
      {isoBox(x0, Y_BACK + 4, Z_RAIL_TOP, dx, Y_FRONT - Y_BACK - 8, 22, { accent: true })}
      {/* hex grid engraved on top face */}
      {(() => {
        const ztop = Z_RAIL_TOP + 22
        const hexAt = (cx: number, cy: number, r: number) => {
          const verts: Array<[number, number]> = []
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 - Math.PI / 2
            verts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
          }
          return verts
        }
        const cells = [
          { cx: x0 + 14, cy: Y_BACK + 16, r: 6, acc: false },
          { cx: x0 + 28, cy: Y_BACK + 30, r: 6, acc: true  },
          { cx: x0 + 42, cy: Y_BACK + 16, r: 6, acc: false },
          { cx: x0 + 56, cy: Y_BACK + 30, r: 6, acc: false },
          { cx: x0 + 70, cy: Y_BACK + 16, r: 6, acc: false },
        ]
        return cells.map((c, i) => (
          <g key={i}>
            {topFacePolygon(ztop, hexAt(c.cx, c.cy, c.r), {
              fill: 'none', stroke: c.acc ? ACC : INK_MID, strokeWidth: c.acc ? 1 : 0.7,
            })}
            {(() => {
              const [px, py] = iso(c.cx, c.cy, ztop)
              return <circle cx={px} cy={py} r='1.2' fill={c.acc ? ACC : INK_MID}>
                {c.acc && <animate attributeName='opacity' values='0.3;1;0.3' dur='2.4s' repeatCount='indefinite' />}
              </circle>
            })()}
          </g>
        ))
      })()}
      {/* output port (sticking out the right end) */}
      {isoBox(x0 + dx, Y_BACK + 18, Z_RAIL_TOP + 6, 22, 14, 10)}
    </g>
  )
}

const SEGMENTS: Seg[] = [
  { code: 'L01', name: 'STRATEGY',         sub: 'Futures Studio',        spec: 'AIM · ENTRY POINT',     x0: -260, dx: 60, render: renderStrategy     },
  { code: 'L02', name: 'ARCHITECTURE',     sub: 'TechOffice Foundry',    spec: 'HEX TOWER · M30',       x0: -190, dx: 50, render: renderArchitecture },
  { code: 'L03', name: 'CLOUD',            sub: 'Multi-Cloud Foundation',spec: '3 LAMELLAE · STACKED',  x0: -130, dx: 60, render: renderCloud        },
  { code: 'L04', name: 'DEVELOPMENT',      sub: 'Perpetual Engineering', spec: 'TURBINE · 8-BLADE',     x0:  -60, dx: 90, render: renderDevelopment  },
  { code: 'L05', name: 'PRODUCTIVITY',     sub: 'BizApps & Co-work',     spec: 'DUAL ROTOR · ω₂',       x0:   40, dx: 70, render: renderProductivity },
  { code: 'L06', name: 'ORCHESTRATION',    sub: 'Agent Studio',          spec: 'HUB · 6 SPOKES',        x0:  120, dx: 60, render: renderOrchestration},
  { code: 'L07', name: 'DATA & INSIGHTS',  sub: 'FactWeavers' + '\u2122',spec: 'HEX BUS · OUT.A',       x0:  190, dx: 84, render: renderData         },
]

const X_MIN = SEGMENTS[0].x0
const X_MAX = SEGMENTS[SEGMENTS.length - 1].x0 + SEGMENTS[SEGMENTS.length - 1].dx

/* ─── Leader-line callout — anchored to a fixed text band ─── */
function Callout({ anchor, textX, textY, side, code, name, sub, spec }: {
  anchor: Pt; textX: number; textY: number; side: 'top' | 'bottom';
  code: string; name: string; sub: string; spec: string
}) {
  const horizExtent = side === 'top' ? -22 : 22
  const knee: Pt = [anchor[0] + horizExtent, (anchor[1] + textY) / 2]
  const end: Pt = [textX, textY]
  return (
    <g className='av-callout'>
      <polyline points={`${anchor.join(',')} ${knee.join(',')} ${end.join(',')}`}
        fill='none' stroke={ACC} strokeWidth='0.7' strokeDasharray='3 2' />
      <circle cx={anchor[0]} cy={anchor[1]} r='2.2' fill={ACC} />
      <line x1={end[0] - 18} y1={end[1]} x2={end[0] + 18} y2={end[1]} stroke={ACC} strokeWidth='0.6' />
      <text x={end[0]} y={end[1] - 18} fontFamily='var(--font-mono)' fontSize='9'
        fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='2'>
        {code}
      </text>
      <text x={end[0]} y={end[1] - 4} fontFamily='var(--font-mono)' fontSize='11'
        fontWeight='500' fill='#ffffff' textAnchor='middle' letterSpacing='2'>
        {name}
      </text>
      <text x={end[0]} y={end[1] + 12} fontFamily='var(--font-mono)' fontSize='9'
        fill={ACC} textAnchor='middle' letterSpacing='2'>
        {sub.toUpperCase()}
      </text>
      <text x={end[0]} y={end[1] + 25} fontFamily='var(--font-sans)' fontSize='9'
        fill='rgba(255,255,255,0.42)' textAnchor='middle'>
        {spec}
      </text>
    </g>
  )
}

/* ─── Dimension chain along the front-bottom edge of the rail ─── */
function DimensionChain() {
  const ticks: Array<{ x: number; label?: string }> = [{ x: X_MIN }]
  let total = 0
  SEGMENTS.forEach((s) => {
    ticks.push({ x: s.x0 + s.dx, label: String(s.dx) })
    total += s.dx
  })
  // project each tick to a point just below the front-bottom edge of the rail
  const dimZ = -10 // below the rail
  return (
    <g className='av-dim'>
      {/* dimension extension lines at each tick */}
      {ticks.map((t, i) => {
        const [tx, ty] = iso(t.x, Y_FRONT, 0)
        const [bx, by] = iso(t.x, Y_FRONT, dimZ)
        return (
          <line key={`ext-${i}`} x1={tx} y1={ty} x2={bx} y2={by}
            stroke={INK_LO} strokeWidth='0.5' />
        )
      })}
      {/* horizontal dim line + segment widths */}
      {SEGMENTS.map((s, i) => {
        const [ax, ay] = iso(s.x0, Y_FRONT, dimZ)
        const [bx, by] = iso(s.x0 + s.dx, Y_FRONT, dimZ)
        const mx = (ax + bx) / 2
        const my = (ay + by) / 2
        return (
          <g key={`dim-${i}`}>
            <line x1={ax} y1={ay} x2={bx} y2={by} stroke={INK_MID} strokeWidth='0.5' />
            {/* tick marks at endpoints */}
            <line x1={ax} y1={ay - 3} x2={ax} y2={ay + 3} stroke={INK_MID} strokeWidth='0.5' />
            <line x1={bx} y1={by - 3} x2={bx} y2={by + 3} stroke={INK_MID} strokeWidth='0.5' />
            {/* numeric label */}
            <text x={mx} y={my + 14} fontFamily='var(--font-mono)' fontSize='8.5'
              fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='1.5'>{s.dx}</text>
          </g>
        )
      })}
      {/* total dimension below */}
      {(() => {
        const [ax, ay] = iso(X_MIN, Y_FRONT, dimZ - 30)
        const [bx, by] = iso(X_MAX, Y_FRONT, dimZ - 30)
        const [tax, tay] = iso(X_MIN, Y_FRONT, 0)
        const [tbx, tby] = iso(X_MAX, Y_FRONT, 0)
        return (
          <>
            <line x1={tax} y1={tay} x2={ax} y2={ay} stroke={INK_LO} strokeWidth='0.5' />
            <line x1={tbx} y1={tby} x2={bx} y2={by} stroke={INK_LO} strokeWidth='0.5' />
            <line x1={ax} y1={ay} x2={bx} y2={by} stroke={ACC} strokeWidth='0.7' />
            <line x1={ax} y1={ay - 4} x2={ax} y2={ay + 4} stroke={ACC} strokeWidth='0.7' />
            <line x1={bx} y1={by - 4} x2={bx} y2={by + 4} stroke={ACC} strokeWidth='0.7' />
            <text x={(ax + bx) / 2} y={(ay + by) / 2 + 16} fontFamily='var(--font-mono)' fontSize='10'
              fill={ACC} textAnchor='middle' letterSpacing='2'>Σ = {total}</text>
          </>
        )
      })()}
    </g>
  )
}

/* ─── Height annotation on the back-left side ─── */
function HeightAnnotation() {
  const x = X_MIN - 30
  const y = Y_BACK
  const [ax, ay] = iso(x, y, 0)
  const [bx, by] = iso(x, y, Z_RAIL_TOP)
  const [cx, cy] = iso(x, y, Z_RAIL_TOP + 50)
  const [tax, tay] = iso(X_MIN, y, 0)
  const [tbx, tby] = iso(X_MIN, y, Z_RAIL_TOP)
  const [tcx, tcy] = iso(X_MIN, y, Z_RAIL_TOP + 50)
  return (
    <g className='av-dim'>
      {/* extension lines from device to dim line */}
      <line x1={tax} y1={tay} x2={ax} y2={ay} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='2 2' />
      <line x1={tbx} y1={tby} x2={bx} y2={by} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='2 2' />
      <line x1={tcx} y1={tcy} x2={cx} y2={cy} stroke={INK_LO} strokeWidth='0.5' strokeDasharray='2 2' />
      {/* dim line */}
      <line x1={ax} y1={ay} x2={bx} y2={by} stroke={INK_MID} strokeWidth='0.5' />
      <line x1={bx} y1={by} x2={cx} y2={cy} stroke={INK_MID} strokeWidth='0.5' />
      {/* arrow caps */}
      <line x1={ax - 3} y1={ay} x2={ax + 3} y2={ay} stroke={INK_MID} strokeWidth='0.5' />
      <line x1={bx - 3} y1={by} x2={bx + 3} y2={by} stroke={INK_MID} strokeWidth='0.5' />
      <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke={INK_MID} strokeWidth='0.5' />
      <text x={ax - 6} y={(ay + by) / 2 + 4} fontFamily='var(--font-mono)' fontSize='8.5'
        fill='var(--v20-ink-label)' textAnchor='end' letterSpacing='1.5'>12</text>
      <text x={bx - 6} y={(by + cy) / 2 + 4} fontFamily='var(--font-mono)' fontSize='8.5'
        fill='var(--v20-ink-label)' textAnchor='end' letterSpacing='1.5'>50</text>
    </g>
  )
}

function AlgorithmIso() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} xmlns='http://www.w3.org/2000/svg'
      className='av-svg' role='img' aria-labelledby='av-title av-desc'>
      <title id='av-title'>DBiz AI Transformation Algorithm — Isometric Assembly (V2)</title>
      <desc id='av-desc'>Engineering isometric drawing of the seven-stage AI transformation stack as one machined assembly with leader-line callouts and dimension annotations.</desc>

      <defs>
        <pattern id='av-dot' patternUnits='userSpaceOnUse' width='14' height='14'>
          <circle cx='1' cy='1' r='0.6' fill='var(--v20-ink-dot)' />
        </pattern>
        <radialGradient id='av-scan'>
          <stop offset='0%' stopColor={ACC} stopOpacity='0.65' />
          <stop offset='100%' stopColor={ACC} stopOpacity='0' />
        </radialGradient>
      </defs>

      {/* dotted background */}
      <rect x='8' y='8' width={W - 16} height={H - 16} fill='url(#av-dot)' />

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
        ALGORITHM · ISOMETRIC ASSEMBLY · HUMAN-LED · AGENT-OPERATED · DATA-POWERED
      </text>
      <text x={W - 50} y='34' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label-strong)' textAnchor='end' letterSpacing='1'>SHEET A2 · REV 0.2</text>

      {/* iso reference axes (top-left corner) */}
      {(() => {
        const ox = 70, oy = 110, len = 26
        const ax = (vx: number, vy: number, vz: number) => [ox + (vx - vy) * COS30 * len, oy + (vx + vy) * SIN30 * len - vz * len]
        const xa = ax(1, 0, 0), ya = ax(0, 1, 0), za = ax(0, 0, 1)
        return (
          <g>
            <line x1={ox} y1={oy} x2={xa[0]} y2={xa[1]} stroke={INK_MID} strokeWidth='0.7' />
            <line x1={ox} y1={oy} x2={ya[0]} y2={ya[1]} stroke={INK_MID} strokeWidth='0.7' />
            <line x1={ox} y1={oy} x2={za[0]} y2={za[1]} stroke={ACC} strokeWidth='0.9' />
            <text x={xa[0] + 4} y={xa[1] + 8} fontFamily='var(--font-mono)' fontSize='9' fill={INK_HI}>+X</text>
            <text x={ya[0] - 14} y={ya[1] + 8} fontFamily='var(--font-mono)' fontSize='9' fill={INK_HI}>+Y</text>
            <text x={za[0] - 4} y={za[1] - 4} fontFamily='var(--font-mono)' fontSize='9' fill={ACC}>+Z</text>
            <text x={ox - 6} y={oy - 40} fontFamily='var(--font-mono)' fontSize='8' fill='var(--v20-ink-label)' letterSpacing='1.5'>ISO 30°</text>
          </g>
        )
      })()}

      {/* ground reference grid (very faint) on Z=0 plane */}
      <g opacity='0.35'>
        {Array.from({ length: 11 }).map((_, i) => {
          const x = X_MIN - 20 + i * 30
          const [a0, a1] = iso(x, Y_BACK, 0)
          const [b0, b1] = iso(x, Y_FRONT, 0)
          return <line key={`gx-${i}`} x1={a0} y1={a1} x2={b0} y2={b1} stroke={INK_LO} strokeWidth='0.4' strokeDasharray='1 3' />
        })}
        {Array.from({ length: 4 }).map((_, i) => {
          const y = Y_BACK + i * (Y_FRONT - Y_BACK) / 3
          const [a0, a1] = iso(X_MIN - 20, y, 0)
          const [b0, b1] = iso(X_MAX + 30, y, 0)
          return <line key={`gy-${i}`} x1={a0} y1={a1} x2={b0} y2={b1} stroke={INK_LO} strokeWidth='0.4' strokeDasharray='1 3' />
        })}
      </g>

      {/* the base rail (continuous spine) */}
      <g className='av-rail'>
        {isoBox(X_MIN, Y_BACK, 0, X_MAX - X_MIN, Y_FRONT - Y_BACK, RAIL_HEIGHT, { stroke: INK_HI, sw: 1.1 })}
        {/* orange chamfer along the front-top edge of the rail (the visible "spine") */}
        {(() => {
          const a = iso(X_MIN, Y_FRONT, RAIL_HEIGHT)
          const b = iso(X_MAX, Y_FRONT, RAIL_HEIGHT)
          return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={ACC} strokeWidth='1.2' opacity='0.85' />
        })()}
      </g>

      {/* segments */}
      {SEGMENTS.map((s) => (
        <g key={s.code}>{s.render(s.x0, s.dx)}</g>
      ))}

      {/* dimension chain along the front bottom */}
      <DimensionChain />
      <HeightAnnotation />

      {/* leader-line callouts — split across two horizontal bands above & below the device */}
      {(() => {
        // alternating top/bottom band: L01 top, L02 bottom, L03 top, L04 bottom, L05 top, L06 bottom, L07 top
        const TOP_Y = 200
        const BOT_Y = 720
        const sides: Array<'top' | 'bottom'> = ['top', 'bottom', 'top', 'bottom', 'top', 'bottom', 'top']
        const topIndices = sides.map((s, i) => s === 'top' ? i : -1).filter(i => i >= 0)
        const botIndices = sides.map((s, i) => s === 'bottom' ? i : -1).filter(i => i >= 0)
        // Distribute text X positions evenly across the canvas width with margins
        const topXs = topIndices.map((_, k) => 220 + k * ((W - 440) / (topIndices.length - 1)))
        const botXs = botIndices.map((_, k) => 280 + k * ((W - 560) / (botIndices.length - 1)))
        const tops = [42, 38, 30, 50, 32, 60, 28]
        return SEGMENTS.map((s, i) => {
          const cy = (Y_BACK + Y_FRONT) / 2
          const cx = s.x0 + s.dx / 2
          const anchor = iso(cx, cy, Z_RAIL_TOP + tops[i])
          const side = sides[i]
          const textY = side === 'top' ? TOP_Y : BOT_Y
          const textX = side === 'top'
            ? topXs[topIndices.indexOf(i)]
            : botXs[botIndices.indexOf(i)]
          return (
            <Callout key={s.code} anchor={anchor} textX={textX} textY={textY} side={side}
              code={s.code} name={s.name} sub={s.sub} spec={s.spec} />
          )
        })
      })()}

      {/* scan glow sweeps along the device axis */}
      <circle r='44' fill='url(#av-scan)' opacity='0.7'>
        <animateMotion dur='10s' repeatCount='indefinite'
          path={`M ${iso(X_MIN, (Y_BACK + Y_FRONT) / 2, Z_RAIL_TOP).join(' ')} L ${iso(X_MAX, (Y_BACK + Y_FRONT) / 2, Z_RAIL_TOP).join(' ')}`} />
      </circle>

      {/* footer */}
      <text x={W / 2} y={H - 26} fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label-strong)' textAnchor='middle' letterSpacing='2'>
        DWG-ALG-02  ·  ISOMETRIC ASSEMBLY  ·  REV 0.2
      </text>
    </svg>
  )
}

export default function AlgorithmV2Page() {
  return (
    <main className='av-page'>
      <style>{`
        .av-page {
          min-height: 100vh;
          background: var(--v20-paper);
          color: var(--v20-ink);
          padding: 96px clamp(16px, 5vw, 48px) 64px;
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 5vw, 56px);
        }
        .av-head {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .av-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 3px;
          color: var(--v20-accent);
          text-transform: uppercase;
        }
        .av-title {
          font-family: var(--font-sans);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          line-height: 1.08;
          margin: 0;
        }
        .av-title em {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--v20-accent);
        }
        .av-lead {
          font-size: 1.05rem;
          color: var(--v20-ink-2);
          line-height: 1.6;
          margin: 0;
          max-width: 640px;
          margin-inline: auto;
        }
        .av-frame {
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
        .av-svg {
          min-width: 960px;
          width: 100%;
          height: auto;
          display: block;
        }

        .av-rail, .av-seg, .av-dim, .av-callout {
          opacity: 0;
          animation: av-in 0.7s ease-out forwards;
        }
        .av-rail { animation-delay: 0.05s; }
        .av-dim { animation-delay: 1.2s; }
        .av-callout { animation-delay: 1.6s; }
        @keyframes av-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .av-page { padding-top: 56px; padding-bottom: 40px; }
          .av-kicker { font-size: 10px; letter-spacing: 2px; }
          .av-lead { font-size: 0.95rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .av-page * {
            animation-duration: 0s !important;
            animation-iteration-count: 1 !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <header className='av-head'>
        <span className='av-kicker'>DWG-ALG-02 · The Algorithm — Isometric</span>
        <h1 className='av-title'>
          The same seven parts. <em>Now milled.</em>
        </h1>
        <p className='av-lead'>
          The DBiz AI transformation stack rendered in true 30° isometric — a single machined assembly with leader-line callouts, dimension chain, and reference axes. One part, seven features.
        </p>
      </header>

      <div className='av-frame'>
        <AlgorithmIso />
      </div>
    </main>
  )
}
