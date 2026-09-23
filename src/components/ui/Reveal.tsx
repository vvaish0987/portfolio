"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ElementType, ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Fade-and-rise on scroll. `delay` staggers siblings; `as` keeps the rendered
 * element semantic (list items, headings, …) rather than always a div.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Masked line reveal — each line slides up from behind its own overflow
 * boundary. Used for display headlines.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={reduced ? { opacity: 0 } : { y: "110%" }}
            animate={reduced ? { opacity: 1 } : { y: "0%" }}
            transition={{
              duration: 1.05,
              delay: delay + i * 0.09,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Parent for `staggerItem` children. */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </motion.div>
  );
}
