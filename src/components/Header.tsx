"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Magnetic strength={0.2}>
          <Link href="/#top" className="brand flex items-center gap-3" data-cursor="magnetic">
            <img 
              src="/brand-logo.svg" 
              alt="Agam Pathak Logo" 
              className="brand-mark w-10 h-10 p-1 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10" 
            />
            <span className="brand-text font-bold text-lg tracking-tight">Agam Pathak</span>
          </Link>
        </Magnetic>

        <button
          className={`nav-toggle ${isOpen ? "is-open" : ""}`}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>

        <nav id="site-nav" className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary">
          <Magnetic strength={0.4}><Link href="/#about" onClick={() => setIsOpen(false)} data-cursor="magnetic">About</Link></Magnetic>
          <Magnetic strength={0.4}><Link href="/#skills" onClick={() => setIsOpen(false)} data-cursor="magnetic">Skills</Link></Magnetic>
          <Magnetic strength={0.4}><Link href="/#projects" onClick={() => setIsOpen(false)} data-cursor="magnetic">Projects</Link></Magnetic>
          <Magnetic strength={0.4}><Link href="/#education" onClick={() => setIsOpen(false)} data-cursor="magnetic">Education</Link></Magnetic>
          <Magnetic strength={0.4}><Link href="/#contact" onClick={() => setIsOpen(false)} data-cursor="magnetic">Contact</Link></Magnetic>
          <Magnetic strength={0.4}><a href="/resume.pdf" download className="nav-resume" data-cursor="magnetic">Resume</a></Magnetic>
        </nav>

        <div className="header-cta">
          <Magnetic strength={0.5}>
            <button
              type="button"
              className="btn btn-theme"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              data-cursor="magnetic"
            >
              <span className="theme-icon flex items-center justify-center" aria-hidden="true">
                {resolvedTheme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </span>
              <span className="theme-label ml-1">
                {resolvedTheme === "light" ? "Dark" : "Light"}
              </span>
            </button>
          </Magnetic>
          <Magnetic strength={0.5}>
            <a href="/resume.pdf" download className="btn btn-header" data-cursor="magnetic">
              Resume
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
