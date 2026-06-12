/* §01 What we do — interactive services tab section.
   Three service types (Applications / Integration / Infrastructure) shown
   as a left tab list. Click a tab to surface that pillar's platform cards
   on the right. Mirrors the landing capabilities-section pattern. */

'use client'

import { useState } from 'react'
import { InlineSvg } from '@/components/inline-svg'
import {
  platformMarkInfrastructure,
  platformMarkIntegration,
  platformMarkMicrosoft,
  platformMarkOracle,
  platformMarkSalesforce,
} from '@/lib/svg-assets'

/* ─── Brand-evocative platform marks — file-based assets (public/assets/svg)
   injected inline so currentColor and the v22 accent token resolve. ────── */
function MicrosoftMark() {
  return <InlineSvg markup={platformMarkMicrosoft} />
}

function SalesforceMark() {
  return <InlineSvg markup={platformMarkSalesforce} />
}

function OracleMark() {
  return <InlineSvg markup={platformMarkOracle} />
}

function IntegrationMark() {
  return <InlineSvg markup={platformMarkIntegration} />
}

function InfrastructureMark() {
  return <InlineSvg markup={platformMarkInfrastructure} />
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
