import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects I've shipped"
      description="Production applications spanning Web3, AI-assisted tooling, and canvas-based editors."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
