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
    <footer className="footer-wrap mt-32 relative border-t border-white/5 bg-black/20 backdrop-blur-xl pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-fit pointer-events-none select-none opacity-[0.02] flex justify-center items-center">
        <span className="text-[15vw] font-bold font-space leading-none tracking-tighter">AGAM PATHAK</span>
      </div>

      <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10">
        {/* Top Tier: Major CTA & Status */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="cta-group max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-space leading-[1.1] mb-6 tracking-tight">
              Ready to architect <span className="text-[--accent]">local-first AI</span> solutions?
            </h2>
            <a href="mailto:agamworkspace@gmail.com" className="group flex items-center gap-4 text-xl font-bold hover:text-[--accent] transition-all">
              <span className="pb-1 border-b-2 border-white/10 group-hover:border-[--accent]">agamworkspace@gmail.com</span>
              <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="meta-group flex flex-col items-start lg:items-end gap-2 shrink-0">
            <div className="status-badge flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-[--accent]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
              </span>
              Available
            </div>
            <p className="text-sm font-medium text-white/90">Software Developer & Lead</p>
            <p className="text-xs text-[--muted]">Meerut, IN: {time}</p>
          </div>
        </div>

        {/* Middle Tier: Structured Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 py-16 border-t border-white/5">
          <div className="flex flex-col items-start gap-6">
            <h4 className="text-[10px] uppercase tracking-[3px] text-white/30 font-bold font-space">The Foundation</h4>
            <ul className="flex flex-col items-start gap-4 text-sm font-medium text-[--muted]">
              <li><Link href="/#about" className="hover:text-[--accent] transition-colors">About Story</Link></li>
              <li><Link href="/#skills" className="hover:text-[--accent] transition-colors">Technical Stack</Link></li>
              <li><Link href="/#projects" className="hover:text-[--accent] transition-colors">Selected Work</Link></li>
              <li><Link href="/#contact" className="hover:text-[--accent] transition-colors">Contact Hub</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col items-start gap-6">
            <h4 className="text-[10px] uppercase tracking-[3px] text-white/30 font-bold font-space">In-depth</h4>
            <ul className="flex flex-col items-start gap-4 text-sm font-medium text-[--muted]">
              <li><Link href="/case-studies/rahi-ai" className="hover:text-[--accent] transition-colors">Rahi.AI</Link></li>
              <li><Link href="/case-studies/lexora" className="hover:text-[--accent] transition-colors">Lexora AI</Link></li>
              <li><Link href="/case-studies/sarthisync" className="hover:text-[--accent] transition-colors">SarthiSync</Link></li>
              <li><Link href="/case-studies/js-arcade" className="hover:text-[--accent] transition-colors">JS Arcade</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6">
            <h4 className="text-[10px] uppercase tracking-[3px] text-white/30 font-bold font-space">Assets</h4>
            <ul className="flex flex-col items-start gap-4 text-sm font-medium text-[--muted]">
              <li><a href="/resume" className="hover:text-[--accent] transition-colors">Modern Resume</a></li>
              <li><a href="/resume.pdf" download className="hover:text-[--accent] transition-colors">Printable CV</a></li>
              <li><a href="https://github.com/Agam-Pathak/TMS" target="_blank" className="hover:text-[--accent] transition-colors">Source Code</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-6">
            <h4 className="text-[10px] uppercase tracking-[3px] text-white/30 font-bold font-space">Presence</h4>
            <ul className="flex flex-col items-start gap-4 text-sm font-medium text-[--muted]">
              <li><a href="https://github.com/Agam-Pathak" target="_blank" rel="noopener noreferrer" className="hover:text-[--accent] transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/agam-pathak" target="_blank" rel="noopener noreferrer" className="hover:text-[--accent] transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com/agam_pathak" target="_blank" rel="noopener noreferrer" className="hover:text-[--accent] transition-colors">X / Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Utility */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20 font-space">
            <span>&copy; {year} Agam Pathak</span>
            <span className="hidden md:block opacity-30">|</span>
            <span>Architected with Precision</span>
          </div>
          
          <Magnetic>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[2px] transition-all hover:bg-white/10 hover:border-white/20"
            >
              Back to Surface <ChevronUp size={14} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
