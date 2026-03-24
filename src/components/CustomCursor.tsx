"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  
  // Motion values for the snap target (button center)
  const snapX = useMotionValue(-100);
  const snapY = useMotionValue(-100);

  // Snappier spring position for the visual aura
  const auraX = useSpring(snapX, { damping: 35, stiffness: 450, mass: 0.3 });
  const auraY = useSpring(snapY, { damping: 35, stiffness: 450, mass: 0.3 });

  // Instant real mouse position for the dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('a, button, [data-cursor]'));
      
      const magneticEl = target.closest('[data-magnetic]');
      if (magneticEl) {
        const { left, top, width, height } = magneticEl.getBoundingClientRect();
        // Snap the visual target to center, but keep real mouse separate
        snapX.set(left + width / 2);
        snapY.set(top + height / 2);
        setIsMagnetic(true);
      } else {
        // Target follows mouse normally
        snapX.set(e.clientX);
        snapY.set(e.clientY);
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
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-[--accent] opacity-10 pointer-events-none"
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? (isMagnetic ? 1.5 : 1.8) : 1,
          opacity: isHovered ? 0.35 : 0.1,
          borderWidth: isHovered ? "1px" : "2px",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
