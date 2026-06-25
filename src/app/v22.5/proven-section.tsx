'use client'

import { useState, useRef, useEffect, useMemo } from 'react'

type CaseStudy = {
  metric: string
  title: string
  kicker: string
  body: string
  image: string
  tag: 'industry' | 'solution' | 'technology'
  techs?: string[]
  href?: string
}

const cases: CaseStudy[] = [
  {
    metric: 'Agentic pay',
    title: 'Agentic AI-powered payment experience',
    kicker: 'Real Estate',
    body: 'Authorised AI agents initiate, authenticate, and complete payments end-to-end — secured by Visa Payment Passkey and orchestrated through Visa Intelligent Commerce.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'industry',
    techs: ['Agentic AI', 'Visa VIC', 'Visa Passkey'],
    href: '/v22.5/work/agentic-payments',
  },
  {
    metric: '24× faster',
    title: 'Knowledge graph intelligence for infrastructure',
    kicker: 'Construction',
    body: 'Schedules, risks, and contracts unified into one queryable knowledge graph — answers in seconds, with citations, delivered in 8 weeks.',
    image: 'https://images.pexels.com/photos/2058131/pexels-photo-2058131.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'industry',
    techs: ['AWS', 'Amazon Bedrock', 'Neo4j'],
    href: '/v22.5/work/knowledge-graph-intelligence',
  },
  {
    metric: '38 use cases',
    title: 'AI strategy & agentic transformation roadmap',
    kicker: 'Telecommunications',
    body: 'A foresight-led strategy aligning 15+ leaders — 38 use cases in seven capability clusters and a phased path to autonomous systems.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'solution',
    techs: ['Futures Studio', 'Agentic AI'],
    href: '/v22.5/work/ai-strategy-roadmap',
  },
  {
    metric: 'Automated',
    title: 'AI-powered compliance validation',
    kicker: 'Telecommunications',
    body: 'AI validation inside Salesforce recommends dispositions, updates records, and triggers workflows — consistent and governed at scale.',
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'technology',
    techs: ['Salesforce', 'AI'],
    href: '/v22.5/work/compliance-validation',
  },
  {
    metric: '−70% time',
    title: 'AI-powered inspection report automation',
    kicker: 'Construction',
    body: 'Generative AI extracts defects, maps responses, and drafts customer-ready reports — 100+ a week, with a human check.',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'industry',
    techs: ['Azure OpenAI', 'Cognitive Search'],
    href: '/v22.5/work/inspection-report-automation',
  },
  {
    metric: '24/7',
    title: 'AI-powered customer self-service assistant',
    kicker: 'Auctions',
    body: 'A governed conversational assistant answers high-frequency enquiries — source-grounded, cited, and safe — around the clock.',
    image: 'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'solution',
    techs: ['Azure AI Foundry', 'Agent Framework'],
    href: '/v22.5/work/customer-self-service-assistant',
  },
  {
    metric: 'AI drafts',
    title: 'AI-powered RFI response automation',
    kicker: 'Financial Services',
    body: 'Requirement extraction and drafting on Copilot Studio — consistent proposal submissions from a governed knowledge base.',
    image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'technology',
    techs: ['Copilot Studio', 'Power Platform'],
    href: '/v22.5/work/rfi-response-automation',
  },
  {
    metric: '6,000/mo',
    title: 'AI assistant for workforce policy support',
    kicker: 'Tourism',
    body: 'A policy-grounded assistant answers ~6,000 monthly enquiries reliably — with citations — for staff without system access.',
    image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'industry',
    techs: ['LLMs', 'Python'],
    href: '/v22.5/work/workforce-policy-assistant',
  },
  {
    metric: '500 → 2,000',
    title: 'Simulation-led manufacturing leadership platform',
    kicker: 'Education',
    body: 'A simulation platform where manufacturing leaders scale a plant from 500 to 2,000 units a day — and earn accreditation.',
    image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'solution',
    techs: ['AWS', 'React', 'Canvas LMS'],
    href: '/v22.5/work/manufacturing-simulation-platform',
  },
]

type Filter = 'all' | 'industry' | 'solution' | 'technology'

const filterLabels: Record<Filter, string> = {
  all: 'All',
  industry: 'By Industry',
  solution: 'By Solution',
  technology: 'By Technology',
}

/* For each filter family, the set of inline sub-chips and the predicate
   that decides whether a given case matches that chip. */
function getSubOptions(filter: Filter): string[] {
  if (filter === 'industry')   return Array.from(new Set(cases.filter(c => c.tag === 'industry').map(c => c.kicker)))
  if (filter === 'solution')   return Array.from(new Set(cases.filter(c => c.tag === 'solution').map(c => c.kicker)))
  if (filter === 'technology') return Array.from(new Set(cases.flatMap(c => c.techs ?? []))).sort()
  return []
}

function matchesSub(c: CaseStudy, filter: Filter, sub: string | null) {
  if (!sub) return true
  if (filter === 'industry' || filter === 'solution') return c.kicker === sub
  if (filter === 'technology') return (c.techs ?? []).includes(sub)
  return true
}

export default function ProvenSection() {
  const [filter, setFilter] = useState<Filter>('all')
  const [sub, setSub] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)
  /* Mobile-only: filterbar collapses behind a quiet trigger so cards lead the
     section. Desktop shows the filterbar as usual (CSS controls visibility). */
  const [filtersOpen, setFiltersOpen] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const subOptions = useMemo(() => getSubOptions(filter), [filter])

  const filtered = useMemo(() => {
    let out = filter === 'all' ? cases : cases.filter(c => c.tag === filter)
    out = out.filter(c => matchesSub(c, filter, sub))
    const q = search.trim().toLowerCase()
    if (q) {
      out = out.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.body.toLowerCase().includes(q) ||
        c.kicker.toLowerCase().includes(q) ||
        (c.techs ?? []).some(t => t.toLowerCase().includes(q))
      )
    }
    return out
  }, [filter, sub, search])

  /* Reset position when filters change */
  useEffect(() => { setActiveIdx(0); setSub(null) }, [filter])
  useEffect(() => { setActiveIdx(0) }, [sub, search])

  /* Focus the search input the moment it opens */
  useEffect(() => {
    if (searchOpen) requestAnimationFrame(() => searchInputRef.current?.focus())
  }, [searchOpen])

  /* Scroll to active card */
  useEffect(() => {
    if (!trackRef.current) return
    const card = trackRef.current.children[activeIdx] as HTMLElement
    if (!card) return
    trackRef.current.scrollTo({ left: card.offsetLeft - 40, behavior: 'smooth' })
  }, [activeIdx])

  const total = filtered.length
  const prev = () => setActiveIdx((i) => (i - 1 + total) % Math.max(total, 1))
  const next = () => setActiveIdx((i) => (i + 1) % Math.max(total, 1))

  return (
    <section className='v22-section v22-proven' id='work' data-surface='light'>
      <div className='v22-container'>
        {/* Header */}
        <div className='v22-proven-header'>
          <div className='v22-proven-header-left'>
            <div className='num'>N°06 / Proven</div>
            <h2>Proven where it <em>matters.</em></h2>
          </div>
          <div className='v22-proven-header-right'>
            <p className='lead'>50+ enterprise deployments across 11 industries. Real outcomes, not slide decks.</p>
          </div>
        </div>

        {/* Filter row + inline sub-filter expansion + search affordance */}
        <div className='v22-proven-filterbar'>
          <div className='v22-proven-filters' role='tablist' aria-label='Filter case studies'>
            {(['all', 'industry', 'solution', 'technology'] as Filter[]).map((f) => (
              <button
                key={f}
                className={`v22-proven-filter ${filter === f ? 'active' : ''}`}
                role='tab'
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>

          <button
            className={`v22-proven-search-toggle ${searchOpen ? 'is-open' : ''}`}
            onClick={() => {
              if (searchOpen && search) setSearch('')
              setSearchOpen((v) => !v)
            }}
            aria-label={searchOpen ? 'Close search' : 'Search case studies'}
            aria-expanded={searchOpen}
          >
            {searchOpen ? (
              <svg viewBox='0 0 20 20' aria-hidden='true' width='14' height='14'>
                <path d='M5 5 L15 15 M15 5 L5 15' stroke='currentColor' strokeWidth='1.6' strokeLinecap='square' fill='none' />
              </svg>
            ) : (
              <svg viewBox='0 0 20 20' aria-hidden='true' width='14' height='14'>
                <circle cx='9' cy='9' r='5.5' fill='none' stroke='currentColor' strokeWidth='1.6' />
                <path d='M13.2 13.2 L17 17' stroke='currentColor' strokeWidth='1.6' strokeLinecap='square' fill='none' />
              </svg>
            )}
          </button>
        </div>

        {/* Inline sub-filter row — only when a non-"all" filter is active */}
        <div
          className={`v22-proven-subbar ${filter !== 'all' || searchOpen ? 'is-open' : ''}`}
          aria-hidden={filter === 'all' && !searchOpen}
        >
          <div className='v22-proven-subbar-inner'>
            {searchOpen ? (
              <div className='v22-proven-search-row'>
                <span className='v22-proven-search-label'>SEARCH</span>
                <input
                  ref={searchInputRef}
                  className='v22-proven-search-input'
                  type='text'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search across all case studies — title, sector, technology…'
                  aria-label='Search case studies'
                />
              </div>
            ) : filter !== 'all' ? (
              <div className='v22-proven-subchips' role='tablist' aria-label={`Filter by ${filterLabels[filter].replace('By ', '').toLowerCase()}`}>
                <span className='v22-proven-sub-label'>{filter === 'technology' ? 'TECHNOLOGY' : filter === 'solution' ? 'SOLUTION' : 'INDUSTRY'}</span>
                {subOptions.map((o) => (
                  <button
                    key={o}
                    className={`v22-proven-subchip ${sub === o ? 'active' : ''}`}
                    onClick={() => setSub(s => s === o ? null : o)}
                    aria-pressed={sub === o}
                  >
                    {o}
                  </button>
                ))}
                <button
                  className={`v22-proven-subchip is-secondary ${sub === null ? 'active' : ''}`}
                  onClick={() => setSub(null)}
                >
                  Show all
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {/* Filmstrip / carousel */}
        <div className='v22-proven-carousel'>
          {filtered.length === 0 ? (
            <div className='v22-proven-empty'>
              <span className='v22-proven-empty-mono'>NO MATCH</span>
              <p>No case studies match those filters. Try a broader sector or clear search.</p>
              <button
                className='v22-proven-empty-reset'
                onClick={() => { setSearch(''); setSearchOpen(false); setSub(null); setFilter('all') }}
              >
                Reset filters →
              </button>
            </div>
          ) : (
            <div className='v22-proven-track' ref={trackRef}>
              {filtered.map((c, i) => (
                <article
                  key={c.title}
                  className={`v22-proven-card ${i === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <div className='v22-proven-img'>
                    <img src={c.image} alt={c.kicker} loading='lazy' />
                    <span className='v22-proven-metric'>{c.metric}</span>
                  </div>
                  <div className='v22-proven-content'>
                    <span className='v22-proven-kicker'>{c.kicker}</span>
                    <h4>{c.title}</h4>
                    <p>{c.body}</p>
                    {c.techs && (
                      <div className='v22-proven-techs'>
                        {c.techs.map((t) => <span key={t} className='v22-proven-tech-pill'>{t}</span>)}
                      </div>
                    )}
                    {c.href && (
                      <a
                        href={c.href}
                        className='v22-proven-card-link'
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read case study <span aria-hidden='true'>→</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Navigation row */}
          {filtered.length > 0 && (
            <div className='v22-proven-nav'>
              <div className='v22-proven-nav-meta'>
                <span className='v22-proven-counter'>
                  <span className='v22-proven-counter-now'>{String(activeIdx + 1).padStart(2, '0')}</span>
                  <span className='v22-proven-counter-sep'>/</span>
                  <span className='v22-proven-counter-total'>{String(total).padStart(2, '0')}</span>
                </span>
              </div>
              <div className='v22-proven-nav-center'>
                <button className='v22-proven-arrow' onClick={prev} aria-label='Previous'>
                  <svg viewBox='0 0 24 24' aria-hidden='true' width='16' height='16'><path d='M15 5 L7 12 L15 19' fill='none' stroke='currentColor' strokeWidth='1.5' /></svg>
                </button>
                <div className='v22-proven-dots' role='tablist'>
                  {filtered.map((_, i) => (
                    <button key={i} className={`v22-proven-dot ${i === activeIdx ? 'active' : ''}`} onClick={() => setActiveIdx(i)} aria-label={`Case ${i + 1}`} />
                  ))}
                </div>
                <button className='v22-proven-arrow' onClick={next} aria-label='Next'>
                  <svg viewBox='0 0 24 24' aria-hidden='true' width='16' height='16'><path d='M9 5 L17 12 L9 19' fill='none' stroke='currentColor' strokeWidth='1.5' /></svg>
                </button>
              </div>
              <a href='#' className='v22-proven-foot-link'>
                See all case studies <span aria-hidden='true'>→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
