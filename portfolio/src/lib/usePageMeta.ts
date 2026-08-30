import { useEffect } from "react";
import { site } from "@/data/site";

/**
 * WCAG 2.4.2 (Page Titled): a single-page app keeps the same document title
 * across navigations unless something updates it. Each route calls this with
 * its own title, which also feeds the route announcement in __root.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} — ${site.name}`;

    if (!description) return;
    const tag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (tag) tag.content = description;
  }, [title, description]);
}
