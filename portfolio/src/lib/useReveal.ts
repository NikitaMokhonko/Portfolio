import { useEffect } from "react";

/**
 * Reveals `.reveal` elements as they enter the viewport.
 *
 * A single effect-time scan is not enough: with view transitions enabled the
 * router defers the DOM swap into `document.startViewTransition()`, so this
 * effect can run while the outgoing route is still mounted. The scan would
 * then bind the old nodes, they would unmount, and the incoming page would
 * sit at opacity 0 until a reload. So the scan repeats whenever nodes are
 * added, and each element is bound exactly once.
 */
export function useReveal(key?: unknown) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    const bind = (node: HTMLElement) => {
      if (node.dataset.revealBound) return;
      node.dataset.revealBound = "1";

      if (reduced.matches) {
        node.classList.add("is-in");
        return;
      }

      // Visible on arrival reveals now. This tests the whole viewport, not
      // the top of it: the observer's negative bottom margin excludes the
      // lowest slice of the screen, so an element sitting there would never
      // intersect and would stay hidden.
      const box = node.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom > 0) {
        node.classList.add("is-in");
        return;
      }

      observer.observe(node);
    };

    const scan = () =>
      document.querySelectorAll<HTMLElement>(".reveal").forEach(bind);

    // Deliberately synchronous, and debounced with a microtask rather than
    // a frame: requestAnimationFrame does not fire in a background tab, so
    // a page opened in one would render every revealed element invisible.
    let queued = false;
    const scheduleScan = () => {
      if (queued) return;
      queued = true;
      queueMicrotask(() => {
        queued = false;
        scan();
      });
    };

    scan();

    const mutations = new MutationObserver(scheduleScan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [key]);
}
