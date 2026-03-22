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
    <footer className="footer-wrap mt-32 relative">
      <div className="max-w-[var(--max-width)] mx-auto px-6">
        {/* Top Section: CTA / Brand */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-16 border-b border-white/5">
          <div className="brand-section">
            <h2 className="text-5xl md:text-7xl font-bold font-space tracking-tight mb-6 opacity-20 select-none pointer-events-none absolute -top-10 left-0">
              AGAM
            </h2>
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-medium mb-4 max-w-xl leading-snug">
                Let&apos;s build the next generation of <span className="text-[--accent]">local-first AI</span> systems together.
              </p>
              <a href="mailto:agamworkspace@gmail.com" className="group flex items-center gap-3 text-lg font-bold hover:text-[--accent] transition-colors">
                agamworkspace@gmail.com 
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="status-section md:text-right">
            <p className="text-[10px] uppercase tracking-[3px] text-white/30 mb-2 font-bold font-space">Current Status</p>
            <p className="text-sm font-medium text-white/80">Available for new opportunities</p>
            <p className="text-xs text-[--muted] mt-1 italic">Meerut, IN: {time}</p>
          </div>
        </div>

        {/* Middle Section: Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div className="nav-col">
            <h4 className="text-[10px] uppercase tracking-[3px] text-white/20 mb-6 font-bold font-space">Experience</h4>
            <ul className="space-y-3">
              <li><Link href="/#about" className="text-[--muted] hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#skills" className="text-[--muted] hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="/#projects" className="text-[--muted] hover:text-white transition-colors">All Work</Link></li>
              <li><Link href="/#contact" className="text-[--muted] hover:text-white transition-colors">Get in touch</Link></li>
            </ul>
          </div>
          
          <div className="nav-col">
            <h4 className="text-[10px] uppercase tracking-[3px] text-white/20 mb-6 font-bold font-space">Case Studies</h4>
            <ul className="space-y-3">
              <li><Link href="/case-studies/rahi-ai" className="text-[--muted] hover:text-white transition-colors">Rahi.AI</Link></li>
              <li><Link href="/case-studies/lexora" className="text-[--muted] hover:text-white transition-colors">Lexora AI</Link></li>
              <li><Link href="/case-studies/sarthisync" className="text-[--muted] hover:text-white transition-colors">SarthiSync</Link></li>
              <li><Link href="/case-studies/js-arcade" className="text-[--muted] hover:text-white transition-colors">JS Arcade</Link></li>
            </ul>
          </div>

          <div className="nav-col">
            <h4 className="text-[10px] uppercase tracking-[3px] text-white/20 mb-6 font-bold font-space">Resources</h4>
            <ul className="space-y-3">
              <li><a href="/resume" className="text-[--muted] hover:text-white transition-colors">Modern Resume</a></li>
              <li><a href="/resume.pdf" download className="text-[--muted] hover:text-white transition-colors">Download PDF</a></li>
            </ul>
          </div>

          <div className="nav-col">
            <h4 className="text-[10px] uppercase tracking-[3px] text-white/20 mb-6 font-bold font-space">Social</h4>
            <ul className="space-y-3">
              <li><a href="https://github.com/Agam-Pathak" target="_blank" rel="noopener noreferrer" className="text-[--muted] hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/agam-pathak" target="_blank" rel="noopener noreferrer" className="text-[--muted] hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & Back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 border-t border-white/5 opacity-50">
          <p className="text-[11px] font-medium tracking-wide">
            &copy; {year} Agam Pathak. Crafted with intent from Meerut, India.
          </p>
          
          <div className="flex items-center gap-6">
            <Magnetic>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:text-[--accent] transition-colors"
                aria-label="Back to top"
              >
                Top <ChevronUp size={14} className="transition-transform group-hover:-translate-y-1" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}
