"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ChevronUp, ArrowRight } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Footer() {
  const [time, setTime] = useState("");
  const year = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      setTime(new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer-wrap mt-32 relative border-t border-white/5 bg-black/20 backdrop-blur-xl pt-24 pb-12 overflow-hidden text-left">
      {/* Background Signature Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.03] flex justify-center items-center z-0">
        <span className="text-[12vw] font-bold font-space leading-none tracking-tighter uppercase whitespace-nowrap">
          Creative Engineering
        </span>
      </div>

      <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
        {/* Primary Row: CTA and Brand Identity */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div className="brand-cta max-w-2xl text-left">
            <h2 className="text-4xl md:text-6xl font-bold font-space leading-[1.05] mb-8 tracking-tight">
              Let&apos;s build the next <br />
              <span className="text-[--accent]">architectural</span> masterpiece.
            </h2>
            <a href="mailto:agamworkspace@gmail.com" className="group inline-flex items-center gap-4 text-xl font-bold hover:text-[--accent] transition-all">
              <span className="pb-1 border-b-2 border-white/10 group-hover:border-[--accent]">agamworkspace@gmail.com</span>
              <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
            </a>
          </div>
          
          <div className="meta-info flex flex-col items-start lg:items-end gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[--accent]/5 border border-[--accent]/20 text-[9px] font-bold tracking-[2px] uppercase text-[--accent]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[--accent]"></span>
              </span>
              Online
            </div>
            <div className="text-left lg:text-right">
              <p className="text-sm font-bold text-white/90">Agam Pathak</p>
              <p className="text-xs text-[--muted] mt-1">Meerut, India &bull; {time}</p>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 pt-16 border-t border-white/5">
          <nav className="flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/30 mb-8 font-space">The Core</h4>
            <ul className="flex flex-col items-start gap-5 text-[15px] font-medium text-[--muted]">
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#skills" className="hover:text-white transition-colors">Stack</Link></li>
              <li><Link href="/#projects" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </nav>
          
          <nav className="flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/30 mb-8 font-space">Case Studies</h4>
            <ul className="flex flex-col items-start gap-5 text-[15px] font-medium text-[--muted]">
              <li><Link href="/case-studies/rahi-ai" className="hover:text-white transition-colors">Rahi.AI</Link></li>
              <li><Link href="/case-studies/lexora" className="hover:text-white transition-colors">Lexora AI</Link></li>
              <li><Link href="/case-studies/sarthisync" className="hover:text-white transition-colors">SarthiSync</Link></li>
              <li><Link href="/case-studies/js-arcade" className="hover:text-white transition-colors">JS Arcade</Link></li>
            </ul>
          </nav>

          <nav className="flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/30 mb-8 font-space">Resources</h4>
            <ul className="flex flex-col items-start gap-5 text-[15px] font-medium text-[--muted]">
              <li><Link href="/resume" className="hover:text-white transition-colors">Modern Resume</Link></li>
              <li><a href="/resume.pdf" download className="hover:text-white transition-colors">Printable CV</a></li>
              <li><a href="https://github.com/Agam-Pathak" target="_blank" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </nav>

          <nav className="flex flex-col items-start text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white/30 mb-8 font-space">Socials</h4>
            <ul className="flex flex-col items-start gap-5 text-[15px] font-medium text-[--muted]">
              <li><a href="https://github.com/Agam-Pathak" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/agam-pathak" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com/agam_pathak" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X / Twitter</a></li>
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[11px] font-bold uppercase tracking-[3px] text-white/20 font-space">
            <span>&copy; {year} Agam Pathak</span>
            <span className="hidden md:block opacity-30">&bull;</span>
            <span>Crafted with Precision</span>
          </div>
          
          <Magnetic>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-[2px] transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            >
              Surface <ChevronUp size={14} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
