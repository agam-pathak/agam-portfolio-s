"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [hoveredEl, setHoveredEl] = useState<string | null>(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorType = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      setHoveredEl(cursorType || null);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] rounded-full border border-[--accent] mix-blend-difference hidden md:block"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        left: -16,
        top: -16,
      }}
      animate={{
        scale: hoveredEl ? 2.5 : 1,
        backgroundColor: hoveredEl === "view" ? "var(--accent)" : "transparent",
        borderColor: hoveredEl === "view" ? "var(--accent)" : "var(--accent)",
      }}
    >
      {hoveredEl === "view" && (
        <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-black uppercase tracking-tighter">
          View
        </span>
      )}
    </motion.div>
  );
}
