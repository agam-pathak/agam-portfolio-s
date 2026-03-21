"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export function MermaidDiagram({ chart }: { chart: string }) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize mermaid only once on client
    try {
      mermaid.initialize({
        startOnLoad: false,
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
      setIsInitialized(true);
    } catch (err) {
      console.error("Mermaid initialization failed:", err);
    }
  }, []);

  useEffect(() => {
    if (!isInitialized || !chart) return;

    const renderChart = async () => {
      try {
        const id = `mermaid-svg-${Math.random().toString(36).substring(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
        setError(false);
      } catch (err) {
        console.error("Mermaid parsing error:", err);
        setError(true);
        setSvg("");
      }
    };

    renderChart();
  }, [chart, isInitialized]);

  return (
    <div 
      className="mermaid-container w-full overflow-x-auto bg-black/10 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-2xl transition-all hover:border-white/10 group min-h-[200px] flex flex-col justify-center"
      data-rendered={!!svg}
    >
      {svg ? (
        <div 
          dangerouslySetInnerHTML={{ __html: svg }} 
          className="flex justify-center [&>svg]:max-w-full [&>svg]:h-auto transition-opacity duration-700 opacity-0 group-data-[rendered=true]:opacity-100" 
        />
      ) : error ? (
        <div className="flex flex-col items-center justify-center p-8 text-center text-red-400 border border-red-400/20 rounded-xl bg-red-400/5">
          <p className="font-bold mb-1">Architecture diagram failed to load</p>
          <p className="text-xs opacity-60">Check the diagram syntax or server connection</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-40 animate-pulse text-[--muted]">
          <div className="w-8 h-8 border-2 border-t-transparent border-[--accent] rounded-full animate-spin mb-4" />
          <p className="text-sm font-space tracking-wider uppercase">Visualizing architecture...</p>
        </div>
      )}
    </div>
  );
}
