"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  
  // Real mouse position for the dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Lagging spring position for the aura
  const auraX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });
  const auraY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('a, button, [data-cursor]'));
      
      const magneticEl = target.closest('[data-magnetic]');
      if (magneticEl) {
        const { left, top, width, height } = magneticEl.getBoundingClientRect();
        // Snap aura to center if magnetic
        mouseX.set(left + width / 2);
        mouseY.set(top + height / 2);
        setIsMagnetic(true);
      } else {
        setIsMagnetic(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] hidden md:block overflow-hidden">
      {/* Lagging Aura */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[--accent] opacity-20"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? (isMagnetic ? 1.8 : 2.2) : 1,
          opacity: isHovered ? 0.4 : 0.15,
          borderWidth: isHovered ? "1px" : "2px",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />

      {/* Instant Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[--accent]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
          opacity: isMagnetic ? 0 : 1, // Hide dot when snapped to button center for elegance
        }}
      />
      
      {/* Subtle Glow Trail */}
      {isHovered && !isMagnetic && (
        <motion.div
          className="fixed top-0 left-0 w-24 h-24 rounded-full bg-[--accent] blur-[40px] opacity-10"
          style={{
            x: auraX,
            y: auraY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </div>
  );
}
