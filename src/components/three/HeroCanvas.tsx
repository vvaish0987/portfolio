"use client";

import { useMemo, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";
import type { Group, Points as ThreePoints } from "three";

/* ------------------------------------------------------------------ */
/* Geometry helpers                                                    */
/* ------------------------------------------------------------------ */

/**
 * Even point distribution over a sphere via the golden-angle spiral, with a
 * touch of deterministic jitter so the lattice doesn't read as a grid.
 */
function fibonacciSphere(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const ringRadius = Math.sqrt(Math.max(1 - y * y, 0));
    const theta = goldenAngle * i;

    // Deterministic pseudo-noise — keeps SSR and client renders identical.
    const jitter = Math.sin(i * 12.9898) * 0.5 + 0.5;
    const r = radius * (0.82 + jitter * 0.28);

    positions[i * 3] = Math.cos(theta) * ringRadius * r;
    positions[i * 3 + 1] = y * r;
    positions[i * 3 + 2] = Math.sin(theta) * ringRadius * r;
  }

  return positions;
}

/* ------------------------------------------------------------------ */
/* Scene pieces                                                        */
/* ------------------------------------------------------------------ */

type FieldProps = {
  count: number;
  color: string;
  animate: boolean;
};

function ParticleField({ count, color, animate }: FieldProps) {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(() => fibonacciSphere(count, 2.6), [count]);

  useFrame((state, delta) => {
    if (!ref.current || !animate) return;
    // Two axes at incommensurate rates so the motion never visibly loops.
    ref.current.rotation.y += delta * 0.055;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.12) * 0.18;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function WireShell({ color, animate }: { color: string; animate: boolean }) {
  const shell = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!shell.current || !animate) return;
    shell.current.rotation.y -= delta * 0.03;
    shell.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.12;
  });

  return (
    <group ref={shell}>
      <mesh>
        <icosahedronGeometry args={[3.4, 1]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.07}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/** Eases the whole scene toward the pointer for a parallax that never snaps. */
function ParallaxRig({
  children,
  enabled,
}: {
  children: React.ReactNode;
  enabled: boolean;
}) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current || !enabled) return;
    const damping = 1 - Math.pow(0.001, delta);
    group.current.rotation.y +=
      (state.pointer.x * 0.28 - group.current.rotation.y) * damping;
    group.current.rotation.x +=
      (-state.pointer.y * 0.2 - group.current.rotation.x) * damping;
  });

  return <group ref={group}>{children}</group>;
}

/* ------------------------------------------------------------------ */
/* Canvas                                                              */
/* ------------------------------------------------------------------ */

export default function HeroCanvas() {
  const { resolvedTheme } = useTheme();
  const [failed, setFailed] = useState(false);

  const isDark = resolvedTheme === "dark";
  const color = isDark ? "#f0efea" : "#111110";

  // Respect the OS motion preference and scale density to the viewport.
  const { animate, count } = useMemo(() => {
    if (typeof window === "undefined") return { animate: true, count: 2600 };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 768px)").matches;
    return { animate: !reduced, count: narrow ? 1400 : 2600 };
  }, []);

  if (failed) {
    return (
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,var(--accent-soft),transparent_65%)]"
      />
    );
  }

  return (
    <Canvas
      aria-hidden
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", () => setFailed(true));
      }}
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ParallaxRig enabled={animate}>
          <ParticleField count={count} color={color} animate={animate} />
          <WireShell color={color} animate={animate} />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  );
}
