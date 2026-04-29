'use client'

/* ═══════════════════════════════════════════════════════════════
   v22-alt internal styleguide
   ───────────────────────────────────────────────────────────────
   Reference for anyone working in this variant. Not linked from
   production nav. Documents:

     • Refined palette (cooler navy + cooler paper)
     • Typography hierarchy
     • Motion vocabulary (reveal cascade, scroll vars, easing)
     • Parallax planes
     • Hero→capabilities assembly cascade
     • Component patterns (button, card, kicker, chip)

   Visit at /v22-alt/styleguide.
   ═══════════════════════════════════════════════════════════════ */

import { useReveal, useScrollVar } from '../motion'

function Swatch({ name, value, displayBg }: { name: string; value: string; displayBg?: string }) {
  return (
    <div className='v22alt-sg-swatch'>
      <div className='v22alt-sg-swatch-fill' style={{ background: displayBg ?? value }} />
      <div className='v22alt-sg-swatch-meta'>
        <span className='v22alt-sg-swatch-name'>{name}</span>
        <span className='v22alt-sg-swatch-val'>{value}</span>
      </div>
    </div>
  )
}

export default function StyleguidePage() {
  useScrollVar()
  const reveal = useReveal<HTMLDivElement>()

  return (
    <div className='v22alt-scope' data-theme='dark' style={{ background: 'var(--brand-navy)', minHeight: '100vh' }}>
      <div className='v22alt-sg'>
        <header>
          <div className='num' style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--v22alt-accent)' }}>V22-ALT · INTERNAL · STYLEGUIDE</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.025em', margin: '12px 0 8px' }}>
            Blueprint in Motion
          </h1>
          <p style={{ color: 'var(--v22alt-ink-2)', maxWidth: '60ch', margin: 0 }}>
            Reference for anyone iterating on v22-alt. Variant-only tokens, motion vocabulary, and component patterns.
            Tokens scoped to <code>.v22alt-scope</code>; nothing here leaks to other variants.
          </p>
        </header>

        {/* ─── 01 · Palette ─── */}
        <section className='v22alt-sg-section'>
          <h2>01 · Refined palette</h2>
          <h3>Variant-local additions</h3>
          <div className='v22alt-sg-grid'>
            <Swatch name='--v22alt-paper-cool' value='oklch(0.32 0.06 263)' />
            <Swatch name='--v22alt-paper-warm' value='oklch(0.954 0.004 240)' />
            <Swatch name='--v22alt-accent' value='#F18943' />
          </div>
          <h3 style={{ marginTop: 24 }}>Brand foundations (unchanged)</h3>
          <div className='v22alt-sg-grid'>
            <Swatch name='--brand-navy' value='#0D1B3E' />
            <Swatch name='--brand-navy-deep' value='#070F22' />
            <Swatch name='--brand-orange' value='#E86A2A' />
            <Swatch name='--brand-bg-warm (legacy)' value='#F3F0EC' />
          </div>
          <p style={{ color: 'var(--v22alt-ink-2)', fontSize: '0.92rem', maxWidth: '64ch' }}>
            <strong>Cool paper</strong> is the lifted hero / CTA depth. <strong>Warm paper</strong> is a hair cooler than the brand cream — light surfaces sit closer in temperature to the navy.
          </p>
        </section>

        {/* ─── 02 · Typography ─── */}
        <section className='v22alt-sg-section'>
          <h2>02 · Typography</h2>
          <p style={{ color: 'var(--v22alt-ink-2)', maxWidth: '64ch' }}>
            DM Sans + DM Mono only. Reserve italic for brand-orange Instrument Serif accents (one phrase per section).
          </p>
          <pre className='v22alt-sg-pre'>{`Display       DM Sans 800 · clamp(2.6rem, 5vw, 4.5rem) · -0.035em · 1.06
H2            DM Sans 800 · clamp(1.7rem, 3vw, 2.5rem) · -0.030em · 1.10
H3            DM Sans 700 · 1.35rem  · -0.020em · 1.20
Body          DM Sans 400 · 1.05rem  · 0      · 1.65
Kicker / mono DM Mono 600 · 11px     · 0.22em · uppercase
Caption       DM Mono 400 · 10px     · 0.18em · uppercase`}</pre>
        </section>

        {/* ─── 03 · Motion vocabulary ─── */}
        <section className='v22alt-sg-section'>
          <h2>03 · Motion vocabulary</h2>
          <h3>Easing</h3>
          <pre className='v22alt-sg-pre'>{`--v22alt-motion-curve: cubic-bezier(0.2, 0.7, 0.1, 1);
                       (ease-out-quart, the only curve in this variant)`}</pre>

          <h3 style={{ marginTop: 24 }}>Reveal cascade</h3>
          <pre className='v22alt-sg-pre'>{`<div ref={reveal.ref} className={reveal.visible ? 'is-visible' : ''}>
  <span className='v22alt-reveal' style={{ '--reveal-i': 0 }}>kicker</span>
  <h2   className='v22alt-reveal' style={{ '--reveal-i': 1 }}>heading</h2>
  <p    className='v22alt-reveal' style={{ '--reveal-i': 2 }}>lead</p>
  <div  className='v22alt-reveal' style={{ '--reveal-i': 3 }}>body</div>
</div>`}</pre>
          <p style={{ color: 'var(--v22alt-ink-2)', fontSize: '0.92rem' }}>
            720ms duration, 90ms-per-step stagger, 80ms entry delay. Translate 18px up + opacity 0→1.
          </p>

          {/* Live demo */}
          <div ref={reveal.ref} className={`v22alt-sg-demo ${reveal.visible ? 'is-visible' : ''}`}>
            <div style={{ display: 'grid', gap: 8, justifyItems: 'center', textAlign: 'center' }}>
              <span className='v22alt-reveal' style={{ ['--reveal-i' as string]: 0, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--v22alt-accent)' }}>KICKER</span>
              <h3 className='v22alt-reveal' style={{ ['--reveal-i' as string]: 1, margin: 0 }}>Heading enters</h3>
              <p className='v22alt-reveal' style={{ ['--reveal-i' as string]: 2, color: 'var(--v22alt-ink-2)', margin: 0 }}>Lead follows</p>
              <span className='v22alt-reveal' style={{ ['--reveal-i' as string]: 3, color: 'var(--v22alt-ink-3)' }}>Body settles</span>
            </div>
          </div>

          <h3 style={{ marginTop: 24 }}>Global scroll variables</h3>
          <pre className='v22alt-sg-pre'>{`<html style={{ '--scroll': '1234px', '--scrollvh': '1.4' }}>
   ↑ published by useScrollVar() in motion.ts
   ↑ read by all parallax / cascade CSS — single rAF loop`}</pre>
        </section>

        {/* ─── 04 · Parallax planes ─── */}
        <section className='v22alt-sg-section'>
          <h2>04 · Parallax planes</h2>
          <p style={{ color: 'var(--v22alt-ink-2)', maxWidth: '64ch' }}>
            Add <code>.v22alt-parallax</code> to a section. It gains two backdrop layers: a slow blueprint grid (~6%)
            and a fast dot field (~14%). On <code>data-surface=&quot;light&quot;</code> sections both planes use navy
            ink instead of white.
          </p>
          <pre className='v22alt-sg-pre'>{`<section className='v22alt-section v22alt-parallax'>...</section>

::before  64px grid, drift -6% of scrollY
::after   28px dot field, drift -14% of scrollY`}</pre>
        </section>

        {/* ─── 05 · Hero → capabilities cascade ─── */}
        <section className='v22alt-sg-section'>
          <h2>05 · Assembly cascade</h2>
          <p style={{ color: 'var(--v22alt-ink-2)', maxWidth: '64ch' }}>
            Hero and capabilities are wrapped in a single <code>.v22alt-cascade-stage</code>. The 7 layers of the
            hero diagram already expose <code>--layer-index</code> (0–6); each layer drifts at
            <code> 0.012 × layer-index × scrollY</code>, so the assembly visibly decomposes as you scroll.
            The diagram desaturates over the first 1.5vh of scroll so the capabilities section can take focus.
          </p>
          <pre className='v22alt-sg-pre'>{`.v22alt-hero-diagram .v22alt-layer {
  transform: translate3d(
    0,
    calc(var(--scroll, 0px) * (var(--layer-index) * 0.012)),
    0
  );
}
.v22alt-hero-diagram {
  filter: saturate(clamp(0.6, 1 - var(--scrollvh, 0) * 0.3, 1));
}`}</pre>
        </section>

        {/* ─── 06 · Components ─── */}
        <section className='v22alt-sg-section'>
          <h2>06 · Component patterns</h2>
          <h3>Buttons</h3>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href='#' className='v22alt-cta-primary'>Primary CTA <span className='arrow'>→</span></a>
            <a href='#' className='v22alt-cta-text'>Text link</a>
          </div>
          <h3 style={{ marginTop: 24 }}>Kicker label</h3>
          <span className='num' style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--v22alt-accent)' }}>N°08 / WHY DBIZ</span>
        </section>

        {/* ─── 07 · Reduced motion ─── */}
        <section className='v22alt-sg-section'>
          <h2>07 · Reduced motion</h2>
          <p style={{ color: 'var(--v22alt-ink-2)', maxWidth: '64ch' }}>
            Every motion in this variant honours <code>prefers-reduced-motion: reduce</code>:
          </p>
          <ul style={{ color: 'var(--v22alt-ink-2)', paddingLeft: 24, lineHeight: 1.8 }}>
            <li><code>useScrollVar</code> — never starts the rAF loop, <code>--scroll</code> stays 0</li>
            <li><code>useReveal</code> — returns <code>visible: true</code> immediately, no transition</li>
            <li>Parallax <code>::before</code> / <code>::after</code> drop their transform</li>
            <li>Cascade per-layer transform reset to <code>none</code></li>
            <li>Margin rail switches to a static gradient</li>
          </ul>
        </section>

        <footer style={{ paddingTop: 32, borderTop: '1px solid var(--v22alt-hair)', color: 'var(--v22alt-ink-3)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em' }}>
          V22-ALT · INTERNAL · END OF GUIDE
        </footer>
      </div>
    </div>
  )
}
