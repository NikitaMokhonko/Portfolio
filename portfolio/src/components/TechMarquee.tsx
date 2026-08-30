import type { CSSProperties } from "react";
import { stack } from "@/data/site";

/**
 * Replaces the old TechDeck, which measured window.innerWidth during render
 * and so laid out wrong after any resize. This is pure CSS: the list is
 * duplicated once and the track translates -50%, which loops seamlessly at
 * any viewport width.
 */
export default function TechMarquee() {
  const items = [...stack, ...stack];

  return (
    <div
      className="marquee relative overflow-hidden py-2"
      style={{ "--marquee-duration": "48s" } as CSSProperties}
    >
      {/* Fade the edges into the page background rather than cutting hard */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-bg via-bg to-transparent sm:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-bg via-bg to-transparent sm:w-40"
      />

      {/* No chips: at this size the names read as typography, and the
          hairline separators keep the rhythm without boxing every item. */}
      <ul className="marquee-track flex w-max items-center">
        {items.map((item, i) => (
          <li
            key={`${item.name}-${i}`}
            aria-hidden={i >= stack.length ? "true" : undefined}
            className="group flex shrink-0 items-center gap-3.5 border-l border-line px-8"
          >
            <item.Icon
              className="text-lg opacity-70 transition-all duration-500 group-hover:opacity-100"
              style={{ color: item.color }}
              aria-hidden="true"
            />
            <span className="whitespace-nowrap font-display text-xl text-ink-soft transition-colors duration-500 group-hover:text-ink">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
