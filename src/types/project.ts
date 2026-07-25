import type { StaticImageData } from "next/image";

export interface FeaturedProject {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  liveUrl: string;
  techStack: string[];
  tags: string[];
  coverImage?: StaticImageData;
  featured: true;
  // Reserved for Phase 2 full case-study pages.
  challenge?: string;
  approach?: string;
  architecture?: string;
  impact?: string[];
  gallery?: StaticImageData[];
}

export interface OtherProject {
  slug: string;
  name: string;
  description: string;
  url: string;
  techStack: string[];
  coverImage: StaticImageData;
  featured: false;
}

export type Project = FeaturedProject | OtherProject;
