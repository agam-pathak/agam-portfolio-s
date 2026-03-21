"use client";

import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 p-4 md:p-8 font-sans">
      {/* Action Bar (Hidden on Print) */}
      <div className="max-w-[850px] mx-auto mb-8 flex justify-between items-center print:hidden bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-2 transition-colors">
          ← Back to Portfolio
        </Link>
        <button 
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
        >
          <Download size={18} /> Download Updated PDF
        </button>
      </div>

      {/* Main Resume Container */}
      <main className="max-w-[850px] mx-auto bg-white print:p-0 shadow-[0_10px_50px_rgba(0,0,0,0.08)] print:shadow-none p-12 md:p-20 border border-slate-100 print:border-none rounded-2xl">
        <Reveal>
          {/* Header */}
          <header className="border-b-2 border-slate-200 pb-10 mb-10">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-3">Agam Pathak</h1>
            <p className="text-2xl text-blue-600 font-semibold mb-8 italic">Software Developer | B.Tech CSE (2023–2027)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-[15px] text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <MapPin size={18} />
                </div>
                Meerut, India
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <Mail size={18} />
                </div>
                <a href="mailto:agamworkspace@gmail.com" className="hover:text-blue-600 transition-colors">
                  agamworkspace@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <Phone size={18} />
                </div>
                +91 7307086547
              </div>
              <div className="flex items-center gap-3 font-semibold text-slate-800">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <ExternalLink size={18} />
                </div>
                <a href="https://agam-portfolio-s.vercel.app" className="hover:text-blue-600 transition-colors">
                  agam-portfolio.vercel.app
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <Linkedin size={18} />
                </div>
                <a href="https://linkedin.com/in/agam-pathak" className="hover:text-blue-600 transition-colors">
                  in/agam-pathak
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                  <Github size={18} />
                </div>
                <a href="https://github.com/agam-pathak" className="hover:text-blue-600 transition-colors">
                  github.com/agam-pathak
                </a>
              </div>
            </div>
          </header>

          {/* Section: Summary */}
          <section className="mb-12 page-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-5 border-l-4 border-blue-600 pl-4">Professional Summary</h2>
            <p className="text-slate-700 leading-relaxed text-[16px]">
              Computer Science Engineering undergraduate specializing in **Agentic AI Orchestration** and **Full-stack Solutions**. 
              Experienced in building high-performance document intelligence platforms and complex logistics systems. 
              Highly focused on software scalability, clean architectural patterns, and delivering data-driven project outcomes.
            </p>
          </section>

          {/* Section: Technical Skills */}
          <section className="mb-12 page-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 border-l-4 border-blue-600 pl-4">Technical Stack</h2>
            <div className="grid grid-cols-1 gap-y-5 text-[15px]">
              <div className="flex items-start md:items-center gap-4">
                <span className="font-bold text-slate-900 min-w-[150px]">Languages:</span>
                <span className="text-slate-700">C/C++, Java, Python, JavaScript (ES6+), TypeScript</span>
              </div>
              <div className="flex items-start md:items-center gap-4">
                <span className="font-bold text-slate-900 min-w-[150px]">Frameworks:</span>
                <span className="text-slate-700">Next.js 16 (App Router), React, Node.js, Tailwind CSS, Bootstrap</span>
              </div>
              <div className="flex items-start md:items-center gap-4">
                <span className="font-bold text-slate-900 min-w-[150px]">Infrastructure:</span>
                <span className="text-slate-700">Supabase, PostgreSQL, Prisma, Vercel Edge, Git/GitHub, Linux Ops</span>
              </div>
              <div className="flex items-start md:items-center gap-4">
                <span className="font-bold text-slate-900 min-w-[150px]">Core CS:</span>
                <span className="text-slate-700">RAG Architectures, Vector Ops, Distributed Systems, Advanced DSA</span>
              </div>
            </div>
          </section>

          {/* Section: Experience & Flagship Projects */}
          <section className="mb-12">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 border-l-4 border-blue-600 pl-4">Flagship Projects</h2>
            
            <div className="space-y-12">
              <article className="page-break-inside-avoid">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-[18px] text-slate-900">
                    Lexora AI (Document Intelligence Workspace)
                  </h3>
                  <span className="text-[11px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 px-3 py-1 rounded-full">AI • RAG Pipeline</span>
                </div>
                <p className="text-[14px] italic text-slate-500 mb-4 font-medium">Lead Developer | TypeScript, Groq AI, Vector Storage</p>
                <ul className="list-disc pl-6 text-[15px] text-slate-700 space-y-2.5 leading-relaxed">
                  <li>Developed a **premium RAG-based analysis platform** connecting doc extraction to local vector indexes.</li>
                  <li>Engineered zero-dependency vector storage with hashed embedding fallback for efficient retrieval.</li>
                  <li>Implemented a dual-pane intelligence workspace providing inline citations and source tracking.</li>
                </ul>
              </article>

              <article className="page-break-inside-avoid">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-[18px] text-slate-900">
                    Rahi.AI (Production Travel Planning Platform)
                  </h3>
                  <span className="text-[11px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Full-Stack Production</span>
                </div>
                <p className="text-[14px] italic text-slate-500 mb-4 font-medium">Lead Developer | Next.js, Supabase, Stripe, Mapbox API</p>
                <ul className="list-disc pl-6 text-[15px] text-slate-700 space-y-2.5 leading-relaxed">
                  <li>Built an AI travel orchestrator delivering **full day-wise itineraries** and budget analytics.</li>
                  <li>Integrated production billing flows via **Stripe and UPI** with premium feature authorization.</li>
                  <li>Collaborative planning engine featuring team invites, voice-first UX, and AI decision coaching.</li>
                </ul>
              </article>

              <article className="page-break-inside-avoid">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-[18px] text-slate-900">
                    SarthiSync (Transportation Management System)
                  </h3>
                  <span className="text-[11px] font-black uppercase tracking-widest bg-blue-50 text-blue-700 px-3 py-1 rounded-full">ERP System</span>
                </div>
                <p className="text-[14px] italic text-slate-500 mb-4 font-medium">Developer | Node.js, Leaflet, Chart.js, Bootstrap</p>
                <ul className="list-disc pl-6 text-[15px] text-slate-700 space-y-2.5 leading-relaxed">
                  <li>Engineered a full-stack TMS for real-world fleet operations, managing vehicle/driver lifecycles.</li>
                  <li>Built an **AI Dispatch Copilot** for cost-aware vehicle recommendations and operational tracking.</li>
                  <li>Implemented secure stage-verification using dual-OTP flows, ePOD capture, and automated invoicing.</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Section: Education */}
          <section className="mb-12 page-break-inside-avoid">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-5 border-l-4 border-blue-600 pl-4">Education</h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-black text-slate-900 text-[17px]">Bachelor of Technology (Computer Science Engineering)</h3>
                <span className="text-sm text-slate-500 font-black">2023 – 2027</span>
              </div>
              <p className="text-[15px] text-slate-700 font-medium">SCRIET, Chaudhary Charan Singh University Campus, Meerut</p>
            </div>
          </section>

          <footer className="mt-20 text-center text-slate-400 text-[11px] font-black uppercase tracking-widest border-t border-slate-100 pt-10 print:mt-10">
            Self-Deployed Resume Engine. Last Validated: March 2026.
          </footer>
        </Reveal>
      </main>

      {/* Global CSS for Printing */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          main {
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .page-break-inside-avoid {
            page-break-inside: avoid;
          }
          nav, .print-hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
