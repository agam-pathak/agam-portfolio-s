"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2, Layers, Cpu, Database, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "ai" | "web" | "infra";

interface SkillItem {
  name: string;
  category: "ai" | "web" | "infra";
  level: "Architect" | "Expert" | "Advanced" | "Core" | "Core CS";
  highlight: string;
  iconSlug: string;
  progressPercent: number;
}

const SKILLS_DATA: SkillItem[] = [
  {
    name: "TypeScript",
    category: "web",
    level: "Core",
    highlight: "Primary language across all production AI & web systems",
    iconSlug: "ts",
    progressPercent: 95,
  },
  {
    name: "Next.js 16",
    category: "web",
    level: "Expert",
    highlight: "App Router, SSR, Turbopack & Server Actions",
    iconSlug: "nextjs",
    progressPercent: 92,
  },
  {
    name: "React 19",
    category: "web",
    level: "Expert",
    highlight: "Client boundary optimization, dynamic UI & Framer Motion",
    iconSlug: "react",
    progressPercent: 94,
  },
  {
    name: "Node.js",
    category: "web",
    level: "Advanced",
    highlight: "REST APIs, session auth, stream parsing & async execution",
    iconSlug: "nodejs",
    progressPercent: 90,
  },
  {
    name: "Groq AI API",
    category: "ai",
    level: "Architect",
    highlight: "Sub-second Llama 3.3 LLM inference & streaming pipelines",
    iconSlug: "py",
    progressPercent: 95,
  },
  {
    name: "RAG & Vector Storage",
    category: "ai",
    level: "Architect",
    highlight: "Zero-dependency local vector store (.lexora/) & embeddings",
    iconSlug: "vscode",
    progressPercent: 96,
  },
  {
    name: "Supabase",
    category: "infra",
    level: "Advanced",
    highlight: "PostgreSQL, Auth & Real-time web sockets synchronization",
    iconSlug: "supabase",
    progressPercent: 88,
  },
  {
    name: "Prisma ORM",
    category: "infra",
    level: "Advanced",
    highlight: "Type-safe database migrations & relational data modeling",
    iconSlug: "prisma",
    progressPercent: 86,
  },
  {
    name: "Docker & Vercel Edge",
    category: "infra",
    level: "Advanced",
    highlight: "Edge serverless deployment, containerization & CI/CD",
    iconSlug: "docker",
    progressPercent: 85,
  },
  {
    name: "Tailwind CSS & Motion",
    category: "web",
    level: "Advanced",
    highlight: "Responsive dark-mode design & hardware-accelerated motion",
    iconSlug: "tailwind",
    progressPercent: 94,
  },
  {
    name: "C++ & Java",
    category: "web",
    level: "Core CS",
    highlight: "Algorithmic problem solving, Data Structures & OOP",
    iconSlug: "cpp",
    progressPercent: 88,
  },
  {
    name: "PostgreSQL / SQL",
    category: "infra",
    level: "Advanced",
    highlight: "Complex query optimization, indexing & relational schemas",
    iconSlug: "postgres",
    progressPercent: 89,
  },
];

const LEVEL_STYLES: Record<SkillItem["level"], { bg: string; text: string; border: string; glow: string }> = {
  Architect: {
    bg: "bg-purple-500/15",
    text: "text-purple-700 dark:text-purple-300 font-bold",
    border: "border-purple-500/30",
    glow: "shadow-sm dark:shadow-[0_0_12px_rgba(168,85,247,0.3)]",
  },
  Expert: {
    bg: "bg-emerald-500/15",
    text: "text-emerald-700 dark:text-emerald-300 font-bold",
    border: "border-emerald-500/30",
    glow: "shadow-sm dark:shadow-[0_0_12px_rgba(16,185,129,0.3)]",
  },
  Advanced: {
    bg: "bg-blue-500/15",
    text: "text-blue-700 dark:text-blue-300 font-bold",
    border: "border-blue-500/30",
    glow: "shadow-sm dark:shadow-[0_0_12px_rgba(59,130,246,0.3)]",
  },
  Core: {
    bg: "bg-amber-500/15",
    text: "text-amber-700 dark:text-amber-300 font-bold",
    border: "border-amber-500/30",
    glow: "shadow-sm dark:shadow-[0_0_12px_rgba(245,158,11,0.3)]",
  },
  "Core CS": {
    bg: "bg-cyan-500/15",
    text: "text-cyan-700 dark:text-cyan-300 font-bold",
    border: "border-cyan-500/30",
    glow: "shadow-sm dark:shadow-[0_0_12px_rgba(6,182,212,0.3)]",
  },
};

export function TechMatrix() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  const getCategoryCount = (cat: Category) => {
    if (cat === "all") return SKILLS_DATA.length;
    return SKILLS_DATA.filter((s) => s.category === cat).length;
  };

  return (
    <div className="w-full">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {[
          { id: "all", label: "All Stack", icon: Layers },
          { id: "ai", label: "AI & RAG Ops", icon: Cpu },
          { id: "web", label: "Full-Stack Web", icon: Code2 },
          { id: "infra", label: "Data & Cloud Infra", icon: Database },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const count = getCategoryCount(tab.id as Category);
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Category)}
              className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                isActive
                  ? "bg-[--surface-strong] border border-[--accent] text-[--accent] shadow-md scale-105"
                  : "bg-[--surface] border border-[--outline] text-[--muted] hover:text-[--text] hover:bg-[--bg-soft]"
              }`}
            >
              <Icon size={15} className={isActive ? "text-[--accent]" : "opacity-70"} />
              <span>{tab.label}</span>
              <span
                className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive
                    ? "bg-[--accent]/20 text-[--accent]"
                    : "bg-[--outline] text-[--muted]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Interactive Skill Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const levelStyle = LEVEL_STYLES[skill.level];
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                key={skill.name}
                className="group relative p-5 rounded-2xl bg-[--surface] backdrop-blur-xl border border-[--outline] hover:border-[--accent]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[var(--shadow)] overflow-hidden flex flex-col justify-between"
              >
                {/* Background Accent Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[--accent]/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Icon, Name & Level Badge */}
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 p-1.5 rounded-xl border border-[--outline] bg-[--bg-soft] backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={`https://skillicons.dev/icons?i=${skill.iconSlug}`}
                          alt={skill.name}
                          width={24}
                          height={24}
                          unoptimized
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="font-bold text-base text-[--text] group-hover:text-[--accent] transition-colors font-space">
                        {skill.name}
                      </h4>
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-sm ${levelStyle.bg} ${levelStyle.text} ${levelStyle.border} ${levelStyle.glow}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Highlight text */}
                  <p className="text-xs text-[--muted] leading-relaxed mb-4 group-hover:text-[--text] transition-colors">
                    {skill.highlight}
                  </p>
                </div>

                {/* Progress & Visual Capability Bar */}
                <div className="mt-auto pt-3 border-t border-[--outline] flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[--muted]">
                    <span className="flex items-center gap-1">
                      <Zap size={10} className="text-[--accent]" /> Production Proficiency
                    </span>
                    <span className="text-[--accent] font-bold">{skill.progressPercent}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[--outline] overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progressPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[--accent] to-cyan-400"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
