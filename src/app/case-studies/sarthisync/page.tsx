import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

import { MermaidDiagram } from "@/components/MermaidDiagram";

export const metadata: Metadata = {
  title: "SarthiSync Case Study | Agam Pathak",
  description: "Case study for SarthiSync by Agam Pathak: transportation system modules, workflow, and implementation details.",
};

export default function SarthiCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CaseStudyHeader liveUrl="https://sarthisync-live.vercel.app" />

      <main id="main-content" className="case-main max-w-[var(--max-width)] mx-auto px-5 py-10 pb-20">
        <Reveal className="section case-hero">
          <p className="eyebrow">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-space">
            SarthiSync (Transportation Management System)
          </h1>
          <p className="case-summary text-lg text-[--muted] max-w-3xl mb-6">
            SarthiSync Live is a full-stack transportation operations demo
            environment focused on dispatch clarity: vehicle and route planning,
            AI-assisted assignment decisions, live map tracking, and delivery
            closure workflows.
          </p>
          <div className="chip-row flex flex-wrap gap-3">
            <span className="chip">Node.js</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Leaflet</span>
            <span className="chip">Chart.js</span>
            <span className="chip">Session Auth</span>
            <span className="chip">JSON Persistence</span>
            <span className="chip">Vercel</span>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Role &amp; Scope</p>
            <h2 className="text-3xl font-bold font-space">How I contributed</h2>
          </div>
          <div className="panel p-6">
            <ul className="case-list list-disc pl-5 space-y-2 text-[--muted]">
              <li>Converted the original static prototype into a full-stack runnable app with authenticated APIs.</li>
              <li>Implemented live fleet map and playback timeline with assignment progression states.</li>
              <li>Built AI Dispatch Copilot for route-aware vehicle and driver recommendation scoring.</li>
              <li>Added operationally useful flows: consignment intake, pickup/drop OTP verification, ePOD capture, invoice generation, and exception tracking.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-8">
            <p className="eyebrow">Architecture Visualizer</p>
            <h2 className="text-3xl font-bold font-space">Operational Logic Flow</h2>
          </div>
          <p className="text-[--muted] mb-8 max-w-2xl leading-relaxed">
            SarthiSync connects business intake to field execution. The <strong>Dispatch Copilot</strong> ranks vehicle availability against route constraints, while the <strong>Delivery Assurance</strong> loop secures the chain of custody via dual-OTP verification.
          </p>
          <MermaidDiagram chart={`
graph TD
    Intake[Consignment Intake]
    Copilot[AI Dispatch Copilot]
    Assign[Vehicle/Driver Assignment]
    Live[Live Fleet Tracking]
    OTP1[Pickup OTP Verification]
    OTP2[Drop-off OTP Verification]
    EPOD[ePOD Capture]
    Billing[Invoice Generation]

    Intake --> Copilot
    Copilot -- "Recommendation" --> Assign
    Assign --> Live
    Live --> OTP1
    OTP1 --> OTP2
    OTP2 --> EPOD
    EPOD --> Billing
          `} />
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Module Design</p>
            <h2 className="text-3xl font-bold font-space">Functional architecture</h2>
          </div>
          <div className="case-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Access &amp; Session Layer</h3>
              <p className="text-[--muted]">
                Cookie-based auth with protected business APIs for controlled
                dashboard operations.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Dispatch Intelligence</h3>
              <p className="text-[--muted]">
                AI Copilot evaluates cost, ETA, capacity fit, and active load
                before recommending pairings.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Delivery Assurance</h3>
              <p className="text-[--muted]">
                Assignment lifecycle with OTP stage checks and POD validation
                before final delivery closure.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-bold mb-2">Billing &amp; Exceptions</h3>
              <p className="text-[--muted]">
                Invoice calculation from trip and surcharge components plus
                exception tracking for failed or delayed runs.
              </p>
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
                src="/assets/screenshots/sarthi-dashboard-desktop.png"
                alt="SarthiSync live operations dashboard screenshot in desktop layout"
                width={1600}
                height={1000}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[--outline] shadow-lg">
              <Image
                src="/assets/screenshots/sarthi-dashboard-mobile.png"
                alt="SarthiSync live operations dashboard screenshot in mobile layout"
                width={900}
                height={1125}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Impact</p>
            <h2 className="text-3xl font-bold font-space">What it delivers</h2>
          </div>
          <div className="case-grid grid grid-cols-2 md:grid-cols-4 gap-4">
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">14+</h3>
              <p className="text-sm mt-2">Integrated operational modules in one workflow</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">3</h3>
              <p className="text-sm mt-2">Dispatch recommendation states (cost, speed, balanced)</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">2</h3>
              <p className="text-sm mt-2">OTP checkpoints (pickup + drop) before final closure</p>
            </article>
            <article className="stat p-4 text-center card">
              <h3 className="text-2xl font-bold text-[--accent]">1</h3>
              <p className="text-sm mt-2">Public live deployment with full dispatch workflow</p>
            </article>
          </div>
          <div className="case-actions mt-10 flex gap-4">
            <a
              href="https://sarthisync-live.vercel.app"
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
