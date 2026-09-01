import { Link, createFileRoute } from "@tanstack/react-router";
import Reveal from "@/components/Reveal";
import SectionRule from "@/components/SectionRule";
import { experience, languages } from "@/data/experience";
import { site } from "@/data/site";
import { usePageMeta } from "@/lib/usePageMeta";

export const Route = createFileRoute("/about")({ component: About });

/**
 * One row per employer for the summary. Two roles at the same company
 * collapse into a single entry spanning both, and years are pulled by
 * pattern — "Mar — Apr 2026" has no year in its first half.
 */
const employers = (() => {
  const years = (period: string) => (period.match(/\d{4}/g) ?? []).map(Number);

  const byCompany = new Map<string, number[]>();
  for (const role of experience) {
    const found = byCompany.get(role.company) ?? [];
    byCompany.set(role.company, [...found, ...years(role.period)]);
  }

  return [...byCompany.entries()].map(([company, all]) => {
    const first = Math.min(...all);
    const last = Math.max(...all);
    const ongoing = experience.some(
      (role) => role.company === company && role.current,
    );
    return {
      company: company.replace(" School of Applied Technology", ""),
      years: ongoing
        ? `${first}—`
        : first === last
          ? `${first}`
          : `${first}—${String(last).slice(2)}`,
    };
  });
})();

function About() {
  usePageMeta(
    "About",
    "Design and frontend across client sites, product teams and design systems.",
  );

  return (
    <div className="pb-24">
      <header className="shell py-14 sm:py-20">
        <h1 className="display-lg max-w-3xl">
          From concept to production.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          I lead frontend work and set the engineering standards that come
          with it. Beyond that I&rsquo;m hands-on across the backend, the
          infrastructure and the deploy. Some of it has been AI product work
          &mdash; LLM integration, agentic workflows, speech recognition
          &mdash; and plenty of it hasn&rsquo;t.
        </p>

        <Reveal delay={120}>
          <ul className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-3 border-t border-line pt-6">
            {employers.map((employer) => (
              <li key={employer.company} className="flex items-baseline gap-2.5">
                <span className="text-ink">{employer.company}</span>
                <span className="text-xs tabular-nums text-muted">
                  {employer.years}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </header>

      <section className="shell pb-12">
        <SectionRule label="Experience" />

        {/* The final entry keeps its border off and drops its bottom padding
            too - with no rule beneath it, that padding was just a void. */}
        <ol className="mt-2 [&>li:last-child>article]:border-0 [&>li:last-child>article]:pb-0">
          {experience.map((role, i) => (
            <Reveal
              as="li"
              key={`${role.company}-${role.period}`}
              delay={i * 60}
            >
              {/* Title and period on one line, company beneath, prose below.
                  The old version buried the role inside a date column and
                  set every point as a dashed bullet, which read as a dense
                  block rather than a record. */}
              <article className="border-b border-line py-9 sm:py-11">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="flex flex-wrap items-baseline gap-x-3 text-2xl">
                    {role.title}
                    {role.current && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-accent">
                        <span
                          aria-hidden="true"
                          className="live-dot h-1.5 w-1.5 rounded-full bg-accent"
                        />
                        Current
                      </span>
                    )}
                  </h3>
                  <p className="shrink-0 text-sm tabular-nums text-muted">
                    {role.period}
                  </p>
                </div>

                <p className="mt-1.5 text-sm text-ink-soft">
                  {role.company}
                  {role.location && (
                    <span className="text-muted"> · {role.location}</span>
                  )}
                </p>

                <ul className="mt-5 max-w-2xl space-y-2 text-ink-soft">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {role.stack && (
                  <p className="mt-5 text-xs text-muted">
                    {role.stack.join(" · ")}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="shell pb-12">
        <SectionRule label="Languages" />
        <Reveal>
          <ul className="mt-2 flex flex-wrap gap-x-12 gap-y-4 pt-8">
            {languages.map((language) => (
              <li key={language.name} className="flex items-baseline gap-3">
                <span className="text-lg text-ink">{language.name}</span>
                <span className="text-sm text-muted">{language.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Reveal className="shell">
        <div className="flex flex-col gap-6 border-t border-line pt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="display-md max-w-md">The rest is in the work.</p>
          <div className="flex flex-wrap items-center gap-8">
            <Link to="/projects" className="btn-primary group">
              <span className="relative z-10">See the work</span>
              <span
                aria-hidden="true"
                className="relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1"
              >
                &#8594;
              </span>
            </Link>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line text-sm text-ink-soft transition-colors duration-500 hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
