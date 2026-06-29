/* Microsoft applications carousel — horizontal scroll-snap showcase of the
   platforms DBiz delivers, with real product logos. Arrows + dot rail; native
   swipe on touch. Snap is disabled during button-driven scroll so it can't
   fight the programmatic scrollTo (same fix as the proof carousel). */

'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/icon'

type App = { name: string; icon: string; color?: string; desc: string; tags: string[] }

const apps: App[] = [
  { name: 'Microsoft Azure', icon: 'logos:microsoft-azure', desc: 'Secure, scalable cloud foundation built for AI workloads.', tags: ['Migration', 'Hybrid', 'DevSecOps'] },
  { name: 'Dynamics 365', icon: 'simple-icons:dynamics365', color: '#0B53CE', desc: 'Connected business apps across sales, service, finance and operations.', tags: ['Sales', 'Service', 'Finance', 'Supply Chain'] },
  { name: 'Microsoft Fabric', icon: 'logos:microsoft', desc: 'Unified data, analytics and AI foundation on OneLake.', tags: ['OneLake', 'Analytics', 'Data'] },
  { name: 'Power BI', icon: 'logos:microsoft-power-bi', desc: 'Enterprise analytics and decision intelligence.', tags: ['Dashboards', 'Reporting'] },
  { name: 'Copilot Studio', icon: 'logos:microsoft', desc: 'Build, govern and deploy custom copilots and AI agents.', tags: ['Agents', 'Low-code'] },
  { name: 'Azure OpenAI', icon: 'logos:microsoft-azure', desc: 'Generative AI and RAG inside your governed tenant.', tags: ['GPT', 'RAG', 'Embeddings'] },
  { name: 'Power Platform', icon: 'logos:microsoft', desc: 'Low-code apps, automation and analytics across the business.', tags: ['Power Apps', 'Power Automate'] },
  { name: 'Microsoft 365', icon: 'simple-icons:microsoftoffice', color: '#D83B01', desc: 'Modern workplace, productivity and collaboration.', tags: ['Teams', 'SharePoint', 'OneDrive'] },
  { name: 'Microsoft Teams', icon: 'logos:microsoft-teams', desc: 'Secure communication, meetings and teamwork.', tags: ['Meetings', 'Chat', 'Apps'] },
  { name: 'SharePoint', icon: 'simple-icons:microsoftsharepoint', color: '#038387', desc: 'Content, knowledge and intelligent intranet.', tags: ['Docs', 'Search'] },
]

export default function MsAppsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const snapTimer = useRef<number>(0)
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(1)

  const measure = useCallback(() => {
    const t = trackRef.current
    if (!t) return
    const total = Math.max(1, Math.ceil(t.scrollWidth / t.clientWidth))
    setPages(total)
    setPage(Math.round(t.scrollLeft / t.clientWidth))
  }, [])

  useEffect(() => {
    measure()
    const t = trackRef.current
    if (!t) return
    let frame = 0
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure) }
    t.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    return () => { t.removeEventListener('scroll', onScroll); window.removeEventListener('resize', measure); cancelAnimationFrame(frame) }
  }, [measure])

  const goPage = useCallback((p: number) => {
    const t = trackRef.current
    if (!t) return
    const clamped = Math.max(0, Math.min(pages - 1, p))
    t.style.scrollSnapType = 'none'
    t.scrollTo({ left: clamped * t.clientWidth, behavior: 'smooth' })
    setPage(clamped)
    window.clearTimeout(snapTimer.current)
    snapTimer.current = window.setTimeout(() => { if (trackRef.current) trackRef.current.style.scrollSnapType = '' }, 550)
  }, [pages])

  return (
    <div className='v22-ms-appcar'>
      <div className='v22-ms-appcar-track' ref={trackRef}>
        {apps.map((a) => (
          <article key={a.name} className='v22-ms-appcard'>
            <span className='v22-ms-appcard-logo'>
              <Icon icon={a.icon} height={34} color={a.color} aria-hidden='true' />
            </span>
            <h3 className='v22-ms-appcard-name'>{a.name}</h3>
            <p className='v22-ms-appcard-desc'>{a.desc}</p>
            <ul className='v22-ms-appcard-tags'>
              {a.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className='v22-ms-appcar-controls'>
        <button type='button' className='v22-ms-appcar-arrow' onClick={() => goPage(page - 1)} disabled={page === 0} aria-label='Previous'>←</button>
        <div className='v22-ms-appcar-dots' role='tablist' aria-label='Application pages'>
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type='button'
              role='tab'
              aria-selected={i === page}
              aria-label={`Page ${i + 1}`}
              className={`v22-ms-appcar-dot${i === page ? ' is-active' : ''}`}
              onClick={() => goPage(i)}
            />
          ))}
        </div>
        <button type='button' className='v22-ms-appcar-arrow' onClick={() => goPage(page + 1)} disabled={page >= pages - 1} aria-label='Next'>→</button>
      </div>
    </div>
  )
}
