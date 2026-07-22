import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CheckCircle2, ArrowUpRight, ArrowLeft, Sparkles, Layers, Cpu, ShieldCheck, Zap, Monitor, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "JS Arcade Case Study | Agam Pathak",
  description: "Case study for JS Arcade by Agam Pathak: architecture, physics engines, and framework-free development of a premium game gallery.",
  icons: {
    icon: "/assets/logos/arcade-logo.png",
  },
};

export default function JSArcadeCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CaseStudyHeader 
        liveUrl="https://agam-pathak.github.io/JS-Mini-Projects/" 
        projectTitle="JS Arcade | Premium Mini-Projects Collection"
        projectIcon={<Image src="/assets/logos/arcade-logo.png" alt="" width={18} height={18} className="rounded-sm" />}
      />

      <main id="main-content" className="case-main max-w-[var(--max-width)] mx-auto px-5 py-10 pb-20">
        {/* Case Study Hero */}
        <Reveal className="section case-hero">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-600 dark:text-purple-300 text-xs font-mono font-bold mb-4 shadow-sm">
            <Sparkles size={13} />
            <span>CASE STUDY: CREATIVE CODING & GAME ENGINE</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/assets/logos/arcade-logo.png" 
              alt="JS Arcade Logo" 
              width={60} 
              height={60} 
              className="rounded-2xl shadow-lg border border-[--outline] bg-[--surface-strong] p-1"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space text-[--text]">
              JS Arcade{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                (Mini-Apps Collection)
              </span>
            </h1>
          </div>

          <p className="case-summary text-base md:text-lg text-[--muted] max-w-3xl mb-8 leading-relaxed font-medium">
            JS Arcade 2.0 is a high-performance game gallery featuring 8+ immersive arcade games and utilities built entirely with vanilla JavaScript. It demonstrates framework-free engineering, physics-based mechanics, and real-time API integrations with a premium Glassmorphism aesthetic.
          </p>

          <div className="chip-row flex flex-wrap gap-2.5">
            {["Vanilla JavaScript", "HTML5 Canvas", "CSS3 Animations", "DOM API", "OpenWeather API", "ExchangeRate API", "GitHub Pages"].map((chip) => (
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
            <h2 className="text-3xl font-bold font-space text-[--text]">The Framework-less Challenge</h2>
          </div>
          <div className="p-8 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Engineered custom 2D physics mechanics for Void Strike (shooter) and Synth Quest using pure JS vector math.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Implemented a centralized game lobby controller to manage state transitions between different mini-apps seamlessly.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Developed real-time data sync for utilities like SkySentry Weather, ensuring instant UI updates after API responses.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Designed a modular CSS system for global theme consistency across 8+ distinct visual game environments.
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
              <h2 className="text-3xl font-bold font-space text-[--text]">Vanilla 60FPS Game Loop Engine</h2>
            </div>
            <p className="text-sm text-[--muted] mb-8 max-w-2xl leading-relaxed font-medium">
              The core engine uses a high-frequency <strong className="text-[--text]">RequestAnimationFrame</strong> loop with delta-timing calculation to guarantee stutter-free physics calculations across 60Hz, 120Hz, and 144Hz displays.
            </p>
            <MermaidDiagram chart={`
graph TD
    Lobby[Lobby Controller]
    init[Initialization]
    Loop[60FPS Game Loop]
    Input[Input Handler]
    Physics[Physics & Delta Update]
    State[State Management]
    Render[Canvas/DOM Render]
    Sound[Web Audio API]

    Lobby --> init
    init --> Loop
    Loop --> Input
    Loop --> Physics
    Physics --> State
    State --> Render
    State --> Sound
    Render --> Loop
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
              <h3 className="text-3xl md:text-4xl font-bold font-space text-purple-600 dark:text-purple-300">8+</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Active mini-projects</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-[--accent]">60 FPS</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Canvas delta performance</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-cyan-600 dark:text-cyan-300">0</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">External JS frameworks</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-amber-600 dark:text-amber-300">100%</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Responsive mobile gameplay</p>
            </article>
          </div>
        </Reveal>

        {/* Product Proof Screenshots Without Empty Gaps */}
        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Proof</p>
            <h2 className="text-3xl font-bold font-space text-[--text]">Product Proof Screenshots</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Desktop View Card */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-600 dark:text-purple-300">
                <Monitor size={14} /> Desktop Arcade Lobby View
              </div>
              <div className="rounded-3xl overflow-hidden border border-[--outline] shadow-2xl bg-[--surface] group relative">
                <Image
                  src="/assets/screenshots/arcade-dashboard-desktop.png"
                  alt="JS Arcade dashboard desktop screenshot"
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
                <Smartphone size={14} /> Mobile Optimized View
              </div>
              <div className="rounded-3xl overflow-hidden border border-[--outline] shadow-2xl bg-[--surface] group relative">
                <Image
                  src="/assets/screenshots/arcade-dashboard-mobile.png"
                  alt="JS Arcade dashboard mobile screenshot"
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
              href="https://agam-pathak.github.io/JS-Mini-Projects/"
              className="btn btn-primary shadow-md flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open Live Arcade</span> <ArrowUpRight size={16} />
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
