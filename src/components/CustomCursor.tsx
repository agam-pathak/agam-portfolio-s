"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [targetBounds, setTargetBounds] = useState<DOMRect | null>(null);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth follow for the dot
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 400, mass: 0.2 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 400, mass: 0.2 });

  // Main cursor ring spring configuration
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveTarget = target.closest('a, button, [data-cursor]');
      
      if (interactiveTarget) {
        setIsHovered(true);
        const magneticTarget = target.closest('[data-cursor="magnetic"]');
        if (magneticTarget) {
          setIsMagnetic(true);
          setTargetBounds(magneticTarget.getBoundingClientRect());
          
          // Center the ring on the element
          const bounds = magneticTarget.getBoundingClientRect();
          cursorX.set(bounds.left + bounds.width / 2);
          cursorY.set(bounds.top + bounds.height / 2);
        } else {
          setIsMagnetic(false);
          setTargetBounds(null);
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
        }
      } else {
        setIsHovered(false);
        setIsMagnetic(false);
        setTargetBounds(null);
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] hidden md:block mix-blend-difference">
      {/* Floating Ring (Responsive to Magnetic Snap) */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full border-[--accent] pointer-events-none z-10"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isMagnetic && targetBounds ? targetBounds.width + 10 : 32,
          height: isMagnetic && targetBounds ? targetBounds.height + 10 : 32,
          borderRadius: isMagnetic && targetBounds ? "8px" : "100%",
        }}
        animate={{
          scale: isHovered && !isMagnetic ? 1.5 : 1,
          opacity: isHovered ? 0.6 : 0.3,
          backgroundColor: isMagnetic ? "rgba(var(--accent-rgb), 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Center Interactive Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[--accent] pointer-events-none z-20"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </div>
  );
}
