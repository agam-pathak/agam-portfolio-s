import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CheckCircle2, ArrowUpRight, ArrowLeft, Sparkles, Layers, Cpu, ShieldCheck, Zap, Monitor, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Lexora AI Case Study | Agam Pathak",
  description: "Case study for Lexora AI by Agam Pathak: architecture, features, and delivery outcomes for an AI document intelligence workspace.",
};

export default function LexoraCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CaseStudyHeader liveUrl="https://lexora-ai-nine.vercel.app" />

      <main id="main-content" className="case-main max-w-[var(--max-width)] mx-auto px-5 py-10 pb-20">
        {/* Hero Section */}
        <Reveal className="section case-hero">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-[--accent] text-xs font-mono font-bold mb-4 shadow-sm">
            <Sparkles size={13} />
            <span>CASE STUDY: RAG VECTOR ENGINE</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-space text-[--text]">
            Lexora AI{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-[--accent] to-emerald-400 bg-clip-text text-transparent">
              (Document Intelligence)
            </span>
          </h1>

          <p className="case-summary text-base md:text-lg text-[--muted] max-w-3xl mb-8 leading-relaxed font-medium">
            Lexora AI is a premium Next.js 16 document intelligence workspace built around a retrieval-augmented generation (RAG) pipeline for confidential PDFs. It features a Perplexity-like dual-pane chat interface with source citations, agentic reasoning steps, and dynamic follow-up suggestions.
          </p>

          <div className="chip-row flex flex-wrap gap-2.5">
            {["Next.js 16", "TypeScript", "Tailwind CSS", "Groq Llama-3.3", "Local Vector Store", "react-pdf", "Vercel"].map((chip) => (
              <span
                key={chip}
                className="px-3.5 py-1.5 rounded-xl bg-[--surface-strong] border border-[--outline] text-xs font-mono font-bold text-[--text] shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Role & Scope */}
        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Role &amp; Scope</p>
            <h2 className="text-3xl font-bold font-space text-[--text]">What I Built and Coordinated</h2>
          </div>
          <div className="p-8 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-[--accent] shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Developed a complete RAG pipeline connecting PDF text extraction (`pdf-parse`) to an embedded vector index.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-[--accent] shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Engineered a premium UI providing a Perplexity-grade UX with source cards and visible reasoning steps.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-[--accent] shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Implemented local zero-dependency vector storage under `.lexora/` with a fallback mechanism for hashed embeddings.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-[--accent] shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Designed highly robust document parsers and a secure local auth system using signed `httpOnly` sessions.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Architecture Visualizer */}
        <Reveal className="section mt-16">
          <div className="p-8 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)]">
            <div className="section-heading mb-6">
              <p className="eyebrow">Architecture Visualizer</p>
              <h2 className="text-3xl font-bold font-space text-[--text]">The RAG Lifecycle Pipeline</h2>
            </div>
            <p className="text-sm text-[--muted] mb-8 max-w-2xl leading-relaxed font-medium">
              Lexora follows a zero-dependency retrieval architecture. Unlike standard RAG implementations that rely on managed third-party vector databases, Lexora maintains a <strong className="text-[--text]">local-first vector store (.lexora/)</strong> optimized for sub-200ms document intelligence.
            </p>
            <MermaidDiagram chart={`
graph LR
    PDF[PDF Upload]
    Parse[pdf-parse Extraction]
    Chunk[Semantic Chunking]
    Embed[Groq/Hashed Embeddings]
    Vector[(Local Vector Index .lexora/)]
    Query[User Query]
    Search[Semantic Cosine Search]
    LLM[Groq Llama-3.3 LLM]
    UI[Cited Response UI]

    PDF --> Parse
    Parse --> Chunk
    Chunk --> Embed
    Embed --> Vector
    Query --> Search
    Vector --> Search
    Search -- "Top-k Context" --> LLM
    Query --> LLM
    LLM --> UI
            `} />
          </div>
        </Reveal>

        {/* Impact Delivery Outcomes */}
        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Impact</p>
            <h2 className="text-3xl font-bold font-space text-[--text]">Delivery Outcomes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-[--accent]">100%</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Local index autonomy</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-cyan-600 dark:text-cyan-300">&lt;200ms</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Average RAG query time</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-purple-600 dark:text-purple-300">100%</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Theme-aware Glassmorphic UI</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-amber-600 dark:text-amber-300">9</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Secure API endpoints structured</p>
            </article>
          </div>
        </Reveal>

        {/* Product Visuals Without Any Empty Gaps */}
        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Proof</p>
            <h2 className="text-3xl font-bold font-space text-[--text]">Product Proof Screenshots</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Desktop View Card */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[--accent]">
                <Monitor size={14} /> Desktop Workspace View
              </div>
              <div className="rounded-3xl overflow-hidden border border-[--outline] shadow-2xl bg-[--surface] group relative">
                <Image
                  src="/assets/screenshots/lexora-dashboard-desktop.png"
                  alt="Lexora AI dashboard desktop screenshot"
                  width={1600}
                  height={1000}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Mobile View Card */}
            <div className="lg:col-span-5 max-w-xs mx-auto w-full flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-300">
                <Smartphone size={14} /> Mobile Companion View
              </div>
              <div className="rounded-3xl overflow-hidden border border-[--outline] shadow-2xl bg-[--surface] group relative">
                <Image
                  src="/assets/screenshots/lexora-dashboard-mobile.png"
                  alt="Lexora AI chat mobile screenshot"
                  width={900}
                  height={1125}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 pt-6 border-t border-[--outline]">
            <a
              href="https://lexora-ai-nine.vercel.app"
              className="btn btn-primary shadow-md flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open Live App</span> <ArrowUpRight size={16} />
            </a>
            <Link href="/#projects" className="btn btn-secondary flex items-center gap-2">
              <ArrowLeft size={16} /> <span>Back to Projects</span>
            </Link>
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
