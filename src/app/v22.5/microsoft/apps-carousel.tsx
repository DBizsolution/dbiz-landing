/* Microsoft applications — a continuously running marquee of the platforms
   DBiz delivers, with real product logos. Pure CSS auto-scroll (pauses on
   hover); cards duplicated for a seamless loop. */

import { Icon } from '@/components/icon'

type App = { name: string; icon: string; color?: string; desc: string; tags: string[] }

const apps: App[] = [
  { name: 'Microsoft Azure', icon: 'logos:microsoft-azure', desc: 'Secure, scalable cloud foundation built for AI workloads.', tags: ['Migration', 'Hybrid', 'DevSecOps'] },
  { name: 'Dynamics 365', icon: 'simple-icons:dynamics365', color: '#0B53CE', desc: 'Connected business apps across sales, service, finance and operations.', tags: ['Sales', 'Service', 'Finance'] },
  { name: 'Microsoft Fabric', icon: 'logos:microsoft', desc: 'Unified data, analytics and AI foundation on OneLake.', tags: ['OneLake', 'Analytics', 'Data'] },
  { name: 'Power BI', icon: 'logos:microsoft-power-bi', desc: 'Enterprise analytics and decision intelligence.', tags: ['Dashboards', 'Reporting'] },
  { name: 'Copilot Studio', icon: 'logos:microsoft', desc: 'Build, govern and deploy custom copilots and AI agents.', tags: ['Agents', 'Low-code'] },
  { name: 'Azure OpenAI', icon: 'logos:microsoft-azure', desc: 'Generative AI and RAG inside your governed tenant.', tags: ['GPT', 'RAG', 'Embeddings'] },
  { name: 'Power Platform', icon: 'logos:microsoft', desc: 'Low-code apps, automation and analytics across the business.', tags: ['Power Apps', 'Power Automate'] },
  { name: 'Microsoft 365', icon: 'simple-icons:microsoftoffice', color: '#D83B01', desc: 'Modern workplace, productivity and collaboration.', tags: ['Teams', 'SharePoint'] },
  { name: 'Microsoft Teams', icon: 'logos:microsoft-teams', desc: 'Secure communication, meetings and teamwork.', tags: ['Meetings', 'Chat', 'Apps'] },
  { name: 'SharePoint', icon: 'simple-icons:microsoftsharepoint', color: '#038387', desc: 'Content, knowledge and intelligent intranet.', tags: ['Docs', 'Search'] },
]

export default function MsAppsCarousel() {
  return (
    <div className='v22-ms-appmarquee' aria-label='Microsoft platforms'>
      <div className='v22-ms-appmarquee-track'>
        {[...apps, ...apps].map((a, i) => (
          <article key={`${a.name}-${i}`} className='v22-ms-appcard' aria-hidden={i >= apps.length ? true : undefined}>
            <span className='v22-ms-appcard-logo'>
              <Icon icon={a.icon} height={32} color={a.color} aria-hidden='true' />
            </span>
            <h3 className='v22-ms-appcard-name'>{a.name}</h3>
            <p className='v22-ms-appcard-desc'>{a.desc}</p>
            <ul className='v22-ms-appcard-tags'>
              {a.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
