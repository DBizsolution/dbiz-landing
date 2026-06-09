'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'
import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Phase = {
  key: 'inputs' | 'structure' | 'repository' | 'build' | 'output'
  marker: string
  eyebrow: string
  title: string
  body: ReactNode
  hot?: boolean
}

const ARROW_WIDTH = 28
const TRANSITION = '600ms cubic-bezier(.4,.1,.2,1)'

const boxBase: CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  border: '1px solid var(--d-hair-strong)',
  background: 'var(--d-surface-tint)',
  padding: '22px 22px',
  minHeight: 220,
  transition: `background-color ${TRANSITION}, border-color ${TRANSITION}, box-shadow ${TRANSITION}, opacity ${TRANSITION}, transform ${TRANSITION}, padding ${TRANSITION}, flex-basis ${TRANSITION}, max-width ${TRANSITION}`,
  flex: '1 1 0',
  minWidth: 0,
}

const boxHotStyle: CSSProperties = {
  borderColor: 'var(--d-orange-hair)',
  background: 'var(--d-accent-bg)',
  boxShadow: '0 18px 48px -22px rgba(232, 106, 42, 0.5)',
}

const headStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.82rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--d-ink-2)',
  marginBottom: 14,
  paddingBottom: 10,
  borderBottom: '1px dashed var(--d-hair-strong)',
}

const titleStyle: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 700,
  fontSize: '1.35rem',
  color: 'var(--d-ink)',
  marginBottom: 10,
  letterSpacing: '-0.01em',
}

const titleHotStyle: CSSProperties = {
  color: 'var(--d-accent)',
}

const descStyle: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1.05rem',
  color: 'var(--d-ink-2)',
  lineHeight: 1.5,
}

const subStrongStyle: CSSProperties = {
  display: 'block',
  color: 'var(--d-ink)',
  fontWeight: 600,
  fontSize: '1.1rem',
  marginBottom: 4,
}

const listStyle: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
}

const liStyle: CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1rem',
  lineHeight: 1.45,
  color: 'var(--d-ink-2)',
}

export function Slide11Pipeline({ meta }: { meta: SlideMeta }) {
  const [revealed, setRevealed] = useState(false)

  const phases: Phase[] = [
    {
      key: 'inputs',
      marker: 'P·01',
      eyebrow: 'Inputs',
      title: 'Raw inputs',
      body: (
        <ul style={listStyle}>
          <li style={liStyle}>BRDs</li>
          <li style={liStyle}>Journey maps</li>
          <li style={liStyle}>Process flows</li>
          <li style={liStyle}>Meeting notes</li>
          <li style={liStyle}>Whatever shape it arrives in</li>
        </ul>
      ),
    },
    {
      key: 'structure',
      marker: 'P·02',
      eyebrow: 'Structure',
      title: 'DBiz Canvas',
      hot: true,
      body: (
        <div>
          <strong style={subStrongStyle}>Intent model</strong>
          <ul style={listStyle}>
            <li style={liStyle}>Actors</li>
            <li style={liStyle}>Entities</li>
            <li style={liStyle}>Journeys</li>
            <li style={liStyle}>Rules</li>
            <li style={liStyle}>Open questions</li>
          </ul>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--d-ink-2)', margin: '10px 0 8px' }}>+</div>
          <strong style={subStrongStyle}>Artifacts for build</strong>
          <ul style={listStyle}>
            <li style={liStyle}>Back end</li>
            <li style={liStyle}>Front end</li>
            <li style={liStyle}>Design</li>
            <li style={liStyle}>Architecture</li>
          </ul>
        </div>
      ),
    },
    {
      key: 'repository',
      marker: 'P·03',
      eyebrow: 'Repository',
      title: 'Working repository',
      hot: true,
      body: (
        <div style={descStyle}>
          <strong style={subStrongStyle}>{revealed ? 'Canvas specs' : 'Specs'}</strong>
          <ul style={listStyle}>
            <li style={liStyle}>Markdown</li>
            <li style={liStyle}>JSON</li>
          </ul>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--d-ink-2)', margin: '10px 0 8px' }}>+</div>
          <strong style={subStrongStyle}>Design system specs</strong>
          <ul style={listStyle}>
            <li style={liStyle}>Tokens</li>
            <li style={liStyle}>Components</li>
            <li style={liStyle}>Registry</li>
          </ul>
        </div>
      ),
    },
    {
      key: 'build',
      marker: 'P·04',
      eyebrow: 'Build',
      title: 'AI-assisted build',
      body: (
        <ul style={listStyle}>
          <li style={liStyle}>Cursor</li>
          <li style={liStyle}>Claude Code</li>
          <li style={liStyle}>Codex</li>
          <li style={liStyle}>v0</li>
        </ul>
      ),
    },
    {
      key: 'output',
      marker: 'P·05',
      eyebrow: 'Output',
      title: 'Front-end screens',
      body: (
        <ul style={listStyle}>
          <li style={liStyle}>Spec-driven</li>
          <li style={liStyle}>Scalable</li>
          <li style={liStyle}>Regenerable</li>
        </ul>
      ),
    },
  ]

  return (
    <SlideShell meta={meta}>
      <div
        onClick={() => setRevealed(true)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          cursor: revealed ? 'default' : 'pointer',
        }}
      >
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 2 · The bigger picture
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            Where the canvas fits in <em>AI + SDLC.</em>
          </h1>
          <p className='deck-body-text' style={{ maxWidth: 1400 }}>
            {revealed ? (
              <>
                We add a <strong style={{ color: 'var(--d-ink)' }}>new phase between Inputs and Repository</strong>:
                a <strong style={{ color: 'var(--d-accent)' }}>Structure</strong> step that gives the AI something
                stable to build from.
              </>
            ) : (
              <>Today, building with AI looks like this — four stages from raw input to shipped screens.</>
            )}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {/* "Today's focus" indicator — aligned to span Structure → Repository.
              Same flex math as the lifecycle row below: 5 fr-units total + 4 arrow
              spacers, with the indicator cell taking 2 fr + 52px so it covers
              [structure] + [arrow] + [repository]. */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              opacity: revealed ? 1 : 0,
              transition: `opacity ${TRANSITION}`,
              minHeight: 22,
            }}
          >
            <span style={{ flex: '1 1 0' }} />
            <span style={{ flex: `0 0 ${ARROW_WIDTH + 24}px` }} />
            <span
              style={{
                flex: `2 1 ${ARROW_WIDTH + 24}px`,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                minWidth: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--d-accent)',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                Today&rsquo;s focus
              </span>
              <span
                style={{
                  flex: 1,
                  height: 1,
                  background: 'var(--d-accent)',
                }}
              />
            </span>
            <span style={{ flex: `0 0 ${ARROW_WIDTH + 24}px` }} />
            <span style={{ flex: '1 1 0' }} />
            <span style={{ flex: `0 0 ${ARROW_WIDTH + 24}px` }} />
            <span style={{ flex: '1 1 0' }} />
          </div>

          {/* Lifecycle row */}
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, width: '100%' }}>
            {phases.map((phase, i) => {
              const isStructure = phase.key === 'structure'
              const hidden = isStructure && !revealed
              const showHot = phase.hot && revealed

              const phaseBox: CSSProperties = {
                ...boxBase,
                ...(showHot ? boxHotStyle : null),
                opacity: hidden ? 0 : 1,
                flex: hidden ? '0 0 0' : '1 1 0',
                maxWidth: hidden ? 0 : '100%',
                padding: hidden ? 0 : boxBase.padding,
                marginRight: hidden ? -12 : 0,
                pointerEvents: hidden ? 'none' : 'auto',
                overflow: 'hidden',
              }

              // The arrow that *leads into* the structure box is hidden at rest.
              const showLeadingArrow = i > 0 && !(isStructure && !revealed)

              return (
                <div key={phase.key} style={{ display: 'contents' }}>
                  {i > 0 ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: '0 0 auto',
                        width: showLeadingArrow ? ARROW_WIDTH + 24 : 0,
                        opacity: showLeadingArrow ? 1 : 0,
                        color: showHot ? 'var(--d-accent)' : 'var(--d-ink-2)',
                        transition: `width ${TRANSITION}, opacity ${TRANSITION}, color ${TRANSITION}`,
                        overflow: 'hidden',
                      }}
                    >
                      <Icon icon='lucide:arrow-right' width={28} />
                    </div>
                  ) : null}
                  <div style={phaseBox}>
                    <div style={headStyle}>
                      <span
                        style={{
                          color: showHot ? 'var(--d-accent)' : 'var(--d-ink-2)',
                          fontWeight: showHot ? 600 : 500,
                          letterSpacing: showHot ? '0.18em' : '0.14em',
                        }}
                      >
                        {phase.eyebrow}
                      </span>
                      <span style={{ color: showHot ? 'var(--d-accent)' : 'var(--d-ink-2)' }}>{phase.marker}</span>
                    </div>
                    <div style={{ ...titleStyle, ...(showHot ? titleHotStyle : null) }}>{phase.title}</div>
                    <div style={descStyle}>{phase.body}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 16,
            minHeight: 24,
          }}
        >
          <div
            className='deck-mono'
            style={{
              opacity: revealed ? 1 : 0,
              color: 'var(--d-ink-2)',
              transition: `opacity ${TRANSITION}`,
            }}
          >
            ←  Greys are out of scope today  →
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: revealed ? 'var(--d-accent)' : 'var(--d-ink-3)',
              transition: `color ${TRANSITION}`,
            }}
          >
            {revealed ? 'The highlighted boxes drive the next 8 minutes' : 'Click to reveal what we add'}
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
