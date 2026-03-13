/**
 * Hero section — Large name, tagline with typing caret, and intro.
 * Server component with CSS-only animations.
 */

import { personal } from "@/data/personal";

export function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg relative min-h-[90vh] flex items-center justify-center px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Code-style greeting */}
        <p className="section-comment mb-6 text-sm tracking-widest uppercase">
          hello, world
        </p>

        {/* Name */}
        <h1 className="font-mono text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
          {personal.name}
        </h1>

        {/* Role with typing caret */}
        <div className="mt-4 flex items-center justify-center">
          <span className="font-mono text-lg text-accent sm:text-xl lg:text-2xl typing-caret pr-1">
            {personal.role}
          </span>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-lg text-text-secondary max-w-lg mx-auto leading-relaxed">
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="font-mono text-sm px-6 py-2.5 rounded-lg
                       bg-accent text-white hover:bg-accent-hover
                       transition-colors duration-200"
          >
            view work
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-6 py-2.5 rounded-lg
                       border border-border text-text-secondary
                       hover:border-border-hover hover:text-text-primary
                       transition-all duration-200"
          >
            get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-5 w-5 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
