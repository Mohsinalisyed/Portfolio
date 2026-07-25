import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { FaQuoteLeft } from "react-icons/fa6";

const placeholders = [
  { role: "Engineering Lead", context: "Uforia Infotech Solutions" },
  { role: "Product Manager", context: "Ideofuzion Pvt Ltd" },
  { role: "Client Stakeholder", context: "Techozon Software House" },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Testimonials"
      title="What collaborators are saying"
      description="Written references are being collected — check back soon."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {placeholders.map((item) => (
          <Reveal key={item.role}>
            <div className="flex h-full flex-col items-center gap-4 rounded-xl border border-dashed border-border bg-card/50 p-6 text-center">
              <FaQuoteLeft className="size-6 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">
                Feedback coming soon.
              </p>
              <div>
                <p className="text-sm font-medium">{item.role}</p>
                <p className="text-xs text-muted-foreground">{item.context}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
