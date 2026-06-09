export default function HowSection() {
  const phases = [
    {
      days: '5',
      title: 'Align & Assess',
      body: 'Leadership aligned on AI ambition. Architecture assessed. Readiness gaps surfaced. A costed roadmap and evidence to make investment decisions.',
      outcome: 'Board-aligned AI roadmap.',
    },
    {
      days: '15',
      title: 'Specify & Validate',
      body: 'System specification generated. Data foundations validated. Working system shipped and tested with real users in your environment.',
      outcome: 'Validated MVP in production.',
    },
    {
      days: '90',
      title: 'Industrialise & Scale',
      body: 'Enterprise-grade system live. Agents deployed. Data democratised. Operations handed to the team that built it.',
      outcome: 'Frontier Organisation operational.',
    },
  ]

  return (
    <section className='v14-section v14-how' id='how'>
      <div className='v14-container'>
        <div className='v14-section-head'>
          <div className='num'>N°06 / How we work</div>
          <h2>How we work. <em>Built for pace, not paperwork.</em></h2>
          <p className='lead'>Every engagement is time-boxed. Milestones are fixed. Ambiguity gets eliminated early.</p>
        </div>

        <div className='v14-how-grid'>
          {phases.map((phase, i) => (
            <div key={i} className='v14-how-card'>
              <div className='days'>{phase.days} <sub>days</sub></div>
              <div className='phase'>{phase.title}</div>
              <p>{phase.body}</p>
              <div className='outcome'>{phase.outcome}</div>
            </div>
          ))}
        </div>

        <div className='v14-how-note'>
          Timelines are benchmarks based on 50+ enterprise engagements. Scope varies by environment.
        </div>
      </div>
    </section>
  )
}
