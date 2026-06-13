import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { personal, socialLinks } from "@/data/personal";

/**
 * Font configuration — JetBrains Mono for headings/code, Inter for body text.
 * next/font automatically self-hosts these for performance.
 */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/**
 * SEO metadata — title, description, Open Graph, etc.
 */
export const metadata: Metadata = {
  title: `${personal.name} — ${personal.role}`,
  description:
    "Developer Relations Engineer, with a background in Software Development, experienced in web and mobile development. Building software that matters. Open source contributor to AppFlowy, Flutter, and React.",
  keywords: [
    "Mayur Mahajan",
    "Developer Relations Engineer",
    "DevRel",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Flutter",
    "Portfolio",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} — ${personal.role}`,
    description:
      "Developer Relations Engineer, with a background in Software Development, experienced in web and mobile development. Building software that matters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.role,
    description: personal.bio[0],
    address: {
      "@type": "PostalAddress",
      addressLocality: personal.location.split(",")[0].trim(),
      addressCountry: personal.location.split(",")[1]?.trim() || "India",
    },
    sameAs: [
      socialLinks.github,
      socialLinks.linkedin,
      socialLinks.twitter,
      socialLinks.youtube,
      socialLinks.medium,
    ],
  };

  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      {/* 
        Inline script to prevent flash of wrong theme (FOUC).
        Runs before React hydrates, sets the `dark` class immediately.
      */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface text-text-primary antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
