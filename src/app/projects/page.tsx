import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/project-filter";
import { featuredProjects } from "@/data/projects";
import { otherProjects } from "@/data/other-projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production React, Next.js, and Web3 projects — from AI-assisted canvas editors to DeFi wallets.",
};

export default function ProjectsPage() {
  const allProjects = [...featuredProjects, ...otherProjects];

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Projects
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything I&apos;ve shipped
        </h1>
        <p className="mt-4 text-muted-foreground">
          Filter by technology to see how the stack maps to real production work.
        </p>
      </div>
      <ProjectFilter projects={allProjects} />
    </div>
  );
}
