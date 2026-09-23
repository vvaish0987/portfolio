import { projects } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        title="Projects"
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
                    <span className="label text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-5 font-display text-title text-ink">
                      {project.name}
                    </h3>
                    {project.tagline && (
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                        {project.tagline}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-8">
                    <p className="max-w-2xl text-base leading-[1.75] text-ink">
                      {project.description}
                    </p>

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
