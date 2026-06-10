/* §03 AI in action — proof case studies as a schematic carousel.
   One rich case-study card per view; horizontal scroll-snap track with
   prev/next arrows and an index rail. Native swipe on touch, button + dot
   control on desktop. Client component for the active-index state. */

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/* ─── AI pattern glyphs — schematic style matching why-section.
   Larger 120×120 viewbox, technical drawing language: dim guide marks +
   ink primary lines + accent details. */
function PatternGlyph({ i }: { i: number }) {
  const ink = 'rgba(255,255,255,0.85)'
  const dim = 'rgba(255,255,255,0.28)'
  const acc = 'var(--v22-accent)'

  if (i === 0) return (
    /* QUALITY REGISTRATION — concentric scan rings + agent lock-on */
    <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-cdp-pattern-glyph'>
      <circle cx='60' cy='60' r='52' fill='none' stroke={dim} strokeWidth='0.7' strokeDasharray='1.5 2.5' />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, k) => {
        const rad = (a * Math.PI) / 180
        const x1 = 60 + Math.cos(rad) * 48
        const y1 = 60 + Math.sin(rad) * 48
        const x2 = 60 + Math.cos(rad) * (k % 2 === 0 ? 56 : 52)
        const y2 = 60 + Math.sin(rad) * (k % 2 === 0 ? 56 : 52)
        return <line key={k} x1={x1.toFixed(2)} y1={y1.toFixed(2)} x2={x2.toFixed(2)} y2={y2.toFixed(2)} stroke={dim} strokeWidth='0.8' />
      })}
      <circle cx='60' cy='60' r='34' fill='none' stroke={ink} strokeWidth='1' />
      <circle cx='60' cy='60' r='18' fill='none' stroke={acc} strokeWidth='1.4' />
      <line x1='4' y1='60' x2='14' y2='60' stroke={ink} strokeWidth='0.9' />
      <line x1='106' y1='60' x2='116' y2='60' stroke={ink} strokeWidth='0.9' />
      <line x1='60' y1='4' x2='60' y2='14' stroke={ink} strokeWidth='0.9' />
      <line x1='60' y1='106' x2='60' y2='116' stroke={ink} strokeWidth='0.9' />
      <circle cx='60' cy='60' r='3.2' fill={acc} />
    </svg>
  )

  if (i === 1) return (
    /* COMPLIANCE — shield envelope + verified checkmark */
    <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-cdp-pattern-glyph'>
      <path d='M 60 12 L 100 28 L 100 64 Q 100 92 60 108 Q 20 92 20 64 L 20 28 Z'
        fill='none' stroke={ink} strokeWidth='1.1' strokeLinejoin='round' />
      <path d='M 60 22 L 92 35 L 92 64 Q 92 86 60 98 Q 28 86 28 64 L 28 35 Z'
        fill='none' stroke={dim} strokeWidth='0.7' strokeDasharray='2 2.5' strokeLinejoin='round' />
      <path d='M 40 60 L 54 74 L 82 44' stroke={acc} strokeWidth='2.4' fill='none' strokeLinecap='round' strokeLinejoin='round' />
      <text x='60' y='118' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='6.5' letterSpacing='1.2' fill={dim}>VERIFIED</text>
    </svg>
  )

  return (
    /* PROCUREMENT ROUTING — multi-system network with central agent hub */
    <svg viewBox='0 0 120 120' aria-hidden='true' className='v22-cdp-pattern-glyph'>
      {/* Outer system nodes (4 corners) */}
      {[
        { cx: 24, cy: 24, label: 'ERP' },
        { cx: 96, cy: 24, label: 'CRM' },
        { cx: 24, cy: 96, label: 'PRL' },
        { cx: 96, cy: 96, label: 'API' },
      ].map((n, k) => (
        <g key={k}>
          <rect x={n.cx - 11} y={n.cy - 11} width='22' height='22' fill='none' stroke={ink} strokeWidth='0.9' />
          <text x={n.cx} y={n.cy + 2.5} textAnchor='middle' fontFamily='var(--font-mono)' fontSize='6.5' fontWeight='600' fill={ink}>{n.label}</text>
        </g>
      ))}
      {/* Connection lines from corners to center */}
      <line x1='35' y1='35' x2='52' y2='52' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      <line x1='85' y1='35' x2='68' y2='52' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      <line x1='35' y1='85' x2='52' y2='68' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      <line x1='85' y1='85' x2='68' y2='68' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      {/* Central agent hub */}
      <circle cx='60' cy='60' r='14' fill='none' stroke={acc} strokeWidth='1.4' />
      <circle cx='60' cy='60' r='7' fill='none' stroke={ink} strokeWidth='0.9' />
      <circle cx='60' cy='60' r='2.5' fill={acc} />
    </svg>
  )
}

const caseStudies = [
  {
    use: 'Use case 01',
    scope: 'CRM + integration',
    title: 'Quality Registration',
    body: 'MuleSoft MCP servers expose internal APIs to Salesforce. Agents retrieve valuation data, validate compliance, assess risk, and complete registrations end-to-end.',
    metric: '−70%',
    metricLabel: 'manual effort',
    platforms: ['Salesforce Agentforce', 'MuleSoft Anypoint', 'NEXUS iConnector'],
  },
  {
    use: 'Use case 02',
    scope: 'service automation',
    title: 'Sales Compliance',
    body: 'Agentforce processes escalation tickets continuously, updates compliance fields against policy, and generates audit summaries — without human triage.',
    metric: '↑ accuracy',
    metricLabel: 'over manual baseline',
    platforms: ['Salesforce Agentforce', 'Service Cloud', 'Data Cloud'],
  },
  {
    use: 'Use case 03',
    scope: 'multi-system orchestration',
    title: 'Procurement Routing',
    body: 'MuleSoft MCP architecture enables real-time vendor validation and automated PRL approvals across ERP systems — coordinated end-to-end.',
    metric: 'real-time',
    metricLabel: 'across ERPs',
    platforms: ['MuleSoft MCP', 'Oracle ERP', 'NEXUS iConnector'],
  },
]

export default function ProofCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const count = caseStudies.length

  const goTo = useCallback((i: number) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(count - 1, i))
    const card = track.children[clamped] as HTMLElement | undefined
    if (!card) return
    /* Rect-based delta is robust regardless of offsetParent / padding. */
    const delta = card.getBoundingClientRect().left - track.getBoundingClientRect().left
    track.scrollTo({ left: track.scrollLeft + delta, behavior: 'smooth' })
  }, [count])

  /* Sync the active index to whichever card sits closest to the track centre. */
  const syncActive = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const trackCentre = track.getBoundingClientRect().left + track.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    Array.from(track.children).forEach((c, idx) => {
      const r = (c as HTMLElement).getBoundingClientRect()
      const dist = Math.abs(r.left + r.width / 2 - trackCentre)
      if (dist < bestDist) { bestDist = dist; best = idx }
    })
    setActive(best)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(syncActive)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => { track.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [syncActive])

  return (
    <div className='v22-cdp-proof-carousel'>
      <div className='v22-cdp-proof-track' ref={trackRef}>
        {caseStudies.map((cs, i) => (
          <article
            key={cs.title}
            className='v22-cdp-proof-card'
            aria-hidden={i !== active}
          >
            <header className='v22-cdp-proof-head'>
              <div className='v22-cdp-proof-glyph'>
                <PatternGlyph i={i} />
              </div>
              <div className='v22-cdp-proof-head-meta'>
                <span className='v22-cdp-proof-use'>{cs.use}</span>
                <span className='v22-cdp-proof-scope'>{cs.scope}</span>
              </div>
            </header>
            <h3 className='v22-cdp-proof-title'>{cs.title}</h3>
            <p className='v22-cdp-proof-body'>{cs.body}</p>
            <div className='v22-cdp-proof-metric'>
              <span className='v22-cdp-proof-metric-val'>{cs.metric}</span>
              <span className='v22-cdp-proof-metric-lbl'>{cs.metricLabel}</span>
            </div>
            <ul className='v22-cdp-proof-platforms' aria-label='Platforms used'>
              {cs.platforms.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className='v22-cdp-proof-controls'>
        <button
          type='button'
          className='v22-cdp-proof-arrow'
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label='Previous use case'
        >
          ←
        </button>

        <div className='v22-cdp-proof-rail'>
          <div className='v22-cdp-proof-dots' role='tablist' aria-label='Use cases'>
            {caseStudies.map((cs, i) => (
              <button
                key={cs.title}
                type='button'
                role='tab'
                aria-selected={i === active}
                aria-label={cs.use}
                className={`v22-cdp-proof-dot${i === active ? ' v22-cdp-proof-dot--active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <span className='v22-cdp-proof-counter'>
            {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
        </div>

        <button
          type='button'
          className='v22-cdp-proof-arrow'
          onClick={() => goTo(active + 1)}
          disabled={active === count - 1}
          aria-label='Next use case'
        >
          →
        </button>
      </div>
    </div>
  )
}
