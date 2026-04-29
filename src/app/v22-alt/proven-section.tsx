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
    body: 'Snowflake, Databricks, Fabric, BigQuery — with FactWeavers™ built on top.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    tag: 'technology',
    techs: ['Snowflake', 'Databricks', 'BigQuery'],
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
    <section className='v22alt-section v22alt-proven' id='work' data-surface='light'>
      <div className='v22alt-container'>
        {/* Header */}
        <div className='v22alt-proven-header'>
          <div className='v22alt-proven-header-left'>
            <div className='num'>N°06 / Proven</div>
            <h2>Proven where it <em>matters.</em></h2>
          </div>
          <div className='v22alt-proven-header-right'>
            <p className='lead'>50+ enterprise deployments across 11 industries. Real outcomes, not slide decks.</p>
          </div>
        </div>

        {/* Filter row + inline sub-filter expansion + search affordance */}
        <div className='v22alt-proven-filterbar'>
          <div className='v22alt-proven-filters' role='tablist' aria-label='Filter case studies'>
            {(['all', 'industry', 'solution', 'technology'] as Filter[]).map((f) => (
              <button
                key={f}
                className={`v22alt-proven-filter ${filter === f ? 'active' : ''}`}
                role='tab'
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>

          <button
            className={`v22alt-proven-search-toggle ${searchOpen ? 'is-open' : ''}`}
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
          className={`v22alt-proven-subbar ${filter !== 'all' || searchOpen ? 'is-open' : ''}`}
          aria-hidden={filter === 'all' && !searchOpen}
        >
          <div className='v22alt-proven-subbar-inner'>
            {searchOpen ? (
              <div className='v22alt-proven-search-row'>
                <span className='v22alt-proven-search-label'>SEARCH</span>
                <input
                  ref={searchInputRef}
                  className='v22alt-proven-search-input'
                  type='text'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Search across all case studies — title, sector, technology…'
                  aria-label='Search case studies'
                />
              </div>
            ) : filter !== 'all' ? (
              <div className='v22alt-proven-subchips' role='tablist' aria-label={`Filter by ${filterLabels[filter].replace('By ', '').toLowerCase()}`}>
                <span className='v22alt-proven-sub-label'>{filter === 'technology' ? 'TECHNOLOGY' : filter === 'solution' ? 'SOLUTION' : 'INDUSTRY'}</span>
                <button
                  className={`v22alt-proven-subchip ${sub === null ? 'active' : ''}`}
                  onClick={() => setSub(null)}
                >
                  Show all
                </button>
                {subOptions.map((o) => (
                  <button
                    key={o}
                    className={`v22alt-proven-subchip ${sub === o ? 'active' : ''}`}
                    onClick={() => setSub(s => s === o ? null : o)}
                    aria-pressed={sub === o}
                  >
                    {o}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Filmstrip / carousel */}
        <div className='v22alt-proven-carousel'>
          {filtered.length === 0 ? (
            <div className='v22alt-proven-empty'>
              <span className='v22alt-proven-empty-mono'>NO MATCH</span>
              <p>No case studies match those filters. Try a broader sector or clear search.</p>
              <button
                className='v22alt-proven-empty-reset'
                onClick={() => { setSearch(''); setSearchOpen(false); setSub(null); setFilter('all') }}
              >
                Reset filters →
              </button>
            </div>
          ) : (
            <div className='v22alt-proven-track' ref={trackRef}>
              {filtered.map((c, i) => (
                <article
                  key={c.title}
                  className={`v22alt-proven-card ${i === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <div className='v22alt-proven-img'>
                    <img src={c.image} alt={c.kicker} loading='lazy' />
                    <span className='v22alt-proven-metric'>{c.metric}</span>
                  </div>
                  <div className='v22alt-proven-content'>
                    <span className='v22alt-proven-kicker'>{c.kicker}</span>
                    <h4>{c.title}</h4>
                    <p>{c.body}</p>
                    {c.techs && (
                      <div className='v22alt-proven-techs'>
                        {c.techs.map((t) => <span key={t} className='v22alt-proven-tech-pill'>{t}</span>)}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Navigation row */}
          {filtered.length > 0 && (
            <div className='v22alt-proven-nav'>
              <div className='v22alt-proven-nav-meta'>
                <span className='v22alt-proven-counter'>
                  <span className='v22alt-proven-counter-now'>{String(activeIdx + 1).padStart(2, '0')}</span>
                  <span className='v22alt-proven-counter-sep'>/</span>
                  <span className='v22alt-proven-counter-total'>{String(total).padStart(2, '0')}</span>
                </span>
              </div>
              <div className='v22alt-proven-nav-center'>
                <button className='v22alt-proven-arrow' onClick={prev} aria-label='Previous'>
                  <svg viewBox='0 0 24 24' aria-hidden='true' width='16' height='16'><path d='M15 5 L7 12 L15 19' fill='none' stroke='currentColor' strokeWidth='1.5' /></svg>
                </button>
                <div className='v22alt-proven-dots' role='tablist'>
                  {filtered.map((_, i) => (
                    <button key={i} className={`v22alt-proven-dot ${i === activeIdx ? 'active' : ''}`} onClick={() => setActiveIdx(i)} aria-label={`Case ${i + 1}`} />
                  ))}
                </div>
                <button className='v22alt-proven-arrow' onClick={next} aria-label='Next'>
                  <svg viewBox='0 0 24 24' aria-hidden='true' width='16' height='16'><path d='M9 5 L17 12 L9 19' fill='none' stroke='currentColor' strokeWidth='1.5' /></svg>
                </button>
              </div>
              <a href='#' className='v22alt-proven-foot-link'>
                See all case studies <span aria-hidden='true'>→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
