/**
 * Single source of truth for every word on the site.
 *
 * Copy notes: claims here are deliberately scoped to what can be defended in an
 * interview. Volume and scope figures from the CV are kept (10K+ samples, 5K+
 * responses, 88% accuracy); unverifiable efficiency percentages were dropped in
 * favour of describing the actual work. The C chat project is framed as socket
 * programming rather than production cryptography.
 */

export const person = {
  name: "Vaishnavi V K",
  initials: "VK",
  role: "Software Engineer",
  focus: "Data, AI & Applied Python",
  location: "Bangalore, India",
  available: true,
  email: "vvaish0987@gmail.com",
  phone: "+91 7306554104",
  links: {
    github: "https://github.com/vvaish0987",
    linkedin: "https://www.linkedin.com/in/vaishnavivk2003",
  },
  /** Drop a PDF at public/resume.pdf to activate the résumé button. */
  resume: "/resume.pdf",
} as const;

export const hero = {
  eyebrow: "Software Engineer · Data & AI",
  headline: ["Building with", "data, models", "and intent."],
  standfirst:
    "MCA graduate and Python engineer working where data pipelines meet machine learning. I turn messy datasets into things people can actually read, decide on, and ship.",
} as const;

export const about = {
  eyebrow: "About",
  title: "I like the unglamorous half of intelligent systems.",
  paragraphs: [
    "Most of the interesting work in AI happens before the model runs — validating what came in, understanding why a field is null in eleven thousand rows, and deciding what a number actually means before anyone puts it on a dashboard. That is the part I gravitate toward.",
    "I spent my final semester at Worktual Innovations as a Python trainee on the AI team, preparing and validating data for model development cycles and automating the reporting that surrounded them. Before that I built a sentiment analytics platform, a campus marketplace app used by a hundred students, and a chat system in C — three very different problems that taught me the same lesson about scope.",
    "I also run teams. I led an eight-person media and design unit through a year of university events, which is where I learned that shipping on time is a communication problem more often than a technical one.",
  ],
  now: "Currently open to roles in data engineering, analytics and applied ML.",
} as const;

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Trainee Software Engineer — Python",
    company: "Worktual Innovations",
    location: "Chennai, Tamil Nadu",
    period: "Feb 2026 — Jun 2026",
    summary:
      "Data preparation and reporting automation for the AI engineering team, alongside the final semester of my MCA.",
    points: [
      "Validated and monitored 10,000+ data samples for accuracy and consistency, catching quality issues before they reached model training.",
      "Prepared and preprocessed structured datasets supporting three AI model development cycles, working alongside the research and product teams.",
      "Automated recurring reporting workflows in Python against internal REST APIs, replacing a manual process that ran every cycle.",
      "Applied machine learning, deep learning and retrieval-augmented generation concepts to support LLM-based solution development, focused on the preprocessing and feature engineering end.",
      "Proposed and helped set up a project management practice for the team, improving task tracking and hand-offs across parallel AI initiatives.",
    ],
    stack: ["Python", "REST APIs", "Pandas", "NLP", "RAG"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  year: string;
  role: string;
  description: string;
  points: string[];
  stack: string[];
  /** Fill these in once the repos are public — the UI hides missing links. */
  source?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Voxpulse",
    tagline: "Public-opinion analytics with sentiment and emotion tagging",
    year: "2025",
    role: "Lead developer",
    description:
      "A web platform that collects public opinion at scale and turns raw free-text responses into segmented, readable analytics — the kind of reporting workflow a stakeholder would actually use to make a call.",
    points: [
      "Led end-to-end implementation, from collection through to the dashboards on top.",
      "Collected and evaluated 5,000+ responses across multiple topics.",
      "Built KPI dashboards with demographic segmentation across four user segments, surfacing trends and anomalies rather than raw counts.",
      "Implemented sentiment analysis and emotion tagging with a transformer model (RoBERTa) alongside TextBlob, reaching 88% classification accuracy on the evaluation set.",
    ],
    stack: ["React", "Firebase", "Python", "RoBERTa", "TextBlob", "Plotly"],
  },
  {
    name: "Christ X-Change",
    tagline: "Verified campus marketplace for buying and selling used goods",
    year: "2024",
    role: "Mobile developer",
    description:
      "A marketplace app scoped to a single university, so that trust could come from verification rather than from reviews or escrow. Onboarded 100+ students in its first run.",
    points: [
      "Built the full mobile client in Flutter with Firebase authentication and cloud storage.",
      "Designed a student-verification flow that kept listings inside the campus community, which is what made a peer-to-peer marketplace viable at this size.",
      "Integrated real-time chat and instant data sync between buyers and sellers.",
      "Added Google Maps for handover locations on campus.",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Google Maps"],
  },
  {
    name: "Encrypted Chat System",
    tagline: "Two-party chat over raw sockets in C",
    year: "2024",
    role: "Solo build",
    description:
      "A systems programming exercise: a two-person chat client written against the Winsock API in C, with message obfuscation layered on top. Built to understand sockets, buffers and manual memory handling from the ground up — not as production cryptography.",
    points: [
      "Implemented the client–server transport directly on Winsock, handling connection lifecycle and message framing by hand.",
      "Added an XOR obfuscation layer keyed from the username and message text so stored history was not plaintext on disk.",
      "Gated history playback behind user verification.",
      "Worth stating plainly: XOR is not secure encryption. The value here was in the socket and memory work, and in learning why real systems use vetted primitives.",
    ],
    stack: ["C", "Winsock", "Sockets"],
  },
];

export type SkillGroup = {
  title: string;
  /** core = used in shipped work · working = solid coursework · exploring = actively learning */
  items: { name: string; level: "core" | "working" | "exploring" }[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: "core" },
      { name: "SQL", level: "core" },
      { name: "C", level: "core" },
      { name: "Java", level: "working" },
      { name: "R", level: "working" },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "NLP", level: "core" },
      { name: "Transformers / RoBERTa", level: "core" },
      { name: "Machine Learning", level: "working" },
      { name: "Deep Learning", level: "working" },
      { name: "Hugging Face", level: "working" },
      { name: "RAG", level: "exploring" },
      { name: "LangChain", level: "exploring" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { name: "Pandas", level: "core" },
      { name: "NumPy", level: "core" },
      { name: "Matplotlib", level: "core" },
      { name: "Seaborn", level: "core" },
      { name: "Power BI", level: "working" },
      { name: "Tableau", level: "working" },
    ],
  },
  {
    title: "Web & Mobile",
    items: [
      { name: "React", level: "core" },
      { name: "Flutter", level: "core" },
      { name: "REST APIs", level: "core" },
      { name: "HTML5 / CSS3", level: "core" },
      { name: "Next.js", level: "exploring" },
      { name: "Tailwind CSS", level: "exploring" },
      { name: "Express.js", level: "exploring" },
    ],
  },
  {
    title: "Data Stores & Cloud",
    items: [
      { name: "Firebase", level: "core" },
      { name: "Git", level: "core" },
      { name: "MySQL", level: "working" },
      { name: "AWS", level: "working" },
    ],
  },
];

export const skillLegend: Record<SkillGroup["items"][number]["level"], string> = {
  core: "Used in shipped work",
  working: "Solid working knowledge",
  exploring: "Actively learning",
};

export type Education = {
  institution: string;
  qualification: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    institution: "CHRIST (Deemed to be University)",
    qualification: "Master of Computer Applications",
    location: "Bangalore, Karnataka",
    period: "Jul 2024 — Apr 2026",
  },
  {
    institution: "St Joseph's University",
    qualification: "Bachelor of Computer Applications, Data Analytics",
    location: "Bangalore, Karnataka",
    period: "Aug 2021 — Apr 2024",
  },
];

export type Leadership = {
  role: string;
  organisation: string;
  period: string;
  description: string;
};

export const leadership: Leadership[] = [
  {
    role: "Head of Media & Design",
    organisation: "Analytica 2023",
    period: "Feb — Dec 2023",
    description:
      "Led an eight-member team across branding and digital outreach for a year of university events, delivering 20+ assets on schedule.",
  },
  {
    role: "Event Head",
    organisation: "Datagram 4.0",
    period: "Nov 2022",
    description:
      "Ran planning, execution checklists and coordination for a team of ten under a fixed event deadline.",
  },
];

export const achievements = [
  {
    title: "First runner-up, Elixir 2023",
    detail: "Among 30+ teams at the university-level exhibition hosted by St Joseph's University.",
  },
  {
    title: "Big Data Computing",
    detail: "NPTEL certification.",
  },
  {
    title: "Cloud Computing & Cyber Security",
    detail: "Certification courses, Infosys Springboard.",
  },
  {
    title: "Cryptography",
    detail: "Certification course, DataCamp.",
  },
] as const;

export const contact = {
  eyebrow: "Contact",
  title: "Let's talk.",
  body: "Open to roles in data engineering, analytics and applied machine learning — and always happy to talk through a problem even if there is no role attached.",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
