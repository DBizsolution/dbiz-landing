import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const COVERAGE_URL = 'https://vbsportal.dbizapps.ai/dev/drift'

export function Slide28Coverage({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span className='deck-eyebrow'>
              <span className='bar' />
              Phase 04c · Coverage tracker
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '4px 10px',
                border: '1px solid var(--d-orange-hair)',
                background: 'var(--d-accent-bg)',
                color: 'var(--d-accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              <Icon icon='lucide:external-link' width={12} />
              Demo live · skip in deck
            </span>
          </div>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            What the canvas requires <em>vs. what the app actually has.</em>
          </h1>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 0, display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
          <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              /dev/drift · live in the app
              <a
                href={COVERAGE_URL}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  color: 'var(--d-accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                open
                <Icon icon='lucide:arrow-up-right' width={11} />
              </a>
            </span>
            <span className='k'>FIG · 28</span>
          </div>
          <a
            href={COVERAGE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='deck-mockup'
            style={{
              flex: 1,
              minHeight: 0,
              padding: 0,
              overflow: 'auto',
              alignItems: 'flex-start',
              justifyContent: 'center',
              display: 'flex',
              cursor: 'pointer',
              textDecoration: 'none',
              background: '#ffffff',
            }}
          >
            <img
              src='/deck/coverage.png'
              alt='VBS Portal /dev/coverage — Intent Model Coverage with field and rule verification'
              style={{ height: '150%', width: 'auto', maxWidth: 'none', display: 'block' }}
            />
          </a>
        </div>

        <div className='deck-mono'>
          Built · missing — visible at a glance, every day, for everyone.
        </div>
      </div>
    </SlideShell>
  )
}
