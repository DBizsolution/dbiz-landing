/* Case study — Agentic AI-Powered Payment Experience (Visa VPP + VIC).
   Built on the V22.5 capability-detail design system (v22-cdp-* + brand
   tokens): sticky nav, breadcrumb, dark hero with schematic diagram, then
   alternating light/cream/dark blocks, closing CTA + pager. */

import Link from 'next/link'

/* ─── Agentic payment flow — schematic, dark-surface (white + orange on
   navy), matching the hero-diagram blueprint language. */
function PayFlowDiagram() {
  const ink = 'rgba(13,27,62,0.85)'
  const dim = 'rgba(13,27,62,0.4)'
  const faint = 'rgba(13,27,62,0.16)'
  const acc = 'var(--v22-accent)'
  const accDim = 'rgba(240,123,47,0.55)'

  const Node = ({ y, label, sub }: { y: number; label: string; sub: string }) => (
    <g>
      <rect x='70' y={y} width='320' height='52' fill='rgba(240,123,47,0.05)' stroke={acc} strokeWidth='1.2' />
      <text x='230' y={y + 24} textAnchor='middle' fontFamily='var(--font-sans)' fontSize='14' fontWeight='700' letterSpacing='-0.01em' fill={ink}>{label}</text>
      <text x='230' y={y + 41} textAnchor='middle' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.2' fill={dim}>{sub}</text>
    </g>
  )

  return (
    <svg viewBox='0 0 460 392' aria-hidden='true' className='v22-cdp-hero-diagram'>
      <defs>
        <pattern id='pay-dot' patternUnits='userSpaceOnUse' width='12' height='12'>
          <circle cx='1' cy='1' r='0.7' fill='rgba(255,255,255,0.06)' />
        </pattern>
      </defs>
      <rect x='8' y='8' width='444' height='376' fill='url(#pay-dot)' />
      <g stroke='rgba(255,255,255,0.18)' strokeWidth='0.8'>
        <line x1='8' y1='8' x2='28' y2='8' /><line x1='8' y1='8' x2='8' y2='28' />
        <line x1='452' y1='8' x2='432' y2='8' /><line x1='452' y1='8' x2='452' y2='28' />
        <line x1='8' y1='384' x2='28' y2='384' /><line x1='8' y1='384' x2='8' y2='364' />
        <line x1='452' y1='384' x2='432' y2='384' /><line x1='452' y1='384' x2='452' y2='364' />
      </g>
      <text x='20' y='28' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.5' fill={dim}>DWG · AGENTIC-PAY-01</text>
      <text x='440' y='28' textAnchor='end' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.5' fill={acc}>FLOW ↓</text>

      {/* Origin */}
      <rect x='160' y='46' width='140' height='30' fill='none' stroke={dim} strokeWidth='0.9' strokeDasharray='3 3' />
      <text x='230' y='65' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='9' fontWeight='700' letterSpacing='1.6' fill={ink}>AI AGENT</text>
      <line x1='230' y1='76' x2='230' y2='96' stroke={accDim} strokeWidth='1' strokeDasharray='3 3' />

      <Node y={96} label='Visa Payment Passkey' sub='REGISTER · RETRIEVE CREDENTIALS' />
      <line x1='230' y1='148' x2='230' y2='172' stroke={accDim} strokeWidth='1' strokeDasharray='3 3' />
      <text x='244' y='166' fontFamily='var(--font-mono)' fontSize='7.5' letterSpacing='1.2' fill={acc}>AUTHENTICATED ↓</text>

      <Node y={172} label='Visa Intelligent Commerce' sub='INITIATE · VALIDATE · COMPLETE' />
      <line x1='230' y1='224' x2='230' y2='248' stroke={accDim} strokeWidth='1' strokeDasharray='3 3' />
      <text x='244' y='242' fontFamily='var(--font-mono)' fontSize='7.5' letterSpacing='1.2' fill={acc}>GOVERNED TXN ↓</text>

      {/* Settled */}
      <rect x='70' y='248' width='320' height='46' fill='rgba(240,123,47,0.1)' stroke={acc} strokeWidth='1.4' />
      <circle cx='110' cy='271' r='12' fill='none' stroke={acc} strokeWidth='1.4' />
      <path d='M 104 271 L 109 276 L 117 266' stroke={acc} strokeWidth='1.8' fill='none' strokeLinecap='round' strokeLinejoin='round' />
      <text x='240' y='268' textAnchor='middle' fontFamily='var(--font-sans)' fontSize='13' fontWeight='700' fill={ink}>Transaction complete</text>
      <text x='240' y='283' textAnchor='middle' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.2' fill={dim}>SECURE · TRACEABLE</text>

      {/* Security underlay annotation */}
      <line x1='70' y1='316' x2='390' y2='316' stroke={faint} strokeWidth='0.8' strokeDasharray='2 3' />
      <text x='70' y='336' fontFamily='var(--font-mono)' fontSize='8' fontWeight='600' letterSpacing='1.4' fill={acc}>SECURED THROUGHOUT</text>
      <text x='70' y='352' fontFamily='var(--font-mono)' fontSize='8' letterSpacing='1.1' fill={dim}>PASSKEY AUTH · CRYPTOGRAPHIC CREDENTIAL PROTECTION</text>
    </svg>
  )
}

/* ─── Page data ─────────────────────────────────────────────────────────── */

const overview = [
  { label: 'Industry', value: 'Real Estate' },
  { label: 'Domain', value: 'Digital Payments & Intelligent Commerce' },
  { label: 'Solution', value: 'Agentic AI · Payment Automation · Intelligent Commerce' },
  { label: 'Core technologies', value: 'Visa Payment Passkey (VPP) · Visa Intelligent Commerce (VIC)' },
  { label: 'AI accelerator', value: 'Visa Intelligent Commerce (VIC)' },
]

const outcomes = [
  'Autonomous, AI-driven payment journeys — no human in the loop',
  'Passkey-based authentication that strips out checkout friction',
  'Stronger payment security and protected credentials',
  'A foundation for future intelligent-commerce experiences',
]

const stack = [
  { layer: 'Intelligent commerce', tech: 'Visa Intelligent Commerce (VIC)' },
  { layer: 'Payment authentication', tech: 'Visa Payment Passkey (VPP)' },
  { layer: 'AI capability', tech: 'Agentic AI' },
  { layer: 'Security', tech: 'Passkey-based authentication · Cryptographic credential protection' },
  { layer: 'Business function', tech: 'Autonomous payment orchestration' },
]

export default function AgenticPaymentsCaseStudy() {
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
          <Link href='/v22.5#work' className='v22-cdp-back'>
            <span aria-hidden='true'>←</span> Back to Our Work
          </Link>
          <span className='v22-cdp-crumb-sep' aria-hidden='true' />
          <span className='v22-cdp-crumb-num'>CASE STUDY · DIGITAL PAYMENTS</span>
        </div>
      </div>

      {/* HERO — full-bleed industry photo on the right, fading into navy */}
      <section className='v22-cdp-hero v22-csd-hero'>
        <div className='v22-csd-hero-bg' aria-hidden='true'>
          <img
            src='https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1400&fit=crop'
            alt=''
            loading='eager'
          />
          <span className='v22-csd-photo-cap'>FIG · AGENTIC PAYMENT EXPERIENCE</span>
        </div>
        <div className='v22-container'>
          <div className='v22-cdp-hero-grid'>
            <div className='v22-cdp-hero-meta'>
              <span className='v22-cdp-eyebrow'>Case Study · Real Estate</span>
              <h1 className='v22-cdp-title'>
                Agentic AI-Powered<br />
                <em>Payment Experience.</em>
              </h1>
              <p className='v22-cdp-subtitle'>Visa Intelligent Commerce · Visa Payment Passkey</p>
              <p className='v22-cdp-lead'>
                Traditional payment rails assume a human at the keyboard. We built a secure framework that lets authorised AI agents initiate, authenticate, and complete transactions end-to-end — passkey-protected, governed, and fully traceable.
              </p>
              <ul className='v22-csd-hero-tags' aria-label='Industry'>
                <li>Real Estate</li>
                <li>Digital Payments</li>
                <li>Agentic Commerce</li>
              </ul>
              <div className='v22-cdp-hero-actions'>
                <Link href='#solution' className='v22-cta-primary'>
                  See how it works <span className='arrow'>↓</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW — at-a-glance spec grid (light) */}
      <section id='overview' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Overview</span>
              <h2 className='v22-cdp-block-title'>At a glance</h2>
              <p className='v22-cdp-block-kicker'>What was built, on what, and why it matters.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <dl className='v22-csd-spec'>
                {overview.map((o) => (
                  <div key={o.label} className='v22-csd-spec-row'>
                    <dt>{o.label}</dt>
                    <dd>{o.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* KEY OUTCOMES — impact-forward, right after the overview (cream) */}
      <section id='outcomes-summary' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Impact</span>
              <h2 className='v22-cdp-block-title'>Key outcomes</h2>
              <p className='v22-cdp-block-kicker'>Where agentic AI moved from assist to act.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <ul className='v22-csd-outcomes'>
                {outcomes.map((o, i) => (
                  <li key={o}>
                    <span className='v22-csd-outcome-num'>{`0${i + 1}`}</span>
                    <span className='v22-csd-outcome-text'>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE — dark */}
      <section id='challenge' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>The challenge</span>
              <h2 className='v22-cdp-block-title'>Built for humans, <em>not agents.</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              <p>
                Payment systems were built for people — forms, clicks, manual authentication. None of it survives contact with an autonomous agent.
              </p>
              <p>
                The organisation needed a way for AI agents to transact securely across the purchasing journey: strong authentication, protected payment credentials, and minimal fraud exposure — without a person in the loop to approve each step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION — light, with the flow diagram */}
      <section id='solution' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>The solution</span>
              <h2 className='v22-cdp-block-title'>One secure, <em>agentic</em> payment flow.</h2>
              <p className='v22-cdp-block-kicker'>Visa Payment Passkey + Visa Intelligent Commerce, end to end.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <p>
                DBiz designed and implemented an agentic payment solution that combines <strong>Visa Payment Passkey</strong> and <strong>Visa Intelligent Commerce</strong> into a single, secure flow.
              </p>
              <div className='v22-csd-solution-visual'>
                <PayFlowDiagram />
              </div>
              <ol className='v22-csd-steps'>
                <li>
                  <span className='v22-csd-step-k'>Authenticate</span>
                  <p>Passkeys register and retrieve payment credentials with cryptographic protection — strong security, almost no friction.</p>
                </li>
                <li>
                  <span className='v22-csd-step-k'>Authorise</span>
                  <p>Through Visa Intelligent Commerce, authorised agents are cleared to act on the user&rsquo;s behalf within set guardrails.</p>
                </li>
                <li>
                  <span className='v22-csd-step-k'>Execute</span>
                  <p>The agent initiates, validates, and completes the transaction as one continuous workflow — secure, governed, and traceable.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE BAND — full-bleed industry photography */}
      <section className='v22-csd-feature' aria-label='Digital payments imagery'>
        <img
          src='https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1800&h=900&fit=crop'
          alt='Contactless digital payment'
          loading='lazy'
        />
        <div className='v22-csd-feature-overlay'>
          <div className='v22-container'>
            <span className='v22-csd-feature-kicker'>Intelligent commerce</span>
            <p className='v22-csd-feature-cap'>
              Payments that complete themselves — securely, on the buyer&rsquo;s behalf.
            </p>
          </div>
        </div>
      </section>

      {/* OUTCOMES NARRATIVE — cream */}
      <section id='outcomes' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>The result</span>
              <h2 className='v22-cdp-block-title'>Beyond assist — <em>agents that transact.</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              <p>
                The build proved agentic AI can move past information retrieval and decision support into secure transaction execution — with strong authentication and governance holding throughout.
              </p>
              <p>
                The organisation now has a foundation for future intelligent-commerce initiatives, and a clear path to lower-friction, more secure customer payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK — dark */}
      <section id='stack' className='v22-cdp-block v22-cdp-proof' data-surface='dark'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Under the hood</span>
              <h2 className='v22-cdp-block-title'>Technology stack</h2>
            </div>
            <div className='v22-cdp-block-body'>
              <table className='v22-csd-stack'>
                <thead>
                  <tr><th>Layer</th><th>Technology</th></tr>
                </thead>
                <tbody>
                  {stack.map((s) => (
                    <tr key={s.layer}>
                      <td>{s.layer}</td>
                      <td>{s.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY TOWERS — delivered-by strip, bottom of the story */}
      <section className='v22-csd-towers-strip' aria-label='Capabilities engaged'>
        <div className='v22-container'>
          <span className='v22-csd-towers-label'>Delivered across</span>
          <ul className='v22-csd-towers'>
            <li><Link href='/v22.5/capabilities/engineered-with-ai'>Product &amp; AI Engineering</Link></li>
            <li><Link href='/v22.5/capabilities/connected-systems'>Connected Systems</Link></li>
            <li><Link href='/v22.5/capabilities/intelligence-layer'>Data &amp; AI</Link></li>
          </ul>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className='v22-cdp-cta'>
        <div className='v22-container'>
          <div className='v22-cdp-cta-inner v22-cdp-cta-inner--solo'>
            <div className='v22-cdp-cta-end'>
              <span className='v22-cdp-cta-num'>[Z] NEXT STEP</span>
              <h2 className='v22-cdp-cta-title'>
                Your agents can decide.<br />
                <em>Now let them pay.</em>
              </h2>
              <div className='v22-cdp-cta-actions'>
                <Link href='/v22.5#cta' className='v22-cta-primary'>
                  Build agentic commerce <span className='arrow'>→</span>
                </Link>
                <Link href='/v22.5#cta' className='v22-cta-text'>Talk to our team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pager */}
      <nav className='v22-cdp-pager' aria-label='Case study pager'>
        <div className='v22-container'>
          <div className='v22-cdp-pager-grid'>
            <Link href='/v22.5#work' className='v22-cdp-pager-link prev'>
              <span className='v22-cdp-pager-arrow' aria-hidden='true'>←</span>
              <span className='v22-cdp-pager-meta'>
                <span className='v22-cdp-pager-num'>ALL WORK</span>
                <span className='v22-cdp-pager-label'>Back to case studies</span>
              </span>
            </Link>
            <Link href='/v22.5/capabilities/connected-systems' className='v22-cdp-pager-link next'>
              <span className='v22-cdp-pager-meta'>
                <span className='v22-cdp-pager-num'>RELATED · ORCHESTRATION</span>
                <span className='v22-cdp-pager-label'>Connected Systems, Not Silos</span>
              </span>
              <span className='v22-cdp-pager-arrow' aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}
