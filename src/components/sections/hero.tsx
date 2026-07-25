import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import profileImg from "@/assets/images/profile.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <Badge
            variant="secondary"
            className="mb-6 uppercase tracking-wide"
          >
            Design &middot; Development &middot; Frontend
          </Badge>
          <p className="mb-2 text-lg font-light text-muted-foreground">
            {siteConfig.currentRole}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Building fast, <span className="text-gradient-brand">polished</span>{" "}
            web experiences
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {siteConfig.yearsExperience} years crafting production React and
            Next.js interfaces across Web3, FinTech, AI, and eCommerce —
            focused on performance, accessibility, and shipping fast without
            cutting corners.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {siteConfig.primaryTech.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className={cn(buttonVariants({ size: "lg" }))}>
              View Projects
            </Link>
            <a
              href={siteConfig.resumeUrl}
              download
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Download Resume
            </a>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              Contact Me
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-brand p-1.5 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-[1.3rem] bg-background">
              <Image
                src={profileImg}
                alt={siteConfig.name}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
