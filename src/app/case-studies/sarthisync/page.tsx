import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { CheckCircle2, ArrowUpRight, ArrowLeft, Sparkles, Layers, Cpu, ShieldCheck, Zap, Monitor, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "SarthiSync Case Study | Agam Pathak",
  description: "Case study for SarthiSync by Agam Pathak: transportation management modules, workflow, and implementation details.",
};

export default function SarthiCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CaseStudyHeader liveUrl="https://sarthisync-live.vercel.app" />

      <main id="main-content" className="case-main max-w-[var(--max-width)] mx-auto px-5 py-10 pb-20">
        {/* Case Study Hero */}
        <Reveal className="section case-hero">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-300 text-xs font-mono font-bold mb-4 shadow-sm">
            <Sparkles size={13} />
            <span>CASE STUDY: FLEET LOGISTICS TMS</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-space text-[--text]">
            SarthiSync{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              (Transportation Management System)
            </span>
          </h1>

          <p className="case-summary text-base md:text-lg text-[--muted] max-w-3xl mb-8 leading-relaxed font-medium">
            SarthiSync Live is a full-stack logistics operations management platform focused on dispatch clarity: vehicle & route planning, AI-assisted assignment decisions, live GPS map tracking, dual-OTP verification, and delivery closure workflows.
          </p>

          <div className="chip-row flex flex-wrap gap-2.5">
            {["Node.js API", "JavaScript", "Bootstrap", "Leaflet Maps", "Chart.js", "Session Auth", "JSON Persistence", "Vercel"].map((chip) => (
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
            <h2 className="text-3xl font-bold font-space text-[--text]">How I Contributed to Logistics Ops</h2>
          </div>
          <div className="p-8 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Converted the original static prototype into a full-stack runnable app with authenticated APIs.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Implemented live fleet map and playback timeline with assignment progression states.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Built AI Dispatch Copilot for route-aware vehicle and driver recommendation scoring.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-[--muted] leading-relaxed font-medium">
                  Added operational flows: consignment intake, pickup/drop OTP verification, ePOD capture, and invoice generation.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Functional Architecture Grid */}
        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Module Design</p>
            <h2 className="text-3xl font-bold font-space text-[--text]">Functional Module Architecture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space text-[--text] group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                Access &amp; Session Layer
              </h3>
              <p className="text-xs text-[--muted] leading-relaxed">
                Cookie-based auth with protected business APIs for controlled dashboard operations and driver role permissions.
              </p>
            </article>

            <article className="p-6 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space text-[--text] group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                Dispatch Intelligence
              </h3>
              <p className="text-xs text-[--muted] leading-relaxed">
                AI Copilot evaluates cost, ETA, capacity fit, and active vehicle load before recommending pairings.
              </p>
            </article>

            <article className="p-6 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space text-[--text] group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                Delivery Assurance
              </h3>
              <p className="text-xs text-[--muted] leading-relaxed">
                Assignment lifecycle with dual-OTP stage checks (pickup + dropoff) and digital POD validation before final closure.
              </p>
            </article>

            <article className="p-6 rounded-3xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-space text-[--text] group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                Billing &amp; Exception Analytics
              </h3>
              <p className="text-xs text-[--muted] leading-relaxed">
                Invoice calculation from trip and surcharge components plus exception tracking for delayed or rerouted runs.
              </p>
            </article>
          </div>
        </Reveal>

        {/* Architecture Visualizer */}
        <Reveal className="section mt-16">
          <div className="p-8 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)]">
            <div className="section-heading mb-6">
              <p className="eyebrow">Architecture Visualizer</p>
              <h2 className="text-3xl font-bold font-space text-[--text]">Operational Logic Flow</h2>
            </div>
            <p className="text-sm text-[--muted] mb-8 max-w-2xl leading-relaxed font-medium">
              SarthiSync connects business consignment intake to field execution. The <strong className="text-[--text]">Dispatch Copilot</strong> ranks vehicle availability against route constraints, while the <strong className="text-[--text]">Delivery Assurance</strong> loop secures custody via dual-OTP checks.
            </p>
            <MermaidDiagram chart={`
graph TD
    Intake[Consignment Intake & Route]
    Copilot[AI Dispatch Copilot]
    Assign[Vehicle/Driver Assignment]
    Live[Live Fleet GPS Tracking]
    OTP1[Pickup OTP Verification]
    OTP2[Drop-off OTP Verification]
    EPOD[ePOD Signature Capture]
    Billing[Invoice Generation]

    Intake --> Copilot
    Copilot -- "Recommendation" --> Assign
    Assign --> Live
    Live --> OTP1
    OTP1 --> OTP2
    OTP2 --> EPOD
    EPOD --> Billing
            `} />
          </div>
        </Reveal>

        {/* Impact Delivery Outcomes */}
        <Reveal className="section mt-16">
          <div className="section-heading mb-6">
            <p className="eyebrow">Impact</p>
            <h2 className="text-3xl font-bold font-space text-[--text]">What It Delivers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-amber-600 dark:text-amber-300">14+</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Integrated operational modules</p>
            </article>
            <article className="text-center p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)]">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-orange-500">60%</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Reduced admin dispatch overhead</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-[--accent]">2</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">OTP checkpoints (pickup + drop)</p>
            </article>
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space text-cyan-600 dark:text-cyan-300">1</h3>
              <p className="text-xs text-[--muted] mt-2 font-medium">Public live deployment</p>
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
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-300">
                <Monitor size={14} /> Fleet Operations Desktop View
              </div>
              <div className="rounded-3xl overflow-hidden border border-[--outline] shadow-2xl bg-[--surface] group relative">
                <Image
                  src="/assets/screenshots/sarthi-dashboard-desktop.png"
                  alt="SarthiSync live operations dashboard desktop screenshot"
                  width={1600}
                  height={1000}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Mobile View Card */}
            <div className="lg:col-span-5 max-w-xs mx-auto w-full flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-500">
                <Smartphone size={14} /> Driver Mobile App View
              </div>
              <div className="rounded-3xl overflow-hidden border border-[--outline] shadow-2xl bg-[--surface] group relative">
                <Image
                  src="/assets/screenshots/sarthi-dashboard-mobile.png"
                  alt="SarthiSync live operations dashboard mobile screenshot"
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
              href="https://sarthisync-live.vercel.app"
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
