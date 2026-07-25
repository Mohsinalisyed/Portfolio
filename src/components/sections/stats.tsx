"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { derivedStats } from "@/lib/site-config";

interface StatItem {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: parseFloat(derivedStats.yearsExperience),
    decimals: 1,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: derivedStats.totalProjects,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 100,
    suffix: "+",
    label: "Frontend Bugs Resolved",
  },
  {
    value: derivedStats.technologiesUsed,
    suffix: "+",
    label: "Technologies Used",
  },
];

function AnimatedStat({ value, decimals = 0, prefix = "", suffix = "" }: StatItem) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [isInView, value, decimals, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="text-3xl font-extrabold text-gradient-brand sm:text-4xl">
              <AnimatedStat {...stat} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
