import { createFileRoute } from "@tanstack/react-router";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { usePageMeta } from "@/lib/usePageMeta";

export const Route = createFileRoute("/contact")({ component: Contact });

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Fastest way to reach me",
  },
  {
    label: "LinkedIn",
    value: "in/nikitamokhonko",
    href: site.links.linkedin,
    note: "Full history and recommendations",
  },
  {
    label: "GitHub",
    value: "nikitamokhonko",
    href: site.links.github,
    note: "Source for most of the work here",
  },
  {
    label: "Instagram",
    value: "@nikitamokhonko",
    href: site.links.instagram,
    note: "Occasional, and not about work",
  },
];

function Contact() {
  usePageMeta("Contact", "How to reach Nikita Mokhonko.");

  return (
    // Short page: centre it in the viewport rather than letting it hug the
    // top with a void beneath, which is what it looked like on a large screen.
    <div className="shell flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16">
      {/* Heading and list are siblings on one baseline. Previously the left
          column held only a small avatar card, which floated in an otherwise
          empty half. */}
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-start lg:gap-20">
        <header>
          <h1 className="display-lg">Get in touch.</h1>
        </header>

        <ul>
          {channels.map((channel, i) => (
            <Reveal as="li" key={channel.label} delay={i * 70}>
              <a
                href={channel.href}
                target={
                  channel.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel="noopener noreferrer"
                className="group flex items-baseline gap-6 border-b border-line py-5 transition-colors duration-500 first:border-t hover:border-line-strong"
              >
                <span className="w-24 shrink-0 text-sm text-muted">
                  {channel.label}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-ink-soft transition-colors duration-500 group-hover:text-ink">
                    {channel.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    {channel.note}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
                >
                  &#8599;
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
