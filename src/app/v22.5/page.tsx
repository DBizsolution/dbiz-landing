/* V22.5 — Blueprint in Motion
   Restructured hero: stats animate in directly under the hero,
   then a manifesto band carries the body copy. Logo wall removed. */
'use client'

import { useEffect, useRef, useState } from 'react'
import { InlineSvg } from '@/components/inline-svg'
import { heroStackDiagram } from '@/lib/svg-assets'
import CapabilitiesSection from './capabilities-section'
import FrameworkSection from './framework-section'
import { NavScrollEffect } from './nav-scroll'
import ProvenSection from './proven-section'
import TestimonialsSection from './testimonials-section'
import WhySection from './why-section'

/* Animated count-up — eases an integer from 0 to `target` over `durationMs`
   when the host element first intersects the viewport. */
function CountUp({ target, suffix = '', durationMs = 1400 }: { target: number; suffix?: string; durationMs?: number }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const start = () => {
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / durationMs)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(Math.round(eased * target))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        start()
        io.disconnect()
      }
    }, { threshold: 0 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [target, durationMs])
  return <span ref={ref}>{value}{suffix}</span>
}

const stats = [
  { coord: '[A·01]', target: 6,   suffix: '',  lbl: 'Countries' },
  { coord: '[A·02]', target: 10,  suffix: '',  lbl: 'Offices' },
  { coord: '[A·03]', target: 50,  suffix: '+', lbl: 'Enterprise Clients' },
  { coord: '[A·04]', target: 120, suffix: '+', lbl: 'Solutions delivered' },
  { coord: '[A·05]', target: 500, suffix: '+', lbl: 'Engineers' },
]

const trust = ['ACFS Logistics', 'Aldar', 'Carlisle Homes', 'Custom Fleet', 'Southern Cross Care', 'Angle Auto', 'Smart Group', 'Nationwide Towing', 'Fleet Partners', 'Ventia']

/* ─── SVG Diagrams (from V5) ─── */

function HeroDiagram() {
  return <InlineSvg markup={heroStackDiagram} />
}

function DataFlowDiagram() {
  return (
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v22-mini-diagram'>
      <defs>
        <filter id='v22-mini-glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        <pattern id='v22-mini-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v22-ink-grid)' strokeWidth='0.5' />
        </pattern>
      </defs>
      <rect x='10' y='10' width='320' height='220' fill='url(#v22-mini-grid)' />
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v22-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v22-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·D-01</text>
      <g className='v22-mini-node' style={{ '--node-delay': '0s' } as React.CSSProperties}>
        <rect x='30' y='50' width='80' height='40' fill='var(--v22-paper)' stroke='none' />
        <rect x='30' y='50' width='80' height='40' fill='var(--v22-ink-node-fill)' stroke='var(--v22-ink-corner)' strokeWidth='1.8' />
        <circle cx='38' cy='58' r='3.5' fill='var(--v22-paper)' /><circle cx='38' cy='58' r='2.5' fill='#F07B2F' />
        <text x='70' y='67' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v22-ink-label)' textAnchor='middle' letterSpacing='1'>INPUT</text>
        <text x='70' y='82' fontFamily='var(--font-mono)' fontSize='13' fill='#F07B2F' textAnchor='middle' letterSpacing='1' fontWeight='700'>SOURCE</text>
      </g>
      <g className='v22-mini-node' style={{ '--node-delay': '0.3s' } as React.CSSProperties}>
        <rect x='230' y='50' width='80' height='40' fill='var(--v22-paper)' stroke='none' />
        <rect x='230' y='50' width='80' height='40' fill='var(--v22-ink-node-fill)' stroke='var(--v22-ink-corner)' strokeWidth='1.8' />
        <circle cx='238' cy='58' r='3.5' fill='var(--v22-paper)' /><circle cx='238' cy='58' r='2.5' fill='#F07B2F' />
        <text x='270' y='67' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v22-ink-label)' textAnchor='middle' letterSpacing='1'>PROCESS</text>
        <text x='270' y='82' fontFamily='var(--font-mono)' fontSize='13' fill='#F07B2F' textAnchor='middle' letterSpacing='1' fontWeight='700'>AGENT</text>
      </g>
      <g className='v22-mini-node' style={{ '--node-delay': '0.6s' } as React.CSSProperties}>
        <rect x='130' y='150' width='80' height='40' fill='var(--v22-paper)' stroke='none' />
        <rect x='130' y='150' width='80' height='40' fill='var(--v22-ink-node-fill)' stroke='var(--v22-ink-corner)' strokeWidth='1.8' />
        <circle cx='138' cy='158' r='3.5' fill='var(--v22-paper)' /><circle cx='138' cy='158' r='2.5' fill='#F07B2F' />
        <text x='170' y='167' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v22-ink-label)' textAnchor='middle' letterSpacing='1'>RESULT</text>
        <text x='170' y='182' fontFamily='var(--font-mono)' fontSize='13' fill='#F07B2F' textAnchor='middle' letterSpacing='1' fontWeight='700'>OUTPUT</text>
      </g>
      <path d='M 110 70 L 230 70' stroke='var(--v22-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' />
      <text x='170' y='66' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v22-ink-text-accent)' textAnchor='middle'>API</text>
      <path d='M 70 90 L 170 150' stroke='var(--v22-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' />
      <text x='110' y='115' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v22-ink-text-accent)' textAnchor='middle' transform='rotate(-28 110 115)'>STREAM</text>
      <path d='M 270 90 L 170 150' stroke='var(--v22-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' />
      <text x='230' y='115' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v22-ink-text-accent)' textAnchor='middle' transform='rotate(28 230 115)'>SYNC</text>
      <circle cx='170' cy='70' r='4.5' fill='var(--v22-paper)' />
      <circle cx='170' cy='70' r='3.5' fill='#F07B2F' filter='url(#v22-mini-glow)' />
      <circle cx='120' cy='120' r='4' fill='var(--v22-paper)' />
      <circle cx='120' cy='120' r='3' fill='var(--v22-ink-blob)' />
      <circle cx='220' cy='120' r='4' fill='var(--v22-paper)' />
      <circle cx='220' cy='120' r='3' fill='var(--v22-ink-blob)' />
      <line x1='30' y1='210' x2='110' y2='210' stroke='var(--v22-ink-measure)' strokeWidth='0.5' />
      <line x1='30' y1='207' x2='30' y2='213' stroke='var(--v22-ink-measure)' strokeWidth='0.5' />
      <line x1='110' y1='207' x2='110' y2='213' stroke='var(--v22-ink-measure)' strokeWidth='0.5' />
      <text x='70' y='218' fontFamily='var(--font-mono)' fontSize='6' fill='var(--v22-ink-dim)' textAnchor='middle'>80px · 4 CELLS</text>
    </svg>
  )
}

function NetworkDiagram() {
  const nodes = [
    { label: 'AWS', angle: 0 },
    { label: 'AZURE', angle: 60 },
    { label: 'DATA', angle: 120 },
    { label: 'API', angle: 180 },
    { label: 'AGENT', angle: 240 },
    { label: 'APP', angle: 300 },
  ]
  return (
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v22-mini-diagram'>
      <defs>
        <pattern id='v22-net-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v22-ink-grid)' strokeWidth='0.5' />
        </pattern>
        <filter id='v22-hub-glow'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
      </defs>
      <rect x='10' y='10' width='320' height='220' fill='url(#v22-net-grid)' />
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v22-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v22-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·G-01</text>
      <circle cx='170' cy='130' r='80' fill='none' stroke='var(--v22-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />
      <circle cx='170' cy='130' r='60' fill='none' stroke='var(--v22-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />
      <circle cx='170' cy='130' r='40' fill='none' stroke='var(--v22-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />
      <circle cx='170' cy='130' r='24' fill='var(--v22-paper)' stroke='none' />
      <circle cx='170' cy='130' r='24' fill='var(--v22-ink-hub)' stroke='var(--v22-ink-corner)' strokeWidth='2.5' />
      <circle cx='170' cy='130' r='12' fill='#F07B2F' filter='url(#v22-hub-glow)' />
      <text x='170' y='135' fontFamily='var(--font-mono)' fontSize='8' fill='#fff' textAnchor='middle' fontWeight='700'>HUB</text>
      {nodes.map((node, i) => {
        const angle = (node.angle - 90) * Math.PI / 180
        const x = 170 + Math.cos(angle) * 80
        const y = 130 + Math.sin(angle) * 80
        return (
          <g key={i}>
            <line x1='170' y1='130' x2={x} y2={y} stroke='var(--v22-ink-spoke)' strokeWidth='1.5' />
            <circle cx={x} cy={y} r='8' fill='var(--v22-paper)' stroke='none' />
            <circle cx={x} cy={y} r='8' fill='var(--v22-ink-blob)' stroke='var(--v22-ink-corner)' strokeWidth='1.8' />
            <text x={x} y={y + (node.angle === 0 ? -14 : node.angle === 180 ? 20 : node.angle < 180 ? -12 : 18)} fontFamily='var(--font-mono)' fontSize='7' fill='var(--v22-ink-blob)' textAnchor='middle' letterSpacing='1'>{node.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

function ProcessDiagram() {
  const steps = [
    { num: 5, label: 'ALIGN', sublabel: 'ASSESS' },
    { num: 15, label: 'SPECIFY', sublabel: 'VALIDATE' },
    { num: 90, label: 'DEPLOY', sublabel: 'SCALE' },
  ]
  return (
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v22-mini-diagram'>
      <defs>
        <marker id='v22-arrow' markerWidth='10' markerHeight='10' refX='9' refY='5' orient='auto'>
          <polygon points='0 0, 10 5, 0 10' fill='var(--v22-ink-text-accent)' />
        </marker>
        <pattern id='v22-proc-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v22-ink-grid)' strokeWidth='0.5' />
        </pattern>
      </defs>
      <rect x='10' y='10' width='320' height='220' fill='url(#v22-proc-grid)' />
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v22-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v22-ink-corner)' strokeWidth='2' />
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v22-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·F-01</text>
      <line x1='30' y1='50' x2='310' y2='50' stroke='var(--v22-ink-divider-soft)' strokeWidth='1.2' strokeDasharray='5 5' />
      {steps.map((step, i) => (
        <g key={i}>
          <rect x={30 + i * 100} y='70' width='80' height='100' fill='var(--v22-paper)' stroke='none' />
          <rect x={30 + i * 100} y='70' width='80' height='100' fill='var(--v22-ink-node-fill)' stroke='var(--v22-ink-corner)' strokeWidth='1.8' />
          <text x={70 + i * 100} y='98' fontFamily='var(--font-mono)' fontSize='24' fill='#F07B2F' textAnchor='middle' fontWeight='800'>{step.num}</text>
          <text x={70 + i * 100} y='112' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v22-ink-label)' textAnchor='middle' letterSpacing='1'>DAYS</text>
          <line x1={35 + i * 100} y1='120' x2={105 + i * 100} y2='120' stroke='var(--v22-ink-divider-soft)' strokeWidth='0.6' strokeDasharray='2 2' />
          <text x={70 + i * 100} y='138' fontFamily='var(--font-mono)' fontSize='10' fill='#F07B2F' textAnchor='middle' fontWeight='700' letterSpacing='1'>{step.label}</text>
          <text x={70 + i * 100} y='151' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v22-ink-label-strong)' textAnchor='middle' letterSpacing='0.5'>&</text>
          <text x={70 + i * 100} y='162' fontFamily='var(--font-mono)' fontSize='10' fill='#F07B2F' textAnchor='middle' fontWeight='700' letterSpacing='1'>{step.sublabel}</text>
          <circle cx={70 + i * 100} cy='50' r='4.5' fill='var(--v22-paper)' />
          <circle cx={70 + i * 100} cy='50' r='3.5' fill='#F07B2F' stroke='var(--v22-ink-corner)' strokeWidth='1.8' />
          <line x1={70 + i * 100} y1='54' x2={70 + i * 100} y2='70' stroke='var(--v22-ink-spoke)' strokeWidth='1.2' strokeDasharray='2 2' />
          {i < 2 && <path d={`M ${110 + i * 100} 120 L ${130 + i * 100} 120`} stroke='var(--v22-ink-corner)' strokeWidth='2.5' markerEnd='url(#v22-arrow)' />}
        </g>
      ))}
      <line x1='30' y1='200' x2='310' y2='200' stroke='var(--v22-ink-measure)' strokeWidth='0.6' />
      <line x1='30' y1='196' x2='30' y2='204' stroke='var(--v22-ink-measure)' strokeWidth='0.6' />
      <line x1='310' y1='196' x2='310' y2='204' stroke='var(--v22-ink-measure)' strokeWidth='0.6' />
      <text x='170' y='215' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v22-ink-dim)' textAnchor='middle' letterSpacing='1'>110 DAYS · TOTAL</text>
    </svg>
  )
}

/* ─── Page ─── */

export default function V22Page() {
  return (
    <>
      <NavScrollEffect />
      {/* NAV — V4 grid structure, V5 dark treatment */}
      <nav className='v22-nav'>
        <div className='v22-nav-inner'>
          <div className='v22-logo'>
            <img src='/dbiz-logo.svg' alt='DBiz.ai' width='80' height='45' />
          </div>
          <ul className='v22-nav-links'>
            <li><a href='#solutions'>Our Solutions</a></li>
            <li><a href='#work'>Our Work</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#careers'>Careers</a></li>
          </ul>
          <div className='v22-nav-cta-wrap'>
            <a href='#cta' className='v22-nav-cta'>Get an assessment <span>→</span></a>
          </div>
          <details className='v22-nav-mobile'>
            <summary className='v22-nav-burger' aria-label='Menu'>
              <span /><span /><span />
            </summary>
            <ul className='v22-nav-mobile-panel'>
              <li><a href='#solutions'>Our Solutions</a></li>
              <li><a href='#work'>Our Work</a></li>
              <li><a href='#about'>About Us</a></li>
              <li><a href='#careers'>Careers</a></li>
              <li><a href='/contact'>Talk to our team</a></li>
              <li><a href='#cta' className='v22-nav-mobile-cta'>Get an assessment →</a></li>
            </ul>
          </details>
        </div>
      </nav>

      {/* HERO — V4 12-col grid + V5 diagram */}
      <section className='v22-hero'>
        <div className='v22-container'>
          <div className='v22-hero-grid'>
            <div className='v22-hero-meta'>
              <span className='num'>N°01 / Homepage</span>
            </div>
            <div className='v22-hero-eyebrow'>
              <span className='bar' aria-hidden='true' />
              <span>Human-Led</span>
              <span className='sep' aria-hidden='true'>|</span>
              <span>Agent-Operated</span>
              <span className='sep' aria-hidden='true'>|</span>
              <span>Data-Powered</span>
            </div>
            <div className='v22-hero-title'>
              <h1>
                Your enterprise.<br />
                <em>Agent-operated.</em><br />
                Starting now.
              </h1>
            </div>
            <div className='v22-hero-ctas'>
              <a href='#solutions' className='v22-cta-primary'>
                Explore our AI stack <span className='arrow'>→</span>
              </a>
              <a href='/contact' className='v22-cta-text'>Talk to our team</a>
            </div>
            <div className='v22-hero-diagram'>
              <div className='v22-diagram-label'>
                <span>DWG · FRONTIER-ORG-01</span><span>REV.01</span>
              </div>
              <HeroDiagram />
              <div className='v22-diagram-foot'>
                <span>SCALE 1:1</span><span>SHEET A1</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* BY THE NUMBERS — slim marquee strip below the hero, cream paper for proof-break contrast */}
      <section className='v22-numbers-strip' data-surface='light'>
        <div className='v22-numbers-marquee' aria-hidden='false'>
          <div className='v22-numbers-track'>
            {/* Render twice for a seamless marquee loop (-50% translateX wraps). */}
            {[...stats, ...stats].map((s, i) => (
              <div key={`${s.coord}-${i}`} className='v22-number-item'>
                <span className='v22-number-val'>
                  {i < stats.length
                    ? <CountUp target={s.target} suffix={s.suffix} />
                    : <span>{s.target}{s.suffix}</span>}
                </span>
                <span className='v22-number-lbl'>{s.lbl}</span>
                <span className='v22-number-sep' aria-hidden='true' />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO — main paragraph + separated declarative line */}
      <section className='v22-manifesto' aria-label='The problem'>
        <div className='v22-container'>
          <p className='v22-manifesto-text'>
            Most enterprises have tried AI. Most of it didn&apos;t scale, not because the technology failed, but because no one connected the ambition to what actually got built.
          </p>
          <p className='v22-manifesto-resolve'>
            <span className='v22-manifesto-emph'>We close that gap.</span> We call the result a Frontier Organisation: human-led, agent-operated, data-powered.
          </p>
        </div>
      </section>

      {/* CAPABILITIES — N°03 / What we do */}
      <CapabilitiesSection />

      {/* FRAMEWORK — N°04 / How we do it (AI Transformation Stack) */}
      <FrameworkSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* PROVEN — tabbed filter cards */}
      <ProvenSection />

      {/* WHY — interactive diagram */}
      <WhySection />

      {/* FINAL CTA — Centered layout with grid background */}
      <section className='v22-cta' id='cta'>
        <div className='v22-cta-inner'>
          <span className='v22-corner tl' />
          <span className='v22-corner tr' />
          <span className='v22-corner bl' />
          <span className='v22-corner br' />
          <div className='v22-cta-content'>
            <div className='v22-cta-label'>[Z·01] NEXT STEP</div>
            <h2>
              Your Frontier Organisation<br />
              starts with a <span style={{ color: 'var(--v22-accent)' }}>conversation.</span>
            </h2>
            <div className='v22-cta-sub'>One partner · Full stack · No handoff</div>
            <div className='v22-cta-actions'>
              <a href='#' className='v22-cta-primary'>Contact us <span className='arrow'>→</span></a>
              <a href='#' className='v22-cta-text'>Or get an architecture assessment</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='v22-footer' id='careers'>
        <div className='v22-container'>
          <div className='v22-foot-top'>
            <div className='v22-foot-brand'>
              <div className='v22-logo'>
                <img src='/dbiz-logo.svg' alt='DBiz.ai' width='80' height='45' />
              </div>
              <div className='tag'>Impact at scale.</div>
              <div className='meta'>10 offices · 6 countries · 800+ people</div>
            </div>
            <div className='v22-foot-col'>
              <div className='v22-mono'>Company</div>
              <ul><li><a href='#'>About Us</a></li><li><a href='#'>Our Work</a></li><li><a href='#'>Careers</a></li><li><a href='#'>Contact Us</a></li><li><a href='#'>Blog</a></li></ul>
            </div>
            <div className='v22-foot-col'>
              <div className='v22-mono'>Solutions</div>
              <ul><li><a href='#'>Strategy &amp; Architecture</a></li><li><a href='#'>Cloud</a></li><li><a href='#'>Data &amp; AI</a></li><li><a href='#'>Business Apps &amp; Integration</a></li><li><a href='#'>Product &amp; Experience</a></li><li><a href='#'>Managed Services</a></li></ul>
            </div>
            <div className='v22-foot-col'>
              <div className='v22-mono'>Partners</div>
              <ul><li><a href='#'>AWS</a></li><li><a href='#'>Microsoft Azure</a></li><li><a href='#'>Salesforce</a></li><li><a href='#'>Snowflake</a></li><li><a href='#'>Databricks</a></li><li><a href='#'>Boomi</a></li><li><a href='#'>Anthropic</a></li></ul>
            </div>
          </div>
          <div className='v22-foot-legal'>
            <p className='ack'>We acknowledge the Traditional Custodians of the lands on which we work and live, and pay our respects to Elders past, present, and emerging.</p>
            <div className='links'>
              <a href='#'>Privacy Policy</a><a href='#'>Legal</a><a href='#'>Terms of Use</a><a href='#'>Modern Slavery Statement</a>
            </div>
            <div className='v22-foot-copy'>© 2026 DBiz.ai. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
