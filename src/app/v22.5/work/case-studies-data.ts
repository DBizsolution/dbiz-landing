/* Case-study content — drives the /v22.5/work/[slug] template. Each entry maps
   1:1 to a source case study (DBiz CASESTUDDIES). The Aldar / agentic-payments
   case keeps its own bespoke page (with the flow diagram) and is not here.

   `capTags` link each case study to the capability ("tower") it was delivered
   under, pointing at the capabilities section / detail pages. */

export type CapTag = { slug: string; label: string }
export type SpecRow = { label: string; value: string }
export type StackRow = { layer: string; tech: string }

export type CaseStudy = {
  slug: string
  industry: string            // eyebrow — "Case Study · {industry}"
  heroTitle: string
  heroAccent: string          // serif-italic accent line
  subtitle: string
  lead: string
  heroImage: string
  industryTags: string[]
  overview: SpecRow[]
  keyOutcomes: string[]
  challengeAccent: string     // serif word(s) in the Challenge h2
  challengeTitleLead: string  // text before the accent
  challenge: string[]
  solutionTitleLead: string
  solutionAccent: string
  solutionKicker: string
  solution: string[]
  capabilities?: string[]     // optional "key capabilities" bullets
  resultTitleLead: string
  resultAccent: string
  outcomes: string[]
  stack: StackRow[]
  capTags: CapTag[]
}

const CAP = {
  strategy: { slug: 'strategy-architecture', label: 'Strategy & Architecture' },
  cloud: { slug: 'ai-foundational-layer', label: 'Cloud Foundation' },
  data: { slug: 'intelligence-layer', label: 'Data & AI' },
  connected: { slug: 'connected-systems', label: 'Connected Systems' },
  engineering: { slug: 'engineered-with-ai', label: 'Product & AI Engineering' },
} as const

const IMG = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1400&fit=crop`

export const caseStudies: CaseStudy[] = [
  {
    slug: 'knowledge-graph-intelligence',
    industry: 'Construction',
    heroTitle: 'Knowledge Graph Intelligence',
    heroAccent: 'for infrastructure.',
    subtitle: 'Amazon Bedrock · Neo4j · AWS',
    lead: 'Large infrastructure projects bury critical answers across schedules, risk registers, and contracts. We unified them into one queryable knowledge graph — answers in seconds, with citations.',
    heroImage: IMG(2058131),
    industryTags: ['Construction', 'Infrastructure', 'Knowledge Graph'],
    overview: [
      { label: 'Industry', value: 'Construction' },
      { label: 'Domain', value: 'Infrastructure Project Delivery' },
      { label: 'Solution', value: 'Knowledge Graph Intelligence · Conversational AI · Project Intelligence' },
      { label: 'Technology partner', value: 'AWS' },
      { label: 'AI accelerator', value: 'Amazon Bedrock Agent' },
    ],
    keyOutcomes: [
      '24× faster graph build',
      '25,000 project activities ingested and queried',
      'Query responses in seconds, with source citations',
      'Delivered in 8 weeks',
    ],
    challengeTitleLead: 'Critical data,',
    challengeAccent: 'fragmented.',
    challenge: [
      'Large infrastructure projects generate vast amounts of data across schedules, risk registers, contracts, and documentation — critical to decisions, yet scattered across systems.',
      'Answering questions about how risks, activities, and contractual obligations relate meant manual investigation across sources, taking anywhere from 30 minutes to several hours. An earlier attempt had failed to scale, creating the need for an architecture that could operate across a complete project dataset.',
    ],
    solutionTitleLead: 'One connected',
    solutionAccent: 'knowledge graph.',
    solutionKicker: 'Graph-first architecture on Neo4j + Amazon Bedrock.',
    solution: [
      'AWS co-funded a proof of concept and selected DBiz as delivery partner to validate whether a knowledge-graph-powered platform could operate at full infrastructure-project scale.',
      'Built graph-first on Neo4j and AWS, the solution unified schedules, risk registers, work breakdown structures, and contract documentation into one connected graph. Amazon Bedrock provided the LLM capabilities for entity extraction, relationship inference, and conversational access.',
    ],
    capabilities: [
      'Automated ingestion of schedules, risk registers, and documentation',
      'Cross-source linking via deterministic rules + AI semantic inference',
      'Conversational querying with source-cited responses',
      'Delay-propagation and risk-impact analysis across connected data',
      'Native vector indexing for semantic search and retrieval',
    ],
    resultTitleLead: 'Connected insight,',
    resultAccent: 'in seconds.',
    outcomes: [
      'The engagement validated knowledge-graph technology for large-scale infrastructure intelligence. Teams now query connected insight across schedules, risks, contracts, and documentation through a single model.',
      'It established a scalable foundation for broader deployment, and demonstrated extensions like voice interaction and live transcript ingestion for richer, field-based project intelligence.',
    ],
    stack: [
      { layer: 'Cloud platform', tech: 'AWS' },
      { layer: 'AI & generative AI', tech: 'Amazon Bedrock · Amazon Bedrock Agent' },
      { layer: 'Data processing', tech: 'AWS Lambda · AWS Fargate · AWS Step Functions' },
      { layer: 'Graph database', tech: 'Neo4j (native vector indexing)' },
      { layer: 'Core capabilities', tech: 'Entity extraction · Relationship inference · Conversational retrieval' },
    ],
    capTags: [CAP.cloud, CAP.data],
  },

  {
    slug: 'ai-strategy-roadmap',
    industry: 'Telecommunications',
    heroTitle: 'An AI roadmap,',
    heroAccent: 'agent-ready.',
    subtitle: 'Futures analysis · Strategic roadmapping',
    lead: 'A foresight-led AI strategy that aligned 15+ leaders around a shared vision — 38 use cases, organised into seven capability clusters and a phased path from quick wins to autonomous systems.',
    heroImage: IMG(1216544),
    industryTags: ['Telecommunications', 'AI Strategy', 'Advisory'],
    overview: [
      { label: 'Industry', value: 'Telecommunications · Critical Infrastructure' },
      { label: 'Domain', value: 'Enterprise AI Strategy & Transformation' },
      { label: 'Solution', value: 'AI Strategy & Advisory · Agentic AI Roadmap · Business Transformation' },
      { label: 'Core approach', value: 'Futures Analysis · Strategic Roadmapping · Use-Case Prioritisation' },
      { label: 'AI accelerator', value: 'Agentic AI Framework' },
    ],
    keyOutcomes: [
      '38 AI use cases identified across the organisational lifecycle',
      '19 high-priority opportunities shortlisted for implementation',
      '15+ senior stakeholders aligned around a shared AI vision',
      'Seven capability clusters established to guide AI adoption',
    ],
    challengeTitleLead: 'Where does AI',
    challengeAccent: 'actually pay off?',
    challenge: [
      'As AI capabilities evolved, the organisation needed a structured way to identify where AI could deliver measurable value while staying aligned with future regulatory, market, and technology developments.',
      'Leaders across functions needed a common framework to evaluate opportunities, prioritise investment, and build a roadmap balancing immediate needs with long-term transformation.',
    ],
    solutionTitleLead: 'A foresight-led',
    solutionAccent: 'strategy.',
    solutionKicker: 'Futures Studio workshops → a phased agentic roadmap.',
    solution: [
      'DBiz delivered a foresight-led AI strategy engagement to align business and technology leaders around a shared vision for AI adoption.',
      'Through workshops and strategic planning, we combined internal priorities with external market trends, emerging technologies, and regulatory considerations to assess opportunities. The result: an agentic AI framework organising 38 use cases into seven business-aligned capability clusters, plus a phased roadmap from immediate opportunities to near-term predictive capabilities and longer-term autonomous systems.',
    ],
    resultTitleLead: 'A clear path,',
    resultAccent: 'aligned.',
    outcomes: [
      'The engagement provided a clear, actionable roadmap for AI adoption. By aligning stakeholders around a shared vision and a prioritised portfolio, the organisation gained a practical framework for evaluating investment and sequencing initiatives.',
      'The resulting strategy established a foundation for both short-term value creation and long-term transformation.',
    ],
    stack: [
      { layer: 'Strategic approach', tech: 'Futures Analysis' },
      { layer: 'Framework', tech: 'Agentic AI Framework' },
      { layer: 'Discovery & alignment', tech: 'Stakeholder Workshops' },
      { layer: 'Planning & governance', tech: 'Use-Case Prioritisation · Strategic Roadmapping' },
      { layer: 'Transformation focus', tech: 'Predictive Capabilities · Autonomous Systems' },
    ],
    capTags: [CAP.strategy, CAP.data],
  },

  {
    slug: 'compliance-validation',
    industry: 'Telecommunications',
    heroTitle: 'Compliance validation,',
    heroAccent: 'automated.',
    subtitle: 'Salesforce · AI case intelligence',
    lead: 'Escalated compliance cases once meant hours of manual review. We built AI validation inside Salesforce that recommends dispositions, updates records, and triggers workflows — consistent and governed.',
    heroImage: IMG(2881229),
    industryTags: ['Telecommunications', 'Compliance', 'Salesforce'],
    overview: [
      { label: 'Industry', value: 'Telecommunications' },
      { label: 'Domain', value: 'Compliance Operations & Case Management' },
      { label: 'Solution', value: 'Compliance Automation · Workflow Automation · AI Case Intelligence' },
      { label: 'Technology partner', value: 'Salesforce' },
      { label: 'Core technologies', value: 'Salesforce · Artificial Intelligence' },
    ],
    keyOutcomes: [
      'Automated validation of escalated compliance cases',
      'Improved accuracy and consistency in disposition recommendations',
      'Accelerated case review and resolution workflows',
      'Reduced manual effort across compliance operations',
    ],
    challengeTitleLead: 'Manual review,',
    challengeAccent: 'at scale.',
    challenge: [
      'Compliance validation across escalated sales cases took significant manual effort — reviewing activity histories, validating dispositions, updating records, and aligning documentation to regulatory and operational requirements.',
      'The process was slow and prone to inconsistency, increasing overhead, rework, and audit risk, while making standardised compliance hard to maintain at scale.',
    ],
    solutionTitleLead: 'AI validation,',
    solutionAccent: 'inside Salesforce.',
    solutionKicker: 'Disposition recommendations, governed updates, downstream workflows.',
    solution: [
      'DBiz implemented an AI-powered compliance validation solution to improve accuracy, consistency, and efficiency within Salesforce.',
      'It analyses case activity histories and supporting information to recommend the most appropriate disposition, then automatically updates compliance fields — status, completion dates, and classifications. To streamline further, the platform generates case summaries and triggers downstream workflows, reducing manual intervention while keeping compliance governed.',
    ],
    resultTitleLead: 'Consistent,',
    resultAccent: 'governed, faster.',
    outcomes: [
      'The solution improved the efficiency and consistency of compliance operations by automating key review and validation activities. Teams process escalated cases faster while maintaining governance standards.',
      'Automated updates, summarisation, and workflow execution improved operational consistency and supported compliance management at scale.',
    ],
    stack: [
      { layer: 'CRM platform', tech: 'Salesforce' },
      { layer: 'AI capabilities', tech: 'Disposition Validation · Case Analysis · Automated Summarisation' },
      { layer: 'Workflow automation', tech: 'Compliance Workflow Automation' },
      { layer: 'Governance', tech: 'Compliance Field Validation & Automated Updates' },
      { layer: 'Business function', tech: 'Compliance Operations & Case Management' },
    ],
    capTags: [CAP.connected, CAP.data],
  },

  {
    slug: 'inspection-report-automation',
    industry: 'Construction',
    heroTitle: 'Inspection reports,',
    heroAccent: 'in minutes.',
    subtitle: 'Azure OpenAI · Cognitive Search',
    lead: 'Manually turning inspection reports into customer-ready documents was a bottleneck. We built a generative-AI platform that extracts defects, maps responses, and drafts reports — with a human check.',
    heroImage: IMG(280229),
    industryTags: ['Construction', 'Document Intelligence', 'Azure'],
    overview: [
      { label: 'Industry', value: 'Construction · Residential Building' },
      { label: 'Domain', value: 'Document Intelligence & Quality Assurance' },
      { label: 'Solution', value: 'Document Intelligence · Generative AI · Process Automation' },
      { label: 'Technology partner', value: 'Microsoft' },
      { label: 'AI accelerator', value: 'Azure OpenAI' },
    ],
    keyOutcomes: [
      '70% reduction in report preparation time',
      '90% automation in defect extraction and response mapping',
      '100+ inspection reports processed weekly without extra staffing',
      'Foundation established for analytics and continuous quality improvement',
    ],
    challengeTitleLead: 'A manual',
    challengeAccent: 'bottleneck.',
    challenge: [
      'Processing private inspection reports was manual and time-intensive — reviewing unstructured reports, identifying defects, mapping them to approved responses, and preparing customer-ready documentation.',
      'It relied heavily on experienced staff, creating bottlenecks at peak periods. Defect information stayed unstructured, limiting visibility into recurring issues and long-term quality improvement.',
    ],
    solutionTitleLead: 'Extract, classify,',
    solutionAccent: 'generate.',
    solutionKicker: 'Azure OpenAI + Cognitive Search, with a governed review step.',
    solution: [
      'DBiz built a generative-AI platform that automates defect extraction, classification, and response generation from inspection reports.',
      'Using Azure OpenAI and Azure Cognitive Search, it analyses uploaded reports, extracts defect descriptions, and matches them against an approved response knowledge base using semantic search and vector embeddings. Defects are classified as action or no-action and mapped to responses via predefined rules and historical logic. A secure interface lets staff review and override before generating structured reports — all logged for governance and traceability.',
    ],
    resultTitleLead: 'More volume,',
    resultAccent: 'no extra headcount.',
    outcomes: [
      'The solution cut the effort to process inspection reports while improving consistency, scalability, and governance. The organisation handles higher volumes without added overhead.',
      'Standardised response generation improved consistency across customer communications, while structured defect data opened new opportunities for reporting, trend analysis, and continuous quality improvement.',
    ],
    stack: [
      { layer: 'AI & search', tech: 'Azure OpenAI · Azure Cognitive Search' },
      { layer: 'Identity & access', tech: 'Azure AD' },
      { layer: 'Application hosting', tech: 'Azure App Services' },
      { layer: 'Data storage', tech: 'Azure SQL' },
      { layer: 'AI capabilities', tech: 'Large Language Models · Semantic Search · Vector Embeddings' },
    ],
    capTags: [CAP.engineering, CAP.data],
  },

  {
    slug: 'customer-self-service-assistant',
    industry: 'Auctions',
    heroTitle: 'Customer answers,',
    heroAccent: 'self-served.',
    subtitle: 'Azure AI Foundry · Agent Framework',
    lead: 'A high-volume contact centre fielded the same questions on repeat. We built a governed conversational assistant that answers — source-grounded, cited, and safe — 24/7.',
    heroImage: IMG(248747),
    industryTags: ['Auctions', 'Conversational AI', 'Azure'],
    overview: [
      { label: 'Industry', value: 'Auctions & Valuation Services' },
      { label: 'Domain', value: 'Customer Support' },
      { label: 'Solution', value: 'Conversational AI · Customer Self-Service · Knowledge Management' },
      { label: 'Technology partner', value: 'Microsoft' },
      { label: 'AI accelerator', value: 'Microsoft Agent Framework' },
    ],
    keyOutcomes: [
      '24/7 self-service support for customer enquiries',
      'Source-grounded responses with transparent citations',
      'Enterprise-grade AI governance and safety controls',
      'Reduced manual effort for repetitive support interactions',
    ],
    challengeTitleLead: 'The same questions,',
    challengeAccent: 'on repeat.',
    challenge: [
      'The contact centre managed a high volume of repetitive enquiries — auctions, bidding, payments, collections, account support. The information already existed across FAQs and resources, yet customers kept relying on support teams to find it.',
      'The business needed a conversational AI solution that delivered accurate, trustworthy responses while meeting enterprise requirements for governance, safety, traceability, and quality.',
    ],
    solutionTitleLead: 'Grounded answers,',
    solutionAccent: 'governed.',
    solutionKicker: 'Azure AI Foundry + Agent Framework, with enterprise safety controls.',
    solution: [
      'DBiz designed and implemented an AI-powered conversational assistant that lets customers get answers through a natural-language interface.',
      'Built on Azure AI Foundry, Azure OpenAI, Azure AI Search, Microsoft Agent Framework, and Azure Cosmos DB, it delivers source-grounded responses across key journeys. For enterprise deployment, it incorporates content safety, PII protection, prompt-injection defence, conversation-history management, governed response behaviour, and fallback handling — with transparent source references to build trust.',
    ],
    resultTitleLead: 'Independent customers,',
    resultAccent: 'lighter support load.',
    outcomes: [
      'Customers resolve common enquiries independently through a secure, reliable self-service experience. By automating high-frequency answers, the organisation reduced pressure on support teams and improved consistency.',
      'The implementation established a governed framework for conversational AI — the controls needed to scale future AI initiatives with confidence.',
    ],
    stack: [
      { layer: 'AI platform', tech: 'Azure AI Foundry' },
      { layer: 'Generative AI', tech: 'Azure OpenAI' },
      { layer: 'Search & retrieval', tech: 'Azure AI Search' },
      { layer: 'AI accelerator', tech: 'Microsoft Agent Framework' },
      { layer: 'Data storage', tech: 'Azure Cosmos DB' },
      { layer: 'Governance & security', tech: 'Content Safety · PII Protection · Prompt-Injection Defence' },
    ],
    capTags: [CAP.engineering, CAP.data],
  },

  {
    slug: 'rfi-response-automation',
    industry: 'Financial Services',
    heroTitle: 'RFI responses,',
    heroAccent: 'drafted by AI.',
    subtitle: 'Copilot Studio · Power Platform',
    lead: 'Proposal teams leaned on experts to draft every RFI. We automated requirement extraction and drafting on Copilot Studio — consistent submissions from a governed knowledge base.',
    heroImage: IMG(3786091),
    industryTags: ['Financial Services', 'Proposal Automation', 'Copilot Studio'],
    overview: [
      { label: 'Industry', value: 'Financial Services' },
      { label: 'Domain', value: 'Proposal Management & Knowledge Operations' },
      { label: 'Solution', value: 'Proposal Automation · Knowledge Management · Workflow Automation' },
      { label: 'Technology partner', value: 'Microsoft' },
      { label: 'AI accelerator', value: 'Microsoft Copilot Studio' },
    ],
    keyOutcomes: [
      'Accelerated RFI and proposal response preparation',
      'Reduced manual effort through AI-driven automation',
      'Improved consistency across proposal submissions',
      'Established a scalable knowledge-management framework',
    ],
    challengeTitleLead: 'Expert time,',
    challengeAccent: 'spent on drafts.',
    challenge: [
      'Preparing Request for Information (RFI) responses was manual and time-consuming, leaning heavily on subject-matter experts to gather information, draft responses, and ensure compliance with customer requirements.',
      'With no centralised knowledge repository, submissions were inconsistent, while manual workflows limited scale and extended turnaround.',
    ],
    solutionTitleLead: 'Automated drafts,',
    solutionAccent: 'governed reuse.',
    solutionKicker: 'Copilot Studio + Power Platform over a central knowledge base.',
    solution: [
      'DBiz implemented an AI-powered RFI response solution using Microsoft Copilot Studio and Microsoft Power Platform.',
      'It extracts customer requirements, identifies relevant approved content, and generates structured draft responses for review. A centralised knowledge repository improves reuse, consistency, and governance — and human validation workflows ensure accuracy and compliance while continuously improving the knowledge base.',
    ],
    resultTitleLead: 'Less effort,',
    resultAccent: 'more consistency.',
    outcomes: [
      'The solution streamlined proposal development by reducing the effort to prepare and manage RFI responses. Centralised knowledge and automated content generation improved consistency while reducing dependency on experts for routine responses.',
      'The governed review process maintained quality and compliance, creating a scalable foundation for future growth.',
    ],
    stack: [
      { layer: 'AI platform', tech: 'Microsoft Copilot Studio' },
      { layer: 'Automation platform', tech: 'Microsoft Power Platform' },
      { layer: 'Knowledge management', tech: 'Centralised Knowledge Repository' },
      { layer: 'Core capabilities', tech: 'Requirement Extraction · Knowledge Matching · Draft Generation' },
      { layer: 'Governance', tech: 'Human Validation Workflows' },
    ],
    capTags: [CAP.connected, CAP.data],
  },

  {
    slug: 'workforce-policy-assistant',
    industry: 'Tourism',
    heroTitle: 'Policy answers,',
    heroAccent: 'on demand.',
    subtitle: 'Large Language Models · Python',
    lead: 'Support teams fielded ~6,000 policy enquiries a month, many from staff without system access. We built a policy-grounded AI assistant that answers reliably — with citations.',
    heroImage: IMG(145939),
    industryTags: ['Entertainment & Tourism', 'Conversational AI', 'Workforce'],
    overview: [
      { label: 'Industry', value: 'Entertainment & Tourism' },
      { label: 'Domain', value: 'Workforce Support & Employee Self-Service' },
      { label: 'Solution', value: 'Conversational AI · Employee Knowledge Assistant · Workforce Automation' },
      { label: 'Core technologies', value: 'Large Language Models (LLMs) · Python' },
      { label: 'Delivery model', value: 'Four-week proof of concept' },
    ],
    keyOutcomes: [
      'Accurate, policy-grounded responses through a conversational interface',
      'Met proof-of-concept accuracy benchmarks',
      'Reduced reliance on manual support for routine policy enquiries',
      'Established a foundation for broader enterprise AI adoption',
    ],
    challengeTitleLead: '6,000 enquiries,',
    challengeAccent: 'every month.',
    challenge: [
      'The organisation needed a better way to give employees workforce policy information — many of whom had no access to internal systems.',
      'Support teams handled around 6,000 policy enquiries each month, creating overhead and bottlenecks. An existing chatbot couldn’t consistently give accurate, contextual responses, limiting confidence. They needed reliable, policy-grounded answers with room to expand into other employee services.',
    ],
    solutionTitleLead: 'Reliable answers,',
    solutionAccent: 'policy-grounded.',
    solutionKicker: 'LLMs + prompt engineering, validated against success criteria.',
    solution: [
      'DBiz designed and implemented a web-based AI assistant focused on workforce leave-policy enquiries.',
      'Using large language models and advanced prompt engineering, employees ask natural-language questions and receive concise responses grounded in approved policy documentation. Delivered as a four-week proof of concept, it included authentication, persona design, QA processes, stakeholder validation, and automated testing — with success criteria for accuracy, contextual relevance, and citation quality.',
    ],
    resultTitleLead: 'Confidence,',
    resultAccent: 'and a path forward.',
    outcomes: [
      'The assistant delivered accurate, policy-grounded responses through a self-service experience tailored to workforce support. Iterative refinement and validation resolved the accuracy and context issues of the previous implementation.',
      'The successful proof of concept increased confidence in AI adoption and established a path to extend self-service to additional business functions.',
    ],
    stack: [
      { layer: 'AI platform', tech: 'Large Language Models (LLMs)' },
      { layer: 'Knowledge sources', tech: 'Approved Policy Repositories · Designated External Sources' },
      { layer: 'Quality & optimisation', tech: 'Prompt Engineering · Stakeholder Validation' },
      { layer: 'Test automation', tech: 'Python' },
      { layer: 'Delivery model', tech: 'Web-Based AI Assistant' },
    ],
    capTags: [CAP.engineering, CAP.data],
  },

  {
    slug: 'manufacturing-simulation-platform',
    industry: 'Education',
    heroTitle: 'Manufacturing leadership,',
    heroAccent: 'simulated.',
    subtitle: 'AWS · React · Canvas LMS',
    lead: 'Manufacturing leaders rarely get to practice high-stakes decisions. We built a simulation-led learning platform where they scale a plant from 500 to 2,000 units a day — and earn accreditation.',
    heroImage: IMG(1145434),
    industryTags: ['Education', 'Advanced Manufacturing', 'Simulation'],
    overview: [
      { label: 'Industry', value: 'Education · Advanced Manufacturing' },
      { label: 'Domain', value: 'Workforce Development & Industry 4.0 Training' },
      { label: 'Solution', value: 'Simulation-Based Learning · Leadership Development · AI & ML Skills Enablement' },
      { label: 'Technology partner', value: 'AWS' },
      { label: 'Core technologies', value: 'AWS · React · TypeScript · Node.js · Canvas LMS · Rise360' },
    ],
    keyOutcomes: [
      'Manufacturing scale-up modelled from 500 to 2,000 units per day',
      'Dual learning pathways delivered through a single platform',
      'Accreditation aligned with VET and Higher Education pathways',
      'AI-ready architecture established for future capability expansion',
    ],
    challengeTitleLead: 'Theory, where',
    challengeAccent: 'practice was needed.',
    challenge: [
      'Manufacturers face pressure to scale, adopt AI, and navigate Industry 4.0 — but many leaders and specialists lack practical environments that reflect modern operations.',
      'Traditional programs focus on theory over real-world decision-making, while technical teams have limited hands-on exposure to AI and ML in manufacturing. Learning also needed to align with recognised accreditation pathways.',
    ],
    solutionTitleLead: 'A simulated',
    solutionAccent: 'plant floor.',
    solutionKicker: 'The Case Study Engine — dual pathways on a single platform.',
    solution: [
      'DBiz partnered with a leading Australian university to build the Case Study Engine, a simulation-based platform powering an Advanced Manufacturing Scale-Up Program for leaders and technical specialists.',
      'Participants tackle operational and strategic challenges — production scale-up, quality management, workforce planning, supply-chain disruptions. Two pathways run on one platform: a Leadership Pathway (business transformation, operational resilience, change leadership) and a Technical AI/ML Pathway (predictive maintenance, quality assurance, supply-chain optimisation). Built on AWS and integrated with Canvas LMS and Rise360, it supports assessments, digital credentials, and recognised outcomes — architected for future AI-powered learning via Amazon Bedrock, SageMaker, Lex, and Polly.',
    ],
    resultTitleLead: 'Decisions practised,',
    resultAccent: 'before they count.',
    outcomes: [
      'The platform introduced a new approach to manufacturing education — combining leadership development, technical capability, and simulation-led learning in one environment. Participants navigate realistic challenges while building the skills to lead through growth, disruption, and technology adoption.',
      'It established a scalable foundation for future workforce-development initiatives while supporting recognised accreditation across vocational and higher-education programs.',
    ],
    stack: [
      { layer: 'Cloud platform', tech: 'AWS · Amplify · Cognito · S3 · CloudFront' },
      { layer: 'Frontend', tech: 'React · TypeScript' },
      { layer: 'Simulation engine', tech: 'Node.js · JSON Configuration Framework' },
      { layer: 'Learning systems', tech: 'Canvas LMS · Rise360' },
      { layer: 'Planned AI & ML', tech: 'Amazon Bedrock · SageMaker · Lex · Polly' },
    ],
    capTags: [CAP.engineering, CAP.cloud, CAP.data],
  },
]

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug)
