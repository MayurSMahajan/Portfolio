/**
 * Home page — Single-page portfolio.
 * This is a server component that composes all sections.
 * Minimal client-side JavaScript; interactivity only in Navbar and ThemeToggle.
 */

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
