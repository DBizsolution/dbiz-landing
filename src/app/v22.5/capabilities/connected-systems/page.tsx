/* V22.5 — Connected Systems / Enterprise Application Services
   Tight 6-section structure: Capability areas → AI Accelerators →
   Execution in action → In production → Engagement → Proof → CTA.
   Positioning: implementation depth first, AI built in not bolted on. */

import Link from 'next/link'
import { capabilities } from '../../capabilities-data'
import ServicesSection from './services-section'

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

/* ─── Accelerator stack — single-viewport infographic.
   Replaces the previous multi-card layered stack with one cohesive SVG.
   Fits ~480×760 viewBox (responsive width). Schematic blueprint style:
   corner ticks, mono labels, dashed flow lines, NEXUS center with subtle
   pulse animation. */
function AcceleratorStack() {
  const ink = 'rgba(13, 27, 62, 0.85)'
  const dim = 'rgba(13, 27, 62, 0.32)'
  const dim2 = 'rgba(13, 27, 62, 0.55)'
  const acc = 'var(--v22-accent)'
  const accBg = 'rgba(240, 123, 47, 0.05)'
  const accBgStrong = 'rgba(240, 123, 47, 0.1)'

  return (
    <svg
      viewBox='0 0 760 480'
      role='img'
      aria-label='Accelerator stack: Operator → Composition (Agent Studio + Productivity Copilots) → NEXUS runtime → iConnector integration → Substrate (Boomi, MuleSoft, Workato) → Enterprise platforms'
      className='v22-cdp-accel-infographic'
    >
      {/* Schematic frame — corner ticks */}
      <g stroke={dim} strokeWidth='0.8'>
        <line x1='8' y1='8' x2='28' y2='8' /><line x1='8' y1='8' x2='8' y2='28' />
        <line x1='752' y1='8' x2='732' y2='8' /><line x1='752' y1='8' x2='752' y2='28' />
        <line x1='8' y1='472' x2='28' y2='472' /><line x1='8' y1='472' x2='8' y2='452' />
        <line x1='752' y1='472' x2='732' y2='472' /><line x1='752' y1='472' x2='752' y2='452' />
      </g>
      <text x='20' y='28' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.6' fill={dim2}>FIG 02 · ACCELERATOR STACK</text>
      <text x='740' y='28' textAnchor='end' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.6' fill={acc}>FLOW ↓</text>

      {/* TOP — Operator badge */}
      <rect x='320' y='46' width='120' height='30' fill='none' stroke={dim} strokeWidth='0.9' strokeDasharray='3 3' />
      <text x='380' y='66' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='10' fontWeight='700' letterSpacing='1.6' fill={ink}>OPERATOR</text>
      <line x1='380' y1='76' x2='380' y2='100' stroke={dim2} strokeWidth='1' strokeDasharray='3 3' />

      {/* LAYER A · Composition — Agent Studio + Productivity Copilots */}
      <text x='40' y='100' fontFamily='var(--font-mono)' fontSize='8' fontWeight='700' letterSpacing='1.6' fill={acc}>A · COMPOSITION</text>
      <g>
        <rect x='40' y='108' width='340' height='62' fill='#ffffff' stroke={ink} strokeWidth='1.2' />
        <line x1='40' y1='110' x2='380' y2='110' stroke={acc} strokeWidth='3' />
        <text x='210' y='134' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='14' fontWeight='700' fill={ink}>Agent Studio</text>
        <text x='210' y='154' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.2' fill={dim2}>multi-agent workflows · governed</text>
      </g>
      <g>
        <rect x='400' y='108' width='320' height='62' fill='#ffffff' stroke={ink} strokeWidth='1.2' />
        <line x1='400' y1='110' x2='720' y2='110' stroke={acc} strokeWidth='3' />
        <text x='560' y='134' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='14' fontWeight='700' fill={ink}>Productivity Copilots</text>
        <text x='560' y='154' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.2' fill={dim2}>Agentforce · Copilot Studio · Now Assist</text>
      </g>
      {/* Merging connectors to NEXUS */}
      <line x1='210' y1='170' x2='380' y2='198' stroke={acc} strokeWidth='1' strokeDasharray='3 3' />
      <line x1='560' y1='170' x2='380' y2='198' stroke={acc} strokeWidth='1' strokeDasharray='3 3' />
      <circle cx='380' cy='198' r='2.5' fill={acc} />
      <text x='400' y='192' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.4' fill={acc}>WORKFLOWS · TOOL-USE PLANS ↓</text>

      {/* LAYER B · Runtime — NEXUS (spine, orange-tinted, biggest visual) */}
      <text x='40' y='218' fontFamily='var(--font-mono)' fontSize='8' fontWeight='700' letterSpacing='1.6' fill={acc}>B · RUNTIME</text>
      <rect x='40' y='206' width='680' height='84' fill={accBgStrong} stroke={acc} strokeWidth='1.6' />
      {/* Schematic NEXUS glyph at left of bar */}
      <circle cx='90' cy='248' r='28' fill='none' stroke={dim} strokeWidth='0.7' strokeDasharray='1.5 2.5' />
      <circle cx='90' cy='248' r='20' fill='none' stroke={ink} strokeWidth='1' />
      <circle className='v22-cdp-info-nexus-ring' cx='90' cy='248' r='12' fill='none' stroke={acc} strokeWidth='1.4' />
      <circle className='v22-cdp-info-nexus-pulse' cx='90' cy='248' r='3.5' fill={acc} />
      {/* Title + subtitle */}
      <text x='150' y='244' fontFamily='var(--font-sans)' fontSize='22' fontWeight='800' letterSpacing='-0.02em' fill={ink}>NEXUS</text>
      <text x='150' y='266' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.4' fill={dim2}>governed runtime · permissions · observability</text>
      {/* Right-side responsibilities (3 inline jobs) */}
      <g fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.2' fill={ink}>
        <text x='450' y='230'>→ VALIDATES THE PLAN</text>
        <text x='450' y='250'>→ ENFORCES PERMISSIONS</text>
        <text x='450' y='270'>→ LOGS EVERY ACTION</text>
      </g>
      {/* Connector down */}
      <line x1='380' y1='290' x2='380' y2='314' stroke={acc} strokeWidth='1' strokeDasharray='3 3' />
      <text x='400' y='308' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.4' fill={acc}>GOVERNED ACTIONS ↓</text>

      {/* LAYER C · Integration — iConnector */}
      <text x='40' y='332' fontFamily='var(--font-mono)' fontSize='8' fontWeight='700' letterSpacing='1.6' fill={acc}>C · INTEGRATION</text>
      <rect x='40' y='320' width='680' height='56' fill={accBg} stroke={acc} strokeWidth='1.4' />
      <text x='380' y='346' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='16' fontWeight='700' letterSpacing='-0.018em' fill={ink}>iConnector</text>
      <text x='380' y='364' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.2' fill={dim2}>MCP-compliant interfaces · agent-readable APIs</text>
      {/* 3 diverging connector lines to substrate */}
      <line x1='180' y1='376' x2='180' y2='402' stroke={dim2} strokeWidth='0.9' strokeDasharray='2 3' />
      <line x1='380' y1='376' x2='380' y2='402' stroke={dim2} strokeWidth='0.9' strokeDasharray='2 3' />
      <line x1='580' y1='376' x2='580' y2='402' stroke={dim2} strokeWidth='0.9' strokeDasharray='2 3' />

      {/* LAYER D · Substrate — 3 platform boxes */}
      <text x='40' y='418' fontFamily='var(--font-mono)' fontSize='8' fontWeight='700' letterSpacing='1.6' fill={dim2}>ALREADY YOURS · SUBSTRATE</text>
      <rect x='100' y='406' width='160' height='30' fill='none' stroke={ink} strokeWidth='1' />
      <text x='180' y='425' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' letterSpacing='1.6' fill={ink}>BOOMI</text>
      <rect x='300' y='406' width='160' height='30' fill='none' stroke={ink} strokeWidth='1' />
      <text x='380' y='425' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' letterSpacing='1.6' fill={ink}>MULESOFT</text>
      <rect x='500' y='406' width='160' height='30' fill='none' stroke={ink} strokeWidth='1' />
      <text x='580' y='425' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' letterSpacing='1.6' fill={ink}>WORKATO</text>
      {/* Down to platforms */}
      <line x1='180' y1='436' x2='180' y2='450' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />
      <line x1='380' y1='436' x2='380' y2='450' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />
      <line x1='580' y1='436' x2='580' y2='450' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />

      {/* BOTTOM — enterprise platforms (the bedrock that's already there) */}
      <line x1='40' y1='450' x2='720' y2='450' stroke={dim} strokeWidth='0.8' strokeDasharray='2 3' />
      <text x='380' y='466' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='10' fontWeight='600' letterSpacing='1.6' fill={dim2}>SALESFORCE · DYNAMICS · ORACLE · NETSUITE · SERVICENOW</text>
    </svg>
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

const outcomeGroups = [
  {
    label: 'Delivery depth',
    items: [
      { val: '10+ yrs', label: 'Microsoft enterprise delivery' },
      { val: '50+', label: 'Dynamics 365 deployments delivered' },
      { val: '200+', label: 'certified Microsoft engineers' },
    ],
  },
  {
    label: 'Operational outcomes',
    items: [
      { val: '1,500+', label: 'pre-built integration connectors' },
      { val: '40–60%', label: 'improvement in data accuracy' },
      { val: '80%', label: 'reduction in ERP integration time' },
    ],
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
                Salesforce, Dynamics, the integration stack — already running your business. We make them run agents too, without rebuilding what works. Existing investments stay; agents read, write, and act across them.
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
            <span className='v22-cdp-partners-kicker'>Technology partners &amp; platforms</span>
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
                    className='v22-cdp-partner-marquee-item'
                    aria-hidden={i >= partnerLogos.length}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §02 AI ACCELERATORS — DBiz proprietary IP */}
      <section id='accelerators' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>§02</span>
              <h2 className='v22-cdp-block-title'>AI accelerators</h2>
              <p className='v22-cdp-block-kicker'>Proprietary frameworks. Months of platform engineering, in weeks.</p>
            </div>
            <div className='v22-cdp-block-body'>
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
              <span className='v22-cdp-block-num'>§03</span>
              <h2 className='v22-cdp-block-title'>AI in <em>action</em></h2>
              <p className='v22-cdp-block-kicker'>
                Three use cases shipped. Same patterns, real environments — each measured in production.
              </p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-cdp-proof-grid'>
                {caseStudies.map((cs, i) => (
                  <article key={cs.title} className='v22-cdp-proof-card'>
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
            </div>
          </div>
        </div>
      </section>

      {/* §04 IN PRODUCTION — numbers, grouped: depth + outcomes */}
      <section id='numbers' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>§04</span>
              <h2 className='v22-cdp-block-title'>In production</h2>
              <p className='v22-cdp-block-kicker'>Enterprise platform engineering at certified delivery depth.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-cdp-telemetry-groups'>
                {outcomeGroups.map((g) => (
                  <div key={g.label} className='v22-cdp-telemetry-group'>
                    <span className='v22-cdp-telemetry-group-label'>{g.label}</span>
                    <ul className='v22-cdp-telemetry-list'>
                      {g.items.map((o) => (
                        <li key={o.label}>
                          <span className='v22-cdp-telemetry-val'>{o.val}</span>
                          <span className='v22-cdp-telemetry-lbl'>{o.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §05 ENGAGEMENT MODELS — light cream band (renumbered after merging
           the old §03 use cases + §05 proof into the new §03 AI in action) */}
      <section id='engagement' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>§05</span>
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
