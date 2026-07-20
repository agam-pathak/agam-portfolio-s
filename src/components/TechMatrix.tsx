"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2, Layers, Cpu, Database, Sparkles, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "ai" | "web" | "infra";

interface SkillItem {
  name: string;
  category: "ai" | "web" | "infra";
  level: string;
  highlight: string;
  icon: string;
}

const SKILLS_DATA: SkillItem[] = [
  { name: "TypeScript", category: "web", level: "Core", highlight: "Primary language across all production systems", icon: "ts" },
  { name: "Next.js 16", category: "web", level: "Expert", highlight: "App Router, SSR, Turbopack & Server Actions", icon: "nextjs" },
  { name: "React 19", category: "web", level: "Expert", highlight: "Client boundary optimization & dynamic UI", icon: "react" },
  { name: "Node.js", category: "web", level: "Advanced", highlight: "REST APIs, session auth & async execution", icon: "nodejs" },
  { name: "Groq AI API", category: "ai", level: "Architect", highlight: "Sub-second Llama 3.3 LLM inference integration", icon: "py" },
  { name: "RAG & Vector Retrieval", category: "ai", level: "Architect", highlight: "Zero-dependency local vector store (.lexora/)", icon: "cpp" },
  { name: "Supabase", category: "infra", level: "Advanced", highlight: "PostgreSQL, Auth & Real-time web sockets", icon: "supabase" },
  { name: "Prisma ORM", category: "infra", level: "Advanced", highlight: "Type-safe database migrations & relational schema", icon: "prisma" },
  { name: "Docker & Vercel Edge", category: "infra", level: "Advanced", highlight: "Edge serverless deployment & containerization", icon: "docker" },
  { name: "Tailwind & GSAP", category: "web", level: "Advanced", highlight: "Responsive design & hardware-accelerated motion", icon: "tailwind" },
  { name: "C++ & Java", category: "web", level: "Core CS", highlight: "Algorithmic problem solving (DSA & OOP)", icon: "cpp" },
  { name: "PostgreSQL / SQL", category: "infra", level: "Advanced", highlight: "Complex queries & database indexing", icon: "postgres" },
];

export function TechMatrix() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  return (
    <div className="w-full">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: "all", label: "All Technologies", icon: Layers },
          { id: "ai", label: "AI & RAG Ops", icon: Cpu },
          { id: "web", label: "Full-Stack Web", icon: Code2 },
          { id: "infra", label: "Data & Infrastructure", icon: Database },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Category)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? "bg-[--surface-strong] border border-[--accent] text-[--accent] shadow-[0_0_15px_rgba(102,246,202,0.25)] scale-105"
                  : "bg-white/5 border border-white/10 text-[--muted] hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={14} className={isActive ? "text-[--accent]" : ""} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Interactive Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={skill.name}
              className="p-4 rounded-2xl bg-[--surface] border border-[--outline] hover:border-[--accent]/50 transition-all hover:-translate-y-1 shadow-lg group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-base text-white group-hover:text-[--accent] transition-colors">{skill.name}</h4>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[--accent]/10 text-[--accent] border border-[--accent]/20">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-[--muted] leading-relaxed">{skill.highlight}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
