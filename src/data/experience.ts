export interface ExperienceEntry {
  role: string;
  company: string;
  companyLocation: string;
  startDate: string;
  endDate: string;
  current: boolean;
  summary: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Uforia Infotech Solutions",
    companyLocation: "I-9/3, Islamabad",
    startDate: "June 2025",
    endDate: "Present",
    current: true,
    summary:
      "Building the media-tooling core of the product — canvas-heavy editors that need to stay fast and precise under real production workloads.",
    bullets: [
      "Re-architected core React component structure across the product's media tooling suite, cutting render times significantly and keeping complex canvas-heavy screens responsive under load.",
      "Built pixel-precise vector graphics manipulation directly on HTML canvas with Fabric.js, giving the product professional-grade media editing tools comparable to dedicated design software.",
      "Architected end-to-end image, video, and workflow editors that collapsed multi-step manual production processes into a single guided flow, reducing turnaround time for media output.",
    ],
    tech: ["React.js", "Fabric.js", "HTML Canvas", "TypeScript"],
  },
  {
    role: "Frontend Engineer – React.js & Next.js",
    company: "Ideofuzion Pvt Ltd",
    companyLocation: "Bahria Town, Rawalpindi",
    startDate: "Oct 2022",
    endDate: "June 2025",
    current: false,
    summary:
      "Owned frontend delivery across 10+ production SPAs, pairing performance work with the process changes that kept releases stable.",
    bullets: [
      "Delivered 10+ production single-page applications using React.js, Next.js, and Redux, improving page-load performance by 30-40% through code splitting and lazy loading — directly improving user retention and Core Web Vitals scores.",
      "Triaged and resolved 100+ frontend bugs across multiple live deployments, reducing pre-release defect counts and stabilizing production releases for end users.",
      "Championed component-based architecture and instituted peer code reviews across the frontend team, cutting post-release hotfixes by roughly 25% and raising overall code quality.",
      "Partnered directly with designers and backend engineers to ship pixel-perfect, API-connected features on schedule, keeping design intent intact from Figma to production.",
    ],
    tech: ["React.js", "Next.js", "Redux", "REST APIs", "Strapi CMS"],
  },
  {
    role: "Frontend Developer",
    company: "Techozon Software House",
    companyLocation: "Gulberg Green, Islamabad",
    startDate: "July 2022",
    endDate: "Sep 2022",
    current: false,
    summary:
      "First professional role — shipped client-facing interfaces and helped establish reusable frontend patterns early in the codebase's life.",
    bullets: [
      "Crafted responsive interfaces with HTML5, CSS3, JavaScript, and React.js, accelerating delivery timelines for client projects.",
      "Implemented scalable, reusable frontend architecture in close collaboration with design and backend teams, laying groundwork later engineers built on.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export const education: EducationEntry[] = [
  {
    degree: "BSc Computer Science",
    institution: "University of Lahore",
    location: "Islamabad",
    startDate: "Jun 2018",
    endDate: "Jul 2022",
  },
];

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
}

export const certifications: CertificationEntry[] = [
  {
    name: "Soft Skills for Professionals",
    issuer: "Pakistan Software Export Board (PSEB)",
    date: "May 2026",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Sep 2023",
  },
];
