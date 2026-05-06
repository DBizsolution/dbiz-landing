'use client'

import { useState } from 'react'
import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide11Pipeline({ meta }: { meta: SlideMeta }) {
  const [revealed, setRevealed] = useState(false)

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
            Five stages from raw input to shipped screens. Today we&apos;re zooming
            in on the highlighted box — the canvas. Everything else exists;
            it&apos;s not what today is about.
          </p>
        </div>

        <div className='deck-pipeline' style={{ marginTop: 40 }}>
          <div className='deck-box deck-box-mute step'>
            <div className='deck-box-head'>
              <span>Inputs</span>
              <span className='k'>P·01</span>
            </div>
            <div className='ttl'>Raw inputs</div>
            <ul className='desc deck-pipeline-list'>
              <li>BRDs</li>
              <li>Journey maps</li>
              <li>Process flows</li>
              <li>Meeting notes</li>
              <li>Whatever shape it arrives in</li>
            </ul>
          </div>

          <div className='arrow'>
            <Icon icon='lucide:arrow-right' width={28} />
          </div>

          <div
            className={`deck-box step ${revealed ? 'deck-box-hot hot' : 'deck-box-mute'}`}
            style={{ transition: 'background-color 500ms ease, border-color 500ms ease, box-shadow 500ms ease' }}
          >
            <div className='deck-box-head'>
              <span style={{ color: revealed ? 'var(--d-accent)' : undefined, transition: 'color 500ms ease' }}>
                {revealed ? '· Today’s focus ·' : 'DBiz Canvas'}
              </span>
              <span className='k'>P·02</span>
            </div>
            <div className='ttl'>DBiz Canvas</div>
            <div className='desc'>
              <strong>Intent model</strong>
              <ul className='deck-pipeline-list'>
                <li>Actors</li>
                <li>Entities</li>
                <li>Journeys</li>
                <li>Rules</li>
                <li>Open questions</li>
              </ul>
              <div className='plus'>+</div>
              <strong>Artifacts for build</strong>
              <ul className='deck-pipeline-list'>
                <li>Back end</li>
                <li>Front end</li>
                <li>Design</li>
                <li>Architecture</li>
              </ul>
            </div>
          </div>

          <div className='arrow'>
            <Icon icon='lucide:arrow-right' width={28} />
          </div>

          <div className='deck-box deck-box-mute step'>
            <div className='deck-box-head'>
              <span>Repository</span>
              <span className='k'>P·03</span>
            </div>
            <div className='ttl'>Working repository</div>
            <div className='desc'>
              <div
                style={{
                  border: revealed ? '1px solid var(--d-orange-hair)' : '1px solid transparent',
                  background: revealed ? 'var(--d-accent-bg)' : 'transparent',
                  padding: '10px 12px',
                  margin: '-2px -2px 0',
                  transition: 'background-color 500ms ease, border-color 500ms ease',
                }}
              >
                <strong
                  style={{
                    color: revealed ? 'var(--d-accent)' : undefined,
                    transition: 'color 500ms ease',
                  }}
                >
                  Canvas specs
                </strong>
                <ul className='deck-pipeline-list'>
                  <li>Markdown</li>
                  <li>JSON</li>
                </ul>
              </div>
              <div className='plus'>+</div>
              <strong>Design system specs</strong>
              <ul className='deck-pipeline-list'>
                <li>Tokens</li>
                <li>Components</li>
                <li>Registry</li>
              </ul>
            </div>
          </div>

          <div className='arrow'>
            <Icon icon='lucide:arrow-right' width={28} />
          </div>

          <div className='deck-box deck-box-mute step'>
            <div className='deck-box-head'>
              <span>Build</span>
              <span className='k'>P·04</span>
            </div>
            <div className='ttl'>AI-assisted build</div>
            <ul className='desc deck-pipeline-list'>
              <li>Cursor</li>
              <li>Claude Code</li>
              <li>Codex</li>
              <li>v0</li>
            </ul>
          </div>

          <div className='arrow'>
            <Icon icon='lucide:arrow-right' width={28} />
          </div>

          <div className='deck-box deck-box-mute step'>
            <div className='deck-box-head'>
              <span>Output</span>
              <span className='k'>P·05</span>
            </div>
            <div className='ttl'>Front-end screens</div>
            <ul className='desc deck-pipeline-list'>
              <li>Spec-driven</li>
              <li>Scalable</li>
              <li>Regenerable</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 24,
            opacity: revealed ? 1 : 0,
            transition: 'opacity 500ms ease',
            pointerEvents: revealed ? 'auto' : 'none',
          }}
        >
          <div className='deck-mono'>
            ←  Greys are out of scope today  →
          </div>
          <div className='deck-mono-accent'>The highlighted box drives the next 8 minutes</div>
        </div>
      </div>
    </SlideShell>
  )
}
