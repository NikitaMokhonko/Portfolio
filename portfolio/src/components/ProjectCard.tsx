import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  /**
   * `default` — image over text, for grids.
   * `wide`    — image beside text, for the one featured project on the home page.
   */
  size?: "default" | "wide";
  index?: number;
  /** Must not skip a level relative to the page it renders on. */
  headingLevel?: 2 | 3;
};

export default function ProjectCard({
  project,
  size = "default",
  index,
  headingLevel = 3,
}: Props) {
  const wide = size === "wide";
  const Heading = `h${headingLevel}` as "h2" | "h3";

  const media = (
    <div className="relative overflow-hidden rounded-lg border border-line bg-surface-2 transition-colors duration-700 group-hover:border-line-strong">
      <img
        src={project.cover}
        alt={`${project.title} interface`}
        loading={index !== undefined && index < 2 ? "eager" : "lazy"}
        decoding="async"
        className={`w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] ${
          wide ? "aspect-[16/10]" : "aspect-[16/11]"
        }`}
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
      />
    </div>
  );

  const text = (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <Heading className={`font-display ${wide ? "text-4xl" : "text-2xl"}`}>
          {project.title}
        </Heading>
        <span className="shrink-0 text-xs text-muted">{project.year}</span>
      </div>
      <p className="mt-2 text-ink-soft">{project.tagline}</p>
      <p className="mt-3 text-xs text-muted">
        {project.role}
      </p>
    </div>
  );

  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <article
        className={
          wide
            ? "grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-14"
            : "flex flex-col gap-5"
        }
      >
        {media}
        {text}
      </article>
    </Link>
  );
}
