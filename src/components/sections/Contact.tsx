import { contact, person } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const CHANNELS = [
  { label: "Email", value: person.email, href: `mailto:${person.email}` },
  { label: "LinkedIn", value: "in/vaishnavivk2003", href: person.links.linkedin },
  { label: "GitHub", value: "vvaish0987", href: person.links.github },
  { label: "Phone", value: person.phone, href: `tel:${person.phone.replace(/\s/g, "")}` },
];

export function Contact() {
  return (
    <Section id="contact" className="pb-16 md:pb-24">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="label text-accent">06</span>
          <span className="label">{contact.eyebrow}</span>
        </div>
        <div className="rule mt-4 mb-12" />
      </Reveal>

      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="font-display text-display leading-[0.95]">
              {contact.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg text-base leading-[1.75] text-muted">
              {contact.body}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <a
              href={`mailto:${person.email}`}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-bg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
            >
              {person.email}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <ul className="divide-y divide-line border-y border-line">
              {CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="group flex items-center justify-between gap-6 py-5 transition-colors duration-500 hover:text-accent"
                  >
                    <span className="label">{channel.label}</span>
                    <span className="flex items-center gap-2.5 text-sm text-ink transition-colors duration-500 group-hover:text-accent">
                      {channel.value}
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
                        className="opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:opacity-100"
                      >
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={person.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-2.5 text-sm text-ink link-wipe"
            >
              Download résumé (PDF)
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 3v13M7 12l5 5 5-5M4 21h16" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
