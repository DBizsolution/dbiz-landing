/* §01 What we do, Cloud capability areas as a left/top tab list.
   Click an area to reveal its scope and the concrete work inside it.
   Mirrors the connected-systems ServicesSection pattern. */

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
    id: 'architecture',
    tabLabel: 'AI-Ready Architecture',
    name: 'AI-Ready Cloud Architecture',
    lede: 'A platform your AI can actually run on, engineered for agents, inference, and automation at enterprise scale, rather than retrofitted after the fact.',
    points: [
      'AWS Bedrock, Azure OpenAI, and Vertex AI deployment',
      'Kubernetes orchestration across EKS, AKS, and GKE',
      'RAG infrastructure and vector-enabled architectures',
      'MLOps and AI delivery pipelines',
      'Well-Architected Reviews with AI-specific considerations',
    ],
  },
  {
    id: 'migration',
    tabLabel: 'Migration & Modernisation',
    name: 'Cloud Migration & Modernisation',
    lede: 'Move to the cloud in a way that pays off, re-architecting for performance and cost, not just relocating servers.',
    points: [
      'Cloud readiness assessments',
      'Application, data, and infrastructure migration',
      'Microservices transformation',
      'Containerisation and Kubernetes adoption',
      'Serverless architecture implementation',
    ],
  },
  {
    id: 'devsecops',
    tabLabel: 'DevSecOps & Observability',
    name: 'DevSecOps & Observability',
    lede: 'Ship faster with confidence, security, automation, and full visibility built into every release, not bolted on later.',
    points: [
      'CI/CD pipelines across AWS, Azure, and Google Cloud',
      'Infrastructure as Code using Terraform, Bicep, and Ansible',
      'GuardDuty, Defender for Cloud, and Security Command Center',
      'Full-stack observability, from infrastructure to AI model performance',
      'Monitoring, logging, telemetry, and operational analytics',
    ],
  },
  {
    id: 'finops',
    tabLabel: 'FinOps & Cost',
    name: 'FinOps & Cost Optimisation',
    lede: 'Spend that tracks value, clear cost visibility and continuous optimisation, so cloud investment scales with the business, not against it.',
    points: [
      'Cost governance frameworks',
      'Resource optimisation and right-sizing',
      'Reserved capacity planning',
      'Multi-cloud cost visibility',
      'Continuous optimisation programmes',
    ],
  },
]

const credStats = [
  { val: '3+ yrs', label: 'cloud delivery' },
  { val: '150+', label: 'PoCs & solutions shipped' },
  { val: '100+', label: 'skilled cloud engineers' },
  { val: '10+', label: 'proprietary accelerators' },
  { val: '40+', label: 'AWS-certified consultants' },
  { val: '6', label: 'countries delivered' },
]

export default function CloudCapabilities() {
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
            {/* Credibility band, the positioning framing, then proof markers */}
            <div className='v22-cdp-cred'>
              <p className='v22-cdp-cred-lede'>
                We design, build, and run the cloud your AI depends on, so agents, models, and data pipelines sit on a platform that is fast to stand up, safe to operate, and predictable to pay for. One operating model across AWS, Azure, and Google Cloud, whether you run on one or all three.
              </p>
              <div className='v22-cdp-cred-proof'>
                <span className='v22-cdp-cred-proof-label'>What you can count on</span>
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
                Every environment is engineered to carry production AI, the workloads behind NEXUS, FactWeavers™, Agent Studio, and enterprise automation.
              </p>
            </div>

            <div className='v22-cdp-services-tabs'>
              <div className='v22-cdp-services-tablist' role='tablist' aria-label='Cloud capability areas'>
                {areas.map((a, i) => (
                  <button
                    key={a.id}
                    type='button'
                    role='tab'
                    id={`cloud-tab-${a.id}`}
                    aria-selected={i === active}
                    aria-controls={`cloud-panel-${a.id}`}
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
                id={`cloud-panel-${area.id}`}
                aria-labelledby={`cloud-tab-${area.id}`}
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
