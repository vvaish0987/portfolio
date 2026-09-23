"use client";

import { motion, type Variants } from "motion/react";

export function SkillPill({
  name,
  variants,
}: {
  name: string;
  variants?: Variants;
}) {
  return (
    <motion.li
      variants={variants}
      className="inline-flex items-center rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-ink transition-colors duration-500"
    >
      {name}
    </motion.li>
  );
}
