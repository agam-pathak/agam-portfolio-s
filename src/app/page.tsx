import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <IntroAnimation />
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
              <Link href="#projects" className="btn btn-primary">
                View Projects
              </Link>
              <a href="/resume.pdf" download className="btn btn-secondary">
                Download Resume
              </a>
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
            <div className="profile-frame max-w-sm mx-auto">
              <img
                src="/profile-optimized.jpg"
                alt="Portrait of Agam Pathak"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="stats-grid mt-6">
              <article className="stat p-4 text-center">
                <h3>2</h3>
                <p>Flagship systems built and led</p>
              </article>
              <article className="stat p-4 text-center">
                <h3>8+</h3>
                <p>Production-grade flows in Rahi.AI</p>
              </article>
              <article className="stat p-4 text-center">
                <h3>2</h3>
                <p>Live deployed products</p>
              </article>
            </div>
          </Reveal>
        </section>

        <Reveal className="section" id="about">
          <div className="section-heading mb-6">
            <p className="eyebrow">About</p>
            <h2>Problem-solving with a product mindset</h2>
          </div>
          <div className="panel p-6">
            <p className="text-lg">
              Motivated and detail-oriented Computer Science Engineering
              undergraduate with a strong foundation in software development, data
              structures, and web technologies. Experienced in full-stack academic
              projects, task coordination, and team leadership. Passionate about
              scalable software, clean code, and continuous learning.
            </p>
          </div>
        </Reveal>

        <Reveal className="section" id="skills">
          <div className="section-heading mb-6">
            <p className="eyebrow">Technical Skills</p>
            <h2>Tools and technologies I use</h2>
          </div>
          <div className="skills-grid">
            <article className="card">
              <h3 className="font-bold mb-3">Programming</h3>
              <div className="skills-icons flex flex-wrap gap-2 mb-2">
                <img
                  src="https://skillicons.dev/icons?i=c,cpp,java,py"
                  alt="Programming Skills"
                  className="h-10 hover:-translate-y-1 hover:scale-105 transition-transform"
                />
              </div>
              <p>C, C++, Java, Python</p>
            </article>

            <article className="card">
              <h3 className="font-bold mb-3">Frontend</h3>
              <div className="skills-icons flex flex-wrap gap-2 mb-2">
                <img
                  src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,tailwind"
                  alt="Frontend Skills"
                  className="h-10 hover:-translate-y-1 hover:scale-105 transition-transform"
                />
              </div>
              <p>HTML, CSS, JavaScript, React, Next.js, Tailwind</p>
            </article>

            <article className="card">
              <h3 className="font-bold mb-3">Backend</h3>
              <div className="skills-icons flex flex-wrap gap-2 mb-2">
                <img
                  src="https://skillicons.dev/icons?i=nodejs,express"
                  alt="Backend Skills"
                  className="h-10 hover:-translate-y-1 hover:scale-105 transition-transform"
                />
              </div>
              <p>Node.js, Express</p>
            </article>

            <article className="card">
              <h3 className="font-bold mb-3">Database</h3>
              <div className="skills-icons flex flex-wrap gap-2 mb-2">
                <img
                  src="https://skillicons.dev/icons?i=mysql,postgres,supabase"
                  alt="Database Skills"
                  className="h-10 hover:-translate-y-1 hover:scale-105 transition-transform"
                />
              </div>
              <p>SQL, PostgreSQL, Supabase</p>
            </article>

            <article className="card">
              <h3 className="font-bold mb-3">Tools</h3>
              <div className="skills-icons flex flex-wrap gap-2 mb-2">
                <img
                  src="https://skillicons.dev/icons?i=git,github,vscode,vercel,postman"
                  alt="Tools"
                  className="h-10 hover:-translate-y-1 hover:scale-105 transition-transform"
                />
              </div>
              <p>Git, GitHub, VS Code, Vercel</p>
            </article>

            <article className="card">
              <h3 className="font-bold mb-3">Core CS</h3>
              <div className="skills-icons flex flex-wrap gap-2 mb-2">
                <img
                  src="https://skillicons.dev/icons?i=linux,md"
                  alt="Core CS Skills"
                  className="h-10 hover:-translate-y-1 hover:scale-105 transition-transform"
                />
              </div>
              <p>Data Structures, Algorithms, Problem Solving</p>
            </article>
          </div>
        </Reveal>

        <Reveal className="section" id="projects">
          <div className="section-heading mb-6">
            <p className="eyebrow">Projects</p>
            <h2>Real systems built in team settings</h2>
          </div>
          <div className="projects-grid">
            <article className="project-card flex flex-col justify-between">
              <div>
                <div className="project-head flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl">Rahi.AI (Tourist Management System)</h3>
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
                  Next.js 15, TypeScript, React, Tailwind CSS, Supabase, Groq API,
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
                  <figure className="proof-shot proof-shot-desktop">
                    <img
                      src="/assets/screenshots/rahi-planner-desktop.jpg"
                      alt="Rahi.AI planner desktop interface"
                      loading="lazy"
                    />
                    <figcaption>Planner workspace (desktop)</figcaption>
                  </figure>
                  <figure className="proof-shot proof-shot-mobile">
                    <img
                      src="/assets/screenshots/rahi-chat-mobile.jpg"
                      alt="Rahi.AI chat interface on mobile"
                      loading="lazy"
                    />
                    <figcaption>AI chat flow (mobile)</figcaption>
                  </figure>
                </div>
              </div>
              <div className="project-actions mt-auto flex gap-4 pt-4 border-t border-[--outline]">
                <a
                  href="https://rahi-ai.vercel.app"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Live App
                </a>
                <Link href="/case-studies/rahi-ai" className="btn btn-secondary">
                  View Case Study
                </Link>
              </div>
            </article>

            <article className="project-card flex flex-col justify-between">
              <div>
                <div className="project-head flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl">Lexora AI</h3>
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
                  <figure className="proof-shot proof-shot-desktop">
                    <img
                      src="/assets/screenshots/lexora-dashboard-desktop.png"
                      alt="Lexora AI dashboard desktop"
                      loading="lazy"
                    />
                    <figcaption>Workspace (desktop)</figcaption>
                  </figure>
                  <figure className="proof-shot proof-shot-mobile">
                    <img
                      src="/assets/screenshots/lexora-dashboard-mobile.png"
                      alt="Lexora AI chat mobile"
                      loading="lazy"
                    />
                    <figcaption>AI Chat (mobile)</figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-auto">
                <p className="project-note mb-4 text-sm">
                  Live URL:{" "}
                  <a
                    href="https://lexora-ai-nine.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--accent]"
                  >
                    lexora-ai-nine.vercel.app
                  </a>
                </p>
                <div className="project-actions flex gap-4 pt-4 border-t border-[--outline]">
                  <a
                    href="https://lexora-ai-nine.vercel.app"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live App
                  </a>
                  <Link href="/case-studies/lexora" className="btn btn-secondary">
                    View Case Study
                  </Link>
                </div>
              </div>
            </article>

            <article className="project-card flex flex-col justify-between">
              <div>
                <div className="project-head flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl">SarthiSync Live (TMS)</h3>
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
                  <figure className="proof-shot proof-shot-desktop">
                    <img
                      src="/assets/screenshots/sarthi-dashboard-desktop.png"
                      alt="SarthiSync dashboard desktop"
                      loading="lazy"
                    />
                    <figcaption>Operations (desktop)</figcaption>
                  </figure>
                  <figure className="proof-shot proof-shot-mobile">
                    <img
                      src="/assets/screenshots/sarthi-dashboard-mobile.png"
                      alt="SarthiSync dashboard mobile"
                      loading="lazy"
                    />
                    <figcaption>Operations (mobile)</figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-auto">
                <p className="project-note mb-4 text-sm">
                  Live URL:{" "}
                  <a
                    href="https://sarthisync-live.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--accent]"
                  >
                    sarthisync-live.vercel.app
                  </a>
                </p>
                <div className="project-actions flex gap-4 pt-4 border-t border-[--outline]">
                  <a
                    href="https://sarthisync-live.vercel.app"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live App
                  </a>
                  <Link href="/case-studies/sarthisync" className="btn btn-secondary">
                    View Case Study
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </Reveal>

        <Reveal className="section" id="education">
          <div className="section-heading mb-6">
            <p className="eyebrow">Education</p>
            <h2>Academic foundation</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <h3 className="font-bold text-lg mb-2">Bachelor of Technology (B.Tech), Computer Science Engineering</h3>
              <p>Chaudhary Charan Singh University Campus (SCRIET), Meerut</p>
              <span className="text-sm opacity-60">2023 to 2027</span>
            </article>
            <article className="timeline-item">
              <h3 className="font-bold text-lg mb-2">Secondary &amp; Senior Secondary Education</h3>
              <p>St. Francis Academy, Anepur, Auraiya</p>
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
