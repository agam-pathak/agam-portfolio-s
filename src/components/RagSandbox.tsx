"use client";

import { useState, useEffect } from "react";
import { Terminal, Play, CheckCircle2, Cpu, Database, Zap, Sparkles, Layers, FileText, ArrowRight, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PromptItem {
  prompt: string;
  category: string;
  result: string;
  telemetry: {
    latency: string;
    similarity: string;
    chunks: string;
    tokensPerSec: string;
  };
  stages: string[];
}

const PROMPTS_DATA: PromptItem[] = [
  {
    prompt: "Summarize Lexora AI RAG architecture & local vector specs",
    category: "AI & RAG OPS",
    result:
      "Lexora AI PRO utilizes a zero-dependency local vector store (.lexora/) backed by pdf-parse text extraction, 1536-dimensional embeddings, and sub-200ms Groq Llama-3.3 LLM inference for confidential document RAG queries.",
    telemetry: {
      latency: "142ms",
      similarity: "0.964",
      chunks: "42 vectors",
      tokensPerSec: "840 t/s",
    },
    stages: [
      "📄 Parsing PDF document into semantic text chunks...",
      "🔢 Generating 1536-dimensional HNSW vector embeddings...",
      "🔍 Querying local .lexora/ vector index (Cosine similarity: 0.964)...",
      "🤖 Synthesizing response via Groq Llama 3.3 70B pipeline...",
    ],
  },
  {
    prompt: "How does SarthiSync handle ePOD dual-OTP delivery checks?",
    category: "LOGISTICS TMS",
    result:
      "SarthiSync TMS enforces audit-ready compliance via a 2-stage dual-OTP flow: Pickup OTP generated on driver arrival -> Dropoff OTP sent to receiver on delivery -> Electronic Proof of Delivery (ePOD) digital signature stored in Supabase.",
    telemetry: {
      latency: "168ms",
      similarity: "0.948",
      chunks: "28 vectors",
      tokensPerSec: "780 t/s",
    },
    stages: [
      "🚚 Accessing SarthiSync logistics compliance knowledge base...",
      "🔐 Verifying dual-OTP verification state machine protocols...",
      "⚡ Extracting ePOD digital signature audit log parameters...",
      "🤖 Synthesizing operational compliance response...",
    ],
  },
  {
    prompt: "Explain JS Arcade 60FPS delta-timing game engine loop",
    category: "CREATIVE CODING",
    result:
      "JS Arcade 2.0 uses a framework-free RequestAnimationFrame loop with precise delta-timing calculations (dt = timestamp - lastTime) to guarantee stutter-free 60FPS physics and collision detection across 60Hz, 120Hz, and 144Hz displays.",
    telemetry: {
      latency: "115ms",
      similarity: "0.975",
      chunks: "18 vectors",
      tokensPerSec: "920 t/s",
    },
    stages: [
      "🎮 Loading JS Arcade engine physics loop specifications...",
      "⏱ Analyzing delta-time frame calculation algorithm...",
      "💥 Verifying collision detection & Canvas API rendering pipeline...",
      "🤖 Synthesizing engine execution breakdown...",
    ],
  },
  {
    prompt: "How does Rahi.AI orchestrate multi-day travel itineraries?",
    category: "TRAVEL AI",
    result:
      "Rahi.AI integrates Groq Llama-3.3 LLM agent chains with Google Maps API to generate day-wise optimized travel itineraries based on budget, duration, and user preferences, complete with real-time Supabase state sync.",
    telemetry: {
      latency: "185ms",
      similarity: "0.952",
      chunks: "36 vectors",
      tokensPerSec: "790 t/s",
    },
    stages: [
      "✈️ Parsing destination, budget & duration user intent...",
      "🗺 Querying geolocation nodes & activity database...",
      "🔗 Running multi-day schedule optimization chain...",
      "🤖 Synthesizing structured itinerary payload...",
    ],
  },
];

export function RagSandbox() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);

  const activeData = PROMPTS_DATA[activeIdx];

  const handleRun = (idx: number) => {
    setActiveIdx(idx);
    setIsRunning(true);
    setCurrentStageIdx(0);
    setLogs([]);
    setShowResult(false);

    const targetData = PROMPTS_DATA[idx];

    targetData.stages.forEach((stage, i) => {
      setTimeout(() => {
        setCurrentStageIdx(i);
        setLogs((prev) => [...prev, stage]);
      }, (i + 1) * 320);
    });

    setTimeout(() => {
      setIsRunning(false);
      setShowResult(true);
    }, targetData.stages.length * 320 + 200);
  };

  // Run first prompt automatically on initial render if idle
  useEffect(() => {
    handleRun(0);
  }, []);

  return (
    <div className="w-full rounded-3xl bg-[--surface] backdrop-blur-2xl border border-[--outline] p-6 md:p-8 shadow-[var(--shadow)] relative overflow-hidden">
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[--accent]/10 via-cyan-400/5 to-purple-500/10 blur-[90px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[--outline] gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[--accent]/10 border border-[--accent]/30 text-[--accent] flex items-center justify-center shadow-md">
            <Terminal size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base md:text-lg text-[--text] font-space">
                RAG Architecture Simulator
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-[10px] font-mono text-[--accent] font-bold">
                v2.4 Vector Engine
              </span>
            </div>
            <p className="text-xs text-[--muted] mt-0.5">
              Interactive local vector retrieval & Groq Llama-3.3 LLM synthesis pipeline
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-center">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[--accent] bg-[--accent]/10 border border-[--accent]/20 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
            </span>
            <span>Sub-200ms Vector Engine</span>
          </div>
        </div>
      </div>

      {/* Interactive Prompt Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {PROMPTS_DATA.map((item, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => handleRun(idx)}
              disabled={isRunning && activeIdx === idx}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                isActive
                  ? "bg-[--surface-strong] border-[--accent] text-[--text] shadow-md ring-1 ring-[--accent]/30"
                  : "bg-[--bg-soft] border-[--outline] text-[--muted] hover:text-[--text] hover:border-[--outline]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-md uppercase ${
                    isActive
                      ? "bg-[--accent]/20 text-[--accent]"
                      : "bg-[--outline] text-[--muted]"
                  }`}
                >
                  {item.category}
                </span>
                <Play
                  size={12}
                  className={`transition-transform duration-300 ${
                    isActive ? "text-[--accent] scale-125" : "opacity-40 group-hover:opacity-100"
                  }`}
                />
              </div>
              <p className="text-xs font-semibold leading-snug line-clamp-2">
                {item.prompt}
              </p>
            </button>
          );
        })}
      </div>

      {/* Visual Pipeline Stepper Diagram */}
      <div className="mb-6 p-4 rounded-2xl bg-[--bg-soft] border border-[--outline]">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-[--muted] mb-3">
          <span className="flex items-center gap-1.5 text-[--accent]">
            <Zap size={12} /> Execution Pipeline Flow
          </span>
          <span>
            {isRunning ? (
              <span className="text-[--accent] animate-pulse">Processing Stage {currentStageIdx + 1}/4...</span>
            ) : (
              <span className="text-emerald-500 font-bold">✓ Pipeline Execution Complete</span>
            )}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {[
            { step: "01", title: "Chunk & Tokenize", icon: FileText },
            { step: "02", title: "Vector Embeddings", icon: Layers },
            { step: "03", title: "Similarity Search", icon: Database },
            { step: "04", title: "Groq LLM Stream", icon: Cpu },
          ].map((s, i) => {
            const isCompleted = i <= currentStageIdx || showResult;
            const isCurrent = i === currentStageIdx && isRunning;
            const Icon = s.icon;

            return (
              <div
                key={i}
                className={`p-3 rounded-xl border transition-all flex items-center gap-2.5 ${
                  isCurrent
                    ? "bg-[--accent]/15 border-[--accent] text-[--accent] shadow-md ring-1 ring-[--accent]"
                    : isCompleted
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    : "bg-[--surface] border-[--outline] text-[--muted] opacity-60"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                    isCompleted
                      ? "bg-emerald-500/20 text-emerald-500"
                      : "bg-[--outline] text-[--muted]"
                  }`}
                >
                  <Icon size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-mono uppercase opacity-70">Stage {s.step}</p>
                  <p className="text-xs font-bold truncate">{s.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Execution Terminal & Telemetry Box */}
      <div className="rounded-2xl bg-[#030914] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
        {/* Terminal Header */}
        <div className="px-4 py-2.5 bg-[#081224] border-b border-slate-800 flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-[11px] font-mono text-slate-400">
              lexora-rag-vector-engine.sh
            </span>
          </div>

          <button
            onClick={() => handleRun(activeIdx)}
            disabled={isRunning}
            className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 hover:text-white transition-colors"
          >
            <RefreshCw size={11} className={isRunning ? "animate-spin text-cyan-400" : ""} />
            Re-run Query
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-5 min-h-[160px] text-slate-300 space-y-2.5">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-cyan-300"
            >
              <span className="text-cyan-500 font-bold">&gt;</span>
              <span>{log}</span>
            </motion.div>
          ))}

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-slate-800 font-sans text-sm"
            >
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
                <CheckCircle2 size={20} className="text-[--accent] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[--accent] font-bold">
                    RAG Synthesized Output (Groq Llama-3.3 70B)
                  </span>
                  <p className="text-slate-100 leading-relaxed font-medium">
                    {activeData.result}
                  </p>
                </div>
              </div>

              {/* Telemetry Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-center font-mono">
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="text-[9px] text-slate-400 uppercase">Query Latency</p>
                  <p className="text-xs font-bold text-[--accent]">{activeData.telemetry.latency}</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="text-[9px] text-slate-400 uppercase">Cosine Similarity</p>
                  <p className="text-xs font-bold text-cyan-300">{activeData.telemetry.similarity}</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="text-[9px] text-slate-400 uppercase">Vector Chunks</p>
                  <p className="text-xs font-bold text-purple-300">{activeData.telemetry.chunks}</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <p className="text-[9px] text-slate-400 uppercase">Inference Speed</p>
                  <p className="text-xs font-bold text-emerald-400">{activeData.telemetry.tokensPerSec}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
