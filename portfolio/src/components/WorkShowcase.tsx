import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import type { Project } from "@/data/projects";

/**
 * Desktop: the cover is pinned while the project list scrolls past it, and
 * cross-fades to whichever entry is centred. Below `lg` there is nothing to
 * pin against, so it falls back to stacked cards.
 *
 * Two things have to agree or the layout looks broken:
 *
 *  - The pinned image's centre and each panel's text centre have to land on
 *    the same line, and that fixes the lead-in: the list needs
 *    `pin centre - panel/2` of padding before the first panel, or the first
 *    project is already past centre when the column pins. Centring the image
 *    in the full viewport therefore cost ~50vh of empty scroll at each end.
 *    Pinning at `top-20 h-[70svh]` puts the centre at `5rem + 35vh`, which
 *    brings the lead-in and the tail down to 9vh each.
 *
 *  - So: pt/pb = 35vh - panel/2 = 9vh with 52vh panels. Change any one of
 *    the three and the other two have to move with it.
 */
export default function WorkShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = panels.current.filter(Boolean) as HTMLLIElement[];
    if (nodes.length === 0) return;

    // A callback only carries the panels whose intersection changed, so
    // deciding from `entries` alone goes stale: when the outgoing panel
    // reports false and the incoming one reported earlier, the batch holds
    // no intersecting panel at all. Keep every ratio and pick from the lot.
    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }

        let bestIndex = -1;
        let bestRatio = 0;
        nodes.forEach((node, index) => {
          const ratio = ratios.get(node) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (bestIndex >= 0) setActive(bestIndex);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [projects.length]);

  return (
    <>
      <div data-showcase className="hidden gap-16 lg:grid lg:grid-cols-[1.05fr_1fr]">
        <div className="relative">
          <div className="sticky top-20 flex h-[70svh] items-center">
            {/* max-h matches the pinned box: on a wide, short viewport the
                cover would otherwise be taller than the box and slide up
                under the header. */}
            <div className="relative aspect-[16/11] max-h-[70svh] w-full overflow-hidden rounded-lg border border-line bg-surface-2">
              {projects.map((project, i) => (
                <img
                  key={project.slug}
                  src={project.cover}
                  alt=""
                  aria-hidden="true"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  // Only the visible cover may claim the name: it must be
                  // unique in the document, and the rest sit underneath at
                  // opacity 0.
                  style={
                    active === i
                      ? ({
                          viewTransitionName: `cover-${project.slug}`,
                        } as CSSProperties)
                      : undefined
                  }
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out ${
                    active === i
                      ? "scale-100 opacity-100 blur-0"
                      : "scale-105 opacity-0 blur-sm"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <ul className="pt-[9vh] pb-[9vh]">
          {projects.map((project, i) => (
            <li
              key={project.slug}
              ref={(node) => {
                panels.current[i] = node;
              }}
              className="flex min-h-[52vh] flex-col justify-center"
            >
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                // Without this the link announces as the whole card run
                // together.
                aria-label={`${project.title} — ${project.tagline}`}
                className="sd-depart group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <h3
                  className={`display-md transition-colors duration-500 group-hover:text-accent ${
                    active === i ? "text-ink" : "text-muted"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="mt-4 max-w-sm text-lg text-ink-soft">
                  {project.tagline}
                </p>

                <span className="eyebrow mt-6 block">{project.role}</span>

                <span className="mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-500 group-hover:text-accent">
                  Read the case study
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  >
                    &#8594;
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Stacked fallback */}
      <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:hidden">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 90}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
