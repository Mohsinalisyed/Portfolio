import type { OtherProject } from "@/types/project";
import gamesfiImg from "@/assets/projects/gamesfi.png";
import synkedImg from "@/assets/projects/synked.png";
import kwiktrustImg from "@/assets/projects/kwiktrust.png";
import quickBuyImg from "@/assets/projects/quick-buy.png";

export const otherProjects: OtherProject[] = [
  {
    slug: "gamesfi",
    name: "Gamesfi",
    description:
      "Web3 gaming platform interface built with React.js, connecting play-to-earn game listings to on-chain wallet interactions.",
    url: "https://www.gamesfi.live/",
    techStack: ["React.js", "Web3.js"],
    coverImage: gamesfiImg,
    featured: false,
  },
  {
    slug: "synked",
    name: "Synked",
    description:
      "React.js product interface focused on clean, responsive UI delivery across devices.",
    url: "https://www.synked.gg/",
    techStack: ["React.js"],
    coverImage: synkedImg,
    featured: false,
  },
  {
    slug: "kwiktrust",
    name: "KwikTrust",
    description:
      "Responsive Angular front end built for a trust and verification platform.",
    url: "https://kwiktrust.com/",
    techStack: ["Angular"],
    coverImage: kwiktrustImg,
    featured: false,
  },
  {
    slug: "quickbuy",
    name: "QuickBuy",
    description:
      "Next.js storefront interface built for fast, streamlined online purchasing.",
    url: "https://quickbuyhere.xyz/",
    techStack: ["Next.js"],
    coverImage: quickBuyImg,
    featured: false,
  },
];
