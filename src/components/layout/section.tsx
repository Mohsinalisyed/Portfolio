import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-muted-foreground">{description}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
