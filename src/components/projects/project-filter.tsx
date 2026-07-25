"use client";

import { useMemo, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/types/project";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("all");

  const filters = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return ["all", ...Array.from(set).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.techStack.includes(active));
  }, [projects, active]);

  return (
    <div>
      <ToggleGroup
        value={[active]}
        onValueChange={(value) => value[0] && setActive(value[0])}
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => (
          <ToggleGroupItem
            key={filter}
            value={filter}
            className="rounded-full border border-border px-4 py-1.5 text-sm capitalize data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            {filter === "all" ? "All Projects" : filter}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
