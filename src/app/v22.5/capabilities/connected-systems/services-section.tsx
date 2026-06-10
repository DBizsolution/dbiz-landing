/* §01 What we do — interactive services tab section.
   Three service types (Applications / Integration / Infrastructure) shown
   as a left tab list. Click a tab to surface that pillar's platform cards
   on the right. Mirrors the landing capabilities-section pattern. */

'use client'

import { useState } from 'react'

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

/* ─── Data ─────────────────────────────────────────────────────────────── */

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
  tabLabel: string
  name: string
  lede: string
  cols: 2 | 1
  items: PlatformItem[]
}

const pillars: Pillar[] = [
  {
    id: 'apps',
    tabLabel: 'Applications',
    name: 'AI-Enabled Business Applications',
    lede: 'Run your business on platforms built for scale and intelligence.',
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
    tabLabel: 'Integrations',
    name: 'Connect systems. Enable real-time execution.',
    lede: 'We integrate applications, data, and workflows using MuleSoft Anypoint Platform, Boomi AtomSphere, and Workato — eliminating silos and enabling end-to-end process visibility across the enterprise. This foundation enables intelligent automation and AI-driven workflows across connected systems.',
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
    tabLabel: 'Infrastructure',
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

/* Delivery proof — the single stats home on the page (the old §04 "In
   production" block was merged in here). Counts are the established Microsoft
   figures; the two outcome metrics came from §04. Replace any you can with
   verified Salesforce / Oracle numbers when available. */
const credStats = [
  { val: '10+ yrs', label: 'Microsoft delivery' },
  { val: '50+', label: 'Dynamics 365 implementations' },
  { val: '200+', label: 'certified consultants' },
  { val: '1,500+', label: 'integration connectors' },
  { val: '40–60%', label: 'data accuracy improvement' },
  { val: '80%', label: 'faster ERP integration' },
]

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const pillar = pillars[active]

  return (
    <section id='pillars' className='v22-cdp-block' data-surface='light'>
      <div className='v22-container'>
        <div className='v22-cdp-block-grid'>
          <div className='v22-cdp-block-head'>
            <span className='v22-cdp-block-num'>Capabilities</span>
            <h2 className='v22-cdp-block-title'>What we do</h2>
          </div>
          <div className='v22-cdp-block-body'>
            {/* Credibility band — delivery proof up top, framing the
                capabilities that follow. Human framing first, then numbers. */}
            <div className='v22-cdp-cred'>
              <p className='v22-cdp-cred-lede'>
                We deliver end-to-end transformation across business applications and integration platforms — implementation, integration, modernisation, and continuous optimisation. From ERP and CRM systems to enterprise integrations, we help organisations move from disconnected processes to unified, intelligent operations.
              </p>
              <div className='v22-cdp-cred-proof'>
                <span className='v22-cdp-cred-proof-label'>Proven delivery across enterprise platforms</span>
                <ul className='v22-cdp-cred-stats'>
                  {credStats.map((s) => (
                    <li key={s.label}>
                      <span className='v22-cdp-cred-stat-val'>{s.val}</span>
                      <span className='v22-cdp-cred-stat-lbl'>{s.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className='v22-cdp-cred-foot'>
                Certified expertise across Microsoft, Salesforce, Oracle, and leading integration platforms.
              </p>
            </div>

            <div className='v22-cdp-services-tabs'>
              {/* Tab list — horizontal at top of body, scannable upfront */}
              <div className='v22-cdp-services-tablist' role='tablist' aria-label='Service types'>
                {pillars.map((p, i) => (
                  <button
                    key={p.id}
                    type='button'
                    role='tab'
                    id={`services-tab-${p.id}`}
                    aria-selected={i === active}
                    aria-controls={`services-panel-${p.id}`}
                    tabIndex={i === active ? 0 : -1}
                    className={`v22-cdp-services-tab${i === active ? ' is-active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    {p.tabLabel}
                  </button>
                ))}
              </div>

              {/* Active panel */}
              <div
                role='tabpanel'
                id={`services-panel-${pillar.id}`}
                aria-labelledby={`services-tab-${pillar.id}`}
                className='v22-cdp-services-panel'
              >
                <h3 className='v22-cdp-services-panel-name'>{pillar.name}</h3>
                <p className='v22-cdp-services-panel-lede'>{pillar.lede}</p>
                <div className='v22-cdp-platform-grid' data-cols={pillar.cols}>
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
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
