import { achievements, certifications, leadership } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeading
        index="05"
        title="Leadership Experience"
      />

      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <ol className="space-y-10">
            {leadership.map((role) => (
              <li key={`${role.organisation}-${role.period}`}>
                <Reveal>
                  <div className="border-t border-line pt-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-lg text-ink">{role.role}</h3>
                      <p className="label">{role.period}</p>
                    </div>
                    <p className="mt-1.5 text-sm text-accent">
                      {role.organisation}
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted">
                      {role.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-5">
          <Reveal>
            <h3 className="label border-t border-line pt-7">
              Achievements
            </h3>
            <ul className="mt-7 space-y-6">
              {achievements.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-[0.6em] block h-px w-3 shrink-0 bg-accent"
                  />
                  <div>
                    <p className="text-ink">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="label mt-12">Certifications</h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-[0.6em] block h-px w-3 shrink-0 bg-accent"
                  />
                  <p className="text-ink">
                    {cert.title}{" "}
                    <span className="text-sm text-muted">({cert.issuer})</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
