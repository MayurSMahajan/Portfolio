/**
 * Experience section — Timeline layout for work history, skills,
 * achievements, and education.
 * Server component.
 */

import {
  experience,
  skills,
  achievements,
  education,
} from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <p className="section-comment mb-2">experience</p>
        <h2 className="font-mono text-2xl font-bold text-text-primary sm:text-3xl mb-12">
          Where I&apos;ve Worked
        </h2>

        {/* ─── Work Experience Timeline ─── */}
        <div className="relative ml-4 border-l-2 border-border pl-8 space-y-10 mb-20">
          {experience.map((entry, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface" />

              <div>
                <h3 className="font-mono text-base font-semibold text-text-primary">
                  {entry.role}
                </h3>
                <p className="font-mono text-sm text-accent mt-0.5">
                  {entry.company}
                </p>
                <p className="font-mono text-xs text-text-muted mt-1">
                  {entry.period}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Skills, Achievements & Education Grid ─── */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Skills */}
          <div className="rounded-xl border border-border bg-surface-elevated p-6">
            <p className="section-comment mb-3">skills</p>
            <h3 className="font-mono text-lg font-semibold text-text-primary mb-4">
              Tech Stack
            </h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="text-accent font-mono mt-0.5 shrink-0">→</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="rounded-xl border border-border bg-surface-elevated p-6">
            <p className="section-comment mb-3">achievements</p>
            <h3 className="font-mono text-lg font-semibold text-text-primary mb-4">
              Highlights
            </h3>
            <ul className="space-y-3">
              {achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="text-accent font-mono mt-0.5 shrink-0">★</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="rounded-xl border border-border bg-surface-elevated p-6">
            <p className="section-comment mb-3">education</p>
            <h3 className="font-mono text-lg font-semibold text-text-primary mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((entry, index) => (
                <div key={index}>
                  <p className="text-sm font-medium text-text-primary">
                    {entry.degree}
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5">
                    {entry.institution}
                  </p>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    {entry.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
