/* V22.5 — Connected Systems / Enterprise Application Services
   Tight 6-section structure: Capability areas → AI Accelerators →
   Execution in action → In production → Engagement → Proof → CTA.
   Positioning: implementation depth first, AI built in not bolted on. */

import type { ReactNode } from 'react'
import Link from 'next/link'
import { capabilities } from '../../capabilities-data'
import { Icon } from '@/components/icon'
import ServicesSection from './services-section'
import ProofCarousel from './proof-carousel'

/* Boomi & Workato use their official wordmarks served from public/. Both are
   wide lockups, so Workato sits slightly shorter to balance its long mark. */
function BoomiMark() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src='/boomi-logo.svg' alt='' height={26} style={{ height: 26, width: 'auto' }} />
}
function WorkatoMark() {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src='/workato-logo.png' alt='' height={22} style={{ height: 22, width: 'auto' }} />
}

/* Partner marks. Microsoft/Salesforce/MuleSoft use real library logos;
   Boomi/Workato fall back to the brand-coloured monograms above. */
const PARTNER_MARKS: Record<string, ReactNode> = {
  Microsoft: <Icon icon='logos:microsoft' height={26} aria-hidden='true' />,
  Salesforce: <Icon icon='logos:salesforce' height={26} aria-hidden='true' />,
  MuleSoft: <Icon icon='simple-icons:mulesoft' height={24} color='#00A0DF' aria-hidden='true' />,
  Boomi: <BoomiMark />,
  Workato: <WorkatoMark />,
}

/* Real logos for the wider-ecosystem marquee, keyed by wordmark. Brands with
   no library/official logo (Dynamics, NetSuite, ServiceNow, Jitterbit, Workday,
   Power Platform, Copilot Studio, Agentforce) keep their text wordmark. */
const MARQUEE_LOGOS: Record<string, ReactNode> = {
  Salesforce: <Icon icon='logos:salesforce' height={20} aria-hidden='true' />,
  'Oracle ERP': <Icon icon='logos:oracle' height={15} aria-hidden='true' />,
  AWS: <Icon icon='logos:aws' height={22} aria-hidden='true' />,
  Azure: <Icon icon='logos:microsoft-azure' height={20} aria-hidden='true' />,
  SAP: <Icon icon='logos:sap' height={20} aria-hidden='true' />,
  'Anthropic Claude': <Icon icon='logos:anthropic' height={15} aria-hidden='true' />,
  Zapier: <Icon icon='logos:zapier' height={18} aria-hidden='true' />,
  'Informatica IDMC': <Icon icon='simple-icons:informatica' height={18} color='#FF4D00' aria-hidden='true' />,
  n8n: <Icon icon='simple-icons:n8n' height={18} color='#EA4B71' aria-hidden='true' />,
  MuleSoft: <Icon icon='simple-icons:mulesoft' height={18} color='#00A0DF' aria-hidden='true' />,
  // eslint-disable-next-line @next/next/no-img-element
  Boomi: <img src='/boomi-logo.svg' alt='' style={{ height: 18, width: 'auto' }} />,
  // eslint-disable-next-line @next/next/no-img-element
  Workato: <img src='/workato-logo.png' alt='' style={{ height: 14, width: 'auto' }} />,
}

const SLUG = 'connected-systems'
const idx = capabilities.findIndex(c => c.slug === SLUG)
const cap = capabilities[idx]
const prev = idx > 0 ? capabilities[idx - 1] : null
const next = idx < capabilities.length - 1 ? capabilities[idx + 1] : null

/* ─── Accelerator glyphs — schematic 80×80 SVGs, one per accelerator.
   Style matches §03 patterns and why-section: dim guide marks + ink primary
   strokes + accent details. */
function AccelGlyph({ i }: { i: number }) {
  /* Surface-aware: ink/dim resolve to navy on light surface, white on dark.
     Variables defined in theme.css and flipped via [data-surface]. */
  const ink = 'var(--cdp-glyph-ink, rgba(13, 27, 62, 0.85))'
  const dim = 'var(--cdp-glyph-dim, rgba(13, 27, 62, 0.25))'
  const acc = 'var(--v22-accent)'

  if (i === 0) return (
    /* iConnector — MCP wrapper around 3 platform nodes */
    <svg viewBox='0 0 80 80' aria-hidden='true' className='v22-cdp-accel-glyph'>
      <circle cx='40' cy='40' r='34' stroke={dim} strokeWidth='0.7' fill='none' strokeDasharray='1.5 2.5' />
      <circle cx='40' cy='40' r='28' stroke={ink} strokeWidth='1' fill='none' />
      {[270, 30, 150].map((angle, k) => {
        const rad = (angle * Math.PI) / 180
        const x = 40 + Math.cos(rad) * 18
        const y = 40 + Math.sin(rad) * 18
        return (
          <g key={k}>
            <rect x={x - 5} y={y - 5} width='10' height='10' fill={k === 0 ? acc : 'none'} stroke={k === 0 ? acc : ink} strokeWidth='1' />
            <line x1={x} y1={y} x2='40' y2='40' stroke={dim} strokeWidth='0.8' strokeDasharray='2 2' />
          </g>
        )
      })}
      <circle cx='40' cy='40' r='3' fill={acc} />
    </svg>
  )

  if (i === 1) return (
    /* NEXUS — concentric runtime layers with agent endpoints. Center dot
       has a subtle pulse animation (the only motion in §02 — communicates
       "this is the live runtime spine"). */
    <svg viewBox='0 0 80 80' aria-hidden='true' className='v22-cdp-accel-glyph v22-cdp-accel-glyph--nexus'>
      <circle cx='40' cy='40' r='32' stroke={dim} strokeWidth='0.7' fill='none' strokeDasharray='1.5 2.5' />
      <circle cx='40' cy='40' r='24' stroke={ink} strokeWidth='1' fill='none' />
      <circle cx='40' cy='40' r='16' stroke={ink} strokeWidth='0.8' fill='none' />
      <circle className='v22-cdp-nexus-ring' cx='40' cy='40' r='10' stroke={acc} strokeWidth='1.4' fill='none' />
      {[45, 135, 225, 315].map((a, k) => {
        const rad = (a * Math.PI) / 180
        return <circle key={k} cx={40 + Math.cos(rad) * 32} cy={40 + Math.sin(rad) * 32} r='2.2' fill={ink} />
      })}
      <circle className='v22-cdp-nexus-pulse' cx='40' cy='40' r='3' fill={acc} />
    </svg>
  )

  if (i === 2) return (
    /* Agent Studio — multi-agent composition tree */
    <svg viewBox='0 0 80 80' aria-hidden='true' className='v22-cdp-accel-glyph'>
      {/* Parent agent */}
      <circle cx='40' cy='18' r='9' stroke={ink} strokeWidth='1' fill='none' />
      <circle cx='40' cy='18' r='4.5' fill={acc} />
      {/* Connection lines */}
      <line x1='40' y1='27' x2='20' y2='52' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      <line x1='40' y1='27' x2='40' y2='52' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      <line x1='40' y1='27' x2='60' y2='52' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      {/* 3 child agents */}
      {[20, 40, 60].map((cx, k) => (
        <g key={k}>
          <circle cx={cx} cy='60' r='6' fill='none' stroke={ink} strokeWidth='1' />
          <circle cx={cx} cy='60' r='2' fill={ink} />
        </g>
      ))}
    </svg>
  )

  /* i === 3 — Productivity Copilots — embedded copilot panel inside platform UI */
  return (
    <svg viewBox='0 0 80 80' aria-hidden='true' className='v22-cdp-accel-glyph'>
      <rect x='8' y='14' width='64' height='52' stroke={ink} strokeWidth='1' fill='none' />
      <rect x='8' y='14' width='64' height='8' fill={dim} />
      {/* Embedded copilot panel — orange */}
      <rect x='44' y='28' width='24' height='34' fill={acc} opacity='0.12' stroke={acc} strokeWidth='1.2' />
      <line x1='48' y1='36' x2='64' y2='36' stroke={acc} strokeWidth='1.1' strokeLinecap='round' />
      <line x1='48' y1='42' x2='60' y2='42' stroke={acc} strokeWidth='1.1' strokeLinecap='round' />
      <line x1='48' y1='48' x2='62' y2='48' stroke={acc} strokeWidth='1.1' strokeLinecap='round' />
      <circle cx='49' cy='56' r='1.5' fill={acc} />
      {/* Left content lines */}
      <line x1='14' y1='32' x2='40' y2='32' stroke={dim} strokeWidth='0.9' />
      <line x1='14' y1='40' x2='40' y2='40' stroke={dim} strokeWidth='0.9' />
      <line x1='14' y1='48' x2='34' y2='48' stroke={dim} strokeWidth='0.9' />
    </svg>
  )
}

/* ─── Accelerator system diagram — shows how the four accelerators stack
   into one architecture: composition (Agent Studio + Copilots) → runtime
   (NEXUS) → integration (iConnector) → substrate (Boomi/MuleSoft/Workato)
   → enterprise platforms. Sits below the §02 cards. */
function AcceleratorSystem() {
  const ink = 'rgba(13, 27, 62, 0.85)'
  const dim = 'rgba(13, 27, 62, 0.32)'
  const dim2 = 'rgba(13, 27, 62, 0.55)'
  const acc = 'var(--v22-accent)'
  const accBg = 'rgba(240, 123, 47, 0.06)'
  const accBgStrong = 'rgba(240, 123, 47, 0.1)'

  return (
    <svg viewBox='0 0 800 540' aria-hidden='true' className='v22-cdp-accel-system'>
      {/* Frame corner ticks */}
      <g stroke={dim} strokeWidth='0.8'>
        <line x1='8' y1='8' x2='28' y2='8' /><line x1='8' y1='8' x2='8' y2='28' />
        <line x1='792' y1='8' x2='772' y2='8' /><line x1='792' y1='8' x2='792' y2='28' />
        <line x1='8' y1='532' x2='28' y2='532' /><line x1='8' y1='532' x2='8' y2='512' />
        <line x1='792' y1='532' x2='772' y2='532' /><line x1='792' y1='532' x2='792' y2='512' />
      </g>
      {/* Drawing header */}
      <text x='20' y='28' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.6' fill={dim2}>FIG · ACCELERATOR STACK</text>
      <text x='780' y='28' textAnchor='end' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.6' fill={acc}>FLOW ↓</text>

      {/* Top — User / Surface */}
      <line x1='80' y1='62' x2='720' y2='62' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />
      <text x='400' y='54' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.6' fill={dim2}>USERS · AGENTS</text>
      <line x1='400' y1='64' x2='400' y2='90' stroke={dim2} strokeWidth='1' strokeDasharray='3 3' />

      {/* Layer A: Composition — Agent Studio + Productivity Copilots */}
      <text x='40' y='112' fontFamily='var(--font-mono)' fontSize='9' fontWeight='600' letterSpacing='1.6' fill={acc}>A · COMPOSITION</text>
      <g>
        <rect x='80' y='100' width='290' height='70' fill='#ffffff' stroke={ink} strokeWidth='1.2' />
        <line x1='80' y1='102' x2='370' y2='102' stroke={acc} strokeWidth='3' />
        <text x='225' y='130' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='15' fontWeight='700' letterSpacing='-0.014em' fill={ink}>Agent Studio</text>
        <text x='225' y='150' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.2' fill={dim2}>multi-agent · gates · validation</text>
      </g>
      <g>
        <rect x='430' y='100' width='290' height='70' fill='#ffffff' stroke={ink} strokeWidth='1.2' />
        <line x1='430' y1='102' x2='720' y2='102' stroke={acc} strokeWidth='3' />
        <text x='575' y='130' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='15' fontWeight='700' letterSpacing='-0.014em' fill={ink}>Productivity Copilots</text>
        <text x='575' y='150' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.2' fill={dim2}>Agentforce · Copilot Studio · Now Assist</text>
      </g>
      {/* Connection from A to NEXUS */}
      <line x1='225' y1='170' x2='400' y2='210' stroke={acc} strokeWidth='1' strokeDasharray='3 3' />
      <line x1='575' y1='170' x2='400' y2='210' stroke={acc} strokeWidth='1' strokeDasharray='3 3' />
      <circle cx='400' cy='210' r='2.5' fill={acc} />

      {/* Layer B: Runtime — NEXUS (highlighted) */}
      <text x='40' y='234' fontFamily='var(--font-mono)' fontSize='9' fontWeight='600' letterSpacing='1.6' fill={acc}>B · RUNTIME</text>
      <rect x='80' y='220' width='640' height='72' fill={accBgStrong} stroke={acc} strokeWidth='1.6' />
      <text x='400' y='250' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='22' fontWeight='800' letterSpacing='-0.02em' fill={ink}>NEXUS</text>
      <text x='400' y='272' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.4' fill={dim2}>governed orchestration · permissions · observability</text>
      {/* Down to iConnector */}
      <line x1='400' y1='292' x2='400' y2='320' stroke={acc} strokeWidth='1' strokeDasharray='3 3' />

      {/* Layer C: Integration — iConnector */}
      <text x='40' y='344' fontFamily='var(--font-mono)' fontSize='9' fontWeight='600' letterSpacing='1.6' fill={acc}>C · INTEGRATION</text>
      <rect x='80' y='332' width='640' height='64' fill={accBg} stroke={acc} strokeWidth='1.4' />
      <text x='400' y='360' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='17' fontWeight='700' letterSpacing='-0.018em' fill={ink}>iConnector</text>
      <text x='400' y='380' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.2' fill={dim2}>MCP-compliant interfaces · agent-readable APIs</text>
      {/* Down to substrate */}
      <line x1='200' y1='396' x2='200' y2='426' stroke={dim2} strokeWidth='0.9' strokeDasharray='2 3' />
      <line x1='400' y1='396' x2='400' y2='426' stroke={dim2} strokeWidth='0.9' strokeDasharray='2 3' />
      <line x1='600' y1='396' x2='600' y2='426' stroke={dim2} strokeWidth='0.9' strokeDasharray='2 3' />

      {/* Substrate boxes */}
      <text x='40' y='450' fontFamily='var(--font-mono)' fontSize='9' fontWeight='600' letterSpacing='1.6' fill={dim2}>D · SUBSTRATE</text>
      <g>
        <rect x='130' y='438' width='140' height='40' fill='none' stroke={ink} strokeWidth='1' />
        <text x='200' y='462' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' letterSpacing='1.4' fill={ink}>BOOMI</text>
      </g>
      <g>
        <rect x='330' y='438' width='140' height='40' fill='none' stroke={ink} strokeWidth='1' />
        <text x='400' y='462' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' letterSpacing='1.4' fill={ink}>MULESOFT</text>
      </g>
      <g>
        <rect x='530' y='438' width='140' height='40' fill='none' stroke={ink} strokeWidth='1' />
        <text x='600' y='462' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' letterSpacing='1.4' fill={ink}>WORKATO</text>
      </g>
      {/* Down to platforms */}
      <line x1='200' y1='478' x2='200' y2='502' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />
      <line x1='400' y1='478' x2='400' y2='502' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />
      <line x1='600' y1='478' x2='600' y2='502' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />
      {/* Bottom — enterprise platforms */}
      <line x1='80' y1='510' x2='720' y2='510' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />
      <text x='400' y='524' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.6' fill={dim2}>SALESFORCE · DYNAMICS · ORACLE · ENTERPRISE PLATFORMS</text>
    </svg>
  )
}

/* ─── Accelerator stack — the four accelerators rendered as a layered
   card diagram (the cards *are* the architecture): Operator → Composition
   (Agent Studio + Copilots) → Runtime (NEXUS, the spine) → Integration
   (iConnector) → Substrate (Boomi/MuleSoft/Workato) → enterprise platforms.
   Reads as a flow top-to-bottom; each layer is a real, scannable card with
   its schematic glyph. Data + glyphs come from `accelerators` / AccelGlyph. */
function AcceleratorStack() {
  const composition = accelerators.filter(a => a.layer === 'Composition')
  const nexus = accelerators.find(a => a.name === 'NEXUS')!
  const iconnector = accelerators.find(a => a.name === 'iConnector')!
  const nexusJobs = [
    'Validates the plan before execution',
    'Enforces role-based permissions',
    'Logs every action — agent or human',
  ]

  return (
    <div className='v22-cdp-accel-stack'>
      {/* Origin — who/what triggers the workflow */}
      <div className='v22-cdp-accel-origin'>
        <span className='v22-cdp-accel-origin-label'>Operator</span>
        <span className='v22-cdp-accel-origin-tag'>Human or agent trigger</span>
      </div>

      <div className='v22-cdp-accel-flow'>
        <span className='v22-cdp-accel-flow-text'>A · Composition</span>
      </div>

      {/* Layer A — Composition: two lightweight cards side by side */}
      <div className='v22-cdp-accel-layer v22-cdp-accel-layer--composition'>
        <div className='v22-cdp-accel-layer-cards'>
          {composition.map((a) => (
            <article key={a.name} className='v22-cdp-accel-card v22-cdp-accel-card--slim'>
              <div className='v22-cdp-accel-glyph-wrap'><AccelGlyph i={a.glyphIndex} /></div>
              <h3 className='v22-cdp-accel-name'>{a.name}</h3>
              <p className='v22-cdp-accel-role'>{a.role}</p>
            </article>
          ))}
        </div>
      </div>

      <div className='v22-cdp-accel-flow'>
        <span className='v22-cdp-accel-flow-text'>Workflows · tool-use plans</span>
      </div>

      {/* Layer B — Runtime: NEXUS, the spine. Carries its 3 jobs inline. */}
      <div className='v22-cdp-accel-layer v22-cdp-accel-layer--runtime'>
        <div className='v22-cdp-accel-layer-cards'>
          <article className='v22-cdp-accel-card v22-cdp-accel-card--row v22-cdp-accel-card--runtime'>
            <div className='v22-cdp-accel-glyph-wrap'><AccelGlyph i={nexus.glyphIndex} /></div>
            <div className='v22-cdp-accel-meta'>
              <span className='v22-cdp-accel-kind'>{nexus.kind}</span>
              <h3 className='v22-cdp-accel-name'>{nexus.name}</h3>
              <p className='v22-cdp-accel-role'>{nexus.role}</p>
            </div>
            <ul className='v22-cdp-accel-runtime-jobs'>
              {nexusJobs.map((j) => <li key={j}>{j}</li>)}
            </ul>
          </article>
        </div>
      </div>

      <div className='v22-cdp-accel-flow'>
        <span className='v22-cdp-accel-flow-text'>Governed actions</span>
      </div>

      {/* Layer C — Integration: iConnector, full-width row */}
      <div className='v22-cdp-accel-layer v22-cdp-accel-layer--integration'>
        <div className='v22-cdp-accel-layer-cards'>
          <article className='v22-cdp-accel-card v22-cdp-accel-card--row v22-cdp-accel-card--integration'>
            <div className='v22-cdp-accel-glyph-wrap'><AccelGlyph i={iconnector.glyphIndex} /></div>
            <div className='v22-cdp-accel-meta'>
              <span className='v22-cdp-accel-kind'>{iconnector.kind}</span>
              <h3 className='v22-cdp-accel-name'>{iconnector.name}</h3>
              <p className='v22-cdp-accel-role'>{iconnector.role}</p>
            </div>
          </article>
        </div>
      </div>

      {/* Substrate — the platforms the stack already runs on */}
      <div className='v22-cdp-accel-substrate'>
        <div className='v22-cdp-accel-substrate-row'>
          <span className='v22-cdp-accel-substrate-label'>Substrate</span>
          <span className='v22-cdp-accel-substrate-list'>Boomi · MuleSoft · Workato</span>
        </div>
        <div className='v22-cdp-accel-substrate-row'>
          <span className='v22-cdp-accel-substrate-label'>Platforms</span>
          <span className='v22-cdp-accel-substrate-list'>Salesforce · Dynamics · Oracle · NetSuite · ServiceNow</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Hero connectivity diagram ─────────────────────────────────────────── */
function HeroDiagram() {
  return (
    <svg viewBox='0 0 460 380' aria-hidden='true' className='v22-cdp-hero-diagram'>
      <defs>
        <pattern id='cdp-dot' patternUnits='userSpaceOnUse' width='12' height='12'>
          <circle cx='1' cy='1' r='0.7' fill='rgba(255,255,255,0.06)' />
        </pattern>
      </defs>
      <rect x='8' y='8' width='444' height='364' fill='url(#cdp-dot)' />
      <g stroke='rgba(255,255,255,0.18)' strokeWidth='0.8'>
        <line x1='8' y1='8' x2='28' y2='8' /><line x1='8' y1='8' x2='8' y2='28' />
        <line x1='452' y1='8' x2='432' y2='8' /><line x1='452' y1='8' x2='452' y2='28' />
        <line x1='8' y1='372' x2='28' y2='372' /><line x1='8' y1='372' x2='8' y2='352' />
        <line x1='452' y1='372' x2='432' y2='372' /><line x1='452' y1='372' x2='452' y2='352' />
      </g>
      <text x='20' y='28' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.5' fill='rgba(255,255,255,0.55)'>DWG · ENT-APP-01</text>
      <text x='440' y='28' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.5' fill='var(--v22-accent)' textAnchor='end'>REV.01</text>
      {[
        { x: 30, label: 'DYNAMICS' }, { x: 130, label: 'SALESFORCE' },
        { x: 230, label: 'ORACLE' }, { x: 330, label: 'SAAS' },
      ].map((p) => (
        <g key={p.label}>
          <rect x={p.x} y='60' width='100' height='44' fill='none' stroke='rgba(255,255,255,0.32)' strokeWidth='1' />
          <rect x={p.x + 4} y='64' width='92' height='36' fill='none' stroke='rgba(255,255,255,0.14)' strokeWidth='0.6' />
          <text x={p.x + 50} y='86' fontFamily='var(--font-mono)' fontSize='9' fontWeight='600' letterSpacing='1.4' fill='rgba(255,255,255,0.85)' textAnchor='middle'>{p.label}</text>
          <line x1={p.x + 50} y1='104' x2={p.x + 50} y2='160' stroke='rgba(240,123,47,0.5)' strokeWidth='1' strokeDasharray='2 3' />
          <circle cx={p.x + 50} cy='104' r='2' fill='var(--v22-accent)' />
        </g>
      ))}
      <rect x='30' y='160' width='400' height='52' fill='rgba(240,123,47,0.05)' stroke='var(--v22-accent)' strokeWidth='1.2' />
      <text x='230' y='184' fontFamily='var(--font-sans)' fontSize='13' fontWeight='700' letterSpacing='0.5' fill='var(--v22-accent)' textAnchor='middle'>iCONNECTOR · INTEGRATION LAYER</text>
      <text x='230' y='200' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.4' fill='rgba(255,255,255,0.65)' textAnchor='middle'>MULESOFT · BOOMI · WORKATO · MCP</text>
      {[140, 230, 320].map((cx, i) => (
        <g key={i}>
          <line x1={cx} y1='212' x2={cx} y2='268' stroke='rgba(240,123,47,0.5)' strokeWidth='1' strokeDasharray='2 3' />
          <circle cx={cx} cy='212' r='2' fill='var(--v22-accent)' />
        </g>
      ))}
      {[
        { cx: 140, label: 'AGENT' }, { cx: 230, label: 'COPILOT' }, { cx: 320, label: 'AGENT' },
      ].map((a) => (
        <g key={a.label + a.cx}>
          <circle cx={a.cx} cy='292' r='24' fill='rgba(255,255,255,0.04)' stroke='rgba(255,255,255,0.32)' strokeWidth='1' />
          <circle cx={a.cx} cy='292' r='14' fill='none' stroke='var(--v22-accent)' strokeWidth='1.2' />
          <circle cx={a.cx} cy='292' r='3' fill='var(--v22-accent)' />
          <text x={a.cx} y='338' fontFamily='var(--font-mono)' fontSize='8' fontWeight='600' letterSpacing='1.4' fill='rgba(255,255,255,0.78)' textAnchor='middle'>{a.label}</text>
        </g>
      ))}
      <text x='20' y='360' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.5' fill='rgba(255,255,255,0.4)'>SCALE 1:1</text>
      <text x='440' y='360' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.5' fill='rgba(255,255,255,0.4)' textAnchor='end'>SHEET A4</text>
    </svg>
  )
}

/* ─── Data ─────────────────────────────────────────────────────────────── */

/* Wider ecosystem — wordmark list for the partner marquee, beyond the
   tier-1 cards above. Order is curated for visual rhythm. */
const partnerLogos = [
  'Microsoft Dynamics 365',
  'Salesforce',
  'MuleSoft',
  'Boomi',
  'Workato',
  'Oracle ERP',
  'NetSuite',
  'ServiceNow',
  'AWS',
  'Azure',
  'SAP',
  'Anthropic Claude',
  'Informatica IDMC',
  'Jitterbit Harmony',
  'Zapier',
  'n8n',
  'Workday',
  'Power Platform',
  'Copilot Studio',
  'Agentforce',
]

const partnerships = [
  {
    name: 'Microsoft',
    tier: 'Solutions Partner',
    spec: 'Dynamics 365 · Power Platform · Copilot Studio · Azure OpenAI.',
  },
  {
    name: 'Salesforce',
    tier: 'Salesforce Partner',
    spec: 'Sales Cloud · Service Cloud · Data Cloud · Agentforce · Einstein AI.',
  },
  {
    name: 'MuleSoft',
    tier: 'Anypoint Platform',
    spec: 'API-led integration and runtime orchestration.',
  },
  {
    name: 'Boomi',
    tier: 'Integration Platform',
    spec: '1,500+ connectors exposed through MCP-compliant interfaces.',
  },
  {
    name: 'Workato',
    tier: 'Automation Platform',
    spec: 'Enterprise automation across SaaS, on-prem, and custom systems.',
  },
]

/* §01 What we do data + JSX lives in services-section.tsx (client component
   for tab interactivity). The rest of this file stays server-rendered. */

/* Ordered to follow the architecture flow: composition → runtime → integration.
   `glyphIndex` keys into AccelGlyph (0:iConnector · 1:NEXUS · 2:Studio · 3:Copilots). */
const accelerators = [
  {
    layer: 'Composition',
    layerNum: 'A',
    glyphIndex: 2,
    kind: 'Multi-agent framework',
    name: 'Agent Studio',
    role: 'Multi-agent workflows on Salesforce and Dynamics — governed end-to-end.',
    body: 'Compose, version, and govern multi-agent workflows on top of your CRM and ERP. Approval gates, validation steps, and human checkpoints are first-class — not bolted on. Workflows ship the way platform code ships: reviewed, tested, observable.',
  },
  {
    layer: 'Composition',
    layerNum: 'A',
    glyphIndex: 3,
    kind: 'Embedded copilots',
    name: 'Productivity Copilots',
    role: 'Agentforce · Copilot Studio · Now Assist — embedded in-platform.',
    body: 'Copilots embedded where work already happens — Salesforce, Microsoft 365, ServiceNow. We build, fine-tune, and govern them inside the platforms your teams already use, so adoption isn’t a change-management project. Same surface, more leverage.',
  },
  {
    layer: 'Runtime',
    layerNum: 'B',
    glyphIndex: 1,
    kind: 'AI orchestration runtime',
    name: 'NEXUS',
    role: 'Governed orchestration runtime for enterprise agents.',
    body: 'Sits above MuleSoft, Boomi, and Workato as the runtime spine where agents act. Validates plans before execution, enforces role-based permissions on every tool call, and writes a complete audit log of who did what — agent or human. Turns integration plumbing into governed infrastructure.',
  },
  {
    layer: 'Integration',
    layerNum: 'C',
    glyphIndex: 0,
    kind: 'Integration accelerator',
    name: 'iConnector',
    role: 'MCP-compliant adapters for the integration substrate.',
    body: 'Wraps Boomi, MuleSoft, and Workato so agents can call them through a single, standards-aligned interface. 1,500+ pre-built integrations become agent-readable APIs without new middleware. The integration team’s work compounds; the agent team doesn’t start over.',
  },
]

const aiPatterns = [
  {
    title: 'Agent-Enabled Quality Registration',
    body: 'MuleSoft MCP servers expose internal APIs to Salesforce. Agents retrieve valuation, validate compliance, assess risk, and complete registrations.',
    metric: '−70%',
    metricLabel: 'manual effort',
  },
  {
    title: 'Sales Compliance Automation',
    body: 'Agentforce processes escalation tickets, updates compliance fields, and generates audit summaries — continuously.',
    metric: '↑ accuracy',
    metricLabel: 'over manual baseline',
  },
  {
    title: 'Autonomous Procurement Routing',
    body: 'MuleSoft MCP architecture enables real-time vendor validation and automated PRL approvals across ERP systems.',
    metric: 'real-time',
    metricLabel: 'across ERPs',
  },
]

const engagementModels = [
  {
    name: 'Fixed Scope Delivery',
    body: 'Deterministic execution bound by strict time, scope, and capital parameters.',
  },
  {
    name: 'Outcome-Based Execution',
    body: 'Commercial models tied directly to verified operational telemetry and realised business value.',
  },
  {
    name: 'Managed Services',
    body: 'Continuous L1/L2/L3 runtime governance, AIOps execution, and platform optimisation.',
  },
  {
    name: 'Team Augmentation',
    body: 'Embedded certified architects and engineers scaling your internal capability immediately.',
  },
]

/* Cases mapped to the three §03 use cases above, so the "Where the use cases
   shipped" promise is honoured. Meta = technical scope, not client claim. */
export default function ConnectedSystemsPage() {
  return (
    <main className='v22-cap-detail-page'>
      {/* Sticky nav */}
      <nav className='v22-nav scrolled' aria-label='Primary'>
        <div className='v22-nav-inner'>
          <Link href='/v22.5' className='v22-logo'>
            <img src='/dbiz-logo.svg' alt='DBiz.ai' width='80' height='45' />
          </Link>
          <ul className='v22-nav-links'>
            <li><Link href='/v22.5#solutions'>Our Solutions</Link></li>
            <li><Link href='/v22.5#work'>Our Work</Link></li>
            <li><Link href='/v22.5#about'>About Us</Link></li>
            <li><Link href='/v22.5#careers'>Careers</Link></li>
          </ul>
          <div className='v22-nav-cta-wrap'>
            <Link href='/v22.5#cta' className='v22-nav-cta'>Talk to our team <span>→</span></Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className='v22-cdp-crumb'>
        <div className='v22-container'>
          <Link href='/v22.5#solutions' className='v22-cdp-back'>
            <span aria-hidden='true'>←</span> Back to What we do
          </Link>
          <span className='v22-cdp-crumb-sep' aria-hidden='true' />
          <span className='v22-cdp-crumb-num'>L{cap.num} · ENTERPRISE APPLICATION SERVICES</span>
        </div>
      </div>

      {/* HERO — strong opening positioning */}
      <section className='v22-cdp-hero'>
        <div className='v22-container'>
          <div className='v22-cdp-hero-grid'>
            <div className='v22-cdp-hero-meta'>
              <span className='v22-cdp-eyebrow'>N°{cap.num} · Enterprise Application Services</span>
              <h1 className='v22-cdp-title'>
                Connected Systems,<br />
                <em>Not Silos.</em>
              </h1>
              <p className='v22-cdp-subtitle'>{cap.subtitle}</p>
              <p className='v22-cdp-lead'>
                We design, implement, and scale enterprise applications across Microsoft Dynamics 365, Salesforce, and Oracle ERP Cloud — connecting systems, streamlining workflows, and enabling real-time, intelligent operations.
              </p>
              <div className='v22-cdp-hero-actions'>
                <Link href='#pillars' className='v22-cta-primary'>
                  See what we do <span className='arrow'>↓</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our team</Link>
              </div>
            </div>
            <aside className='v22-cdp-hero-aside' aria-hidden='true'>
              <HeroDiagram />
            </aside>
          </div>
        </div>
      </section>

{/* §01 WHAT WE DO — three service types as left tabs, click-to-reveal */}
      <ServicesSection />

      {/* PARTNERSHIPS STRIP — credentialing the practice (sits between
           §01 What we do and §02 Accelerators so partner platforms come
           before our own IP) */}
      <section id='partners' className='v22-cdp-partners' data-surface='light' aria-label='Technology partners and platforms'>
        <div className='v22-container'>
          <div className='v22-cdp-partners-head'>
            <span className='v22-cdp-partners-kicker'>Ecosystem</span>
            <h2 className='v22-cdp-partners-title'>
              Inside every <em>enterprise ecosystem</em> at certified delivery depth.
            </h2>
            <p className='v22-cdp-partners-lede'>
              Aligned with hyperscaler capabilities and SaaS-native architectures, so systems actually interoperate.
            </p>
          </div>
          <div className='v22-cdp-partners-grid'>
            {partnerships.map((p) => (
              <article key={p.name} className='v22-cdp-partners-card'>
                {PARTNER_MARKS[p.name] && (
                  <span className='v22-cdp-partners-logo'>
                    {PARTNER_MARKS[p.name]}
                  </span>
                )}
                <div className='v22-cdp-partners-card-head'>
                  <h3 className='v22-cdp-partners-name'>{p.name}</h3>
                  <span className='v22-cdp-partners-tier'>{p.tier}</span>
                </div>
                <p className='v22-cdp-partners-spec'>{p.spec}</p>
              </article>
            ))}
          </div>
          {/* Wider ecosystem — wordmark marquee scrolling left, infinite */}
          <div className='v22-cdp-partner-marquee' aria-label='Wider partner ecosystem'>
            <span className='v22-cdp-partner-marquee-kicker'>+ wider ecosystem</span>
            <div className='v22-cdp-partner-marquee-mask'>
              <div className='v22-cdp-partner-marquee-track'>
                {[...partnerLogos, ...partnerLogos].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className={`v22-cdp-partner-marquee-item${MARQUEE_LOGOS[name] ? ' v22-cdp-partner-marquee-item--logo' : ''}`}
                    aria-label={name}
                    aria-hidden={i >= partnerLogos.length}
                  >
                    {MARQUEE_LOGOS[name] ?? name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §02 AI ACCELERATORS — DBiz proprietary IP */}
      <section id='accelerators' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Built in-house</span>
              <h2 className='v22-cdp-block-title'>AI that works <em>within</em> your systems, not outside them.</h2>
              <p className='v22-cdp-block-kicker'>Proprietary frameworks. Months of platform engineering, in weeks.</p>
            </div>
            <div className='v22-cdp-block-body'>
              {/* Framing statement above the accelerator schematic */}
              <div className='v22-cdp-accel-intro'>
                <p className='v22-cdp-accel-intro-body'>
                  We enhance enterprise platforms with AI to automate decisions, improve accuracy, and enable intelligent workflows across finance, sales, and operations.
                </p>
                <p className='v22-cdp-accel-intro-body'>
                  Our approach embeds AI directly into your existing applications and integrations — so you can modernise without disrupting what already works.
                </p>
                <p className='v22-cdp-accel-intro-note'>
                  Supported by internal accelerators for faster deployment and scalable execution.
                </p>
              </div>
              <AcceleratorStack />
            </div>
          </div>
        </div>
      </section>

      {/* §03 AI IN ACTION — merged use cases + proof, rich case-study cards
           with schematic glyphs. Replaces the previous separate §03 patterns
           and §05 proof sections, which were redundant. */}
      <section id='use-cases' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Proof</span>
              <h2 className='v22-cdp-block-title'>AI in <em>action</em></h2>
              <p className='v22-cdp-block-kicker'>
                Three use cases shipped. Same patterns, real environments — each measured in production.
              </p>
            </div>
            <div className='v22-cdp-block-body'>
              <ProofCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* §04 ENGAGEMENT MODELS — warm cream band. (The old "In production"
           numbers section was dropped; its proof metrics now live in the §01
           credibility band, the single stats home on the page.) */}
      <section id='engagement' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>How we work</span>
              <h2 className='v22-cdp-block-title'>Engagement models</h2>
              <p className='v22-cdp-block-kicker'>Four shapes. Pick the one that fits how you want to work with us.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-cdp-engagement-grid'>
                {engagementModels.map((m, i) => (
                  <article key={m.name} className='v22-cdp-engagement-card'>
                    <span className='v22-cdp-engagement-num'>0{i + 1}</span>
                    <h3 className='v22-cdp-engagement-name'>{m.name}</h3>
                    <p className='v22-cdp-engagement-body'>{m.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className='v22-cdp-cta'>
        <div className='v22-container'>
          <div className='v22-cdp-cta-inner v22-cdp-cta-inner--solo'>
            <div className='v22-cdp-cta-end'>
              <span className='v22-cdp-cta-num'>[Z·{cap.num}] NEXT STEP</span>
              <h2 className='v22-cdp-cta-title'>
                Your systems are already enterprise-grade.<br />
                <em>Make them agent-grade.</em>
              </h2>
              <div className='v22-cdp-cta-actions'>
                <Link href='/v22.5#cta' className='v22-cta-primary'>
                  Book a platform architect <span className='arrow'>→</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pager */}
      <nav className='v22-cdp-pager' aria-label='Capability pager'>
        <div className='v22-container'>
          <div className='v22-cdp-pager-grid'>
            {prev ? (
              <Link href={`/v22.5#solutions`} className='v22-cdp-pager-link prev'>
                <span className='v22-cdp-pager-arrow' aria-hidden='true'>←</span>
                <span className='v22-cdp-pager-meta'>
                  <span className='v22-cdp-pager-num'>L{prev.num} · {prev.altLabel.toUpperCase()}</span>
                  <span className='v22-cdp-pager-label'>{prev.title}</span>
                </span>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/v22.5#solutions`} className='v22-cdp-pager-link next'>
                <span className='v22-cdp-pager-meta'>
                  <span className='v22-cdp-pager-num'>L{next.num} · {next.altLabel.toUpperCase()}</span>
                  <span className='v22-cdp-pager-label'>{next.title}</span>
                </span>
                <span className='v22-cdp-pager-arrow' aria-hidden='true'>→</span>
              </Link>
            ) : <span />}
          </div>
        </div>
      </nav>
    </main>
  )
}
