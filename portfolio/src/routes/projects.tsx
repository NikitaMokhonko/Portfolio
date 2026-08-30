import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projectKinds, projects, type ProjectKind } from "@/data/projects";
import { usePageMeta } from "@/lib/usePageMeta";
import { useReveal } from "@/lib/useReveal";

export const Route = createFileRoute("/projects")({ component: Work });

function Work() {
  const [filter, setFilter] = useState<ProjectKind>("All");

  usePageMeta(
    "Work",
    "Projects by Nikita Mokhonko: client sites, product teams and personal work.",
  );

  // Filtered-in cards mount fresh with `.reveal`; re-scan so they animate in
  // instead of staying at opacity 0.
  useReveal(filter);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.kind === filter);

  return (
    <div className="shell py-14 sm:py-20">
      <h1 className="display-lg max-w-4xl">
        Client work, team projects, and things I built for myself.
      </h1>

      <div
        role="group"
        aria-label="Filter projects by type"
        className="mt-10 flex flex-wrap gap-2 border-b border-line pb-8"
      >
        {projectKinds.map((kind) => {
          const active = filter === kind;
          const count =
            kind === "All"
              ? projects.length
              : projects.filter((p) => p.kind === kind).length;
          return (
            <button
              key={kind}
              type="button"
              onClick={() => setFilter(kind)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                active
                  ? "border-ink bg-ink text-bg"
                  : "border-line text-ink-soft hover:border-line-strong hover:text-ink"
              }`}
            >
              {kind}
              <span
                aria-hidden="true"
                className={active ? "text-bg/60" : "text-muted"}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} projects shown
      </p>

      <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          // Keying on filter restarts the reveal transition when the list
          // swaps, so filtered-in cards animate rather than pop.
          <Reveal key={`${filter}-${project.slug}`} delay={(i % 3) * 80}>
            <ProjectCard project={project} index={i} headingLevel={2} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
