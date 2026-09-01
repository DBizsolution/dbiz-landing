/* dRSTi research-area data — shared by the interactive tabs (client) and
   the standalone Index section (server). Plain module: no 'use client'. */

export type Area = {
  num: string
  kicker: string
  title: string
  horizon: string
  body: string
  tags: string[]
}

export const AREAS: Area[] = [
  {
    num: '01', kicker: 'AGENTIC ARCHITECTURES', title: 'Multi-agent systems for enterprise work', horizon: 'HORIZON 2 · EMERGING',
    body: 'How agents should be decomposed, orchestrated, and supervised when the work spans several enterprise systems and the cost of a wrong action is real.',
    tags: ['Orchestration patterns', 'Tool use', 'Long-running tasks', 'Human-in-the-loop'],
  },
  {
    num: '02', kicker: 'DATA READINESS', title: 'Data foundations agents can act on', horizon: 'HORIZON 1 · CORE',
    body: 'Most agent programmes stall on the data, not the model. We research the modelling, lineage, and retrieval patterns that make enterprise data usable by autonomous systems.',
    tags: ['Domain modelling', 'Retrieval', 'Lineage', 'Freshness'],
  },
  {
    num: '03', kicker: 'SECURITY & PRIVACY', title: 'Trust boundaries for autonomous systems', horizon: 'HORIZON 1 · CORE',
    body: 'Identity, permissioning, and data residency when the actor is an agent. Prompt-injection and exfiltration surfaces, tested against real enterprise topologies.',
    tags: ['Agent identity', 'Least privilege', 'Injection defence', 'Residency'],
  },
  {
    num: '04', kicker: 'GOVERNANCE & ASSURANCE', title: 'Evaluation, auditability, and control', horizon: 'HORIZON 2 · EMERGING',
    body: 'What it takes to certify an agent for production and keep it certified: evaluation harnesses, drift detection, audit trails, and the regulatory reporting that follows.',
    tags: ['Evals', 'Drift', 'Audit trail', 'Regulatory reporting'],
  },
  {
    num: '05', kicker: 'BUSINESS TRANSFORMATION', title: 'Agent-led operating models', horizon: 'HORIZON 3 · DISRUPTIVE',
    body: 'How work, roles, and accountability change once agents run parts of the process, and which reliability and cost thresholds have to be met before they can.',
    tags: ['Process redesign', 'Accountability', 'Unit economics', 'Change'],
  },
]
