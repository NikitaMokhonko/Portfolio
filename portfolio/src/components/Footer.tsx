import { Link } from "@tanstack/react-router";
import { SiGithub, SiLinkedin, SiInstagram } from "./Icons";
import { site } from "@/data/site";

const socials = [
  { Icon: SiLinkedin, href: site.links.linkedin, label: "LinkedIn" },
  { Icon: SiGithub, href: site.links.github, label: "GitHub" },
  { Icon: SiInstagram, href: site.links.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="shell py-12 sm:py-14">
        {/* Nav one side, socials the other. With the address removed there is
            only one child left, so the columns have to be siblings or the
            whole block collapses to the left. */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer" className="flex gap-8 text-sm">
            <Link
              to="/projects"
              className="link-line text-ink-soft hover:text-ink"
            >
              Work
            </Link>
            <Link to="/about" className="link-line text-ink-soft hover:text-ink">
              About
            </Link>
            <Link
              to="/contact"
              className="link-line text-ink-soft hover:text-ink"
            >
              Contact
            </Link>
          </nav>

          <ul className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
