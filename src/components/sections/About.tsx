import { competencies, summary } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Reveal>
            <span className="label text-accent">01</span>
            <div className="rule mt-4" />
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <h3 className="label">Core Competencies</h3>
            <ul className="mt-5 space-y-2.5">
              {competencies.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-headline text-balance">
              {summary.title}
            </h2>
          </Reveal>

          <div className="mt-10 max-w-2xl space-y-6">
            {summary.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)} as="p">
                <span className="block text-base leading-[1.75] text-muted">
                  {paragraph}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
