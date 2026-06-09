import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const DEV_URL = 'https://vbsportal.dbizapps.ai/dev'

export function Slide27FlowsIndex({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span className='deck-eyebrow'>
              <span className='bar' />
              Phase 04b · Flows index
            </span>
            <LiveDemoCue label='Demo live · skip in deck' />
          </div>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One page in dev tools. <em>Engineer&apos;s first stop.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            Every actor, every route, build status — pinned to the canvas. Show
            this live in the app rather than in the deck.
          </p>
        </div>

        <div className='deck-box' style={{ flex: 1, minHeight: 0, padding: 0, display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
          <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              /dev · live in the app
              <a
                href={DEV_URL}
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
            <span className='k'>FIG · 27</span>
          </div>
          <a
            href={DEV_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='deck-mockup'
            style={{
              flex: 1,
              minHeight: 0,
              padding: 0,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              cursor: 'pointer',
              textDecoration: 'none',
              background: '#ffffff',
            }}
          >
            <img
              src='/deck/dev-tools.png'
              alt='VBS Portal /dev — Portal Flows, Intent Model Coverage, Component Showcase'
              style={{ height: '100%', width: 'auto', maxWidth: 'none', display: 'block' }}
            />
          </a>
        </div>

        <div className='deck-mono'>
          Engineer reads canvas → looks at design system → checks this list → builds the next page.
        </div>
      </div>
    </SlideShell>
  )
}

function LiveDemoCue({ label }: { label: string }) {
  return (
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
      {label}
    </span>
  )
}
