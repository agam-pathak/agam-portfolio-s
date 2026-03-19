"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function CaseStudyHeader({ title = "Open Live App", liveUrl }: { title?: string, liveUrl: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Link href="/#projects" className="brand">
          <span className="brand-mark" aria-hidden="true">
            AP
          </span>
          <span className="brand-text hidden sm:inline">Back to Portfolio</span>
          <span className="brand-text sm:hidden">Back</span>
        </Link>

        <div className="header-cta col-start-3 md:col-start-4">
          <button
            type="button"
            className="btn btn-theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-icon flex items-center justify-center p-0.5" aria-hidden="true">
              {resolvedTheme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </span>
            <span className="theme-label ml-1">
              {resolvedTheme === "light" ? "Dark" : "Light"}
            </span>
          </button>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-header whitespace-nowrap hidden sm:inline-flex">
            {title}
          </a>
        </div>
      </div>
    </header>
  );
}
