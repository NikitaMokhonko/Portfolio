export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  current?: boolean;
  points: string[];
  stack?: string[];
};

export const experience: Role[] = [
  {
    company: "Clips",
    title: "Frontend Lead",
    period: "2026 — Present",
    location: "Stockholm",
    current: true,
    points: [
      "Own the frontend codebase at an AI startup, leading architecture, development and design of AI-powered product features",
      "Established and maintain the shared design system adopted across multiple products",
      "Keep interfaces conformant by applying WCAG standards across products",
      "Set and uphold engineering standards across code review, testing and CI/CD",
      "Mentor developers through onboarding, technical guidance and review",
      "Design and build complete systems, from wireframes through backend, API and model integrations, infrastructure and deployment",
    ],
    stack: ["React", "TypeScript", "Figma", "CI/CD"],
  },
  {
    company: "Uncover",
    title: "Co-Founder & Lead Engineer",
    period: "2026",
    location: "Stockholm",
    points: [
      "Built a full-stack AI learning platform on Spring Boot, React/TypeScript and PostgreSQL",
      "Integrated OpenAI with streaming responses and multi-format OCR ingestion for context-aware tutoring",
      "Developed real-time collaborative workspaces over WebSockets, with Google OAuth2 authentication",
      "Managed deployment on GCP with Docker, tuned for near-zero idle cost",
    ],
    stack: ["React", "TypeScript", "Java", "PostgreSQL", "GCP", "Docker"],
  },
  {
    company: "School of Applied Technology",
    title: "UI/UX Lead & Full-Stack Developer",
    period: "2025 — 2026",
    location: "Stockholm",
    points: [
      "Led UI/UX strategy and frontend development for full-stack web apps, building accessible and visually cohesive interfaces in React and TypeScript",
      "Acted as primary owner for design decisions while collaborating with backend developers on Java, Spring Boot and PostgreSQL",
      "Contributed to agile teams with a focus on maintainable code, testing and CI/CD deployments on GCP",
    ],
    stack: ["React", "TypeScript", "Figma", "Java", "PostgreSQL", "GCP"],
  },
  {
    company: "Elgiganten AB",
    title: "Service Advisor",
    period: "2024 — 2025",
    location: "Stockholm",
    points: [
      "Provided technical guidance and customer support for consumer electronics, coordinating after-sales service with technicians and external partners",
    ],
  },
  {
    company: "AJM Group",
    title: "Web Development & Operations",
    period: "2020 — 2023",
    location: "Stockholm",
    points: [
      "Developed and maintained the official company websites in HTML, CSS, JavaScript and Wix, improving SEO, UI/UX and conversion flow",
      "Designed logos and UI elements aligned with company branding",
      "Handled operations alongside development, from procurement and deliveries to supplier relationships",
    ],
  },
];

export const languages = [
  { name: "Swedish", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Russian", level: "Fluent" },
  { name: "French", level: "Intermediate" },
];
