# DBiz.ai — Brand Reference

Source of truth for every homepage variant in this repo. Colors and typography are **fixed**; layout, motion, and mood vary per variant.

Live tokens: `src/app/globals.css`
Live styleguide: `/styleguide`
Live design system: `/design-system` · sendable: `DESIGN-SYSTEM.md`

---

## Core rule

**Never hard-code a brand hex or font family in a variant.** Always reference the CSS variable. A future theme shift should propagate without touching variants.

```css
/* ✅ */
background: var(--brand-orange);
font-family: var(--font-sans);

/* ❌ */
background: #F07B2F;
font-family: 'DM Sans', sans-serif;
```

> **No serif fonts.** The brand uses exactly two families — DM Sans and DM Mono. Never add, load, or
> mix a serif (Instrument Serif is retired) or any third typeface. See [Typography](#typography).

---

## Colors

### Navy — primary anchor (authority, trust, depth)

| Token                 | Hex       | Usage                              |
|-----------------------|-----------|------------------------------------|
| `--brand-navy`        | `#0D1B3E` | Primary brand color, nav CTAs      |
| `--brand-navy-deep`   | `#070F22` | Dark sections, CTA backgrounds     |
| `--brand-navy-light`  | `#1A2D5A` | Hover states, secondary surfaces   |

### Orange — accent (action, energy, every CTA)

| Token                 | Value                       | Usage                           |
|-----------------------|-----------------------------|---------------------------------|
| `--brand-orange`      | `#F07B2F`                   | All CTAs, highlights, accents   |
| `--brand-orange-hover`| `#E06B1F`                   | Button hover                    |
| `--brand-orange-glow` | `rgba(240,123,47,0.1)`      | Soft fills, badge backgrounds   |

### Surfaces

| Token              | Light     | Dark (`[data-theme='dark']`) |
|--------------------|-----------|------------------------------|
| `--brand-bg`       | `#FAFAFA` | `#070F22`                    |
| `--brand-bg-card`  | `#FFFFFF` | `#0D1B3E`                    |
| `--brand-bg-warm`  | `#F3F0EC` | `#1A2D5A`                    |

### Text

| Token            | Light       | Dark                    | Usage              |
|------------------|-------------|-------------------------|--------------------|
| `--brand-text`   | `#111111`   | `#FFFFFF`               | Primary text       |
| `--brand-text-2` | `#555555`   | `rgba(255,255,255,.6)`  | Body, secondary    |
| `--brand-text-3` | `#999999`   | `rgba(255,255,255,.35)` | Muted, captions    |

### Borders

| Token                  | Light                 | Dark                    |
|------------------------|-----------------------|-------------------------|
| `--brand-border`       | `rgba(0,0,0,0.06)`    | `rgba(255,255,255,.08)` |
| `--brand-border-hover` | `rgba(0,0,0,0.12)`    | `rgba(255,255,255,.16)` |

### Radii

| Token            | Value   |
|------------------|---------|
| `--brand-r-sm`   | `10px`  |
| `--brand-r`      | `16px`  |
| `--brand-r-lg`   | `24px`  |

---

## Typography

**DM Sans is the primary typeface. Every variant. No exceptions.**

Loaded globally in `src/app/layout.tsx` via `next/font/google`. Two families exposed as CSS vars:

| Token            | Family            | Role                                          |
|------------------|-------------------|-----------------------------------------------|
| `--font-sans`    | DM Sans           | **Everything by default** — UI, headings, body |
| `--font-mono`    | DM Mono           | Labels, metadata, kickers, code, stats        |

> A `--font-serif` token still exists in `globals.css` for backward-compatibility with older
> experimental variants. **It is deprecated — never reference it in new work.**

### Scale (reference — adapt per variant)

| Role           | Family   | Weight | Size                            | Tracking   | Leading |
|----------------|----------|--------|---------------------------------|------------|---------|
| Display / H1   | DM Sans  | 800    | `clamp(2.6rem, 5vw, 4.5rem)`    | `-0.035em` | 1.06    |
| H2             | DM Sans  | 800    | `clamp(1.7rem, 3vw, 2.5rem)`    | `-0.03em`  | 1.1     |
| H3             | DM Sans  | 700    | `1.35rem`                       | `-0.02em`  | 1.2     |
| Body           | DM Sans  | 400    | `1.05rem`                       | normal     | 1.65    |
| Label / kicker | DM Mono  | 500    | `0.76rem`                       | `0.14em`   | —       |
| Caption        | DM Mono  | 400    | `0.68rem`                       | `0.1em`    | —       |

### The no-serif rule

The brand uses **exactly two families — DM Sans and DM Mono**. Never add, load, or mix a serif (Instrument
Serif is retired) or any third typeface. Emphasis comes from **weight, size, color, and case**, never from a
different font. If a layout feels like it needs a serif accent, reach for DM Sans 800, `--brand-orange`, or
DM Mono uppercase instead.

```tsx
{/* ✅ emphasis without a second family */}
<h1>
  Your enterprise.{' '}
  <span className='font-extrabold text-[var(--brand-orange)]'>Agent-operated.</span>
</h1>

{/* ❌ never — no serif, no italic-accent word, no third font */}
<em className='font-serif italic'>Agent-operated.</em>
```

---

## Theme modes

Brand stays the same. Surface flips.

```tsx
// Toggle via data attribute on <html> or a section wrapper
<html data-theme='dark'>
```

Orange and navy are brand-constant. Dark mode inverts bg/text/borders. Never recolor the brand accent per theme.

### Creative variants (animated, brutalist, editorial, etc.)

Allowed to introduce:
- New radii, new spacing, new motion languages
- Background gradients, textures, grain
- Extra layout systems

**Not allowed** to introduce:
- New brand colors (navy or orange variants outside the tokens above)
- A primary typeface other than DM Sans
- **Any serif font, or a third typeface of any kind** (no Instrument Serif, no Georgia, no "just one accent" serif)
- Hard-coded brand hexes

If a variant needs a new accent, it must derive from orange or navy (tints, alphas, gradients) and live as a local var that references a brand token.

---

## Core patterns (see `/styleguide` for live examples)

### Primary button
```tsx
background: var(--brand-orange);
color: #fff;
border-radius: 100px;
padding: 13px 28px;
font: 600 0.9rem var(--font-sans);
// hover: background var(--brand-orange-hover); translateY(-2px)
```

### Secondary button
```tsx
background: var(--brand-navy);
color: #fff;
border-radius: 100px;
padding: 9px 22px;
font: 600 0.84rem var(--font-sans);
```

### Text link
```tsx
color: var(--brand-text-2);
border-bottom: 1px solid var(--brand-border);
font: 500 0.88rem var(--font-sans);
```

### Badge (brand)
```tsx
background: var(--brand-orange-glow);
border: 1px solid rgba(240,123,47,0.2);
color: var(--brand-orange);
border-radius: 100px;
padding: 8px 18px;
font: 700 0.8rem var(--font-sans);
```

### Card (light)
```tsx
background: var(--brand-bg-card);
border: 1px solid var(--brand-border);
border-radius: var(--brand-r);
padding: 26px 22px;
// hover: border-color var(--brand-border-hover); translateY(-2px); shadow
```

### Card (dark)
```tsx
background: var(--brand-navy);
border: 1px solid var(--brand-navy-light);
border-radius: var(--brand-r);
color: #fff;
```

---

## Icons

All icons come from [Iconify](https://icon-sets.iconify.design) via `@iconify/react`, wrapped in `src/components/icon.tsx`. Always import from the wrapper, never `@iconify/react` directly — lets us swap strategies (CDN ↔ bundled) without touching call sites.

```tsx
import { Icon } from '@/components/icon'

<Icon icon='ph:arrow-right' width={20} />
```

**Default set:** Phosphor (`ph:*`) — pairs well with DM Sans and supports 6 weights (thin, light, regular, bold, fill, duotone). Pick one weight per variant and stick with it.

**Allowed alternates (when Phosphor doesn't have it):** Lucide (`lucide:*`), Solar (`solar:*`), Tabler (`tabler:*`). Don't mix more than two sets in one variant.

Browse sets at [icon-sets.iconify.design](https://icon-sets.iconify.design). Icons load on-demand from Iconify's CDN — no install required per set.

---

## Voice & copy cues (from reference landing)

- **Positioning**: "Your enterprise. Agent-operated. Starting now."
- **Tagline**: "Human-Led · Agent-Operated · Data-Powered"
- **Product vocabulary**: Frontier Organisation, FactWeavers™, Futures Studio, TechOffice Foundry, Nexus, Agent Studio, DBiz Canvas, DBiz Compass, Perpetual Engineering
- **Tone**: Confident, precise, anti-fluff. Short sentences. No marketing adjectives stacked on top of each other.

---

## File map

```
src/app/
├── globals.css          ← brand tokens (single source of truth)
├── layout.tsx           ← global font loading (DM Sans, DM Mono)
├── page.tsx             ← index of variants
├── styleguide/page.tsx  ← live brand reference
├── v1/                  ← variant 1 (editorial)
│   ├── layout.tsx
│   ├── page.tsx
│   └── theme.css        ← variant-specific styles (must reference brand tokens)
└── v2/                  ← future variants live here
```

## Workflow for a new variant

1. Create `src/app/vN/` with `layout.tsx`, `page.tsx`, and (optionally) `theme.css` scoped under a `vN-scope` class
2. Inherit DM Sans from root — no need to re-load fonts
3. Reference brand tokens only; never hard-code hexes
4. Add variant to `src/lib/versions.ts`
5. Variant-specific tokens (layout, motion) are fine as local vars
