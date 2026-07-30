/* §01 What we do — Digital Product Engineering capability areas as tabs.
   Mirrors the connected-systems / cloud ServicesSection pattern. */

'use client'

import { useState } from 'react'

type Area = {
  id: string
  tabLabel: string
  name: string
  lede: string
  points: string[]
}

const areas: Area[] = [
  {
    id: 'discovery',
    tabLabel: 'Strategy & Discovery',
    name: 'Product Strategy & Discovery',
    lede: 'Get to the right product before a line of code is written: clear vision, business outcomes, and the priorities that matter.',
    points: [
      'Product discovery workshops',
      'Opportunity assessment',
      'Roadmap development',
      'Business case validation',
      'MVP planning',
    ],
  },
  {
    id: 'engineering',
    tabLabel: 'Product Engineering',
    name: 'Product Engineering',
    lede: 'Modern applications built for scale, resilience, and continuous evolution, not one-off releases.',
    points: [
      'Cloud-native application development',
      'Web and mobile application development',
      'API development',
      'Microservices architecture',
      'Platform engineering',
    ],
  },
  {
    id: 'intelligent',
    tabLabel: 'Intelligent Applications',
    name: 'Intelligent Applications',
    lede: 'Intelligence built into the product itself, so it assists users and acts on their behalf.',
    points: [
      'AI-powered applications',
      'Agent-enabled experiences',
      'Multi-agent systems',
      'Decision automation',
      'Enterprise AI integration',
    ],
  },
  {
    id: 'modernisation',
    tabLabel: 'Modernisation',
    name: 'Modernisation & Optimisation',
    lede: 'Extend the life and value of what you already run, without a rip-and-replace programme.',
    points: [
      'Application modernisation',
      'Legacy transformation',
      'Architecture optimisation',
      'Performance improvement',
      'Platform migration',
    ],
  },
]

const credStats = [
  { val: '150+', label: 'Microsoft certifications' },
  { val: '40+', label: 'AWS-certified consultants' },
  { val: 'Solutions Partner', label: 'App Innovation · Data & AI' },
  { val: 'Advanced Tier', label: 'AWS · GenAI + DevOps' },
  { val: 'Agentic DevOps', label: 'Azure + GitHub specialist' },
  { val: 'Salesforce', label: 'Agentforce partner' },
]

export default function ProductCapabilities() {
  const [active, setActive] = useState(0)
  const area = areas[active]

  return (
    <section id='pillars' className='v22-cdp-block' data-surface='light'>
      <div className='v22-container'>
        <div className='v22-cdp-block-grid'>
          <div className='v22-cdp-block-head'>
            <span className='v22-cdp-block-num'>Capabilities</span>
            <h2 className='v22-cdp-block-title'>What we do</h2>
          </div>
          <div className='v22-cdp-block-body'>
            <div className='v22-cdp-cred'>
              <p className='v22-cdp-cred-lede'>
                We design, build, and evolve digital products end to end, from first discovery to a living system in production. The difference is what happens after launch: with Perpetual Engineering and Agent Studio, the product keeps adapting instead of ageing.
              </p>
              <div className='v22-cdp-cred-proof'>
                <span className='v22-cdp-cred-proof-label'>How we build</span>
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
                Web, mobile, APIs, and agent-enabled experiences, engineered to evolve with the business.
              </p>
            </div>

            <div className='v22-cdp-services-tabs'>
              <div className='v22-cdp-services-tablist' role='tablist' aria-label='Product engineering capability areas'>
                {areas.map((a, i) => (
                  <button
                    key={a.id}
                    type='button'
                    role='tab'
                    id={`pe-tab-${a.id}`}
                    aria-selected={i === active}
                    aria-controls={`pe-panel-${a.id}`}
                    tabIndex={i === active ? 0 : -1}
                    className={`v22-cdp-services-tab${i === active ? ' is-active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    {a.tabLabel}
                  </button>
                ))}
              </div>

              <div
                role='tabpanel'
                id={`pe-panel-${area.id}`}
                aria-labelledby={`pe-tab-${area.id}`}
                className='v22-cdp-services-panel'
              >
                <h3 className='v22-cdp-services-panel-name'>{area.name}</h3>
                <p className='v22-cdp-services-panel-lede'>{area.lede}</p>
                <ul className='v22-cloud-points'>
                  {area.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
