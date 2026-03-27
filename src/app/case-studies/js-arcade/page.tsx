import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata: Metadata = {
  title: "JS Arcade Case Study | Agam Pathak",
  description: "Case study for JS Arcade by Agam Pathak: architecture, physics engines, and framework-free development of a premium game gallery.",
};

export default function JSArcadeCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CaseStudyHeader liveUrl="https://agam-pathak.github.io/JS-Mini-Projects/" />

      <main id="main-content" className="case-main max-w-[var(--max-width)] mx-auto px-5 py-10 pb-20">
        <Reveal className="section case-hero">
          <p className="eyebrow">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-space">
            JS Arcade (Mini-Apps Collection)
          </h1>
          <p className="case-summary text-lg text-[--muted] max-w-3xl mb-6">
            JS Arcade is a high-performance game gallery featuring 8+ immersive arcade games and utilities built entirely with vanilla JavaScript. It demonstrates the power of framework-free engineering, physics-based mechanics, and real-time API integrations with a premium Glassmorphism aesthetic.
          </p>
          <div className="chip-row flex flex-wrap gap-3">
            <span className="chip">Vanilla JavaScript</span>
            <span className="chip">HTML5 Canvas</span>
            <span className="chip">CSS3 Animations</span>
            <span className="chip">DOM API</span>
            <span className="chip">OpenWeather API</span>
            <span className="chip">ExchangeRate API</span>
            <span className="chip">GitHub Pages</span>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Role &amp; Scope</p>
            <h2 className="text-3xl font-bold font-space">The Framework-less Challenge</h2>
          </div>
          <div className="panel p-6">
            <ul className="case-list list-disc pl-5 space-y-2 text-[--muted]">
              <li>Engineered custom physics engines for 2D shooters like Void Strike and platformers like Synth Quest using pure JS vector math.</li>
              <li>Implemented a centralized game lobby architecture to manage state transitions between different mini-apps seamlessly.</li>
              <li>Developed real-time data synchronization for utilities like SkySentry Weather, ensuring fast UI updates after each API response.</li>
              <li>Designed a modular CSS system for global theme consistency across 8+ different visual environments without using pre-processors.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-8">
            <p className="eyebrow">Architecture Visualizer</p>
            <h2 className="text-3xl font-bold font-space">Vanilla Game Loop Engine</h2>
          </div>
          <p className="text-[--muted] mb-8 max-w-2xl leading-relaxed">
            The core engine uses a high-frequency <strong>RequestAnimationFrame</strong> loop with delta-timing to ensure consistent physics calculations regardless of the monitor&rsquo;s refresh rate.
          </p>
          <MermaidDiagram chart={`
graph TD
    Lobby[Lobby Controller]
    init[Initialization]
    Loop[Game Loop]
    Input[Input Handler]
    Physics[Physics Update]
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
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Impact</p>
            <h2 className="text-3xl font-bold font-space">Delivery outcomes</h2>
          </div>
          <div className="case-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">8+</h3>
              <p className="text-sm mt-2">Active mini-projects</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">60 FPS</h3>
              <p className="text-sm mt-2">Canvas performance</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">0</h3>
              <p className="text-sm mt-2">External dependencies</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">100%</h3>
              <p className="text-sm mt-2">Responsive mobile play</p>
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
                src="/assets/screenshots/arcade-dashboard-desktop.png"
                alt="JS Arcade dashboard desktop screenshot"
                width={1600}
                height={1000}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[--outline] shadow-lg">
              <Image
                src="/assets/screenshots/arcade-dashboard-mobile.png"
                alt="JS Arcade dashboard mobile screenshot"
                width={900}
                height={1125}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="case-actions mt-10 flex gap-4">
            <a
              href="https://agam-pathak.github.io/JS-Mini-Projects/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Live Arcade
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
