import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "nm-theme";

/**
 * Reads the theme the inline script in index.html already resolved and wrote
 * to <html data-theme>. Going through the DOM rather than re-deriving from
 * storage keeps React and the pre-paint script from ever disagreeing.
 */
function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  // The toggle is an explicit choice, so it wins over the OS from then on.
  const apply = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing: the theme still applies, it just won't persist.
    }
    setTheme(next);
  }, []);

  const toggle = useCallback(
    () => apply(currentTheme() === "dark" ? "light" : "dark"),
    [apply],
  );

  // Follow the OS only while the visitor hasn't made a choice of their own.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        stored = null;
      }
      if (stored === "light" || stored === "dark") return;
      const next: Theme = event.matches ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      document.documentElement.style.colorScheme = next;
      setTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return { theme, toggle };
}
