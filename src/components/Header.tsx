"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { GlowEffect } from "./GlowEffect";

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
          <GlowEffect glowSize={120}>
            <Link href="/#top" className="brand flex items-center gap-3">
              <span className="brand-mark w-10 h-10 p-1 rounded-lg border border-[--accent]/30 bg-[--accent]/10 backdrop-blur-md transition-all hover:scale-105">
                <Image
                  src="/brand-logo.svg"
                  alt="Agam Pathak Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="brand-text font-black text-xl font-space tracking-tight text-white flex items-center">
                &lt;<span className="text-[--accent]">Agam Pathak</span>&nbsp;/&gt;
              </span>
            </Link>
          </GlowEffect>
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
          <Magnetic strength={0.4}><GlowEffect glowSize={80}><Link href="/#about" onClick={() => setIsOpen(false)}>About</Link></GlowEffect></Magnetic>
          <Magnetic strength={0.4}><GlowEffect glowSize={80}><Link href="/#skills" onClick={() => setIsOpen(false)}>Skills</Link></GlowEffect></Magnetic>
          <Magnetic strength={0.4}><GlowEffect glowSize={80}><Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link></GlowEffect></Magnetic>
          <Magnetic strength={0.4}><GlowEffect glowSize={80}><Link href="/#journey" onClick={() => setIsOpen(false)}>Journey</Link></GlowEffect></Magnetic>
          <Magnetic strength={0.4}><GlowEffect glowSize={80}><Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link></GlowEffect></Magnetic>
          <Magnetic strength={0.4}><GlowEffect glowSize={80}><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">View Resume</a></GlowEffect></Magnetic>
        </nav>

        <div className="header-cta">
          <Magnetic strength={0.5}>
            <GlowEffect glowSize={100}>
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
            </GlowEffect>
          </Magnetic>
          <Magnetic strength={0.5}>
            <GlowEffect glowSize={100}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-header-resume">
                <span className="pdf-badge">PDF</span> View Resume
              </a>
            </GlowEffect>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
