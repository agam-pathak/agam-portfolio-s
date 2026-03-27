import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { MermaidDiagram } from "@/components/MermaidDiagram";

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
        <Reveal className="section case-hero">
          <p className="eyebrow">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-space">
            Rahi.AI (Tourist Management System)
          </h1>
          <p className="case-summary text-lg text-[--muted] max-w-3xl mb-6">
            Rahi.AI is an AI-powered travel platform designed for practical trip
            planning. It combines itinerary generation, budget-aware decisions,
            collaboration, voice interactions, and premium billing in one product.
          </p>
          <div className="chip-row flex flex-wrap gap-3">
            <span className="chip">Next.js 16</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Supabase</span>
            <span className="chip">Groq API</span>
            <span className="chip">Mapbox</span>
            <span className="chip">Stripe + UPI</span>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Role &amp; Scope</p>
            <h2 className="text-3xl font-bold font-space">What I built and coordinated</h2>
          </div>
          <div className="panel p-6">
            <ul className="case-list list-disc pl-5 space-y-2 text-[--muted]">
              <li>Shaped full product flows from authentication to planner, shared trips, and billing.</li>
              <li>Integrated AI itinerary generation, AI chat buddy, and weather-aware planning routes.</li>
              <li>Connected collaboration workflows using invites, member roles, and public/live trip pages.</li>
              <li>Aligned UX with performance and deployability in a production-ready Next.js setup.</li>
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
                Next.js App Router with TypeScript, responsive UI patterns, and
                motion-safe interactions.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Core Services</h3>
              <p className="text-[--muted]">
                Supabase for auth/data, Groq-backed AI routes, and Mapbox for
                location-centric trip views.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Monetization</h3>
              <p className="text-[--muted]">
                Premium gating with Stripe subscription paths and Razorpay UPI
                fallback support.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Quality &amp; Ops</h3>
              <p className="text-[--muted]">
                Playwright visual tests and optional Sentry monitoring for
                production observability.
              </p>
            </article>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-8">
            <p className="eyebrow">Architecture Visualizer</p>
            <h2 className="text-3xl font-bold font-space">The Travel Orchestration Engine</h2>
          </div>
          <p className="text-[--muted] mb-8 max-w-2xl leading-relaxed">
            Rahi.AI operates as a decentralized travel orchestrator. It uses a <strong>Vercel Edge</strong> runtime to route prompt-engineered trip requests to <strong>Groq</strong> for sub-second responses, while <strong>Supabase</strong> maintains real-time sync for collaborative trip pages.
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
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Impact</p>
            <h2 className="text-3xl font-bold font-space">Delivery outcomes</h2>
          </div>
          <div className="case-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">8+</h3>
              <p className="text-sm mt-2">Core product flows shipped</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">2</h3>
              <p className="text-sm mt-2">Billing paths integrated (Stripe + UPI)</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">3</h3>
              <p className="text-sm mt-2">Trip surfaces (planner, shared, live)</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">1</h3>
              <p className="text-sm mt-2">Live production deployment</p>
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
              <Image
                src="/assets/screenshots/rahi-planner-desktop.jpg"
                alt="Rahi.AI planner desktop screenshot"
                width={1600}
                height={1000}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[--outline] shadow-lg">
              <Image
                src="/assets/screenshots/rahi-chat-mobile.jpg"
                alt="Rahi.AI chat mobile screenshot"
                width={900}
                height={1125}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="case-actions mt-10 flex gap-4">
            <a
              href="https://rahi-ai.vercel.app"
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
