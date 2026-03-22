"use client";

import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Globe, Award, Database, Cpu, Layout, Code2, Briefcase, GraduationCap, ArrowUpRight, Zap, Target, Star } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import Image from "next/image";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] selection:bg-[--accent] selection:text-black p-4 md:p-12 font-sans transition-colors duration-500 overflow-x-hidden">
      {/* Dynamic Background Elements (Digital Only) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden print:hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[--accent] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400 opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150" />
      </div>

      {/* Action Bar (Hidden on Print) */}
      <div className="max-w-[1050px] mx-auto mb-10 flex flex-col sm:flex-row justify-between items-center print:hidden bg-white/70 backdrop-blur-2xl p-4 rounded-2xl border border-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] gap-4 sticky top-6 z-50">
        <Link href="/" className="group text-xs font-bold uppercase tracking-[2px] text-zinc-500 hover:text-black flex items-center gap-2 transition-all">
          <span className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all text-sm">←</span>
          Portfolio
        </Link>
        <div className="flex gap-3">
          <Magnetic>
            <button 
              onClick={handlePrint}
              className="bg-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[2px] flex items-center gap-2.5 transition-all shadow-xl shadow-black/10 active:scale-95 hover:bg-zinc-800"
            >
              <Download size={14} /> Generate PDF
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Main Resume Container */}
      <main className="max-w-[1050px] mx-auto bg-white print:p-0 shadow-[0_40px_100px_rgba(0,0,0,0.04)] print:shadow-none p-10 md:p-20 border border-zinc-100 print:border-none rounded-[3rem] print:rounded-none overflow-hidden relative z-10">
        
        {/* Signature Watermark */}
        <div className="absolute top-20 right-0 opacity-[0.02] transform rotate-90 origin-right pointer-events-none select-none">
          <span className="text-[120px] font-black font-space tracking-tighter uppercase whitespace-nowrap">AGAM PATHAK</span>
        </div>

        <Reveal>
          {/* Header Section */}
          <header className="relative mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pb-12 border-b border-zinc-100">
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-black font-space shadow-2xl shadow-black/20">
                    AP
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black font-space">Agam Pathak</h1>
                    <p className="text-lg md:text-xl text-[--accent] font-bold mt-1 tracking-tight brightness-75">
                      Full-Stack Architect & AI System Specialist
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[2px] text-zinc-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-black" /> Meerut, IN
                  </div>
                  <a href="mailto:agamworkspace@gmail.com" className="flex items-center gap-2 hover:text-black transition-colors">
                    <Mail size={14} className="text-black" /> agamworkspace@gmail.com
                  </a>
                  <a href="tel:+917307086547" className="flex items-center gap-2 hover:text-black transition-colors">
                    <Phone size={14} className="text-black" /> +91 7307086547
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 lg:justify-end max-w-[300px]">
                {[
                  { icon: <Linkedin size={14} />, label: "LINKEDIN", href: "https://linkedin.com/in/agam-pathak" },
                  { icon: <Github size={14} />, label: "GITHUB", href: "https://github.com/agam-pathak" },
                  { icon: <Globe size={14} />, label: "PORTFOLIO", href: "https://agam-portfolio-s.vercel.app" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-black text-zinc-500 hover:bg-black hover:text-white transition-all tracking-widest"
                  >
                    {social.icon} {social.label}
                  </a>
                ))}
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-20">
            {/* Sidebar Column */}
            <aside className="space-y-16">
              {/* Profile Intro */}
              <section>
                <h3 className="text-[11px] font-black uppercase tracking-[4px] text-zinc-300 mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-zinc-200" /> MISSION
                </h3>
                <p className="text-zinc-600 leading-relaxed text-[15px] font-medium">
                  B.Tech CSE student (2023-27) at SCRIET, specializing in building high-fidelity <span className="text-black font-bold">Local-First AI ecosystems</span>. Expert in RAG, enterprise logistics architecture, and high-performance framework-less engineering.
                </p>
              </section>

              {/* Stack Architecture */}
              <section className="space-y-10">
                <h3 className="text-[11px] font-black uppercase tracking-[4px] text-zinc-300 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-zinc-200" /> STACK
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-black text-black mb-4 flex items-center gap-2 tracking-[2px] uppercase">
                      <Code2 size={14} /> Core Engineering
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["TypeScript", "C++", "Java", "Python", "SQL", "Go"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 text-[12px] font-bold text-zinc-600">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-black mb-4 flex items-center gap-2 tracking-[2px] uppercase">
                      <Layout size={14} /> Web Architecture
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js 16", "React 19", "Node.js", "TailwindCSS", "Prisma", "GSAP"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 text-[12px] font-bold text-zinc-600">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-black mb-4 flex items-center gap-2 tracking-[2px] uppercase">
                      <Cpu size={14} /> AI & Infrastructure
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["RAG Pipelines", "Llama-3.1", "Groq AI", "Vector databases", "Edge", "Vercel"].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100 text-[12px] font-bold text-zinc-600">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Block */}
              <section>
                <h3 className="text-[11px] font-black uppercase tracking-[4px] text-zinc-300 mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-zinc-200" /> ACADEMIA
                </h3>
                <div className="bg-zinc-50/50 p-6 rounded-2xl border border-zinc-100 hover:border-black/10 transition-colors">
                  <p className="text-sm font-black text-black uppercase tracking-tight italic">Bachelor of Technology (CSE)</p>
                  <p className="text-[11px] text-[--accent] font-black py-2 uppercase tracking-widest">2023 – 2027 (PRE-FINAL)</p>
                  <p className="text-[12px] text-zinc-500 leading-relaxed font-bold">SCRIET, CCS University Campus, Meerut</p>
                </div>
              </section>

              {/* Leadership */}
              <section>
                <h3 className="text-[11px] font-black uppercase tracking-[4px] text-zinc-300 mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-zinc-200" /> LEADERSHIP
                </h3>
                <ul className="space-y-5">
                  {[
                    { title: "Team Management", desc: "Leading teams of 4+ developers in R&D projects." },
                    { title: "System Architecture", desc: "Designing scalable, maintenance-first codebases." },
                    { title: "Public Speaking", desc: "Active contributor to local developer meetups." }
                  ].map((item, idx) => (
                    <li key={idx} className="group flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                      <div>
                        <p className="text-xs font-black text-black uppercase tracking-widest">{item.title}</p>
                        <p className="text-xs text-zinc-500 font-medium mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>

            {/* Main Content Column */}
            <div className="space-y-20">
              {/* Production Proof Section */}
              <section>
                <h3 className="text-[11px] font-black uppercase tracking-[4px] text-zinc-300 mb-12 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-zinc-200" /> PRODUCTION PROOF
                </h3>

                <div className="space-y-16">
                  {/* Lexora AI */}
                  <article className="group relative">
                    <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-zinc-100 group-hover:bg-black transition-colors hidden md:block" />
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-black text-black font-space mb-1">Lexora AI <span className="text-[10px] font-bold text-zinc-400 align-middle ml-2">v1.2</span></h4>
                        <p className="text-[11px] font-black text-[--accent] uppercase tracking-[3px]">Document Intelligence Workspace</p>
                      </div>
                      <Link href="/case-studies/lexora" className="p-2 rounded-full hover:bg-zinc-50 transition-colors">
                        <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-black" />
                      </Link>
                    </div>
                    <p className="text-[15px] text-zinc-600 leading-relaxed mb-6 font-medium">
                      Built a professional RAG environment for complex document analysis. Custom zero-dependency vector retrieval pipeline with sub-200ms query times on local sessions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] text-zinc-500 px-4 py-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="flex gap-2">
                        <Target size={14} className="shrink-0 text-black mt-0.5" />
                        <span>Source citations with vector verification for 100% accuracy.</span>
                      </div>
                      <div className="flex gap-2">
                        <Zap size={14} className="shrink-0 text-black mt-0.5" />
                        <span>Optimized OCR extraction for technical whitepapers.</span>
                      </div>
                    </div>
                  </article>

                  {/* SarthiSync */}
                  <article className="group relative">
                    <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-zinc-100 group-hover:bg-black transition-colors hidden md:block" />
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-black text-black font-space mb-1">SarthiSync <span className="text-[10px] font-bold text-zinc-400 align-middle ml-2">TMS</span></h4>
                        <p className="text-[11px] font-black text-zinc-400 uppercase tracking-[3px]">Enterprise Logistics OS</p>
                      </div>
                      <Link href="/case-studies/sarthisync" className="p-2 rounded-full hover:bg-zinc-50 transition-colors">
                        <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-black" />
                      </Link>
                    </div>
                    <p className="text-[15px] text-zinc-600 leading-relaxed mb-6 font-medium">
                      Mission-critical Transportation Management System. Digitized vehicle/driver lifecycles with AI Dispatch Copilot for intelligent route planning.
                    </p>
                    <div className="flex flex-col gap-3 text-[13px] text-zinc-500 px-4 py-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="flex gap-2 items-center">
                        <Star size={14} className="shrink-0 text-amber-500" />
                        <span>Reduced administrative overhead by <span className="font-bold text-black">60%</span> via automated consignment generation.</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Briefcase size={14} className="shrink-0 text-blue-500" />
                        <span>Enterprise audit-ready verification flows with dual-OTP & ePOD capture.</span>
                      </div>
                    </div>
                  </article>

                  {/* Rahi.AI */}
                  <article className="group relative">
                    <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-zinc-100 group-hover:bg-black transition-colors hidden md:block" />
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-black text-black font-space mb-1">Rahi.AI <span className="text-[10px] font-bold text-zinc-400 align-middle ml-2">LIVE</span></h4>
                        <p className="text-[11px] font-black text-emerald-600 uppercase tracking-[3px]">Travel Orchestration Engine</p>
                      </div>
                      <Link href="/case-studies/rahi-ai" className="p-2 rounded-full hover:bg-zinc-50 transition-colors">
                        <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-black" />
                      </Link>
                    </div>
                    <p className="text-[15px] text-zinc-600 leading-relaxed mb-6 font-medium">
                      Lead developer for an AI travel platform. Full-stack production flow feat. Stripe billing, multi-user collaboration, and voice-assisted itinerary planning.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] text-zinc-500 px-4 py-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <div className="flex gap-2">
                        <Zap size={14} className="shrink-0 text-emerald-500 mt-0.5" />
                        <span>Live collaboration engine with persistent shared workspaces.</span>
                      </div>
                      <div className="flex gap-2">
                        <Layout size={14} className="shrink-0 text-emerald-500 mt-0.5" />
                        <span>Edge-cached permission validation for premium feature auth.</span>
                      </div>
                    </div>
                  </article>

                  {/* JS Arcade */}
                  <article className="group relative">
                    <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-zinc-100 group-hover:bg-black transition-colors hidden md:block" />
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-black text-black font-space mb-1">JS Arcade <span className="text-[10px] font-bold text-zinc-400 align-middle ml-2">v2.0</span></h4>
                        <p className="text-[11px] font-black text-purple-600 uppercase tracking-[3px]">Framework-less Game Gallery</p>
                      </div>
                      <Link href="/case-studies/js-arcade" className="p-2 rounded-full hover:bg-zinc-50 transition-colors">
                        <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-black" />
                      </Link>
                    </div>
                    <p className="text-[15px] text-zinc-600 leading-relaxed mb-6 font-medium">
                      Collection of 8+ immersive arcade games built with 100% vanilla JavaScript. Custom physics engines and high-frequency game loop architecture (60 FPS).
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Physics Engines", "Canvas API", "Web Audio", "Mobile Optimized", "60 FPS"].map(item => (
                        <span key={item} className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[10px] font-black uppercase tracking-tighter border border-purple-100">{item}</span>
                      ))}
                    </div>
                  </article>
                </div>
              </section>

              {/* Extras */}
              <section className="bg-black text-white rounded-[2rem] p-10 md:p-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[--accent] opacity-10 blur-[100px]" />
                <h3 className="text-[11px] font-black uppercase tracking-[4px] text-white/40 mb-10 flex items-center gap-3 relative z-10">
                  <span className="w-8 h-[1px] bg-white/20" /> IMPACT & AWARDS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                  <div>
                    <Award size={32} className="text-[--accent] mb-4" />
                    <h5 className="font-bold text-lg mb-2">Systems Architect</h5>
                    <p className="text-sm text-white/60 leading-relaxed">Successfully deployed 15+ complex projects using distributed edge and serverless architectures.</p>
                  </div>
                  <div>
                    <Database size={32} className="text-[--accent] mb-4" />
                    <h5 className="font-bold text-lg mb-2">Cloud Strategy</h5>
                    <p className="text-sm text-white/60 leading-relaxed">Scaling applications to handle concurrent multi-user environments with sub-second latency.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-zinc-100 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-200">
              Verified: {year} &bull; Agam Pathak
            </div>
            <p className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest text-center">
              Devised with purpose 
              <span className="mx-2 opacity-30">&bull;</span>
              Built on Next.js 16
            </p>
          </footer>
        </Reveal>
      </main>

      {/* Global CSS for Printing */}
      <style jsx global>{`
        @media print {
          html, body {
            background-color: white !important;
            color: #1a1a1a !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          main {
            padding: 40px !important;
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            border-radius: 0 !important;
          }
          .absolute, .print-hidden, .fixed {
            display: none !important;
          }
          aside {
            border-right: none !important;
          }
          .page-break-inside-avoid {
            page-break-inside: avoid;
          }
        }
        
        /* Custom scrollbar for better look */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #eee;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ddd;
        }
        
        .font-space {
          font-family: var(--font-space, 'Space Grotesk', sans-serif);
        }
      `}</style>
    </div>
  );
}
