import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

const DEV_URL = 'https://vbsportal.dbizapps.ai/dev'

export function Slide27FlowsIndex({ meta }: { meta: SlideMeta }) {
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 04 · The handoff page
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One page in dev tools. <em>Engineer&apos;s first stop.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1300 }}>
            A single index inside the app. Every actor, every route, build
            status. Pinned to the canvas — so when the canvas changes, this is
            where the engineer sees it first.
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div className='deck-mono'>
            Engineer reads canvas → looks at design system → checks this list → builds the next page.
          </div>
          <a
            href={DEV_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='deck-mono-accent'
            style={{ fontSize: '0.72rem', textDecoration: 'none' }}
          >
            ↪ live demo: jump to /dev in the app
          </a>
        </div>
      </div>
    </SlideShell>
  )
}
