/* V22.5 — dRSTi · Research & Innovation
   The dRSTi research-unit page built on the v22.5 capability-page template,
   so it uses exactly the same elements as the other pages: v22-nav,
   v22-cdp-crumb breadcrumb, v22-cdp-hero grid, v22-cdp-block head/body
   sections, v22-cta-primary / v22-cta-text CTAs, v22-cap-pill chips, and
   the blueprint SheetFrame + schematic-glyph motif. Interactive pieces
   (research-area tabs, self-drawing pipeline, horizon bar, tour panel)
   live in ./interactive. */

import type { Metadata } from 'next'
import type { ReactNode, CSSProperties } from 'react'
import Link from 'next/link'
import { ProcessPipeline, PortfolioBar, CareersTour } from './interactive'
import { AREAS } from './areas-data'
import { InlineSvg } from '@/components/inline-svg'
import {
  drstiStage01Explore, drstiStage02Validate, drstiStage03Transfer, drstiStage04Cultivate,
  drstiEngage01Framing, drstiEngage02Sprint, drstiEngage03Cofunded, drstiEngage04Academic,
  drstiTransfer01Readiness, drstiTransfer02Home, drstiTransfer03Handover, drstiTransfer04Track,
  drstiArea01AgenticArchitectures, drstiArea02DataReadiness, drstiArea03SecurityPrivacy,
  drstiArea04GovernanceAssurance, drstiArea05BusinessTransformation,
  drstiHeroLifecycle, drstiEyeMark,
  drstiIconCrosshairSimple, drstiIconScales, drstiIconClock,
  drstiIconPackage, drstiIconBookOpen, drstiIconProhibit,
} from '@/lib/svg-assets'

export const metadata: Metadata = {
  title: 'RESEARCH & INNOVATION',
}

const ACCENT = 'var(--v22-accent)'
const ACCENT_DEEP = 'var(--brand-orange-hover)'
const NAVY = 'var(--brand-navy)'
const MONO = 'var(--font-mono)'
const INK = 'var(--v22-ink)'
const INK2 = 'var(--v22-ink-2)'

/* ─── Blueprint SheetFrame — bordered panel with corner ticks + foot strip ── */

function SheetFrame({ foot, children }: { foot?: string; children: ReactNode }) {
  return (
    <div style={{ position: 'relative', border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.02)' }}>
      {(['tl', 'tr', 'bl', 'br'] as const).map((c) => (
        <span key={c} aria-hidden='true' style={{
          position: 'absolute', width: 12, height: 12, borderColor: ACCENT, borderStyle: 'solid', borderWidth: 0,
          ...(c === 'tl' ? { top: -1, left: -1, borderTopWidth: 1, borderLeftWidth: 1 } : {}),
          ...(c === 'tr' ? { top: -1, right: -1, borderTopWidth: 1, borderRightWidth: 1 } : {}),
          ...(c === 'bl' ? { bottom: -1, left: -1, borderBottomWidth: 1, borderLeftWidth: 1 } : {}),
          ...(c === 'br' ? { bottom: -1, right: -1, borderBottomWidth: 1, borderRightWidth: 1 } : {}),
        }} />
      ))}
      {children}
      {foot && (
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', padding: '14px clamp(16px,3vw,40px)', textAlign: 'center',
          fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.4)',
        }}>{foot}</div>
      )}
    </div>
  )
}

/* ─── Schematic glyphs — design-system SVG assets (public/assets/svg),
   injected inline so v22 surface tokens resolve per section. ─────────────── */

const glyphBox: CSSProperties = { width: 52, height: 52, display: 'block' }

const STAGE_GLYPHS = [drstiStage01Explore, drstiStage02Validate, drstiStage03Transfer, drstiStage04Cultivate]
const ENGAGE_GLYPHS = [drstiEngage01Framing, drstiEngage02Sprint, drstiEngage03Cofunded, drstiEngage04Academic]
const TRANSFER_GLYPHS = [drstiTransfer01Readiness, drstiTransfer02Home, drstiTransfer03Handover, drstiTransfer04Track]
const AREA_PLATES = [
  drstiArea01AgenticArchitectures,
  drstiArea02DataReadiness,
  drstiArea03SecurityPrivacy,
  drstiArea04GovernanceAssurance,
  drstiArea05BusinessTransformation,
]

/* Curated register order: Data Readiness → Agentic Architectures →
   Security & Privacy → Governance → Business Transformation. */
const REGISTER_ORDER = ['02', '01', '03', '04', '05']

/* Horizon → plain time-to-value, colored with the portfolio bar's orange fade */
const HORIZONS: Record<string, { name: string; span: string; color: string }> = {
  'HORIZON 1 · CORE': { name: 'HORIZON 1', span: '0–12 MONTHS', color: 'var(--v22-accent)' },
  'HORIZON 2 · EMERGING': { name: 'HORIZON 2', span: '1–3 YEARS', color: 'rgba(240,123,47,0.72)' },
  'HORIZON 3 · DISRUPTIVE': { name: 'HORIZON 3', span: '3+ YEARS', color: 'rgba(240,123,47,0.45)' },
}

function StageGlyph({ i }: { i: number }) {
  return <span style={glyphBox} aria-hidden='true'><InlineSvg markup={STAGE_GLYPHS[i] ?? STAGE_GLYPHS[0]} /></span>
}
function EngageGlyph({ i }: { i: number }) {
  return <span style={glyphBox} aria-hidden='true'><InlineSvg markup={ENGAGE_GLYPHS[i] ?? ENGAGE_GLYPHS[0]} /></span>
}
function TransferGlyph({ i }: { i: number }) {
  return <span style={glyphBox} aria-hidden='true'><InlineSvg markup={TRANSFER_GLYPHS[i] ?? TRANSFER_GLYPHS[0]} /></span>
}


/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function ResearchInnovationPage() {
  return (
    <main className='v22-cap-detail-page'>
      {/* NAV — standard site header, current page highlighted */}
      <nav className='v22-nav scrolled' aria-label='Primary'>
        <div className='v22-nav-inner'>
          <Link href='/v22.5' className='v22-logo'>
            <img src='/dbiz-logo.svg' alt='DBiz.ai' width='80' height='45' />
          </Link>
          <ul className='v22-nav-links'>
            <li><Link href='/v22.5#solutions'>Our Solutions</Link></li>
            <li><Link href='/v22.5#work'>Our Work</Link></li>
            <li><Link href='/v22.5/research-and-innovation' aria-current='page' className='is-current'>Research &amp; Innovation</Link></li>
            <li><Link href='/v22.5#about'>About Us</Link></li>
            <li><a href='#careers'>Careers</a></li>
          </ul>
          <div className='v22-nav-cta-wrap'>
            <Link href='/v22.5#cta' className='v22-nav-cta'>Contact us <span>→</span></Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumb — same element as the capability pages */}
      <div className='v22-cdp-crumb'>
        <div className='v22-container'>
          <Link href='/v22.5' className='v22-cdp-back'>
            <span aria-hidden='true'>←</span> Back to home
          </Link>
          <span className='v22-cdp-crumb-sep' aria-hidden='true' />
          <span className='v22-cdp-crumb-num'>dRSTi · RESEARCH &amp; INNOVATION</span>
        </div>
      </div>

      {/* HERO — capability-page hero grid */}
      <section className='v22-cdp-hero' id='top'>
        <div className='v22-container'>
          <div className='v22-cdp-hero-grid'>
            <div className='v22-cdp-hero-meta'>
              <span className='v22-cdp-eyebrow'>dbiz Research Strategy and Technology Innovation</span>
              <h1 className='v22-cdp-title'>
                <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.16em' }}>
                  dRSTi
                  <span aria-hidden='true' style={{ width: '0.58em', height: '0.58em', alignSelf: 'center', color: 'var(--v22-accent)', display: 'inline-flex' }}><InlineSvg markup={drstiEyeMark} /></span>
                </span>
                <br />
                We research what<br />
                enterprises will <em>run next.</em>
              </h1>
              <p className='v22-cdp-subtitle'>Explore · Validate · Transfer · Cultivate</p>
              <p className='v22-cdp-lead'>
                The research and innovation unit of dbiz.ai. We take the hard, unproven parts of agentic AI, test them against real enterprise constraints, and hand over what survives: working technology, not a point of view.
              </p>
              <div className='v22-cdp-hero-actions'>
                <a href='#areas' className='v22-cta-primary'>
                  See what we research <span className='arrow'>↓</span>
                </a>
                <a href='#partners' className='v22-cta-text'>Research with us</a>
              </div>
            </div>
            <aside className='v22-cdp-hero-aside' aria-hidden='true'>
              <SheetFrame>
                <div style={{ padding: 24 }}>
                  <span style={{ width: '100%', maxWidth: 440, margin: '0 auto', display: 'block' }}><InlineSvg markup={drstiHeroLifecycle} /></span>
                </div>
              </SheetFrame>
            </aside>
          </div>
        </div>
      </section>

      {/* §01 WHY IT MATTERS — cream block, capability-page structure */}
      <section className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Why it matters</span>
              <h2 className='v22-cdp-block-title'>Most AI pilots never reach production. We work on the <em>reasons why.</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              <p style={{ margin: '0 0 24px', fontSize: 17, lineHeight: 1.65, color: INK2, maxWidth: '60ch' }}>The demo is rarely the problem. Data that isn&rsquo;t ready, permissions that don&rsquo;t hold, evaluation nobody trusts. That is where enterprise AI stalls. dRSTi exists to solve those problems ahead of the delivery work, so our clients are not the ones discovering them in production.</p>
              <div style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 20, marginBottom: 40 }}>
                <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', color: ACCENT_DEEP, marginBottom: 10 }}>HOW WE ARE DIFFERENT</div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: INK, maxWidth: '56ch' }}>The unit runs on its own clock and its own funding, so long-horizon questions get answered properly. Everything it produces is built to be handed to a delivery team, or to you.</p>
              </div>
              <div className='v22-ri-stats-grid'>
                {[
                  { stat: '~2x', label: 'FASTER GROWTH', body: 'for organisations that invest consistently in research and innovation versus those that don’t' },
                  { stat: '70%+', label: 'OF LABS UNDERDELIVER', body: 'corporate innovation labs fail to produce real business impact, usually because nothing transfers' },
                  { stat: '70/20/10', label: 'PORTFOLIO BALANCE', body: 'core, emerging, and long-term bets funded together so today’s delivery and tomorrow’s options both advance' },
                ].map((s) => (
                  <div key={s.label} style={{ background: '#fff', border: '1px solid rgba(13,27,62,0.12)', padding: '26px 28px' }}>
                    <div style={{ fontSize: 'clamp(30px,3vw,40px)', fontWeight: 800, letterSpacing: '-0.04em', color: ACCENT, lineHeight: 1 }}>{s.stat}</div>
                    <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', color: 'rgba(13,27,62,0.55)', margin: '10px 0 8px' }}>{s.label}</div>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: INK2 }}>{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §02 WHAT WE DO — dark block */}
      <section id='what' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>What we do</span>
              <h2 className='v22-cdp-block-title'>Four things, <em>in order.</em></h2>
              <p className='v22-cdp-block-kicker'>Every piece of work moves through them.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(14px,2vw,20px)' }}>
                {[
                  { n: '01', t: 'Explore', b: 'We track where the technology is actually going and frame the questions worth answering, not the ones easiest to demo.' },
                  { n: '02', t: 'Validate', b: 'Prototypes and experiments against real data, real permissions, and real cost envelopes. Evidence decides what continues.' },
                  { n: '03', t: 'Transfer', b: 'What holds up moves into our platforms and delivery teams, or into your stack, with the people and IP attached.' },
                  { n: '04', t: 'Cultivate', b: 'We grow the people, methods, and partnerships that make the next answer faster to reach than the last one.' },
                ].map((c, i) => (
                  <div key={c.n} style={{ background: NAVY, border: '1px solid rgba(255,255,255,0.1)', padding: '30px 26px 34px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                      <span style={{ fontFamily: MONO, fontSize: 11, color: ACCENT, letterSpacing: '0.14em' }}>{c.n}</span>
                      <StageGlyph i={i} />
                    </div>
                    <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>{c.t}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>{c.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §03 RESEARCH REGISTER — the five reasons enterprise AI stalls,
           each a named research programme with a horizon (time-to-value
           encoded in the same orange fade as the portfolio bar). One section
           replaces the old sequence + index duplication: everything visible,
           nothing behind a click. */}
      <section id='areas' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 18 }}>
            <div>
              <span className='v22-cdp-block-num'>Research areas</span>
              <h2 className='v22-cdp-block-title' style={{ marginBottom: 0 }}>Five reasons AI stalls.<br /><em>Five research programmes.</em></h2>
            </div>
            <p className='v22-cdp-block-kicker v22-ri-head-note'>Agentic AI, taken seriously. Including the parts that are not the model.</p>
          </div>
          <p style={{ margin: '0 0 clamp(28px,4vw,40px)', fontSize: 16, lineHeight: 1.65, color: INK2, maxWidth: '68ch' }}>
            Each area below is a reason enterprise AI fails to reach production, and a funded programme working on it. The horizon says when it pays off: the same 70/20/10 balance the portfolio runs on.
          </p>
          <div style={{ borderTop: '1px solid rgba(13,27,62,0.16)' }}>
            {REGISTER_ORDER.map(n => AREAS.find(a => a.num === n)!).map((a, i) => {
              const hz = HORIZONS[a.horizon]
              return (
                <article key={a.num} className='v22-ri-register-row'>
                  <div className='v22-ri-register-meta'>
                    <span style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.14em', color: ACCENT_DEEP }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: MONO, fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', color: 'rgba(13,27,62,0.75)', whiteSpace: 'nowrap' }}>
                        <span aria-hidden='true' style={{ width: 8, height: 8, borderRadius: '50%', background: hz.color, flex: 'none' }} />
                        {hz.name}
                      </span>
                      <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.1em', color: 'rgba(13,27,62,0.45)', paddingLeft: 15, whiteSpace: 'nowrap' }}>{hz.span}</span>
                    </span>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', color: ACCENT_DEEP, marginBottom: 10 }}>{a.kicker}</div>
                    <h3 style={{ margin: '0 0 10px', fontSize: 'clamp(18px,2vw,22px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: INK }}>{a.title}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: INK2, maxWidth: '62ch' }}>{a.body}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
                      {a.tags.map((t) => <span key={t} className='v22-cap-pill'>{t}</span>)}
                    </div>
                  </div>
                  <div className='v22-ri-register-art' aria-hidden='true'>
                    <InlineSvg markup={AREA_PLATES[Number(a.num) - 1]} />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* §04 OUR PROCESS — dark block */}
      <section id='process' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Our process</span>
              <h2 className='v22-cdp-block-title'>From question to production, through <em>explicit gates.</em></h2>
              <p className='v22-cdp-block-kicker'>Six stages · five gates.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <SheetFrame>
                <div style={{ padding: 'clamp(12px,2vw,28px)' }}><ProcessPipeline /></div>
              </SheetFrame>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(28px,4vw,56px)', marginTop: 44, alignItems: 'start' }}>
                <div>
                  <h3 style={{ margin: '0 0 12px', fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>Every gate is a decision, taken in the open</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.65)' }}>At each gate the evidence is reviewed against criteria agreed up front: technical, commercial, and strategic. Partners and clients sit in the reviews for the work they fund.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 'clamp(14px,2vw,20px)' }}>
                  {[
                    { t: 'Go', d: 'fund the next stage', accent: true },
                    { t: 'Kill', d: 'stop & reallocate' },
                    { t: 'Hold', d: 'pause for now' },
                    { t: 'Recycle', d: 'rework & return' },
                  ].map((g) => (
                    <div key={g.t} style={{ background: NAVY, border: '1px solid rgba(255,255,255,0.1)', padding: '20px 18px' }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: g.accent ? ACCENT : '#fff', marginBottom: 6 }}>{g.t}</div>
                      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>{g.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §05 OUR PORTFOLIO — cream block */}
      <section id='portfolio' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Our portfolio</span>
              <h2 className='v22-cdp-block-title'>Balanced across <em>three horizons</em></h2>
              <p className='v22-cdp-block-kicker'>Research that helps clients this year sits alongside work that will matter in three. Both are funded, so neither starves the other.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <PortfolioBar />
              {/* Vertical timeline — horizons in time order down a dashed rail */}
              <div style={{ position: 'relative', paddingLeft: 36 }}>
                <span aria-hidden='true' style={{ position: 'absolute', left: 8, top: 10, bottom: 24, width: 0, borderLeft: '1px dashed rgba(13,27,62,0.25)' }} />
                {[
                  { pct: '70', color: ACCENT, hz: 'HORIZON 1', t: 'Make delivery better now', b: 'Improvements that reach client engagements and our platforms inside a year.', span: '0–12 MONTHS' },
                  { pct: '20', color: 'rgba(240,123,47,0.72)', hz: 'HORIZON 2', t: 'Build emerging capability', b: 'New products and services with early traction, scaled with lead clients.', span: '1–3 YEARS' },
                  { pct: '10', color: 'rgba(240,123,47,0.45)', hz: 'HORIZON 3', t: 'Create future options', b: 'Exploratory work on technology that could reshape how enterprises operate.', span: '3+ YEARS' },
                ].map((h, i, arr) => (
                  <div key={h.hz} style={{ position: 'relative', paddingBottom: i < arr.length - 1 ? 44 : 0 }}>
                    {/* Node on the rail */}
                    <span aria-hidden='true' style={{ position: 'absolute', left: -36, top: 8, width: 17, height: 17, borderRadius: '50%', border: `1.5px solid ${h.color}`, background: 'var(--v22-paper-2, #F3F0EC)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: h.color }} />
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 'clamp(34px,3.4vw,46px)', fontWeight: 800, letterSpacing: '-0.04em', color: h.color, lineHeight: 1 }}>{h.pct}<span style={{ fontSize: '0.45em', verticalAlign: 'super' }}>%</span></span>
                      <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', color: 'rgba(13,27,62,0.5)' }}>{h.hz}</span>
                      <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.13em', color: ACCENT_DEEP }}>{h.span}</span>
                    </div>
                    <h3 style={{ margin: '12px 0 6px', fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em', color: INK }}>{h.t}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: INK2, maxWidth: '58ch' }}>{h.b}</p>
                  </div>
                ))}
              </div>
              <p style={{ margin: '36px 0 0', fontSize: 14, lineHeight: 1.6, color: 'rgba(13,27,62,0.55)', maxWidth: '70ch' }}>Illustrative allocation of effort and capital: the mix is rebalanced as work matures and graduates between horizons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* §06 HOW WE WORK — dark block */}
      <section id='how' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>How we work</span>
              <h2 className='v22-cdp-block-title'>Six commitments you can <em>hold us to.</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(20px,3vw,40px)' }}>
                {[
                  { k: 'CLOSE TO THE WORK', icon: drstiIconCrosshairSimple, b: 'Protected funding and time, but never an ivory tower: every question comes from a real delivery or client problem.' },
                  { k: 'EVIDENCE OVER OPINION', icon: drstiIconScales, b: 'Work advances on validated learning against criteria set in advance, not on seniority or hype.' },
                  { k: 'OUR OWN CLOCK', icon: drstiIconClock, b: 'Long-horizon questions are judged on the learning and the options they create, not this quarter’s revenue.' },
                  { k: 'DESIGNED FOR HANDOFF', icon: drstiIconPackage, b: 'Where a result will land is agreed before the work starts. Nothing is researched with nowhere to go.' },
                  { k: 'PUBLISHED AND SHARED', icon: drstiIconBookOpen, b: 'Methods, benchmarks, and negative results are written down and shared with partners and clients, not buried.' },
                  { k: 'WE KILL THINGS', icon: drstiIconProhibit, b: 'A clear stop is a good outcome. It frees capital and tells you something true about the technology.' },
                ].map((c) => (
                  <div key={c.k} style={{ borderLeft: '2px solid rgba(240,123,47,0.4)', paddingLeft: 20 }}>
                    <span aria-hidden='true' style={{ display: 'block', width: 26, height: 26, color: 'var(--v22-accent)', marginBottom: 12 }}><InlineSvg markup={c.icon} /></span>
                    <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', color: ACCENT, marginBottom: 12 }}>{c.k}</div>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>{c.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §07 FROM RESEARCH TO PRODUCTION — cream block */}
      <section id='transfer' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>From research to production</span>
              <h2 className='v22-cdp-block-title'>A result you can <em>actually run</em></h2>
              <p className='v22-cdp-block-kicker'>The hardest part of research is the handoff. We name the receiving team and the success criteria before work begins, so what we prove lands somewhere ready to scale it.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(18px,2.5vw,28px)' }}>
                {[
                  { s: 'STEP 1', t: 'Prove readiness', b: 'Validated demand, a working prototype, and a credible unit economics case.' },
                  { s: 'STEP 2', t: 'Name the home', b: 'A delivery team, a product, or your own engineering group commits to receive it.' },
                  { s: 'STEP 3', t: 'Hand over properly', b: 'Code, documentation, people, and IP move together, never a concept with no resources.' },
                  { s: 'STEP 4', t: 'Track what happened', b: 'Adoption and outcomes followed for two to four quarters to confirm the result took hold.' },
                ].map((c, i) => (
                  <div key={c.s} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: '26px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', color: ACCENT_DEEP }}>{c.s}</span>
                      <TransferGlyph i={i} />
                    </div>
                    <h3 style={{ margin: '0 0 10px', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: INK }}>{c.t}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: INK2 }}>{c.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §08 WAYS TO ENGAGE — dark block */}
      <section id='engage' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Ways to engage</span>
              <h2 className='v22-cdp-block-title'>Four ways work <em>starts with us</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 'clamp(14px,2vw,20px)' }}>
                {[
                  { n: '01', t: 'Framing workshop', b: 'A short engagement to turn an ambition into a testable question, with the criteria that would make it a yes.', span: 'DAYS' },
                  { n: '02', t: 'Prototype sprint', b: 'We build the smallest thing that can fail, run it against your data and constraints, and report what held.', span: 'WEEKS' },
                  { n: '03', t: 'Co-funded research bet', b: 'A shared programme on a problem neither side can answer alone, with agreed IP terms and a named transfer home.', span: 'QUARTERS' },
                  { n: '04', t: 'Academic collaboration', b: 'Joint studies, student projects, and placements: enterprise problems and data access in exchange for rigour.', span: 'ONGOING' },
                ].map((c, i) => (
                  <div key={c.n} style={{ background: NAVY, border: '1px solid rgba(255,255,255,0.1)', padding: '28px 26px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', color: ACCENT }}>{c.n}</span>
                      <EngageGlyph i={i} />
                    </div>
                    <h3 style={{ margin: '0 0 10px', fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>{c.t}</h3>
                    <p style={{ margin: '0 0 14px', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>{c.b}</p>
                    <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.13em', color: 'rgba(255,255,255,0.4)' }}>{c.span}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §09 WHO WE WORK WITH — light block */}
      <section id='partners' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Who we work with</span>
              <h2 className='v22-cdp-block-title'>Bring us a hard problem, or a technology <em>worth testing</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              {/* Carousel — horizontal scroll-snap track, one audience card per swipe */}
              <div style={{ display: 'flex', gap: 'clamp(14px,2vw,20px)', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 14, WebkitOverflowScrolling: 'touch' }}>
                {[
                  { k: 'ENTERPRISES', t: 'You have the constraint that makes it real', b: 'Co-fund a research bet on a problem your roadmap keeps deferring: data readiness, agent assurance, autonomy in a regulated process. You get evidence and a transferable result; we get a problem worth solving.', tags: ['Co-funded bets', 'Agreed IP terms'] },
                  { k: 'UNIVERSITIES & RESEARCH INSTITUTES', t: 'Enterprise problems, at real scale', b: 'Joint studies, supervised student projects, and placements inside live engagements. We bring industrial problems, data access, and engineers; you bring method and depth. Results are published.', tags: ['Joint studies', 'Placements', 'Publication'] },
                  { k: 'TECHNOLOGY PARTNERS', t: 'Test it where it has to survive', b: 'Hyperscalers, model providers, and platform vendors use the unit to put early capability in front of enterprise conditions: governance, cost, and integration. Findings come back to you.', tags: ['Early access', 'Co-engineering'] },
                ].map((c) => (
                  <div key={c.k} style={{ flex: '0 0 min(440px, 86%)', scrollSnapAlign: 'start', background: '#fff', border: '1px solid rgba(0,0,0,0.06)', padding: '30px 28px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', color: ACCENT_DEEP, marginBottom: 18 }}>{c.k}</div>
                    <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: INK }}>{c.t}</h3>
                    <p style={{ margin: '0 0 20px', fontSize: 15, lineHeight: 1.65, color: INK2 }}>{c.b}</p>
                    <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {c.tags.map((t) => <span key={t} className='v22-cap-pill'>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 6, fontFamily: MONO, fontSize: 11, letterSpacing: '0.14em', color: 'rgba(13,27,62,0.45)' }}>SCROLL →</div>
            </div>
          </div>
        </div>
      </section>

      {/* §10 JOIN dRSTi — dark block */}
      <section id='careers' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Join dRSTi</span>
              <h2 className='v22-cdp-block-title'>For people who would rather <em>find out than assume</em></h2>
              <p className='v22-cdp-block-kicker'>Open to dbiz teams and external researchers.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <p style={{ margin: '0 0 36px', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.65)', maxWidth: '64ch' }}>The unit runs as a small core with fixed-term tours of duty. Engineers, designers, and data scientists inside dbiz can join a bet, do the work, and take the capability back to their team.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'clamp(14px,2vw,20px)' }}>
                {[
                  { t: 'Research & tech leads', b: 'Deep expertise in a target domain; drive discovery and technical feasibility.' },
                  { t: 'Venture & product leads', b: 'Own a bet end to end: the problem, the case, and the path to transfer.' },
                  { t: 'Engineers & prototypers', b: 'Build fast, disposable prototypes that test the riskiest assumption first.' },
                  { t: 'Designers & data scientists', b: 'Shape how people work with agents; mine signals and validate what the data supports.' },
                ].map((c) => (
                  <div key={c.t} style={{ background: NAVY, border: '1px solid rgba(255,255,255,0.1)', padding: '26px 24px' }}>
                    <h3 style={{ margin: '0 0 10px', fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>{c.t}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>{c.b}</p>
                  </div>
                ))}
              </div>
              <CareersTour />
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA — same element as the capability pages */}
      <section className='v22-cdp-cta' id='contact'>
        <div className='v22-container'>
          <div className='v22-cdp-cta-inner v22-cdp-cta-inner--solo'>
            <div className='v22-cdp-cta-end'>
              {/* Two-column close: pitch + actions left, audience paths right */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'center', textAlign: 'left' }}>
                <div>
                  <span className='v22-cdp-cta-num'>[Z·dRSTi] NEXT STEP</span>
                  <h2 className='v22-cdp-cta-title'>
                    Start with a question,<br />
                    <em>not a proposal.</em>
                  </h2>
                  <p style={{ margin: '0 0 36px', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: '54ch' }}>
                    Tell us what you have tried and where it stopped. If it is a question worth answering, we will tell you how we would test it.
                  </p>
                  <div className='v22-cdp-cta-actions'>
                    <Link href='/v22.5#cta' className='v22-cta-primary'>
                      Contact dRSTi <span className='arrow'>→</span>
                    </Link>
                    <Link href='/v22.5#cta' className='v22-cta-text'>Subscribe to research updates</Link>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(22px,3vw,32px)' }}>
                  {[
                    { t: 'Enterprises', b: 'Bring a problem your roadmap keeps deferring.' },
                    { t: 'Researchers', b: 'Propose a joint study, placement, or student project.' },
                    { t: 'dbiz teams', b: 'Put your name forward for the next tour of duty.' },
                  ].map((c) => (
                    <div key={c.t} style={{ borderLeft: '2px solid var(--v22-accent)', paddingLeft: 18 }}>
                      <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>{c.t}</h3>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>{c.b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
