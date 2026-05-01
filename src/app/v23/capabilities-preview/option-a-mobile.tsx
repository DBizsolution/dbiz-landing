'use client'

/* Option A — Mobile (vertical accordion).
   Compact isometric mark on the left + labels + chevron. Tap to expand.
   Preserves the stack flavour via the isometric marks that echo the desktop stack. */

import { useState } from 'react'
import { capabilities } from './data'

export function OptionAMobile() {
  const [active, setActive] = useState<number | null>(0)
  const toggle = (i: number) => setActive((cur) => (cur === i ? null : i))

  // Per-layer textures — same scheme as desktop Option A
  const texturedLayers = new Set([0, 3, 5])
  const patternForLayer = (i: number) => (texturedLayers.has(i) ? `url(#capAm-tex-${i})` : 'transparent')

  return (
    <section className='v22-section' id='cap-a-mobile'>
      <div className='v22-container'>
        <div className='v22-section-head'>
          <div className='num'>Option A / Mobile</div>
          <h2>The stack,<br /><span style={{ color: 'var(--v22-accent)' }}>in your pocket.</span></h2>
          <p className='lead'>Every layer stays visible. Tap any row to expand it.</p>
        </div>

        <div className='capAm-accordion' role='list'>
          {/* Shared texture defs */}
          <svg width='0' height='0' aria-hidden='true' style={{ position: 'absolute' }}>
            <defs>
              <pattern id='capAm-tex-0' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
                <line x1='0' y1='0' x2='0' y2='6' stroke='rgba(255,255,255,0.22)' strokeWidth='0.8' />
              </pattern>
              <pattern id='capAm-tex-3' patternUnits='userSpaceOnUse' width='14' height='14'>
                <path d='M 0 0 L 14 14 M 14 0 L 0 14' stroke='rgba(255,255,255,0.1)' strokeWidth='0.5' />
              </pattern>
              <pattern id='capAm-tex-5' patternUnits='userSpaceOnUse' width='16' height='12'>
                <circle cx='1' cy='1' r='0.7' fill='rgba(255,255,255,0.18)' />
              </pattern>
            </defs>
          </svg>

          {capabilities.map((cap, i) => {
            const isOpen = active === i
            // All icons stay orange (blueprint ink). Active = brighter stroke + orange fill.
            const stroke = 'var(--v22-accent)'
            const strokeOpacity = isOpen ? 1 : 0.55
            const sw = isOpen ? 1.6 : 1
            return (
              <div key={cap.num} className={`capAm-row ${isOpen ? 'is-open' : ''}`} role='listitem'>
                <button
                  className='capAm-row-trigger'
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`capAm-body-${i}`}
                >
                  {/* Compact isometric mark — left — L## sits inside the front face */}
                  <svg viewBox='0 0 72 44' className='capAm-row-mark' aria-hidden='true'>
                    {/* Front face fill — orange tint when active, transparent otherwise */}
                    <rect x='2' y='14' width='56' height='26' fill={isOpen ? 'rgba(240,123,47,0.16)' : 'transparent'} />
                    {/* Texture overlay */}
                    <rect x='2' y='14' width='56' height='26' fill={patternForLayer(i)} />
                    {/* Front face border */}
                    <rect x='2' y='14' width='56' height='26' fill='none' stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth={sw} />
                    {/* Top face */}
                    <polygon points='2,14 58,14 70,2 14,2' fill='transparent' stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth={sw} />
                    {/* Right face */}
                    <polygon points='58,14 70,2 70,28 58,40' fill='transparent' stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth={sw} />
                    {/* Afterglow trail — slightly larger, fades with a short delay.
                        Sits behind the main dot for a soft comet-tail feel. */}
                    <circle r='2.6' fill='var(--v22-accent)' opacity='0'>
                      <animate
                        attributeName='cy'
                        values='14;40;40'
                        keyTimes='0;0.143;1'
                        dur={`${capabilities.length}s`}
                        begin={`${i - 0.05}s`}
                        repeatCount='indefinite'
                      />
                      <animate
                        attributeName='cx'
                        values={`${24 + (i % 3) * 6};${32 + (i % 3) * 6};${32 + (i % 3) * 6}`}
                        keyTimes='0;0.143;1'
                        dur={`${capabilities.length}s`}
                        begin={`${i - 0.05}s`}
                        repeatCount='indefinite'
                      />
                      <animate
                        attributeName='opacity'
                        values='0;0.35;0.35;0;0'
                        keyTimes='0;0.02;0.12;0.143;1'
                        dur={`${capabilities.length}s`}
                        begin={`${i - 0.05}s`}
                        repeatCount='indefinite'
                      />
                    </circle>

                    {/* Main cascade particle — flows down through this row's front face */}
                    <circle r='1.6' fill='var(--v22-accent)'>
                      <animate
                        attributeName='cy'
                        values='14;40;40'
                        keyTimes='0;0.143;1'
                        dur={`${capabilities.length}s`}
                        begin={`${i}s`}
                        repeatCount='indefinite'
                      />
                      <animate
                        attributeName='cx'
                        values={`${24 + (i % 3) * 6};${32 + (i % 3) * 6};${32 + (i % 3) * 6}`}
                        keyTimes='0;0.143;1'
                        dur={`${capabilities.length}s`}
                        begin={`${i}s`}
                        repeatCount='indefinite'
                      />
                      <animate
                        attributeName='opacity'
                        values='0;0.95;0.95;0;0'
                        keyTimes='0;0.02;0.12;0.143;1'
                        dur={`${capabilities.length}s`}
                        begin={`${i}s`}
                        repeatCount='indefinite'
                      />
                    </circle>

                    {/* Right-face pulsing dot — lights up while this row is "current" */}
                    <circle cx='64' cy='20' r='1.4' fill='var(--v22-accent)' opacity='0'>
                      <animate
                        attributeName='opacity'
                        values='0;0.9;0.6;0.9;0;0'
                        keyTimes='0;0.03;0.08;0.12;0.143;1'
                        dur={`${capabilities.length}s`}
                        begin={`${i}s`}
                        repeatCount='indefinite'
                      />
                      <animate
                        attributeName='r'
                        values='1.2;1.8;1.2;1.8;1.2;1.2'
                        keyTimes='0;0.03;0.07;0.11;0.143;1'
                        dur={`${capabilities.length}s`}
                        begin={`${i}s`}
                        repeatCount='indefinite'
                      />
                    </circle>

                    {/* Handoff dot — briefly appears below the box as the particle exits */}
                    {i < capabilities.length - 1 && (
                      <circle r='1.2' fill='var(--v22-accent)' opacity='0'>
                        <animate
                          attributeName='cy'
                          values='40;44;40'
                          keyTimes='0;0.143;1'
                          dur={`${capabilities.length}s`}
                          begin={`${i}s`}
                          repeatCount='indefinite'
                        />
                        <animate
                          attributeName='cx'
                          values={`${32 + (i % 3) * 6}`}
                          dur={`${capabilities.length}s`}
                          begin={`${i}s`}
                          repeatCount='indefinite'
                        />
                        <animate
                          attributeName='opacity'
                          values='0;0;0.9;0;0'
                          keyTimes='0;0.1;0.143;0.16;1'
                          dur={`${capabilities.length}s`}
                          begin={`${i}s`}
                          repeatCount='indefinite'
                        />
                      </circle>
                    )}
                    {/* Layer number inside the front face — always orange */}
                    <text
                      x='30'
                      y='32'
                      fontFamily='var(--font-mono)'
                      fontSize='11'
                      fontWeight='700'
                      letterSpacing='0.8'
                      fill='var(--v22-accent)'
                      opacity={isOpen ? 1 : 0.8}
                      textAnchor='middle'
                    >
                      L{cap.num}
                    </text>
                  </svg>

                  {/* Labels */}
                  <span className='capAm-row-labels'>
                    <span className='capAm-row-kicker'>{cap.kicker.toUpperCase()}</span>
                    <span className='capAm-row-alt'>{cap.altLabel.toUpperCase()}</span>
                  </span>

                  {/* Chevron */}
                  <span className='capAm-row-chevron' aria-hidden='true'>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  id={`capAm-body-${i}`}
                  className='capAm-row-body'
                  hidden={!isOpen}
                >
                  <h3 className='capAm-body-title'>{cap.title}</h3>
                  <p className='capAm-body-sub'>{cap.subtitle}</p>
                  <p className='capAm-body-copy'>{cap.body}</p>
                  <div className='capAm-body-tags'>
                    {cap.tags.slice(0, 4).map((t) => (
                      <span key={t} className='capAm-body-tag'>{t}</span>
                    ))}
                  </div>
                  <a href='#' className='capAm-body-cta'>
                    {cap.cta} <span>→</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
