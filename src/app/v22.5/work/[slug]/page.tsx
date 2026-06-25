/* Case-study detail template — renders any entry from case-studies-data.ts on
   the V22.5 design system: full-bleed image hero, overview spec, key outcomes,
   challenge, solution (+ capabilities), result, tech stack, capability-tower
   links, CTA, pager. (Aldar / agentic-payments has its own bespoke page.) */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies, caseStudyBySlug } from '../case-studies-data'

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudyBySlug(slug)
  if (!cs) notFound()

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
          <span className='v22-cdp-crumb-num'>CASE STUDY · {cs.industry.toUpperCase()}</span>
        </div>
      </div>

      {/* HERO — full-bleed image, dark overlay carries the text */}
      <section className='v22-cdp-hero v22-csd-hero'>
        <div className='v22-csd-hero-bg' aria-hidden='true'>
          <img src={cs.heroImage} alt='' loading='eager' />
          <span className='v22-csd-photo-cap'>FIG · {cs.industry.toUpperCase()}</span>
        </div>
        <div className='v22-container'>
          <div className='v22-cdp-hero-grid'>
            <div className='v22-cdp-hero-meta'>
              <span className='v22-cdp-eyebrow'>Case Study · {cs.industry}</span>
              <h1 className='v22-cdp-title'>
                {cs.heroTitle}<br />
                <em>{cs.heroAccent}</em>
              </h1>
              <p className='v22-cdp-subtitle'>{cs.subtitle}</p>
              <p className='v22-cdp-lead'>{cs.lead}</p>
              <ul className='v22-csd-hero-tags' aria-label='Industry'>
                {cs.industryTags.map((t) => <li key={t}>{t}</li>)}
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

      {/* OVERVIEW */}
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
                {cs.overview.map((o) => (
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

      {/* KEY OUTCOMES — impact-forward (cream) */}
      <section id='outcomes-summary' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>Impact</span>
              <h2 className='v22-cdp-block-title'>Key outcomes</h2>
              <p className='v22-cdp-block-kicker'>Measured where it counts.</p>
            </div>
            <div className='v22-cdp-block-body'>
              <ul className='v22-csd-outcomes'>
                {cs.keyOutcomes.map((o, i) => (
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
              <h2 className='v22-cdp-block-title'>{cs.challengeTitleLead} <em>{cs.challengeAccent}</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              {cs.challenge.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION — light */}
      <section id='solution' className='v22-cdp-block' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>The solution</span>
              <h2 className='v22-cdp-block-title'>{cs.solutionTitleLead} <em>{cs.solutionAccent}</em></h2>
              <p className='v22-cdp-block-kicker'>{cs.solutionKicker}</p>
            </div>
            <div className='v22-cdp-block-body'>
              {cs.solution.map((p, i) => <p key={i}>{p}</p>)}
              {cs.capabilities && (
                <ul className='v22-csd-caps'>
                  {cs.capabilities.map((c) => <li key={c}>{c}</li>)}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RESULT — cream */}
      <section id='outcomes' className='v22-cdp-block v22-cdp-block--alt' data-surface='light'>
        <div className='v22-container'>
          <div className='v22-cdp-block-grid'>
            <div className='v22-cdp-block-head'>
              <span className='v22-cdp-block-num'>The result</span>
              <h2 className='v22-cdp-block-title'>{cs.resultTitleLead} <em>{cs.resultAccent}</em></h2>
            </div>
            <div className='v22-cdp-block-body'>
              {cs.outcomes.map((p, i) => <p key={i}>{p}</p>)}
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
                <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
                <tbody>
                  {cs.stack.map((s) => (
                    <tr key={s.layer}><td>{s.layer}</td><td>{s.tech}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY TOWERS — linked to the capabilities they were delivered under */}
      <section className='v22-csd-towers-strip' aria-label='Capabilities engaged'>
        <div className='v22-container'>
          <span className='v22-csd-towers-label'>Delivered across</span>
          <ul className='v22-csd-towers'>
            {cs.capTags.map((t) => (
              <li key={t.slug}>
                <Link href={`/v22.5/capabilities/${t.slug}`}>{t.label}</Link>
              </li>
            ))}
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
                Have a problem like this?<br />
                <em>Let&rsquo;s build the answer.</em>
              </h2>
              <div className='v22-cdp-cta-actions'>
                <Link href='/v22.5#cta' className='v22-cta-primary'>
                  Talk to our team <span className='arrow'>→</span>
                </Link>
                <Link href='/v22.5#work' className='v22-cta-text'>See more work</Link>
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
