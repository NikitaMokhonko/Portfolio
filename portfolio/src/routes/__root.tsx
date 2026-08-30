import { Outlet, createRootRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import CursorRibbon from "@/components/CursorRibbon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useReveal } from "@/lib/useReveal";

function RootLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Re-scan for `.reveal` nodes whenever the route changes.
  useReveal(pathname);

  return (
    <div className="grain flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:text-accent-ink"
      >
        Skip to content
      </a>

      <div aria-hidden="true" className="scroll-progress" />

      <Header />

      <main
        id="main"
        key={pathname}
        tabIndex={-1}
        className="page-enter flex-1 pt-16 sm:pt-20"
      >
        <Outlet />
      </main>

      <Footer />
      <CursorRibbon />
      <RouteAnnouncer pathname={pathname} />
    </div>
  );
}

/**
 * A client-side navigation replaces the page without a load event, so screen
 * readers say nothing. This reads the new document title into a live region
 * once the route has settled.
 */
function RouteAnnouncer({ pathname }: { pathname: string }) {
  const [message, setMessage] = useState("");
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      // The initial page load is announced by the browser already.
      first.current = false;
      return;
    }
    // usePageMeta runs in the route's own effect; wait a tick for the title.
    const id = window.setTimeout(() => setMessage(document.title), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </div>
  );
}

export const Route = createRootRoute({ component: RootLayout });
