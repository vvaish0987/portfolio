import { skillLegend, skills } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, staggerItem } from "@/components/ui/Reveal";
import { SkillPill } from "@/components/ui/SkillPill";

const LEVEL_ORDER = ["core", "working", "exploring"] as const;

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title="Sorted by how much I've actually used them."
      />

      {/* Being explicit about depth is more useful to a hiring manager than
          a flat keyword list — and it survives the interview. */}
      <Reveal>
        <ul className="mb-14 flex flex-wrap items-center gap-x-7 gap-y-3">
          {LEVEL_ORDER.map((level) => (
            <li key={level} className="flex items-center gap-2.5">
              <span
                aria-hidden
                className={`block size-1.5 rounded-full ${
                  level === "core"
                    ? "bg-accent"
                    : level === "working"
                      ? "bg-muted"
                      : "border border-line-strong bg-transparent"
                }`}
              />
              <span className="label">{skillLegend[level]}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="space-y-12">
        {skills.map((group) => (
          <Reveal key={group.title}>
            <div className="grid gap-5 border-t border-line pt-8 md:grid-cols-12 md:gap-10">
              <h3 className="label md:col-span-4 md:pt-1">{group.title}</h3>
              <Stagger className="md:col-span-8">
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <SkillPill
                      key={item.name}
                      name={item.name}
                      level={item.level}
                      variants={staggerItem}
                    />
                  ))}
                </ul>
              </Stagger>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
