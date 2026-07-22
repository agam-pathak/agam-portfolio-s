"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronUp, ArrowRight, Copy, Check, Sparkles, Github, Linkedin, Mail, FileText, Globe, Code2 } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Footer() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("agamworkspace@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-wrap mt-32 relative z-10 border-t border-[--outline] bg-[--surface] backdrop-blur-2xl pt-20 pb-12 overflow-hidden text-left shadow-[var(--shadow)]">
      {/* Top Animated Gradient Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[--accent] to-transparent opacity-60" />

      {/* Background Signature Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.025] dark:opacity-[0.03] flex justify-center items-center z-0 overflow-hidden">
        <span className="text-[14vw] font-bold font-space leading-none tracking-tighter uppercase whitespace-nowrap text-[--text] blur-[1px]">
          Creative Engineering
        </span>
      </div>

      <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
        {/* Primary Row: CTA & Live Status Card */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="brand-cta max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-[--accent] text-xs font-bold mb-4 shadow-sm">
              <Sparkles size={13} />
              <span>Open for Full-Stack & AI Roles</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space leading-[1.08] mb-8 tracking-tight text-[--text]">
              Let&apos;s build the next <br />
              <span className="bg-gradient-to-r from-[--accent] via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                architectural
              </span>{" "}
              masterpiece.
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:agamworkspace@gmail.com"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[--surface-strong] border border-[--outline] hover:border-[--accent] text-[--text] font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <span>agamworkspace@gmail.com</span>
                <ArrowRight size={16} className="text-[--accent] transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-[--surface] border border-[--outline] hover:border-[--accent] text-xs font-bold text-[--muted] hover:text-[--text] transition-all"
                title="Copy Email"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Live IST Clock & Availability Widget Card */}
          <div className="meta-info p-6 rounded-3xl bg-[--surface-strong] border border-[--outline] backdrop-blur-xl shadow-xl flex flex-col items-start lg:items-end gap-4 shrink-0 w-full lg:w-auto">
            <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400"></span>
              </span>
              <span>Available for Hire</span>
            </div>

            <div className="text-left lg:text-right space-y-1">
              <p className="text-base font-bold text-[--text] font-space flex items-center gap-2 lg:justify-end">
                <span>Agam Pathak</span>
                <span className="text-[10px] font-mono text-[--accent] px-2 py-0.5 rounded-md bg-[--accent]/10 border border-[--accent]/20">
                  B.Tech CSE
                </span>
              </p>
              <p className="text-xs text-[--muted]">Noida, UP, India • IST (UTC+5:30)</p>
              <p className="text-sm font-mono font-bold text-[--accent] tracking-wider pt-1">{time}</p>
            </div>

            <div className="pt-3 border-t border-[--outline] w-full flex items-center justify-between lg:justify-end gap-3 text-[11px] text-[--muted]">
              <span>System Status</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> All Operational
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pt-14 border-t border-[--outline]">
          <nav className="flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-[--accent] mb-6 font-space flex items-center gap-1.5">
              <Code2 size={13} /> The Core
            </h4>
            <ul className="flex flex-col items-start gap-4 text-sm font-medium text-[--muted]">
              <li>
                <Link href="/#about" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> About Me
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> Tech Matrix
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> Featured Work
                </Link>
              </li>
              <li>
                <Link href="/#journey" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> Engineering Reel
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> Get In Touch
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-cyan-600 dark:text-cyan-300 mb-6 font-space flex items-center gap-1.5">
              <Globe size={13} /> Case Studies
            </h4>
            <ul className="flex flex-col items-start gap-4 text-sm font-medium text-[--muted]">
              <li>
                <Link href="/case-studies/rahi-ai" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" /> Rahi.AI
                </Link>
              </li>
              <li>
                <Link href="/case-studies/lexora" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" /> Lexora AI PRO
                </Link>
              </li>
              <li>
                <Link href="/case-studies/sarthisync" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" /> SarthiSync TMS
                </Link>
              </li>
              <li>
                <Link href="/case-studies/js-arcade" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" /> JS Arcade Gallery
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-purple-600 dark:text-purple-300 mb-6 font-space flex items-center gap-1.5">
              <FileText size={13} /> Resources
            </h4>
            <ul className="flex flex-col items-start gap-4 text-sm font-medium text-[--muted]">
              <li>
                <Link href="/resume" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" /> Modern Resume
                </Link>
              </li>
              <li>
                <a href="/resume.pdf" download className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" /> Printable CV (PDF)
                </a>
              </li>
              <li>
                <a href="https://github.com/Agam-Pathak" target="_blank" rel="noopener noreferrer" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" /> GitHub Repositories
                </a>
              </li>
            </ul>
          </nav>

          <nav className="flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-amber-600 dark:text-amber-300 mb-6 font-space flex items-center gap-1.5">
              <Sparkles size={13} /> Connect
            </h4>
            <ul className="flex flex-col items-start gap-4 text-sm font-medium text-[--muted]">
              <li>
                <a href="https://github.com/Agam-Pathak" target="_blank" rel="noopener noreferrer" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <Github size={14} className="text-[--accent]" /> GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/agam-pathak" target="_blank" rel="noopener noreferrer" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <Linkedin size={14} className="text-cyan-400" /> LinkedIn Network
                </a>
              </li>
              <li>
                <a href="mailto:agamworkspace@gmail.com" className="hover:text-[--text] hover:translate-x-1 transition-all flex items-center gap-2 group">
                  <Mail size={14} className="text-purple-400" /> Direct Email
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16 pt-8 border-t border-[--outline]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-bold uppercase tracking-[2px] text-[--muted] font-space">
            <span>&copy; {year} Agam Pathak</span>
            <span className="hidden md:block opacity-30">&bull;</span>
            <span className="normal-case font-mono text-[11px] text-[--accent]">Next.js 16 + React 19 • Tailwind CSS</span>
          </div>

          <Magnetic strength={0.3}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[--surface-strong] border border-[--outline] text-xs font-bold uppercase tracking-[2px] text-[--text] shadow-md transition-all hover:bg-[--bg-soft] hover:border-[--accent] active:scale-95 font-space"
            >
              <span>Back To Top</span>
              <ChevronUp size={14} className="transition-transform group-hover:-translate-y-1 text-[--accent]" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
