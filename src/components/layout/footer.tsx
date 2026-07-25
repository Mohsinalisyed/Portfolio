import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-muted-foreground">
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <FaLinkedin className="size-5" />
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <FaGithub className="size-5" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <FaEnvelope className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
