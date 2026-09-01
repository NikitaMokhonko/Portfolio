import { Link } from "@tanstack/react-router";
import Reveal from "./Reveal";

type Props = {
  label: string;
  action?: { to: string; label: string };
};

/**
 * Hairline that opens each section: the label on the left, an optional link
 * on the right. Every page uses it rather than inventing its own heading
 * treatment.
 *
 * The label is set in the display serif rather than as an eyebrow. At
 * eyebrow size it sat at the same weight as the field labels inside a case
 * study and stopped reading as a divider at all.
 */
export default function SectionRule({ label, action }: Props) {
  return (
    <Reveal>
      {/* Baseline, not items-end: the label and the link are different sizes,
          so bottom-aligning their boxes left the two texts a few px apart. */}
      <div className="flex items-baseline justify-between gap-6 border-t border-line pt-5">
        <h2 className="font-display text-[clamp(1.25rem,1.1rem+0.5vw,1.625rem)] leading-none tracking-[-0.02em] text-ink">
          {label}
        </h2>
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
