/* Microsoft capability areas as interactive tabs — click an area to surface
   its tagline, capabilities, outcomes, and the Microsoft technologies behind
   it (with real logos). Marketing-forward framing. */

'use client'

import { useState } from 'react'
import { Icon } from '@/components/icon'

type Area = {
  id: string
  name: string
  icon: string
  color?: string
  tagline: string
  desc: string
  capabilities: string[]
  outcomes: string[]
  tech: { label: string; icon: string; color?: string }[]
}

const areas: Area[] = [
  {
    id: 'biz',
    name: 'Business Applications',
    icon: 'simple-icons:dynamics365',
    color: '#0B53CE',
    tagline: 'Run the business on connected apps.',
    desc: 'Modernise core processes and unify the customer view across sales, service, finance and operations. One connected system instead of disconnected silos.',
    capabilities: ['Dynamics 365 Sales', 'Customer Service', 'Finance', 'Supply Chain Management', 'Field Service', 'Business Central', 'Customer Insights'],
    outcomes: ['Connected business operations', 'Improved customer engagement', 'Increased operational efficiency', 'Greater organisational visibility'],
    tech: [{ label: 'Dynamics 365', icon: 'simple-icons:dynamics365', color: '#0B53CE' }],
  },
  {
    id: 'power',
    name: 'Power Platform',
    icon: 'logos:microsoft-power-bi',
    tagline: 'Build faster. Automate everything.',
    desc: 'Accelerate delivery with low-code apps, workflow automation, analytics and AI-powered experiences. Innovation in days, not quarters.',
    capabilities: ['Power Apps', 'Power Automate', 'Power BI', 'Copilot Studio', 'Power Pages'],
    outcomes: ['Faster application delivery', 'Automated workflows', 'Improved business intelligence', 'Greater operational productivity'],
    tech: [{ label: 'Power BI', icon: 'logos:microsoft-power-bi' }],
  },
  {
    id: 'data',
    name: 'Data & AI',
    icon: 'logos:microsoft-azure',
    tagline: 'Turn data into intelligent action.',
    desc: 'Build the trusted data foundations that enterprise-scale AI demands: unified, governed, and ready for agents from day one.',
    capabilities: ['Microsoft Fabric', 'Azure OpenAI Service', 'Azure AI Services', 'Azure Machine Learning', 'Enterprise Analytics', 'AI Agents & Intelligent Automation'],
    outcomes: ['Unified data environments', 'AI-ready enterprise foundations', 'Faster access to insights', 'Intelligent decision support'],
    tech: [{ label: 'Azure', icon: 'logos:microsoft-azure' }, { label: 'Fabric', icon: 'logos:microsoft' }, { label: 'Power BI', icon: 'logos:microsoft-power-bi' }],
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    icon: 'logos:microsoft-azure',
    tagline: 'A cloud foundation built for AI.',
    desc: 'Secure, scalable, resilient cloud, migrated and modernised so the platform keeps pace with the business.',
    capabilities: ['Microsoft Azure', 'Cloud Migration & Modernisation', 'Hybrid Cloud Architecture', 'DevSecOps', 'Infrastructure Automation', 'Observability & Monitoring'],
    outcomes: ['Improved scalability', 'Enhanced security', 'Greater resilience', 'Optimised cloud investments'],
    tech: [{ label: 'Azure', icon: 'logos:microsoft-azure' }],
  },
  {
    id: 'work',
    name: 'Modern Work',
    icon: 'logos:microsoft-teams',
    tagline: 'Productivity, secure by design.',
    desc: 'Enable secure collaboration, knowledge sharing and AI-assisted productivity across distributed teams.',
    capabilities: ['Microsoft 365', 'Microsoft Teams', 'SharePoint', 'OneDrive', 'Security & Compliance', 'Identity & Access Management'],
    outcomes: ['Improved workforce productivity', 'Secure collaboration', 'Stronger governance', 'Connected employee experiences'],
    tech: [{ label: 'Teams', icon: 'logos:microsoft-teams' }, { label: 'Microsoft 365', icon: 'simple-icons:microsoftoffice', color: '#D83B01' }, { label: 'SharePoint', icon: 'simple-icons:microsoftsharepoint', color: '#038387' }],
  },
]

export default function CapabilitiesTabs() {
  const [active, setActive] = useState(0)
  const a = areas[active]

  return (
    <div className='v22-ms-captabs'>
      <div className='v22-ms-captab-list' role='tablist' aria-label='Microsoft capability areas'>
        {areas.map((area, i) => (
          <button
            key={area.id}
            type='button'
            role='tab'
            aria-selected={i === active}
            className={`v22-ms-captab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className='v22-ms-captab-logo'><Icon icon={area.icon} height={20} color={area.color} aria-hidden='true' /></span>
            <span className='v22-ms-captab-name'>{area.name}</span>
          </button>
        ))}
      </div>

      <div className='v22-ms-cappanel' role='tabpanel'>
        <div className='v22-ms-cappanel-head'>
          <h3 className='v22-ms-cappanel-tagline'>{a.tagline}</h3>
          <p className='v22-ms-cappanel-desc'>{a.desc}</p>
          <div className='v22-ms-cappanel-tech'>
            {a.tech.map((t) => (
              <span key={t.label} className='v22-ms-tech-chip'>
                <Icon icon={t.icon} height={18} color={t.color} aria-hidden='true' />
                {t.label}
              </span>
            ))}
          </div>
        </div>
        <div className='v22-ms-cappanel-cols'>
          <div>
            <span className='v22-ms-area-k'>Capabilities</span>
            <ul className='v22-ms-area-caps'>{a.capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div>
            <span className='v22-ms-area-k'>Outcomes</span>
            <ul className='v22-ms-area-out'>{a.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  )
}
