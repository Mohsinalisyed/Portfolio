import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { otherProjects } from "@/data/other-projects";

export function OtherProjects() {
  return (
    <Section
      id="other-work"
      eyebrow="Other Work"
      title="More from the archive"
      className="bg-muted/30"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {otherProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 4) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
