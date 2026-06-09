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
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&q=80',
    tag: 'industry',
    techs: ['Agent Studio', 'AWS', 'Snowflake'],
  },
  {
    metric: '$14M saved',
    title: 'Dispatch, rewritten nightly',
    kicker: 'Logistics & Fleet',
    body: 'A national fleet operator replaced static route planning with agentic scheduling across 12,000 vehicles.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop&q=80',
    tag: 'industry',
    techs: ['Azure', 'Boomi', 'Agent Studio'],
  },
  {
    metric: '6× throughput',
    title: 'Clinical documentation, automated',
    kicker: 'Aged Care',
    body: 'Care teams reclaimed hours per shift with voice-to-record agents compliant with regional reporting standards.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&q=80',
    tag: 'industry',
    techs: ['Claude', 'AWS', 'FactWeavers'],
  },
  {
    metric: '11 domains',
    title: 'Industry-ready data cloud',
    kicker: 'FactWeavers™',
    body: 'Pre-modelled data products shipped without a six-month clean-up phase.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80',
    tag: 'solution',
    techs: ['Snowflake', 'Databricks', 'AWS'],
  },
  {
    metric: '40+ agents',
    title: 'Multi-agent orchestration at scale',
    kicker: 'Agent Studio',
    body: 'Cross-system agents running order-to-cash for a Fortune 500 manufacturer.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80',
    tag: 'solution',
    techs: ['Claude', 'GPT', 'MuleSoft'],
  },
  {
    metric: '5 days',
    title: 'Concept to working build',
    kicker: 'DBiz Canvas',
    body: 'Product teams move from brief to production code inside a single sprint.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&q=80',
    tag: 'solution',
    techs: ['Nexus', 'AWS', 'React'],
  },
  {
    metric: '40+',
    title: 'AWS certified experts across the practice',
    kicker: 'Cloud & AI',
    body: 'AWS Advanced, Azure Solutions, GCP — multi-cloud foundations built for AI workloads.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop&q=80',
    tag: 'technology',
    techs: ['AWS', 'Azure', 'GCP'],
  },
  {
    metric: '200+',
    title: 'Microsoft certifications across the team',
    kicker: 'Business Apps',
    body: 'Salesforce, Dynamics 365, Power Platform — connected systems, not silos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
    tag: 'technology',
    techs: ['Salesforce', 'Dynamics 365', 'Power Platform'],
  },
  {
    metric: '4 platforms',
    title: 'Data platforms unified under one roof',
    kicker: 'Data Platforms',
    body: 'Snowflake, Databricks, Fabric, BigQuery — with FactWeavers\u2122 built on top.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=500&fit=crop&q=80',
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
    <section className='v14-section v14-proven' id='work'>
      <div className='v14-container'>
        {/* Header row */}
        <div className='v14-proven-header'>
          <div className='v14-proven-header-left'>
            <div className='num'>N°05 / Proven</div>
            <h2>Proven where it <em>matters.</em></h2>
          </div>
          <div className='v14-proven-header-right'>
            <p className='lead'>50+ enterprise deployments across 11 industries. Real outcomes, not slide decks.</p>
            <div className='v14-proven-filters'>
              {(['all', 'industry', 'solution', 'technology'] as Filter[]).map((f) => (
                <button
                  key={f}
                  className={`v14-proven-filter ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all' ? 'All' : f === 'industry' ? 'By Industry' : f === 'solution' ? 'By Solution' : 'By Technology'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className='v14-proven-carousel'>
          <div className='v14-proven-track' ref={trackRef}>
            {filtered.map((c, i) => (
              <div
                key={c.title}
                className={`v14-proven-card ${i === activeIdx ? 'active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                {/* Image area */}
                <div className='v14-proven-img'>
                  <img src={c.image} alt={c.kicker} loading='lazy' />
                  <div className='v14-proven-img-overlay'>
                    <span className='v14-proven-metric'>{c.metric}</span>
                  </div>
                  <div className='v14-proven-img-dots' />
                </div>
                {/* Content */}
                <div className='v14-proven-content'>
                  <span className='v14-proven-kicker'>{c.kicker}</span>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                  {c.techs && (
                    <div className='v14-proven-techs'>
                      {c.techs.map((t) => <span key={t} className='v14-proven-tech-pill'>{t}</span>)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className='v14-proven-nav'>
            <button className='v14-proven-arrow' onClick={prev} aria-label='Previous'>←</button>
            <div className='v14-proven-dots'>
              {filtered.map((_, i) => (
                <span key={i} className={`v14-proven-dot ${i === activeIdx ? 'active' : ''}`} onClick={() => setActiveIdx(i)} />
              ))}
            </div>
            <button className='v14-proven-arrow' onClick={next} aria-label='Next'>→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
