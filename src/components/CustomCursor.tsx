"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [hoveredEl, setHoveredEl] = useState<string | null>(null);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const attr = target.closest("[data-magnetic]");
      
      if (attr) {
        const { left, top, width, height } = attr.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        // Calculate "pull" towards center if near
        // We set the target position to the center of the magnetic element
        cursorX.set(centerX);
        cursorY.set(centerY);
        setIsMagnetic(true);
      } else {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        setIsMagnetic(false);
      }
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
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[--accent] mix-blend-difference flex items-center justify-center transition-transform"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -16,
          top: -16,
        }}
        animate={{
          scale: hoveredEl ? (isMagnetic ? 1.8 : 2.5) : 1,
          backgroundColor: hoveredEl === "view" ? "var(--accent)" : (isMagnetic ? "rgba(102, 246, 202, 0.2)" : "transparent"),
          borderColor: "var(--accent)",
          width: isMagnetic ? 60 : 32,
          height: isMagnetic ? 60 : 32,
          borderRadius: isMagnetic ? "12px" : "100%", // Boxy snap for buttons
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <AnimatePresence>
          {hoveredEl === "view" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[8px] font-bold text-black uppercase tracking-tighter"
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
