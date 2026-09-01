export type ProjectLink = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

export type Project = {
  slug: string;
  title: string;
  /** One line for cards. Keep it short — the card has no room for more. */
  tagline: string;
  /** Two sentences at most, for the case-study hero. */
  intro: string;
  year: string;
  role: string;
  timeline: string;
  team: string;
  kind: "Client" | "Team" | "Personal";
  cover: string;
  gallery?: string[];
  stack: string[];
  links: ProjectLink[];
  context: string;
  approach: string;
  /** Three or four, a few words each. */
  did: string[];
  /** Shown on the home page. */
  featured?: boolean;
  metrics?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "clips",
    title: "Clips",
    tagline: "Marketing site for a real estate intelligence platform.",
    intro:
      "Clips is a relationship and transaction layer for estate agencies. I led the frontend on its public site: a cinematic, multilingual marketing site with an animated relationship graph at its centre.",
    year: "2026",
    role: "Frontend lead",
    timeline: "Ongoing",
    team: "At Clips",
    kind: "Team",
    cover: "/clips-picture.jpg",
    gallery: ["/clips-1.jpg"],
    stack: ["React", "Vite"],
    links: [
      { label: "View live", href: "https://clipsai.dev/", variant: "primary" },
    ],
    context:
      "The product is a graph of customers, properties and transactions. Explaining that on a marketing site means showing the connections, not describing them.",
    approach:
      "A full-bleed cinematic opening, then an animated node graph that draws the relationships out as you reach it. Restraint everywhere else so the two moments carry the page.",
    did: [
      "Led the frontend and the build",
      "Built the animated relationship graph and scroll sequence",
      "Set up the language switching across the site",
    ],
    featured: true,
  },
  {
    slug: "uncover",
    title: "Uncover",
    tagline: "An AI learning platform, co-founded and built end to end.",
    intro:
      "Uncover turns any source material into a way to study it: tutoring chat, generated quizzes, flashcards, a whiteboard and shared workspaces. I co-founded it and led the engineering, from the interface down to the deployment budget.",
    year: "2026",
    role: "Co-founder, lead engineer",
    timeline: "2 months",
    team: "Co-founded",
    kind: "Personal",
    cover: "/uncover-picture.jpg",
    gallery: ["/uncover-1.jpg", "/uncover-2.jpg"],
    stack: [
      "React",
      "TypeScript",
      "TanStack",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "GCP",
    ],
    // The repo is private and uncoverchat.com is retired, so there is
    // nothing public to link to. The case study stands on its own.
    links: [],
    context:
      "Study tools are usually one thing each: a chat, a flashcard app, a quiz maker. Keeping the same source material in all of them means re-uploading it every time, and none of them share what they learn about you.",
    approach:
      "One workspace, six modes over the same material — chat, visualise, workspaces, draw, quiz and cards. Each mode carries its own accent colour so the interface tells you where you are without a heading. Costs were a design constraint throughout: the platform had to sit near zero when idle.",
    did: [
      "Built the full stack: React and TypeScript on Spring Boot and PostgreSQL",
      "Integrated streaming LLM responses with PDF, DOCX, image OCR and URL ingestion",
      "Built real-time collaborative workspaces over WebSockets, with Google OAuth2",
      "Deployed on Cloud Run with Docker, tuned for near-zero idle cost",
    ],
    featured: true,
    metrics: [
      { value: "6", label: "study modes" },
      { value: "4", label: "ingestion formats" },
      { value: "2", label: "months to launch" },
    ],
  },
  {
    slug: "maklarexperten",
    title: "Mäklarexperten",
    tagline: "A broker comparison service for Swedish home sellers.",
    intro:
      "Mäklarexperten matches home sellers with up to four local estate agents, ranked on documented sales in their area rather than reputation. Built at Clips, where I led the frontend.",
    year: "2026",
    role: "Frontend lead",
    timeline: "Ongoing",
    team: "At Clips",
    kind: "Team",
    cover: "/maklarexperten-picture.jpg",
    gallery: ["/maklarexperten-1.jpg"],
    stack: ["Tailwind", "Cloudflare"],
    links: [
      {
        label: "View live",
        href: "https://maklarexperten.se/",
        variant: "primary",
      },
    ],
    context:
      "Sellers pick an agent on reputation and gut feeling. The site had to make the case for picking on data instead, and collect enough detail to match on without the form feeling like work.",
    approach:
      "The matching form is the hero, broken into one decision per step. Around it, real market data per city and area, and guides answering the questions sellers ask before they are ready to commit.",
    did: [
      "Led the frontend and the build",
      "Built the multi-step matching flow",
      "Built the city and area pages off live sales data",
    ],
    featured: true,
    metrics: [
      { value: "3", label: "cities" },
      { value: "20", label: "areas tracked" },
      { value: "1 330", label: "sales in the data" },
    ],
  },
  {
    slug: "ajm-hus",
    title: "AJM Hus",
    tagline: "A bilingual site for a Swedish house builder.",
    intro:
      "AJM Hus lost its website when the old Wix site came down. I rebuilt it as a static bilingual site, recovering the photography and copy from Internet Archive snapshots.",
    year: "2026",
    role: "Design and build",
    timeline: "1 week",
    team: "Solo",
    kind: "Client",
    cover: "/ajmhus-picture.jpg",
    gallery: ["/ajmhus-1.jpg", "/ajmhus-2.jpg"],
    stack: ["Astro", "Tailwind", "TypeScript", "Vercel"],
    links: [
      {
        label: "View live",
        href: "https://ajmhus.vercel.app/sv/",
        variant: "primary",
      },
    ],
    context:
      "Three years of photography, project history and copy existed only in archive snapshots of a site that no longer resolved. The content had to be recovered before any design could start.",
    approach:
      "Photography leads: large, quiet, full bleed, with an editorial serif holding the structure. One route table generates the pages, the navigation and the language alternates, so the three can’t drift apart.",
    did: [
      "Recovered 118 photographs and the bilingual copy",
      "Designed the type system, grid and page templates",
      "Built the i18n routing and the image pipeline",
    ],
    featured: true,
    metrics: [
      { value: "118", label: "photos recovered" },
      { value: "20", label: "localised pages" },
      { value: "2", label: "languages" },
    ],
  },
  {
    slug: "kitafront",
    title: "KitaFront",
    tagline: "My web studio: the brand, the site, the client work.",
    intro:
      "The studio I run for freelance work. I designed and built its site, and the client sites it showcases.",
    year: "2026",
    role: "Founder, design and build",
    timeline: "Ongoing",
    team: "Solo",
    kind: "Personal",
    cover: "/kitafront-picture.jpg",
    gallery: ["/kitafront-1.jpg"],
    stack: ["React", "TypeScript", "TanStack", "Tailwind"],
    links: [
      {
        label: "View live",
        href: "https://kita-front.vercel.app/",
        variant: "primary",
      },
    ],
    context:
      "Small-business clients don’t evaluate code. They evaluate whether the site in front of them looks like something they want.",
    approach:
      "A confident single-colour identity, device mockups of real client work, and prices stated openly. Ambiguity about cost is why most small leads go cold.",
    did: [
      "Brand, logo and the full site design",
      "Pricing model toggle and client showcase",
      "Design and build for the client sites it takes on",
    ],
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    tagline: "The site you’re reading.",
    intro:
      "One set of colour tokens driving both themes, case studies generated from a single typed data file, and motion that switches itself off when you ask it to.",
    year: "2026",
    role: "Design and build",
    timeline: "Ongoing",
    team: "Solo",
    kind: "Personal",
    cover: "/portfolio-pic.jpg",
    stack: ["React 19", "TypeScript", "TanStack Router", "Tailwind"],
    links: [
      {
        label: "View repo",
        href: "https://github.com/NikitaMokhonko/Portfolio",
      },
    ],
    context:
      "A portfolio has to survive being skimmed in ninety seconds, and hold up when the same person opens the source afterwards.",
    approach:
      "Editorial structure over decoration. Underneath, colour tokens and one content source keep it maintainable as the work changes.",
    did: [
      "Design system: colour, type scale, motion primitives",
      "Dual theme with no flash on first paint",
      "Data-driven case studies, accessible throughout",
    ],
  },
  {
    slug: "craftsdb",
    title: "CraftsDB",
    tagline: "Design for a CS2 sale-history database.",
    intro:
      "CraftsDB indexes millions of craft and charm sales across seven marketplaces. I worked on the design, and on making that much data scannable.",
    year: "2026",
    role: "UI/UX and design",
    timeline: "Ongoing",
    team: "Small team",
    kind: "Team",
    cover: "/craftsdb-picture.jpg",
    gallery: ["/craftsdb-1.jpg", "/craftsdb-2.jpg"],
    stack: ["UI/UX", "Design systems", "Figma"],
    links: [
      { label: "View live", href: "https://craftsdb.com/", variant: "primary" },
    ],
    context:
      "One card has to carry price, float value, sticker stack, market source and sale date without turning into a spreadsheet row.",
    approach:
      "A strict hierarchy per card: identity first, price second, everything else demoted to a consistent metadata line. Colour is reserved for meaning, so the eye lands on the number that matters.",
    did: [
      "Set the visual language for cards and filters",
      "Worked through browse and filtering across three catalogues",
      "Designed the landing page and its live stat overview",
    ],
    metrics: [
      { value: "2.8M", label: "crafts tracked" },
      { value: "315K", label: "charms tracked" },
      { value: "7", label: "marketplaces" },
    ],
  },
  {
    slug: "skinsmart",
    title: "SkinSmart",
    tagline: "A live commercial site for a CS2 trading business.",
    intro:
      "A marketing and contact site built around one job: getting a visitor from landing to contact with as little friction as possible.",
    year: "2025",
    role: "Design, build, brand",
    timeline: "2 weeks",
    team: "Solo",
    kind: "Client",
    cover: "/Skinsmart-picture.jpg",
    gallery: ["/skinsmart-1.jpg"],
    stack: ["React", "TypeScript", "Tailwind", "Vercel"],
    links: [
      {
        label: "View live",
        href: "https://www.skinsmart.se/",
        variant: "primary",
      },
      {
        label: "View repo",
        href: "https://github.com/NikitaMokhonko/DnM-Website",
      },
    ],
    context:
      "Anything between landing and contact was working against the business: extra pages, extra choices, decorative weight.",
    approach:
      "One dominant action per screen, clear hierarchy, and motion only where it reinforces trust. The focused version outperformed the more elaborate one I built first.",
    did: [
      "Design, build, logo and animation",
      "Domain and deployment on Vercel",
      "Performance, SEO and accessibility tuning",
    ],
  },
  {
    slug: "novabank",
    title: "Nova Bank",
    tagline: "UI/UX lead on a banking platform, team of eleven.",
    intro:
      "A full mock banking app with transfers, transaction search, loans and an admin console. I led UI/UX and owned the system that held eleven developers’ screens together.",
    year: "2025",
    role: "UI/UX lead, frontend",
    timeline: "3 weeks",
    team: "Team of 11",
    kind: "Team",
    cover: "/Novabank-picture.jpg",
    gallery: ["/novabank-1.jpg", "/novabank-2.jpg", "/novabank-3.jpg"],
    stack: ["React", "TypeScript", "Tailwind", "Figma", "Java", "GCP"],
    links: [
      {
        label: "Watch demo",
        href: "https://www.youtube.com/live/nE_16cvehM0?si=8DhKgkxW_ktEbOvX&t=1415",
        variant: "primary",
      },
      {
        label: "View repo",
        href: "https://github.com/salt-community/jfs-2025-03-31-novabank-ab",
      },
    ],
    context:
      "A banking app has to read as trustworthy, and eleven people building screens in parallel is the fastest way to lose that.",
    approach:
      "A small palette, one type scale and generous spacing, documented in Figma before anyone started building. Trust came from taking things out.",
    did: [
      "Owned the design language, components and layouts",
      "Built the landing page and sign-in flow",
      "Surveyed users on the transfer flow before building it",
    ],
  },
  {
    slug: "sweethouse",
    title: "Sweethouse",
    tagline: "An image-first storefront for a French pastry business.",
    intro:
      "A full-stack site for an artisanal pastry business, with Kafka event tracking behind it to see what visitors actually browse.",
    year: "2025",
    role: "Design, frontend, backend",
    timeline: "2 weeks",
    team: "Solo",
    kind: "Client",
    cover: "/Sweethouse-picture.jpg",
    gallery: ["/sweethouse-1.jpg", "/sweethouse-2.jpg", "/sweethouse-3.jpg"],
    stack: ["React", "TypeScript", "Tailwind", "Java", "Kafka"],
    links: [
      {
        label: "View live",
        href: "https://sweethouse-jet.vercel.app/",
        variant: "primary",
      },
      {
        label: "View repo",
        href: "https://github.com/NikitaMokhonko/sweethouse",
      },
    ],
    context:
      "The brand is cosy but the business is serious. It had to read as handmade without reading as amateur.",
    approach:
      "The palette does most of the work. On a cream background the photography feels warm; on white, the same shots felt clinical.",
    did: [
      "Design, build and photography direction",
      "Kafka click-tracking pipeline",
      "Performance, SEO and accessibility tuning",
    ],
  },
  {
    slug: "home-entertainment",
    title: "Home EntertAInment",
    tagline: "UI/UX lead on an AI entertainment platform.",
    intro:
      "Quizzes, movie recommendations, interactive stories and a board-game rules assistant, built by a team of four under one arcade theme.",
    year: "2025",
    role: "UI/UX lead, Movie Picker",
    timeline: "4 weeks",
    team: "Team of 4",
    kind: "Team",
    cover: "/he-picture.jpg",
    gallery: ["/he-1.jpg", "/he-2.jpg", "/he-3.jpg"],
    stack: ["React", "TypeScript", "Tailwind", "Figma", "Java"],
    links: [
      {
        label: "View repo",
        href: "https://github.com/salt-community/homeEntertAInment",
      },
    ],
    context:
      "Four unrelated features risked shipping as four unrelated products sharing a domain.",
    approach:
      "A committed neon arcade identity applied everywhere, so moving between tools feels like moving between rooms rather than between sites.",
    did: [
      "Set the theme and layout for mobile and desktop",
      "Designed every page in Figma",
      "Built the Movie Picker and the home page",
    ],
  },
  {
    slug: "ai-assessment",
    title: "Salt AI Assessment",
    tagline: "UI/UX lead on an AI-maturity tool for </Salt>.",
    intro:
      "A web app letting companies evaluate their AI maturity through customisable questionnaires, with a form builder behind it. Built by a team of eight.",
    year: "2025",
    role: "UI/UX lead, frontend",
    timeline: "4 weeks",
    team: "Team of 8",
    kind: "Team",
    cover: "/AI-assessment-picture.jpg",
    gallery: [
      "/AI-assessment-1.jpg",
      "/AI-assessment-2.jpg",
      "/AI-assessment-3.jpg",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Java", "PostgreSQL"],
    links: [
      {
        label: "View repo",
        href: "https://github.com/salt-community/jfs-2025-03-31-salt-ai-assesment",
      },
    ],
    context:
      "It had to sit inside the existing brand while solving a different problem than the marketing site next to it, and non-technical staff needed to build assessments without a developer.",
    approach:
      "A design aligned to the existing brand, and a form builder abstract enough to cover question types nobody had asked for yet.",
    did: [
      "Owned the UI/UX and the brand alignment",
      "Designed and built the Form Builder",
      "Built out the admin console",
    ],
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const featuredProjects = projects.filter((project) => project.featured);

