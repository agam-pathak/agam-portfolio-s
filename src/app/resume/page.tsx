"use client";

import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe, Award, Database, Cpu, Layout, Code2, Briefcase, GraduationCap, ArrowUpRight, Zap, Target, Star, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f1f3f6] text-[#1a202c] selection:bg-[--accent] selection:text-black p-3 md:p-12 font-sans transition-colors duration-500 overflow-x-hidden relative">
      {/* Dynamic Background Visuals */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden print:hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-gradient-to-br from-indigo-500/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-gradient-to-tl from-[--accent]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      {/* Action Bar */}
      <div className="max-w-[1100px] mx-auto mb-10 flex flex-col sm:flex-row justify-between items-center print:hidden bg-white/60 backdrop-blur-3xl p-4 rounded-[2rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] gap-4 sticky top-6 z-50">
        <Link href="/" className="group text-[10px] sm:text-xs font-black uppercase tracking-[2px] text-indigo-600/70 hover:text-indigo-600 flex items-center gap-2 sm:gap-3 transition-all shrink-0">
          <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all text-sm shadow-sm shadow-indigo-100">←</span>
          Hub
        </Link>
        <div className="flex gap-4">
          <Magnetic>
            <button 
              onClick={handlePrint}
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-[2px] flex items-center gap-3 transition-all shadow-xl shadow-indigo-200 active:scale-95 hover:brightness-110"
            >
              <Download size={14} /> Download CV
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Main Resume Container */}
      <main className="max-w-[1100px] mx-auto bg-white print:p-0 shadow-[0_60px_120px_rgba(0,0,0,0.08)] print:shadow-none p-6 md:p-20 border border-indigo-50 print:border-none rounded-[2rem] md:rounded-[3.5rem] print:rounded-none overflow-hidden relative z-10">
        
        {/* Colorful Gradient Border (Top) */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-[--accent] opacity-90" />

        <Reveal>
          {/* Header Section */}
          <header className="relative mb-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-14 border-b border-indigo-50">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[1.75rem] bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white flex items-center justify-center text-3xl font-black font-space shadow-2xl shadow-indigo-200">
                    AP
                  </div>
                  <div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] font-space leading-none mb-2">Agam Pathak</h1>
                    <div className="flex items-center gap-4">
                      <span className="h-[2px] w-12 bg-indigo-600/30 hidden md:block" />
                      <p className="text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-bold tracking-tight leading-tight">
                        Full-Stack Developer focused on AI products
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-[2.5px] text-zinc-400">
                  <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-full border border-indigo-100/50">
                    <MapPin size={14} className="text-indigo-600" /> <span className="text-indigo-900">Meerut, IN</span>
                  </div>
                  <a href="mailto:agamworkspace@gmail.com" className="flex items-center gap-2 group transition-all">
                    <Mail size={14} className="text-indigo-600" /> <span className="group-hover:text-indigo-800">agamworkspace@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 group transition-all">
                    <Phone size={14} className="text-indigo-600" /> <span className="text-zinc-500">+91 7307086547</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end max-w-[320px]">
                {[
                  { icon: <Linkedin size={14} />, label: "LINKEDIN", href: "https://linkedin.com/in/agam-pathak", color: "blue" },
                  { icon: <Github size={14} />, label: "GITHUB", href: "https://github.com/agam-pathak", color: "zinc" },
                  { icon: <Globe size={14} />, label: "PORTFOLIO", href: "https://agam-portfolio-s.vercel.app", color: "indigo" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-50 border border-zinc-100 text-[10px] font-black text-zinc-500 hover:bg-white hover:border-indigo-300 hover:text-indigo-600 hover:scale-105 transition-all tracking-widest shadow-sm"
                  >
                    {social.icon} {social.label}
                  </a>
                ))}
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-24">
            {/* Sidebar Column */}
            <aside className="space-y-20">
              {/* Mission Statement */}
              <section className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-[2.5rem] border border-indigo-100/50">
                <h3 className="text-[11px] font-black uppercase tracking-[5px] text-indigo-400 mb-8 flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-indigo-200" /> MISSION
                </h3>
                <p className="text-zinc-700 leading-relaxed text-[15px] font-semibold">
                  B.Tech CSE student (2023-27) at SCRIET, focused on shipping practical full-stack products across AI workflows, logistics software, and interactive web experiences.
                </p>
              </section>

              {/* Stack Architecture */}
              <section className="space-y-12">
                <h3 className="text-[11px] font-black uppercase tracking-[5px] text-indigo-400 flex items-center gap-3 px-4">
                  <span className="w-10 h-[2px] bg-indigo-200" /> ARCHITECTURE
                </h3>
                
                <div className="space-y-10">
                  <div className="bg-white p-6 rounded-3xl border border-indigo-50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[11px] font-black text-indigo-900 mb-5 flex items-center gap-3 tracking-[3px] uppercase">
                      <span className="p-2 rounded-lg bg-indigo-100 text-indigo-600"><Code2 size={16} /></span>
                      <span>Core Engineering</span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {["TypeScript", "C++", "Java", "Python", "SQL", "Go"].map((skill) => (
                        <span key={skill} className="px-3.5 py-2 rounded-xl bg-indigo-50/50 border border-indigo-100/30 text-[12px] font-black text-indigo-700">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-indigo-50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[11px] font-black text-purple-900 mb-5 flex items-center gap-3 tracking-[3px] uppercase">
                      <span className="p-2 rounded-lg bg-purple-100 text-purple-600"><Layout size={16} /></span>
                      <span>Web Systems</span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {["Next.js 16", "React 19", "Node.js", "TailwindCSS", "Prisma", "GSAP", "Supabase"].map((skill) => (
                        <span key={skill} className="px-3.5 py-2 rounded-xl bg-purple-50/50 border border-purple-100/30 text-[12px] font-black text-purple-700">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-indigo-50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-[11px] font-black text-[--accent] text-emerald-900 mb-5 flex items-center gap-3 tracking-[3px] uppercase">
                      <span className="p-2 rounded-lg bg-emerald-100 text-emerald-600"><Cpu size={16} /></span>
                      <span>AI & Infra</span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {["RAG OPS", "Llama-3.1", "Groq AI", "Pinecone", "Vercel", "Docker"].map((skill) => (
                        <span key={skill} className="px-3.5 py-2 rounded-xl bg-emerald-50/50 border border-emerald-100/30 text-[12px] font-black text-emerald-700">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education & Achievements */}
              <section className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-[11px] font-black uppercase tracking-[5px] text-indigo-400 mb-8 flex items-center gap-3 px-4">
                    <span className="w-10 h-[2px] bg-indigo-200" /> ACADEMIA
                  </h3>
                  <div className="p-8 rounded-[2.5rem] bg-zinc-900 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[60px]" />
                    <p className="text-lg font-black font-space mb-2">B.Tech (CSE)</p>
                    <p className="text-[11px] text-indigo-400 font-black uppercase tracking-[3px] mb-4">2023 – 2027 (Ongoing)</p>
                    <p className="text-sm text-white/70 font-bold leading-relaxed">SCRIET, CCS University Campus, Meerut</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[11px] font-black uppercase tracking-[5px] text-indigo-400 mb-8 flex items-center gap-3 px-4">
                    <span className="w-10 h-[2px] bg-indigo-200" /> DISTINCTIONS
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-4 p-5 rounded-3xl bg-indigo-50/30 border border-indigo-50">
                      <div className="p-3 rounded-2xl bg-white text-indigo-600 shadow-sm"><Award size={20} /></div>
                      <p className="text-[13px] font-black text-indigo-900 uppercase tracking-tighter leading-none">4 Live Portfolio Systems</p>
                    </div>
                    <div className="flex items-center gap-4 p-5 rounded-3xl bg-indigo-50/30 border border-indigo-50">
                      <div className="p-3 rounded-2xl bg-white text-indigo-600 shadow-sm"><Target size={20} /></div>
                      <p className="text-[13px] font-black text-indigo-900 uppercase tracking-tighter leading-none">Student Project Team Lead</p>
                    </div>
                  </div>
                </div>
              </section>
            </aside>

            {/* Main Content Column */}
            <div className="space-y-24">
              {/* Production Proof Section */}
              <section>
                <div className="flex items-center justify-between mb-16">
                  <h3 className="text-[11px] font-black uppercase tracking-[5px] text-indigo-400 flex items-center gap-5">
                    <span className="w-10 h-[2px] bg-indigo-200" /> FLAGSHIP OPS
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Selected Work</span>
                  </div>
                </div>

                <div className="space-y-20">
                  {/* Lexora AI */}
                  <article className="group relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center p-3.5 shadow-xl shadow-indigo-100 group-hover:scale-110 transition-transform">
                          <BrainCircuit size={32} />
                        </div>
                        <div>
                          <h4 className="text-3xl font-black text-[#0f172a] font-space tracking-tight">Lexora AI <span className="text-indigo-400 text-sm ml-2 font-black line-through opacity-30">PRO</span></h4>
                          <p className="text-[11px] font-black text-indigo-500 uppercase tracking-[4px] mt-0.5">Vector Intel Workspace</p>
                        </div>
                      </div>
                      <Link href="/case-studies/lexora" className="p-3 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                    <p className="text-[16px] text-zinc-600 leading-relaxed mb-8 font-medium pl-20">
                      Built a RAG workspace for whitepaper analysis with a zero-dependency vector retrieval pipeline focused on fast local search and readable citations.
                    </p>
                    <div className="flex flex-wrap gap-4 pl-20">
                      <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-700 text-[11px] font-black tracking-widest uppercase"><Zap size={12} /> Hashed Embeddings</div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-xl border border-indigo-100 text-indigo-700 text-[11px] font-black tracking-widest uppercase"><Database size={12} /> Local Vector Index</div>
                    </div>
                  </article>

                  {/* Rahi.AI */}
                  <article className="group relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center p-3.5 shadow-xl shadow-indigo-100 group-hover:scale-110 transition-transform">
                          <Globe size={32} />
                        </div>
                        <div>
                          <h4 className="text-3xl font-black text-[#0f172a] font-space tracking-tight">Rahi.AI <span className="text-indigo-400 text-sm ml-2 font-black uppercase tracking-tighter">LIVE</span></h4>
                          <p className="text-[11px] font-black text-indigo-500 uppercase tracking-[4px] mt-0.5">Production Travel Orchestrator</p>
                        </div>
                      </div>
                      <Link href="/case-studies/rahi-ai" className="p-3 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                    <p className="text-[16px] text-zinc-600 leading-relaxed mb-8 font-medium pl-20">
                      Led development of an AI travel platform with <span className="text-zinc-900 font-bold">AI-generated day-wise itineraries</span>, multi-user collaboration, and billing flows.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-20">
                      <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-xl border border-indigo-100/30 text-indigo-700 text-[11px] font-black tracking-widest uppercase">/ Collaboration Engine</div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-xl border border-indigo-100/30 text-indigo-700 text-[11px] font-black tracking-widest uppercase">/ Edge Permission Auth</div>
                    </div>
                  </article>
                  <article className="group relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center p-3.5 shadow-xl shadow-emerald-100 group-hover:scale-110 transition-transform">
                          <Briefcase size={32} />
                        </div>
                        <div>
                          <h4 className="text-3xl font-black text-[#0f172a] font-space tracking-tight">SarthiSync <span className="text-emerald-400 text-sm ml-2 font-black uppercase tracking-tighter">TMS</span></h4>
                          <p className="text-[11px] font-black text-emerald-500 uppercase tracking-[4px] mt-0.5">Logistics Operation System</p>
                        </div>
                      </div>
                      <Link href="/case-studies/sarthisync" className="p-3 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                    <p className="text-[16px] text-zinc-600 leading-relaxed mb-8 font-medium pl-20">
                      Digitalized logistics workflows with an <span className="text-zinc-900 font-bold">AI Dispatch Copilot</span>, live tracking, and delivery verification flows that reduce manual admin work.
                    </p>
                    <ul className="space-y-4 pl-20">
                      <li className="flex gap-4 items-start text-sm text-zinc-500 font-bold">
                        <Star size={18} className="text-amber-500 shrink-0 mt-0.5" />
                        <span>Mission-critical operational dashboards with real-time fleet orchestration.</span>
                      </li>
                      <li className="flex gap-4 items-start text-sm text-zinc-500 font-bold">
                        <GraduationCap size={18} className="text-indigo-500 shrink-0 mt-0.5" />
                        <span>Dual-OTP verification & ePOD capture ensuring 100% audit-ready compliance.</span>
                      </li>
                    </ul>
                  </article>

                  {/* JS Arcade */}
                  <article className="group relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center p-3.5 shadow-xl shadow-purple-100 group-hover:scale-110 transition-transform">
                          <Cpu size={32} />
                        </div>
                        <div>
                          <h4 className="text-3xl font-black text-[#0f172a] font-space tracking-tight">JS Arcade <span className="text-purple-400 text-sm ml-2 font-black uppercase tracking-tighter">2.0</span></h4>
                          <p className="text-[11px] font-black text-purple-500 uppercase tracking-[4px] mt-0.5">Modular Game Gallery</p>
                        </div>
                      </div>
                      <Link href="/case-studies/js-arcade" className="p-3 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                        <ArrowUpRight size={20} />
                      </Link>
                    </div>
                    <p className="text-[16px] text-zinc-600 leading-relaxed mb-8 font-medium pl-20">
                      Collection of 8+ immersive games built using <span className="text-purple-600 font-black italic underline decoration-purple-100">100% Vanilla JS</span>. Custom spatial physics and Web Audio API integration for tactile arcade UX.
                    </p>
                    <div className="flex flex-wrap gap-2 pl-20">
                      {["Physics Math", "Canvas API", "60 FPS Render", "Mobile Focus"].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 text-[10px] font-black tracking-[1px] uppercase rounded-lg border border-purple-100">{tech}</span>
                      ))}
                    </div>
                  </article>
                </div>
              </section>

              {/* Impact Card */}
              <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white rounded-[3.5rem] p-12 md:p-16 relative overflow-hidden group shadow-2xl shadow-indigo-900/20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500 opacity-5 blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-[11px] font-black uppercase tracking-[6px] text-white/40 mb-12 flex items-center gap-4">
                  <span className="w-10 h-[1px] bg-white/20" /> IMPACT METRICS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-4">
                    <div className="text-4xl font-black font-space text-[--accent]">4</div>
                    <h5 className="font-black uppercase tracking-widest text-sm">Shipped Portfolio Systems</h5>
                    <p className="text-sm text-white/50 font-medium leading-relaxed">Projects delivered across AI travel, document intelligence, logistics, and interactive web experiences.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-4xl font-black font-space text-indigo-400">3</div>
                    <h5 className="font-black uppercase tracking-widest text-sm">Core Product Domains</h5>
                    <p className="text-sm text-white/50 font-medium leading-relaxed">Applied the same engineering approach across AI, logistics operations, and user-facing product design.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer className="mt-28 py-12 border-t border-indigo-50 text-center space-y-4">
            <p className="text-[11px] font-black uppercase tracking-[5px] text-zinc-300">
              Verified {year} &bull; Agam Pathak
            </p>
            <div className="flex justify-center items-center gap-4 text-[10px] text-zinc-400 font-bold uppercase tracking-[2px]">
              <span>Next.js 16 Production Build</span>
              <span className="w-1 h-1 rounded-full bg-indigo-300" />
              <span>Built with Precision</span>
            </div>
          </footer>
        </Reveal>
      </main>

      {/* Printing Overrides */}
      <style jsx global>{`
        @media print {
          html, body {
            background-color: white !important;
            color: #1a1e23 !important;
          }
          main {
            padding: 40px !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
          }
          .absolute, .fixed, .print-hidden, button {
            display: none !important;
          }
          .p-8, .p-10, .p-12, .p-16 {
            padding: 1.5rem !important;
          }
          .rounded-[3.5rem], .rounded-[2.5rem], .rounded-3xl {
            border-radius: 0.75rem !important;
          }
          .bg-indigo-50, .bg-indigo-50/30, .bg-zinc-900 {
            background-color: #f8fafc !important;
            color: #1a1e23 !important;
            border: 1px solid #e2e8f0 !important;
          }
          .text-indigo-600, .text-emerald-600, .text-purple-600 {
            color: #1a1e21 !important;
            text-decoration: underline !important;
          }
          .shadow-xl, .shadow-2xl, .shadow-lg {
            box-shadow: none !important;
          }
        }
        
        .font-space {
          font-family: var(--font-space, 'Space Grotesk', sans-serif);
        }

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
      `}</style>
    </div>
  );
}
