"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ChevronUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-20 border-t border-[--outline] bg-black/20 backdrop-blur-md pt-12 pb-8">
      <div className="max-w-[var(--max-width)] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="footer-brand">
          <Link href="/#top" className="flex items-center gap-2 mb-4">
            <span className="brand-mark w-8 h-8 flex items-center justify-center rounded-lg bg-[--accent] text-black text-xs font-bold">AP</span>
            <span className="font-space font-bold text-lg">Agam Pathak</span>
          </Link>
          <p className="text-[--muted] text-sm max-w-[200px]">
            Building scalable digital experiences with clean architecture and user-focused design.
          </p>
        </div>
        
        <div className="footer-links">
          <h4 className="font-bold mb-4 font-space">Navigation</h4>
          <ul className="space-y-2 text-sm text-[--muted]">
            <li><Link href="/#about" className="hover:text-[--accent] transition-colors">About</Link></li>
            <li><Link href="/#skills" className="hover:text-[--accent] transition-colors">Skills</Link></li>
            <li><Link href="/#projects" className="hover:text-[--accent] transition-colors">Projects</Link></li>
            <li><Link href="/#contact" className="hover:text-[--accent] transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4 className="font-bold mb-4 font-space">Featured Projects</h4>
          <ul className="space-y-2 text-sm text-[--muted]">
            <li><Link href="/case-studies/rahi-ai" className="hover:text-[--accent] transition-colors">Rahi.AI</Link></li>
            <li><Link href="/case-studies/lexora" className="hover:text-[--accent] transition-colors">Lexora AI</Link></li>
            <li><Link href="/case-studies/sarthisync" className="hover:text-[--accent] transition-colors">SarthiSync</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4 className="font-bold mb-4 font-space">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/Agam-Pathak" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[--surface] border border-[--outline] hover:border-[--accent] transition-all"><Github size={18} /></a>
            <a href="https://linkedin.com/in/agam-pathak" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[--surface] border border-[--outline] hover:border-[--accent] transition-all"><Linkedin size={18} /></a>
            <a href="mailto:agamworkspace@gmail.com" className="p-2 rounded-lg bg-[--surface] border border-[--outline] hover:border-[--accent] transition-all"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      
      <div className="max-w-[var(--max-width)] mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[--muted] text-xs">
          &copy; <span suppressHydrationWarning>{year}</span> Agam Pathak. Crafted with Precision in Meerut.
        </p>
        <Link 
          href="/#top" 
          className="flex items-center gap-1 text-[--muted] hover:text-[--accent] text-xs transition-colors"
        >
          Back to top <ChevronUp size={14} />
        </Link>
      </div>
    </footer>
  );
}
