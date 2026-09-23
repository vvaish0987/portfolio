"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { hero } from "@/lib/content";
import { RevealLines } from "@/components/ui/Reveal";

// WebGL never runs on the server, and the bundle shouldn't block first paint.
const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Content drifts up and dissolves slightly faster than the scene behind it.
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={reduced ? undefined : { scale: sceneScale }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <HeroCanvas />
        {/* Vignette keeps the type legible over the particle field */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--bg)_78%)]" />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[76rem] px-6 sm:px-10 lg:px-14"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center gap-3"
        >
          <span className="label">{hero.eyebrow}</span>
        </motion.div>

        <h1 className="mt-7 font-display text-display text-balance">
          <RevealLines lines={hero.headline} delay={0.15} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          className="mt-9 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {hero.standfirst}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          className="mt-11 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
          >
            See the work
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors duration-500 hover:bg-surface-2"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        style={reduced ? undefined : { opacity: contentOpacity }}
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-full max-w-[76rem] items-end justify-end px-6 sm:px-10 lg:px-14"
      >
        <span className="label flex items-center gap-3">
          Scroll
          <span aria-hidden className="relative block h-8 w-px bg-line-strong">
            <motion.span
              animate={{ y: [0, 26, 26], opacity: [1, 1, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 top-0 h-2 bg-accent"
            />
          </span>
        </span>
      </motion.div>
    </section>
  );
}
