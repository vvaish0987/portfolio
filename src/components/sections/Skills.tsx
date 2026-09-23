import { skills } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, staggerItem } from "@/components/ui/Reveal";
import { SkillPill } from "@/components/ui/SkillPill";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="04" title="Tech Stack" />

      <div className="space-y-12">
        {skills.map((group) => (
          <Reveal key={group.title}>
            <div className="grid gap-5 border-t border-line pt-8 md:grid-cols-12 md:gap-10">
              <h3 className="label md:col-span-4 md:pt-1">{group.title}</h3>
              <Stagger className="md:col-span-8">
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <SkillPill key={item} name={item} variants={staggerItem} />
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
