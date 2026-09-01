import { Link } from "@tanstack/react-router";
import Reveal from "./Reveal";

type Props = {
  label: string;
  action?: { to: string; label: string };
};

/**
 * Hairline that opens each section: a small-caps label on the left, an
 * optional link on the right. Every page uses it rather than inventing its
 * own heading treatment.
 */
export default function SectionRule({ label, action }: Props) {
  return (
    <Reveal>
      {/* Baseline, not items-end: the label and the link are different sizes,
          so bottom-aligning their boxes left the two texts a few px apart. */}
      <div className="flex items-baseline justify-between gap-6 border-t border-line pt-5">
        <h2 className="eyebrow text-ink-soft">{label}</h2>
        {action && (
          <Link
            to={action.to}
            className="link-line text-sm text-muted transition-colors duration-500 hover:text-ink"
          >
            {action.label}
          </Link>
        )}
      </div>
    </Reveal>
  );
}
