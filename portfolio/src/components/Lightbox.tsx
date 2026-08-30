import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  images: string[];
  title: string;
};

export default function Lightbox({ images, title }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Where focus came from, so it can go back there on close (WCAG 2.4.3).
  const opener = useRef<HTMLElement | null>(null);

  const openAt = (index: number, trigger: HTMLElement) => {
    opener.current = trigger;
    setOpen(index);
  };

  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) =>
      setOpen((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key === "ArrowRight") {
        step(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        step(-1);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      // Keep Tab inside the dialog while it is open.
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled])",
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
  }, [open, close, step]);

  return (
    <>
      <ul
        className={`grid gap-4 ${
          images.length === 1
            ? ""
            : images.length === 2
              ? "sm:grid-cols-2"
              : "sm:grid-cols-3"
        }`}
      >
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={(event) => openAt(i, event.currentTarget)}
              aria-label={`View ${title} screenshot ${i + 1} full size`}
              className="group block w-full overflow-hidden rounded-lg border border-line bg-surface-2 transition-colors duration-500 hover:border-line-strong"
            >
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      {open !== null &&
        // Portalled to the body: a transformed or will-change ancestor would
        // otherwise become the containing block and the overlay would only
        // cover part of the screen.
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot ${open + 1} of ${images.length}`}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-4 backdrop-blur-xl sm:p-10"
            style={{ animation: "fade-in 260ms ease-out both" }}
          >
            <img
              src={images[open]}
              alt={`${title} screenshot ${open + 1}`}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full rounded-lg border border-line object-contain shadow-float"
            />

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-line bg-bg text-ink transition-colors hover:border-line-strong sm:right-8 sm:top-8"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                &times;
              </span>
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg text-ink transition-colors hover:border-line-strong sm:left-8"
                >
                  <span aria-hidden="true">&#8592;</span>
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg text-ink transition-colors hover:border-line-strong sm:right-8"
                >
                  <span aria-hidden="true">&#8594;</span>
                </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
