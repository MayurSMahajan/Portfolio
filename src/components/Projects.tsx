/**
 * Projects section — Responsive card grid with hover effects.
 * Server component. Displays all projects from data/projects.ts.
 */

import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <p className="section-comment mb-2">projects</p>
        <h2 className="font-mono text-2xl font-bold text-text-primary sm:text-3xl mb-4">
          Things I&apos;ve Built
        </h2>
        <p className="text-text-secondary mb-12 max-w-lg">
          A selection of projects that showcase my skills across web, mobile,
          and full-stack development.
        </p>

        {/* Project cards grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-border bg-surface-elevated
                         p-6 transition-all duration-300
                         hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5
                         hover:-translate-y-1"
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                {/* Folder icon */}
                <svg
                  className="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>

                {/* External link icon */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors duration-200"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>

              {/* Title */}
              <h3 className="font-mono text-lg font-semibold text-text-primary mb-2
                             group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 rounded-full
                               bg-accent-muted text-accent
                               border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
