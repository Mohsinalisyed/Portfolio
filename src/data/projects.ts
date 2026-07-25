import type { FeaturedProject } from "@/types/project";
import scribepayImg from "@/assets/projects/scribepay.png";
import pentagonWalletImg from "@/assets/projects/pentagon-wallet.png";

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "kixxl",
    name: "Kixxl",
    tagline:
      "AI-powered DTF gang sheet builder for print-ready apparel production",
    shortDescription:
      "Built the drag-and-drop Fabric.js canvas editor and automated layout engine behind an AI-assisted DTF gang-sheet builder — giving print shops auto-nesting, 300 DPI export, and direct Shopify/WooCommerce order integration in place of manual file prep.",
    liveUrl: "https://kixxl.com/",
    techStack: ["React.js", "Fabric.js", "Bootstrap"],
    tags: ["React", "Canvas", "AI", "eCommerce"],
    featured: true,
  },
  {
    slug: "scribepay",
    name: "ScribePay",
    tagline:
      "Crypto payment SDK powering ETH, BNB & Polygon checkout for third-party developers",
    shortDescription:
      "Shipped scribepay-sdk, a published npm crypto payment SDK supporting ETH, BNB, and Polygon, plus the full onboarding UI, SDK dashboard, and transaction history that let third-party developers integrate crypto checkout without touching smart contract internals directly.",
    liveUrl: "https://scribepay.org/",
    techStack: ["React.js", "Web3.js", "Smart Contracts"],
    tags: ["React", "Web3", "FinTech", "SDK"],
    coverImage: scribepayImg,
    featured: true,
  },
  {
    slug: "pentagon-wallet",
    name: "Pentagon Wallet",
    tagline:
      "Non-custodial DeFi wallet with multi-chain swap and liquidity tooling",
    shortDescription:
      "Contributed core swap and liquidity interfaces to a non-custodial, multi-chain DeFi wallet, then optimized front-end rendering and transaction flows so asset swaps stayed smooth and lag-free even under volatile on-chain conditions.",
    liveUrl: "https://pentaswap.io/#/swap",
    techStack: ["React.js", "Web3.js"],
    tags: ["React", "Web3", "DeFi"],
    coverImage: pentagonWalletImg,
    featured: true,
  },
  {
    slug: "bcsh",
    name: "BCSH",
    tagline:
      "Web3 NFT platform for collections, airdrops, and multi-chain interactions",
    shortDescription:
      "Developed a responsive Next.js Web3 platform for NFT collections and airdrop campaigns, wiring up MetaMask and WalletConnect connectivity and consuming smart contract/REST data to surface live NFT metadata and transaction history to holders.",
    liveUrl: "https://bcsh.xyz/",
    techStack: ["Next.js", "Web3.js"],
    tags: ["Next.js", "Web3", "NFT"],
    featured: true,
  },
  {
    slug: "instadoodle",
    name: "InstaDoodle",
    tagline: "Cross-device canvas drawing platform built with the Canvas API",
    shortDescription:
      "Constructed a responsive Vue.js drawing platform with brush, eraser, and shape tools on the native Canvas API, tuned for consistent drawing input and performance across desktop and touch devices.",
    liveUrl: "https://instadoodle.com/",
    techStack: ["Vue.js", "Canvas API"],
    tags: ["Vue.js", "Canvas"],
    featured: true,
  },
];
