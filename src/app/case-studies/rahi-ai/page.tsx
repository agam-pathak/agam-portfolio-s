import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CheckCircle2, ArrowUpRight, ArrowLeft, Sparkles, Layers, Cpu, ShieldCheck, Zap, Monitor, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Rahi.AI Case Study | Agam Pathak",
  description: "Case study for Rahi.AI by Agam Pathak: architecture, features, and delivery outcomes for an AI travel planning platform.",
};

export default function RahiCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CaseStudyHeader liveUrl="https://rahi-ai.vercel.app" />

      <main id="main-content" className="case-main max-w-[var(--max-width)] mx-auto px-5 py-10 pb-20">
        {/* Case Study Hero */}
        <Reveal className="section case-hero">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-[--accent] text-xs font-mono font-bold mb-4 shadow-sm">
            <Sparkles size={13} />
            <span>CASE STUDY: AI TRAVEL PLATFORM</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-space text-[--text]">
            Rahi.AI{" "}
            <span className="bg-gradient-to-r from-[--accent] via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              (Tourist Management System)
            </span>
          </h1>

          <p className="case-summary text-base md:text-lg text-[--muted] max-w-3xl mb-8 leading-relaxed font-medium">
            Rahi.AI is an AI-powered travel platform designed for practical trip planning. It combines sub-second itinerary generation, budget-aware decision engines, real-time collaboration, voice interactions, and premium billing in one cohesive product.
          </p>

          <div className="chip-row flex flex-wrap gap-2.5">
            {["Next.js 16", "TypeScript", "Supabase", "Groq API", "Mapbox", "Stripe + UPI", "Vercel Edge"].map((chip) => (
              <span
                key={chip}
                className="px-3.5 py-1.5 rounded-xl bg-[--surface-strong] border border-[--outline] text-xs font-mono font-bold text-[--text] shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Role & Scope Section */}
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
                  Shaped full product flows from authentication to planner, shared trips, and subscription billing.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-[--accent] shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Integrated AI itinerary generation, AI voice-first buddy, and weather-aware planning routes.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-[--accent] shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Connected collaboration workflows using invites, member roles, and public/live trip pages.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-[--accent] shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Aligned UX with sub-200ms latency benchmarks in a production-ready Next.js 16 setup.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Architecture Grid */}
        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Architecture</p>
            <h2 className="text-3xl font-bold font-space text-[--text]">System Architecture Snapshot</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] hover:border-[--accent]/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-2xl bg-[--accent]/10 border border-[--accent]/30 text-[--accent] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space text-[--text] group-hover:text-[--accent] transition-colors">
                Frontend & UI Layer
              </h3>
              <p className="text-xs text-[--muted] leading-relaxed">
                Next.js 16 App Router with TypeScript, responsive Glassmorphic UI patterns, Mapbox interactive overlays, and motion-safe transitions.
              </p>
            </article>

            <article className="p-6 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space text-[--text] group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                Core Services & AI Pipelines
              </h3>
              <p className="text-xs text-[--muted] leading-relaxed">
                Supabase for authentication & real-time DB sync, Groq Llama-3.3 LLM agent chains for sub-second responses, and Mapbox Geocoding.
              </p>
            </article>

            <article className="p-6 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-2xl bg-purple-400/10 border border-purple-400/30 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space text-[--text] group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                Monetization & Feature Gating
              </h3>
              <p className="text-xs text-[--muted] leading-relaxed">
                Premium feature gating with Stripe subscription paths and Razorpay UPI checkout fallback for global and domestic users.
              </p>
            </article>

            <article className="p-6 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space text-[--text] group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                Quality & Production Ops
              </h3>
              <p className="text-xs text-[--muted] leading-relaxed">
                Automated Playwright visual test suites, Vercel Edge serverless deployments, and Sentry monitoring for 98% operational uptime.
              </p>
            </article>
          </div>
        </Reveal>

        {/* Mermaid Diagram Section */}
        <Reveal className="section mt-16">
          <div className="p-8 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)]">
            <div className="section-heading mb-6">
              <p className="eyebrow">Architecture Visualizer</p>
              <h2 className="text-3xl font-bold font-space text-[--text]">The Travel Orchestration Engine</h2>
            </div>
            <p className="text-sm text-[--muted] mb-8 max-w-2xl leading-relaxed">
              Rahi.AI operates as a decentralized travel orchestrator. It uses a <strong className="text-[--text]">Vercel Edge</strong> runtime to route prompt-engineered trip requests to <strong className="text-[--text]">Groq</strong> for sub-second LLM responses, while <strong className="text-[--text]">Supabase</strong> maintains real-time state sync.
            </p>
            <MermaidDiagram chart={`
graph TD
    User([User Client])
    Edge[Next.js Edge Runtime]
    Groq[Groq AI Agent]
    DB[(Supabase DB)]
    Auth[Supabase Auth]
    Map[Mapbox Tiles]

    User -- "Prompt & Session" --> Edge
    Edge -- "Auth Check" --> Auth
    Edge -- "Context Injection" --> Groq
    Groq -- "JSON Itinerary" --> Edge
    Edge -- "Stream Response" --> User
    Edge -- "State Persistence" --> DB
    User -- "Render Overlay" --> Map
            `} />
          </div>
        </Reveal>

        {/* Impact Delivery Stats */}
        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Impact</p>
            <h2 className="text-3xl font-bold font-space text-[--text]">Delivery Outcomes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-[--accent]">8+</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Core product flows shipped</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-cyan-600 dark:text-cyan-300">2</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Billing paths (Stripe + UPI)</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-purple-600 dark:text-purple-300">3</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Trip surfaces (planner, shared, live)</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-amber-600 dark:text-amber-300">1</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Live production deployment</p>
            </article>
          </div>
        </Reveal>

        {/* Seamless Image Proof Section Without Any Gaps */}
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
                  src="/assets/screenshots/rahi-planner-desktop.jpg"
                  alt="Rahi.AI planner desktop screenshot"
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
                  src="/assets/screenshots/rahi-chat-mobile.jpg"
                  alt="Rahi.AI chat mobile screenshot"
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
              href="https://rahi-ai.vercel.app"
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
