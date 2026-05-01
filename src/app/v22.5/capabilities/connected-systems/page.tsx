/* V22.5 — Connected Systems / Enterprise Application Services
   Tight 6-section structure: Capability areas → AI Accelerators →
   Execution in action → In production → Engagement → Proof → CTA.
   Positioning: implementation depth first, AI built in not bolted on. */

import Link from 'next/link'
import { capabilities } from '../../capabilities-data'

const SLUG = 'connected-systems'
const idx = capabilities.findIndex(c => c.slug === SLUG)
const cap = capabilities[idx]
const prev = idx > 0 ? capabilities[idx - 1] : null
const next = idx < capabilities.length - 1 ? capabilities[idx + 1] : null

/* ─── Brand-evocative platform marks (line-art, navy + orange) ──────────── */

function MicrosoftMark() {
  return (
    <svg viewBox='0 0 40 40' aria-hidden='true' className='v22-cdp-platform-mark'>
      <rect x='4' y='4' width='15' height='15' fill='var(--v22-accent)' opacity='0.95' />
      <rect x='21' y='4' width='15' height='15' stroke='currentColor' strokeWidth='1.2' fill='none' />
      <rect x='4' y='21' width='15' height='15' stroke='currentColor' strokeWidth='1.2' fill='none' />
      <rect x='21' y='21' width='15' height='15' fill='currentColor' opacity='0.65' />
    </svg>
  )
}

function SalesforceMark() {
  return (
    <svg viewBox='0 0 40 40' aria-hidden='true' className='v22-cdp-platform-mark'>
      <path
        d='M9 24 c -3,0 -5,-2.5 -5,-5.5 c 0,-3 2,-5 5,-5 c 0.5,-3.5 4,-6 8,-6 c 3.5,0 6.5,2 7.5,5 c 1,-0.8 2.5,-1.3 4,-1.3 c 3.5,0 6.5,2.8 6.5,6.5 c 0,3.5 -3,6.3 -6.5,6.3 z'
        stroke='currentColor' strokeWidth='1.2' fill='none' strokeLinejoin='round'
      />
      <circle cx='15' cy='18' r='1.6' fill='var(--v22-accent)' />
      <circle cx='22' cy='18' r='1.6' fill='var(--v22-accent)' />
      <circle cx='29' cy='18' r='1.6' fill='currentColor' />
    </svg>
  )
}

function OracleMark() {
  return (
    <svg viewBox='0 0 40 40' aria-hidden='true' className='v22-cdp-platform-mark'>
      <ellipse cx='20' cy='10' rx='14' ry='4' stroke='currentColor' strokeWidth='1.2' fill='none' />
      <path d='M6 10 v20 a 14 4 0 0 0 28 0 v-20' stroke='currentColor' strokeWidth='1.2' fill='none' />
      <ellipse cx='20' cy='20' rx='14' ry='4' stroke='currentColor' strokeWidth='0.9' opacity='0.5' fill='none' />
      <ellipse cx='20' cy='30' rx='14' ry='4' stroke='var(--v22-accent)' strokeWidth='1.4' fill='none' />
    </svg>
  )
}

function IntegrationMark() {
  return (
    <svg viewBox='0 0 40 40' aria-hidden='true' className='v22-cdp-platform-mark'>
      <line x1='8' y1='10' x2='20' y2='20' stroke='currentColor' strokeWidth='1' />
      <line x1='32' y1='10' x2='20' y2='20' stroke='currentColor' strokeWidth='1' />
      <line x1='8' y1='30' x2='20' y2='20' stroke='currentColor' strokeWidth='1' />
      <line x1='32' y1='30' x2='20' y2='20' stroke='currentColor' strokeWidth='1' />
      <circle cx='8' cy='10' r='2.5' fill='currentColor' />
      <circle cx='32' cy='10' r='2.5' fill='currentColor' />
      <circle cx='8' cy='30' r='2.5' fill='currentColor' />
      <circle cx='32' cy='30' r='2.5' fill='currentColor' />
      <circle cx='20' cy='20' r='4.5' fill='var(--v22-accent)' />
      <circle cx='20' cy='20' r='1.6' fill='var(--brand-navy-deep)' />
    </svg>
  )
}

function InfrastructureMark() {
  return (
    <svg viewBox='0 0 40 40' aria-hidden='true' className='v22-cdp-platform-mark'>
      <rect x='6' y='8' width='28' height='6' fill='currentColor' opacity='0.65' />
      <rect x='6' y='17' width='28' height='6' fill='var(--v22-accent)' opacity='0.95' />
      <rect x='6' y='26' width='28' height='6' stroke='currentColor' strokeWidth='1.2' fill='none' />
      <circle cx='10' cy='11' r='1.2' fill='#fff' />
      <circle cx='10' cy='20' r='1.2' fill='#fff' />
      <circle cx='10' cy='29' r='1.2' fill='currentColor' />
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

type PlatformItem = {
  Mark: () => React.JSX.Element
  name: string
  badge: string
  summary?: string
  bullets?: { label: string; tools: string }[]
  href: string
}

type Pillar = {
  id: string
  marker: string
  name: string
  lede: string
  cols: 2 | 1
  items: PlatformItem[]
}

const pillars: Pillar[] = [
  {
    id: 'apps',
    marker: 'A — Applications',
    name: 'AI-Enabled Business Applications',
    lede: 'Passive systems of record become intelligent control surfaces.',
    cols: 2,
    items: [
      {
        Mark: MicrosoftMark,
        name: 'Microsoft',
        badge: 'Solutions Partner',
        bullets: [
          { label: 'Applications', tools: 'Dynamics 365 Sales · Service · Field Service' },
          { label: 'AI workflow', tools: 'Power Platform · Copilot Studio · Azure OpenAI' },
        ],
        href: '/v22.5/capabilities/connected-systems/microsoft',
      },
      {
        Mark: SalesforceMark,
        name: 'Salesforce',
        badge: 'Salesforce Partner',
        bullets: [
          { label: 'Customer cloud', tools: 'Sales · Service · Data Cloud' },
          { label: 'Agentic AI', tools: 'Agentforce · Einstein AI' },
        ],
        href: '/v22.5/capabilities/connected-systems/salesforce',
      },
      {
        Mark: OracleMark,
        name: 'Oracle ERP',
        badge: 'Partner Network',
        bullets: [
          { label: 'Finance & ops', tools: 'Oracle ERP Cloud · NetSuite' },
          { label: 'Supply chain', tools: 'Oracle SCM' },
        ],
        href: '/v22.5/capabilities/connected-systems/oracle',
      },
    ],
  },
  {
    id: 'integration',
    marker: 'B — Integration',
    name: 'Integration & Automation Platforms',
    lede: 'API-led architectures that connect applications, data, and workflows into a unified operational layer.',
    cols: 2,
    items: [
      {
        Mark: IntegrationMark,
        name: 'MuleSoft',
        badge: 'Anypoint Platform',
        bullets: [
          { label: 'Connectivity', tools: 'Anypoint · CloudHub · Runtime Fabric' },
          { label: 'Agent-ready', tools: 'MCP-native servers' },
        ],
        href: '/v22.5/capabilities/connected-systems/mulesoft',
      },
      {
        Mark: IntegrationMark,
        name: 'Boomi',
        badge: '1,500+ connectors',
        bullets: [
          { label: 'Integration', tools: 'AtomSphere' },
          { label: 'Data', tools: 'Master Data Hub · 1,500+ connectors' },
        ],
        href: '/v22.5/capabilities/connected-systems/boomi',
      },
      {
        Mark: IntegrationMark,
        name: 'Workato',
        badge: 'Automation Platform',
        bullets: [
          { label: 'Orchestration', tools: 'Recipe-based · Workbot' },
          { label: 'Coverage', tools: 'HR · finance · operations' },
        ],
        href: '/v22.5/capabilities/connected-systems/workato',
      },
      {
        Mark: IntegrationMark,
        name: 'Ecosystem Extension',
        badge: 'Specialised partners',
        bullets: [
          { label: 'Governance', tools: 'Informatica IDMC' },
          { label: 'API mgmt', tools: 'Jitterbit Harmony' },
          { label: 'SaaS automation', tools: 'Zapier' },
        ],
        href: '/v22.5/capabilities/connected-systems/ecosystem',
      },
    ],
  },
  {
    id: 'infrastructure',
    marker: 'C — Infrastructure',
    name: 'Platform Infrastructure',
    lede: 'The substrate everything runs on — code-defined, governed, observable.',
    cols: 1,
    items: [
      {
        Mark: InfrastructureMark,
        name: 'Platform Infrastructure',
        badge: 'IaC · Runtime · Governance',
        bullets: [
          { label: 'Infrastructure-as-code', tools: 'Terraform · Bicep · Ansible' },
          { label: 'Runtime', tools: 'Docker · Kubernetes · Helm' },
          { label: 'Governance & observability', tools: 'ServiceNow · Azure Arc · Azure Monitor' },
        ],
        href: '/v22.5/capabilities/connected-systems/infrastructure',
      },
    ],
  },
]

const accelerators = [
  {
    kind: 'Integration accelerator',
    name: 'iConnector',
    role: 'MCP wrappers around Boomi, MuleSoft, and Workato. Agents act across systems without rebuilding the integration layer.',
  },
  {
    kind: 'AI orchestration runtime',
    name: 'NEXUS',
    role: 'Sits on top of MuleSoft, Boomi, and Workato — turns the integration substrate into a governed runtime where agents act with enforced permissions and observability.',
  },
  {
    kind: 'Multi-agent framework',
    name: 'Agent Studio',
    role: 'Compose and govern multi-agent workflows on Salesforce and Dynamics. Tool-use policies, validation, human-in-loop gates.',
  },
  {
    kind: 'Embedded copilots',
    name: 'Productivity Copilots',
    role: 'Agentforce, Copilot Studio, Now Assist — deployed inside the platforms where the work already happens.',
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

/* Cases mapped to the three §03 patterns above, so the "Where the patterns
   shipped" promise is honoured. Meta = technical scope, not client claim. */
const caseStudies = [
  {
    title: 'Quality Registration — Salesforce + MuleSoft MCP',
    meta: 'Pattern 01 · CRM + integration',
  },
  {
    title: 'Sales Compliance — Agentforce on Service Cloud',
    meta: 'Pattern 02 · service automation',
  },
  {
    title: 'Procurement Routing — NEXUS iConnector across ERPs',
    meta: 'Pattern 03 · multi-system orchestration',
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
            <span aria-hidden='true'>←</span> Back to capabilities
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
              <span className='v22-cdp-eyebrow'>N°{cap.num} · What we do / {cap.altLabel}</span>
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

      {/* PARTNERSHIPS STRIP — credibility before capability */}
      <section className='v22-cdp-partners' data-surface='light' aria-label='Technology partners and platforms'>
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
        </div>
      </section>

      {/* On-this-page anchor strip — orientation, lets reader skip into depth */}
      <nav className='v22-cdp-toc' data-surface='light' aria-label='On this page'>
        <div className='v22-container'>
          <span className='v22-cdp-toc-kicker'>On this page</span>
          <ul className='v22-cdp-toc-list'>
            <li><a href='#pillars'>Services</a></li>
            <li><a href='#accelerators'>Accelerators</a></li>
            <li><a href='#patterns'>Patterns</a></li>
            <li><a href='#telemetry'>Telemetry</a></li>
            <li><a href='#engagement'>Engagement</a></li>
            <li><a href='#proof'>Proof</a></li>
          </ul>
        </div>
      </nav>

      {/* §01 WHAT WE DO — Two pillars + infrastructure substrate */}
      <section id='pillars' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>§01</span>
              <h2 className='v22-cdp-block-title'>What we do</h2>
              <p className='v22-cdp-block-kicker'>We transform passive systems of record into intelligent control surfaces — and connect them through one operational layer.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-cdp-pillars'>
                {pillars.map((pillar) => (
                  <div key={pillar.id} className={`v22-cdp-pillar v22-cdp-pillar--${pillar.id}`}>
                    <header className='v22-cdp-pillar-head'>
                      <span className='v22-cdp-pillar-marker'>{pillar.marker}</span>
                      <h3 className='v22-cdp-pillar-name'>{pillar.name}</h3>
                      <p className='v22-cdp-pillar-lede'>{pillar.lede}</p>
                    </header>
                    <div
                      className='v22-cdp-platform-grid'
                      data-cols={pillar.cols}
                    >
                      {pillar.items.map(({ Mark, ...p }) => (
                        <article key={p.name} className='v22-cdp-platform'>
                          <header className='v22-cdp-platform-head'>
                            <Mark />
                            <div className='v22-cdp-platform-titles'>
                              <h4 className='v22-cdp-platform-name'>{p.name}</h4>
                              <span className='v22-cdp-platform-badge'>{p.badge}</span>
                            </div>
                          </header>
                          {p.bullets ? (
                            <ul className='v22-cdp-platform-bullets'>
                              {p.bullets.map((b) => (
                                <li key={b.label}>
                                  <span className='v22-cdp-platform-bullet-label'>{b.label}</span>
                                  <span className='v22-cdp-platform-bullet-tools'>{b.tools}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className='v22-cdp-platform-summary'>{p.summary}</p>
                          )}
                          <Link href={p.href} className='v22-cdp-platform-link' aria-label={`View ${p.name} capabilities`}>
                            Full capabilities <span aria-hidden='true'>→</span>
                          </Link>
                        </article>
                      ))}
                    </div>
                  </div>
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
              <div className='v22-cdp-accel-grid'>
                {accelerators.map((a) => (
                  <article key={a.name} className='v22-cdp-accel-card'>
                    <span className='v22-cdp-accel-kind'>{a.kind}</span>
                    <h3 className='v22-cdp-accel-name'>{a.name}</h3>
                    <p className='v22-cdp-accel-role'>{a.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §03 AI EXECUTION IN ACTION — three patterns shipped in production */}
      <section id='patterns' className='v22-cdp-block v22-cdp-ai' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>§03</span>
              <h2 className='v22-cdp-block-title'>AI execution in action</h2>
              <p className='v22-cdp-block-kicker'>Concrete deployments. Measurable outcomes.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <p className='v22-cdp-ai-lede'>
                Three patterns. In production. Measured.
              </p>
            </div>
          </div>
        </div>
        <div className='v22-container'>
          <div className='v22-cdp-patterns-grid'>
            {aiPatterns.map((p, i) => (
              <article key={p.title} className='v22-cdp-pattern'>
                <div className='v22-cdp-pattern-glyph-wrap'>
                  <PatternGlyph i={i} />
                </div>
                <div className='v22-cdp-pattern-metric'>
                  <span className='v22-cdp-pattern-val'>{p.metric}</span>
                  <span className='v22-cdp-pattern-lbl'>{p.metricLabel}</span>
                </div>
                <h3 className='v22-cdp-pattern-title'>{p.title}</h3>
                <p className='v22-cdp-pattern-body'>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* §04 IN PRODUCTION — telemetry, grouped: depth + outcomes */}
      <section id='telemetry' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
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

      {/* §05 ENGAGEMENT MODELS */}
      <section id='engagement' className='v22-cdp-block v22-cdp-engagement' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>§05</span>
              <h2 className='v22-cdp-block-title'>Engagement models</h2>
              <p className='v22-cdp-block-kicker'>Aligned to your capital and operational requirements.</p>
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

      {/* §06 PROOF — case studies, mapped to §03 patterns */}
      <section id='proof' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>§06</span>
              <h2 className='v22-cdp-block-title'>Proof</h2>
              <p className='v22-cdp-block-kicker'>Where the patterns above shipped.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <ul className='v22-cdp-cases-list'>
                {caseStudies.map((cs) => (
                  <li key={cs.title}>
                    <Link href='/v22.5#work' className='v22-cdp-case-link'>
                      <span className='v22-cdp-case-arrow' aria-hidden='true'>↗</span>
                      <span className='v22-cdp-case-meta'>
                        <span className='v22-cdp-case-title'>{cs.title}</span>
                        <span className='v22-cdp-case-tag'>{cs.meta}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
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
                <Link href='#proof' className='v22-cta-text'>See where we&apos;ve done it</Link>
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
