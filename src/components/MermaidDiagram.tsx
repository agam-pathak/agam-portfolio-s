"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

// Initialize mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "var(--font-space-grotesk)",
  themeVariables: {
    primaryColor: "#66f6ca",
    primaryTextColor: "#e7eefc",
    primaryBorderColor: "rgba(102, 246, 202, 0.4)",
    lineColor: "#66f6ca",
    secondaryColor: "#101b2f",
    tertiaryColor: "#08111f"
  }
});

export function MermaidDiagram({ chart }: { chart: string }) {
  const [svg, setSvg] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderChart = async () => {
      if (containerRef.current) {
        try {
          const { svg } = await mermaid.render(`id_${Math.random().toString(36).substr(2, 9)}`, chart);
          setSvg(svg);
        } catch (error) {
          console.error("Mermaid parsing error:", error);
          setSvg('<div class="text-red-400 p-4 border border-red-400/20 rounded-lg">Architecture diagram failed to load.</div>');
        }
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div className="mermaid-container w-full overflow-x-auto bg-black/10 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-2xl transition-all hover:border-white/10 group">
      <div 
        ref={containerRef} 
        dangerouslySetInnerHTML={{ __html: svg }} 
        className="flex justify-center [&>svg]:max-w-full [&>svg]:h-auto transition-opacity duration-300 opacity-0 group-data-[rendered=true]:opacity-100" 
        data-rendered={!!svg}
      />
      {!svg && (
        <div className="flex items-center justify-center h-40 animate-pulse text-[--muted]">
          Visualizing architecture...
        </div>
      )}
    </div>
  );
}
