import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide11Pipeline({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · The bigger picture
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Where the canvas <em>fits.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1400 }}>
            Five stages from raw input to shipped screens. Today we&apos;re zooming in
            on the highlighted boxes — the canvas and the canvas specs in the
            working repository. Everything else exists; it&apos;s not what today is
            about.
          </p>
        </div>

        <div className='deck-pipeline' style={{ marginTop: 40 }}>
          <div className='deck-box deck-box-mute step'>
            <div className='deck-box-head'>
              <span>Inputs</span>
              <span className='k'>P·01</span>
            </div>
            <div className='ttl'>Raw inputs</div>
            <div className='desc'>
              BRDs · journey maps · process flows · meeting notes · whatever
              shape it arrives in
            </div>
          </div>

          <div className='arrow'>
            <Icon icon='ph:arrow-right-bold' width={28} />
          </div>

          <div className='deck-box deck-box-hot step hot'>
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>· Today&apos;s focus ·</span>
              <span className='k'>P·02</span>
            </div>
            <div className='ttl'>DBiz Canvas</div>
            <div className='desc'>
              <strong>Intent model</strong> (collaboration: actors, entities,
              journeys, rules, open questions)
              <br />+
              <br />
              <strong>Artifacts for build</strong> (back end · front end ·
              design · architecture)
            </div>
          </div>

          <div className='arrow'>
            <Icon icon='ph:arrow-right-bold' width={28} />
          </div>

          <div className='deck-box deck-box-hot step hot'>
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>· Today&apos;s focus ·</span>
              <span className='k'>P·03</span>
            </div>
            <div className='ttl'>Working repository</div>
            <div className='desc'>
              <strong>Canvas specs</strong> (markdown · JSON)
              <br />+
              <br />
              <strong>Design system specs</strong> (tokens · components ·
              registry)
            </div>
          </div>

          <div className='arrow'>
            <Icon icon='ph:arrow-right-bold' width={28} />
          </div>

          <div className='deck-box deck-box-mute step'>
            <div className='deck-box-head'>
              <span>Build</span>
              <span className='k'>P·04</span>
            </div>
            <div className='ttl'>AI-assisted build</div>
            <div className='desc'>Cursor · Claude · Lovable · whatever you reach for</div>
          </div>

          <div className='arrow'>
            <Icon icon='ph:arrow-right-bold' width={28} />
          </div>

          <div className='deck-box deck-box-mute step'>
            <div className='deck-box-head'>
              <span>Output</span>
              <span className='k'>P·05</span>
            </div>
            <div className='ttl'>Front-end screens</div>
            <div className='desc'>Spec-driven · scalable · regenerable</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
          <div className='deck-mono'>
            ←  Greys are out of scope today  →
          </div>
          <div className='deck-mono-accent'>Highlighted boxes drive the next 8 minutes</div>
        </div>
      </div>
    </SlideShell>
  )
}
