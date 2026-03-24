"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [targetBounds, setTargetBounds] = useState<DOMRect | null>(null);
  
  // Real-time mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the cursor ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const target = e.target as HTMLElement;
      
      // Update mouse position
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Check for interactive and magnetic targets
      const interactive = target.closest('a, button, [data-cursor]');
      const magnetic = target.closest('[data-cursor="magnetic"]');

      if (magnetic) {
        setIsMagnetic(true);
        setIsHovered(true);
        const bounds = magnetic.getBoundingClientRect();
        setTargetBounds(bounds);
        
        // Lock the ring to the element's center
        cursorX.set(bounds.left + bounds.width / 2);
        cursorY.set(bounds.top + bounds.height / 2);
      } else {
        setIsMagnetic(false);
        setIsHovered(!!interactive);
        setTargetBounds(null);
        
        // Follow the mouse normally
        cursorX.set(clientX);
        cursorY.set(clientY);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] hidden md:block">
      {/* Visual Cursor Ring (Snapped or Following) */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full border-[--accent] pointer-events-none z-10 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isMagnetic && targetBounds ? targetBounds.width + 12 : 32,
          height: isMagnetic && targetBounds ? targetBounds.height + 12 : 32,
          borderRadius: isMagnetic && targetBounds ? "8px" : "100%",
        }}
        animate={{
          scale: (isHovered && !isMagnetic) ? 1.5 : 1,
          opacity: isHovered ? 0.6 : 0.3,
          backgroundColor: isMagnetic ? "rgba(var(--accent-rgb), 0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.2 }}
      />

      {/* Actual Interaction Dot (Always follows mouse exactly for click feedback) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[--accent] pointer-events-none z-20"
        style={{
          x: mouseX,
          y: mouseY,
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
