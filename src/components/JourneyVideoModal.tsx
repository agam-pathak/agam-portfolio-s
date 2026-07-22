"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  X,
  Sparkles,
  Film,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Cpu,
  Truck,
  Brain,
  Globe,
  Award,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SceneStep {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  category: string;
  icon: any;
  color: string;
  metrics: { label: string; value: string }[];
  codeSnippet: string;
  description: string;
  proofImage?: string;
}

const REEL_SCENES: SceneStep[] = [
  {
    id: 1,
    year: "LATE 2023",
    title: "Engineering Foundation & Core CS",
    subtitle: "SCRIET, Chaudhary Charan Singh University, Meerut",
    category: "FOUNDATION",
    icon: Cpu,
    color: "from-amber-500 to-orange-500",
    metrics: [
      { label: "Degree", value: "B.Tech CSE" },
      { label: "Core CS", value: "C++ & Java" },
      { label: "Focus", value: "DSA & OOP" },
    ],
    codeSnippet: `class AlgorithmEngine {
  public static void main(String[] args) {
    System.out.println("Building Core CS Foundations @ SCRIET");
    // Data Structures, Memory Management, & Graph Algorithms
  }
}`,
    description: "Started B.Tech CS Engineering at SCRIET (CCS University). Mastered fundamental algorithms, data structures, and computer architecture.",
    proofImage: "/assets/screenshots/arcade-dashboard-desktop.png",
  },
  {
    id: 2,
    year: "EARLY 2024",
    title: "SarthiSync — Fleet Logistics Operations",
    subtitle: "Logistics Transportation Management System (TMS)",
    category: "LOGISTICS OPS",
    icon: Truck,
    color: "from-orange-400 to-amber-500",
    metrics: [
      { label: "Overhead", value: "-60% Admin" },
      { label: "Verification", value: "Dual OTP" },
      { label: "Audit Compliance", value: "100% ePOD" },
    ],
    codeSnippet: `// Dispatch Copilot & OTP Validation Logic
async function verifyDeliveryOTP(consignmentId, pickupOtp, dropoffOtp) {
  const verified = await SarthiOps.validateDualOTP(pickupOtp, dropoffOtp);
  if (verified) return generateAuditReadyEPOD(consignmentId);
}`,
    description: "Shipped an operational fleet TMS with AI dispatch copilot, live map tracking, and dual-OTP ePOD delivery verification.",
    proofImage: "/assets/screenshots/sarthi-dashboard-desktop.png",
  },
  {
    id: 3,
    year: "MID 2024",
    title: "Lexora AI PRO — Local Document RAG Engine",
    subtitle: "Perplexity-grade Document Intelligence Workspace",
    category: "AI & RAG OPS",
    icon: Brain,
    color: "from-purple-500 to-cyan-400",
    metrics: [
      { label: "Query Latency", value: "<200ms" },
      { label: "Vector Storage", value: "Local .lexora/" },
      { label: "LLM Model", value: "Llama-3.3-70B" },
    ],
    codeSnippet: `// Zero-Dependency Local Vector Search Pipeline
const vectorIndex = new LocalVectorStore('.lexora/embeddings.bin');
const topChunks = await vectorIndex.searchSimilarity(userEmbedding, { topK: 5 });
const response = await groq.chat.completions.create({ model: 'llama-3.3-70b-versatile', context: topChunks });`,
    description: "Architected a zero-dependency local vector store for PDF intelligence, delivering cited RAG answers with sub-200ms query latency.",
    proofImage: "/assets/screenshots/lexora-dashboard-desktop.png",
  },
  {
    id: 4,
    year: "LATE 2024",
    title: "Rahi.AI — AI Travel Orchestrator",
    subtitle: "Multi-User Itinerary Generator & Booking Platform",
    category: "AI WEB PLATFORM",
    icon: Globe,
    color: "from-cyan-400 to-emerald-400",
    metrics: [
      { label: "Itineraries", value: "100% Automated" },
      { label: "State Sync", value: "Supabase Realtime" },
      { label: "Monetization", value: "Stripe & UPI" },
    ],
    codeSnippet: `// Day-wise Itinerary Orchestration & Stripe Monetization
const tripPlan = await RahiEngine.generateItinerary({ destination, budget, duration });
const session = await stripe.checkout.sessions.create({ line_items: [{ price: tripPlan.id }] });`,
    description: "Engineered an AI travel platform featuring automated day-wise itinerary generation, real-time collaboration, and subscription gating.",
    proofImage: "/assets/screenshots/rahi-planner-desktop.jpg",
  },
  {
    id: 5,
    year: "TODAY & BEYOND",
    title: "Production Leadership & System Availability",
    subtitle: "Full-Stack Software Architect & Team Lead",
    category: "IMPACT & METRICS",
    icon: Award,
    color: "from-[--accent] via-teal-300 to-cyan-400",
    metrics: [
      { label: "Deployments", value: "15+ Production" },
      { label: "Uptime", value: "98% High Availability" },
      { label: "Architecture", value: "Local-First AI" },
    ],
    codeSnippet: `// System Status: All Production Clusters Operational
const status = {
  availability: "98.4%",
  shippedProjects: 15,
  mission: "Building scalable, user-centric software ecosystems"
};`,
    description: "Leading development teams across edge & serverless deployments, maintaining high-availability architectures and shipping real product outcomes.",
    proofImage: "/assets/screenshots/lexora-dashboard-desktop.png",
  },
];

export function JourneyVideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const sceneDurationMs = 5000;

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const intervalStepMs = 100;
    const progressIncrement = (intervalStepMs / sceneDurationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSceneIndex((prevIndex) => (prevIndex + 1) % REEL_SCENES.length);
          return 0;
        }
        return prev + progressIncrement;
      });
    }, intervalStepMs);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, currentSceneIndex]);

  const handleOpen = () => {
    setIsOpen(true);
    setCurrentSceneIndex(0);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleSelectScene = (index: number) => {
    setCurrentSceneIndex(index);
    setProgress(0);
  };

  const activeScene = REEL_SCENES[currentSceneIndex];

  return (
    <div className="w-full mb-12">
      {/* Video Reel Interactive Card Banner */}
      <div
        onClick={handleOpen}
        className="group relative w-full rounded-3xl overflow-hidden border border-[--outline] bg-[--surface] backdrop-blur-2xl cursor-pointer shadow-[var(--shadow)] hover:border-[--accent]/60 transition-all duration-500 hover:-translate-y-1 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        {/* Background Poster Image */}
        <Image
          src="/assets/screenshots/lexora-dashboard-desktop.png"
          alt="Engineering Journey Showreel Banner"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-15 dark:opacity-30"
        />

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[--surface] via-[--surface]/95 to-transparent pointer-events-none" />

        {/* Banner Content & Play Trigger */}
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-[--accent] text-xs font-mono font-bold mb-3 shadow-sm">
            <Film size={13} />
            <span>INTERACTIVE 5-STAGE ENGINEERING REEL</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[--text] font-space group-hover:text-[--accent] transition-colors">
            Play Engineering & Leadership Showreel
          </h3>
          <p className="text-xs md:text-sm text-[--muted] mt-2 leading-relaxed font-medium">
            Interactive motion showcase detailing B.Tech CSE milestones, SarthiSync TMS, Lexora RAG vector engine, and 15+ production deployments.
          </p>
        </div>

        {/* Glowing Play Button */}
        <div className="relative z-10 flex items-center gap-4 shrink-0 self-end md:self-center">
          <span className="text-xs font-mono font-bold text-[--muted] px-3 py-1.5 rounded-xl bg-[--bg-soft] border border-[--outline]">
            0:45 Reel
          </span>
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-[--accent] opacity-30"></span>
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[--accent] to-cyan-400 text-[#03111f] flex items-center justify-center shadow-[0_0_30px_rgba(102,246,202,0.5)] group-hover:scale-110 transition-transform duration-300">
              <Play size={24} className="fill-current ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Interactive Animated Showreel Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/70 dark:bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[--surface] border border-[--outline] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-4 md:p-5 border-b border-[--outline] flex justify-between items-center bg-[--bg-soft]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[--accent]/10 text-[--accent] border border-[--accent]/20">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-[--text] font-space">
                      Agam Pathak — Engineering Journey & Impact Reel
                    </h3>
                    <p className="text-[11px] text-[--muted] font-mono">
                      Stage {currentSceneIndex + 1} of {REEL_SCENES.length}: {activeScene.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[--surface-strong] border border-[--outline] text-[--text] hover:text-[--accent] text-xs font-bold transition-all"
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isPlaying ? "Pause" : "Play"}</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-[--surface-strong] border border-[--outline] text-[--muted] hover:text-[--text] transition-all"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Progress Bar Indicators across Top */}
              <div className="grid grid-cols-5 gap-1.5 px-4 pt-3 bg-[--bg-soft]">
                {REEL_SCENES.map((scene, idx) => (
                  <div
                    key={scene.id}
                    onClick={() => handleSelectScene(idx)}
                    className="h-1.5 rounded-full bg-[--outline] overflow-hidden cursor-pointer relative group"
                  >
                    <div
                      className={`h-full transition-all duration-100 bg-gradient-to-r ${scene.color}`}
                      style={{
                        width:
                          idx === currentSceneIndex
                            ? `${progress}%`
                            : idx < currentSceneIndex
                            ? "100%"
                            : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Main Animated Scene Showcase Display */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Column: Scene Information & Metrics */}
                <motion.div
                  key={`info-${activeScene.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="lg:col-span-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold font-mono tracking-widest text-[--accent] px-2.5 py-1 rounded-md bg-[--accent]/10 border border-[--accent]/20">
                        {activeScene.year}
                      </span>
                      <span className="text-xs font-mono text-[--muted] uppercase tracking-wider">
                        {activeScene.category}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-[--text] font-space mb-2">
                      {activeScene.title}
                    </h2>
                    <p className="text-xs font-medium text-[--accent] mb-4">
                      {activeScene.subtitle}
                    </p>
                    <p className="text-xs md:text-sm text-[--muted] leading-relaxed mb-6">
                      {activeScene.description}
                    </p>

                    {/* Key Metric Chips */}
                    <div className="grid grid-cols-3 gap-2.5 mb-6">
                      {activeScene.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-2xl bg-[--bg-soft] border border-[--outline] text-center"
                        >
                          <p className="text-xs md:text-sm font-bold text-[--text] font-space">
                            {metric.value}
                          </p>
                          <p className="text-[10px] text-[--muted] mt-0.5">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Right Column: Code & Architecture Terminal */}
                <motion.div
                  key={`code-${activeScene.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="lg:col-span-6 rounded-2xl bg-[#081323] border border-cyan-500/20 p-4 font-mono text-xs shadow-2xl relative overflow-hidden"
                >
                  {/* Terminal Header */}
                  <div className="flex justify-between items-center pb-3 mb-3 border-b border-white/10 text-white/50 text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="ml-2 font-bold text-white/70 flex items-center gap-1.5">
                        <Terminal size={12} className="text-[--accent]" /> architecture-pipeline.ts
                      </span>
                    </div>
                    <span className="text-[10px] text-[--accent]">STAGE {currentSceneIndex + 1}/5</span>
                  </div>

                  {/* Code View */}
                  <pre className="text-cyan-300 leading-relaxed overflow-x-auto p-2 bg-black/40 rounded-xl border border-white/5 text-[11px]">
                    <code>{activeScene.codeSnippet}</code>
                  </pre>

                  {/* Live Status Tag */}
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 size={12} /> Execution Verified
                    </span>
                    <span className="text-white/40 font-mono">SCRIET • Production Engine</span>
                  </div>
                </motion.div>
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 border-t border-[--outline] bg-[--bg-soft] flex justify-between items-center text-xs text-[--muted]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleSelectScene(
                        (currentSceneIndex - 1 + REEL_SCENES.length) % REEL_SCENES.length
                      )
                    }
                    className="p-2 rounded-xl bg-[--surface-strong] border border-[--outline] text-[--text] hover:bg-[--accent]/10 transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() =>
                      handleSelectScene((currentSceneIndex + 1) % REEL_SCENES.length)
                    }
                    className="p-2 rounded-xl bg-[--surface-strong] border border-[--outline] text-[--text] hover:bg-[--accent]/10 transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleSelectScene(0)}
                    className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-[--surface-strong] border border-[--outline] text-[--text] hover:text-[--accent] transition-all"
                  >
                    <RotateCcw size={11} /> Replay
                  </button>
                  <span className="text-[11px] text-[--accent] font-mono">
                    Press ESC to exit
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
