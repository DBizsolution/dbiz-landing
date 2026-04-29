export type Version = {
  slug: string
  name: string
  tagline: string
  status: 'wip' | 'draft' | 'ready'
}

export const versions: Version[] = [
  {
    slug: 'v1',
    name: 'V1 — Editorial',
    tagline: 'Warm off-white, serif accents, minimal motion',
    status: 'wip',
  },
  {
    slug: 'v2',
    name: 'V2 — Signal',
    tagline: 'Dark institutional, canvas network hero, ambient motion',
    status: 'ready',
  },
  {
    slug: 'v3',
    name: 'V3 — Atelier',
    tagline: 'White/navy/orange sectioning, boxes and wells, duotone icons',
    status: 'wip',
  },
  {
    slug: 'v4',
    name: 'V4 — Swiss',
    tagline: 'International typographic style, grid-led precision',
    status: 'ready',
  },
  {
    slug: 'v5',
    name: 'V5 — Blueprint',
    tagline: 'Schematic navy paper with orange hairline annotations',
    status: 'ready',
  },
  {
    slug: 'v6',
    name: 'V6 — Broadsheet',
    tagline: 'Editorial broadsheet, Instrument Serif display, multi-column',
    status: 'ready',
  },
  {
    slug: 'v9',
    name: 'V9 — Foundry',
    tagline: 'v5 illustrations, v4 content, navy/light handshake',
    status: 'draft',
  },
  {
    slug: 'v10',
    name: 'V10 — Dispatch',
    tagline: 'Blueprint ethos on v8 warm broadsheet — newsletter voice',
    status: 'draft',
  },
  {
    slug: 'v11',
    name: 'V11 — Frontier',
    tagline: 'V5 Blueprint ethos, V4 content, cycling capabilities, horizontal framework',
    status: 'draft',
  },
  {
    slug: 'v13',
    name: 'V13 — Blueprint',
    tagline: 'Clone of V5 Blueprint — schematic navy paper with orange hairline annotations',
    status: 'draft',
  },
  {
    slug: 'v14',
    name: 'V14 — Swiss Blueprint',
    tagline: 'V4 grid precision on V5 dark blueprint canvas',
    status: 'draft',
  },
  {
    slug: 'v16',
    name: 'V16 — Swiss Blueprint',
    tagline: 'Complete Swiss Blueprint with all sections and interactions',
    status: 'ready',
  },
  {
    slug: 'v17',
    name: 'V17 — Swiss Blueprint',
    tagline: 'Clone of V16 — working copy for further iterations',
    status: 'draft',
  },
  {
    slug: 'v18',
    name: 'V18 — Swiss Blueprint',
    tagline: 'Clone of V17 — working copy for further iterations',
    status: 'draft',
  },
  {
    slug: 'v19',
    name: 'V19 — Swiss Blueprint Dark',
    tagline: 'Clone of V18 with dark-blue hero treatment',
    status: 'draft',
  },
  {
    slug: 'v20',
    name: 'V20 — Blueprint Dark (Lighter Orange)',
    tagline: 'Clone of V19 with logo-orange accent, lightning-bolt productivity icon',
    status: 'draft',
  },
  {
    slug: 'v22',
    name: 'V22 — Swiss Blueprint',
    tagline: 'Clone of V20 — working copy for further iterations',
    status: 'draft',
  },
  {
    slug: 'v22-alt',
    name: 'V22-ALT — Blueprint in Motion',
    tagline: 'V22 with scroll-tied parallax, unified reveals, and a hero→capabilities cascade',
    status: 'draft',
  },
  {
    slug: 'v24',
    name: 'V24 — Blueprint Dark',
    tagline: 'Clone of V20 — working copy for further iterations',
    status: 'draft',
  },
  {
    slug: 'v25',
    name: 'V25 — Ingress',
    tagline: 'Editorial blueprint — Palantir restraint, DBiz DNA, typographic-first',
    status: 'draft',
  },
  {
    slug: 'v26',
    name: 'V26 — Organic Frontier',
    tagline: 'V24 restructured: curves, parallax layers, floating orbs, organic motion',
    status: 'draft',
  },
]
