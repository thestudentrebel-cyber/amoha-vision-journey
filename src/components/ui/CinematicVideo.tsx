import { useEffect, useRef } from "react";
import type { CinematicClip } from "@/data/videos";

type Props = {
  clip: CinematicClip;
  /** global scroll progress 0..1 */
  progress: number;
  priority?: boolean;
};

const opacityFor = (p: number, [inP, outP]: [number, number]) => {
  const fade = 0.05;
  if (p < inP - fade || p > outP + fade) return 0;
  const rise = Math.min(1, Math.max(0, (p - (inP - fade)) / fade));
  const fall = Math.min(1, Math.max(0, (outP + fade - p) / fade));
  return Math.min(rise, fall);
};

/** Layered, crossfading background video controlled by scroll progress. */
export function CinematicVideo({ clip, progress, priority = false }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const opacity = opacityFor(progress, clip.range);

  useEffect(() => {
    const el = wrapRef.current;
    if (el) el.style.opacity = String(opacity);
    const v = videoRef.current;
    if (!v) return;
    if (opacity > 0.02) {
      if (v.paused) void v.play().catch(() => undefined);
    } else if (!v.paused) {
      v.pause();
    }
  }, [opacity]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="absolute inset-0 cine-fade"
      style={{ opacity: 0 }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={clip.src}
        poster={clip.poster}
        muted
        loop
        playsInline
        autoPlay={priority}
        preload={priority ? "auto" : "metadata"}
        onError={(e) => {
          const v = e.currentTarget;
          v.style.display = "none";
          if (v.parentElement) {
            v.parentElement.style.backgroundImage = `url(${clip.poster})`;
            v.parentElement.style.backgroundSize = "cover";
            v.parentElement.style.backgroundPosition = "center";
          }
        }}
      />
    </div>
  );
}
