import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiRedux,
  SiReactquery,
  SiAxios,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiAntdesign,
  SiSass,
  SiFramer,
  SiStrapi,
  SiGraphql,
  SiWeb3Dotjs,
  SiSolidity,
  SiFigma,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import {
  FaLayerGroup,
  FaDiagramProject,
  FaCode,
  FaRobot,
  FaComments,
  FaWallet,
  FaChartLine,
  FaCodeBranch,
  FaGaugeHigh,
  FaBolt,
} from "react-icons/fa6";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
    ],
  },
  {
    id: "libraries",
    label: "Libraries",
    skills: [
      { name: "Fabric.js", icon: FaLayerGroup },
      { name: "React Flow", icon: FaDiagramProject },
      { name: "Axios", icon: SiAxios },
    ],
  },
  {
    id: "state-management",
    label: "State Management",
    skills: [
      { name: "Redux", icon: SiRedux },
      { name: "React Query", icon: SiReactquery },
    ],
  },
  {
    id: "styling",
    label: "Styling",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "SASS", icon: SiSass },
    ],
  },
  {
    id: "animation",
    label: "Animation",
    skills: [{ name: "Framer Motion", icon: SiFramer }],
  },
  {
    id: "api-integration",
    label: "API Integration",
    skills: [
      { name: "RESTful APIs", icon: FaCode },
      { name: "Strapi CMS", icon: SiStrapi },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    id: "ai",
    label: "AI",
    skills: [
      { name: "OpenAI API", icon: FaRobot },
      { name: "Chatbot Interfaces", icon: FaComments },
    ],
  },
  {
    id: "web3",
    label: "Web3",
    skills: [
      { name: "Web3.js", icon: SiWeb3Dotjs },
      { name: "Smart Contracts", icon: SiSolidity },
      { name: "Wallet Connectivity", icon: FaWallet },
      { name: "DeFi UI", icon: FaChartLine },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    skills: [
      { name: "GitHub", icon: SiGithub },
      { name: "Bitbucket", icon: SiBitbucket },
      { name: "Netlify", icon: SiNetlify },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    skills: [
      { name: "Code Splitting", icon: FaCodeBranch },
      { name: "Lazy Loading", icon: FaGaugeHigh },
      { name: "SPA Optimization", icon: FaBolt },
    ],
  },
];
