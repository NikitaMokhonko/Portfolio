import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/data/site";

const nav = [
  { label: "Work", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export default function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the drawer on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Solidify on scroll, and get out of the way when scrolling down.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the drawer is open: lock the page, close on Escape, keep focus in.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled || open
            ? "border-b border-line bg-bg/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — home`}
          >
            {/* The monogram has generous internal padding, so it needs
                scaling up inside a clipped box to read at nav size. */}
            <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden">
              <img
                src="/nm-transparent.png"
                alt=""
                width={36}
                height={36}
                className="h-full w-full scale-[1.9] object-contain transition-transform duration-500 group-hover:scale-[2.05] dark:invert"
              />
            </span>
            <span className="font-display text-lg leading-none tracking-tight sm:text-xl">
              {site.name}
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 sm:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                data-active={isActive(item.to)}
                aria-current={isActive(item.to) ? "page" : undefined}
                className="link-line text-[0.95rem] text-ink-soft transition-colors duration-300 hover:text-ink data-[active=true]:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-9 w-9 place-items-center rounded-full border border-line"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-4 bg-ink transition-all duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-ink transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        ref={panelRef}
        className={`sm:hidden overflow-hidden border-b border-line bg-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-4">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              tabIndex={open ? 0 : -1}
              aria-current={isActive(item.to) ? "page" : undefined}
              style={{ transitionDelay: `${open ? i * 60 + 60 : 0}ms` }}
              className={`block border-b border-line py-4 font-display text-2xl transition-all duration-500 last:border-b-0 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              } ${isActive(item.to) ? "text-accent" : "text-ink"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
