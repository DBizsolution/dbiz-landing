/* V22.5, The AI Foundational Layer / Cloud
   Structure mirrors connected-systems: Hero → What we do (capability tabs) →
   What becomes possible → AI accelerators (DBiz Weaver + Scoop) → Proof →
   Ecosystem → Engagement → CTA.
   Positioning: cloud built for AI reality, not app-hosting retrofitted. */

import type { ReactNode } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/icon'
import { capabilities } from '../../capabilities-data'
import CloudCapabilities from './cloud-capabilities'

const SLUG = 'ai-foundational-layer'
const idx = capabilities.findIndex((c) => c.slug === SLUG)
const cap = capabilities[idx]
const prev = idx > 0 ? capabilities[idx - 1] : null
const next = idx < capabilities.length - 1 ? capabilities[idx + 1] : null

/* ─── AI accelerators, DBiz proprietary cloud IP ──────────────────────── */
const accelerators = [
  {
    glyph: 'weaver',
    kind: 'Cloud deployment platform',
    name: 'DBiz Weaver',
    tagline: 'Provisions production-ready environments on Azure and AWS in hours, AI-generated infrastructure, ready-made landing zones, and reusable patterns, governed by default.',
    capabilities: [
      'AI-generated IaC templates with intelligent validation',
      'Auto-remediation, smart sizing, and cost optimisation',
      'Platform & application Landing Zones, industry blueprints (BFS)',
      'Self-service control plane with ITSM integration (ServiceNow, Jira)',
      'Zero Trust-aligned deployment patterns, web apps, microservices, data platforms, APIs',
    ],
    value: [
      { head: 'Weeks → hours', sub: 'Stand up production environments in an afternoon, so projects start delivering value on day one.' },
      { head: 'Zero compliance debt', sub: 'Security, governance, and policy baked in from the first deploy, never audited in after the fact.' },
      { head: 'Repeatable by design', sub: 'One standardised, adaptable foundation teams reuse across projects: less rework, faster scale.' },
    ],
  },
  {
    glyph: 'scoop',
    kind: 'Migration platform',
    name: 'DBiz Scoop',
    tagline: 'Moves existing workloads to Azure and AWS with far less risk, AI-driven discovery, dependency-aware wave planning, and largely automated execution.',
    capabilities: [
      'Automated workload discovery and dependency mapping',
      'AI-driven wave planning by dependency, risk, and priority',
      'AI rightsizing and cost optimisation for target cloud',
      'Risk prediction, impact analysis, and auto-remediation',
      'Native tool integration, Azure Migrate, AWS MGN, with reusable playbooks',
    ],
    value: [
      { head: 'Months → weeks', sub: 'Compress migration timelines dramatically, freeing budget and teams far sooner.' },
      { head: 'Move without the outage', sub: 'Dependency-aware waves keep downtime and business disruption to a minimum.' },
      { head: 'Repeatable across the estate', sub: 'Secure, compliant migrations you can run data centre after data centre.' },
    ],
  },
]

/* ─── Cloud lifecycle — where the accelerators plug in. Weaver stands the
   platform up (Foundation); Scoop moves existing estate in (Migrate); the
   run stages (Observe, Optimise) are continuous. */
const lifecycle: { num: string; name: string; desc: string; accel: string | null }[] = [
  { num: '01', name: 'Foundation', desc: 'Architecture, landing zones, and AI-ready infrastructure, stood up in hours.', accel: 'DBiz Weaver' },
  { num: '02', name: 'Migrate', desc: 'Existing workloads discovered, planned, and moved wave by wave.', accel: 'DBiz Scoop' },
  { num: '03', name: 'Observe', desc: 'Security, telemetry, and full-stack observability across the estate.', accel: null },
  { num: '04', name: 'Optimise', desc: 'FinOps, right-sizing, and continuous improvement over the lifecycle.', accel: null },
]

/* ─── Proof, placeholder metrics pending real client figures ──────────── */
const proof = [
  { tag: 'FinOps optimisation', metric: '[X]%', metricLabel: 'cloud spend reduced', body: 'FinOps governance and right-sizing applied across a multi-cloud estate.' },
  { tag: 'Zero-downtime migration', metric: '0', metricLabel: 'hours downtime', body: 'Azure migration completed with no interruption to production workloads.' },
  { tag: 'AI-ready foundation', metric: '[X] wks', metricLabel: 'to production-ready', body: 'AI-ready cloud foundation designed, built, and handed over.' },
]

const AWSMark = () => <Icon icon='logos:aws' height={24} aria-hidden='true' />
const AzureMark = () => <Icon icon='logos:microsoft-azure' height={24} aria-hidden='true' />
const GCPMark = () => <Icon icon='logos:google-cloud' height={24} aria-hidden='true' />
const AIMark = () => <Icon icon='logos:anthropic' height={16} aria-hidden='true' />

const partnerships: { name: string; tier: string; spec: string; Mark: () => ReactNode }[] = [
  { name: 'AWS', tier: 'Advanced Tier Partner', spec: 'GenAI, Cloud Operations, and Data & Analytics competencies with Amazon Redshift Service Delivery. 40+ certified consultants, Solutions Architect & DevOps Professional, Security & ML Specialty.', Mark: AWSMark },
  { name: 'Microsoft', tier: 'Solutions Partner · CSP', spec: 'Solutions Partner across Infrastructure, Digital & App Innovation, and Data & AI, with a Kubernetes-on-Azure specialisation. 150+ certifications and CSP direct-bill.', Mark: AzureMark },
  { name: 'Google Cloud', tier: 'Cloud Partner', spec: 'GKE, Vertex AI, BigQuery, and Anthos, delivered as part of genuine multi-cloud platform engineering.', Mark: GCPMark },
  { name: 'AI Ecosystem', tier: 'Platform integrations', spec: 'Anthropic Claude, Snowflake, and Databricks integrated into governed enterprise AI platforms.', Mark: AIMark },
]

const MARQUEE_LOGOS: Record<string, ReactNode> = {
  AWS: <Icon icon='logos:aws' height={20} aria-hidden='true' />,
  Azure: <Icon icon='logos:microsoft-azure' height={18} aria-hidden='true' />,
  'Google Cloud': <Icon icon='logos:google-cloud' height={18} aria-hidden='true' />,
  Kubernetes: <Icon icon='logos:kubernetes' height={18} aria-hidden='true' />,
  Terraform: <Icon icon='logos:terraform-icon' height={16} aria-hidden='true' />,
  Snowflake: <Icon icon='logos:snowflake-icon' height={16} aria-hidden='true' />,
  Databricks: <Icon icon='logos:databricks-icon' height={16} aria-hidden='true' />,
  'Anthropic Claude': <Icon icon='logos:anthropic' height={14} aria-hidden='true' />,
}

/* Hero logo carousel — the big cloud & AI platforms (mono white on navy) */
const heroLogos: { name: string; icon: string; h?: number }[] = [
  { name: 'AWS', icon: 'simple-icons:amazonwebservices', h: 30 },
  { name: 'Microsoft Azure', icon: 'simple-icons:microsoftazure', h: 34 },
  { name: 'Google Cloud', icon: 'simple-icons:googlecloud', h: 34 },
  { name: 'NVIDIA', icon: 'simple-icons:nvidia', h: 28 },
  { name: 'Anthropic', icon: 'simple-icons:anthropic', h: 26 },
  { name: 'Kubernetes', icon: 'simple-icons:kubernetes', h: 32 },
  { name: 'Databricks', icon: 'simple-icons:databricks', h: 28 },
  { name: 'Snowflake', icon: 'simple-icons:snowflake', h: 30 },
]

const marqueeItems = [
  'AWS Bedrock', 'Azure OpenAI', 'Vertex AI', 'Kubernetes', 'EKS', 'AKS', 'GKE',
  'Terraform', 'Snowflake', 'Databricks', 'BigQuery', 'GuardDuty', 'Defender for Cloud',
  'Anthropic Claude', 'Well-Architected', 'FinOps',
]

const engagementModels = [
  { name: 'Cloud Strategy & Advisory', body: 'Cloud architecture, roadmap development, and readiness assessments.' },
  { name: 'Cloud Foundation Build', body: 'Design and implementation of AI-ready cloud environments.' },
  { name: 'Migration & Modernisation', body: 'Application, infrastructure, and data transformation programmes.' },
  { name: 'Cloud Operations & Optimisation', body: 'Ongoing management, governance, observability, and cost optimisation.' },
]

/* ─── Accelerator glyphs, 72×72 schematics in the house style (dim guide
   marks + navy ink + orange accent), on the cream §02 surface. */
function AccelGlyph({ kind }: { kind: string }) {
  const ink = 'rgba(13, 27, 62, 0.85)'
  const dim = 'rgba(13, 27, 62, 0.3)'
  const acc = 'var(--v22-accent)'

  if (kind === 'weaver') {
    /* AI node weaves four governed landing zones into place */
    const tiles: [number, number][] = [[10, 10], [42, 10], [10, 42], [42, 42]]
    return (
      <svg viewBox='0 0 72 72' aria-hidden='true' className='v22-cloud-accel-svg'>
        {tiles.map(([x, y], k) => (
          <g key={k}>
            <line x1='36' y1='36' x2={x + 10} y2={y + 10} stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
            <rect x={x} y={y} width='20' height='20' fill='none' stroke={ink} strokeWidth='1.1' />
            <line x1={x + 5} y1={y + 7} x2={x + 15} y2={y + 7} stroke={dim} strokeWidth='0.9' />
            <line x1={x + 5} y1={y + 12} x2={x + 12} y2={y + 12} stroke={dim} strokeWidth='0.9' />
          </g>
        ))}
        <circle cx='36' cy='36' r='9' fill='rgba(240,123,47,0.12)' stroke={acc} strokeWidth='1.4' />
        <text x='36' y='39.5' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='7' fontWeight='700' fill={acc}>AI</text>
      </svg>
    )
  }

  /* scoop, workloads migrate in dependency-grouped waves to the cloud */
  return (
    <svg viewBox='0 0 72 72' aria-hidden='true' className='v22-cloud-accel-svg'>
      {/* source workloads */}
      {[14, 28, 42].map((y, k) => (
        <rect key={k} x='6' y={y} width='22' height='10' fill={k === 0 ? 'rgba(240,123,47,0.12)' : 'none'} stroke={k === 0 ? acc : ink} strokeWidth='1.1' />
      ))}
      {/* migration arrow */}
      <line x1='31' y1='33' x2='45' y2='33' stroke={acc} strokeWidth='1.4' />
      <path d='M45 33 l-5 -3 v6 z' fill={acc} />
      {/* target cloud */}
      <path d='M50 40 a9 9 0 0 1 3 -17 a11 11 0 0 1 20 4 a7 7 0 0 1 -2 13 z' fill='none' stroke={ink} strokeWidth='1.2' transform='translate(-4 -2)' />
    </svg>
  )
}

/* ─── Hero diagram — AI workloads sit on the DBiz Cloud platform, which runs
   on the hyperscalers. Animated in the landing-hero language: staggered layer
   entrance, a pulsing cloud, and data particles flowing down to the base. */
function CloudHeroDiagram() {
  const ink = 'rgba(255, 255, 255, 0.9)'
  const dim = 'rgba(255, 255, 255, 0.5)'
  const acc = 'var(--v22-accent)'
  const beams = [100, 230, 360]
  return (
    <svg viewBox='0 0 460 400' aria-hidden='true' className='v22-cloud-hero-svg'>
      <text x='16' y='22' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.6' fill={dim}>FIG · AI EXECUTION FOUNDATION</text>

      {/* Layer A — AI workloads */}
      <g className='v22-chs-layer' style={{ animationDelay: '0.15s' }}>
        <text x='230' y='52' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.6' fill={dim}>YOUR AI WORKLOADS</text>
        {['NEXUS', 'FactWeavers™', 'Agent Studio'].map((t, k) => {
          const x = 40 + k * 130
          return (
            <g key={t}>
              <rect className='v22-chs-chip' style={{ animationDelay: `${k * 0.5}s` }} x={x} y='64' width='120' height='40' fill='rgba(240,123,47,0.1)' stroke={acc} strokeWidth='1.2' />
              <text x={x + 60} y='89' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='12.5' fontWeight='700' fill={ink}>{t}</text>
              <line x1={x + 60} y1='104' x2='230' y2='126' stroke={acc} strokeWidth='0.9' strokeDasharray='3 3' />
            </g>
          )
        })}
        <circle cx='230' cy='128' r='2.6' fill={acc} />
      </g>

      {/* Layer B — DBiz Cloud platform panel */}
      <g className='v22-chs-layer' style={{ animationDelay: '0.33s' }}>
        <rect x='30' y='152' width='400' height='94' fill='rgba(255,255,255,0.05)' stroke={ink} strokeWidth='1.4' />
        <rect x='30' y='152' width='400' height='3' fill={acc} />
        <text x='230' y='190' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='23' fontWeight='800' letterSpacing='-0.02em' fill={ink}>DBiz Cloud</text>
        <text x='230' y='212' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.4' fill={dim}>SECURE · OBSERVABLE · SCALABLE</text>
        <text x='230' y='230' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.4' fill={dim}>WEAVER · SCOOP · DEVSECOPS · FINOPS</text>
      </g>

      {/* Beams + flowing data particles from the platform down to the hyperscalers */}
      <g>
        {beams.map((x) => (
          <line key={x} x1={x} y1='248' x2={x} y2='300' stroke={dim} strokeWidth='0.9' strokeDasharray='3 3' />
        ))}
        {beams.flatMap((x, bi) => [0, 1.2].map((d, pi) => (
          <circle key={`${x}-${pi}`} className='v22-chs-particle' cx={x} cy='248' r='2.4' fill={acc} style={{ animationDelay: `${bi * 0.35 + d}s` }} />
        )))}
      </g>

      {/* Layer C — hyperscalers */}
      <g className='v22-chs-layer' style={{ animationDelay: '0.51s' }}>
        {['AWS', 'AZURE', 'GCP'].map((t, k) => {
          const x = 40 + k * 130
          return (
            <g key={t}>
              <rect className='v22-chs-box' style={{ animationDelay: `${k * 0.5 + 2}s` }} x={x} y='312' width='120' height='46' fill='none' stroke={ink} strokeWidth='1' />
              <text x={x + 60} y='340' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='12' fontWeight='600' letterSpacing='1.6' fill={ink}>{t}</text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}

export default function AiFoundationalLayerPage() {
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
            <span aria-hidden='true'>←</span> Back to What we do
          </Link>
          <span className='v22-cdp-crumb-sep' aria-hidden='true' />
          <span className='v22-cdp-crumb-num'>L{cap.num} · THE AI FOUNDATIONAL LAYER</span>
        </div>
      </div>

      {/* HERO */}
      <section className='v22-cdp-hero'>
        <div className='v22-container'>
          <div className='v22-cdp-hero-grid'>
            <div className='v22-cdp-hero-meta'>
              <span className='v22-cdp-eyebrow'>N°{cap.num} · The AI Foundational Layer</span>
              <h1 className='v22-cdp-title'>
                Cloud that gets AI<br />
                <em>to production faster.</em>
              </h1>
              <p className='v22-cdp-subtitle'>{cap.subtitle}</p>
              <p className='v22-cdp-lead'>
                The cloud most enterprises run was built to host applications. AI asks more of it, orchestrating agents, serving inference, moving data continuously, and staying governable at scale. DBiz builds that foundation across AWS, Azure, and Google Cloud: the execution layer your intelligent systems actually need.
              </p>
              <div className='v22-cdp-hero-actions'>
                <Link href='#pillars' className='v22-cta-primary'>
                  See what we do <span className='arrow'>↓</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our cloud team</Link>
              </div>
            </div>
            <aside className='v22-cdp-hero-aside' aria-hidden='true'>
              <CloudHeroDiagram />
            </aside>
          </div>
          <div className='v22-cloud-hero-certs'>
            <span className='v22-cloud-hero-certs-k'>Certified &amp; partnered across</span>
            <div className='v22-cloud-logobar' aria-label='Cloud and AI platforms'>
              <div className='v22-cloud-logobar-track'>
                {[...heroLogos, ...heroLogos].map((l, i) => (
                  <span key={`${l.name}-${i}`} className='v22-cloud-logobar-item' aria-hidden={i >= heroLogos.length}>
                    <Icon icon={l.icon} height={l.h ?? 30} color='#ffffff' aria-label={l.name} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §01 WHAT WE DO, capability tabs */}
      <CloudCapabilities />

      {/* §02 AI ACCELERATORS, DBiz proprietary cloud IP (cream) */}
      <section id='accelerators' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Built in-house</span>
              <h2 className='v22-cdp-block-title'>Accelerators that <em>compress</em> cloud delivery.</h2>
              <p className='v22-cdp-block-kicker'>Proprietary AI platforms that turn months of cloud engineering into hours.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-cdp-accel-intro'>
                <p className='v22-cdp-accel-intro-body'>
                  Standing up production-grade cloud usually means months of architecture, provisioning, and hardening before the first workload runs. Our accelerators compress that to hours, without cutting the corners that keep you secure and compliant.
                </p>
                <p className='v22-cdp-accel-intro-body'>
                  AI generates the infrastructure, applies proven landing zones and patterns, and bakes in security, governance, and cost control from the first deployment. Your teams get a running platform instead of a backlog.
                </p>
                <p className='v22-cdp-accel-intro-note'>
                  Two proprietary platforms carry the work, DBiz Weaver to build, DBiz Scoop to migrate.
                </p>
              </div>

              {/* Lifecycle infographic — where Weaver & Scoop plug in */}
              <div className='v22-cloud-lc'>
                <span className='v22-cloud-lc-kicker'>Where they sit in the cloud lifecycle</span>
                <ol className='v22-cloud-lc-rail'>
                  {lifecycle.map((s) => (
                    <li key={s.num} className={`v22-cloud-lc-stage${s.accel ? ' is-powered' : ''}`}>
                      <span className='v22-cloud-lc-num'>{s.num}</span>
                      <h4 className='v22-cloud-lc-name'>{s.name}</h4>
                      <p className='v22-cloud-lc-desc'>{s.desc}</p>
                      {s.accel && <span className='v22-cloud-lc-accel'>{s.accel}</span>}
                    </li>
                  ))}
                </ol>
              </div>

              <div className='v22-cloud-accels'>
                {accelerators.map((a) => (
                  <article key={a.name} className='v22-cloud-accel'>
                    <div className='v22-cloud-accel-head'>
                      <span className='v22-cloud-accel-glyph'><AccelGlyph kind={a.glyph} /></span>
                      <span className='v22-cloud-accel-headmeta'>
                        <span className='v22-cloud-accel-kind'>{a.kind}</span>
                        <h3 className='v22-cloud-accel-name'>{a.name}</h3>
                      </span>
                    </div>
                    <p className='v22-cloud-accel-tagline'>{a.tagline}</p>
                    <div className='v22-cloud-accel-cols'>
                      <div>
                        <span className='v22-cloud-col-k'>Key capabilities</span>
                        <ul className='v22-cloud-points'>{a.capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
                      </div>
                      <div className='v22-cloud-accel-value'>
                        <span className='v22-cloud-col-k'>Business value</span>
                        <ul className='v22-cloud-values'>
                          {a.value.map((v) => (
                            <li key={v.head}>
                              <span className='v22-cloud-value-head'>{v.head}</span>
                              <span className='v22-cloud-value-sub'>{v.sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §03 PROOF, dark */}
      <section id='proof' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Proof</span>
              <h2 className='v22-cdp-block-title'>Proof in <em>practice</em></h2>
              <p className='v22-cdp-block-kicker'>Cloud work, measured in production.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-cloud-proof'>
                {proof.map((p) => (
                  <article key={p.tag} className='v22-cloud-proof-card'>
                    <span className='v22-cloud-proof-tag'>{p.tag}</span>
                    <div className='v22-cloud-proof-metric'>{p.metric}<span>{p.metricLabel}</span></div>
                    <p className='v22-cloud-proof-body'>{p.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM, partner cards + marquee (light) */}
      <section id='partners' className='v22-cdp-partners' data-surface='light' aria-label='Cloud partners'>
        <div className='v22-container'>
          <div className='v22-cdp-partners-head'>
            <span className='v22-cdp-partners-kicker'>Ecosystem</span>
            <h2 className='v22-cdp-partners-title'>
              Delivered through the world&rsquo;s leading <em>hyperscalers</em>.
            </h2>
            <p className='v22-cdp-partners-lede'>
              Certified across every major cloud and the AI platforms built on top of them, real depth on the tools you&rsquo;ve chosen, with no single-vendor bias.
            </p>
          </div>
          <div className='v22-cdp-partners-grid'>
            {partnerships.map((p) => (
              <article key={p.name} className='v22-cdp-partners-card'>
                <span className='v22-cdp-partners-logo'>{p.Mark()}</span>
                <div className='v22-cdp-partners-card-head'>
                  <h3 className='v22-cdp-partners-name'>{p.name}</h3>
                  <span className='v22-cdp-partners-tier'>{p.tier}</span>
                </div>
                <p className='v22-cdp-partners-spec'>{p.spec}</p>
              </article>
            ))}
          </div>
          <div className='v22-cdp-partner-marquee' aria-label='Cloud & AI ecosystem'>
            <span className='v22-cdp-partner-marquee-kicker'>+ platform ecosystem</span>
            <div className='v22-cdp-partner-marquee-mask'>
              <div className='v22-cdp-partner-marquee-track'>
                {[...marqueeItems, ...marqueeItems].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className={`v22-cdp-partner-marquee-item${MARQUEE_LOGOS[name] ? ' v22-cdp-partner-marquee-item--logo' : ''}`}
                    aria-label={name}
                    aria-hidden={i >= marqueeItems.length}
                  >
                    {MARQUEE_LOGOS[name] ?? name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §04 ENGAGEMENT MODELS, cream */}
      <section id='engagement' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>How we work</span>
              <h2 className='v22-cdp-block-title'>Engagement models</h2>
              <p className='v22-cdp-block-kicker'>Four shapes, from advisory to run.</p>
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

      {/* CLOSING CTA */}
      <section className='v22-cdp-cta'>
        <div className='v22-container'>
          <div className='v22-cdp-cta-inner v22-cdp-cta-inner--solo'>
            <div className='v22-cdp-cta-end'>
              <span className='v22-cdp-cta-num'>[Z·{cap.num}] NEXT STEP</span>
              <h2 className='v22-cdp-cta-title'>
                Great AI needs infrastructure that can carry it.<br />
                <em>Let&rsquo;s build yours.</em>
              </h2>
              <div className='v22-cdp-cta-actions'>
                <Link href='/v22.5#work' className='v22-cta-primary'>
                  See how we&rsquo;ve done it <span className='arrow'>→</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our cloud team</Link>
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
              <Link href='/v22.5#solutions' className='v22-cdp-pager-link prev'>
                <span className='v22-cdp-pager-arrow' aria-hidden='true'>←</span>
                <span className='v22-cdp-pager-meta'>
                  <span className='v22-cdp-pager-num'>L{prev.num} · {prev.altLabel.toUpperCase()}</span>
                  <span className='v22-cdp-pager-label'>{prev.title}</span>
                </span>
              </Link>
            ) : <span />}
            {next ? (
              <Link href='/v22.5#solutions' className='v22-cdp-pager-link next'>
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
