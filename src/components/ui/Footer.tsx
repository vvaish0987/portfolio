import { person } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[76rem] flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
        <p className="label">
          © {year} {person.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={person.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link-wipe text-sm text-muted transition-colors duration-500 hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="link-wipe text-sm text-muted transition-colors duration-500 hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="#top"
            className="link-wipe text-sm text-muted transition-colors duration-500 hover:text-ink"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
