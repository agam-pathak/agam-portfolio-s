"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { Layers, Workflow } from "lucide-react";

interface ProjectBlueprintProps {
  title: string;
  architectureDiagram: string;
  productProof: React.ReactNode;
}

export function ProjectCardWithToggle({ title, architectureDiagram, productProof }: ProjectBlueprintProps) {
  const [viewMode, setViewMode] = useState<"product" | "architecture">("product");

  return (
    <div className="relative">
      <div className="flex justify-end mb-3">
        <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setViewMode("product")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              viewMode === "product"
                ? "bg-[--accent] text-[#041220] shadow-sm"
                : "text-[--muted] hover:text-white"
            }`}
          >
            <Layers size={12} /> Product View
          </button>
          <button
            onClick={() => setViewMode("architecture")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              viewMode === "architecture"
                ? "bg-[--accent] text-[#041220] shadow-sm"
                : "text-[--muted] hover:text-white"
            }`}
          >
            <Workflow size={12} /> Blueprint View
          </button>
        </div>
      </div>

      {viewMode === "product" ? (
        productProof
      ) : (
        <div className="p-4 rounded-xl border border-white/10 bg-[#060e1a] text-center overflow-x-auto">
          <p className="text-xs text-[--accent] font-bold uppercase tracking-wider mb-2 font-space">
            {title} System Flowchart
          </p>
          <MermaidDiagram chart={architectureDiagram} />
        </div>
      )}
    </div>
  );
}
