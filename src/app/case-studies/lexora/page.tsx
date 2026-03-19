import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

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
        <Reveal className="section case-hero">
          <p className="eyebrow">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-space">
            Lexora AI (Document Intelligence)
          </h1>
          <p className="case-summary text-lg text-[--muted] max-w-3xl mb-6">
            Lexora AI is a premium Next.js 16 document intelligence workspace built around a retrieval-augmented generation (RAG) pipeline for PDFs. It features a Perplexity-like dual-pane chat interface with source citations, agentic thinking steps, and dynamic follow-up suggestions in a sleek dark theme.
          </p>
          <div className="chip-row flex flex-wrap gap-3">
            <span className="chip">Next.js 16</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">Groq API</span>
            <span className="chip">Llama-3.1</span>
            <span className="chip">react-pdf</span>
            <span className="chip">Vercel</span>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Role &amp; Scope</p>
            <h2 className="text-3xl font-bold font-space">What I built and coordinated</h2>
          </div>
          <div className="panel p-6">
            <ul className="case-list list-disc pl-5 space-y-2 text-[--muted]">
              <li>Developed a complete RAG pipeline connecting PDF text extraction (`pdf-parse`) to an embedded vector index.</li>
              <li>Engineered a premium UI providing a Perplexity-grade UX with source cards and "thinking" agentic steps.</li>
              <li>Implemented local zero-dependency vector storage under `.lexora/` with a fallback mechanism for hashed embeddings.</li>
              <li>Designed highly robust document parsers and a secure local auth system using signed `httpOnly` sessions.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Architecture</p>
            <h2 className="text-3xl font-bold font-space">System snapshot</h2>
          </div>
          <div className="case-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Frontend Layer</h3>
              <p className="text-[--muted]">
                Next.js App Router, React 19, and Tailwind CSS. Features an interactive dual-panel viewer with `react-pdf`.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">AI Engine</h3>
              <p className="text-[--muted]">
                Powered by Groq's high-speed inference running `llama-3.1-8b-instant` mapped strictly to retrieved contexts.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Local Vector Index</h3>
              <p className="text-[--muted]">
                Custom chunk-and-embed pipeline with a local filesystem vector store, completely independent of heavy managed DBs.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Auth & Workspaces</h3>
              <p className="text-[--muted]">
                Per-user secure directory allocation, storing personal conversations and indexed document schemas safely over HTTP cookies.
              </p>
            </article>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Impact</p>
            <h2 className="text-3xl font-bold font-space">Delivery outcomes</h2>
          </div>
          <div className="case-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">100%</h3>
              <p className="text-sm mt-2">Local index autonomy</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">~500ms</h3>
              <p className="text-sm mt-2">Average RAG query time</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">1</h3>
              <p className="text-sm mt-2">Premium dark theme applied</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">9</h3>
              <p className="text-sm mt-2">Secure API endpoints structured</p>
            </article>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Proof</p>
            <h2 className="text-3xl font-bold font-space">Product visuals</h2>
          </div>
          <div className="case-image-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-[--outline] shadow-lg">
              <img
                src="/assets/screenshots/lexora-dashboard-desktop.png"
                alt="Lexora AI dashboard desktop screenshot"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[--outline] shadow-lg">
              <img
                src="/assets/screenshots/lexora-dashboard-mobile.png"
                alt="Lexora AI chat mobile screenshot"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="case-actions mt-10 flex gap-4">
            <a
              href="https://lexora-ai-nine.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Live App
            </a>
            <Link href="/#projects" className="btn btn-secondary">
              Back to Projects
            </Link>
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
