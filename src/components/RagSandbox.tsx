"use client";

import { useState } from "react";
import { Terminal, Play, CheckCircle2, Cpu, Database, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MOCK_PROMPTS = [
  "Summarize Lexora AI RAG architecture specs",
  "How does SarthiSync handle ePOD OTP checks?",
  "Explain JS Arcade 60FPS delta-timing loop",
];

export function RagSandbox() {
  const [activePromptIdx, setActivePromptIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleRun = (idx: number) => {
    setActivePromptIdx(idx);
    setIsRunning(true);
    setLogs([]);
    setResult(null);

    const steps = [
      "⚡ Extracting semantic tokens & parsing document chunks...",
      "🔍 Querying localized vector index (sub-200ms target)...",
      "🤖 Groq Llama-3.3 LLM synthesis & citation mapping...",
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
      }, (i + 1) * 350);
    });

    setTimeout(() => {
      setIsRunning(false);
      if (idx === 0) {
        setResult(
          "Lexora AI utilizes a zero-dependency local vector store (.lexora/) backed by pdf-parse text extraction and Groq Llama-3.1 inference with sub-200ms query latency."
        );
      } else if (idx === 1) {
        setResult(
          "SarthiSync enforces audit-ready compliance via a 2-stage dual-OTP flow (pickup OTP -> dropoff OTP) and electronic Proof of Delivery (ePOD) signing."
        );
      } else {
        setResult(
          "JS Arcade 2.0 uses a pure RequestAnimationFrame game loop with delta-timing calculation to guarantee stutter-free 60FPS physics across display refresh rates."
        );
      }
    }, 1500);
  };

  return (
    <div className="w-full bg-[#081224]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[--accent]/10 blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[--accent]/15 text-[--accent] border border-[--accent]/30">
            <Terminal size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white font-space">RAG Architecture Sandbox</h3>
            <p className="text-[11px] text-[--muted]">Interactive local vector retrieval simulator</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-[--accent] bg-[--accent]/10 border border-[--accent]/20 px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[--accent] animate-pulse" /> Sub-200ms Vector Engine
        </div>
      </div>

      {/* Prompt Selectors */}
      <div className="flex flex-wrap gap-2 mb-4">
        {MOCK_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleRun(idx)}
            disabled={isRunning}
            className={`text-xs px-3.5 py-2 rounded-xl border transition-all text-left flex items-center gap-2 ${
              activePromptIdx === idx
                ? "bg-[--accent]/15 border-[--accent] text-white font-semibold"
                : "bg-white/5 border-white/10 text-[--muted] hover:bg-white/10 hover:text-white"
            }`}
          >
            <Play size={12} className={activePromptIdx === idx ? "text-[--accent]" : "opacity-50"} />
            {prompt}
          </button>
        ))}
      </div>

      {/* Execution Terminal Console */}
      <div className="bg-[#040a14] rounded-2xl p-4 border border-white/5 font-mono text-xs text-[--muted] min-h-[110px] space-y-2">
        {logs.length === 0 && !result && (
          <p className="text-white/40 italic">Click a prompt above to simulate the RAG execution pipeline...</p>
        )}
        {logs.map((log, i) => (
          <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} key={i} className="flex items-center gap-2 text-cyan-300/90">
            <span>{log}</span>
          </motion.div>
        ))}
        {result && (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="mt-3 pt-3 border-t border-white/10 text-white font-sans text-sm flex gap-3">
            <CheckCircle2 size={18} className="text-[--accent] shrink-0 mt-0.5" />
            <p className="leading-relaxed text-slate-200">{result}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
