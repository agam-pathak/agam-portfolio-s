"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

type BackgroundSceneProps = {
  theme: "light" | "dark";
};

const palettes = {
  dark: {
    background: "#050814",
    fog: "#050814",
    point: "#66f6ca",
    secondary: "#8eb6ff",
    tertiary: "#f8c37d",
    glass: "#7eeed0",
    floor: "#12233d",
  },
  light: {
    background: "#edf3ff",
    fog: "#edf3ff",
    point: "#0f8f76",
    secondary: "#5c87d8",
    tertiary: "#d38a32",
    glass: "#71ccb4",
    floor: "#dbe7ff",
  },
};

export function BackgroundScene({ theme }: BackgroundSceneProps) {
  const palette = palettes[theme];
  const root = useRef<THREE.Group>(null);
  const rings = useRef<THREE.Group>(null);
  const pointer = useRef(new THREE.Vector2(0, 0));
  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointer.current.x = event.clientX / window.innerWidth - 0.5;
      pointer.current.y = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((_, delta) => {
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    scrollTarget.current = window.scrollY / maxScroll;
    scrollCurrent.current = THREE.MathUtils.lerp(
      scrollCurrent.current,
      scrollTarget.current,
      delta * 2.5
    );

    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(
        root.current.rotation.y,
        pointer.current.x * 0.7 + scrollCurrent.current * 0.65,
        delta * 1.5
      );
      root.current.rotation.x = THREE.MathUtils.lerp(
        root.current.rotation.x,
        -pointer.current.y * 0.35,
        delta * 1.5
      );
      root.current.position.y = THREE.MathUtils.lerp(
        root.current.position.y,
        -scrollCurrent.current * 6,
        delta * 1.2
      );
    }

    if (rings.current) {
      rings.current.rotation.z += delta * 0.08;
      rings.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <>
      <color attach="background" args={[palette.background]} />
      <fog attach="fog" args={[palette.fog, 10, 34]} />

      <ambientLight intensity={theme === "light" ? 1.15 : 0.6} />
      <directionalLight
        position={[9, 10, 8]}
        intensity={theme === "light" ? 1.35 : 0.95}
        color="#ffffff"
      />
      <pointLight
        position={[-8, 5, 6]}
        intensity={theme === "light" ? 14 : 20}
        color={palette.point}
      />
      <pointLight
        position={[8, -1, 4]}
        intensity={theme === "light" ? 10 : 16}
        color={palette.secondary}
      />
      <Environment preset={theme === "light" ? "dawn" : "night"} />

      <Stars
        radius={80}
        depth={36}
        count={theme === "light" ? 1600 : 2600}
        factor={4}
        saturation={0}
        fade
        speed={0.6}
      />
      <Sparkles
        count={theme === "light" ? 85 : 140}
        scale={22}
        size={3}
        speed={0.35}
        opacity={theme === "light" ? 0.25 : 0.42}
        color={palette.point}
      />

      <group ref={root}>
        <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.8}>
          <mesh position={[-16, 4, -14]}>
            <torusKnotGeometry args={[1.1, 0.28, 180, 24]} />
            <meshPhysicalMaterial
              color={palette.secondary}
              metalness={0.7}
              roughness={0.12}
              clearcoat={1}
              reflectivity={1}
            />
          </mesh>
        </Float>

        <Float speed={2.8} rotationIntensity={1.25} floatIntensity={2.4}>
          <mesh position={[16, -1.2, -14]}>
            <icosahedronGeometry args={[1.6, 0]} />
            <meshStandardMaterial
              color={palette.point}
              wireframe
              transparent
              opacity={theme === "light" ? 0.2 : 0.35}
            />
          </mesh>
        </Float>

        <Float speed={2.3} rotationIntensity={1.1} floatIntensity={2.1}>
          <mesh position={[-14, -8, -13]}>
            <octahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color={palette.tertiary}
              wireframe
              transparent
              opacity={theme === "light" ? 0.18 : 0.3}
            />
          </mesh>
        </Float>

        <Float speed={1.9} rotationIntensity={0.7} floatIntensity={1.5}>
          <mesh position={[14, -11, -13]}>
            <dodecahedronGeometry args={[1.7, 0]} />
            <meshPhysicalMaterial
              color={palette.glass}
              transmission={0.9}
              roughness={0.08}
              thickness={1.2}
              metalness={0.05}
            />
          </mesh>
        </Float>

        <group ref={rings} position={[0, -4.5, -8]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[3.8, 4.06, 80]} />
            <meshBasicMaterial
              color={palette.secondary}
              transparent
              opacity={theme === "light" ? 0.16 : 0.14}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, Math.PI / 3]}>
            <ringGeometry args={[5.2, 5.36, 80]} />
            <meshBasicMaterial
              color={palette.point}
              transparent
              opacity={theme === "light" ? 0.12 : 0.1}
            />
          </mesh>
        </group>

        <mesh position={[0, -12, -12]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[14, 64]} />
          <meshBasicMaterial
            color={palette.floor}
            transparent
            opacity={theme === "light" ? 0.34 : 0.18}
          />
        </mesh>

        <mesh position={[0, 0, -14]}>
          <planeGeometry args={[32, 20]} />
          <meshBasicMaterial
            color={theme === "light" ? "#dbe7ff" : "#0a1730"}
            transparent
            opacity={theme === "light" ? 0.12 : 0.08}
          />
        </mesh>
      </group>
    </>
  );
}
