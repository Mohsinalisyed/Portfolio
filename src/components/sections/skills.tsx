import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for"
      description="A working stack shaped by production constraints, not a checklist."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.id} delay={(i % 6) * 0.06}>
            <div className="h-full rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {category.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 text-sm">
                    <skill.icon className="size-4 shrink-0 text-primary" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
