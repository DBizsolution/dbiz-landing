'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const reasons = [
  { idx: '01', label: 'EXPERTISE',  meta: 'DWG · 08-01', title: 'Expertise that works together.',     body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos.' },
  { idx: '02', label: 'SCALE',      meta: 'DWG · 08-02', title: 'Transformation at scale.',            body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.' },
  { idx: '03', label: 'DELIVERY',   meta: 'DWG · 08-03', title: 'Time-boxed delivery.',                body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don’t allow it.' },
  { idx: '04', label: 'PLATFORMS',  meta: 'DWG · 08-04', title: 'Production platforms.',               body: 'NEXUS, Agent Studio, FactWeavers™, DBiz Canvas — production systems deployed in enterprise environments.' },
  { idx: '05', label: 'PARTNERS',   meta: 'DWG · 08-05', title: 'Certified at the highest tiers.',     body: 'AWS Advanced, Azure Solutions, Salesforce, Dynamics 365, Snowflake, Databricks, Anthropic, Boomi, MuleSoft.' },
  { idx: '06', label: 'DOMAIN',     meta: 'DWG · 08-06', title: 'Sector expertise, engineered.',       body: 'Financial Services, Logistics, Real Estate, Aged Care, Automotive, Government — with FactWeavers™ pre-built for every vertical.' },
]

/* Six schematic glyphs. Each one has a CSS-driven "signature animation" tied
   to its meaning that fires when the parent card becomes the active snap-card.
   The hover state replays the same animation for non-snap interactions. */
function CardGlyph({ i }: { i: number }) {
  const acc = '#F07B2F'
  const ink = 'rgba(13,27,62,0.55)'
  const dim = 'rgba(13,27,62,0.32)'
  switch (i) {
    case 0: // EXPERTISE — compass with rotating bezel + lock-on dot
      return (
        <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-why-glyph-svg g0'>
          <g className='g-compass-bezel'>
            <circle cx='60' cy='60' r='52' fill='none' stroke={dim} strokeWidth='0.7' strokeDasharray='1.5 2.5' />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, k) => {
              const rad = (a * Math.PI) / 180
              const x1 = 60 + Math.cos(rad) * 48
              const y1 = 60 + Math.sin(rad) * 48
              const x2 = 60 + Math.cos(rad) * (k % 3 === 0 ? 56 : 52)
              const y2 = 60 + Math.sin(rad) * (k % 3 === 0 ? 56 : 52)
              return <line key={k} x1={x1.toFixed(2)} y1={y1.toFixed(2)} x2={x2.toFixed(2)} y2={y2.toFixed(2)} stroke={dim} strokeWidth='0.8' />
            })}
          </g>
          <circle className='g-ring g-ring-mid' cx='60' cy='60' r='34' fill='none' stroke={ink} strokeWidth='1' />
          <circle className='g-ring g-ring-in' cx='60' cy='60' r='18' fill='none' stroke={acc} strokeWidth='1.4' />
          <line className='g-cross' x1='4'   y1='60' x2='14'  y2='60' stroke={ink} strokeWidth='0.9' />
          <line className='g-cross' x1='106' y1='60' x2='116' y2='60' stroke={ink} strokeWidth='0.9' />
          <line className='g-cross' x1='60'  y1='4'  x2='60'  y2='14' stroke={ink} strokeWidth='0.9' />
          <line className='g-cross' x1='60'  y1='106' x2='60' y2='116' stroke={ink} strokeWidth='0.9' />
          <circle className='g-dot' cx='60' cy='60' r='3.2' fill={acc} />
        </svg>
      )
    case 1: // SCALE — concentric hexes + sonar pulse
      return (
        <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-why-glyph-svg g1'>
          <circle className='g-sonar g-sonar-1' cx='60' cy='60' r='22' fill='none' stroke={acc} strokeWidth='0.9' opacity='0' />
          <circle className='g-sonar g-sonar-2' cx='60' cy='60' r='22' fill='none' stroke={acc} strokeWidth='0.7' opacity='0' />
          {[48, 32, 18].map((r, k) => {
            const pts = [0, 60, 120, 180, 240, 300].map(a => {
              const rad = ((a - 30) * Math.PI) / 180
              return `${(60 + Math.cos(rad) * r).toFixed(2)},${(60 + Math.sin(rad) * r).toFixed(2)}`
            }).join(' ')
            return (
              <polygon
                key={k}
                className={`g-hex g-hex-${k}`}
                points={pts}
                fill='none'
                stroke={k === 2 ? acc : ink}
                strokeWidth={k === 2 ? 1.5 : 1}
                strokeDasharray={k === 0 ? '3 2.5' : undefined}
              />
            )
          })}
          {[0, 60, 120, 180, 240, 300].map((a, k) => {
            const rad = ((a - 30) * Math.PI) / 180
            return (
              <circle
                key={k}
                className={`g-vtx g-vtx-${k}`}
                cx={(60 + Math.cos(rad) * 48).toFixed(2)}
                cy={(60 + Math.sin(rad) * 48).toFixed(2)}
                r='1.6'
                fill={dim}
              />
            )
          })}
          <circle className='g-dot' cx='60' cy='60' r='3' fill={acc} />
        </svg>
      )
    case 2: // DELIVERY — calibrated timeline with advancing arrow
      return (
        <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-why-glyph-svg g2'>
          <rect x='12' y='52' width='96' height='16' fill='none' stroke={ink} strokeWidth='1' />
          {Array.from({ length: 11 }).map((_, k) => {
            const x = 12 + k * 9.6
            const major = k % 2 === 0
            return (
              <line
                key={k}
                className={`g-tick g-tick-${k}`}
                x1={x.toFixed(2)}
                y1='52'
                x2={x.toFixed(2)}
                y2={major ? '74' : '60'}
                stroke={major ? ink : dim}
                strokeWidth={major ? '0.9' : '0.6'}
              />
            )
          })}
          <text x='14' y='86' fontFamily='var(--font-mono)' fontSize='8' fill={dim} letterSpacing='0.5'>00</text>
          <text x='54' y='86' fontFamily='var(--font-mono)' fontSize='8' fill={dim} letterSpacing='0.5'>45</text>
          <text x='94' y='86' fontFamily='var(--font-mono)' fontSize='8' fill={dim} letterSpacing='0.5'>90</text>
          <text x='52' y='40' fontFamily='var(--font-mono)' fontSize='8' fontWeight='600' fill={acc} letterSpacing='1'>DAYS</text>
          <g className='g-arrow-track'>
            <path className='g-arrow' d='M 18 60 L 36 60 M 32 56 L 36 60 L 32 64' fill='none' stroke={acc} strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
          </g>
          <circle className='g-target' cx='102' cy='60' r='3.2' fill='none' stroke={acc} strokeWidth='1.4' />
          <circle className='g-target-dot' cx='102' cy='60' r='1.4' fill={acc} />
        </svg>
      )
    case 3: // PLATFORMS — stack assembly, layers settle in
      return (
        <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-why-glyph-svg g3'>
          <line x1='20' y1='14' x2='20' y2='106' stroke={dim} strokeWidth='0.5' strokeDasharray='1 2' />
          <line x1='100' y1='14' x2='100' y2='106' stroke={dim} strokeWidth='0.5' strokeDasharray='1 2' />
          {[0, 1, 2, 3, 4].map(k => (
            <rect
              key={k}
              className={`g-layer g-layer-${k}`}
              x='24'
              y={26 + k * 14}
              width='72'
              height='10'
              fill='none'
              stroke={k === 2 ? acc : ink}
              strokeWidth={k === 2 ? 1.4 : 0.9}
            />
          ))}
          {[0, 1, 2, 3, 4].map(k => (
            <circle
              key={k}
              className={`g-port g-port-${k}`}
              cx='102'
              cy={31 + k * 14}
              r='1.6'
              fill={k === 2 ? acc : dim}
            />
          ))}
          <text x='24' y='22' fontFamily='var(--font-mono)' fontSize='6.5' fill={dim} letterSpacing='0.5'>STACK A</text>
          <text x='80' y='22' fontFamily='var(--font-mono)' fontSize='6.5' fill={dim} letterSpacing='0.5'>v.07</text>
        </svg>
      )
    case 4: // PARTNERS — hub + four nodes with sequential ping
      return (
        <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-why-glyph-svg g4'>
          <circle className='g-ping g-ping-1' cx='60' cy='60' r='22' fill='none' stroke={acc} strokeWidth='1' opacity='0' />
          <circle className='g-ping g-ping-2' cx='60' cy='60' r='22' fill='none' stroke={acc} strokeWidth='0.7' opacity='0' />
          {[[24, 28], [96, 28], [24, 92], [96, 92]].map(([x, y], k) => (
            <g key={k} className={`g-node g-node-${k}`}>
              <line x1='60' y1='60' x2={x} y2={y} stroke={ink} strokeWidth='0.8' strokeDasharray='2.5 2.5' />
              <circle cx={x} cy={y} r='6' fill='none' stroke={ink} strokeWidth='1' />
              <circle cx={x} cy={y} r='2.4' fill={dim} className='g-node-core' />
            </g>
          ))}
          <circle className='g-hub' cx='60' cy='60' r='12' fill={acc} fillOpacity='0.16' stroke={acc} strokeWidth='1.4' />
          <circle className='g-dot' cx='60' cy='60' r='3.4' fill={acc} />
        </svg>
      )
    case 5: // DOMAIN — 3×3 raster, cells light in scan order
    default:
      return (
        <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-why-glyph-svg g5'>
          <text x='10' y='30' fontFamily='var(--font-mono)' fontSize='6' fill={dim} letterSpacing='0.5'>A</text>
          <text x='10' y='60' fontFamily='var(--font-mono)' fontSize='6' fill={dim} letterSpacing='0.5'>B</text>
          <text x='10' y='90' fontFamily='var(--font-mono)' fontSize='6' fill={dim} letterSpacing='0.5'>C</text>
          <text x='32' y='14' fontFamily='var(--font-mono)' fontSize='6' fill={dim} letterSpacing='0.5'>1</text>
          <text x='62' y='14' fontFamily='var(--font-mono)' fontSize='6' fill={dim} letterSpacing='0.5'>2</text>
          <text x='92' y='14' fontFamily='var(--font-mono)' fontSize='6' fill={dim} letterSpacing='0.5'>3</text>
          {[0, 1, 2].map(row =>
            [0, 1, 2].map(col => {
              const x = 24 + col * 28
              const y = 22 + row * 28
              const idx = row * 3 + col
              const isCenter = row === 1 && col === 1
              return (
                <rect
                  key={`${row}-${col}`}
                  className={`g-cell g-cell-${idx}`}
                  x={x}
                  y={y}
                  width='22'
                  height='22'
                  fill={isCenter ? acc : 'none'}
                  stroke={ink}
                  strokeWidth='1'
                />
              )
            })
          )}
        </svg>
      )
  }
}

/* Count-up animated number (mono numerals). Respects reduced motion. */
function CountUp({ target, visible, durationMs = 900 }: { target: number; visible: boolean; durationMs?: number }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!visible) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, target, durationMs])
  return <span>{String(value).padStart(2, '0')}</span>
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, visible }
}

export default function WhySection() {
  const { ref: revealRef, visible } = useReveal<HTMLDivElement>()
  const railRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)

  // Track which card is most centered as the rail scrolls.
  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    let raf = 0
    const compute = () => {
      const railRect = rail.getBoundingClientRect()
      const railCx = railRect.left + railRect.width / 2
      const cards = rail.querySelectorAll<HTMLElement>('.v22-why-card')
      let bestIdx = 0
      let bestDist = Infinity
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const d = Math.abs(cx - railCx)
        if (d < bestDist) { bestDist = d; bestIdx = i }
      })
      setActive(bestIdx)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(compute)
    }
    compute()
    rail.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      rail.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  const scrollTo = useCallback((i: number) => {
    const rail = railRef.current
    if (!rail) return
    const cards = rail.querySelectorAll<HTMLElement>('.v22-why-card')
    const target = cards[Math.max(0, Math.min(reasons.length - 1, i))]
    if (!target) return
    const railRect = rail.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const delta = (targetRect.left + targetRect.width / 2) - (railRect.left + railRect.width / 2)
    rail.scrollBy({ left: delta, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      console.log('%cDBiz.ai %c· SECTION B · WHY %c[DWG·WHY-02]',
        'font:600 12px var(--font-mono,monospace);color:#F07B2F',
        'font:500 11px var(--font-mono,monospace);color:#0D1B3E',
        'font:500 11px var(--font-mono,monospace);color:#0D1B3E;opacity:.5')
    } catch {}
  }, [])

  const progress = reasons.length > 1 ? active / (reasons.length - 1) : 0

  return (
    <section className='v22-section' id='about' data-surface='light'>
      <div className='v22-container'>
        <div className='v22-why-head' ref={revealRef}>
          <div className='num'>N°08 / Why DBiz</div>
          <h2>Why enterprises choose <em>DBiz.</em></h2>
          <p className='lead'>Six differentiators — all evidenced by delivery, not brochures.</p>
        </div>

        <div className={`v22-why-rail-wrap ${visible ? 'is-visible' : ''}`}>
          <div className='v22-why-rail' ref={railRef} role='region' aria-label='DBiz differentiators'>
            {reasons.map((r, i) => (
              <article
                key={r.idx}
                className={`v22-why-card v22-why-paper-${i} ${active === i ? 'is-active' : ''}`}
                style={{ ['--why-delay' as string]: `${i * 90}ms` } as React.CSSProperties}
                tabIndex={0}
                aria-current={active === i ? 'true' : undefined}
                aria-label={`${r.label} — ${r.title}`}
                onFocus={() => scrollTo(i)}
              >
                <span className='v22-why-card-corner tl' aria-hidden='true' />
                <span className='v22-why-card-corner tr' aria-hidden='true' />
                <span className='v22-why-card-corner bl' aria-hidden='true' />
                <span className='v22-why-card-corner br' aria-hidden='true' />

                <div className='v22-why-card-stage' aria-hidden='true'>
                  <span className='v22-why-card-guide v-line' />
                  <span className='v22-why-card-guide h-line' />
                  <CardGlyph i={i} />
                </div>

                <div className='v22-why-card-meta'>
                  <span className='v22-why-card-idx'>
                    <CountUp target={Number(r.idx)} visible={visible} durationMs={700 + i * 80} />
                  </span>
                  <span className='v22-why-card-label'>{r.label}</span>
                </div>

                <div className='v22-why-card-rule' aria-hidden='true' />

                <h3 className='v22-why-card-title'>{r.title}</h3>
                <p className='v22-why-card-body'>{r.body}</p>

                <span className='v22-why-card-foot'>{r.meta}</span>
              </article>
            ))}
          </div>

          <div className='v22-why-rail-fade v22-why-rail-fade-l' aria-hidden='true' />
          <div className='v22-why-rail-fade v22-why-rail-fade-r' aria-hidden='true' />
        </div>

        <div className='v22-why-controls'>
          <button
            className='v22-why-nav'
            type='button'
            onClick={() => scrollTo(active - 1)}
            disabled={active === 0}
            aria-label='Previous differentiator'
          >
            <svg viewBox='0 0 24 24' aria-hidden='true'><path d='M15 5 L7 12 L15 19' fill='none' stroke='currentColor' strokeWidth='1.4' strokeLinecap='square' strokeLinejoin='miter' /></svg>
          </button>

          <div className='v22-why-progress' aria-hidden='true'>
            <div className='v22-why-progress-fill' style={{ transform: `scaleX(${progress})` }} />
            <div className='v22-why-progress-stops'>
              {reasons.map((_, i) => (
                <button
                  key={i}
                  type='button'
                  className={`v22-why-progress-dot ${active >= i ? 'is-passed' : ''} ${active === i ? 'is-current' : ''}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Jump to differentiator ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            className='v22-why-nav'
            type='button'
            onClick={() => scrollTo(active + 1)}
            disabled={active === reasons.length - 1}
            aria-label='Next differentiator'
          >
            <svg viewBox='0 0 24 24' aria-hidden='true'><path d='M9 5 L17 12 L9 19' fill='none' stroke='currentColor' strokeWidth='1.4' strokeLinecap='square' strokeLinejoin='miter' /></svg>
          </button>

          <span className='v22-why-counter'>
            <span className='v22-why-counter-now'>{String(active + 1).padStart(2, '0')}</span>
            <span className='v22-why-counter-sep'>/</span>
            <span className='v22-why-counter-total'>{String(reasons.length).padStart(2, '0')}</span>
          </span>
        </div>
      </div>
    </section>
  )
}
