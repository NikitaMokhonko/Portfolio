import { createFileRoute } from "@tanstack/react-router";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { usePageMeta } from "@/lib/usePageMeta";

export const Route = createFileRoute("/projects")({ component: Work });

function Work() {
  usePageMeta(
    "Work",
    "Projects by Nikita Mokhonko: client sites, product teams and personal work.",
  );

  return (
    <div className="shell py-14 sm:py-20">
      <h1 className="display-lg max-w-4xl">
        Client work, team projects, and things I built for myself.
      </h1>

      <div className="mt-12 grid gap-x-10 gap-y-14 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 80}>
            <ProjectCard project={project} index={i} headingLevel={2} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
