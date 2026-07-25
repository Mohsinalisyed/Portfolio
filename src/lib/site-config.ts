import { featuredProjects } from "@/data/projects";
import { otherProjects } from "@/data/other-projects";
import { skillCategories } from "@/data/skills";

export const siteConfig = {
  url: "https://portfolio-three-tau-88.vercel.app",
  name: "Mohsin Ali Syed",
  role: "Frontend Engineer",
  tagline:
    "Front End Developer | React & Next.js Expert | Web3 & AI Integrations | Performance-Driven UX",
  email: "shahmohsin873@gmail.com",
  phone: "+92 308 5153201",
  location: "Gulberg Green, Islamabad, Pakistan",
  linkedin: "https://www.linkedin.com/in/mohsin-ali-syed-10a16b215",
  github: "https://github.com/Mohsinalisyed",
  resumeUrl: "/resume/Mohsin-Ali-Syed-Resume.pdf",
  yearsExperience: "3.5+",
  currentRole: "Software Engineer at Uforia Infotech Solutions",
  primaryTech: ["React.js", "Next.js", "TypeScript", "Web3.js"],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const derivedStats = {
  yearsExperience: siteConfig.yearsExperience,
  totalProjects: featuredProjects.length + otherProjects.length,
  bugsResolved: "100+",
  performanceImprovement: "30-40%",
  technologiesUsed: skillCategories.reduce(
    (count, category) => count + category.skills.length,
    0
  ),
};
