"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

export function Magnetic({ children }: { children: React.ReactElement }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
