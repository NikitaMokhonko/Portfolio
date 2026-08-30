import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import { projectBySlug, projects } from "@/data/projects";
import { usePageMeta } from "@/lib/usePageMeta";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="shell py-32">
      <p className="eyebrow">404</p>
      <h1 className="display-md mt-4">No project at that address.</h1>
      <Link
        to="/projects"
        className="mt-8 inline-flex rounded-full border border-line px-6 py-3 text-sm"
      >
        Back to all work
      </Link>
    </div>
  ),
});

function CaseStudy() {
  const project = Route.useLoaderData();
  usePageMeta(project.title, project.tagline);
  const position = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(position + 1) % projects.length];

  return (
    <article className="pb-24">
      <header className="shell pt-10 sm:pt-14">
        <Link
          to="/projects"
          className="group inline-flex min-h-6 items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:-translate-x-1"
          >
            &#8592;
          </span>
          All work
        </Link>

        <h1 className="display-lg mt-10">{project.title}</h1>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
              {project.intro}
            </p>

            {project.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-transform duration-500 hover:-translate-y-0.5 ${
                      link.variant === "primary"
                        ? "bg-ink text-bg"
                        : "border border-line text-ink hover:border-line-strong"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-500 group-hover:translate-x-0.5"
                    >
                      &#8599;
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <Reveal>
            <div className="overflow-hidden rounded-lg border border-line bg-surface-2">
              <img
                src={project.cover}
                alt={`${project.title} interface`}
                // Pairs with the landing showcase: the cover morphs into
                // place instead of the page simply swapping.
                style={
                  { viewTransitionName: `cover-${project.slug}` } as CSSProperties
                }
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {project.metrics && (
        <Reveal className="shell mt-16">
          <dl className="flex flex-wrap gap-x-16 gap-y-8 border-y border-line py-10">
            {project.metrics.map((metric) => (
              // dt must precede dd in the DOM; reversed visually so the
              // number reads first.
              <div key={metric.label} className="flex flex-col-reverse">
                <dt className="eyebrow mt-1">{metric.label}</dt>
                <dd className="font-display text-4xl text-accent">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}

      <div className="shell mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-3">
        <Reveal>
          <h2 className="eyebrow">Context</h2>
          <p className="mt-4 text-ink-soft">{project.context}</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="eyebrow">Approach</h2>
          <p className="mt-4 text-ink-soft">{project.approach}</p>
        </Reveal>

        <Reveal delay={160}>
          <h2 className="eyebrow">What I did</h2>
          <ul className="mt-4 space-y-2.5">
            {project.did.map((item) => (
              <li key={item} className="flex gap-3 text-ink-soft">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-px w-3.5 shrink-0 bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="shell mt-16">
        <dl className="grid gap-x-12 gap-y-8 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <dt className="eyebrow">Role</dt>
            <dd className="mt-1.5 text-ink-soft">{project.role}</dd>
          </div>
          <div>
            <dt className="eyebrow">Team</dt>
            <dd className="mt-1.5 text-ink-soft">{project.team}</dd>
          </div>
          <div>
            <dt className="eyebrow">Year</dt>
            <dd className="mt-1.5 tabular-nums text-ink-soft">{project.year}</dd>
          </div>
          <div>
            <dt className="eyebrow">Timeline</dt>
            <dd className="mt-1.5 text-ink-soft">{project.timeline}</dd>
          </div>
          <div>
            <dt className="eyebrow">Stack</dt>
            <dd className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-ink-soft">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </dd>
          </div>
        </dl>
      </Reveal>

      {project.gallery && project.gallery.length > 0 && (
        <Reveal className="shell mt-16">
          <Lightbox images={project.gallery} title={project.title} />
        </Reveal>
      )}

      <Reveal className="shell mt-20">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group flex items-center justify-between gap-6 border-t border-line pt-10"
        >
          <span>
            <span className="eyebrow">Next</span>
            <span className="display-md mt-2 block font-display transition-colors duration-500 group-hover:text-accent">
              {next.title}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="text-2xl text-muted transition-transform duration-500 group-hover:translate-x-2 group-hover:text-accent"
          >
            &#8594;
          </span>
        </Link>
      </Reveal>
    </article>
  );
}
