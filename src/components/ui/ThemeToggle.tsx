"use client";

import { useTheme } from "next-themes";

/**
 * Both icons are always rendered and swapped by the `.dark` class on <html>,
 * which next-themes sets before paint. That avoids the usual mounted-state
 * effect, the hydration mismatch, and the first-paint icon flash.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group relative grid size-9 place-items-center overflow-hidden rounded-full border border-line text-ink transition-colors duration-500 hover:border-line-strong hover:bg-surface-2"
    >
      <span className="sr-only">Toggle theme</span>

      {/* Sun — visible in light mode */}
      <svg
        aria-hidden
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="col-start-1 row-start-1 rotate-0 scale-100 opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:-rotate-90 dark:scale-50 dark:opacity-0"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>

      {/* Moon — visible in dark mode */}
      <svg
        aria-hidden
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="col-start-1 row-start-1 rotate-90 scale-50 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:rotate-0 dark:scale-100 dark:opacity-100"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
