'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "DBiz didn\u2019t sell us a roadmap. They delivered one \u2014 with the system live in production while the rest of the market was still running POCs.",
    name: 'Priya Nair',
    role: 'Chief Data & AI Officer',
    company: 'Southern Cross Logistics',
  },
  {
    quote: "We went from a six-month data clean-up estimate to production-ready FactWeavers in five weeks. The team understood our domain before we finished explaining it.",
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'Carlisle Homes',
  },
  {
    quote: "Agent Studio didn\u2019t just automate our workflows \u2014 it rewired how our teams think about operations. 40 agents running order-to-cash, zero handoff gaps.",
    name: 'Sarah Al-Rashid',
    role: 'VP Operations',
    company: 'Custom Fleet',
  },
  {
    quote: "Most consultancies pitch AI. DBiz ships it. Our underwriting cycle went from weeks to hours \u2014 and the architecture scales without rework.",
    name: 'James Whitfield',
    role: 'Head of Digital Transformation',
    company: 'Angle Auto Finance',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[active]

  return (
    <section className='v14-quote-section' data-surface='light'>
      <div className='v14-container'>
        <div className='v14-quote-frame' key={active}>
          <div className='v14-quote-meta'>
            <span>N°04 / Testimonial</span>
            <span>{t.company.toUpperCase()}</span>
          </div>
          <div className='v14-quote-mark' />
          <blockquote>{t.quote}</blockquote>
          <cite>{t.name} &nbsp;&mdash;&nbsp; {t.role}, {t.company}</cite>
        </div>
        <div className='v14-quote-nav'>
          <button className='v14-quote-arrow' onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} aria-label='Previous'>←</button>
          <div className='v14-quote-dots'>
            {testimonials.map((_, i) => (
              <button key={i} className={`v14-quote-dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
          <button className='v14-quote-arrow' onClick={() => setActive((active + 1) % testimonials.length)} aria-label='Next'>→</button>
        </div>
      </div>
    </section>
  )
}
