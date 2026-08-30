import { useEffect, useMemo, useState } from "react";
import Ribbons from "./Ribbon";
import { useTheme } from "@/lib/theme";

/**
 * Wraps the WebGL ribbon so it picks up the theme's ink colour instead of a
 * hardcoded black that vanishes on the dark background. Remounting on theme
 * change is cheap here and avoids reaching into the renderer's uniforms.
 */
export default function CursorRibbon() {
  const { theme } = useTheme();
  const [ink, setInk] = useState("#17160f");

  useEffect(() => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--ink")
      .trim();
    if (value) setInk(value);
  }, [theme]);

  // A new array literal every render would tear down and rebuild the whole
  // GL context, since `colors` is in the effect's dependency list.
  const colors = useMemo(() => [ink], [ink]);

  return (
    <Ribbons
      key={theme}
      colors={colors}
      baseThickness={9}
      speedMultiplier={0.4}
      maxAge={500}
      enableFade
      enableShaderEffect={false}
    />
  );
}
