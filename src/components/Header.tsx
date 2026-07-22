"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-4 z-40 max-w-[var(--max-width)] mx-auto px-4 md:px-6 transition-all duration-300" id="top">
      <div
        className={`flex items-center justify-between px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[--header-bg] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)]"
            : "bg-[--surface] backdrop-blur-lg border border-[--outline] shadow-md"
        }`}
      >
        {/* Brand Logo & Name */}
        <Magnetic strength={0.2}>
          <Link href="/#top" className="brand flex items-center gap-3 group">
            <span className="brand-mark w-9 h-9 p-1 rounded-xl border border-[--outline] bg-[--surface] backdrop-blur-md transition-all group-hover:scale-105 group-hover:border-[--accent] flex items-center justify-center">
              <Image
                src="/brand-logo.svg"
                alt="Agam Pathak Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </span>
            <div className="flex items-center gap-2">
              <span className="brand-text font-bold text-base tracking-tight text-[--text] font-space group-hover:text-[--accent] transition-colors">
                Agam Pathak
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </Link>
        </Magnetic>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[--surface] border border-[--outline] px-3 py-1.5 rounded-full backdrop-blur-md">
          {[
            { label: "About", href: "/#about" },
            { label: "Skills", href: "/#skills" },
            { label: "Projects", href: "/#projects" },
            { label: "Journey", href: "/#journey" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <Magnetic key={item.label} strength={0.3}>
              <Link
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[--text] opacity-80 hover:opacity-100 hover:text-[--accent] hover:bg-[--nav-hover-bg] transition-all font-space"
              >
                {item.label}
              </Link>
            </Magnetic>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2.5">
          <Magnetic strength={0.4}>
            <button
              type="button"
              className="p-2 rounded-full bg-[--surface] border border-[--outline] text-[--text] hover:text-[--accent] hover:bg-[--nav-hover-bg] transition-all flex items-center justify-center"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </Magnetic>

          <Magnetic strength={0.4}>
            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[--accent] text-white dark:text-[#03111f] font-bold text-xs shadow-md hover:scale-105 transition-all font-space"
            >
              <FileText size={14} /> Resume
            </Link>
          </Magnetic>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-[--surface] border border-[--outline] text-[--text]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 p-4 rounded-3xl bg-[--mobile-nav-bg] border border-[--outline] backdrop-blur-xl shadow-2xl flex flex-col gap-2">
          {[
            { label: "About", href: "/#about" },
            { label: "Skills", href: "/#skills" },
            { label: "Projects", href: "/#projects" },
            { label: "Journey", href: "/#journey" },
            { label: "Contact", href: "/#contact" },
            { label: "Modern Resume", href: "/resume" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-[--text] hover:text-[--accent] hover:bg-[--nav-hover-bg] transition-all font-space"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 text-center py-2.5 rounded-2xl bg-[--accent] text-white dark:text-[#03111f] font-bold text-xs shadow-md"
          >
            Download Resume PDF
          </a>
        </div>
      )}
    </header>
  );
}
