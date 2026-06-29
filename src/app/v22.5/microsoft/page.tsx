/* Microsoft Solutions — partner page, linked from the footer "Microsoft Azure".
   Built on the V22.5 capability-detail design system (v22-cdp-*) with a small
   set of Microsoft-specific pieces (v22-ms-*): recreated Solutions Partner
   badges, capability-area cards, enterprise grid. */

import Link from 'next/link'

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
function MsBadge({ designation, sub, specialist }: { designation: string; sub?: string; specialist?: string }) {
  return (
    <div className={`v22-ms-badge${specialist ? ' v22-ms-badge--spec' : ''}`}>
      <div className='v22-ms-badge-body'>
        <div className='v22-ms-badge-head'>
          <MsLogo size={28} />
          <span className='v22-ms-badge-partner'>Microsoft<br />Solutions Partner</span>
        </div>
        <div className='v22-ms-badge-desig'>
          {designation}
          {sub && <span className='v22-ms-badge-sub'>{sub}</span>}
        </div>
      </div>
      {specialist && (
        <div className='v22-ms-badge-spec'>
          <span className='v22-ms-badge-spec-k'>Specialist</span>
          <span className='v22-ms-badge-spec-v'>{specialist}</span>
        </div>
      )}
    </div>
  )
}

/* ─── Data ─────────────────────────────────────────────────────────────── */

const designations = [
  { name: 'Data & AI', sub: 'Azure' },
  { name: 'Business Applications' },
  { name: 'Digital & App Innovation', sub: 'Azure' },
  { name: 'Infrastructure', sub: 'Azure' },
  { name: 'Security' },
]

const specialisations = [
  { base: 'Digital & App Innovation', sub: 'Azure', name: 'Agentic DevOps with Microsoft Azure and GitHub' },
  { base: 'Digital & App Innovation', sub: 'Azure', name: 'Kubernetes on Microsoft Azure' },
]

const capabilityAreas = [
  {
    name: 'Business Applications',
    desc: 'Modernise business processes and improve operational visibility with Microsoft business applications.',
    capabilities: ['Dynamics 365 Sales', 'Dynamics 365 Customer Service', 'Dynamics 365 Finance', 'Dynamics 365 Supply Chain Management', 'Dynamics 365 Field Service', 'Dynamics 365 Business Central', 'Customer Insights'],
    outcomes: ['Connected business operations', 'Improved customer engagement', 'Increased operational efficiency', 'Greater organisational visibility'],
  },
  {
    name: 'Power Platform',
    desc: 'Accelerate innovation through low-code development, workflow automation, analytics, and AI-powered business applications.',
    capabilities: ['Power Apps', 'Power Automate', 'Power BI', 'Copilot Studio', 'Power Pages'],
    outcomes: ['Faster application delivery', 'Automated workflows', 'Improved business intelligence', 'Greater operational productivity'],
  },
  {
    name: 'Data & AI',
    desc: 'Create the data foundations required for intelligent operations and enterprise-scale AI adoption.',
    capabilities: ['Microsoft Fabric', 'Azure OpenAI Service', 'Azure AI Services', 'Azure Machine Learning', 'Enterprise Analytics', 'AI Agents & Intelligent Automation'],
    outcomes: ['Unified data environments', 'AI-ready enterprise foundations', 'Faster access to insights', 'Intelligent decision support'],
  },
  {
    name: 'Cloud & Infrastructure',
    desc: 'Build secure, scalable, and resilient cloud environments that support continuous business growth.',
    capabilities: ['Microsoft Azure', 'Cloud Migration & Modernisation', 'Hybrid Cloud Architecture', 'DevSecOps', 'Infrastructure Automation', 'Observability & Monitoring'],
    outcomes: ['Improved scalability', 'Enhanced security', 'Greater resilience', 'Optimised cloud investments'],
  },
  {
    name: 'Modern Work',
    desc: 'Enable secure collaboration, knowledge sharing, and productivity across distributed teams.',
    capabilities: ['Microsoft 365', 'Microsoft Teams', 'SharePoint', 'OneDrive', 'Security & Compliance', 'Identity & Access Management'],
    outcomes: ['Improved workforce productivity', 'Secure collaboration', 'Stronger governance', 'Connected employee experiences'],
  },
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

      {/* HERO */}
      <section className='v22-cdp-hero'>
        <div className='v22-container'>
          <div className='v22-cdp-hero-grid'>
            <div className='v22-cdp-hero-meta'>
              <span className='v22-cdp-eyebrow'>Microsoft Solutions Partner</span>
              <h1 className='v22-cdp-title'>
                Microsoft solutions for the<br />
                <em>AI-powered enterprise.</em>
              </h1>
              <p className='v22-cdp-lead'>
                Microsoft technologies power today&rsquo;s intelligent enterprises — connecting business applications, cloud infrastructure, data platforms, AI, security, and modern workplace experiences into a unified ecosystem.
              </p>
              <p className='v22-cdp-lead'>
                As a Microsoft Solutions Partner, DBiz combines proven Microsoft expertise with AI-led engineering to modernise operations, simplify complexity, and help organisations realise greater value from their Microsoft investments — from Dynamics 365 and Azure to Microsoft Fabric, Copilot, and Azure OpenAI.
              </p>
              <div className='v22-cdp-hero-actions'>
                <Link href='#capabilities' className='v22-cta-primary'>
                  Explore capabilities <span className='arrow'>↓</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our team</Link>
              </div>
            </div>
            <aside className='v22-cdp-hero-aside'>
              <div className='v22-ms-hero-badges' aria-hidden='true'>
                <MsBadge designation='Data & AI' sub='Azure' />
                <MsBadge designation='Digital & App Innovation' sub='Azure' />
                <MsBadge designation='Business Applications' />
                <MsBadge designation='Infrastructure' sub='Azure' />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* WHY DBIZ */}
      <section id='why' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Why DBiz</span>
              <h2 className='v22-cdp-block-title'>Validated, <em>not just experienced.</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              <p>Choosing a Microsoft partner is about more than technology expertise. It&rsquo;s about working with a team independently validated for its technical capability, delivery experience, and customer success.</p>
              <p>As a Microsoft Solutions Partner, our capabilities are assessed through Microsoft&rsquo;s rigorous performance, skills, and customer-success requirements — giving organisations confidence they&rsquo;re partnering with a team capable of delivering complex Microsoft solutions, from strategy and implementation through to optimisation and managed services.</p>
              <p>Our teams combine deep Microsoft expertise with capabilities across cloud, data, AI, enterprise platforms, product engineering, and managed services to help organisations modernise operations, accelerate innovation, and maximise the value of their Microsoft investments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS — dark, badges pop on navy */}
      <section id='credentials' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Credentials</span>
              <h2 className='v22-cdp-block-title'>Microsoft partner credentials</h2>
              <p className='v22-cdp-block-kicker'>Awarded only after Microsoft validates technical capability, certified professionals, enterprise implementations, customer references, and delivery performance.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <span className='v22-ms-group-label'>Solutions Partner designations</span>
              <div className='v22-ms-badge-grid'>
                {designations.map((d) => <MsBadge key={d.name} designation={d.name} sub={d.sub} />)}
              </div>

              <span className='v22-ms-group-label'>Advanced specialisations</span>
              <div className='v22-ms-badge-grid'>
                {specialisations.map((s) => <MsBadge key={s.name} designation={s.base} sub={s.sub} specialist={s.name} />)}
              </div>

              <ul className='v22-ms-highlights'>
                <li><span className='v22-ms-highlight-val'>150+</span><span className='v22-ms-highlight-lbl'>Microsoft Certified Engineers</span></li>
                <li><span className='v22-ms-highlight-val'>AU · ASEAN</span><span className='v22-ms-highlight-lbl'>Delivery across markets</span></li>
                <li><span className='v22-ms-highlight-val'>CSP</span><span className='v22-ms-highlight-lbl'>Cloud Solution Provider</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CSP */}
      <section id='csp' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>One partner</span>
              <h2 className='v22-cdp-block-title'>Microsoft Cloud Solution Provider</h2>
            </div>
            <div className='v22-cdp-block-body'>
              <p>As a Microsoft Cloud Solution Provider (CSP), DBiz supports organisations beyond implementation — helping manage Microsoft licensing, subscriptions, cloud services, and ongoing optimisation.</p>
              <p>This means customers work with a single partner across planning, deployment, and long-term platform management, simplifying engagement while ensuring continuity across the Microsoft technology lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY AREAS — cream */}
      <section id='capabilities' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Capability areas</span>
              <h2 className='v22-cdp-block-title'>Across the Microsoft stack</h2>
              <p className='v22-cdp-block-kicker'>Five areas, end to end — from business apps to the modern workplace.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-ms-areas'>
                {capabilityAreas.map((a) => (
                  <article key={a.name} className='v22-ms-area'>
                    <h3 className='v22-ms-area-name'>{a.name}</h3>
                    <p className='v22-ms-area-desc'>{a.desc}</p>
                    <div className='v22-ms-area-cols'>
                      <div>
                        <span className='v22-ms-area-k'>Capabilities</span>
                        <ul className='v22-ms-area-caps'>{a.capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
                      </div>
                      <div>
                        <span className='v22-ms-area-k'>Outcomes</span>
                        <ul className='v22-ms-area-out'>{a.outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MICROSOFT + AI — dark */}
      <section id='ai' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Microsoft + AI</span>
              <h2 className='v22-cdp-block-title'>Foundations for <em>enterprise AI.</em></h2>
              <p className='v22-cdp-block-kicker'>AI success depends on far more than model access — it needs trusted data, scalable infrastructure, governance, and operational integration.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <p>DBiz helps organisations extend their Microsoft investments and move from experimentation to enterprise-scale AI adoption — connecting Microsoft technologies across cloud, applications, data, and operations.</p>
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
              <p className='v22-cdp-block-kicker'>Platforms, data, applications, and operations — working together.</p>
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

      {/* INDUSTRIES */}
      <section id='industries' className='v22-cdp-block' data-surface='light'>
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
                Modernising business apps, migrating to Azure, deploying Copilot, or building AI-powered workflows — DBiz turns Microsoft technologies into measurable business outcomes.
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
