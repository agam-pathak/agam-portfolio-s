"use client";

import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Globe, Award, Database, Cpu, Layout, Code2, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import Image from "next/image";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100 p-4 md:p-12 font-sans transition-colors duration-500">
      {/* Action Bar (Hidden on Print) */}
      <div className="max-w-[1000px] mx-auto mb-10 flex flex-col sm:flex-row justify-between items-center print:hidden bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] gap-4">
        <Link href="/" className="group text-sm font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-2 transition-all">
          <span className="p-2 rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">←</span>
          Return to Portfolio
        </Link>
        <div className="flex gap-3">
          <Magnetic>
            <button 
              onClick={handlePrint}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2.5 transition-all shadow-lg shadow-slate-200 active:scale-95"
            >
              <Download size={18} /> Download PDF
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Main Resume Container */}
      <main className="max-w-[1000px] mx-auto bg-white print:p-0 shadow-[0_20px_80px_rgba(0,0,0,0.06)] print:shadow-none p-10 md:p-20 border border-slate-100 print:border-none rounded-[2.5rem] overflow-hidden relative">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/40 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none print:hidden" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50/40 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none print:hidden" />

        <Reveal>
          {/* Header Section */}
          <header className="relative mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b-2 border-slate-100/80">
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-2.5 shadow-lg shadow-blue-100">
                    <img src="/brand-logo.svg" alt="Logo" className="w-full h-full brightness-0 invert" />
                  </div>
                  <h1 className="text-5xl font-black tracking-tight text-slate-900">Agam Pathak</h1>
                </div>
                <p className="text-xl text-blue-600 font-bold flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-600/30 rounded-full" />
                  Software Engineer & AI Orchestrator
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2 hover:text-slate-900 transition-colors cursor-pointer">
                    <MapPin size={16} className="text-blue-500" /> Meerut, India
                  </div>
                  <a href="mailto:agamworkspace@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Mail size={16} className="text-blue-500" /> agamworkspace@gmail.com
                  </a>
                  <a href="tel:+917307086547" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Phone size={16} className="text-blue-500" /> +91 7307086547
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Linkedin size={16} />, label: "LinkedIn", href: "https://linkedin.com/in/agam-pathak" },
                  { icon: <Github size={16} />, label: "GitHub", href: "https://github.com/agam-pathak" },
                  { icon: <Globe size={16} />, label: "Portfolio", href: "https://agam-portfolio-s.vercel.app" },
                  { icon: <ExternalLink size={16} />, label: "Live Projects", href: "#projects" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all"
                  >
                    <span className="text-slate-400 group-hover:text-blue-500">{social.icon}</span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
            {/* Sidebar Column */}
            <aside className="space-y-12">
              {/* Profile Summary */}
              <section className="print:block">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Profile
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px] font-medium">
                  Computer Science undergraduate at CCS University (SCRIET) specializing in **Agentic AI Orchestration**. 
                  Proven expertise in building high-performance document intelligence platforms (RAG) and complex logistics (TMS) ecosystems.
                </p>
              </section>

              {/* Technical Expertise */}
              <section className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Expertise
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Code2 size={14} className="text-blue-600" /> CORE LANGUAGES
                    </p>
                    <div className="flex flex-wrap gap-2 text-[13px] text-slate-600">
                      {["C++", "Java", "TypeScript", "Python", "SQL"].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded bg-slate-50 border border-slate-100 font-semibold">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Layout size={14} className="text-emerald-600" /> MODERN STACK
                    </p>
                    <div className="flex flex-wrap gap-2 text-[13px] text-slate-600">
                      {["Next.js 16", "React", "Node.js", "TailwindCSS", "Supabase", "Prisma"].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded bg-slate-50 border border-slate-100 font-semibold">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Cpu size={14} className="text-purple-600" /> AI & INFRA
                    </p>
                    <div className="flex flex-wrap gap-2 text-[13px] text-slate-600">
                      {["RAG Pipelines", "Vector Search", "Groq AI", "Edge Ops", "Vercel", "Linux"].map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded bg-slate-50 border border-slate-100 font-semibold">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Core Competencies */}
              <section>
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Strengths
                </h3>
                <ul className="space-y-4">
                  {[
                    { title: "Team Leadership", desc: "Led teams of 4+ developers" },
                    { title: "Architectural Design", desc: "Clean & Scalable Codebases" },
                    { title: "Rapid Ship-ability", desc: "MVPs to Production in weeks" }
                  ].map((item, idx) => (
                    <li key={idx} className="group">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-wider">{item.title}</p>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Education */}
              <section className="page-break-inside-avoid">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-black text-slate-900">B.Tech in CSE</p>
                    <p className="text-xs text-blue-600 font-bold py-1">2023 – 2027 (Ongoing)</p>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">SCRIET, CCS University Campus, Meerut</p>
                  </div>
                </div>
              </section>
            </aside>

            {/* Main Content Column */}
            <div className="space-y-16">
              {/* Flagship Projects Section */}
              <section id="projects">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-10 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Flagship Production Proof
                </h3>

                <div className="space-y-14">
                  {/* Lexora AI */}
                  <article className="group page-break-inside-avoid">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all flex items-center justify-center">
                          <img src="/assets/logos/lexora-logo.svg" alt="Lexora" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">Lexora AI</h4>
                          <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Document Intelligence Workspace</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">AI • RAG OPS</span>
                    </div>
                    <p className="text-[14px] text-slate-600 leading-relaxed mb-4 pl-16">
                      Architected a premium RAG workspace for complex document analysis. Engineered a custom zero-dependency vector retrieval pipeline with 
                      hashed embedding fallbacks, optimizing for sub-200ms query times on local indexes.
                    </p>
                    <ul className="text-[13px] text-slate-500 space-y-2.5 font-medium pl-16">
                      <li className="flex gap-2"><span className="text-blue-500 font-black">/</span> Integrated dual-pane analysis with inline source citations and vector-based verification.</li>
                      <li className="flex gap-2"><span className="text-blue-500 font-black">/</span> Optimized PDF text extraction for high-fidelity OCR across technical whitepapers.</li>
                    </ul>
                  </article>

                  {/* Rahi.AI */}
                  <article className="group page-break-inside-avoid">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-all flex items-center justify-center">
                          <img src="/assets/logos/rahi-logo.svg" alt="Rahi" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors">Rahi.AI</h4>
                          <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Production Travel Orchestrator</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm">FULL STACK • PRODUCTION</span>
                    </div>
                    <p className="text-[14px] text-slate-600 leading-relaxed mb-4 pl-16">
                      Led development of an AI travel platform delivering 100% automated day-wise itineraries. Built a secure production flow featuring Stripe/UPI billing, multi-user collaboration, and voice-assisted planning.
                    </p>
                    <ul className="text-[13px] text-slate-500 space-y-2.5 font-medium pl-16">
                      <li className="flex gap-2"><span className="text-emerald-500 font-black">/</span> Shipped live collaboration engine featuring team invites and persistent shared workspaces.</li>
                      <li className="flex gap-2"><span className="text-emerald-500 font-black">/</span> Implemented premium feature authorization with edge-cached permission validation.</li>
                    </ul>
                  </article>

                  {/* SarthiSync */}
                  <article className="group page-break-inside-avoid">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-slate-900 group-hover:border-slate-800 transition-all flex items-center justify-center">
                          <img src="/assets/logos/sarthi-logo.svg" alt="SarthiSync" className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert" />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-slate-900 group-hover:text-slate-800 transition-colors">SarthiSync</h4>
                          <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Enterprise Logistics TMS</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">ERP • LOGISTICS</span>
                    </div>
                    <p className="text-[14px] text-slate-600 leading-relaxed mb-4 pl-16">
                      Engineered a mission-critical Transportation Management System. Developed an "AI Dispatch Copilot" for route recommendations and audit-ready verification flows using dual-OTP and ePOD capture.
                    </p>
                    <ul className="text-[13px] text-slate-500 space-y-2.5 font-medium pl-16">
                      <li className="flex gap-2"><span className="text-slate-900 font-black">/</span> Digitized vehicle/driver lifecycles with real-time operational dashboarding.</li>
                      <li className="flex gap-2"><span className="text-slate-900 font-black">/</span> Automated consignment/invoice generation pipeline, reducing administrative overhead by 60%.</li>
                    </ul>
                  </article>
                </div>
              </section>

              {/* Awards & Projects */}
              <section className="page-break-inside-avoid">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Beyond the Code
                </h3>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-xl bg-blue-100 text-blue-600 h-fit">
                      <Award size={24} />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wide">Infrastructure Design</h5>
                      <p className="text-[13px] text-slate-500 mt-1 font-medium leading-relaxed">
                        Successfully deployed 10+ projects using Edge and Serverless architectures. 
                        Highly focused on latency optimization and database normalization.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="p-3 rounded-xl bg-purple-100 text-purple-600 h-fit">
                      <Database size={24} />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 text-sm uppercase tracking-wide">Community & Leadership</h5>
                      <p className="text-[13px] text-slate-500 mt-1 font-medium leading-relaxed">
                        Mentored junior developers and led the "TMS" project from conceptualization to deployment. 
                        Frequent contributor to local tech meetups and open-source discussions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
              Validated & Updated: March 22, 2026
            </div>
            <p className="text-[11px] text-slate-400 font-medium italic">
              Built with Next.js, Framer Motion, and absolute precision. 
              <span className="hidden print:inline ml-2 text-blue-500 underline">agam-portfolio.vercel.app</span>
            </p>
          </footer>
        </Reveal>
      </main>

      {/* Global CSS for Printing */}
      <style jsx global>{`
        @media print {
          html, body {
            background-color: white !important;
            color: #0f172a !important;
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
          .absolute, .print-hidden {
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
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}
