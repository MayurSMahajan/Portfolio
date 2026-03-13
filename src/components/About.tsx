/**
 * About section — Profile image and bio paragraphs.
 * Server component using Next.js Image for optimization.
 */

import Image from "next/image";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <p className="section-comment mb-2">about</p>
        <h2 className="font-mono text-2xl font-bold text-text-primary sm:text-3xl mb-12">
          About Me
        </h2>

        <div className="grid gap-12 md:grid-cols-[280px_1fr] items-start">
          {/* Profile image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/profile.jpeg"
                alt={`${personal.name} — Software Developer`}
                width={280}
                height={350}
                className="object-cover w-full transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-2 -right-2 h-6 w-6 border-r-2 border-b-2 border-accent rounded-br-lg" />
          </div>

          {/* Bio text */}
          <div className="space-y-4">
            <p className="font-mono text-sm text-accent mb-4">
              ~/about/bio.md
            </p>
            {personal.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-text-secondary leading-relaxed text-base"
              >
                {paragraph}
              </p>
            ))}

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div>
                <p className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Location
                </p>
                <p className="mt-1 text-sm text-text-primary">{personal.location}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  Focus
                </p>
                <p className="mt-1 text-sm text-text-primary">Full-Stack & Mobile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
