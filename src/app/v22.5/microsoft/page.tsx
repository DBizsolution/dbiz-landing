/* Microsoft Solutions — partner page, linked from the footer "Microsoft Azure".
   Built on the V22.5 capability-detail design system (v22-cdp-*) with a small
   set of Microsoft-specific pieces (v22-ms-*): recreated Solutions Partner
   badges, capability-area cards, enterprise grid. */

import Link from 'next/link'
import MsAppsCarousel from './apps-carousel'
import CapabilitiesTabs from './capabilities-tabs'
import HeroStats from './hero-stats'

/* ─── Microsoft 4-square logo ─────────────────────────────────────────── */
function MsLogo({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox='0 0 24 24' width={size} height={size} aria-hidden='true' className='v22-ms-logo'>
      <rect x='1' y='1' width='10' height='10' fill='#F25022' />
      <rect x='13' y='1' width='10' height='10' fill='#7FBA00' />
      <rect x='1' y='13' width='10' height='10' fill='#00A4EF' />
      <rect x='13' y='13' width='10' height='10' fill='#FFB900' />
    </svg>
  )
}

/* Recreated Microsoft Solutions Partner badge */
function MsBadge({ img, alt }: { img: string; alt: string }) {
  return (
    <div className='v22-ms-badge'>
      <img className='v22-ms-badge-img' src={img} alt={alt} loading='lazy' />
    </div>
  )
}

/* ─── Data ─────────────────────────────────────────────────────────────── */

const designations = [
  { name: 'Data & AI', img: '/badges/data-ai.png' },
  { name: 'Business Applications', img: '/badges/business-applications.png' },
  { name: 'Digital & App Innovation', img: '/badges/digital-app-innovation.png' },
  { name: 'Infrastructure', img: '/badges/infrastructure.png' },
  { name: 'Security', img: '/badges/security.png' },
]

const specialisations = [
  { name: 'Agentic DevOps with Microsoft Azure and GitHub', img: '/badges/spec-agentic-devops.png' },
  { name: 'Kubernetes on Microsoft Azure', img: '/badges/spec-kubernetes.png' },
]

const aiFoundations = [
  'Microsoft Copilot adoption',
  'Copilot Studio solutions',
  'Azure OpenAI implementations',
  'AI agents & intelligent workflows',
  'Enterprise automation',
  'Retrieval-Augmented Generation (RAG)',
  'Data modernisation with Microsoft Fabric',
  'Responsible AI governance',
]

const enterpriseAreas = [
  { name: 'Advisory', desc: 'Architecture strategy, AI readiness, and transformation planning.' },
  { name: 'Cloud', desc: 'Azure infrastructure, migration, and modernisation.' },
  { name: 'Data & AI', desc: 'Microsoft Fabric, Azure OpenAI, analytics, and intelligent automation.' },
  { name: 'Enterprise Platforms', desc: 'Dynamics 365, Power Platform, Copilot Studio, and business applications.' },
  { name: 'Product Engineering', desc: 'Custom applications, integrations, and digital experiences on Microsoft technologies.' },
  { name: 'Managed Services', desc: 'Continuous optimisation, governance, monitoring, and operational support.' },
]

const deliverOutcomes = [
  'Connected enterprise operations',
  'Increased automation and productivity',
  'AI-enabled business processes',
  'Faster access to business insights',
  'Improved customer and employee experiences',
  'Reduced operational complexity',
  'Scalable cloud and data environments',
  'Greater organisational agility',
]

const industries = ['Manufacturing', 'Retail', 'Financial Services', 'Healthcare', 'Logistics & Supply Chain', 'Professional Services', 'Government & Public Sector']

/* Placeholder slots until the Microsoft case studies are published. */
const msCases = [
  { kicker: 'Financial Services', title: 'Microsoft case study', tech: ['Copilot Studio', 'Power Platform'] },
  { kicker: 'Construction', title: 'Microsoft case study', tech: ['Azure OpenAI', 'Cognitive Search'] },
  { kicker: 'Customer Service', title: 'Microsoft case study', tech: ['Azure AI Foundry', 'Agent Framework'] },
]

export default function MicrosoftPage() {
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
          <Link href='/v22.5' className='v22-cdp-back'>
            <span aria-hidden='true'>←</span> Back to DBiz.ai
          </Link>
          <span className='v22-cdp-crumb-sep' aria-hidden='true' />
          <span className='v22-cdp-crumb-num'>PARTNER · MICROSOFT</span>
        </div>
      </div>

      {/* HERO — two column, animated stats panel on the right */}
      <section className='v22-cdp-hero'>
        <div className='v22-container'>
          <div className='v22-ms-hero'>
            <div className='v22-ms-hero-meta'>
              <div className='v22-ms-cobrand'>
                <img src='/dbiz-logo.svg' alt='DBiz.ai' className='v22-ms-cobrand-dbiz' width='72' height='40' />
                <span className='v22-ms-cobrand-x' aria-hidden='true'>×</span>
                <MsLogo size={26} />
                <span className='v22-ms-cobrand-label'>Microsoft Solutions Partner</span>
              </div>
              <h1 className='v22-cdp-title'>
                Get more from your<br />
                <em>Microsoft investment.</em>
              </h1>
              <p className='v22-cdp-lead'>
                A Microsoft Solutions Partner that turns Azure, Dynamics 365, Fabric and Copilot into measurable business outcomes across cloud, data, AI, apps and the modern workplace.
              </p>
              <div className='v22-cdp-hero-actions'>
                <Link href='#capabilities' className='v22-cta-primary'>
                  Explore capabilities <span className='arrow'>↓</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our team</Link>
              </div>
            </div>
            <div className='v22-ms-hero-viz' aria-hidden='false'>
              <HeroStats />
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS — early proof (cream) */}
      <section id='credentials' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-ms-appcar-head v22-ms-appcar-head--split'>
            <div className='v22-ms-appcar-head-main'>
              <span className='v22-cdp-block-num'>Credentials</span>
              <h2 className='v22-cdp-block-title'>Certified Microsoft Partner</h2>
            </div>
            <p className='v22-cdp-block-kicker'>Microsoft-validated certifications, reflecting audited technical depth, certified specialists, and proven enterprise delivery across Australia and ASEAN.</p>
          </div>
          <span className='v22-ms-group-label'>Solutions Partner designations</span>
          <div className='v22-ms-badge-grid'>
            {designations.map((d) => <MsBadge key={d.name} img={d.img} alt={`Microsoft Solutions Partner — ${d.name}`} />)}
          </div>

          <span className='v22-ms-group-label'>Advanced specialisations</span>
          <div className='v22-ms-badge-grid'>
            {specialisations.map((s) => <MsBadge key={s.name} img={s.img} alt={`Microsoft Solutions Partner Specialist — ${s.name}`} />)}
          </div>
        </div>
      </section>

      {/* CAPABILITY AREAS — tabbed (light) */}
      <section id='capabilities' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-ms-appcar-head'>
            <span className='v22-cdp-block-num'>Capability areas</span>
            <h2 className='v22-cdp-block-title'>One partner across the <em>Microsoft stack.</em></h2>
          </div>
          <CapabilitiesTabs />
        </div>
      </section>

      {/* MICROSOFT TOOLKIT — running marquee (cream) */}
      <section id='applications' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-ms-appcar-head v22-ms-appcar-head--split'>
            <div className='v22-ms-appcar-head-main'>
              <span className='v22-cdp-block-num'>The Microsoft toolkit</span>
              <h2 className='v22-cdp-block-title'>Platforms we deliver, end to end</h2>
            </div>
            <p className='v22-cdp-block-kicker'>From cloud and data to business apps, AI, and the modern workplace. Implemented, integrated, and optimised.</p>
          </div>
        </div>
        <MsAppsCarousel />
      </section>

      {/* MICROSOFT + AI — dark */}
      <section id='ai' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Microsoft + AI</span>
              <h2 className='v22-cdp-block-title'>Foundations for <em>enterprise AI.</em></h2>
              <p className='v22-cdp-block-kicker'>AI success depends on far more than model access. It needs trusted data, scalable infrastructure, governance, and operational integration.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <p>DBiz helps organisations extend their Microsoft investments and move from experimentation to enterprise-scale AI adoption, connecting Microsoft technologies across cloud, applications, data, and operations.</p>
              <ul className='v22-ms-ai-list'>
                {aiFoundations.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACROSS THE ENTERPRISE */}
      <section id='enterprise' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>End to end</span>
              <h2 className='v22-cdp-block-title'>Microsoft across the enterprise</h2>
              <p className='v22-cdp-block-kicker'>Platforms, data, applications, and operations, working together.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-ms-enterprise'>
                {enterpriseAreas.map((e, i) => (
                  <article key={e.name} className='v22-ms-ent'>
                    <span className='v22-ms-ent-num'>{`0${i + 1}`}</span>
                    <h3 className='v22-ms-ent-name'>{e.name}</h3>
                    <p className='v22-ms-ent-desc'>{e.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES — cream */}
      <section id='outcomes' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Outcomes</span>
              <h2 className='v22-cdp-block-title'>What we deliver</h2>
            </div>
            <div className='v22-cdp-block-body'>
              <ul className='v22-ms-outcomes'>
                {deliverOutcomes.map((o, i) => (
                  <li key={o}><span className='v22-ms-outcome-num'>{`0${i + 1}`}</span><span>{o}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DBIZ — validation + single-partner CSP, merged (light) */}
      <section id='why' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Why DBiz</span>
              <h2 className='v22-cdp-block-title'>Validated, <em>not just experienced.</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              <p>Plenty of partners claim Microsoft expertise. Ours is independently verified, every designation earned only after Microsoft audits our certified people, enterprise delivery, and customer success.</p>
              <p>And as a Microsoft Cloud Solution Provider, we stay with you past go-live: one partner managing licensing, cloud services, and optimisation across the entire Microsoft lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES — cream */}
      <section id='industries' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Industries</span>
              <h2 className='v22-cdp-block-title'>Who we support</h2>
            </div>
            <div className='v22-cdp-block-body'>
              <ul className='v22-ms-industries'>
                {industries.map((ind) => <li key={ind}>{ind}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES — placeholder (light) */}
      <section id='ms-work' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Microsoft in action</span>
              <h2 className='v22-cdp-block-title'>Case studies</h2>
              <p className='v22-cdp-block-kicker'>Microsoft-powered work, shipped in production. Detailed stories landing soon.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-ms-cases'>
                {msCases.map((c) => (
                  <article key={c.kicker} className='v22-ms-case'>
                    <div className='v22-ms-case-media' aria-hidden='true'>
                      <span className='v22-ms-case-soon'>Coming soon</span>
                    </div>
                    <span className='v22-ms-case-kicker'>{c.kicker}</span>
                    <h3 className='v22-ms-case-title'>{c.title}</h3>
                    <ul className='v22-ms-case-tech'>
                      {c.tech.map((t) => <li key={t}>{t}</li>)}
                    </ul>
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
              <span className='v22-cdp-cta-num'>[Z] NEXT STEP</span>
              <h2 className='v22-cdp-cta-title'>
                Start your Microsoft<br />
                <em>transformation.</em>
              </h2>
              <p className='v22-cdp-cta-lead'>
                Modernising business apps, migrating to Azure, deploying Copilot, or building AI-powered workflows. DBiz turns Microsoft technologies into measurable business outcomes.
              </p>
              <div className='v22-cdp-cta-actions'>
                <Link href='/v22.5#cta' className='v22-cta-primary'>
                  Talk to our team <span className='arrow'>→</span>
                </Link>
                <Link href='/v22.5#solutions' className='v22-cta-text'>Explore our solutions</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pager */}
      <nav className='v22-cdp-pager' aria-label='Pager'>
        <div className='v22-container'>
          <div className='v22-cdp-pager-grid'>
            <Link href='/v22.5' className='v22-cdp-pager-link prev'>
              <span className='v22-cdp-pager-arrow' aria-hidden='true'>←</span>
              <span className='v22-cdp-pager-meta'>
                <span className='v22-cdp-pager-num'>HOME</span>
                <span className='v22-cdp-pager-label'>Back to DBiz.ai</span>
              </span>
            </Link>
            <Link href='/v22.5#solutions' className='v22-cdp-pager-link next'>
              <span className='v22-cdp-pager-meta'>
                <span className='v22-cdp-pager-num'>OUR SOLUTIONS</span>
                <span className='v22-cdp-pager-label'>Explore our capabilities</span>
              </span>
              <span className='v22-cdp-pager-arrow' aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}
