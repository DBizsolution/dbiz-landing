'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Icon } from '@/components/icon'

type Swatch = {
  name: string
  varName: string
  value: string
  onDark?: boolean
  note?: string
}

const navy: Swatch[] = [
  { name: 'Navy', varName: '--brand-navy', value: '#0D1B3E', onDark: true, note: 'Primary brand, nav, CTAs' },
  { name: 'Navy Deep', varName: '--brand-navy-deep', value: '#070F22', onDark: true, note: 'Dark sections, slide bg' },
  { name: 'Navy Light', varName: '--brand-navy-light', value: '#1A2D5A', onDark: true, note: 'Hover, secondary surfaces' },
]

const orange: Swatch[] = [
  { name: 'Orange', varName: '--brand-orange', value: '#F07B2F', onDark: true, note: 'All CTAs, highlights, accents' },
  { name: 'Orange Hover', varName: '--brand-orange-hover', value: '#E06B1F', onDark: true, note: 'Interactive hover' },
  { name: 'Orange Glow', varName: '--brand-orange-glow', value: 'rgba(240,123,47,0.1)', note: 'Soft fills, badge bg' },
]

const surfacesLight: Swatch[] = [
  { name: 'BG', varName: '--brand-bg', value: '#FAFAFA', note: 'Page / slide background' },
  { name: 'BG Card', varName: '--brand-bg-card', value: '#FFFFFF', note: 'Cards, elevated surfaces' },
  { name: 'BG Warm', varName: '--brand-bg-warm', value: '#F3F0EC', note: 'Warm alternate section' },
]

const surfacesDark: Swatch[] = [
  { name: 'BG', varName: '--brand-bg', value: '#070F22', onDark: true, note: 'Dark page background' },
  { name: 'BG Card', varName: '--brand-bg-card', value: '#0D1B3E', onDark: true, note: 'Dark cards' },
  { name: 'BG Warm', varName: '--brand-bg-warm', value: '#1A2D5A', onDark: true, note: 'Dark warm surface' },
]

const text: Swatch[] = [
  { name: 'Text', varName: '--brand-text', value: '#111111', onDark: true, note: 'Primary text (light mode)' },
  { name: 'Text 2', varName: '--brand-text-2', value: '#555555', onDark: true, note: 'Body, secondary' },
  { name: 'Text 3', varName: '--brand-text-3', value: '#999999', note: 'Muted, captions' },
]

const borders: Swatch[] = [
  { name: 'Border', varName: '--brand-border', value: 'rgba(0,0,0,0.06)', note: 'Default border (light)' },
  { name: 'Border Hover', varName: '--brand-border-hover', value: 'rgba(0,0,0,0.12)', note: 'Hover border' },
  { name: 'Radius', varName: '--brand-r', value: '16px', note: 'Card radius · sm 10 · lg 24' },
]

type Specimen = { role: string; spec: string; cls: string; sample: string }

const specimens: Specimen[] = [
  { role: 'Display / H1', spec: 'DM Sans 800 · clamp(2.6rem, 5vw, 4.5rem) · -0.035em', cls: 'ds-t-display', sample: 'Agent-operated.' },
  { role: 'H2', spec: 'DM Sans 800 · clamp(1.7rem, 3vw, 2.5rem) · -0.03em', cls: 'ds-t-h2', sample: 'How we do it' },
  { role: 'H3', spec: 'DM Sans 700 · 1.35rem · -0.02em', cls: 'ds-t-h3', sample: 'Connected Systems' },
  { role: 'Body', spec: 'DM Sans 400 · 1.05rem · 1.65', cls: 'ds-t-body', sample: 'We build Frontier Organisations — enterprises that scale with AI agents, not just AI tools.' },
  { role: 'Label / kicker', spec: 'DM Mono 500 · 0.76rem · 0.14em · uppercase · orange', cls: 'ds-t-label', sample: 'Human-Led · Agent-Operated' },
  { role: 'Caption', spec: 'DM Mono 400 · 0.68rem · 0.1em', cls: 'ds-t-caption', sample: 'FIG. 01 — FRONTIER ORGANISATION STACK' },
]

const slideScale = [
  ['Slide H1', 'DM Sans 800', '80–90px'],
  ['Slide H2', 'DM Sans 800', '60–68px'],
  ['Lede / intro', 'DM Sans 400–500', '38–42px / 1.5'],
  ['Body', 'DM Sans 400', '24–28px / 1.5'],
  ['Stat value', 'DM Sans 800', '56–72px'],
  ['Stat label', 'DM Sans 400', '22–28px'],
  ['Kicker / footer', 'DM Mono 500', '12–14px · uppercase'],
]

const tokenBlock = `:root {
  /* Navy — primary anchor */
  --brand-navy: #0D1B3E;
  --brand-navy-deep: #070F22;
  --brand-navy-light: #1A2D5A;

  /* Orange — accent (all CTAs) */
  --brand-orange: #F07B2F;
  --brand-orange-hover: #E06B1F;
  --brand-orange-glow: rgba(240,123,47,0.1);

  /* Surfaces */
  --brand-bg: #FAFAFA;
  --brand-bg-card: #FFFFFF;
  --brand-bg-warm: #F3F0EC;

  /* Text */
  --brand-text: #111111;
  --brand-text-2: #555555;
  --brand-text-3: #999999;

  /* Borders */
  --brand-border: rgba(0,0,0,0.06);
  --brand-border-hover: rgba(0,0,0,0.12);

  /* Radii */
  --brand-r-sm: 10px;
  --brand-r: 16px;
  --brand-r-lg: 24px;

  /* Type — two families, no serif */
  --font-sans: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
}

[data-theme='dark'] {
  --brand-bg: #070F22;
  --brand-bg-card: #0D1B3E;
  --brand-bg-warm: #1A2D5A;
  --brand-border: rgba(255,255,255,0.08);
  --brand-border-hover: rgba(255,255,255,0.16);
  --brand-text: #FFFFFF;
  --brand-text-2: rgba(255,255,255,0.6);
  --brand-text-3: rgba(255,255,255,0.35);
}`

const css = `
.ds-scope { background: var(--brand-bg); color: var(--brand-text); transition: background 0.25s ease, color 0.25s ease; min-height: 100vh; }
.ds-wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px 140px; }
.ds-kicker { font: 500 0.74rem var(--font-mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--brand-orange); }
.ds-h2 { margin: 84px 0 6px; font: 800 1.7rem/1.15 var(--font-sans); letter-spacing: -0.025em; }
.ds-note { margin: 0 0 22px; max-width: 78ch; color: var(--brand-text-2); font: 400 0.96rem/1.6 var(--font-sans); }
.ds-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(208px, 1fr)); gap: 14px; margin-top: 8px; }
.ds-sw { border: 1px solid var(--brand-border); border-radius: var(--brand-r); overflow: hidden; background: var(--brand-bg-card); transition: border-color 0.15s, transform 0.15s; }
.ds-sw:hover { border-color: var(--brand-border-hover); transform: translateY(-2px); }
.ds-chip { height: 96px; display: flex; align-items: flex-end; padding: 12px; cursor: pointer; }
.ds-chip .hint { font: 600 0.62rem var(--font-mono); letter-spacing: 0.08em; text-transform: uppercase; opacity: 0; transition: opacity 0.15s; }
.ds-chip:hover .hint { opacity: 0.85; }
.ds-swbody { padding: 12px 14px 14px; }
.ds-swname { font: 600 0.9rem var(--font-sans); }
.ds-swvar { margin-top: 4px; font: 400 0.66rem var(--font-mono); color: var(--brand-text-3); word-break: break-all; }
.ds-swval { margin-top: 2px; font: 400 0.66rem var(--font-mono); color: var(--brand-text-2); }
.ds-swnote { margin-top: 8px; font: 400 0.76rem/1.4 var(--font-sans); color: var(--brand-text-2); }

.ds-spec { display: grid; grid-template-columns: 200px 1fr; gap: 0; background: var(--brand-bg-card); border: 1px solid var(--brand-border); border-radius: var(--brand-r); overflow: hidden; margin-top: 12px; }
.ds-spec .role { padding: 18px 20px; border-right: 1px solid var(--brand-border); background: var(--brand-bg-warm); }
.ds-spec .rname { font: 700 0.9rem var(--font-sans); }
.ds-spec .rspec { margin-top: 6px; font: 400 0.66rem/1.5 var(--font-mono); color: var(--brand-text-2); }
.ds-spec .sample { padding: 22px 24px; display: flex; align-items: center; min-width: 0; overflow-x: auto; }
.ds-t-display { font: 800 clamp(2.6rem, 5vw, 4.5rem)/1.06 var(--font-sans); letter-spacing: -0.035em; }
.ds-t-h2 { font: 800 clamp(1.7rem, 3vw, 2.5rem)/1.1 var(--font-sans); letter-spacing: -0.03em; }
.ds-t-h3 { font: 700 1.35rem/1.2 var(--font-sans); letter-spacing: -0.02em; }
.ds-t-body { font: 400 1.05rem/1.65 var(--font-sans); color: var(--brand-text-2); }
.ds-t-label { font: 500 0.76rem var(--font-mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--brand-orange); }
.ds-t-caption { font: 400 0.68rem var(--font-mono); letter-spacing: 0.1em; color: var(--brand-text-3); }

.ds-row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; margin-top: 14px; }
.ds-card { background: var(--brand-bg-card); border: 1px solid var(--brand-border); border-radius: var(--brand-r); padding: 26px 22px; max-width: 280px; transition: border-color 0.15s, transform 0.15s; }
.ds-card:hover { border-color: var(--brand-border-hover); transform: translateY(-2px); }
.ds-card-dark { background: var(--brand-navy); border: 1px solid var(--brand-navy-light); border-radius: var(--brand-r); padding: 26px 22px; max-width: 280px; color: #fff; }

.ds-table { width: 100%; border-collapse: collapse; margin-top: 12px; }
.ds-table td, .ds-table th { padding: 9px 14px 9px 0; border-bottom: 1px solid var(--brand-border); text-align: left; vertical-align: top; font: 400 0.9rem var(--font-sans); }
.ds-table th { font: 500 0.7rem var(--font-mono); letter-spacing: 0.1em; text-transform: uppercase; color: var(--brand-text-3); }
.ds-table .mono { font: 400 0.82rem var(--font-mono); color: var(--brand-text-2); white-space: nowrap; }

.ds-pre { margin: 12px 0 0; overflow-x: auto; background: var(--brand-navy-deep); color: #E8ECF5; border-radius: var(--brand-r-sm); padding: 18px 20px; font: 400 0.78rem/1.6 var(--font-mono); }

.ds-slide { position: relative; aspect-ratio: 4 / 5; border-radius: var(--brand-r); overflow: hidden; padding: 36px; display: flex; flex-direction: column; justify-content: flex-end; color: #fff; background: #070F22 radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0); background-size: 22px 22px; border: 1px solid var(--brand-navy-light); max-width: 340px; }
.ds-slide .skick { font: 500 0.7rem var(--font-mono); letter-spacing: 0.14em; text-transform: uppercase; color: var(--brand-orange); }
.ds-slide .shead { margin-top: 10px; font: 800 2rem/1.1 var(--font-sans); letter-spacing: -0.03em; }
.ds-slide .ssub { margin-top: 12px; font: 400 0.98rem/1.5 var(--font-sans); color: rgba(255,255,255,0.6); }
.ds-slide .sfoot { position: absolute; top: 28px; left: 36px; right: 36px; display: flex; justify-content: space-between; font: 500 0.62rem var(--font-mono); letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }

.ds-banner { margin-top: 22px; border: 1px solid rgba(240,123,47,0.3); background: var(--brand-orange-glow); border-radius: var(--brand-r); padding: 22px 24px; }
.ds-banner .bt { font: 800 1.05rem var(--font-sans); letter-spacing: -0.01em; color: var(--brand-text); }
.ds-banner .bb { margin-top: 8px; font: 400 0.95rem/1.6 var(--font-sans); color: var(--brand-text-2); max-width: 80ch; }
.ds-banner .bb b { color: var(--brand-orange); }
`

function Swatches({ items, onCopy }: { items: Swatch[]; onCopy: (value: string) => void }) {
  return (
    <div className='ds-grid'>
      {items.map((s) => (
        <div key={s.name + s.value} className='ds-sw'>
          <div
            className='ds-chip'
            style={{ background: `var(${s.varName})`, color: s.onDark ? '#fff' : 'var(--brand-text)' }}
            onClick={() => onCopy(s.value)}
          >
            <span className='hint'>Click to copy</span>
          </div>
          <div className='ds-swbody'>
            <div className='ds-swname'>{s.name}</div>
            <div className='ds-swvar'>{s.varName}</div>
            <div className='ds-swval'>{s.value}</div>
            {s.note ? <div className='ds-swnote'>{s.note}</div> : null}
          </div>
        </div>
      ))}
    </div>
  )
}

function Group({ title, items, onCopy }: { title: string; items: Swatch[]; onCopy: (value: string) => void }) {
  return (
    <div style={{ marginTop: 24 }}>
      <h3 style={{ margin: '0 0 12px', font: '700 1rem var(--font-sans)' }}>{title}</h3>
      <Swatches items={items} onCopy={onCopy} />
    </div>
  )
}

export default function DesignSystemPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (value: string) => {
    navigator.clipboard?.writeText(value)
    setCopied(value)
    setTimeout(() => setCopied(null), 1400)
  }

  return (
    <div className='ds-scope' data-theme={theme === 'dark' ? 'dark' : undefined}>
      <style>{css}</style>
      <div className='ds-wrap'>
        <header style={{ padding: '64px 0 28px', borderBottom: '2px solid var(--brand-navy)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div className='ds-kicker'>DBiz.ai · Design System</div>
              <h1 style={{ margin: '10px 0 8px', font: '800 2.5rem/1.05 var(--font-sans)', letterSpacing: '-0.035em' }}>
                One brand. Two fonts. No serif.
              </h1>
              <p style={{ margin: 0, maxWidth: '64ch', color: 'var(--brand-text-2)', font: '400 1rem/1.6 var(--font-sans)' }}>
                The live, shareable reference for color, type, components, and decks — rendered from the same{' '}
                tokens the site ships. Pair with <code style={{ font: '0.85em var(--font-mono)' }}>DESIGN-SYSTEM.md</code>.
              </p>
            </div>
            <button
              onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--brand-navy)', color: '#fff', border: 'none',
                borderRadius: 100, padding: '10px 18px', cursor: 'pointer',
                font: '600 0.82rem var(--font-sans)', whiteSpace: 'nowrap',
              }}
            >
              <Icon icon={theme === 'light' ? 'ph:moon' : 'ph:sun'} width={16} />
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </button>
          </div>
          <div style={{ marginTop: 18, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href='/styleguide' style={{ font: '500 0.8rem var(--font-mono)', color: 'var(--brand-text-2)', textDecoration: 'none', borderBottom: '1px solid var(--brand-border)' }}>
              /styleguide
            </Link>
            <a href='/pages-and-assets.html' style={{ font: '500 0.8rem var(--font-mono)', color: 'var(--brand-text-2)', textDecoration: 'none', borderBottom: '1px solid var(--brand-border)' }}>
              pages-and-assets.html
            </a>
            {copied ? (
              <span style={{ font: '500 0.8rem var(--font-mono)', color: 'var(--brand-orange)' }}>Copied {copied}</span>
            ) : null}
          </div>
        </header>

        {/* THE RULE */}
        <div className='ds-banner'>
          <div className='bt'>Two fonts. No serif. Ever.</div>
          <p className='bb'>
            DM Sans for everything, DM Mono for technical accents. <b>Never add, load, or mix a serif</b> (Instrument
            Serif is retired) and never introduce a third typeface. Emphasis comes from weight, size, color, and case —
            not from a different font.
          </p>
        </div>

        {/* COLOR */}
        <h2 className='ds-h2'>Color</h2>
        <p className='ds-note'>
          Navy anchors, orange accents — both are brand-constant and never recolor per theme. Surfaces, text, and
          borders flip between modes (toggle above). Click any chip to copy its value. The live orange is{' '}
          <code style={{ font: '0.85em var(--font-mono)' }}>#F07B2F</code>; older <code style={{ font: '0.85em var(--font-mono)' }}>#E86A2A</code> is retired.
        </p>
        <Group title='Navy — primary anchor' items={navy} onCopy={copy} />
        <Group title='Orange — accent' items={orange} onCopy={copy} />
        <Group title='Surfaces — light mode' items={surfacesLight} onCopy={copy} />
        <Group title='Surfaces — dark mode' items={surfacesDark} onCopy={copy} />
        <Group title='Text' items={text} onCopy={copy} />
        <Group title='Borders & radii' items={borders} onCopy={copy} />

        {/* TYPOGRAPHY */}
        <h2 className='ds-h2'>Typography</h2>
        <p className='ds-note'>
          Two families, referenced through CSS variables — never hard-code a family. DM Sans is everything by default;
          DM Mono is labels, kickers, metadata, and stats. There is no serif and no third family.
        </p>
        {specimens.map((s) => (
          <div key={s.role} className='ds-spec'>
            <div className='role'>
              <div className='rname'>{s.role}</div>
              <div className='rspec'>{s.spec}</div>
            </div>
            <div className='sample'>
              <span className={s.cls}>{s.sample}</span>
            </div>
          </div>
        ))}

        {/* COMPONENTS */}
        <h2 className='ds-h2'>Components</h2>
        <p className='ds-note'>Reference implementations — all reference tokens, none hard-code a hex or family.</p>
        <div className='ds-row'>
          <button style={{ background: 'var(--brand-orange)', color: '#fff', border: 'none', borderRadius: 100, padding: '13px 28px', font: '600 0.9rem var(--font-sans)', cursor: 'pointer' }}>
            Primary action
          </button>
          <button style={{ background: 'var(--brand-navy)', color: '#fff', border: 'none', borderRadius: 100, padding: '9px 22px', font: '600 0.84rem var(--font-sans)', cursor: 'pointer' }}>
            Secondary
          </button>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--brand-orange-glow)', border: '1px solid rgba(240,123,47,0.2)', color: 'var(--brand-orange)', borderRadius: 100, padding: '8px 18px', font: '700 0.8rem var(--font-sans)' }}>
            <Icon icon='ph:sparkle-fill' width={14} /> Badge
          </span>
          <a href='#' onClick={(e) => e.preventDefault()} style={{ color: 'var(--brand-text-2)', borderBottom: '1px solid var(--brand-border)', font: '500 0.88rem var(--font-sans)', textDecoration: 'none' }}>
            Text link
          </a>
        </div>
        <div className='ds-row'>
          <div className='ds-card'>
            <div style={{ font: '700 1.05rem var(--font-sans)', letterSpacing: '-0.01em' }}>Card — light</div>
            <p style={{ margin: '8px 0 0', font: '400 0.92rem/1.55 var(--font-sans)', color: 'var(--brand-text-2)' }}>
              Surface card on the light background. Hover lifts and deepens the border.
            </p>
          </div>
          <div className='ds-card-dark'>
            <div style={{ font: '700 1.05rem var(--font-sans)', letterSpacing: '-0.01em' }}>Card — dark</div>
            <p style={{ margin: '8px 0 0', font: '400 0.92rem/1.55 var(--font-sans)', color: 'rgba(255,255,255,0.6)' }}>
              Navy card for dark sections and slides. Orange stays the single accent.
            </p>
          </div>
        </div>

        {/* DECKS */}
        <h2 className='ds-h2'>Decks &amp; slides</h2>
        <p className='ds-note'>
          The same tokens drive decks and social carousels — only the canvas size and a larger, legibility-first type
          scale change. Default slide surface is navy-deep with the blueprint dot grid.
        </p>
        <table className='ds-table'>
          <thead>
            <tr><th>Format</th><th>Pixels</th><th>Ratio</th><th>Use</th></tr>
          </thead>
          <tbody>
            <tr><td>Portrait carousel</td><td className='mono'>1080 × 1350</td><td className='mono'>4:5</td><td>LinkedIn / social carousels</td></tr>
            <tr><td>Square</td><td className='mono'>1080 × 1080</td><td className='mono'>1:1</td><td>Single social posts</td></tr>
            <tr><td>Landscape deck</td><td className='mono'>1920 × 1080</td><td className='mono'>16:9</td><td>Presentation / pitch decks</td></tr>
          </tbody>
        </table>
        <div className='ds-row' style={{ alignItems: 'flex-start' }}>
          <div className='ds-slide'>
            <div className='sfoot'><span>DBiz.ai</span><span>03 / 13</span></div>
            <div className='skick'>Human-Led · Agent-Operated</div>
            <div className='shead'>Brief to shipped in 3 weeks.</div>
            <div className='ssub'>One idea per slide. Type sized up for the feed. Orange used once.</div>
          </div>
          <table className='ds-table' style={{ flex: 1, minWidth: 280 }}>
            <thead>
              <tr><th>Role</th><th>Family</th><th>Size (≈1080w)</th></tr>
            </thead>
            <tbody>
              {slideScale.map((r) => (
                <tr key={r[0]}><td>{r[0]}</td><td className='mono'>{r[1]}</td><td className='mono'>{r[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TOKENS */}
        <h2 className='ds-h2'>Complete token block</h2>
        <p className='ds-note'>
          The single source of truth — mirrors <code style={{ font: '0.85em var(--font-mono)' }}>src/app/globals.css</code>. Click to copy.
        </p>
        <pre className='ds-pre' onClick={() => copy(tokenBlock)} style={{ cursor: 'pointer' }}>
          {tokenBlock}
        </pre>
      </div>
    </div>
  )
}
