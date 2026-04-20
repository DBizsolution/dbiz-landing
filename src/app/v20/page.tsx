/* V14 — Swiss Blueprint
   V4's 12-column grid structure on V5's dark blueprint canvas.
   Capabilities as interactive tabs, SVG diagrams (V5). */

import CapabilitiesSection from './capabilities-section'
import { FooterTagline } from './footer-tagline'
import HowSection from './how-section'
import { LogoWall } from './logo-wall'
import { NavScrollEffect } from './nav-scroll'
import ProvenSection from './proven-section'
import TestimonialsSection from './testimonials-section'
import WhySection from './why-section'

const stats = [
  { coord: '[A·01]', val: '500+', lbl: 'Engineers' },
  { coord: '[A·02]', val: '50+', lbl: 'Enterprise Clients' },
  { coord: '[A·03]', val: '120', lbl: 'Solutions delivered' },
  { coord: '[A·04]', val: '6', lbl: 'Countries' },
]

const trust = ['ACFS Logistics', 'Aldar', 'Carlisle Homes', 'Custom Fleet', 'Southern Cross Care', 'Angle Auto', 'Smart Group', 'Nationwide Towing', 'Fleet Partners', 'Ventia']

/* ─── SVG Diagrams (from V5) ─── */

function HeroDiagram() {
  const layers = [
    { label: 'STRATEGY', code: 'S·01' },
    { label: 'ARCHITECTURE', code: 'S·02' },
    { label: 'CLOUD', code: 'S·03' },
    { label: 'DATA', code: 'S·04' },
    { label: 'APPS', code: 'S·05' },
    { label: 'AGENTS', code: 'S·06' },
    { label: 'OPS', code: 'S·07' },
  ]

  const particleXs = [195, 225, 250, 275, 305]

  const shapes: Record<string, (x: number, y: number, delay: string, dur: string, key: string) => React.ReactNode> = {
    square: (x, y, delay, dur, key) => (
      <rect key={key} x={x - 2.5} y={y - 2.5} width='5' height='5' fill='#F07B2F' opacity='0' filter='url(#v20-glow)'>
        <animate attributeName='y' values={`${y - 2.5};${y + 45.5}`} dur={dur} begin={delay} repeatCount='indefinite' calcMode='spline' keySplines='0.4 0 0.2 1' />
        <animate attributeName='opacity' values='0;0.9;0.9;0' keyTimes='0;0.12;0.8;1' dur={dur} begin={delay} repeatCount='indefinite' />
      </rect>
    ),
    plus: (x, y, delay, dur, key) => (
      <g key={key} opacity='0' filter='url(#v20-glow)'>
        <line x1={x - 3} y1={y} x2={x + 3} y2={y} stroke='#F07B2F' strokeWidth='1.4' />
        <line x1={x} y1={y - 3} x2={x} y2={y + 3} stroke='#F07B2F' strokeWidth='1.4' />
        <animateTransform attributeName='transform' type='translate' values={`0 0;0 48`} dur={dur} begin={delay} repeatCount='indefinite' calcMode='spline' keySplines='0.4 0 0.2 1' />
        <animate attributeName='opacity' values='0;0.9;0.9;0' keyTimes='0;0.12;0.8;1' dur={dur} begin={delay} repeatCount='indefinite' />
      </g>
    ),
    circle: (x, y, delay, dur, key) => (
      <circle key={key} cx={x} cy={y} r='2.8' fill='#F07B2F' opacity='0' filter='url(#v20-glow)'>
        <animate attributeName='cy' values={`${y};${y + 48}`} dur={dur} begin={delay} repeatCount='indefinite' calcMode='spline' keySplines='0.4 0 0.2 1' />
        <animate attributeName='opacity' values='0;0.9;0.9;0' keyTimes='0;0.12;0.8;1' dur={dur} begin={delay} repeatCount='indefinite' />
        <animate attributeName='r' values='2.8;1.6' dur={dur} begin={delay} repeatCount='indefinite' />
      </circle>
    ),
    star: (x, y, delay, dur, key) => (
      <polygon key={key} points={`${x},${y - 3.5} ${x + 1},${y - 1} ${x + 3.5},${y - 1} ${x + 1.5},${y + 0.8} ${x + 2.2},${y + 3.5} ${x},${y + 1.8} ${x - 2.2},${y + 3.5} ${x - 1.5},${y + 0.8} ${x - 3.5},${y - 1} ${x - 1},${y - 1}`} fill='#F07B2F' opacity='0' filter='url(#v20-glow)'>
        <animateTransform attributeName='transform' type='translate' values={`0 0;0 48`} dur={dur} begin={delay} repeatCount='indefinite' calcMode='spline' keySplines='0.4 0 0.2 1' />
        <animate attributeName='opacity' values='0;0.9;0.9;0' keyTimes='0;0.12;0.8;1' dur={dur} begin={delay} repeatCount='indefinite' />
      </polygon>
    ),
    ring: (x, y, delay, dur, key) => (
      <circle key={key} cx={x} cy={y} r='2.8' fill='none' stroke='#F07B2F' strokeWidth='1' opacity='0' filter='url(#v20-glow)'>
        <animate attributeName='cy' values={`${y};${y + 48}`} dur={dur} begin={delay} repeatCount='indefinite' calcMode='spline' keySplines='0.4 0 0.2 1' />
        <animate attributeName='opacity' values='0;0.9;0.9;0' keyTimes='0;0.12;0.8;1' dur={dur} begin={delay} repeatCount='indefinite' />
      </circle>
    ),
    triangle: (x, y, delay, dur, key) => (
      <polygon key={key} points={`${x},${y - 3} ${x + 3},${y + 2.5} ${x - 3},${y + 2.5}`} fill='#F07B2F' opacity='0' filter='url(#v20-glow)'>
        <animateTransform attributeName='transform' type='translate' values={`0 0;0 48`} dur={dur} begin={delay} repeatCount='indefinite' calcMode='spline' keySplines='0.4 0 0.2 1' />
        <animate attributeName='opacity' values='0;0.9;0.9;0' keyTimes='0;0.12;0.8;1' dur={dur} begin={delay} repeatCount='indefinite' />
      </polygon>
    ),
  }

  const shapeOrder: (keyof typeof shapes)[] = ['square', 'plus', 'circle', 'star', 'ring', 'triangle']

  return (
    <svg viewBox='0 0 520 560' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' className='v20-hero-svg'>
      <defs>
        <pattern id='v20-hatch' patternUnits='userSpaceOnUse' width='6' height='6' patternTransform='rotate(45)'>
          <line x1='0' y1='0' x2='0' y2='6' stroke='var(--v20-ink-hatch)' strokeWidth='1' />
        </pattern>
        <pattern id='v20-dot' patternUnits='userSpaceOnUse' width='10' height='10'>
          <circle cx='1' cy='1' r='0.8' fill='var(--v20-ink-dot)' />
        </pattern>
        <filter id='v20-glow'>
          <feGaussianBlur stdDeviation='1.5' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g stroke='var(--v20-ink-frame)' strokeWidth='0.6'>
        <line x1='20' y1='20' x2='40' y2='20' /><line x1='20' y1='20' x2='20' y2='40' />
        <line x1='500' y1='20' x2='480' y2='20' /><line x1='500' y1='20' x2='500' y2='40' />
        <line x1='20' y1='540' x2='40' y2='540' /><line x1='20' y1='540' x2='20' y2='520' />
        <line x1='500' y1='540' x2='480' y2='540' /><line x1='500' y1='540' x2='500' y2='520' />
      </g>
      <g stroke='var(--v20-ink-frame)' strokeWidth='0.6'>
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1='40' y1={60 + i * 32} x2={i % 2 === 0 ? 48 : 44} y2={60 + i * 32} />
        ))}
      </g>
      <rect x='60' y='60' width='400' height='440' fill='url(#v20-dot)' />

      {/* Back pass: top face + right side polygons (behind particles) */}
      {layers.map((layer, i) => {
        const y = 90 + i * 56
        const skew = 26
        return (
          <g key={`back-${layer.code}`} className='v20-layer' style={{ '--layer-index': i, '--box-index': i } as React.CSSProperties}>
            {/* Top face */}
            <polygon
              points={`${140},${y} ${360},${y} ${360 + skew},${y - 14} ${140 + skew},${y - 14}`}
              fill='var(--v20-ink-layer-fill)'
              stroke='var(--v20-ink-corner)'
              strokeWidth='1'
              className='v20-box-border v20-box-top'
            />
            {/* Right side face */}
            <polygon
              points={`${360},${y} ${360 + skew},${y - 14} ${360 + skew},${y + 18} ${360},${y + 32}`}
              fill='var(--v20-ink-layer-right)'
              stroke='var(--v20-ink-corner)'
              strokeWidth='1'
              className='v20-box-border v20-box-side'
            />
          </g>
        )
      })}

      {/* Particles flowing between layers — unique shape per layer, 5 per box, none from OPS */}
      {layers.map((_, i) => {
        if (i >= layers.length - 1) return null
        const fromY = 90 + i * 56 + 34
        const shapeFn = shapes[shapeOrder[i % shapeOrder.length]]
        const baseDur = 2.8
        return (
          <g key={`particles-${i}`}>
            {particleXs.map((x, pIdx) => {
              const delay = `${i * 1.2 + pIdx * 0.45}s`
              const dur = `${baseDur + pIdx * 0.15}s`
              return shapeFn(x, fromY, delay, dur, `p-${i}-${pIdx}`)
            })}
          </g>
        )
      })}

      {/* Front pass: front face rects + labels + callouts (clip particles) */}
      {layers.map((layer, i) => {
        const y = 90 + i * 56
        const skew = 26
        return (
          <g key={layer.code} className='v20-layer' style={{ '--layer-index': i, '--box-index': i } as React.CSSProperties}>
            {/* Front face - solid opaque background (never animated, blocks particles) */}
            <rect x='140' y={y} width='220' height='32' fill='var(--v20-ink-layer-fill)' />
            {/* Front face - hatch overlay for DATA */}
            {i === 3 && (
              <rect x='140' y={y} width='220' height='32' fill='url(#v20-hatch)' />
            )}
            {/* Front face - orange highlight overlay (animated) */}
            <rect x='140' y={y} width='220' height='32' fill='none' className='v20-box-fill' />
            {/* Front face - border stroke on top */}
            <rect
              x='140'
              y={y}
              width='220'
              height='32'
              fill='none'
              stroke='var(--v20-ink-corner)'
              strokeWidth='1'
              className='v20-box-border'
            />
            <text x='156' y={y + 20} fontFamily='var(--font-mono)' fontSize='10' letterSpacing='1.5' fill='var(--v20-ink-label-strong)' className='v20-box-text'>{layer.label}</text>
            <line x1={360 + skew} y1={y + 8} x2='450' y2={y + 8} stroke='var(--v20-ink-callout)' strokeWidth='0.8' strokeDasharray='2 2' className='v20-callout-line' />
            <circle cx={360 + skew} cy={y + 8} r='1.6' fill='#F07B2F' className='v20-callout-dot' />
            <text x='454' y={y + 11} fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1' fill='#F07B2F'>{layer.code}</text>
          </g>
        )
      })}
      <g stroke='var(--v20-ink-hair)' strokeWidth='0.8'>
        <line x1='96' y1='76' x2='96' y2='484' />
        <line x1='92' y1='76' x2='100' y2='76' />
        <line x1='92' y1='484' x2='100' y2='484' />
      </g>
      <text x='80' y='284' fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.5' fill='#F07B2F' transform='rotate(-90 80 284)'>FRONTIER ORG · STACK</text>
      <g stroke='var(--v20-ink-dim)' strokeWidth='0.6'>
        <line x1='140' y1='520' x2='360' y2='520' />
        <line x1='140' y1='516' x2='140' y2='524' />
        <line x1='360' y1='516' x2='360' y2='524' />
      </g>
      <text x='250' y='534' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.5' fill='var(--v20-ink-label-strong)' textAnchor='middle'>DIM: 7 × LAYER</text>
    </svg>
  )
}

function DataFlowDiagram() {
  return (
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v20-mini-diagram'>
      <defs>
        <filter id='v20-mini-glow'>
          <feGaussianBlur stdDeviation='2' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
        <pattern id='v20-mini-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v20-ink-grid)' strokeWidth='0.5' />
        </pattern>
      </defs>
      <rect x='10' y='10' width='320' height='220' fill='url(#v20-mini-grid)' />
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v20-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v20-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·D-01</text>
      <g className='v20-mini-node' style={{ '--node-delay': '0s' } as React.CSSProperties}>
        <rect x='30' y='50' width='80' height='40' fill='var(--v20-paper)' stroke='none' />
        <rect x='30' y='50' width='80' height='40' fill='var(--v20-ink-node-fill)' stroke='var(--v20-ink-corner)' strokeWidth='1.8' />
        <circle cx='38' cy='58' r='3.5' fill='var(--v20-paper)' /><circle cx='38' cy='58' r='2.5' fill='#F07B2F' />
        <text x='70' y='67' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='1'>INPUT</text>
        <text x='70' y='82' fontFamily='var(--font-mono)' fontSize='13' fill='#F07B2F' textAnchor='middle' letterSpacing='1' fontWeight='700'>SOURCE</text>
      </g>
      <g className='v20-mini-node' style={{ '--node-delay': '0.3s' } as React.CSSProperties}>
        <rect x='230' y='50' width='80' height='40' fill='var(--v20-paper)' stroke='none' />
        <rect x='230' y='50' width='80' height='40' fill='var(--v20-ink-node-fill)' stroke='var(--v20-ink-corner)' strokeWidth='1.8' />
        <circle cx='238' cy='58' r='3.5' fill='var(--v20-paper)' /><circle cx='238' cy='58' r='2.5' fill='#F07B2F' />
        <text x='270' y='67' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='1'>PROCESS</text>
        <text x='270' y='82' fontFamily='var(--font-mono)' fontSize='13' fill='#F07B2F' textAnchor='middle' letterSpacing='1' fontWeight='700'>AGENT</text>
      </g>
      <g className='v20-mini-node' style={{ '--node-delay': '0.6s' } as React.CSSProperties}>
        <rect x='130' y='150' width='80' height='40' fill='var(--v20-paper)' stroke='none' />
        <rect x='130' y='150' width='80' height='40' fill='var(--v20-ink-node-fill)' stroke='var(--v20-ink-corner)' strokeWidth='1.8' />
        <circle cx='138' cy='158' r='3.5' fill='var(--v20-paper)' /><circle cx='138' cy='158' r='2.5' fill='#F07B2F' />
        <text x='170' y='167' fontFamily='var(--font-mono)' fontSize='9' fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='1'>RESULT</text>
        <text x='170' y='182' fontFamily='var(--font-mono)' fontSize='13' fill='#F07B2F' textAnchor='middle' letterSpacing='1' fontWeight='700'>OUTPUT</text>
      </g>
      <path d='M 110 70 L 230 70' stroke='var(--v20-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' />
      <text x='170' y='66' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v20-ink-text-accent)' textAnchor='middle'>API</text>
      <path d='M 70 90 L 170 150' stroke='var(--v20-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' />
      <text x='110' y='115' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v20-ink-text-accent)' textAnchor='middle' transform='rotate(-28 110 115)'>STREAM</text>
      <path d='M 270 90 L 170 150' stroke='var(--v20-ink-connector)' strokeWidth='1.8' strokeDasharray='5 4' />
      <text x='230' y='115' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v20-ink-text-accent)' textAnchor='middle' transform='rotate(28 230 115)'>SYNC</text>
      <circle cx='170' cy='70' r='4.5' fill='var(--v20-paper)' />
      <circle cx='170' cy='70' r='3.5' fill='#F07B2F' filter='url(#v20-mini-glow)' />
      <circle cx='120' cy='120' r='4' fill='var(--v20-paper)' />
      <circle cx='120' cy='120' r='3' fill='var(--v20-ink-blob)' />
      <circle cx='220' cy='120' r='4' fill='var(--v20-paper)' />
      <circle cx='220' cy='120' r='3' fill='var(--v20-ink-blob)' />
      <line x1='30' y1='210' x2='110' y2='210' stroke='var(--v20-ink-measure)' strokeWidth='0.5' />
      <line x1='30' y1='207' x2='30' y2='213' stroke='var(--v20-ink-measure)' strokeWidth='0.5' />
      <line x1='110' y1='207' x2='110' y2='213' stroke='var(--v20-ink-measure)' strokeWidth='0.5' />
      <text x='70' y='218' fontFamily='var(--font-mono)' fontSize='6' fill='var(--v20-ink-dim)' textAnchor='middle'>80px · 4 CELLS</text>
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
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v20-mini-diagram'>
      <defs>
        <pattern id='v20-net-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v20-ink-grid)' strokeWidth='0.5' />
        </pattern>
        <filter id='v20-hub-glow'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge><feMergeNode in='coloredBlur' /><feMergeNode in='SourceGraphic' /></feMerge>
        </filter>
      </defs>
      <rect x='10' y='10' width='320' height='220' fill='url(#v20-net-grid)' />
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v20-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v20-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·G-01</text>
      <circle cx='170' cy='130' r='80' fill='none' stroke='var(--v20-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />
      <circle cx='170' cy='130' r='60' fill='none' stroke='var(--v20-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />
      <circle cx='170' cy='130' r='40' fill='none' stroke='var(--v20-ink-orbit)' strokeWidth='0.6' strokeDasharray='4 4' />
      <circle cx='170' cy='130' r='24' fill='var(--v20-paper)' stroke='none' />
      <circle cx='170' cy='130' r='24' fill='var(--v20-ink-hub)' stroke='var(--v20-ink-corner)' strokeWidth='2.5' />
      <circle cx='170' cy='130' r='12' fill='#F07B2F' filter='url(#v20-hub-glow)' />
      <text x='170' y='135' fontFamily='var(--font-mono)' fontSize='8' fill='#fff' textAnchor='middle' fontWeight='700'>HUB</text>
      {nodes.map((node, i) => {
        const angle = (node.angle - 90) * Math.PI / 180
        const x = 170 + Math.cos(angle) * 80
        const y = 130 + Math.sin(angle) * 80
        return (
          <g key={i}>
            <line x1='170' y1='130' x2={x} y2={y} stroke='var(--v20-ink-spoke)' strokeWidth='1.5' />
            <circle cx={x} cy={y} r='8' fill='var(--v20-paper)' stroke='none' />
            <circle cx={x} cy={y} r='8' fill='var(--v20-ink-blob)' stroke='var(--v20-ink-corner)' strokeWidth='1.8' />
            <text x={x} y={y + (node.angle === 0 ? -14 : node.angle === 180 ? 20 : node.angle < 180 ? -12 : 18)} fontFamily='var(--font-mono)' fontSize='7' fill='var(--v20-ink-blob)' textAnchor='middle' letterSpacing='1'>{node.label}</text>
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
    <svg viewBox='0 0 340 240' xmlns='http://www.w3.org/2000/svg' className='v20-mini-diagram'>
      <defs>
        <marker id='v20-arrow' markerWidth='10' markerHeight='10' refX='9' refY='5' orient='auto'>
          <polygon points='0 0, 10 5, 0 10' fill='var(--v20-ink-text-accent)' />
        </marker>
        <pattern id='v20-proc-grid' patternUnits='userSpaceOnUse' width='20' height='20' x='10' y='10'>
          <path d='M 0 0 L 20 0 M 0 0 L 0 20' fill='none' stroke='var(--v20-ink-grid)' strokeWidth='0.5' />
        </pattern>
      </defs>
      <rect x='10' y='10' width='320' height='220' fill='url(#v20-proc-grid)' />
      <rect x='10' y='10' width='320' height='220' fill='none' stroke='var(--v20-ink-frame)' strokeWidth='1.2' />
      <line x1='10' y1='10' x2='26' y2='10' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='10' x2='10' y2='26' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='314' y2='10' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='10' x2='330' y2='26' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='26' y2='230' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='10' y1='230' x2='10' y2='214' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='314' y2='230' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <line x1='330' y1='230' x2='330' y2='214' stroke='var(--v20-ink-corner)' strokeWidth='2' />
      <text x='170' y='32' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v20-ink-label-strong)' textAnchor='middle' letterSpacing='2'>DWG·F-01</text>
      <line x1='30' y1='50' x2='310' y2='50' stroke='var(--v20-ink-divider-soft)' strokeWidth='1.2' strokeDasharray='5 5' />
      {steps.map((step, i) => (
        <g key={i}>
          <rect x={30 + i * 100} y='70' width='80' height='100' fill='var(--v20-paper)' stroke='none' />
          <rect x={30 + i * 100} y='70' width='80' height='100' fill='var(--v20-ink-node-fill)' stroke='var(--v20-ink-corner)' strokeWidth='1.8' />
          <text x={70 + i * 100} y='98' fontFamily='var(--font-mono)' fontSize='24' fill='#F07B2F' textAnchor='middle' fontWeight='800'>{step.num}</text>
          <text x={70 + i * 100} y='112' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v20-ink-label)' textAnchor='middle' letterSpacing='1'>DAYS</text>
          <line x1={35 + i * 100} y1='120' x2={105 + i * 100} y2='120' stroke='var(--v20-ink-divider-soft)' strokeWidth='0.6' strokeDasharray='2 2' />
          <text x={70 + i * 100} y='138' fontFamily='var(--font-mono)' fontSize='10' fill='#F07B2F' textAnchor='middle' fontWeight='700' letterSpacing='1'>{step.label}</text>
          <text x={70 + i * 100} y='151' fontFamily='var(--font-mono)' fontSize='8' fill='var(--v20-ink-label-strong)' textAnchor='middle' letterSpacing='0.5'>&</text>
          <text x={70 + i * 100} y='162' fontFamily='var(--font-mono)' fontSize='10' fill='#F07B2F' textAnchor='middle' fontWeight='700' letterSpacing='1'>{step.sublabel}</text>
          <circle cx={70 + i * 100} cy='50' r='4.5' fill='var(--v20-paper)' />
          <circle cx={70 + i * 100} cy='50' r='3.5' fill='#F07B2F' stroke='var(--v20-ink-corner)' strokeWidth='1.8' />
          <line x1={70 + i * 100} y1='54' x2={70 + i * 100} y2='70' stroke='var(--v20-ink-spoke)' strokeWidth='1.2' strokeDasharray='2 2' />
          {i < 2 && <path d={`M ${110 + i * 100} 120 L ${130 + i * 100} 120`} stroke='var(--v20-ink-corner)' strokeWidth='2.5' markerEnd='url(#v20-arrow)' />}
        </g>
      ))}
      <line x1='30' y1='200' x2='310' y2='200' stroke='var(--v20-ink-measure)' strokeWidth='0.6' />
      <line x1='30' y1='196' x2='30' y2='204' stroke='var(--v20-ink-measure)' strokeWidth='0.6' />
      <line x1='310' y1='196' x2='310' y2='204' stroke='var(--v20-ink-measure)' strokeWidth='0.6' />
      <text x='170' y='215' fontFamily='var(--font-mono)' fontSize='7' fill='var(--v20-ink-dim)' textAnchor='middle' letterSpacing='1'>110 DAYS · TOTAL</text>
    </svg>
  )
}

/* ─── Page ─── */

export default function V14Page() {
  return (
    <>
      <NavScrollEffect />
      {/* NAV — V4 grid structure, V5 dark treatment */}
      <nav className='v20-nav'>
        <div className='v20-nav-inner'>
          <div className='v20-logo'>
            <img src='/dbiz-logo.svg' alt='DBiz.ai' width='80' height='45' />
          </div>
          <ul className='v20-nav-links'>
            <li><a href='#solutions'>Our Solutions</a></li>
            <li><a href='#work'>Our Work</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#careers'>Careers</a></li>
          </ul>
          <div className='v20-nav-cta-wrap'>
            <a href='#cta' className='v20-nav-cta'>Get an assessment <span>→</span></a>
          </div>
          <details className='v20-nav-mobile'>
            <summary className='v20-nav-burger' aria-label='Menu'>
              <span /><span /><span />
            </summary>
            <ul className='v20-nav-mobile-panel'>
              <li><a href='#solutions'>Our Solutions</a></li>
              <li><a href='#work'>Our Work</a></li>
              <li><a href='#about'>About Us</a></li>
              <li><a href='#careers'>Careers</a></li>
              <li><a href='/contact'>Talk to our team</a></li>
              <li><a href='#cta' className='v20-nav-mobile-cta'>Get an assessment →</a></li>
            </ul>
          </details>
        </div>
      </nav>

      {/* HERO — V4 12-col grid + V5 diagram */}
      <section className='v20-hero'>
        <div className='v20-container'>
          <div className='v20-hero-grid'>
            <div className='v20-hero-meta'>
              <span className='num'>N°01 / Homepage</span>
            </div>
            <div className='v20-hero-eyebrow'>
              <span className='bar' aria-hidden='true' />
              <span>Human-Led</span>
              <span className='sep' aria-hidden='true'>|</span>
              <span>Agent-Operated</span>
              <span className='sep' aria-hidden='true'>|</span>
              <span>Data-Powered</span>
            </div>
            <div className='v20-hero-title'>
              <h1>
                Your enterprise.<br />
                <em>Agent-operated.</em><br />
                Starting now.
              </h1>
            </div>
            <p className='v20-hero-body'>
              Most enterprises have tried AI. Most of it didn&apos;t scale — not because the technology failed, but because no one connected the ambition to what actually got built. We close that gap. We call the result a Frontier Organisation: human-led, agent-operated, data-powered.
            </p>
            <div className='v20-hero-ctas'>
              <a href='#solutions' className='v20-cta-primary'>
                Explore our AI stack <span className='arrow'>→</span>
              </a>
              <a href='/contact' className='v20-cta-text'>Talk to our team</a>
            </div>
            <div className='v20-hero-diagram'>
              <div className='v20-diagram-label'>
                <span>DWG · FRONTIER-ORG-01</span><span>REV.01</span>
              </div>
              <HeroDiagram />
              <div className='v20-diagram-foot'>
                <span>SCALE 1:1</span><span>SHEET A1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST — client register */}
      <LogoWall />

      {/* STATS — light surface */}
      <section className='v20-stats' data-surface='light'>
        <div className='v20-container'>
          <div className='v20-section-head'>
            <div className='num'>N°02 / By the numbers</div>
            <h2>A track record<br />of enterprise <em>delivery.</em></h2>
            <p className='lead'>Not a POC — measurable, deployed, running in production today.</p>
          </div>
          <div className='v20-stats-grid'>
            {stats.map((s) => (
              <div key={s.coord} className='v20-stat'>
                <span className='coord'>{s.coord}</span>
                <div className='val'>{s.val}</div>
                <div className='lbl'>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — interactive tabbed layout */}
      <CapabilitiesSection />

      {/* STACK is now inside the Capabilities toggle */}

      {/* TESTIMONIALS — carousel */}
      <TestimonialsSection />

      {/* PROVEN — tabbed filter cards */}
      <ProvenSection />

      {/* HOW WE WORK — time-boxed delivery phases */}
      <HowSection />

      {/* WHY — interactive diagram */}
      <WhySection />

      {/* FINAL CTA — Centered layout with grid background */}
      <section className='v20-cta' id='cta'>
        <div className='v20-cta-inner'>
          <span className='v20-corner tl' />
          <span className='v20-corner tr' />
          <span className='v20-corner bl' />
          <span className='v20-corner br' />
          <div className='v20-cta-content'>
            <div className='v20-cta-label'>[Z·01] NEXT STEP</div>
            <h2>
              Your Frontier Organisation<br />
              starts with a <span style={{ color: 'var(--v20-accent)' }}>conversation.</span>
            </h2>
            <div className='v20-cta-sub'>One partner · Full stack · No handoff</div>
            <div className='v20-cta-actions'>
              <a href='#' className='v20-cta-primary'>Contact us <span className='arrow'>→</span></a>
              <a href='#' className='v20-cta-text'>Or get an architecture assessment</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='v20-footer' id='careers'>
        <div className='v20-container'>
          <div className='v20-foot-top'>
            <div className='v20-foot-brand'>
              <div className='v20-logo'>
                <img src='/dbiz-logo.svg' alt='DBiz.ai' width='80' height='45' />
              </div>
              <FooterTagline />
              <div className='tag'>Human-Led &nbsp;|&nbsp; Agent-Operated &nbsp;|&nbsp; Data-Powered</div>
              <div className='meta'>10 offices · 6 countries · 800+ people</div>
            </div>
            <div className='v20-foot-col'>
              <div className='v20-mono'>Company</div>
              <ul><li><a href='#'>About Us</a></li><li><a href='#'>Our Work</a></li><li><a href='#'>Careers</a></li><li><a href='#'>Contact Us</a></li><li><a href='#'>Blog</a></li></ul>
            </div>
            <div className='v20-foot-col'>
              <div className='v20-mono'>Solutions</div>
              <ul><li><a href='#'>Strategy &amp; Architecture</a></li><li><a href='#'>Cloud</a></li><li><a href='#'>Data &amp; AI</a></li><li><a href='#'>Business Apps &amp; Integration</a></li><li><a href='#'>Product &amp; Experience</a></li><li><a href='#'>Managed Services</a></li></ul>
            </div>
            <div className='v20-foot-col'>
              <div className='v20-mono'>Partners</div>
              <ul><li><a href='#'>AWS</a></li><li><a href='#'>Microsoft Azure</a></li><li><a href='#'>Salesforce</a></li><li><a href='#'>Snowflake</a></li><li><a href='#'>Databricks</a></li><li><a href='#'>Boomi</a></li><li><a href='#'>Anthropic</a></li></ul>
            </div>
          </div>
          <div className='v20-foot-legal'>
            <p className='ack'>We acknowledge the Traditional Custodians of the lands on which we work and live, and pay our respects to Elders past, present, and emerging.</p>
            <div className='links'>
              <a href='#'>Privacy Policy</a><a href='#'>Legal</a><a href='#'>Terms of Use</a><a href='#'>Modern Slavery Statement</a>
            </div>
            <div className='v20-foot-copy'>© 2026 DBiz.ai. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
