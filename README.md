# Vaishnavi V K — Portfolio

Personal portfolio site. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Three.js · Motion.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploying to Vercel

Vercel auto-detects Next.js — no config file needed.

**Option A — dashboard (easiest)**

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Accept the defaults and deploy.

**Option B — CLI**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

After the first deploy, update `metadataBase` in [`src/app/layout.tsx`](src/app/layout.tsx) to the real domain so Open Graph tags resolve correctly.

## Editing the content

**All copy lives in one file: [`src/lib/content.ts`](src/lib/content.ts).** No JSX editing needed to change text — bio, experience bullets, projects, skills and contact details are all exported objects there.

### Things still to fill in

- **Project links.** `source` and `demo` are omitted on all three projects in `content.ts`. Add them and the Source / Live demo buttons appear automatically:
  ```ts
  source: "https://github.com/vvaish0987/voxpulse",
  demo: "https://voxpulse.vercel.app",
  ```
- **Résumé PDF.** `public/resume.pdf` currently holds the CV as supplied. Replace it whenever the CV is updated.
- **Skill levels.** Each skill carries a `level` of `core` / `working` / `exploring`, rendered with a legend so a reader knows the depth behind each keyword. Adjust as things move between tiers.

## A note on the copy

The site copy is a rewrite of the CV, not a transcription. Scope figures that can be defended in an interview were kept (10,000+ samples validated, 5,000+ responses, 88% classification accuracy). Efficiency percentages that had no stated baseline were dropped in favour of describing the work itself. The C chat project is framed as socket and systems programming rather than production cryptography, since XOR obfuscation will not survive a security-literate interviewer.

## Structure

```
src/
├── app/
│   ├── layout.tsx        fonts, metadata, theme provider, nav + footer
│   ├── page.tsx          section composition
│   └── globals.css       design tokens, dark mode, utilities
├── components/
│   ├── sections/         Hero · About · Experience · Projects · Skills · Leadership · Contact
│   ├── three/            HeroCanvas — R3F particle field
│   └── ui/               Nav, ThemeToggle, Reveal, Section, SkillPill, Footer
└── lib/content.ts        ← all site copy
```

## Design notes

- **Palette.** Warm monochrome with a single bronze accent, defined as CSS custom properties in `globals.css` and flipped by a `.dark` class on `<html>`. Change the values at the top of that file to re-theme the whole site.
- **Type.** Instrument Serif for display, Inter for body, Geist Mono for labels. Display sizes are fluid via `clamp()`.
- **Motion.** Scroll reveals use the `Reveal` / `RevealLines` wrappers around Motion. The Three.js hero reads `prefers-reduced-motion` and freezes when set; particle count halves under 768px; WebGL context loss falls back to a CSS gradient.
- **Grain.** The `.grain` class on `<body>` overlays an inline SVG noise texture — pure CSS, no image request.
