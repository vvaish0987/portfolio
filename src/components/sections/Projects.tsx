import { projects } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        eyebrow="Selected Projects"
        title="Three problems, three stacks, one habit of scoping tightly."
      />

      <ol className="space-y-px">
        {projects.map((project, index) => (
          <li key={project.name}>
            <Reveal>
              <article className="group relative border-t border-line py-12 transition-colors duration-700 last:border-b md:py-16">
                {/* Hover wash — sits behind content, bleeds past the padding */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-[-1.5rem] inset-y-0 -z-10 rounded-lg bg-surface-2 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <div className="flex items-baseline gap-4">
                      <span className="label text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="label">{project.year}</span>
                    </div>

                    <h3 className="mt-5 font-display text-title text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                      {project.tagline}
                    </p>
                    <p className="label mt-5">{project.role}</p>

                    {(project.source || project.demo) && (
                      <div className="mt-6 flex flex-wrap items-center gap-5">
                        {project.source && (
                          <a
                            href={project.source}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group/link link-wipe inline-flex items-center gap-1.5 text-sm text-ink"
                          >
                            Source
                            <ArrowIcon />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group/link link-wipe inline-flex items-center gap-1.5 text-sm text-ink"
                          >
                            Live demo
                            <ArrowIcon />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-8">
                    <p className="max-w-2xl text-base leading-[1.75] text-ink">
                      {project.description}
                    </p>

                    <ul className="mt-8 space-y-3.5">
                      {project.points.map((point, i) => (
                        <li
                          key={i}
                          className="relative max-w-2xl pl-6 text-[0.9375rem] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.7em] block h-px w-3 bg-accent"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-[0.6875rem] tracking-wide text-faint"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
