import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Counter } from "@/components/Counter";
import { MouseTracker } from "@/components/MouseTracker";
import { motion } from "framer-motion";
import { Github, Mail, Twitter, ExternalLink, ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <MouseTracker />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="page-glow" aria-hidden="true" />

      <Header />

      <main id="main-content">
        <section className="hero section mt-12 mb-20 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <Reveal className="hero-copy">
            <p className="eyebrow">Software Developer</p>
            <h1>
              Building practical software with
              <span> clean architecture </span>
              and user-focused design.
            </h1>
            <p className="hero-text text-lg">
              I am a B.Tech Computer Science Engineering student (2023 to 2027)
              at Chaudhary Charan Singh University Campus (SCRIET), Meerut. I
              build full-stack web applications and lead teams to ship reliable
              project outcomes.
            </p>
            <div className="hero-actions my-6">
              <Magnetic>
                <Link href="#projects" className="btn btn-primary" data-cursor="pointer">
                  View Projects
                </Link>
              </Magnetic>
              <Magnetic>
                <a href="/resume.pdf" download className="btn btn-secondary" data-cursor="pointer">
                  Download Resume
                </a>
              </Magnetic>
            </div>
            <div className="meta-row">
              <span className="mr-4">Meerut, India</span>
              <span className="mr-4">
                <a href="mailto:agamworkspace@gmail.com">agamworkspace@gmail.com</a>
              </span>
              <span>
                <a href="tel:+917307086547">+91 7307086547</a>
              </span>
            </div>
          </Reveal>

          <Reveal className="hero-media">
            <div className="profile-frame max-w-sm mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[--accent] to-transparent opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              <Image
                src="/profile-optimized.jpg"
                alt="Portrait of Agam Pathak"
                width={400}
                height={500}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="stats-grid mt-6">
              <article className="stat p-4 text-center">
                <Counter value={2} suffix="" />
                <p>Flagship systems built and led</p>
              </article>
              <article className="stat p-4 text-center">
                <Counter value={8} suffix="+" />
                <p>Production-grade flows in Rahi.AI</p>
              </article>
              <article className="stat p-4 text-center">
                <Counter value={3} suffix="" />
                <p>Live deployed products</p>
              </article>
            </div>
          </Reveal>
        </section>

        <Reveal className="section" id="about">
          <div className="section-heading mb-6">
            <p className="eyebrow">About</p>
            <h2>Architecting products, not just code.</h2>
          </div>
          <div className="panel p-8">
            <p className="text-xl mb-4 leading-relaxed font-medium">
              I’m a developer who bridges the gap between complex engineering and user-friendly products.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Beyond the code, I focus on the "why"—understanding user bottlenecks, lead-time optimization, and shipping reliable systems. 
              Currently pursuing my B.Tech at CCU Campus (SCRIET), I spend my days orchestrating AI workflows and leading teams to deliver 
              high-performance solutions that solve real-world problems.
            </p>
          </div>
        </Reveal>

        <Reveal className="section" id="journey">
          <div className="section-heading mb-10">
            <p className="eyebrow">The Journey</p>
            <h2 className="text-3xl font-bold font-space">Production Proof of Work</h2>
          </div>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
            <div className="relative pl-8">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[--accent] ring-4 ring-[--accent]/20 shadow-[0_0_15px_rgba(102,246,202,0.5)]" 
              />
              <p className="text-sm font-bold text-[--accent] uppercase tracking-widest mb-1">Today & Beyond</p>
              <h3 className="text-xl font-bold mb-2">Production AI & Scalable Systems</h3>
              <p className="text-[--muted] max-w-2xl leading-relaxed">
                Focused on orchestrating Agentic AI workflows (Lexora, Rahi.AI) and optimizing 
                distributed system latency. Leading project teams to deliver high-fidelity, production-grade applications.
              </p>
            </div>

            <div className="relative pl-8">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-white/30" 
              />
              <p className="text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Early 2024</p>
              <h3 className="text-xl font-bold mb-2">Operations Mastery (SarthiSync)</h3>
              <p className="text-[--muted] max-w-2xl leading-relaxed">
                Shipped an operational Transportation Management System (TMS) with live dispatch tracking and 
                logistics logic, proving the ability to handle real-world business complexity.
              </p>
            </div>

            <div className="relative pl-8">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-white/30" 
              />
              <p className="text-sm font-bold opacity-60 uppercase tracking-widest mb-1">Late 2023</p>
              <h3 className="text-xl font-bold mb-2">Engineering Foundation</h3>
              <p className="text-[--muted] max-w-2xl leading-relaxed">
              Started Bachelor of Technology (B.Tech) in Computer Science Engineering at 
              <strong> SCRIET, Chaudhary Charan Singh University </strong>. Diving deep into C++, Java, and Algorithmic foundations.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="section" id="skills">
          <div className="section-heading mb-8">
            <p className="eyebrow">Technical Skills</p>
            <h2 className="text-3xl font-bold font-space">Tools and technologies I use</h2>
          </div>
          <div className="skills-grid gap-4">
            <article className="card p-6 border-l-4 border-l-[--accent]">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-[--accent]/10 text-[--accent]"><Github size={20} /></span>
                <h3 className="font-bold text-lg">Core Ecosystem</h3>
              </div>
              <div className="skills-icons flex flex-wrap gap-2 mb-4">
                <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,supabase,nodejs" alt="Core Skills" className="h-9" />
              </div>
              <p className="text-sm text-[--muted]">My primary toolkit for building high-performance, full-stack applications with localized intelligence.</p>
            </article>

            <article className="card p-6 border-l-4 border-l-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-blue-400/10 text-blue-400"><Mail size={20} /></span>
                <h3 className="font-bold text-lg">Languages & Foundations</h3>
              </div>
              <div className="skills-icons flex flex-wrap gap-2 mb-4">
                <img src="https://skillicons.dev/icons?i=cpp,java,py,js,html,css" alt="Languages" className="h-9" />
              </div>
              <p className="text-sm text-[--muted]">Deeply rooted in C++, Java, and Python for algorithm-heavy tasks and core engineering logic.</p>
            </article>

            <article className="card p-6 border-l-4 border-l-purple-400">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-purple-400/10 text-purple-400"><Github size={20} /></span>
                <h3 className="font-bold text-lg">Infrastructure & Data</h3>
              </div>
              <div className="skills-icons flex flex-wrap gap-2 mb-4">
                <img src="https://skillicons.dev/icons?i=postgres,mysql,prisma,vercel,git,linux" alt="Infra Skills" className="h-9" />
              </div>
              <p className="text-sm text-[--muted]">Experienced in RDBMS management, edge deployments, and version control workflows.</p>
            </article>

            <article className="card p-6 border-l-4 border-l-orange-400">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-orange-400/10 text-orange-400"><Twitter size={20} /></span>
                <h3 className="font-bold text-lg">Currently Optimizing</h3>
              </div>
              <p className="text-sm text-[--muted] mb-3">Focused on deepening expertise in:</p>
              <div className="flex flex-wrap gap-2">
                <span className="pill text-[10px] bg-orange-400/10 border-orange-400/20 text-orange-400">RAG Architectures</span>
                <span className="pill text-[10px] bg-orange-400/10 border-orange-400/20 text-orange-400">Edge Runtime Ops</span>
                <span className="pill text-[10px] bg-orange-400/10 border-orange-400/20 text-orange-400">Fleet Logistics AI</span>
              </div>
            </article>
          </div>
        </Reveal>

        <Reveal className="section" id="projects">
          <div className="section-heading mb-6">
            <p className="eyebrow">Projects</p>
            <h2>Real systems built in team settings</h2>
          </div>
          <div className="projects-grid">
            <article className="project-card flex flex-col justify-between" data-cursor="view">
              <div>
                <div className="project-head flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 p-1.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex items-center justify-center">
                      <Image src="/assets/logos/rahi-logo.svg" alt="Rahi.AI" fill className="p-1 object-contain" />
                    </div>
                    <h3 className="font-bold text-xl">Rahi.AI (Travel Orchestrator)</h3>
                  </div>
                    <div className="flex items-center gap-2 text-xs text-[--accent] opacity-90">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
                      </span>
                      Production Ready: Vercel Edge
                    </div>
                  </div>
                  <span className="pill hover:-translate-y-1 hover:scale-105 transition-transform">AI Travel Platform</span>
                </div>

                <div className="project-tech-icons mb-3">
                  <img
                    src="https://skillicons.dev/icons?i=nextjs,ts,react,tailwind,supabase,workers"
                    alt="Rahi.AI Stack"
                    className="h-8 opacity-90 hover:-translate-y-1 hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                <p className="stack text-sm mb-4">
                  Next.js 16, TypeScript, React, Tailwind CSS, Supabase, Groq API,
                  Mapbox, Stripe
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 opacity-80">
                  <li>
                    Built an AI-powered tourist planning platform with day-wise
                    itineraries and budget tracking.
                  </li>
                  <li>
                    Implemented auth, collaboration invites, public trip pages,
                    and live trip workflows.
                  </li>
                  <li>
                    Integrated billing flows for subscriptions and UPI checkout
                    with premium feature gating.
                  </li>
                  <li>
                    Shipped voice-first planning and an AI travel buddy for
                    faster trip decisions.
                  </li>
                </ul>
                <div className="proof-grid mb-6 grid grid-cols-2 gap-4">
                  <figure className="proof-shot proof-shot-desktop overflow-hidden border border-white/10 rounded-xl relative aspect-[16/10] group/proof">
                    <Image
                      src="/assets/screenshots/rahi-planner-desktop.jpg"
                      alt="Rahi.AI planner desktop interface"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/proof:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[10px] text-white/90 font-medium flex items-center gap-1">
                        <ExternalLink size={10} /> Interactive Planner
                      </p>
                    </div>
                  </figure>
                  <figure className="proof-shot proof-shot-mobile aspect-[4/5] group/proof">
                    <Image
                      src="/assets/screenshots/rahi-chat-mobile.jpg"
                      alt="Rahi.AI chat interface on mobile"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/proof:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[10px] text-white/90 font-medium flex items-center gap-1">
                        <ExternalLink size={10} /> AI Travel Buddy
                      </p>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="project-actions mt-auto flex gap-4 pt-4 border-t border-[--outline]">
                <Magnetic>
                  <a
                    href="https://rahi-ai.vercel.app"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live App
                  </a>
                </Magnetic>
                <Magnetic>
                  <Link href="/case-studies/rahi-ai" className="btn btn-secondary">
                    View Case Study
                  </Link>
                </Magnetic>
              </div>
            </article>

            <article className="project-card flex flex-col justify-between" data-cursor="view">
              <div>
                <div className="project-head flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 p-1.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex items-center justify-center">
                      <Image src="/assets/logos/lexora-logo.svg" alt="Lexora AI" fill className="p-1 object-contain" />
                    </div>
                    <h3 className="font-bold text-xl">Lexora AI (Doc Intelligence)</h3>
                  </div>
                    <div className="flex items-center gap-2 text-xs text-[--accent] opacity-90">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
                      </span>
                      Optimized: RAG Ops
                    </div>
                  </div>
                  <span className="pill hover:-translate-y-1 hover:scale-105 transition-transform">AI Document Intelligence</span>
                </div>

                <div className="project-tech-icons mb-3">
                  <img
                    src="https://skillicons.dev/icons?i=nextjs,ts,react,tailwind,vercel"
                    alt="Lexora AI Stack"
                    className="h-8 opacity-90 hover:-translate-y-1 hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                <p className="stack text-sm mb-4">
                  Next.js 16, TypeScript, React, Tailwind CSS, Groq AI, Vector Ops
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 opacity-80">
                  <li>
                    Built a premium document intelligence workspace with a Perplexity-like dual-pane chat interface.
                  </li>
                  <li>
                    Engineered a complete RAG pipeline connecting PDF text extraction to a localized vector index.
                  </li>
                  <li>
                    Implemented local zero-dependency vector storage with a hashed embeddings fallback mechanism.
                  </li>
                  <li>
                    Designed highly robust document parsers and a secure local auth system.
                  </li>
                </ul>
                <div className="proof-grid mb-6 grid grid-cols-2 gap-4">
                  <figure className="proof-shot proof-shot-desktop overflow-hidden border border-white/10 rounded-xl relative aspect-[16/10] group/proof">
                    <Image
                      src="/assets/screenshots/lexora-dashboard-desktop.png"
                      alt="Lexora AI dashboard desktop"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/proof:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[10px] text-white/90 font-medium flex items-center gap-1">
                        <ExternalLink size={10} /> RAG Workspace
                      </p>
                    </div>
                  </figure>
                  <figure className="proof-shot proof-shot-mobile aspect-[4/5] group/proof">
                    <Image
                      src="/assets/screenshots/lexora-dashboard-mobile.png"
                      alt="Lexora AI chat mobile"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/proof:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[10px] text-white/90 font-medium flex items-center gap-1">
                        <ExternalLink size={10} /> Dual-pane Chat
                      </p>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="project-actions flex gap-4 pt-4 mt-auto">
                <Magnetic>
                  <a
                    href="https://lexora-ai-nine.vercel.app"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live App
                  </a>
                </Magnetic>
                <Magnetic>
                  <Link href="/case-studies/lexora" className="btn btn-secondary">
                    View Case Study
                  </Link>
                </Magnetic>
              </div>
            </article>

            <article className="project-card flex flex-col justify-between" data-cursor="view">
              <div>
                <div className="project-head flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 p-1.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex items-center justify-center">
                      <Image src="/assets/logos/sarthi-logo.svg" alt="SarthiSync" fill className="p-1 object-contain" />
                    </div>
                    <h3 className="font-bold text-xl">SarthiSync (Fleet Ops TMS)</h3>
                  </div>
                    <div className="flex items-center gap-2 text-xs text-orange-400 opacity-90">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
                      </span>
                      Operational: Fleet TMS
                    </div>
                  </div>
                  <span className="pill hover:-translate-y-1 hover:scale-105 transition-transform">Logistics Operations TMS</span>
                </div>

                <div className="project-tech-icons mb-3">
                  <img
                    src="https://skillicons.dev/icons?i=nodejs,js,bootstrap,vercel"
                    alt="SarthiSync Stack"
                    className="h-8 opacity-90 hover:-translate-y-1 hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>

                <p className="stack text-sm mb-4">
                  Node.js API, JavaScript, Bootstrap, Leaflet, Chart.js, Cookie Auth
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 opacity-80">
                  <li>
                    Built live assignment operations with vehicle, driver, route,
                    and dispatch tracking.
                  </li>
                  <li>
                    Implemented map playback, AI dispatch copilot, and
                    operational analytics.
                  </li>
                  <li>
                    Added real-world delivery workflow: consignments, OTP checks,
                    ePOD capture, and invoice generation.
                  </li>
                  <li>
                    Deployed publicly on Vercel with serverless-compatible
                    routing.
                  </li>
                </ul>
                <div className="proof-grid mb-6 grid grid-cols-2 gap-4">
                  <figure className="proof-shot proof-shot-desktop overflow-hidden border border-white/10 rounded-xl relative aspect-[16/10] group/proof">
                    <Image
                      src="/assets/screenshots/sarthi-dashboard-desktop.png"
                      alt="SarthiSync dashboard desktop"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/proof:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[10px] text-white/90 font-medium flex items-center gap-1">
                        <ExternalLink size={10} /> Fleet Dashboard
                      </p>
                    </div>
                  </figure>
                  <figure className="proof-shot proof-shot-mobile aspect-[4/5] group/proof">
                    <Image
                      src="/assets/screenshots/sarthi-dashboard-mobile.png"
                      alt="SarthiSync dashboard mobile"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/proof:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-[10px] text-white/90 font-medium flex items-center gap-1">
                        <ExternalLink size={10} /> Mobile Ops
                      </p>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="project-actions flex gap-4 pt-4 mt-auto">
                <Magnetic>
                  <a
                    href="https://sarthisync-live.vercel.app"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live App
                  </a>
                </Magnetic>
                <Magnetic>
                  <Link href="/case-studies/sarthisync" className="btn btn-secondary">
                    View Case Study
                  </Link>
                </Magnetic>
              </div>
            </article>
          </div>
        </Reveal>


        <Reveal className="section">
          <div className="section-heading mb-6">
            <p className="eyebrow">Strengths</p>
            <h2>How I contribute to teams</h2>
          </div>
          <div className="strengths grid grid-cols-2 lg:grid-cols-4 gap-4">
            <article className="card">
              <h3 className="font-bold mb-2 text-[--accent]">Leadership</h3>
              <p className="text-sm opacity-80">
                Lead project teams, assign tasks, and keep delivery aligned.
              </p>
            </article>
            <article className="card">
              <h3 className="font-bold mb-2 text-[--accent]">Clean Code</h3>
              <p className="text-sm opacity-80">
                Prefer clear structure, maintainability, and scalable
                implementation.
              </p>
            </article>
            <article className="card">
              <h3 className="font-bold mb-2 text-[--accent]">Problem Solving</h3>
              <p className="text-sm opacity-80">
                Use DSA and practical analysis to break down product challenges.
              </p>
            </article>
            <article className="card">
              <h3 className="font-bold mb-2 text-[--accent]">Collaboration</h3>
              <p className="text-sm opacity-80">
                Work effectively across frontend, backend, and planning workflows.
              </p>
            </article>
          </div>
        </Reveal>

        <Reveal className="section contact" id="contact">
          <div className="section-heading mb-6">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something meaningful</h2>
          </div>
          <div className="contact-layout grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="contact-grid grid grid-cols-2 gap-4">
              <a href="mailto:agamworkspace@gmail.com" className="contact-item card hover-bg-[--contact-hover-bg] transition-colors group">
                <h3 className="font-bold group-hover:text-[--accent] transition-colors">Email</h3>
                <p className="text-sm break-words">agamworkspace@gmail.com</p>
              </a>
              <a href="tel:+917307086547" className="contact-item card hover-bg-[--contact-hover-bg] transition-colors group">
                <h3 className="font-bold group-hover:text-[--accent] transition-colors">Phone</h3>
                <p className="text-sm break-words">+91 7307086547</p>
              </a>
              <a
                href="https://www.linkedin.com/in/agam-pathak"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item card hover-bg-[--contact-hover-bg] transition-colors group"
              >
                <h3 className="font-bold group-hover:text-[--accent] transition-colors">LinkedIn</h3>
                <p className="text-sm break-words">linkedin.com/in/agam-pathak</p>
              </a>
              <div className="contact-item card">
                <h3 className="font-bold">Location</h3>
                <p className="text-sm">Meerut, India</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
