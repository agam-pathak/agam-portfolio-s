"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Link href="/#top" className="brand">
          <span className="brand-mark" aria-hidden="true">
            AP
          </span>
          <span className="brand-text">Agam Pathak</span>
        </Link>

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
          <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/#education" onClick={() => setIsOpen(false)}>Education</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <a href="/resume.pdf" download className="nav-resume">Resume</a>
        </nav>

        <div className="header-cta">
          <button
            type="button"
            className="btn btn-theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-icon flex items-center justify-center" aria-hidden="true">
              {resolvedTheme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </span>
            <span className="theme-label ml-1">
              {resolvedTheme === "light" ? "Dark" : "Light"}
            </span>
          </button>
          <a href="/resume.pdf" download className="btn btn-header">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
