import { about, person } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="label text-accent">01</span>
              <span className="label">{about.eyebrow}</span>
            </div>
            <div className="rule mt-4" />
          </Reveal>

          <Reveal delay={0.1} className="mt-8 hidden md:block">
            <dl className="space-y-5">
              <div>
                <dt className="label">Based in</dt>
                <dd className="mt-1.5 text-sm text-ink">{person.location}</dd>
              </div>
              <div>
                <dt className="label">Focus</dt>
                <dd className="mt-1.5 text-sm text-ink">{person.focus}</dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd className="mt-1.5 text-sm text-ink">Open to opportunities</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-headline text-balance">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-10 max-w-2xl space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)} as="p">
                <span className="block text-base leading-[1.75] text-muted">
                  {paragraph}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="mt-10 border-l-2 border-accent pl-5 text-base leading-relaxed text-ink">
              {about.now}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
