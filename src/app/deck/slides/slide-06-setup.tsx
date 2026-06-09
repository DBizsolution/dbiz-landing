'use client'

import { useState } from 'react'
import { Icon } from '@/components/icon'
import { SlideShell, type SlideMeta } from '../slide-shell'

export function Slide06Setup({ meta }: { meta: SlideMeta }) {
  const [revealed, setRevealed] = useState(false)
  const [aiRevealed, setAiRevealed] = useState(false)
  return (
    <SlideShell meta={meta}>
      <style>{`.deck-body:has([data-slide="06"]) { padding-bottom: 0; }`}</style>
      <div data-slide='06' style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 40 }}>
        <div className='deck-stack-md'>
          <span className='deck-eyebrow'>
            <span className='bar' />
            Act 1 · The setup
          </span>
          <h1 className='deck-h1'>
            One BRD chunk. <em>One AI prompt.</em>
          </h1>
          <p className='deck-body-text'>
            Real text from a vehicle booking system BRD we built for a client.
            Pasted into an AI tool. Asked for the booking screen. Here&apos;s
            what came back.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 2fr) auto minmax(0, 3fr)',
            gap: 32,
            alignItems: 'stretch',
            flex: 1,
            minHeight: 0,
          }}
        >
          <div
            onClick={() => setRevealed((r) => !r)}
            className='deck-box'
            style={{ display: 'flex', flexDirection: 'column', minHeight: 0, padding: 0, cursor: 'pointer' }}
          >
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>BRD · Section 4.2</span>
              <span className='k'>IN · 01</span>
            </div>
            <div
              className='deck-mockup'
              style={{
                flex: 1,
                minHeight: 0,
                padding: 0,
                overflowY: 'auto',
                overflowX: 'hidden',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              <div style={{ position: 'relative', width: '100%' }}>
                <img
                  src='/deck/brd-snap1.png'
                  alt='VBS BRD section 4.2 — LSP Pickup Booking Journey'
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    opacity: revealed ? 0 : 1,
                    transition: 'opacity 350ms ease',
                  }}
                />
                <img
                  src='/deck/brd-snap2.png'
                  alt='VBS BRD section 4.2 — LSP Pickup Booking Journey, with the 13 HBL fields highlighted'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    opacity: revealed ? 1 : 0,
                    transition: 'opacity 350ms ease',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon='lucide:arrow-right' width={36} color='var(--d-accent)' />
          </div>

          <div
            onClick={() => setAiRevealed((r) => !r)}
            className='deck-box'
            style={{ display: 'flex', flexDirection: 'column', minHeight: 0, padding: 0, cursor: 'pointer' }}
          >
            <div className='deck-box-head' style={{ padding: '14px 18px 12px', margin: 0 }}>
              <span>AI output · v1</span>
              <span className='k'>OUT · 01</span>
            </div>
            <div
              className='deck-mockup'
              style={{
                flex: 1,
                minHeight: 0,
                padding: 0,
                overflowY: 'auto',
                overflowX: 'hidden',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              <div style={{ position: 'relative', width: '100%' }}>
                <img
                  src='/deck/vbs-ai-output.png'
                  alt='AI-generated VBS booking screen'
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    opacity: aiRevealed ? 0 : 1,
                    transition: 'opacity 350ms ease',
                  }}
                />
                <img
                  src='/deck/vbs-ai-output-highlighted.png'
                  alt='AI-generated VBS booking screen with the invented Consignor column highlighted'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    opacity: aiRevealed ? 1 : 0,
                    transition: 'opacity 350ms ease',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='deck-mono'>Watch what breaks. Three things, one at a time.</div>
      </div>
    </SlideShell>
  )
}
