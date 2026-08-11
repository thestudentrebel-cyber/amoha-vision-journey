import { useEffect, useRef, useState } from "react";

/** Global cinematic scroll progress driven by Lenis; 0 at page top, 1 at end. */
export function useCinematicScroll() {
  const [progress, setProgress] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let frame = 0;
    let mounted = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const compute = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (Math.abs(p - ref.current) > 0.0005) {
        ref.current = p;
        setProgress(p);
      }
    };

    const start = async () => {
      if (!reduced) {
        const { default: Lenis } = await import("lenis");
        if (!mounted) return;
        const instance = new Lenis({ duration: 1.15, smoothWheel: true });
        lenis = instance as unknown as { raf: (t: number) => void; destroy: () => void };
        const raf = (time: number) => {
          instance.raf(time);
          compute();
          frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
      } else {
        window.addEventListener("scroll", compute, { passive: true });
      }
      compute();
    };

    void start();
    window.addEventListener("resize", compute);

    return () => {
      mounted = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", compute);
      window.removeEventListener("scroll", compute);
      lenis?.destroy();
    };
  }, []);

  return progress;
}

/** Maps global progress into a local 0..1 range. */
export const rangeProgress = (p: number, start: number, end: number) =>
  Math.min(1, Math.max(0, (p - start) / (end - start)));

/** Progress of a tall sticky section: 0 when its top hits the viewport top, 1 at its end. */
export function useSectionProgress(ref: { current: HTMLElement | null }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        setProgress((prev) => (Math.abs(prev - p) > 0.0005 ? p : prev));
      }
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [ref]);

  return progress;
}
