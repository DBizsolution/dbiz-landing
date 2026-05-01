export type Capability = {
  num: string
  kicker: string          // new architectural name (e.g., INTELLIGENCE)
  altLabel: string        // familiar service-area name (e.g., DATA & AI)
  title: string
  subtitle: string
  tags: string[]
  body: string
  cta: string
}

export const capabilities: Capability[] = [
  {
    num: '01',
    kicker: 'AI Strategy & Architecture',
    altLabel: 'Tech Advisory',
    title: 'Strategy for AI, Architecture for Scale',
    subtitle: 'Futures Studio · TechOffice Foundry',
    tags: ['AI Vision & Roadmap', 'Architecture-as-a-Service', 'AI Readiness', 'DBiz Canvas'],
    body: 'Your business priorities become an AI and technology roadmap. Use case prioritisation, readiness assessment, architecture blueprint, data governance and security posture, before a single line of code gets written.',
    cta: 'Get an AI readiness assessment',
  },
  {
    num: '02',
    kicker: 'AI-Ready Infrastructure',
    altLabel: 'Cloud',
    title: 'Purpose-built for AI Workloads',
    subtitle: 'Multi-hyperscaler · Sovereign · Governed',
    tags: ['DBiz Scoop', 'Multi-Hyperscaler', 'Sovereign Cloud', 'GPU Orchestration', 'FinOps'],
    body: 'Cloud built for AI workloads, not retrofitted for them. Environments purpose-built for agents, data pipelines, and AI models, with governance, cost controls, and observability enterprise IT requires.',
    cta: 'Talk to a cloud architect',
  },
  {
    num: '03',
    kicker: 'Intelligence',
    altLabel: 'Data & AI',
    title: 'The Intelligence Layer',
    subtitle: 'FactWeavers\u2122 · Domain Data Cloud',
    tags: ['FactWeavers\u2122', 'Domain Data Cloud', 'Data Mesh'],
    body: 'Every AI initiative stalls on the same thing: the data isn\u2019t ready. FactWeavers\u2122 cleans, unifies, and activates enterprise data, pre-modelled for your industry, ready for agents from day one.',
    cta: 'See FactWeavers\u2122 in action',
  },
  {
    num: '04',
    kicker: 'Orchestration',
    altLabel: 'Business Apps & Integration',
    title: 'Connected Systems, Not Silos',
    subtitle: 'No rip and replace',
    tags: ['Salesforce', 'Dynamics 365', 'Boomi', 'MuleSoft'],
    body: 'CRM, ERP, and platform investments don\u2019t need replacing, they need unlocking \u2014 for agents. We connect existing systems so agents can read, write, and act across your entire application landscape.',
    cta: 'Explore integration options',
  },
  {
    num: '05',
    kicker: 'AI Engineering',
    altLabel: 'Product & AI Engineering',
    title: 'Engineered with AI, Shipped Continuously',
    subtitle: 'Agent Studio \u00b7 Nexus \u00b7 Perpetual Engineering',
    tags: ['AI-Native Apps', 'Agent Studio', 'Nexus Platform', 'Perpetual Engineering'],
    body: 'AI-native applications built by AI-first teams. Agent Studio for multi-agent orchestration, Nexus as the dev platform, Perpetual Engineering across the SDLC.',
    cta: 'See what we\u2019ve built',
  },
  {
    num: '06',
    kicker: 'Human Experience',
    altLabel: 'Research & Design',
    title: 'Designed for Humans, Trusted by Agents',
    subtitle: 'Research-led · Experience engineering',
    tags: ['Agentic UX', 'Design Systems', 'DBiz Canvas', 'AI in Design Workflows'],
    body: 'Designing for humans in an increasingly agentic world is our core. We map human needs into design, iterate with AI-driven workflows, and turn requirements into shipped screens in days \u2014 structured enough to scale, human enough to trust.',
    cta: 'Explore our design practice',
  },
  {
    num: '07',
    kicker: 'AI Operations',
    altLabel: 'Managed Services',
    title: 'AI-First Operations',
    subtitle: 'The team that built it runs it',
    tags: ['Monitoring', 'Governance', 'Continuous Improvement'],
    body: 'AI-first monitoring, governance, and continuous improvement across your entire stack. Not a support contract from a team that\u2019s never seen the architecture.',
    cta: 'Learn about managed services',
  },
]
