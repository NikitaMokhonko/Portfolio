import { Link } from "@tanstack/react-router";
import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  action?: { to: string; label: string };
};

/**
 * Numbered hairline that opens each section. The oversized numeral against
 * the small-caps label is what makes a page read as composed rather than
 * merely sparse — it is the site's main structural device, so every page
 * uses it rather than inventing its own heading treatment.
 */
export default function SectionRule({ index, label, action }: Props) {
  return (
    <Reveal>
      <div className="flex items-end justify-between gap-6 border-t border-line pt-5">
        <div className="flex items-baseline gap-5">
          <span
            aria-hidden="true"
            className="font-display text-3xl leading-none tabular-nums text-numeral sm:text-4xl"
          >
            {index}
          </span>
          <h2 className="eyebrow pb-1">{label}</h2>
        </div>
        {action && (
          <Link
            to={action.to}
            className="link-line pb-1 text-sm text-muted transition-colors duration-500 hover:text-ink"
          >
            {action.label}
          </Link>
        )}
      </div>
    </Reveal>
  );
}
