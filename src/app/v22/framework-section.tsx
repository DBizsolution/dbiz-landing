'use client'

/* V22 — N°04 How we do it.
   AI Transformation Stack — Deconstructed Assembly (ported from v20).
   Illustration shows the 7 discs + shaft + labels. The offerings and
   accelerators for each layer live in a card grid below the diagram. */

import { useEffect, useRef, useState } from 'react'

type Side = { name: string; desc: string }
type Layer = { n: string; label: string; top: Side; bottom: Side }

/* Force text onto exactly 2 balanced lines. Splits at the word midpoint so
   both lines are similar lengths; single-word strings render alone (min-height
   in CSS reserves the second-line space). */
function TwoLine({ text }: { text: string }) {
  const words = text.split(' ')
  if (words.length <= 1) return <>{text}</>
  const mid = Math.ceil(words.length / 2)
  return (
    <>
      {words.slice(0, mid).join(' ')}
      <br />
      {words.slice(mid).join(' ')}
    </>
  )
}
const TwoLineName = ({ name }: { name: string }) => <TwoLine text={name} />

// Order: left-to-right — Strategy (01) first, Data (07) last
const layers: Layer[] = [
  { n: '01', label: 'STRATEGY',
    top:    { name: 'Futures Studio', desc: 'AI ambition, roadmap & use-case prioritisation' },
    bottom: { name: 'DBiz Canvas',    desc: 'Concept to code in days' } },
  { n: '02', label: 'ARCHITECTURE',
    top:    { name: 'TechOffice Foundry', desc: 'AI foundation & Well-Architected review' },
    bottom: { name: 'DBiz Adapt',         desc: 'Architecting Secure and Sovereign AI' } },
  { n: '03', label: 'CLOUD',
    top:    { name: 'Hyperscaler AI Foundations', desc: 'Enterprise AI Foundation rollout' },
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
    top:    { name: 'DBiz Data Compass', desc: 'AI-infused data engineering' },
    bottom: { name: 'Factweavers.ai',    desc: 'Domain data cloud & quick insights' } },
]

/* Round trig outputs to a fixed precision so SSR and CSR serialize identically
   (avoids hydration mismatches on Math.cos/Math.sin last-digit drift). */
const r4 = (n: number) => Math.round(n * 10000) / 10000

/* Per-layer inner shape renderer — duotone: grey structure + orange accents.
   Hoisted to module scope so both the main StackDiagram and per-card MiniDisc
   can use it. */
function renderShape(i: number, cx: number, cy: number) {
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
              const x1 = r4(cx + Math.cos(a) * 32)
              const y1 = r4(cy + Math.sin(a) * 32)
              const x2 = r4(cx + Math.cos(a) * 44)
              const y2 = r4(cy + Math.sin(a) * 44)
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
              const nx = r4(cx + Math.cos(a) * 38)
              const ny = r4(cy + Math.sin(a) * 38)
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
              return <circle key={idx} cx={r4(cx + Math.cos(r) * 36)} cy={r4(cy + Math.sin(r) * 36)} r='2.2' fill={acc} />
            })}
            {[30, 90, 150, 210, 270, 330].map((a, idx) => {
              const r = (a - 90) * Math.PI / 180
              return <line key={idx} x1={cx} y1={cy} x2={r4(cx + Math.cos(r) * 24)} y2={r4(cy + Math.sin(r) * 24)} stroke={ink} strokeWidth='0.5' strokeDasharray='1.5 1.5' />
            })}
            <circle cx={cx} cy={cy} r='3' fill={acc} />
          </g>
        )
      }
      default:
        return null
    }
}

/* Mini per-card disc (shown only on narrow viewports — keeps the icon at a
   sensible "normal" size regardless of how wide the scroller stretches). */
export function MiniDisc({ i }: { i: number }) {
  const cx = 80
  const cy = 80
  const r = 60
  return (
    <svg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg' className='v22-fw-mini-disc' aria-hidden='true'>
      <defs>
        <pattern id={`v22-mini-grid-${i}`} patternUnits='userSpaceOnUse' width='12' height='12'>
          <path d='M 12 0 L 0 0 0 12' fill='none' stroke='rgba(255,255,255,0.14)' strokeWidth='0.6' />
        </pattern>
      </defs>
      <rect x={cx - r} y={cy - r} width={r * 2} height={r * 2} stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' strokeDasharray='4 3' fill='var(--brand-navy-deep)' fillOpacity='0.85' />
      <rect x={cx - r + 6} y={cy - r + 6} width={(r - 6) * 2} height={(r - 6) * 2} stroke='rgba(255,255,255,0.16)' strokeWidth='0.6' fill='none' />
      <rect x={cx - r + 13} y={cy - r + 13} width={(r - 13) * 2} height={(r - 13) * 2} stroke='rgba(255,255,255,0.12)' strokeWidth='0.4' strokeDasharray='1.5 2' fill='none' />
      <rect x={cx - r + 14} y={cy - r + 14} width={(r - 14) * 2} height={(r - 14) * 2} fill={`url(#v22-mini-grid-${i})`} />
      {renderShape(i, cx, cy)}
    </svg>
  )
}

/* ─── Stack Diagram SVG — Deconstructed Assembly (machine reference) ─── */
function StackDiagram({ hovered, onHover }: { hovered: number; onHover: (i: number) => void }) {
  const svgW = 1400
  const svgH = 360
  const shaftY = 200
  const discR = 84
  const discCenters = [100, 300, 500, 700, 900, 1100, 1300]
  const layerNameY = shaftY + discR + 24    // below disc

  const inkCorner = 'rgba(240,123,47,0.5)'

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

      {/* Orange dot background */}
      <rect x='8' y='8' width={svgW - 16} height={svgH - 16} fill='url(#v22-fw-ex-dot)' />

      {/* Top-strip text moved to HTML so it can wrap responsively on mobile. */}

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
        const isActive = i === hovered
        return (
          <g
            key={layer.n}
            className={`v22-fw-stack-layer ${isActive ? 'is-active' : ''}`}
            style={{ '--layer-index': i, transformOrigin: `${cx}px ${shaftY}px`, cursor: 'pointer' } as React.CSSProperties}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(-1)}
          >
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

            {/* Connector — dashed line + orange dot, from layer name down to the card */}
            <line x1={cx} y1={layerNameY + 8} x2={cx} y2={svgH - 4} stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' strokeDasharray='3 3' className='v22-fw-stack-connector' />
            <circle cx={cx} cy={svgH - 4} r='2.8' fill='var(--v22-accent)' className='v22-fw-stack-dot' />
          </g>
        )
      })}

    </svg>
  )
}

export default function FrameworkSection() {
  const [hovered, setHovered] = useState(-1)
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)
  const cardsRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardsRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* Track the card currently centred in the scroller so the pagination
     indicator stays in sync on mobile. */
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const scrollL = scroller.scrollLeft
        const w = scroller.clientWidth
        // closest column center to viewport center
        const idx = Math.round((scrollL + w / 2) / w - 0.5)
        setCurrent(Math.max(0, Math.min(layers.length - 1, idx)))
      })
    }
    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      scroller.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const scrollToCard = (i: number) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    scroller.scrollTo({ left: i * scroller.clientWidth, behavior: 'smooth' })
  }

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

        <div className='v22-fw-top-strip' aria-hidden='true'>
          <span className='v22-fw-top-code'>SCALE 1:1</span>
          <span className='v22-fw-top-promise'>FULL STACK · NO CAPABILITY GAPS · NO VENDOR LOCK-IN</span>
          <span className='v22-fw-top-code'>SHEET A1</span>
        </div>

        <div className='v22-fw-scroller' ref={scrollerRef}>
        <div className='v22-fw-diagram-wrap'>
          <StackDiagram hovered={hovered} onHover={setHovered} />
        </div>

        <div
          ref={cardsRef}
          className={`v22-fw-cards ${visible ? 'is-visible' : ''} ${hovered >= 0 ? 'has-hover' : ''}`}
          aria-label='Stack layers — offerings and accelerators'
        >
          {layers.map((layer, i) => (
            <article
              key={layer.n}
              className={`v22-fw-card ${hovered === i ? 'is-active' : ''}`}
              style={{
                ['--card-i' as string]: i,
                ['--card-delay' as string]: `${Math.abs(i - 3) * 80}ms`,
              } as React.CSSProperties}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(-1)}
              tabIndex={0}
              aria-label={`${layer.label} — ${layer.top.name}, accelerated by ${layer.bottom.name}`}
            >
              <div className='v22-fw-card-mini' aria-hidden='true'>
                <MiniDisc i={i} />
                <div className='v22-fw-card-layer'>L{layer.n} · {layer.label}</div>
              </div>
              <div className='v22-fw-card-item'>
                <div className='v22-fw-card-name'><TwoLine text={layer.top.name} /></div>
                <p className='v22-fw-card-desc'><TwoLine text={layer.top.desc} /></p>
              </div>
              <span className='v22-fw-card-link' aria-hidden='true' />
              <div className='v22-fw-card-item'>
                <div className='v22-fw-card-kicker'>Accelerator</div>
                <div className='v22-fw-card-name'><TwoLine text={layer.bottom.name} /></div>
                <p className='v22-fw-card-desc'><TwoLine text={layer.bottom.desc} /></p>
              </div>
            </article>
          ))}
        </div>
        </div>

        <div className='v22-fw-pagination' role='tablist' aria-label='Layer navigation'>
          {layers.map((l, i) => (
            <button
              key={l.n}
              type='button'
              role='tab'
              aria-selected={current === i}
              aria-label={`Go to ${l.label}`}
              className={`v22-fw-dot ${current === i ? 'is-active' : ''}`}
              onClick={() => scrollToCard(i)}
            >
              <span className='v22-fw-dot-idx'>{l.n}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
