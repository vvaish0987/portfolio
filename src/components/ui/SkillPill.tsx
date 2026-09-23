"use client";

import { motion, type Variants } from "motion/react";
import type { SkillGroup } from "@/lib/content";

type Level = SkillGroup["items"][number]["level"];

const STYLES: Record<Level, string> = {
  core: "border-accent/40 bg-accent-soft text-ink",
  working: "border-line-strong text-ink",
  exploring: "border-dashed border-line-strong text-muted",
};

const DOT: Record<Level, string> = {
  core: "bg-accent",
  working: "bg-muted",
  exploring: "border border-line-strong bg-transparent",
};

export function SkillPill({
  name,
  level,
  variants,
}: {
  name: string;
  level: Level;
  variants?: Variants;
}) {
  return (
    <motion.li
      variants={variants}
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-500 ${STYLES[level]}`}
    >
      <span aria-hidden className={`block size-1.5 rounded-full ${DOT[level]}`} />
      {name}
    </motion.li>
  );
}
