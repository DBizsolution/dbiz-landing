'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { InlineSvg } from '@/components/inline-svg'
import {
  whyGlyph01Expertise,
  whyGlyph02Scale,
  whyGlyph03Delivery,
  whyGlyph04Platforms,
  whyGlyph05Partners,
  whyGlyph06Domain,
} from '@/lib/svg-assets'

const reasons = [
  { idx: '01', label: 'EXPERTISE',  meta: 'DWG · 08-01', title: 'Expertise that works together.',     body: 'Strategy, cloud, data, platforms, product, design, operations — our teams work across every layer, not within silos.' },
  { idx: '02', label: 'SCALE',      meta: 'DWG · 08-02', title: 'Transformation at scale.',            body: '50+ enterprise clients. 150+ AI solutions. Six countries. Over a decade of enterprise delivery — not a pitch deck.' },
  { idx: '03', label: 'DELIVERY',   meta: 'DWG · 08-03', title: 'Time-boxed delivery.',                body: 'Outcomes within defined timeframes. Ambiguity is the enemy of delivery — so we don’t allow it.' },
  { idx: '04', label: 'PLATFORMS',  meta: 'DWG · 08-04', title: 'Production platforms.',               body: 'NEXUS, Agent Studio, FactWeavers™, DBiz Canvas — production systems deployed in enterprise environments.' },
  { idx: '05', label: 'PARTNERS',   meta: 'DWG · 08-05', title: 'Certified at the highest tiers.',     body: 'AWS Advanced, Azure Solutions, Salesforce, Dynamics 365, Snowflake, Databricks, Anthropic, Boomi, MuleSoft.' },
  { idx: '06', label: 'DOMAIN',     meta: 'DWG · 08-06', title: 'Sector expertise, engineered.',       body: 'Financial Services, Logistics, Real Estate, Aged Care, Automotive, Government — with FactWeavers™ pre-built for every vertical.' },
]

/* Six schematic glyphs — file-based assets (public/assets/svg) injected
   inline so the active-card recolors and signature animations in theme.css
   keep working. */
const cardGlyphs = [
  whyGlyph01Expertise,
  whyGlyph02Scale,
  whyGlyph03Delivery,
  whyGlyph04Platforms,
  whyGlyph05Partners,
  whyGlyph06Domain,
]

function CardGlyph({ i }: { i: number }) {
  return <InlineSvg markup={cardGlyphs[i]} />
}

/* Count-up animated number (mono numerals). Respects reduced motion. */
function CountUp({ target, visible, durationMs = 900 }: { target: number; visible: boolean; durationMs?: number }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!visible) return
    let raf = 0
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      raf = requestAnimationFrame(() => setValue(target))
      return () => cancelAnimationFrame(raf)
    }
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
