/* Shared capabilities data — read by both the home capabilities-section
   and the per-capability detail pages at /v22.5/capabilities/[slug]. */

export type Capability = {
  num: string
  slug: string
  kicker: string          // architectural name (e.g. "Intelligence")
  altLabel: string        // familiar service-area name (e.g. "Data & AI")
  title: string
  subtitle: string
  tags: string[]
  body: string
  cta: string
}

export const capabilities: Capability[] = [
  {
    num: '01',
    slug: 'strategy-architecture',
    kicker: 'AI Strategy & Architecture',
    altLabel: 'Tech Advisory',
    title: 'Strategy & Architecture',
    subtitle: 'Futures Studio · TechOffice Foundry',
    tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],
    body: 'We turn business priorities into a costed AI roadmap and target architecture: use-case prioritisation, readiness and risk assessment, data governance, and security posture, so investment lands where it returns, before a line of code is written.',
    cta: 'Get an AI readiness assessment',
  },
  {
    num: '02',
    slug: 'ai-foundational-layer',
    kicker: 'AI-Ready Infrastructure',
    altLabel: 'Cloud',
    title: 'The AI Foundational Layer',
    subtitle: 'Multi-hyperscaler · Sovereign · Governed',
    tags: ['DBiz Scoop', 'Multi-Hyperscaler', 'Sovereign Cloud', 'GPU Orchestration', 'FinOps'],
    body: 'The cloud most enterprises run was built to host apps, not run AI. We build AI-ready foundations across AWS, Azure, and Google Cloud: purpose-built for agents, inference, and data pipelines, with the governance, FinOps, and observability enterprise IT demands.',
    cta: 'Talk to a cloud architect',
  },
  {
    num: '03',
    slug: 'intelligence-layer',
    kicker: 'Intelligence',
    altLabel: 'Data & AI',
    title: 'The Intelligence Layer',
    subtitle: 'FactWeavers™ · Domain Data Cloud',
    tags: ['FactWeavers™', 'Domain Data Cloud', 'Data Mesh'],
    body: "Most AI stalls on one thing: the data isn’t ready. FactWeavers™ cleans, unifies, and governs enterprise data, pre-modelled for your industry and ready for agents from day one.",
    cta: 'See FactWeavers™ in action',
  },
  {
    num: '04',
    slug: 'connected-systems',
    kicker: 'Orchestration',
    altLabel: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    subtitle: 'No rip and replace',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],
    body: "Your CRM, ERP, and platform investments don’t need replacing, they need unlocking for AI. We connect existing systems across Salesforce, Dynamics, MuleSoft, and Boomi, so agents can read, write, and act across the whole landscape, with no rip-and-replace.",
    cta: 'Explore integration options',
  },
  {
    num: '05',
    slug: 'engineered-with-ai',
    kicker: 'AI Engineering',
    altLabel: 'Product & AI Engineering',
    title: 'Engineered with AI, Shipped Continuously',
    subtitle: 'Agent Studio · Nexus · Perpetual Engineering',
    tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],
    body: 'Products engineered as living systems, not static releases. Perpetual Engineering regenerates software continuously with AI, and Agent Studio puts multi-agent intelligence inside the product, so it keeps evolving instead of ageing.',
    cta: 'See what we’ve built',
  },
  {
    num: '06',
    slug: 'human-agent-experience',
    kicker: 'Human Experience',
    altLabel: 'Experience Design',
    title: 'The Human-Agent Experience',
    subtitle: 'Research-led · Experience engineering',
    tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],
    body: 'As products fill with agents, experience is what earns adoption and trust. Research-led design for human-agent collaboration, turned into production-ready systems in days: structured enough to scale, human enough to trust.',
    cta: 'Explore our design practice',
  },
  {
    num: '07',
    slug: 'ai-first-operations',
    kicker: 'AI Operations',
    altLabel: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
    body: "The team that built it runs it. AI-first monitoring, governance, and continuous optimisation across the whole stack, turning go-live into compounding improvement, not a hands-off support contract.",
    cta: 'Learn about managed services',
  },
]

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find(c => c.slug === slug)
}
