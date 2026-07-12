export interface ProcessStep {
  n: string
  title: string
  desc: string
}

export const processSteps: ProcessStep[] = [
  { n: '01', title: 'Elicit', desc: 'Stakeholder interviews, workflow walkthroughs, and use-case scoping to surface the real problem, not just the requested feature.' },
  { n: '02', title: 'Analyze', desc: 'Break requirements into functional units; write IEEE-compliant SRS documents that both business and dev teams can sign off on.' },
  { n: '03', title: 'Model', desc: 'UML use-case, activity, sequence & class diagrams; DFDs and ERDs to make data flow and system structure explicit.' },
  { n: '04', title: 'Validate', desc: 'Acceptance criteria, test cases (BVA, ECP, white-box/MC-DC), and prototype walkthroughs before a line of code ships.' },
  { n: '05', title: 'Deliver', desc: 'Sign-off with stakeholders, handoff docs for engineering, and staying in the loop through build and release.' },
]

export interface CaseStudy {
  key: string
  title: string
  meta: string
  status: string
  problem: string
  role?: string
  artifacts: string
  approach: string
  outcome?: string
  tags: string[]
  link: { label: string; href: string }
  diagrams: import('./components/Diagrams').DiagramKey[]
  // Optional: real exported diagram images (transparent-background PNG/SVG).
  // Place files in /public/diagrams and reference them here, e.g. '/diagrams/capstone-class.png'.
  // Any diagram key without an entry here falls back to the built-in sketch.
  diagramImages?: Partial<Record<import('./components/Diagrams').DiagramKey, string>>
}

const publicAsset = (path: string) => `${((import.meta as any).env?.BASE_URL ?? '/')}${path.replace(/^\/+/, '')}`

export const caseStudies: CaseStudy[] = [
  {
    key: 'capstone',
    title: 'AI-Integrated Multi-Channel E-Commerce Platform for SMEs',
    meta: 'University Capstone · Oct 2025 – Jun 2026 · Business Analyst & Front-end Lead',
    status: 'Done — sanquo.shop no longer deployed',
    problem:
      'Small and medium enterprises needed one coherent platform to sell across multiple channels, with distinct workflows for buyers, sellers, and admins — not three disconnected tools.',
    role: 'Led requirements elicitation across 11 modules on a 3-person team, then moved into front-end delivery once modeling was locked.',
    artifacts: '120+ functional requirements, a full UML suite (use-case, activity, sequence, and class diagrams), an ERD spanning Buyer/Seller/Admin roles, and a system architecture design.',
    approach:
      'Modeled the platform as an event-driven, choreographed system (RabbitMQ) with a Dead Letter Queue for failed messages, Redis caching for read-heavy paths, and idempotency checks to keep retries safe.',
    outcome:
      'Full acceptance test suite passed: 35/35 functional test cases qualified across 10 modules. Non-functional testing confirmed API latency held P95 < 200ms under 500 concurrent requests with a 99.9% uptime target met. The AI chatbot\u2019s intent classifier scored a 100% pass rate across 51 test cases (RAG pipeline faithfulness: 0.96).',
    tags: ['ASP.NET Core 8.0', 'React/TypeScript', 'PostgreSQL', 'Redis', 'RabbitMQ', 'FastAPI', 'Docker'],
    link: { label: 'Full UML & ERD suite (Drive)', href: 'https://drive.google.com/drive/folders/1nwq6Ae6WZMuupuiMMh5qf6NVt1UPl8Xt?usp=drive_link' },
    diagrams: ['architecture', 'usecase', 'activity', 'sequence', 'class', 'erd'],
    diagramImages: {
      architecture: publicAsset('/diagrams/capstone/System Architecture Design - Simplified.drawio.svg'),
      usecase: publicAsset('/diagrams/capstone/Use Case Diagram.drawio.svg'),
      activity: publicAsset('/diagrams/capstone/Activity Diagram.drawio.svg'),
      sequence: publicAsset('/diagrams/capstone/Sequence Diagram.drawio.svg'),
      class: publicAsset('/diagrams/capstone/Class Diagram.drawio.svg'),
      erd: publicAsset('/diagrams/capstone/ERD.png'),
    },
  },
  {
    key: 'electrostore',
    title: 'ElectroStore — Electronics E-Commerce System',
    meta: 'University Project · Nov – Dec 2025 · Business Analyst',
    status: 'Documented',
    problem:
      'A retail business wanted its customer, staff, and admin operations digitized under one system, without a shared source of truth for what "digitized" meant.',
    artifacts: 'An IEEE-compliant SRS, Data Flow Diagrams (DFD), a full UML suite (use-case, activity, sequence, and class diagrams), an ERD, a system architecture design, and Figma UI prototypes.',
    approach:
      'Translated business needs into a three-layer technical architecture (presentation / logic / data), using DFDs to trace exactly where information moved between customer, staff, and admin, before any UI was designed.',
    tags: ['SRS (IEEE)', 'DFD', 'ERD', 'Figma'],
    link: { label: 'github.com/Phuchoang2004/Online-Electronics-Selling-System', href: 'https://github.com/Phuchoang2004/Online-Electronics-Selling-System' },
    diagrams: ['dfd', 'usecase', 'activity', 'sequence', 'class', 'architecture'],
    diagramImages: {
      dfd: publicAsset('/diagrams/electrostore/DFD.drawio.svg'),
      usecase: publicAsset('/diagrams/electrostore/Use Case.drawio.svg'),
      sequence: publicAsset('/diagrams/electrostore/Sequence Diagram.drawio.svg'),
      class: publicAsset('/diagrams/electrostore/Class Diagram.drawio.svg'),
      activity: publicAsset('/diagrams/electrostore/Activity Diagram.drawio.svg'),
      architecture: publicAsset('/diagrams/electrostore/Architecture Design.drawio.svg'),
    },
  },
]

export interface Skill {
  name: string
  pct: number
}

export const skills: Skill[] = [
  { name: 'Requirements Engineering', pct: 82 },
  { name: 'System Analysis & Design (UML/DFD/ERD)', pct: 85 },
  { name: 'QA & Testing (BVA, ECP, white-box)', pct: 78 },
  { name: 'Prototyping & UI/UX (Figma)', pct: 75 },
  { name: 'Agile/Scrum Methodologies', pct: 65 },
]

export const tools = ['Figma', 'UML', 'ERD', 'DFD', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Docker', 'Shopify', 'PHP', 'HTML/CSS/JS']