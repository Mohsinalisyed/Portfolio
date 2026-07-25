import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { featuredProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
        Case Study
      </p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {project.name}
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants(), "mt-6 gap-2")}
      >
        Visit Live Site
        <FaArrowUpRightFromSquare className="size-3.5" />
      </a>

      <div className="relative mt-10 aspect-video overflow-hidden rounded-xl border border-border bg-muted">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`${project.name} preview`}
            fill
            className="object-cover object-top"
            placeholder="blur"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-brand">
            <span className="text-3xl font-bold text-white/90">
              {project.name}
            </span>
          </div>
        )}
      </div>

      <div className="mt-10 max-w-2xl">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-3 text-muted-foreground">{project.shortDescription}</p>
        <p className="mt-6 rounded-lg border border-dashed border-border bg-muted/40 p-4 text-sm text-muted-foreground">
          Full case study — challenge, architecture, and engineering
          decisions — is coming soon.
        </p>
      </div>
    </div>
  );
}
