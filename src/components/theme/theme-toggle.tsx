"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TiWeatherSunny } from "react-icons/ti";
import { MdDarkMode } from "react-icons/md";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="size-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <TiWeatherSunny className="size-5" />
      ) : (
        <MdDarkMode className="size-5" />
      )}
    </Button>
  );
}
