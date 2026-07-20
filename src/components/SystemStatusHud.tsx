"use client";

import { Activity, ShieldCheck, Zap, Server } from "lucide-react";

export function SystemStatusHud() {
  return (
    <div className="w-full bg-[#050c18]/80 backdrop-blur-md border-y border-white/10 py-2.5 px-4 text-xs font-mono text-[--muted]">
      <div className="max-w-[--max-width] mx-auto flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[--accent]"></span>
            </span>
            <span className="text-white font-bold tracking-wider">SYSTEM HUD</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Zap size={13} className="text-[--accent]" />
            <span>RAG Latency: <strong className="text-white">&lt;200ms</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Server size={13} className="text-cyan-400" />
            <span>Uptime: <strong className="text-white">98% High-Avail</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck size={13} className="text-purple-400" />
            <span>Deployments: <strong className="text-white">15+ Apps</strong></span>
          </div>
        </div>
        <div className="text-[11px] text-[--accent] opacity-80 hidden md:block">
          SCRIET Lead R&amp;D Architect &bull; Agam AI Delegate Sync Active
        </div>
      </div>
    </div>
  );
}
