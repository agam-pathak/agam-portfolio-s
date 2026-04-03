"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useTheme } from "next-themes";
import { BackgroundScene } from "./BackgroundScene";

export function SceneWrapper() {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "light" ? "light" : "dark";

  return (
    <div className="scene-wrapper" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 46 }} dpr={[1, 1.75]} gl={{ powerPreference: "high-performance" }}>
        <Suspense fallback={null}>
          <BackgroundScene theme={theme} />
          <Preload all />
        </Suspense>
      </Canvas>
      <div className="scene-veil scene-veil-top" />
      <div className="scene-veil scene-veil-bottom" />
    </div>
  );
}
