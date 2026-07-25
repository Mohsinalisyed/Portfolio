"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Mohsin<span className="text-gradient-brand">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href={siteConfig.resumeUrl}
            download
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <FaBars className="size-5" />
            </Button>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {siteConfig.navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className={cn(buttonVariants({ variant: "default" }), "mt-2")}
                >
                  Download Resume
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
