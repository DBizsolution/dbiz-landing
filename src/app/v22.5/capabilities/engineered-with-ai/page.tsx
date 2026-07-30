/* V22.5 — Engineered with AI, Shipped Continuously / Digital Product Engineering
   Same skeleton as connected-systems & the cloud page: Hero → What we do →
   AI accelerators (Perpetual Engineering + Agent Studio) → Proof → Ecosystem →
   Engagement → CTA. Positioning: software as a living system, not a static release. */

import type { ReactNode } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/icon'
import { capabilities } from '../../capabilities-data'
import ProductCapabilities from './product-capabilities'

const SLUG = 'engineered-with-ai'
const idx = capabilities.findIndex((c) => c.slug === SLUG)
const cap = capabilities[idx]
const prev = idx > 0 ? capabilities[idx - 1] : null
const next = idx < capabilities.length - 1 ? capabilities[idx + 1] : null

/* ─── AI accelerators — DBiz proprietary product IP ────────────────────── */
const accelerators = [
  {
    glyph: 'perpetual',
    kind: 'Continuous software evolution',
    name: 'Perpetual Engineering',
    tagline: 'Software that regenerates continuously through AI-assisted development, intelligent optimisation, and ongoing adaptation, so it keeps pace with the business.',
    capabilities: [
      'AI-assisted development: code generation, testing, documentation, optimisation',
      'Continuous regeneration as requirements change, without full redevelopment',
      'Engineering governance across architecture, quality, and security',
      'Accelerated delivery with materially less development effort',
    ],
    value: [
      { head: 'Change in days, not quarters', sub: 'Software keeps pace with the business instead of falling behind between releases.' },
      { head: 'No more big-bang rebuilds', sub: 'Applications regenerate continuously, avoiding costly replacement programmes.' },
      { head: 'Speed without losing control', sub: 'Standards, quality, and security are enforced throughout, not traded away for pace.' },
    ],
  },
  {
    glyph: 'agent',
    kind: 'Intelligent product orchestration',
    name: 'Agent Studio',
    tagline: 'Intelligent systems that participate directly inside your products, assisting users, automating decisions, and coordinating workflows across connected enterprise systems.',
    capabilities: [
      'Multi-agent systems across complex business processes',
      'Human-agent collaboration embedded in user workflows',
      'Workflow automation across applications, services, and platforms',
      'Agent governance: visibility, controls, compliance, and oversight',
    ],
    value: [
      { head: 'Products that do the work', sub: 'Agents act inside the product, automating decisions and workflows, not just storing data.' },
      { head: 'Adoption without retraining', sub: 'Intelligent assistance sits inside the workflows people already use.' },
      { head: 'Oversight you can trust', sub: 'Full visibility, controls, and compliance across every agent in production.' },
    ],
  },
]

/* ─── Proof — placeholder metrics for reviewers to fill in ─────────────── */
const proof = [
  { tag: 'AI-assisted engineering', metric: '[X]%', metricLabel: 'less development effort', body: 'Enterprise platform delivered with AI-assisted engineering.' },
  { tag: 'Multi-agent application', metric: '[X]', metricLabel: 'teams automated', body: 'Operational workflows automated across teams with a multi-agent app.' },
  { tag: 'Product modernisation', metric: '[X]%', metricLabel: 'faster feature delivery', body: 'A modernisation programme that accelerated the delivery of new features.' },
]

const MSMark = () => <Icon icon='logos:microsoft' height={24} aria-hidden='true' />
const AWSMark = () => <Icon icon='logos:aws' height={24} aria-hidden='true' />
const SFMark = () => <Icon icon='logos:salesforce' height={24} aria-hidden='true' />

/* Model/framework marks for the AI Ecosystem card */
const PRODUCT_LOGOS: Record<string, { icon: string; color?: string }> = {
  'Anthropic Claude': { icon: 'simple-icons:anthropic', color: '#D97757' },
  'OpenAI GPT': { icon: 'simple-icons:openai', color: '#0D1B3E' },
  'Google Gemini': { icon: 'simple-icons:googlegemini', color: '#4285F4' },
  'LangChain': { icon: 'simple-icons:langchain', color: '#1C3C3C' },
  'LangGraph': { icon: 'simple-icons:langgraph', color: '#1C3C3C' },
}

const partnerships: { name: string; tier: string; products: string[]; spec: string; Mark?: () => ReactNode; wide?: boolean; logoChips?: boolean }[] = [
  { name: 'Microsoft', tier: 'Solutions Partner', products: ['Azure OpenAI', 'GitHub', 'Azure DevOps', 'Power Platform'], spec: 'Solutions Partner in Digital & App Innovation and Data & AI, with the Agentic DevOps (Azure + GitHub) specialisation and 150+ certifications.', Mark: MSMark },
  { name: 'AWS', tier: 'Advanced Tier Partner', products: ['Bedrock', 'Lambda', 'EKS', 'Serverless'], spec: 'Advanced Tier Partner with GenAI and DevOps competencies and 40+ AWS-certified consultants.', Mark: AWSMark },
  { name: 'Salesforce', tier: 'Salesforce Partner', products: ['Experience Cloud', 'Agentforce'], spec: 'Customer-facing digital experiences and workflow automation.', Mark: SFMark },
  { name: 'AI Ecosystem', tier: 'Model & framework layer', products: ['Anthropic Claude', 'OpenAI GPT', 'Google Gemini', 'LangChain', 'LangGraph'], spec: 'The models and frameworks we build enterprise AI applications on.', wide: true, logoChips: true },
]

/* Hero logo carousel — the platforms behind modern product delivery */
const heroLogos: { name: string; icon: string; h?: number }[] = [
  { name: 'Microsoft Azure', icon: 'simple-icons:microsoftazure', h: 34 },
  { name: 'AWS', icon: 'simple-icons:amazonwebservices', h: 30 },
  { name: 'GitHub', icon: 'simple-icons:github', h: 32 },
  { name: 'Salesforce', icon: 'simple-icons:salesforce', h: 32 },
  { name: 'Anthropic', icon: 'simple-icons:anthropic', h: 26 },
  { name: 'OpenAI', icon: 'simple-icons:openai', h: 30 },
  { name: 'Google Gemini', icon: 'simple-icons:googlegemini', h: 30 },
  { name: 'NVIDIA', icon: 'simple-icons:nvidia', h: 28 },
]

const MARQUEE_LOGOS: Record<string, ReactNode> = {
  GitHub: <Icon icon='logos:github-icon' height={18} aria-hidden='true' />,
  Azure: <Icon icon='logos:microsoft-azure' height={18} aria-hidden='true' />,
  AWS: <Icon icon='logos:aws' height={20} aria-hidden='true' />,
  Salesforce: <Icon icon='logos:salesforce' height={18} aria-hidden='true' />,
  OpenAI: <Icon icon='logos:openai-icon' height={18} aria-hidden='true' />,
  LangChain: <Icon icon='simple-icons:langchain' height={16} color='#1C3C3C' aria-hidden='true' />,
}

const marqueeItems = [
  'Azure OpenAI', 'GitHub', 'Azure DevOps', 'Power Platform', 'AWS Bedrock', 'Lambda',
  'EKS', 'Agentforce', 'Anthropic Claude', 'OpenAI', 'Google Gemini', 'LangChain', 'LangGraph',
]

const engagementModels = [
  { name: 'Product Discovery & Strategy', body: 'Vision definition, roadmap development, and opportunity validation.' },
  { name: 'Product Build', body: 'End-to-end product design, engineering, and delivery.' },
  { name: 'Intelligent Product Delivery', body: 'Agent-enabled applications and AI-powered digital experiences.' },
  { name: 'Product Evolution', body: 'Ongoing optimisation, enhancement, and lifecycle management.' },
]

const traditionalStages = [
  { label: 'Build', icon: 'ph:code' },
  { label: 'Deploy', icon: 'ph:rocket-launch' },
  { label: 'Maintain', icon: 'ph:wrench' },
  { label: 'Replace', icon: 'ph:arrows-counter-clockwise' },
]
const perpetualStages = [
  { label: 'Ideate', icon: 'ph:lightbulb' },
  { label: 'Build', icon: 'ph:code' },
  { label: 'Release', icon: 'ph:rocket-launch' },
  { label: 'Evolve', icon: 'ph:arrows-clockwise' },
]
const agentRoles = [
  { label: 'Assist users', icon: 'ph:user-circle' },
  { label: 'Automate decisions', icon: 'ph:brain' },
  { label: 'Coordinate workflows', icon: 'ph:flow-arrow' },
  { label: 'Govern & oversee', icon: 'ph:shield-check' },
]

/* ─── Accelerator glyphs — 72×72 house-style schematics on the cream §02 */
function AccelGlyph({ kind }: { kind: string }) {
  const ink = 'rgba(13, 27, 62, 0.85)'
  const dim = 'rgba(13, 27, 62, 0.3)'
  const acc = 'var(--v22-accent)'

  if (kind === 'perpetual') {
    /* continuous regeneration loop */
    return (
      <svg viewBox='0 0 72 72' aria-hidden='true' className='v22-cloud-accel-svg'>
        <circle cx='36' cy='36' r='22' fill='none' stroke={dim} strokeWidth='1' strokeDasharray='2 3' />
        <path d='M36 12 a24 24 0 0 1 22 14' fill='none' stroke={ink} strokeWidth='1.4' strokeLinecap='round' />
        <path d='M36 60 a24 24 0 0 1 -22 -14' fill='none' stroke={ink} strokeWidth='1.4' strokeLinecap='round' />
        <path d='M58 26 l1 -8 l-8 2 z' fill={acc} />
        <path d='M14 46 l-1 8 l8 -2 z' fill={acc} />
        <circle cx='36' cy='36' r='6' fill='rgba(240,123,47,0.15)' stroke={acc} strokeWidth='1.4' />
      </svg>
    )
  }

  /* agent — a parent orchestrator with child agents */
  return (
    <svg viewBox='0 0 72 72' aria-hidden='true' className='v22-cloud-accel-svg'>
      <circle cx='36' cy='18' r='8' fill='rgba(240,123,47,0.15)' stroke={acc} strokeWidth='1.4' />
      <line x1='36' y1='26' x2='18' y2='48' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      <line x1='36' y1='26' x2='36' y2='48' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      <line x1='36' y1='26' x2='54' y2='48' stroke={dim} strokeWidth='0.9' strokeDasharray='2 2.5' />
      {[18, 36, 54].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy='54' r='6' fill='none' stroke={ink} strokeWidth='1.1' />
          <circle cx={cx} cy='54' r='2' fill={ink} />
        </g>
      ))}
    </svg>
  )
}

/* ─── Hero diagram — the enablers feed a living product that ships across
   surfaces. Animated in the landing-hero language: staggered entrance,
   pulsing product panel accent, particles flowing to the shipped surfaces. */
function ProductHeroDiagram() {
  const ink = 'rgba(255, 255, 255, 0.9)'
  const dim = 'rgba(255, 255, 255, 0.5)'
  const acc = 'var(--v22-accent)'
  const beams = [100, 230, 360]
  return (
    <svg viewBox='0 0 460 400' aria-hidden='true' className='v22-cloud-hero-svg'>
      <text x='16' y='22' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.6' fill={dim}>FIG · PERPETUAL DELIVERY</text>

      {/* Layer A — the DBiz engines */}
      <g className='v22-chs-layer' style={{ animationDelay: '0.15s' }}>
        <text x='230' y='52' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='8.5' letterSpacing='1.6' fill={dim}>DBIZ ENGINES</text>
        {['Perpetual Eng.', 'Agent Studio', 'Nexus'].map((t, k) => {
          const x = 40 + k * 130
          return (
            <g key={t}>
              <rect className='v22-chs-chip' style={{ animationDelay: `${k * 0.5}s` }} x={x} y='64' width='120' height='40' fill='rgba(240,123,47,0.1)' stroke={acc} strokeWidth='1.2' />
              <text x={x + 60} y='89' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='12' fontWeight='700' fill={ink}>{t}</text>
              <line x1={x + 60} y1='104' x2='230' y2='126' stroke={acc} strokeWidth='0.9' strokeDasharray='3 3' />
            </g>
          )
        })}
        <circle cx='230' cy='128' r='2.6' fill={acc} />
      </g>

      {/* Layer B — the living product */}
      <g className='v22-chs-layer' style={{ animationDelay: '0.33s' }}>
        <rect x='30' y='152' width='400' height='94' fill='rgba(255,255,255,0.05)' stroke={ink} strokeWidth='1.4' />
        <rect x='30' y='152' width='400' height='3' fill={acc} />
        <text x='230' y='190' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='23' fontWeight='800' letterSpacing='-0.02em' fill={ink}>Living Product</text>
        <text x='230' y='212' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.4' fill={dim}>EVOLVES · OPTIMISES · EXTENDS</text>
        <text x='230' y='230' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' letterSpacing='1.4' fill={dim}>AI-ASSISTED · GOVERNED · CONTINUOUS</text>
      </g>

      {/* Beams + flowing particles down to the shipped surfaces */}
      <g>
        {beams.map((x) => (
          <line key={x} x1={x} y1='248' x2={x} y2='300' stroke={dim} strokeWidth='0.9' strokeDasharray='3 3' />
        ))}
        {beams.flatMap((x, bi) => [0, 1.2].map((d, pi) => (
          <circle key={`${x}-${pi}`} className='v22-chs-particle' cx={x} cy='248' r='2.4' fill={acc} style={{ animationDelay: `${bi * 0.35 + d}s` }} />
        )))}
      </g>

      {/* Layer C — shipped surfaces */}
      <g className='v22-chs-layer' style={{ animationDelay: '0.51s' }}>
        {['WEB', 'MOBILE', 'AGENTS'].map((t, k) => {
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

export default function EngineeredWithAiPage() {
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
          <span className='v22-cdp-crumb-num'>L{cap.num} · DIGITAL PRODUCT ENGINEERING</span>
        </div>
      </div>

      {/* HERO */}
      <section className='v22-cdp-hero'>
        <div className='v22-container'>
          <div className='v22-cdp-hero-grid'>
            <div className='v22-cdp-hero-meta'>
              <span className='v22-cdp-eyebrow'>N°{cap.num} · Digital Product Engineering</span>
              <h1 className='v22-cdp-title'>
                Software shouldn&rsquo;t<br />
                <em>stand still.</em>
              </h1>
              <p className='v22-cdp-subtitle'>{cap.subtitle}</p>
              <p className='v22-cdp-lead'>
                Most software starts ageing the day it ships. We build living products instead: through Perpetual Engineering and Agent Studio, applications evolve, optimise, and extend themselves as the business changes.
              </p>
              <div className='v22-cdp-hero-actions'>
                <Link href='#pillars' className='v22-cta-primary'>
                  See what we do <span className='arrow'>↓</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our product team</Link>
              </div>
            </div>
            <aside className='v22-cdp-hero-aside' aria-hidden='true'>
              <ProductHeroDiagram />
            </aside>
          </div>
          <div className='v22-cloud-hero-certs'>
            <span className='v22-cloud-hero-certs-k'>Built with</span>
            <div className='v22-cloud-logobar' aria-label='Product engineering platforms'>
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

      {/* §01 WHAT WE DO — capability tabs */}
      <ProductCapabilities />

      {/* §02 AI ACCELERATORS — Perpetual Engineering + Agent Studio (cream) */}
      <section id='accelerators' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Built in-house</span>
              <h2 className='v22-cdp-block-title'>Products that <em>evolve</em>, not just ship.</h2>
              <p className='v22-cdp-block-kicker'>Two proprietary platforms turn software from a static release into a living system.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div className='v22-cdp-accel-intro'>
                <p className='v22-cdp-accel-intro-body'>
                  Traditional software runs a familiar cycle, then gets replaced. Perpetual Engineering keeps it evolving instead, and Agent Studio makes the product an active participant in operations rather than a passive system of record.
                </p>

                {/* Delivery-model contrast — the old cycle vs the perpetual loop (stacked, iconised) */}
                <div className='v22-pe-models' aria-label='Traditional delivery versus Perpetual Engineering'>
                  <div className='v22-pe-model'>
                    <span className='v22-pe-model-k'>Traditional delivery</span>
                    <div className='v22-pe-flow'>
                      {traditionalStages.flatMap((s, i) => {
                        const step = (
                          <span key={s.label} className='v22-pe-step'>
                            <span className='v22-pe-ico'><Icon icon={s.icon} width={22} height={22} aria-hidden='true' /></span>
                            <span className='v22-pe-lbl'>{s.label}</span>
                          </span>
                        )
                        return i < traditionalStages.length - 1
                          ? [step, <span key={`${s.label}-a`} className='v22-pe-arrow' aria-hidden='true'>→</span>]
                          : [step]
                      })}
                    </div>
                    <span className='v22-pe-note'>Big-bang rebuilds. Slow to respond to change.</span>
                  </div>

                  <div className='v22-pe-model v22-pe-model--live'>
                    <span className='v22-pe-model-k'>Perpetual Engineering Lifecycle</span>
                    <div className='v22-pe-flow'>
                      {perpetualStages.flatMap((s) => [
                        <span key={s.label} className='v22-pe-step is-live'>
                          <span className='v22-pe-ico'><Icon icon={s.icon} width={22} height={22} aria-hidden='true' /></span>
                          <span className='v22-pe-lbl'>{s.label}</span>
                        </span>,
                        <span key={`${s.label}-a`} className='v22-pe-arrow is-accent' aria-hidden='true'>→</span>,
                      ])}
                      <span className='v22-pe-step is-live'>
                        <span className='v22-pe-ico'><Icon icon='ph:arrows-clockwise' width={22} height={22} aria-hidden='true' /></span>
                        <span className='v22-pe-lbl'>Continuous</span>
                      </span>
                    </div>

                    {/* Agent Studio drives the loop — kept simple */}
                    <div className='v22-pe-engine'>
                      <span className='v22-pe-engine-k'>Powered by Agent Studio</span>
                      <div className='v22-pe-engine-roles'>
                        {agentRoles.map((r) => (
                          <span key={r.label} className='v22-pe-engine-role'>
                            <Icon icon={r.icon} width={18} height={18} aria-hidden='true' />
                            {r.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className='v22-pe-note'>Agents run inside every stage, so the product keeps evolving instead of ageing.</span>
                  </div>
                </div>

                <p className='v22-cdp-accel-intro-note'>
                  Two proprietary platforms carry the work, Perpetual Engineering and Agent Studio.
                </p>
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

      {/* §03 PROOF — dark */}
      <section id='proof' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Proof</span>
              <h2 className='v22-cdp-block-title'>Proof in <em>practice</em></h2>
              <p className='v22-cdp-block-kicker'>Product work, measured in production.</p>
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

      {/* ECOSYSTEM — partner cards + marquee (light) */}
      <section id='partners' className='v22-cdp-partners' data-surface='light' aria-label='Product engineering partners'>
        <div className='v22-container'>
          <div className='v22-cdp-partners-head'>
            <span className='v22-cdp-partners-kicker'>Ecosystem</span>
            <h2 className='v22-cdp-partners-title'>
              Modern products across <em>every major platform</em>.
            </h2>
            <p className='v22-cdp-partners-lede'>
              Delivered across the cloud, AI, and enterprise ecosystems your product depends on.
            </p>
          </div>
          <div className='v22-cdp-partners-grid'>
            {partnerships.map((p) => (
              <article key={p.name} className={`v22-cdp-partners-card${p.wide ? ' v22-cdp-partners-card--wide' : ''}`}>
                {p.Mark && <span className='v22-cdp-partners-logo'>{p.Mark()}</span>}
                <div className='v22-cdp-partners-card-head'>
                  <h3 className='v22-cdp-partners-name'>{p.name}</h3>
                  <span className='v22-cdp-partners-tier'>{p.tier}</span>
                </div>
                <ul className={`v22-pe-partner-tags${p.logoChips ? ' v22-pe-partner-tags--logos' : ''}`}>
                  {p.products.map((pr) => (
                    <li key={pr}>
                      {p.logoChips && PRODUCT_LOGOS[pr] && (
                        <Icon icon={PRODUCT_LOGOS[pr].icon} width={16} height={16} color={PRODUCT_LOGOS[pr].color} aria-hidden='true' />
                      )}
                      {pr}
                    </li>
                  ))}
                </ul>
                <p className='v22-cdp-partners-spec'>{p.spec}</p>
              </article>
            ))}
          </div>
          <div className='v22-cdp-partner-marquee' aria-label='Product & AI ecosystem'>
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

      {/* §04 ENGAGEMENT MODELS — cream */}
      <section id='engagement' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>How we work</span>
              <h2 className='v22-cdp-block-title'>Engagement models</h2>
              <p className='v22-cdp-block-kicker'>Four shapes, from first idea to a product that keeps improving.</p>
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
                Stop shipping software that ages.<br />
                <em>Start shipping software that evolves.</em>
              </h2>
              <div className='v22-cdp-cta-actions'>
                <Link href='/v22.5#work' className='v22-cta-primary'>
                  See how we&rsquo;ve done it <span className='arrow'>→</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our product engineering team</Link>
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
