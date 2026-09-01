import { Link, createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import SectionRule from "@/components/SectionRule";
import TechMarquee from "@/components/TechMarquee";
import WorkShowcase from "@/components/WorkShowcase";
import { site } from "@/data/site";
import { featuredProjects } from "@/data/projects";
import { usePageMeta } from "@/lib/usePageMeta";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  usePageMeta(
    site.role,
    "Nikita Mokhonko is an interface designer and full-stack engineer in Stockholm. Selected work and case studies.",
  );

  return (
    <>
      <Hero />
      <Work />
      <Toolkit />
      <Closing />
    </>
  );
}

function Hero() {
  return (
    <section className="hero-depart shell flex min-h-[calc(100svh-5rem)] flex-col pb-10 pt-6">
      {/* my-auto on the block, not justify-center on the section, so the free
          space splits above and below it and the bottom bar stays pinned. */}
      <div className="my-auto py-12">
        {/* Sized a step below display-xl: three lines at that scale would
            overwhelm the viewport and wrap on narrow screens. */}
        <h1 className="font-display text-[clamp(2rem,1rem+5vw,5rem)] leading-[1.02] tracking-[-0.03em]">
          <span
            className="mask-line"
            style={{ "--mask-delay": "80ms" } as CSSProperties}
          >
            <span>Hi, I&rsquo;m Nikita,</span>
          </span>{" "}
          <span
            className="mask-line"
            style={{ "--mask-delay": "200ms" } as CSSProperties}
          >
            <span>an interface designer</span>
          </span>{" "}
          <span
            className="mask-line"
            style={{ "--mask-delay": "320ms" } as CSSProperties}
          >
            <span>
              and <span className="whitespace-nowrap">full-stack</span>{" "}
              engineer<span className="text-accent">.</span>
            </span>
          </span>
        </h1>

        <Reveal delay={460}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/projects" className="btn-primary group">
              <span className="relative z-10">See the work</span>
              <span
                aria-hidden="true"
                className="relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1"
              >
                &#8594;
              </span>
            </Link>
            <Link
              to="/contact"
              className="link-line text-sm text-ink-soft transition-colors duration-500 hover:text-ink"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>

      <Reveal delay={640}>
        <div className="flex items-end justify-between gap-6 border-t border-line pt-5">
          <div
            aria-hidden="true"
            className="scroll-cue hidden items-center gap-4 sm:flex"
          >
            <span className="block h-8 w-px bg-line-strong" />
            <span className="eyebrow">Scroll</span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/profile.jpg"
              alt={site.name}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-line object-cover"
            />
            <span className="text-sm leading-tight text-ink-soft">
              {site.name}
              <span className="block text-muted">{site.title}</span>
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Work() {
  return (
    <section className="shell pb-10 sm:pb-14">
      <SectionRule
        label="Case studies"
        action={{ to: "/projects", label: "All projects" }}
      />
      <WorkShowcase projects={featuredProjects} />
    </section>
  );
}

function Toolkit() {
  return (
    <section className="pb-[4.5rem]">
      <div className="shell">
        <SectionRule label="Toolkit" />
        {/* Matches the section's bottom padding: the marquee is a single
            strip, so unequal space above and below reads as misalignment. */}
        <Reveal className="mt-[4.5rem]">
          {/* Wrapper, not the Reveal itself: a scroll-driven animation with
              `both` fill would hold the reveal's entry state hostage.
              -mx-5 cancels the shell's 1.25rem phone gutter so the marquee
              runs off both edges; from sm up it sits back inside. */}
          <div className="sd-depart -mx-5 sm:mx-0">
            <TechMarquee />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Closing() {
  const channels = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      label: "LinkedIn",
      value: "in/nikitamokhonko",
      href: site.links.linkedin,
    },
    { label: "GitHub", value: "nikitamokhonko", href: site.links.github },
  ];

  return (
    <section className="shell pb-28 sm:pb-36">
      <SectionRule label="Contact" />

      <ul className="sd-lift reveal mt-12">
        {channels.map((channel) => (
          <li key={channel.label}>
            <a
              href={channel.href}
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-baseline gap-6 border-b border-line py-5 transition-colors duration-500 first:border-t hover:border-line-strong"
            >
              <span className="w-24 shrink-0 text-sm text-muted">
                {channel.label}
              </span>
              <span className="min-w-0 flex-1 truncate text-ink-soft transition-colors duration-500 group-hover:text-ink">
                {channel.value}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
              >
                &#8599;
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
