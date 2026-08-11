import { useEffect, useState } from "react";

export function useResponsive() {
  const [state, setState] = useState({ isMobile: false, reducedMotion: false, hydrated: false });

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 768px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setState({ isMobile: mqMobile.matches, reducedMotion: mqMotion.matches, hydrated: true });
    update();
    mqMobile.addEventListener("change", update);
    mqMotion.addEventListener("change", update);
    return () => {
      mqMobile.removeEventListener("change", update);
      mqMotion.removeEventListener("change", update);
    };
  }, []);

  return state;
}

/** Subtle, clamped pointer parallax. Disabled on mobile / reduced motion. */
export function usePointerParallax(enabled: boolean) {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return pointer;
}
