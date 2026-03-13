import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
  title: "Mayur Mahajan — Software Developer",
  description:
    "Software Developer experienced in web and mobile development. Building software that matters. Open source contributor to AppFlowy, Flutter, and React.",
  keywords: [
    "Mayur Mahajan",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Flutter",
    "Portfolio",
  ],
  authors: [{ name: "Mayur Mahajan" }],
  openGraph: {
    title: "Mayur Mahajan — Software Developer",
    description:
      "Software Developer experienced in web and mobile development. Building software that matters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
