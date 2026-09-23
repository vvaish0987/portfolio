/**
 * Single source of truth for every word on the site.
 *
 * All copy is taken from the résumé (public/resume.pdf). Do not add anything
 * here that is not in that document.
 */

export const person = {
  name: "Vaishnavi V K",
  role: "Software Engineer",
  email: "vvaish0987@gmail.com",
  phone: "+91 7306554104",
  links: {
    github: "https://github.com/vvaish0987",
    linkedin: "https://www.linkedin.com/in/vaishnavivk2003",
    portfolio: "https://vaishnavi-dun.vercel.app/",
  },
  resume: "/resume.pdf",
} as const;

export const hero = {
  eyebrow: "Software Engineer (MCA, 2026)",
  headline: ["Vaishnavi V K"],
  standfirst:
    "Software Engineer (MCA, 2026) with hands-on experience across the full software development lifecycle — designing, developing, testing, debugging and deploying applications in Python, Flask and REST APIs.",
} as const;

export const summary = {
  title: "Summary",
  paragraphs: [
    "Skilled at writing clean, maintainable code, participating in code reviews, and troubleshooting production issues, including a Flask/PostgreSQL platform built end-to-end and now in daily use.",
    "Comfortable using Figma for wireframes/UI mockups and deploying web apps on Vercel. Clear communication, with a track record of translating requirements into reliable, well-tested solutions.",
  ],
} as const;

export const competencies = [
  "SDLC: Design, Development, Testing & Deployment",
  "Programming & Core CS Concepts",
  "Debugging & Code Reviews",
  "Problem-Solving & Analytical Thinking",
  "Statistical Analysis",
  "REST API Development",
  "Machine Learning & NLP",
  "Data Analysis & Visualization",
  "UI Wireframing (Figma)",
  "Communication & Presentation Skills",
  "Cross-Functional Collaboration",
  "Requirement Analysis",
  "Git/GitHub",
] as const;

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Trainee Software Engineer – Python (AI Products)",
    company: "Worktual Innovations",
    location: "Chennai, Tamil Nadu",
    period: "Feb 2026 – June 2026",
    points: [
      "Assisted in the design, development, testing and deployment of AI product features across 3+ cycles, writing clean, maintainable Python code and debugging issues in a fast-paced environment.",
      "Cleaned and statistically validated 10K+ data records for accuracy ahead of model training and reporting, improving downstream reporting efficiency by 40%.",
      "Built and tested Python & REST API automation for data workflows, debugging pipeline issues and increasing operational efficiency by 60%.",
      "Used Claude and other AI-assisted tools to speed up prototyping, debugging and documentation; participated in code reviews and presented progress updates to stakeholders.",
    ],
  },
  {
    role: "Software Development Intern – IQAC",
    company: "CHRIST (Deemed to be University)",
    location: "Bangalore, Karnataka",
    period: "Dec 2025 – Feb 2026",
    points: [
      "Led end-to-end design, development, testing and deployment of the Worklog Tracker (Flask, PostgreSQL) — live in production at iqacworklog.christuniversity.in.",
      "Analysed complex client requirements from IQAC coordinators and translated them into a tailored, rule-based automation solution aligned to accreditation goals.",
      "Automated reminder cycles and AQAR-aligned data reporting, improving on-time submission rates and reducing manual entry.",
      "Collaborated with a 5-member team via Git/GitHub, participating in code reviews and debugging, iterating from post-deployment feedback.",
    ],
  },
];

export type Project = {
  name: string;
  tagline?: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Voxpulse",
    tagline: "NLP Sentiment Analytics Platform",
    description:
      "Wireframed the UI in Figma and built/deployed on Vercel an NLP platform processing 5K+ survey responses; RoBERTa + TextBlob sentiment classification at 88% accuracy with KPI dashboards across 4+ segments.",
    stack: ["Figma", "React", "Firebase", "NLP", "RoBERTa", "TextBlob", "Plotly", "Vercel"],
  },
  {
    name: "Christ X-Change",
    tagline: "Verified Marketplace App",
    description:
      "Designed screen flows in Figma; built and tested a secure student marketplace app with automated verification logic cutting fraudulent listings by 90%, onboarding 100+ users.",
    stack: ["Figma", "Flutter", "Firebase", "Google Maps"],
  },
  {
    name: "Encrypted Chat System",
    description:
      "Designed, built and debugged a two-person chat system with 100% encrypted storage restricted to verified users, applying cryptography and network programming concepts.",
    stack: ["C", "Winsock", "XOR Encryption"],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages & Web",
    items: [
      "Python", "Java", "R", "SQL", "HTML", "CSS", "JavaScript",
      "React.js", "Flask", "RESTful APIs", "Flutter",
    ],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Machine Learning", "Deep Learning", "NLP", "Transformers", "RoBERTa",
      "RAG", "LangChain", "Hugging Face", "Claude", "AI-assisted Development",
    ],
  },
  {
    title: "Databases & Cloud",
    items: ["MySQL", "PostgreSQL", "Firebase", "Supabase", "Vercel", "Cloud Deployment"],
  },
  {
    title: "Data & Analytics",
    items: ["Pandas", "NumPy", "Statistics", "Power BI", "Tableau", "Plotly"],
  },
  {
    title: "Design & Tools",
    items: [
      "Figma", "Framer", "Git/GitHub", "Debugging", "Code Review", "MS Excel",
      "PowerPoint", "Word", "Google Workspace",
    ],
  },
];

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
    period: "July 2024 – April 2026",
  },
  {
    institution: "St Joseph's University",
    qualification: "Bachelor of Computer Applications (Data Analytics)",
    location: "Bangalore, Karnataka",
    period: "August 2021 – April 2024",
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
    period: "Feb – Dec 2023",
    description:
      "Led an 8-member team for branding, outreach and presentations; delivered 20+ assets on time through strong communication and coordination.",
  },
  {
    role: "Event Head",
    organisation: "Datagram 4.0",
    period: "Nov 2022",
    description:
      "Owned event strategy, checklists and coordination for a 10+ member team under tight deadlines.",
  },
];

export const achievements = [
  {
    title: "Letter of Appreciation",
    detail: "From the Associate Director, IQAC, CHRIST, for the deployed Worklog Tracker.",
  },
  {
    title: "First Runner-up, Elixir 2023",
    detail: "Among 30+ teams, St Joseph's University.",
  },
] as const;

export const certifications = [
  { title: "Big Data Computing", issuer: "NPTEL" },
  { title: "Cloud Computing and CyberSecurity", issuer: "Infosys" },
  { title: "Cryptography", issuer: "DataCamp" },
] as const;

export const navItems = [
  { label: "Summary", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
