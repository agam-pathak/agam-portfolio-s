"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

export function Magnetic({ children, strength = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isPressedRef = useRef(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const resetPosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || isPressedRef.current || !ref.current) {
      return;
    }

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    mouseX.set(x * strength);
    mouseY.set(y * strength);
  };

  const handlePointerDownCapture = () => {
    isPressedRef.current = true;
    resetPosition();
  };

  const handlePointerRelease = () => {
    isPressedRef.current = false;
    resetPosition();
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerRelease}
      onPointerDownCapture={handlePointerDownCapture}
      onPointerUpCapture={handlePointerRelease}
      onPointerCancelCapture={handlePointerRelease}
      onLostPointerCapture={handlePointerRelease}
      className="inline-block relative overflow-visible"
      style={{ isolation: "isolate" }}
      data-cursor="magnetic"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
