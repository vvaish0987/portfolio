import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[76rem] px-6 py-24 sm:px-10 md:py-32 lg:px-14 ${className}`}
    >
      {children}
    </section>
  );
}

/**
 * Section number above a display title, separated by a hairline — the
 * repeating structural motif across the page.
 */
export function SectionHeading({
  index,
  title,
  className = "",
}: {
  index: string;
  title: ReactNode;
  className?: string;
}) {
  return (
    <header className={`mb-14 md:mb-20 ${className}`}>
      <Reveal>
        <span className="label text-accent">{index}</span>
        <div className="rule mt-4 mb-8" />
        <h2 className="max-w-3xl font-display text-headline text-balance">
          {title}
        </h2>
      </Reveal>
    </header>
  );
}
