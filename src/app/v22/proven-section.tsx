'use client'

import { useState, useRef, useEffect } from 'react'

type CaseStudy = {
  metric: string
  title: string
  kicker: string
  body: string
  image: string
  tag: 'industry' | 'solution' | 'technology'
  techs?: string[]
}

const cases: CaseStudy[] = [
  {
    metric: '38% faster',
    title: 'Credit decisioning in hours, not weeks',
    kicker: 'Financial Services',
    body: 'Agent-driven risk models cut the underwriting cycle time for a tier-1 lender across retail, SME, and corporate books.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'industry',
    techs: ['Agent Studio', 'AWS', 'Snowflake'],
  },
  {
    metric: '$14M saved',
    title: 'Dispatch, rewritten nightly',
    kicker: 'Logistics & Fleet',
    body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.',
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'industry',
    techs: ['Azure', 'Boomi', 'Agent Studio'],
  },
  {
    metric: '6× throughput',
    title: 'Clinical documentation, automated',
    kicker: 'Aged Care',
    body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'industry',
    techs: ['Claude', 'AWS', 'FactWeavers'],
  },
  {
    metric: '11 domains',
    title: 'Industry-ready data cloud',
    kicker: 'FactWeavers™',
    body: 'Pre-modelled data products shipped without a six-month clean-up phase.',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'solution',
    techs: ['Snowflake', 'Databricks', 'AWS'],
  },
  {
    metric: '40+ agents',
    title: 'Multi-agent orchestration at scale',
    kicker: 'Agent Studio',
    body: 'Cross-system agents running order-to-cash for a Fortune 500 manufacturer.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'solution',
    techs: ['Claude', 'GPT', 'MuleSoft'],
  },
  {
    metric: '5 days',
    title: 'Concept to working build',
    kicker: 'DBiz Canvas',
    body: 'Product teams move from brief to production code inside a single sprint.',
    image: 'https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'solution',
    techs: ['Nexus', 'AWS', 'React'],
  },
  {
    metric: '40+',
    title: 'AWS certified experts across the practice',
    kicker: 'Cloud & AI',
    body: 'AWS Advanced, Azure Solutions, GCP — multi-cloud foundations built for AI workloads.',
    image: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'technology',
    techs: ['AWS', 'Azure', 'GCP'],
  },
  {
    metric: '200+',
    title: 'Microsoft certifications across the team',
    kicker: 'Business Apps',
    body: 'Salesforce, Dynamics 365, Power Platform — connected systems, not silos.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'technology',
    techs: ['Salesforce', 'Dynamics 365', 'Power Platform'],
  },
  {
    metric: '4 platforms',
    title: 'Data platforms unified under one roof',
    kicker: 'Data Platforms',
    body: 'Snowflake, Databricks, Fabric, BigQuery — with FactWeavers\u2122 built on top.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'technology',
    techs: ['Snowflake', 'Databricks', 'BigQuery'],
  },
]

type Filter = 'all' | 'industry' | 'solution' | 'technology'

export default function ProvenSection() {
  const [filter, setFilter] = useState<Filter>('all')
  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const filtered = filter === 'all' ? cases : cases.filter((c) => c.tag === filter)

  /* Reset index when filter changes */
  useEffect(() => { setActiveIdx(0) }, [filter])

  /* Scroll to active card */
  useEffect(() => {
    if (!trackRef.current) return
    const card = trackRef.current.children[activeIdx] as HTMLElement
    if (!card) return
    trackRef.current.scrollTo({ left: card.offsetLeft - 40, behavior: 'smooth' })
  }, [activeIdx])

  /* Auto-advance every 4s */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((i) => (i + 1) % filtered.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [filtered.length])

  const prev = () => setActiveIdx((i) => (i - 1 + filtered.length) % filtered.length)
  const next = () => setActiveIdx((i) => (i + 1) % filtered.length)

  return (
    <section className='v22-section v22-proven' id='work'>
      <div className='v22-container'>
        {/* Header row */}
        <div className='v22-proven-header'>
          <div className='v22-proven-header-left'>
            <div className='num'>N°06 / Proven</div>
            <h2>Proven where it <em>matters.</em></h2>
          </div>
          <div className='v22-proven-header-right'>
            <p className='lead'>50+ enterprise deployments across 11 industries. Real outcomes, not slide decks.</p>
          </div>
        </div>

        {/* Filter row — full width, below heading */}
        <div className='v22-proven-filters'>
          {(['all', 'industry', 'solution', 'technology'] as Filter[]).map((f) => (
            <button
              key={f}
              className={`v22-proven-filter ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'industry' ? 'By Industry' : f === 'solution' ? 'By Solution' : 'By Technology'}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className='v22-proven-carousel'>
          <div className='v22-proven-track' ref={trackRef}>
            {filtered.map((c, i) => (
              <div
                key={c.title}
                className={`v22-proven-card ${i === activeIdx ? 'active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                {/* Image area */}
                <div className='v22-proven-img'>
                  <img src={c.image} alt={c.kicker} loading='lazy' />
                  <div className='v22-proven-img-overlay'>
                    <span className='v22-proven-metric'>{c.metric}</span>
                  </div>
                  <div className='v22-proven-img-dots' />
                </div>
                {/* Content */}
                <div className='v22-proven-content'>
                  <span className='v22-proven-kicker'>{c.kicker}</span>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                  {c.techs && (
                    <div className='v22-proven-techs'>
                      {c.techs.map((t) => <span key={t} className='v22-proven-tech-pill'>{t}</span>)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation + CTA row */}
          <div className='v22-proven-nav'>
            <div className='v22-proven-nav-center'>
              <button className='v22-proven-arrow' onClick={prev} aria-label='Previous'>←</button>
              <div className='v22-proven-dots'>
                {filtered.map((_, i) => (
                  <span key={i} className={`v22-proven-dot ${i === activeIdx ? 'active' : ''}`} onClick={() => setActiveIdx(i)} />
                ))}
              </div>
              <button className='v22-proven-arrow' onClick={next} aria-label='Next'>→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
