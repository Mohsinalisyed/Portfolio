import Link from "next/link";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

function CoverImage({ project }: { project: Project }) {
  if (project.coverImage) {
    return (
      <Image
        src={project.coverImage}
        alt={`${project.name} preview`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-brand">
      <span className="text-2xl font-bold text-white/90">{project.name}</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const href = project.featured ? `/projects/${project.slug}` : project.url;
  const isInternal = project.featured;

  const content = (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <CoverImage project={project} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <FaArrowUpRightFromSquare className="mt-1 size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        </div>
        <p className="text-sm text-muted-foreground">
          {project.featured ? project.tagline : project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  if (isInternal) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {content}
    </a>
  );
}
