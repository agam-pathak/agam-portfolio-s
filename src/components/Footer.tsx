"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ChevronUp, Clock } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Footer() {
  const [time, setTime] = useState("");
  const year = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const meerutTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());
      setTime(meerutTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="site-footer mt-32 border-t border-[--outline] bg-black/40 backdrop-blur-xl pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[--accent] opacity-5 blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-[var(--max-width)] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative">
        <div className="footer-brand space-y-6">
          <Link href="/#top" className="flex items-center gap-3 w-fit group">
            <div className="brand-mark w-10 h-10 flex items-center justify-center rounded-xl bg-[--accent] text-black text-sm font-bold shadow-[0_0_20px_rgba(102,246,202,0.3)] transition-transform group-hover:scale-110">
              AP
            </div>
            <span className="font-space font-bold text-xl tracking-tight">Agam Pathak</span>
          </Link>
          <p className="text-[--muted] text-sm leading-relaxed max-w-[260px]">
            Orchestrating AI workflows and building production-grade digital systems with architectural precision.
          </p>
          <div className="local-status flex items-center gap-2 text-[10px] text-[--accent] font-bold uppercase tracking-widest bg-[--accent]/5 border border-[--accent]/20 px-3 py-1.5 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
            </span>
            Meerut, IN: {time}
          </div>
        </div>
        
        <div className="footer-links">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/#about" className="text-[--muted] hover:text-[--accent] transition-all flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> About</Link></li>
            <li><Link href="/#skills" className="text-[--muted] hover:text-[--accent] transition-all flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> Skills</Link></li>
            <li><Link href="/#projects" className="text-[--muted] hover:text-[--accent] transition-all flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> Projects</Link></li>
            <li><Link href="/#contact" className="text-[--muted] hover:text-[--accent] transition-all flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[--accent] opacity-0 group-hover:opacity-100 transition-opacity" /> Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Case Studies</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/case-studies/rahi-ai" className="text-[--muted] hover:text-[--accent] transition-all">Rahi.AI Orchestrator</Link></li>
            <li><Link href="/case-studies/lexora" className="text-[--muted] hover:text-[--accent] transition-all">Lexora Doc Intel</Link></li>
            <li><Link href="/case-studies/sarthisync" className="text-[--muted] hover:text-[--accent] transition-all">SarthiSync TMS</Link></li>
            <li><Link href="/case-studies/js-arcade" className="text-[--muted] hover:text-[--accent] transition-all">JS Arcade Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Connect</h4>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <Github size={20} />, href: "https://github.com/Agam-Pathak", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/agam-pathak", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:agamworkspace@gmail.com", label: "Email" },
            ].map((social) => (
              <Magnetic key={social.label}>
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[--accent] hover:bg-[--accent]/10 text-[--muted] hover:text-[--accent] transition-all flex items-center justify-center shrink-0"
                >
                  {social.icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-[var(--max-width)] mx-auto px-6 pt-10 border-t border-white/5 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p className="text-[--muted] text-xs font-medium">
              &copy; <span suppressHydrationWarning>{year}</span> Agam Pathak. All rights reserved.
            </p>
            <p className="text-[10px] text-white/20 font-space uppercase tracking-[3px]">
              Devised with purpose
            </p>
          </div>

          <Magnetic>
            <Link 
              href="/#top" 
              className="footer-back-top flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[--muted] hover:text-white hover:border-white/20 text-xs font-bold transition-all group"
            >
              Back to Surface <ChevronUp size={16} className="transition-transform group-hover:-translate-y-1" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
