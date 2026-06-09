import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide15Part1Collab({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 40, maxWidth: 1500 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · Use 1 of 2
          </span>
          <div className='deck-coord' style={{ fontSize: '1rem' }}>Collaboration — humans align on the spine</div>
        </div>

        <h1 className='deck-display'>
          Let me show you <em>the actual canvas.</em>
        </h1>

        <p className='deck-lede' style={{ maxWidth: 1300 }}>
          BA, designer, tech lead — all in the same doc. We add to it, argue in
          it, mark things approved or pending. The artifact matters, but
          editing it together is what keeps everyone aligned.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <span className='deck-tag'>Actors</span>
          <span className='deck-tag'>Entities</span>
          <span className='deck-tag'>Journeys</span>
          <span className='deck-tag'>Rules</span>
          <span className='deck-tag'>Open questions</span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            padding: '14px 22px',
            border: '1px solid var(--d-orange-hair)',
            background: 'var(--d-accent-bg)',
            color: 'var(--d-accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.86rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            alignSelf: 'flex-start',
            marginTop: 8,
          }}
        >
          <Icon icon='lucide:external-link' width={20} />
          Switching to the live canvas next
        </div>
      </div>
    </SlideShell>
  )
}
