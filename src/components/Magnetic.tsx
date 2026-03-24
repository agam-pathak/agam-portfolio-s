"use client";

import React from "react";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

export function Magnetic({ children }: { children: React.ReactElement }) {
  return children;
}
