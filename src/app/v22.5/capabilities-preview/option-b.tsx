'use client'

/* Option B — Scroll-cascade.
   As you scroll through the section, each capability pins to the top in turn.
   Left column (sticky heading + paragraph) updates per active slice.
   Right column scrolls through 7 stacked "layer" panels. */

import { useEffect, useRef, useState } from 'react'
import { capabilities } from './data'

export function OptionB() {
  const [active, setActive] = useState(0)
  const panelsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const panels = panelsRef.current.filter(Boolean)
    if (!panels.length) return

    const io = new IntersectionObserver(
      (entries) => {
        // Find the panel closest to the center of viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          const idx = panels.indexOf(visible[0].target as HTMLDivElement)
          if (idx >= 0) setActive(idx)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    panels.forEach((p) => io.observe(p))
    return () => io.disconnect()
  }, [])

  const c = capabilities[active]

  return (
    <section className='v22-section' id='cap-b'>
      <div className='v22-container'>
        <div className='v22-section-head'>
          <div className='num'>Option B / Scroll cascade</div>
          <h2>Watch the stack<br /><span style={{ color: 'var(--v22-accent)' }}>assemble.</span></h2>
          <p className='lead'>Each layer lands as you scroll. Sticky copy on the left updates per layer. Clear "every layer covered" payoff.</p>
        </div>

        <div className='capB-grid'>
          <aside className='capB-sticky'>
            <div className='capB-progress' aria-hidden='true'>
              <div className='capB-progress-bar' style={{ height: `${((active + 1) / capabilities.length) * 100}%` }} />
            </div>
            <div className='capB-sticky-inner' key={active}>
              <div className='capB-sticky-num'>L{c.num}</div>
              <div className='capB-sticky-kicker'>{c.kicker.toUpperCase()}</div>
              <h3 className='capB-sticky-title'>{c.title}</h3>
              <p className='capB-sticky-body'>{c.body}</p>
              <div className='capB-sticky-tags'>
                {c.tags.slice(0, 4).map((t) => (
                  <span key={t} className='capB-tag'>{t}</span>
                ))}
              </div>
              <a href='#' className='capB-sticky-cta'>{c.cta} →</a>
            </div>
          </aside>

          <div className='capB-panels'>
            {capabilities.map((cap, i) => (
              <div
                key={cap.num}
                ref={(el) => {
                  if (el) panelsRef.current[i] = el
                }}
                className={`capB-panel ${i === active ? 'is-active' : ''}`}
                data-layer={i}
              >
                <div className='capB-panel-head'>
                  <span className='capB-panel-num'>L{cap.num}</span>
                  <span className='capB-panel-kicker'>{cap.kicker}</span>
                </div>
                <h4 className='capB-panel-title'>{cap.title}</h4>
                <p className='capB-panel-sub'>{cap.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
