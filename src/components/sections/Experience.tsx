import { education, experience } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        title="Experience"
      />

      <ol className="space-y-16">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <Reveal>
              <article className="grid gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <p className="label">{job.period}</p>
                  <h3 className="mt-3 font-display text-title">{job.company}</h3>
                  <p className="mt-1 text-sm text-faint">{job.location}</p>
                </div>

                <div className="md:col-span-8">
                  <p className="text-lg text-ink">{job.role}</p>

                  <ul className="mt-7 space-y-3.5">
                    {job.points.map((point, i) => (
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
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-24">
        <div className="rule mb-10" />
        <div className="grid gap-6 md:grid-cols-12 md:gap-10">
          <h3 className="label md:col-span-4">Education</h3>
          <ol className="md:col-span-8 space-y-8">
            {education.map((entry) => (
              <li
                key={entry.institution}
                className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div>
                  <p className="text-ink">{entry.institution}</p>
                  <p className="mt-1 text-sm text-muted">{entry.qualification}</p>
                  <p className="mt-1 text-sm text-faint">{entry.location}</p>
                </div>
                <p className="label shrink-0 sm:text-right">{entry.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
