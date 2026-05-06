'use client'

import { useState } from 'react'
import { SlideShell, type SlideMeta } from '../slide-shell'

type Field = { mark: string; name: string; type: string; req: boolean; choices?: string }

const fields: Field[] = [
  { mark: 'F·01', name: 'hbl_number', type: 'string', req: true },
  { mark: 'F·02', name: 'consignee', type: 'string', req: true },
  { mark: 'F·03', name: 'container_number', type: 'string', req: true },
  { mark: 'F·04', name: 'weight_kg', type: 'number', req: true },
  { mark: 'F·05', name: 'milestone', type: 'enum', req: true, choices: '5 stages' },
  { mark: 'F·06', name: 'hbl_status', type: 'enum', req: true, choices: '4 states' },
  { mark: 'F·07', name: 'do_waived', type: 'boolean', req: false, choices: 'derived' },
]

export function Slide24DataDictionary({ meta }: { meta: SlideMeta }) {
  const [annotated, setAnnotated] = useState(false)
  return (
    <SlideShell meta={meta}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 24 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Phase 02 · Data dictionary — three views, one source
          </span>
          <h1 className='deck-h1' style={{ maxWidth: 1500 }}>
            One field list. <em>Three views. No ambiguity.</em>
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 24,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Canonical (canvas) */}
          <div
            className='deck-box deck-box-hot'
            style={{ display: 'flex', flexDirection: 'column', padding: 24 }}
          >
            <div className='deck-box-head'>
              <span style={{ color: 'var(--d-accent)' }}>DBiz Canvas · canonical</span>
              <span className='k'>D · 01</span>
            </div>
            <div className='deck-mono' style={{ marginTop: 12, fontSize: '0.66rem' }}>
              Field list · structured TypeScript
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 0.7fr 0.5fr',
                gap: 0,
                marginTop: 14,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                color: 'var(--d-ink-3)',
                textTransform: 'uppercase',
                paddingBottom: 6,
                borderBottom: '1px dashed var(--d-orange-hair-soft)',
              }}
            >
              <span>mark</span>
              <span>field</span>
              <span>type</span>
              <span>req</span>
            </div>
            {fields.map((f) => (
              <div
                key={f.mark}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr 0.7fr 0.5fr',
                  gap: 0,
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--d-orange-hair-soft)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--d-ink)',
                }}
              >
                <span className='deck-mono-accent' style={{ fontSize: '0.58rem' }}>{f.mark}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>{f.name}</span>
                <span style={{ color: 'var(--d-ink-2)', fontSize: '0.78rem' }}>{f.type}</span>
                <span style={{ color: f.req ? 'var(--d-accent)' : 'var(--d-ink-3)', fontSize: '0.78rem' }}>{f.req ? 'yes' : 'no'}</span>
              </div>
            ))}
          </div>

          {/* Generated code · entity model */}
          <div className='deck-box' style={{ display: 'flex', flexDirection: 'column', padding: 0, minHeight: 0 }}>
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>Generated code · entity model</span>
              <span className='k'>D · 02</span>
            </div>
            <div
              className='deck-mockup'
              style={{
                flex: 1,
                minHeight: 0,
                padding: 0,
                overflow: 'hidden',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              <img
                src='/deck/data-dictionary.png'
                alt='Generated TypeScript entity model for HBL'
                style={{ height: '100%', width: 'auto', maxWidth: 'none', display: 'block' }}
              />
            </div>
          </div>

          {/* Live UI card — click to cycle annotated mapping */}
          <div
            onClick={() => setAnnotated((a) => !a)}
            className='deck-box deck-box-mute'
            style={{ display: 'flex', flexDirection: 'column', padding: 0, minHeight: 0, cursor: 'pointer' }}
          >
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Live UI · same fields
                <span
                  style={{
                    color: 'var(--d-accent)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  {annotated ? '← back' : 'click to map ↦'}
                </span>
              </span>
              <span className='k'>D · 03</span>
            </div>
            <div
              className='deck-mockup'
              style={{
                flex: 1,
                minHeight: 0,
                padding: 24,
                overflowY: 'auto',
                overflowX: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <img
                src='/deck/hbl-card.png'
                alt='HBL summary card rendered from the entity model'
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  opacity: annotated ? 0 : 1,
                  transition: 'opacity 350ms ease',
                }}
              />
              <img
                src='/deck/hbl-card-annotated.png'
                alt='HBL summary card with field-name annotations mapping each value back to the canonical model'
                style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  right: 24,
                  bottom: 24,
                  margin: 'auto',
                  width: 'calc(100% - 48px)',
                  height: 'auto',
                  display: 'block',
                  opacity: annotated ? 1 : 0,
                  transition: 'opacity 350ms ease',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
