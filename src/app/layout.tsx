import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { person } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${person.name} — ${person.role}`;
const description =
  "Software Engineer (MCA, 2026) with hands-on experience across the full software development lifecycle — designing, developing, testing, debugging and deploying applications in Python, Flask and REST APIs.";

export const metadata: Metadata = {
  metadataBase: new URL(person.links.portfolio),
  title: {
    default: title,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "Vaishnavi V K",
    "Software Engineer",
    "Python",
    "Flask",
    "REST APIs",
    "Machine Learning",
    "NLP",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    title,
    description,
    siteName: person.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrument.variable} ${geistMono.variable} h-full`}
    >
      <body className="grain min-h-full bg-bg text-ink">
        <ThemeProvider>
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-bg"
          >
            Skip to content
          </a>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
