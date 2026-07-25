import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { experience, education, certifications } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've built"
    >
      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-border pl-8">
          {experience.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 0.1} className="mb-12 last:mb-0">
              <li>
                <span className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full bg-gradient-brand ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">{entry.role}</h3>
                  <span className="text-sm text-muted-foreground">
                    {entry.startDate} &ndash; {entry.endDate}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-primary">
                  {entry.company} &middot; {entry.companyLocation}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {entry.summary}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-muted-foreground">
                      &bull; {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {entry.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-16 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Education
            </h3>
            {education.map((entry) => (
              <div key={entry.institution} className="text-sm">
                <p className="font-medium">{entry.degree}</p>
                <p className="text-muted-foreground">
                  {entry.institution}, {entry.location}
                </p>
                <p className="text-muted-foreground">
                  {entry.startDate} &ndash; {entry.endDate}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-sm">
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-muted-foreground">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
