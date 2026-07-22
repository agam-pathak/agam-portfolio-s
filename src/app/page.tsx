"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Counter } from "@/components/Counter";
import { GlowEffect } from "@/components/GlowEffect";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, MapPin, Phone, ExternalLink, Sparkles, ArrowUpRight, ShieldCheck, Cpu, Users, Code2, Brain, Share2, CheckCircle2 } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";
import { RagSandbox } from "@/components/RagSandbox";
import { TechMatrix } from "@/components/TechMatrix";
import { ProjectCardWithToggle } from "@/components/ProjectCardWithToggle";
import { JourneyVideoModal } from "@/components/JourneyVideoModal";

function IconStrip({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={320}
      height={48}
      unoptimized
      className={className}
    />
  );
}

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
        <section className="hero section mt-8 mb-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <Reveal className="hero-copy">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[--accent]/10 border border-[--accent]/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(102,246,202,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[--accent]"></span>
              </span>
              <span className="text-xs font-bold text-[--accent] tracking-wide">
                Available for Full-Stack & AI Roles • B.Tech CSE @ SCRIET
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] mb-6 font-space">
              Architecting{" "}
              <span className="bg-gradient-to-r from-[--accent] via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(102,246,202,0.35)]">
                Production AI
              </span>{" "}
              & scalable web systems.
            </h1>

            {/* Bio Paragraph */}
            <p className="hero-text text-base md:text-lg text-[--muted] leading-relaxed mb-8 max-w-2xl">
              I am a B.Tech Computer Science Engineering student (2023–2027) at{" "}
              <strong className="text-[--text] font-semibold">Chaudhary Charan Singh University (SCRIET)</strong>, Meerut. 
              I build full-stack web applications, engineer local-first RAG vector systems, and lead engineering teams to ship reliable software outcomes.
            </p>

            {/* Hero CTA & Social Quick Links */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <GlowEffect glowSize={180}>
                <Magnetic strength={0.2}>
                  <Link href="#projects" className="btn btn-primary shadow-[0_0_20px_rgba(102,246,202,0.3)]">
                    View Projects <ArrowUpRight size={16} />
                  </Link>
                </Magnetic>
              </GlowEffect>
              <GlowEffect glowSize={180}>
                <Magnetic strength={0.4}>
                  <Link href="/resume" className="btn btn-secondary">
                    View Modern Resume
                  </Link>
                </Magnetic>
              </GlowEffect>
            </div>

            {/* Meta Info Pill Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[--muted]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[--surface] border border-[--outline] text-[--text]">
                <MapPin size={13} className="text-[--accent]" /> Noida, UP, India
              </span>
              <a
                href="mailto:agamworkspace@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[--surface] border border-[--outline] text-[--text] hover:border-[--accent] hover:text-[--accent] transition-all"
              >
                <Mail size={13} className="text-[--accent]" /> agamworkspace@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/agam-pathak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[--surface] border border-[--outline] text-[--text] hover:border-[--accent] hover:text-[--accent] transition-all"
              >
                <Linkedin size={13} className="text-[--accent]" /> LinkedIn
              </a>
              <a
                href="https://github.com/Agam-Pathak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[--surface] border border-[--outline] text-[--text] hover:border-[--accent] hover:text-[--accent] transition-all"
              >
                <Github size={13} className="text-[--accent]" /> GitHub
              </a>
            </div>
          </Reveal>

          {/* Right Column: Glass Profile Frame & Stats Grid */}
          <Reveal className="hero-media">
            <div className="max-w-sm mx-auto relative group">
              {/* Ambient Glow Aura Behind Card */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-[--accent]/30 via-cyan-400/20 to-purple-500/30 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

              {/* Profile Frame with Gradient Border Glow */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[--outline] via-[--surface] to-[--accent]/50 shadow-[var(--shadow)] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-[--accent]/80">
                <div className="rounded-[1.4rem] overflow-hidden relative bg-[--surface-strong]">
                  <Image
                    src="/profile-optimized.jpg"
                    alt="Portrait of Agam Pathak"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Seamless Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[--bg]/90 via-[--bg]/25 to-transparent opacity-80" />
                  
                  {/* Floating Glass Title & Status Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[--surface]/90 backdrop-blur-2xl border border-[--outline] shadow-2xl flex items-center justify-between group-hover:border-[--accent]/60 transition-all">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-sm font-bold text-[--text] font-space">Agam Pathak</h3>
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
                        </span>
                      </div>
                      <p className="text-[11px] text-[--accent] font-mono font-semibold">Full-Stack & AI Architect</p>
                    </div>
                    <span className="p-2 rounded-xl bg-[--accent]/15 text-[--accent] border border-[--accent]/30 shadow-sm">
                      <Sparkles size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glassmorphic Stats Grid */}
            <div className="stats-grid mt-6 grid grid-cols-3 gap-3">
              <article className="p-3.5 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent]/50 transition-all text-center group shadow-[var(--shadow)]">
                <div className="text-xl md:text-2xl font-bold text-[--accent] font-space group-hover:scale-110 transition-transform">
                  <Counter value={3} suffix="+" />
                </div>
                <p className="text-[11px] text-[--muted] mt-1 leading-snug font-medium">Flagship AI Systems Built</p>
              </article>
              <article className="p-3.5 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent]/50 transition-all text-center group shadow-[var(--shadow)]">
                <div className="text-xl md:text-2xl font-bold text-[--accent] font-space group-hover:scale-110 transition-transform">
                  <Counter value={8} suffix="+" />
                </div>
                <p className="text-[11px] text-[--muted] mt-1 leading-snug font-medium">Production AI Workflows</p>
              </article>
              <article className="p-3.5 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent]/50 transition-all text-center group shadow-[var(--shadow)]">
                <div className="text-xl md:text-2xl font-bold text-[--accent] font-space group-hover:scale-110 transition-transform">
                  <Counter value={15} suffix="+" />
                </div>
                <p className="text-[11px] text-[--muted] mt-1 leading-snug font-medium">Production Deployments</p>
              </article>
            </div>
          </Reveal>
        </section>

        {/* Idea 1: Interactive RAG Sandbox Section */}
        <Reveal className="section mb-16">
          <RagSandbox />
        </Reveal>

        {/* High-Impact Glassmorphic About Section */}
        <Reveal className="section" id="about">
          <div className="section-heading mb-8">
            <p className="eyebrow">About</p>
            <h2 className="text-3xl md:text-4xl font-bold font-space">Architecting Products, Not Just Code</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Panel: Core Philosophy & Bio */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[--accent]/10 via-transparent to-cyan-400/5 blur-[80px] pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-[--accent] text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                    <Sparkles size={13} /> Full-Stack & AI Architect
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 text-xs font-mono font-bold">
                    B.Tech CSE (2023–2027)
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[--text] font-space leading-snug mb-4">
                  Bridging complex engineering with{" "}
                  <span className="bg-gradient-to-r from-[--accent] via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    user-focused outcomes.
                  </span>
                </h3>

                <p className="text-base text-[--muted] leading-relaxed mb-6 font-medium">
                  Beyond writing clean code, I focus on solving core product challenges: eliminating user bottlenecks, engineering sub-200ms RAG retrieval pipelines, and leading project teams to ship reliable, high-availability software ecosystems.
                </p>

                <p className="text-sm text-[--muted] leading-relaxed mb-8">
                  Currently pursuing my Bachelor of Technology (B.Tech) in Computer Science Engineering at{" "}
                  <strong className="text-[--text] font-semibold">Chaudhary Charan Singh University (SCRIET)</strong>, Meerut. I spend my days building local-first vector engines, orchestrating multi-user web platforms, and managing agile delivery.
                </p>
              </div>

              {/* Quick Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[--outline]">
                <div className="p-3 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                  <p className="text-[10px] font-mono text-[--muted] uppercase">University</p>
                  <p className="text-xs font-bold text-[--text] mt-0.5">SCRIET CCSU</p>
                </div>
                <div className="p-3 rounded-2xl bg-[--bg-soft] border border-[--outline]">
                  <p className="text-[10px] font-mono text-[--muted] uppercase">Specialization</p>
                  <p className="text-xs font-bold text-[--accent] mt-0.5">RAG & Web Ops</p>
                </div>
                <div className="p-3 rounded-2xl bg-[--bg-soft] border border-[--outline] col-span-2 sm:col-span-1">
                  <p className="text-[10px] font-mono text-[--muted] uppercase">Location</p>
                  <p className="text-xs font-bold text-[--text] mt-0.5">Noida, UP, India</p>
                </div>
              </div>
            </div>

            {/* Right Panel: 3 Engineering Pillars */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)] hover:border-[--accent]/60 transition-all duration-300 group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[--accent]/10 border border-[--accent]/30 text-[--accent] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Cpu size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[--text] group-hover:text-[--accent] transition-colors font-space mb-1">
                    01. Problem-First Design
                  </h4>
                  <p className="text-xs text-[--muted] leading-relaxed">
                    I start with user bottlenecks and latency limits before writing a single line of frontend or backend code.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)] hover:border-cyan-400/60 transition-all duration-300 group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[--text] group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors font-space mb-1">
                    02. High Availability Architecture
                  </h4>
                  <p className="text-xs text-[--muted] leading-relaxed">
                    Engineering local vector indexes (.lexora/) and dual-OTP logistics compliance with 98% uptime benchmarks.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] shadow-[var(--shadow)] hover:border-purple-400/60 transition-all duration-300 group flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-400/10 border border-purple-400/30 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Users size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[--text] group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors font-space mb-1">
                    03. Team Leadership
                  </h4>
                  <p className="text-xs text-[--muted] leading-relaxed">
                    Leading engineering teams across task decomposition, strict code reviews, and rapid sprint delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="section" id="journey">
          <div className="section-heading mb-10">
            <p className="eyebrow">The Journey</p>
            <h2 className="text-3xl font-bold font-space">Production Proof of Work</h2>
          </div>
          
          <JourneyVideoModal />

          {/* High-Fidelity Glowing Engineering Roadmap */}
          <div className="relative border-l-2 border-gradient-to-b from-[--accent] via-cyan-500/40 to-[--outline] ml-4 md:ml-8 space-y-8 pb-4">
            {/* Milestone 1: Today & Beyond */}
            <div className="relative pl-6 md:pl-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[--accent] ring-4 ring-[--accent]/20 shadow-[0_0_20px_rgba(102,246,202,0.8)]"
              />
              <div className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent]/50 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[--accent] px-2.5 py-0.5 rounded-full bg-[--accent]/10 border border-[--accent]/20 uppercase tracking-wider">
                    Today & Beyond
                  </span>
                  <span className="text-[11px] text-[--muted] font-mono">Lead R&D Architect</span>
                </div>
                <h3 className="text-xl font-bold text-[--text] font-space mb-2 group-hover:text-[--accent] transition-colors">
                  Production AI & Scalable Systems
                </h3>
                <p className="text-sm text-[--muted] leading-relaxed mb-4">
                  Focused on orchestrating Agentic AI workflows (Lexora AI PRO, Rahi.AI), engineering local-first vector index pipelines, and optimizing distributed system latency. Leading project teams to deliver high-fidelity, production-grade applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[--chip-bg] border border-[--outline] text-[--chip-text]">Lexora AI PRO</span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[--chip-bg] border border-[--outline] text-[--chip-text]">Rahi.AI</span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[--chip-bg] border border-[--outline] text-[--chip-text]">Groq Llama-3.3</span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[--accent]/10 border border-[--accent]/30 text-[--accent] font-semibold">Sub-200ms RAG Ops</span>
                </div>
              </div>
            </div>

            {/* Milestone 2: Early 2024 */}
            <div className="relative pl-6 md:pl-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
              />
              <div className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 uppercase tracking-wider">
                    Early 2024
                  </span>
                  <span className="text-[11px] text-[--muted] font-mono">Full-Stack Engineer</span>
                </div>
                <h3 className="text-xl font-bold text-[--text] font-space mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                  Operations Mastery — SarthiSync TMS
                </h3>
                <p className="text-sm text-[--muted] leading-relaxed mb-4">
                  Shipped an operational Transportation Management System (TMS) with live fleet tracking, AI dispatch copilot, and secure dual-OTP delivery verification, reducing administrative overhead by 60%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[--chip-bg] border border-[--outline] text-[--chip-text]">Logistics TMS</span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[--chip-bg] border border-[--outline] text-[--chip-text]">Dual-OTP Verification</span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 font-semibold">-60% Admin Overhead</span>
                </div>
              </div>
            </div>

            {/* Milestone 3: Late 2023 */}
            <div className="relative pl-6 md:pl-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-purple-400 ring-4 ring-purple-400/20 shadow-[0_0_15px_rgba(192,132,252,0.6)]"
              />
              <div className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-300 px-2.5 py-0.5 rounded-full bg-purple-400/10 border border-purple-400/20 uppercase tracking-wider">
                    Late 2023
                  </span>
                  <span className="text-[11px] text-[--muted] font-mono">B.Tech Student</span>
                </div>
                <h3 className="text-xl font-bold text-[--text] font-space mb-2 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                  Engineering Foundation @ SCRIET
                </h3>
                <p className="text-sm text-[--muted] leading-relaxed mb-4">
                  Started Bachelor of Technology (B.Tech) in Computer Science Engineering at <strong className="text-[--text] font-semibold">SCRIET, Chaudhary Charan Singh University</strong>. Diving deep into C++, Java, Object-Oriented Programming (OOP), and Data Structures & Algorithms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[--chip-bg] border border-[--outline] text-[--chip-text]">SCRIET CCS University</span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-[--chip-bg] border border-[--outline] text-[--chip-text]">C++ & Java</span>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-purple-400/10 border border-purple-400/30 text-purple-600 dark:text-purple-300 font-semibold">DSA & OOP Foundations</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Idea 2: Interactive Tech Matrix */}
        <Reveal className="section" id="skills">
          <div className="section-heading mb-8">
            <p className="eyebrow">Technical Skills</p>
            <h2 className="text-3xl font-bold font-space">Interactive Engineering Matrix</h2>
          </div>
          <TechMatrix />
        </Reveal>

        {/* High-Impact Glassmorphic Projects Section */}
        <div className="section" id="projects">
          <div className="section-heading mb-8">
            <p className="eyebrow">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold font-space">Production Systems Built in Team & Solo Settings</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1: Rahi.AI */}
            <Reveal>
              <article className="group rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] hover:border-[--accent]/60 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] p-6 md:p-8 flex flex-col justify-between overflow-hidden relative h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[--accent]/10 via-transparent to-transparent blur-[70px] pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 p-2 rounded-2xl border border-[--outline] bg-[--bg-soft] shadow-md flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                        <Image src="/assets/logos/rahi-logo.svg" alt="Rahi.AI" fill className="p-1.5 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[--text] font-space group-hover:text-[--accent] transition-colors">
                          Rahi.AI (Travel Orchestrator)
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-[--accent] mt-0.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
                          </span>
                          Deployed on Vercel Edge
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[--accent]/10 text-[--accent] border border-[--accent]/30 shrink-0">
                      AI Travel Platform
                    </span>
                  </div>

                  <div className="mb-4">
                    <IconStrip
                      src="https://skillicons.dev/icons?i=nextjs,ts,react,tailwind,supabase,workers"
                      alt="Rahi.AI Stack"
                      className="h-8 w-auto opacity-95 hover:scale-105 transition-transform"
                    />
                  </div>

                  <p className="text-xs font-mono text-[--muted] mb-4">
                    Next.js 16, TypeScript, React 19, Tailwind CSS, Supabase, Groq API, Mapbox, Stripe
                  </p>

                  <ul className="space-y-2.5 text-xs text-[--muted] leading-relaxed mb-6 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[--accent] shrink-0 mt-0.5" />
                      <span>Built an AI tourist planning platform generating day-wise itineraries, route maps & budget tracking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[--accent] shrink-0 mt-0.5" />
                      <span>Implemented Supabase auth, real-time collaboration invites, public trip links & live trip workflows.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[--accent] shrink-0 mt-0.5" />
                      <span>Integrated Stripe & UPI checkout for subscription monetization with feature-gated capabilities.</span>
                    </li>
                  </ul>

                  <ProjectCardWithToggle
                    title="Rahi.AI Multi-User Architecture"
                    architectureDiagram={`
graph TD
    User[User Intent / Voice] --> Orchestrator[Rahi AI Orchestrator]
    Orchestrator --> Groq[Groq Llama-3.3 LLM Chain]
    Orchestrator --> Mapbox[Mapbox Geocoding & Route API]
    Groq --> Itinerary[Day-Wise Itinerary & Budget Engine]
    Itinerary --> Supabase[(Supabase Realtime Storage & Auth)]
    Supabase --> Stripe[Stripe & UPI Checkout Gating]
    Stripe --> UI[Interactive Multi-User Trip Dashboard]
                    `}
                    productProof={
                      <div className="proof-grid mb-6 grid grid-cols-2 gap-4">
                        <figure className="proof-shot proof-shot-desktop overflow-hidden border border-[--outline] rounded-2xl relative aspect-[16/10] group/proof shadow-md">
                          <Image
                            src="/assets/screenshots/rahi-planner-desktop.jpg"
                            alt="Rahi.AI planner desktop interface"
                            fill
                            className="object-cover transition-transform duration-700 group-hover/proof:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                              <ExternalLink size={10} /> Interactive Planner View
                            </p>
                          </div>
                        </figure>
                        <figure className="proof-shot proof-shot-mobile aspect-[4/5] group/proof rounded-2xl overflow-hidden border border-[--outline] relative shadow-md">
                          <Image
                            src="/assets/screenshots/rahi-chat-mobile.jpg"
                            alt="Rahi.AI chat interface on mobile"
                            fill
                            className="object-cover transition-transform duration-700 group-hover/proof:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                              <ExternalLink size={10} /> AI Companion View
                            </p>
                          </div>
                        </figure>
                      </div>
                    }
                  />
                </div>

                <div className="project-actions mt-6 pt-4 border-t border-[--outline] flex gap-3">
                  <a
                    href="https://rahi-ai.vercel.app"
                    className="btn btn-primary text-xs shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live App <ArrowUpRight size={14} />
                  </a>
                  <Link href="/case-studies/rahi-ai" className="btn btn-secondary text-xs">
                    View Case Study
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Project 2: Lexora AI PRO */}
            <Reveal>
              <article className="group rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] hover:border-[--accent]/60 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] p-6 md:p-8 flex flex-col justify-between overflow-hidden relative h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent blur-[70px] pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 p-2 rounded-2xl border border-[--outline] bg-[--bg-soft] shadow-md flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                        <Image src="/assets/logos/lexora-logo.svg" alt="Lexora AI" fill className="p-1.5 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[--text] font-space group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                          Lexora AI (Doc Intelligence)
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-[--accent] mt-0.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
                          </span>
                          Sub-200ms RAG Engine
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-600 dark:text-cyan-300 border border-cyan-400/30 shrink-0">
                      RAG Vector Engine
                    </span>
                  </div>

                  <div className="mb-4">
                    <IconStrip
                      src="https://skillicons.dev/icons?i=nextjs,ts,react,tailwind,vercel"
                      alt="Lexora AI Stack"
                      className="h-8 w-auto opacity-95 hover:scale-105 transition-transform"
                    />
                  </div>

                  <p className="text-xs font-mono text-[--muted] mb-4">
                    Next.js 16, TypeScript, React 19, Tailwind CSS, Groq Llama-3.3, Local Vector Ops
                  </p>

                  <ul className="space-y-2.5 text-xs text-[--muted] leading-relaxed mb-6 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[--accent] shrink-0 mt-0.5" />
                      <span>Built a document intelligence workspace featuring a Perplexity-like dual-pane cited interface.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[--accent] shrink-0 mt-0.5" />
                      <span>Engineered a zero-dependency local vector store (.lexora/) with pdf-parse text chunking & embeddings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[--accent] shrink-0 mt-0.5" />
                      <span>Implemented sub-200ms query latency pipeline connecting Groq Llama-3.3 with local vector retrieval.</span>
                    </li>
                  </ul>

                  <ProjectCardWithToggle
                    title="Lexora AI RAG Engine Architecture"
                    architectureDiagram={`
graph LR
    PDF[PDF Upload] --> Parse[pdf-parse Extraction]
    Parse --> Chunk[Semantic Text Chunking]
    Chunk --> Vector[(Local Vector Index .lexora/)]
    Query[User Natural Query] --> Search[Cosine Similarity Search]
    Vector --> Search
    Search -- "Top Context Chunks" --> LLM[Groq Llama-3.3 LLM]
    LLM --> UI[Perplexity-like Cited UI]
                    `}
                    productProof={
                      <div className="proof-grid mb-6 grid grid-cols-2 gap-4">
                        <figure className="proof-shot proof-shot-desktop overflow-hidden border border-[--outline] rounded-2xl relative aspect-[16/10] group/proof shadow-md">
                          <Image
                            src="/assets/screenshots/lexora-dashboard-desktop.png"
                            alt="Lexora AI dashboard desktop"
                            fill
                            className="object-cover transition-transform duration-700 group-hover/proof:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                              <ExternalLink size={10} /> RAG Workspace View
                            </p>
                          </div>
                        </figure>
                        <figure className="proof-shot proof-shot-mobile aspect-[4/5] group/proof rounded-2xl overflow-hidden border border-[--outline] relative shadow-md">
                          <Image
                            src="/assets/screenshots/lexora-dashboard-mobile.png"
                            alt="Lexora AI chat mobile"
                            fill
                            className="object-cover transition-transform duration-700 group-hover/proof:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                              <ExternalLink size={10} /> Dual-Pane Mobile View
                            </p>
                          </div>
                        </figure>
                      </div>
                    }
                  />
                </div>

                <div className="project-actions mt-6 pt-4 border-t border-[--outline] flex gap-3">
                  <a
                    href="https://lexora-ai-nine.vercel.app"
                    className="btn btn-primary text-xs shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live App <ArrowUpRight size={14} />
                  </a>
                  <Link href="/case-studies/lexora" className="btn btn-secondary text-xs">
                    View Case Study
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Project 3: SarthiSync TMS */}
            <Reveal>
              <article className="group rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] hover:border-[--accent]/60 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] p-6 md:p-8 flex flex-col justify-between overflow-hidden relative h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent blur-[70px] pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 p-2 rounded-2xl border border-[--outline] bg-[--bg-soft] shadow-md flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                        <Image src="/assets/logos/sarthi-logo.svg" alt="SarthiSync" fill className="p-1.5 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[--text] font-space group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                          SarthiSync (Fleet Ops TMS)
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-300 mt-0.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 dark:bg-amber-400"></span>
                          </span>
                          Operational Fleet TMS
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/10 text-amber-600 dark:text-amber-300 border border-amber-400/30 shrink-0">
                      Logistics TMS
                    </span>
                  </div>

                  <div className="mb-4">
                    <IconStrip
                      src="https://skillicons.dev/icons?i=nodejs,js,bootstrap,vercel"
                      alt="SarthiSync Stack"
                      className="h-8 w-auto opacity-95 hover:scale-105 transition-transform"
                    />
                  </div>

                  <p className="text-xs font-mono text-[--muted] mb-4">
                    Node.js API, JavaScript, Bootstrap, Leaflet Maps, Chart.js, Cookie Auth
                  </p>

                  <ul className="space-y-2.5 text-xs text-[--muted] leading-relaxed mb-6 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                      <span>Shipped operational Transportation Management System (TMS) with vehicle, driver & dispatch tracking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                      <span>Engineered audit-ready 2-stage dual-OTP delivery verification (pickup OTP &rarr; dropoff OTP) and ePOD signing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                      <span>Reduced administrative dispatch overhead by 60% with AI dispatch copilot & real-time analytics.</span>
                    </li>
                  </ul>

                  <ProjectCardWithToggle
                    title="SarthiSync Logistics Dispatch Architecture"
                    architectureDiagram={`
graph TD
    Intake[Consignment Intake & Route] --> Copilot[AI Dispatch Copilot]
    Copilot --> Assign[Driver & Vehicle Assignment]
    Assign --> Live[Live Fleet GPS Tracking]
    Live --> OTP1[Pickup Dual-OTP Check]
    OTP1 --> OTP2[Dropoff Delivery OTP]
    OTP2 --> ePOD[Audit-Ready ePOD Signature]
                    `}
                    productProof={
                      <div className="proof-grid mb-6 grid grid-cols-2 gap-4">
                        <figure className="proof-shot proof-shot-desktop overflow-hidden border border-[--outline] rounded-2xl relative aspect-[16/10] group/proof shadow-md">
                          <Image
                            src="/assets/screenshots/sarthi-dashboard-desktop.png"
                            alt="SarthiSync dashboard desktop"
                            fill
                            className="object-cover transition-transform duration-700 group-hover/proof:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                              <ExternalLink size={10} /> Fleet Ops View
                            </p>
                          </div>
                        </figure>
                        <figure className="proof-shot proof-shot-mobile aspect-[4/5] group/proof rounded-2xl overflow-hidden border border-[--outline] relative shadow-md">
                          <Image
                            src="/assets/screenshots/sarthi-dashboard-mobile.png"
                            alt="SarthiSync dashboard mobile"
                            fill
                            className="object-cover transition-transform duration-700 group-hover/proof:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                              <ExternalLink size={10} /> Driver Mobile View
                            </p>
                          </div>
                        </figure>
                      </div>
                    }
                  />
                </div>

                <div className="project-actions mt-6 pt-4 border-t border-[--outline] flex gap-3">
                  <a
                    href="https://sarthisync-live.vercel.app"
                    className="btn btn-primary text-xs shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live App <ArrowUpRight size={14} />
                  </a>
                  <Link href="/case-studies/sarthisync" className="btn btn-secondary text-xs">
                    View Case Study
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Project 4: JS Arcade (Gallery) */}
            <Reveal>
              <article className="group rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] hover:border-[--accent]/60 transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] p-6 md:p-8 flex flex-col justify-between overflow-hidden relative h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent blur-[70px] pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 p-2 rounded-2xl border border-[--outline] bg-[--bg-soft] shadow-md flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                        <Image src="/assets/logos/arcade-logo.png" alt="JS Arcade" fill className="p-1.5 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[--text] font-space group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                          JS Arcade (Gallery)
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-300 mt-0.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 dark:bg-purple-400"></span>
                          </span>
                          Framework-Free 60FPS
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-400/10 text-purple-600 dark:text-purple-300 border border-purple-400/30 shrink-0">
                      Creative Coding
                    </span>
                  </div>

                  <div className="mb-4">
                    <IconStrip
                      src="https://skillicons.dev/icons?i=js,html,css"
                      alt="JS Arcade Stack"
                      className="h-8 w-auto opacity-95 hover:scale-105 transition-transform"
                    />
                  </div>

                  <p className="text-xs font-mono text-[--muted] mb-4">
                    Pure JavaScript (ES6+), HTML5, CSS3, DOM API, Canvas API, Web Audio API
                  </p>

                  <ul className="space-y-2.5 text-xs text-[--muted] leading-relaxed mb-6 font-medium">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                      <span>Built high-performance game gallery featuring 8+ arcade games & utilities without external JS frameworks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                      <span>Engineered physics-based mechanics with RequestAnimationFrame delta-time physics for smooth 60FPS execution.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                      <span>Implemented real-time API integrations for SkySentry Weather and FinanceGo Currency Converter.</span>
                    </li>
                  </ul>

                  <ProjectCardWithToggle
                    title="JS Arcade Game Loop Architecture"
                    architectureDiagram={`
graph LR
    Input[Keyboard & Touch Events] --> Loop[60FPS RequestAnimationFrame Loop]
    Loop --> Delta[Delta-Time Physics Engine dt = t - t0]
    Delta --> Collision[Collision & Entity State Engine]
    Collision --> Canvas[HTML5 Canvas & Web Audio API]
    Canvas --> UI[Zero-Dependency Arcade Gallery]
                    `}
                    productProof={
                      <div className="proof-grid mb-6 grid grid-cols-2 gap-4">
                        <figure className="proof-shot proof-shot-desktop overflow-hidden border border-[--outline] rounded-2xl relative aspect-[16/10] group/proof shadow-md">
                          <Image
                            src="/assets/screenshots/arcade-dashboard-desktop.png"
                            alt="JS Arcade dashboard desktop"
                            fill
                            className="object-cover transition-transform duration-700 group-hover/proof:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                              <ExternalLink size={10} /> Live Arcade Gallery
                            </p>
                          </div>
                        </figure>
                        <figure className="proof-shot proof-shot-mobile aspect-[4/5] group/proof rounded-2xl overflow-hidden border border-[--outline] relative shadow-md">
                          <Image
                            src="/assets/screenshots/arcade-dashboard-mobile.png"
                            alt="JS Arcade dashboard mobile"
                            fill
                            className="object-cover transition-transform duration-700 group-hover/proof:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/proof:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                              <ExternalLink size={10} /> Mobile Optimized View
                            </p>
                          </div>
                        </figure>
                      </div>
                    }
                  />
                </div>

                <div className="project-actions mt-6 pt-4 border-t border-[--outline] flex gap-3">
                  <a
                    href="https://agam-pathak.github.io/JS-Mini-Projects/"
                    className="btn btn-primary text-xs shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live Arcade <ArrowUpRight size={14} />
                  </a>
                  <Link href="/case-studies/js-arcade" className="btn btn-secondary text-xs">
                    View Case Study
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </div>


        {/* High-Fidelity Glassmorphic Strengths Grid */}
        <Reveal className="section">
          <div className="section-heading mb-8">
            <p className="eyebrow">Strengths</p>
            <h2 className="text-3xl font-bold font-space">How I Contribute To Teams</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Strength 1 */}
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[var(--shadow)] group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-[--accent]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[--accent]/10 border border-[--accent]/30 text-[--accent] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[--accent]/10 text-[--accent] border border-[--accent]/20">
                    Team Lead
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[--text] group-hover:text-[--accent] transition-colors font-space mb-2">
                  Engineering Leadership
                </h3>
                <p className="text-xs text-[--muted] leading-relaxed mb-4">
                  Lead project teams, assign sprint tasks, enforce code reviews, and keep delivery outcomes aligned with product goals.
                </p>
              </div>
              <div className="pt-3 border-t border-[--outline] text-[11px] font-medium text-[--accent] flex items-center gap-1.5 font-mono">
                <CheckCircle2 size={12} /> Led 15+ Production Deploys
              </div>
            </article>

            {/* Strength 2 */}
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[var(--shadow)] group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code2 size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-600 dark:text-cyan-300 border border-cyan-400/20">
                    Clean Code
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[--text] group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors font-space mb-2">
                  Scalable Architecture
                </h3>
                <p className="text-xs text-[--muted] leading-relaxed mb-4">
                  Prioritize clear structure, strict TypeScript type safety, maintainable patterns, and zero-dependency efficiency.
                </p>
              </div>
              <div className="pt-3 border-t border-[--outline] text-[11px] font-medium text-cyan-600 dark:text-cyan-300 flex items-center gap-1.5 font-mono">
                <CheckCircle2 size={12} /> High-Maintainability Code
              </div>
            </article>

            {/* Strength 3 */}
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[var(--shadow)] group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/30 text-purple-600 dark:text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-400/10 text-purple-600 dark:text-purple-300 border border-purple-400/20">
                    DSA & OOP
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[--text] group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors font-space mb-2">
                  Algorithmic Solving
                </h3>
                <p className="text-xs text-[--muted] leading-relaxed mb-4">
                  Utilize strong Data Structures & Algorithm principles to break down product bottlenecks and optimize RAG latency.
                </p>
              </div>
              <div className="pt-3 border-t border-[--outline] text-[11px] font-medium text-purple-600 dark:text-purple-300 flex items-center gap-1.5 font-mono">
                <CheckCircle2 size={12} /> Sub-200ms Latency Ops
              </div>
            </article>

            {/* Strength 4 */}
            <article className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[var(--shadow)] group relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Share2 size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-600 dark:text-amber-300 border border-amber-400/20">
                    Full-Stack
                  </span>
                </div>
                <h3 className="font-bold text-lg text-[--text] group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors font-space mb-2">
                  Cross-Functional Delivery
                </h3>
                <p className="text-xs text-[--muted] leading-relaxed mb-4">
                  Bridge frontend UX, backend APIs, vector databases, and logistics workflows into unified production solutions.
                </p>
              </div>
              <div className="pt-3 border-t border-[--outline] text-[11px] font-medium text-amber-600 dark:text-amber-300 flex items-center gap-1.5 font-mono">
                <CheckCircle2 size={12} /> Unified Product Workflows
              </div>
            </article>
          </div>
        </Reveal>

        {/* High-Fidelity Glassmorphic Contact Section */}
        <Reveal className="section contact" id="contact">
          <div className="section-heading mb-8">
            <p className="eyebrow">Contact</p>
            <h2 className="text-3xl font-bold font-space">Let&apos;s Build Something Meaningful</h2>
          </div>
          <div className="contact-layout grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Quick Contact Cards */}
            <div className="contact-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:agamworkspace@gmail.com"
                className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent] transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] group flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[--accent]/10 border border-[--accent]/30 text-[--accent] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-[--text] group-hover:text-[--accent] transition-colors font-space">
                      Email
                    </h3>
                    <ArrowUpRight size={14} className="text-[--muted] group-hover:text-[--accent] transition-colors" />
                  </div>
                  <p className="text-xs text-[--muted] mt-1 break-all">agamworkspace@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917307086547"
                className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent] transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] group flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[--accent]/10 border border-[--accent]/30 text-[--accent] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-[--text] group-hover:text-[--accent] transition-colors font-space">
                      Phone / WhatsApp
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-xs text-[--muted] mt-1">+91 7307086547</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/agam-pathak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent] transition-all duration-300 hover:-translate-y-1 shadow-[var(--shadow)] group flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[--accent]/10 border border-[--accent]/30 text-[--accent] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-[--text] group-hover:text-[--accent] transition-colors font-space">
                      LinkedIn
                    </h3>
                    <ArrowUpRight size={14} className="text-[--muted] group-hover:text-[--accent] transition-colors" />
                  </div>
                  <p className="text-xs text-[--muted] mt-1 break-all">linkedin.com/in/agam-pathak</p>
                </div>
              </a>

              <div className="p-6 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] shadow-[var(--shadow)] flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[--accent]/10 border border-[--accent]/30 text-[--accent] flex items-center justify-center mb-4">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[--text] font-space">Location</h3>
                  <p className="text-xs text-[--muted] mt-1">Noida, UP, India • IST (UTC+5:30)</p>
                </div>
              </div>
            </div>

            {/* Interactive Form submit */}
            <ContactForm />
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
