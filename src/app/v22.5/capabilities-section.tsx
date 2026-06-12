'use client'

import { useState, useEffect } from 'react'
import { InlineSvg } from '@/components/inline-svg'
import {
  capabilityIcon01StrategyArchitecture,
  capabilityIcon02AiFoundationalLayer,
  capabilityIcon03IntelligenceLayer,
  capabilityIcon04ConnectedSystems,
  capabilityIcon05EngineeredWithAi,
  capabilityIcon06HumanAgentExperience,
  capabilityIcon07AiFirstOperations,
} from '@/lib/svg-assets'
import { capabilities } from './capabilities-data'

const CYCLE_MS = 5000

/* Geometric SVG icons — file-based assets (public/assets/svg) injected
   inline so the v22 tokens and draw-in animations in theme.css apply. */
const capabilityIcons = [
  capabilityIcon01StrategyArchitecture,
  capabilityIcon02AiFoundationalLayer,
  capabilityIcon03IntelligenceLayer,
  capabilityIcon04ConnectedSystems,
  capabilityIcon05EngineeredWithAi,
  capabilityIcon06HumanAgentExperience,
  capabilityIcon07AiFirstOperations,
]

function CapIcon({ index }: { index: number }) {
  return <InlineSvg markup={capabilityIcons[index] ?? capabilityIcons[0]} />
}

export default function CapabilitiesSection() {
  const [active, setActive] = useState(0)
  const [locked, setLocked] = useState(false)
  const c = capabilities[active]

  // Auto-cycle through capabilities; click locks
  useEffect(() => {
    if (locked) return
    const id = setTimeout(() => setActive((i) => (i + 1) % capabilities.length), CYCLE_MS)
    return () => clearTimeout(id)
  }, [active, locked])

  const select = (i: number) => {
    setLocked(true)
    setActive(i)
  }

  return (
    <section className='v22-section' id='solutions' data-surface='light' style={{ ['--v22-paper' as string]: '#F3F0EC', ['--v22-paper-2' as string]: '#EAE5DB' }}>
      <div className='v22-container'>
        <div className='v22-cap-head'>
          <div className='v22-cap-head-left'>
            <div className='num'>N°03 / What we do</div>
            <h2>Seven layers. <span style={{ color: 'var(--v22-accent)' }}>One Frontier.</span>{' '}<span style={{ whiteSpace: 'nowrap' }}>No handoff.</span></h2>
            <p className='lead'>We re&#8209;architect every layer for the AI&#8209;native enterprise. No retrofits, no silos.</p>
          </div>
        </div>

        <div className='v22-cap-interactive'>
          {/* Desktop: left sidebar tab list */}
          <div className='v22-cap-tabs' role='tablist'>
            {capabilities.map((cap, i) => (
              <button
                key={cap.num}
                role='tab'
                aria-selected={i === active}
                className={`v22-cap-tab ${i === active ? 'active' : ''}`}
                onClick={() => select(i)}
              >
                <span className='tab-num'>{cap.num}</span>
                <span className='tab-label'>
                  <span className='tab-title'>{cap.title}</span>
                  <span className='tab-kicker'>{cap.altLabel.toUpperCase()}</span>
                </span>
                <span className='v22-cap-tab-progress' />
              </button>
            ))}
          </div>

          {/* Mobile: compact prev/next navigator */}
          <div className='v22-cap-mobile-nav'>
            <button
              className='v22-cap-arrow'
              onClick={() => select((active - 1 + capabilities.length) % capabilities.length)}
              aria-label='Previous capability'
            >
              ←
            </button>
            <div className='v22-cap-mobile-label'>
              <span className='mob-num'>{c.num}</span>
              <span className='mob-title'>{c.title}</span>
              <span className='mob-dots'>
                {capabilities.map((_, i) => (
                  <span key={i} className={`mob-dot ${i === active ? 'active' : ''}`} onClick={() => select(i)} />
                ))}
              </span>
            </div>
            <button
              className='v22-cap-arrow'
              onClick={() => select((active + 1) % capabilities.length)}
              aria-label='Next capability'
            >
              →
            </button>
            {!locked && <span className='v22-cap-mobile-progress' />}
          </div>

          {/* Detail panel — content left, icon column right */}
          <div className='v22-cap-detail' role='tabpanel' key={active}>
            <div className='v22-cap-detail-content'>
              <div className='v22-cap-detail-meta'>
                <span className='detail-kicker'>{c.altLabel.toUpperCase()}</span>
                <h3>{c.title}</h3>
                <span className='detail-subtitle'>{c.subtitle}</span>
              </div>
              <p>{c.body}</p>
              <div className='v22-cap-pills'>
                {c.tags.map((tag) => (
                  <span key={tag} className='v22-cap-pill'>{tag}</span>
                ))}
              </div>
              <a href={`/v22.5/capabilities/${c.slug}`} className='v22-cap-cta'>
                {c.cta} <span className='arrow'>&rarr;</span>
              </a>
            </div>
            <div className='v22-cap-detail-icon'>
              <div className='v22-cap-icon-ring'>
                <CapIcon index={active} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
