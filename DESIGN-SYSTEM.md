# DBiz.ai — Design System

The shared, sendable reference for everything visual at DBiz.ai — web pages, capability pages, **and decks**. It is derived from the live tokens in `src/app/globals.css`, so the values here are the real ones, not aspirational.

- **Live tokens:** `src/app/globals.css`
- **Live, in-browser version:** `/design-system`
- **Engineering brand rules:** `BRAND.md`
- **CMS / handoff version:** `public/pages-and-assets.html`

> One brand, two surfaces (light and dark), one typeface family. Everything below flows from that.

---

## The one rule that matters most

**Two fonts. No serif. Ever.**

DBiz uses **DM Sans** for everything and **DM Mono** for technical accents. That is the entire type system.

- ❌ **Never add, load, or mix a serif font** — not Instrument Serif, not Georgia, not Times, not a "just one accent" serif. The previous editorial-serif accent has been retired and must not return.
- ❌ **Never introduce a third typeface** of any kind (display, handwritten, condensed, etc.).
- ✅ Emphasis comes from **weight, size, color, and case** — not from a different font.

Why: a single sans family is what makes the brand read as engineered and consistent across web, slides, and social. A serif accent reads as editorial/marketing and breaks that. If a layout feels like it "needs" a serif, it actually needs more contrast in weight or color — use orange, use 800 weight, use DM Mono uppercase.

```css
/* ✅ emphasis without a second family */
font-family: var(--font-sans);
font-weight: 800;
color: var(--brand-orange);

/* ❌ never */
font-family: 'Instrument Serif', Georgia, serif;
font-style: italic;
```

---

## Core principle: reference tokens, never hard-code

Never hard-code a brand hex or font family in a page, component, or slide. Always reference the CSS variable so a future theme shift propagates everywhere without edits.

```css
/* ✅ */
background: var(--brand-orange);
font-family: var(--font-sans);

/* ❌ */
background: #F07B2F;
font-family: 'DM Sans', sans-serif;
```

---

## Color

Navy is the anchor; orange is the single accent. **Both are brand-constant — never recolored per theme.** Surfaces, text, and borders flip between light and dark; the brand colors do not.

> Heads-up: the live orange is `#F07B2F` (in `globals.css`). Older docs/screens may show `#E86A2A` — that value is retired.

### Navy — primary anchor (authority, trust, depth)

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-navy` | `#0D1B3E` | Primary brand color, nav, CTAs |
| `--brand-navy-deep` | `#070F22` | Dark sections, CTA & slide backgrounds |
| `--brand-navy-light` | `#1A2D5A` | Hover states, secondary surfaces |

### Orange — accent (action, energy, every CTA)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-orange` | `#F07B2F` | All CTAs, highlights, accents, kickers |
| `--brand-orange-hover` | `#E06B1F` | Button / interactive hover |
| `--brand-orange-glow` | `rgba(240,123,47,0.1)` | Soft fills, badge backgrounds |

### Surfaces

| Token | Light | Dark (`[data-theme='dark']`) | Usage |
|-------|-------|------------------------------|-------|
| `--brand-bg` | `#FAFAFA` | `#070F22` | Page / slide background |
| `--brand-bg-card` | `#FFFFFF` | `#0D1B3E` | Cards, elevated surfaces |
| `--brand-bg-warm` | `#F3F0EC` | `#1A2D5A` | Warm alternate section |

### Text

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--brand-text` | `#111111` | `#FFFFFF` | Primary text |
| `--brand-text-2` | `#555555` | `rgba(255,255,255,.6)` | Body, secondary |
| `--brand-text-3` | `#999999` | `rgba(255,255,255,.35)` | Muted, captions |

### Borders

| Token | Light | Dark |
|-------|-------|------|
| `--brand-border` | `rgba(0,0,0,0.06)` | `rgba(255,255,255,.08)` |
| `--brand-border-hover` | `rgba(0,0,0,0.12)` | `rgba(255,255,255,.16)` |

### Deriving new accents

If a layout genuinely needs another accent, **derive it from orange or navy** (tints, alphas, gradients) and store it as a local variable that references a brand token. Never invent a new standalone brand color.

```css
--local-accent-soft: color-mix(in srgb, var(--brand-orange) 14%, transparent);
```

---

## Typography

**DM Sans is the primary typeface. DM Mono is the technical accent. There is no third family and no serif** (see [the one rule](#the-one-rule-that-matters-most)).

Loaded once, globally, and exposed as CSS variables. Never hard-code a family name.

| Token | Family | Role |
|-------|--------|------|
| `--font-sans` | DM Sans | **Everything by default** — UI, headings, body |
| `--font-mono` | DM Mono | Labels, kickers, metadata, code, stats |

> A `--font-serif` token still exists in `globals.css` for backward-compatibility with older experimental variants. **It is deprecated — do not reference it in new work.**

### Type scale (web reference)

| Role | Family | Weight | Size | Tracking | Leading |
|------|--------|--------|------|----------|---------|
| Display / H1 | DM Sans | 800 | `clamp(2.6rem, 5vw, 4.5rem)` | `-0.035em` | 1.06 |
| H2 | DM Sans | 800 | `clamp(1.7rem, 3vw, 2.5rem)` | `-0.03em` | 1.1 |
| H3 | DM Sans | 700 | `1.35rem` | `-0.02em` | 1.2 |
| Body | DM Sans | 400 | `1.05rem` | normal | 1.65 |
| Label / kicker | DM Mono | 500 | `0.76rem` | `0.14em` uppercase | — |
| Caption | DM Mono | 400 | `0.68rem` | `0.1em` | — |

Headings are fluid (`clamp()`) so they scale with the viewport. Variants may adapt the scale, but this is the reference rhythm.

### Emphasis without a second font

| Want | Use |
|------|-----|
| A loud headline word | DM Sans **800**, optionally in `--brand-orange` |
| A technical / label feel | DM Mono, uppercase, `0.14em` tracking |
| A quiet aside | `--brand-text-2` or `--brand-text-3` |
| A "kicker" above a heading | DM Mono 500, uppercase, orange |

### Load the fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700;800&display=swap"
  rel="stylesheet">
```

```css
:root {
  --font-sans: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'DM Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
}
html, body { font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }
```

In the Next.js repo, fonts load via `next/font/google` in `src/app/layout.tsx` (DM Sans + DM Mono).

---

## Spacing, radii & borders

Layout spacing is free per page/variant, but radii are tokenized so corners stay consistent.

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-r-sm` | `10px` | Inputs, chips, small surfaces |
| `--brand-r` | `16px` | Default card radius |
| `--brand-r-lg` | `24px` | Large panels, hero cards |

Pills (buttons, badges, toggles) use `border-radius: 100px`.

---

## Components

Reference implementations. All reference tokens; none hard-code a hex or family.

### Primary button
```css
background: var(--brand-orange);
color: #fff;
border-radius: 100px;
padding: 13px 28px;
font: 600 0.9rem var(--font-sans);
/* hover: background var(--brand-orange-hover); translateY(-2px) */
```

### Secondary button
```css
background: var(--brand-navy);
color: #fff;
border-radius: 100px;
padding: 9px 22px;
font: 600 0.84rem var(--font-sans);
```

### Text link
```css
color: var(--brand-text-2);
border-bottom: 1px solid var(--brand-border);
font: 500 0.88rem var(--font-sans);
```

### Badge (brand)
```css
background: var(--brand-orange-glow);
border: 1px solid rgba(240,123,47,0.2);
color: var(--brand-orange);
border-radius: 100px;
padding: 8px 18px;
font: 700 0.8rem var(--font-sans);
```

### Card — light
```css
background: var(--brand-bg-card);
border: 1px solid var(--brand-border);
border-radius: var(--brand-r);
padding: 26px 22px;
/* hover: border-color var(--brand-border-hover); translateY(-2px); shadow */
```

### Card — dark
```css
background: var(--brand-navy);
border: 1px solid var(--brand-navy-light);
border-radius: var(--brand-r);
color: #fff;
```

---

## Decks & slides

The same tokens drive presentation decks and social carousels. The only thing that changes is the **canvas size** and a **larger type scale** for legibility at a distance and in-feed.

### Canvas sizes

| Format | Pixels | Ratio | Use |
|--------|--------|-------|-----|
| Portrait carousel | `1080 × 1350` | 4:5 | LinkedIn / social carousels (max feed real estate) |
| Square | `1080 × 1080` | 1:1 | Single social posts |
| Landscape deck | `1920 × 1080` | 16:9 | Presentation / pitch decks |

Keep a **safe margin** of ~64px (portrait/square) to ~80px (landscape) so nothing critical sits near the crop.

### Slide type scale (legibility-first)

Slides are viewed small in-feed or large across a room — size up generously. These are reference sizes on a 1080-wide canvas; scale proportionally for other widths.

| Role | Family | Weight | Size (≈1080w canvas) |
|------|--------|--------|----------------------|
| Slide H1 | DM Sans | 800 | 80–90px |
| Slide H2 | DM Sans | 800 | 60–68px |
| Lede / intro | DM Sans | 400–500 | 38–42px / 1.5 |
| Body | DM Sans | 400 | 24–28px / 1.5–1.6 |
| Stat value | DM Sans | 800 | 56–72px |
| Stat label | DM Sans | 400 | 22–28px |
| Kicker / footer | DM Mono | 500 | 12–14px, `0.08–0.14em`, uppercase |

Rules of thumb: never below ~22px for body on a slide; one idea per slide; spell out numbers in running copy (`3 weeks`, not `3 wks`) but keep them tight in stat blocks (`3×`, `0`).

### Slide color usage

- Default slide surface is **dark** (`--brand-navy-deep` `#070F22`), often with the signature dot grid.
- Orange is the single accent — one or two hits per slide (a stat, a key word, an icon), never a wash.
- Body text on dark uses `--brand-text-2` (`rgba(255,255,255,.6)`); headlines use full white.
- A "hot" callout box can use `--brand-orange-glow` fill with an orange border.

### Signature background — blueprint dot grid

```css
background:
  #070F22 radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0);
background-size: 24px 24px;
```
Light variant: `#FAFAFA` with `rgba(13,27,62,0.07)` dots.

### Deck do / don't

- ✅ One headline idea per slide; consistent footer with page number in DM Mono.
- ✅ Icons from Phosphor (`ph:*`), one weight throughout a deck.
- ✅ Type sized up — assume the smallest viewer is on a phone.
- ❌ No serif, no italic-accent word, no third font.
- ❌ No more than the brand palette; derive tints from orange/navy if needed.
- ❌ No dense paragraphs — if it needs a paragraph, it needs another slide.

---

## Icons

All icons come from [Iconify](https://icon-sets.iconify.design) via the wrapper at `src/components/icon.tsx` — import from the wrapper, never `@iconify/react` directly.

```tsx
import { Icon } from '@/components/icon'

<Icon icon='ph:arrow-right' width={20} />
```

- **Default set:** Phosphor (`ph:*`) — pairs with DM Sans, six weights; pick one weight per surface and stick with it.
- **Allowed alternates:** Lucide (`lucide:*`), Solar (`solar:*`), Tabler (`tabler:*`). Don't mix more than two sets in one page/deck.

---

## Theme modes

```html
<!-- Toggle via a data attribute on <html> or a section/slide wrapper -->
<html data-theme='dark'>
```

Brand stays the same. Dark mode inverts background, text, and borders. **Orange and navy never recolor.**

---

## Voice & copy cues

- **Positioning:** "Your enterprise. Agent-operated. Starting now."
- **Tagline:** "Human-Led · Agent-Operated · Data-Powered"
- **Product vocabulary:** Frontier Organisation, FactWeavers™, Futures Studio, TechOffice Foundry, Nexus, Agent Studio, DBiz Canvas, DBiz Compass, Perpetual Engineering
- **Tone:** Confident, precise, anti-fluff. Short sentences. No stacked marketing adjectives.

---

## Complete token block

Paste into your global stylesheet as the single source of truth. Mirrors `src/app/globals.css`.

```css
:root {
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
}
```
