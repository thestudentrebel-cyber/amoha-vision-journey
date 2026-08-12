import { useRef } from "react";
import { CinematicVideo } from "@/components/ui/CinematicVideo";
import { useSectionProgress } from "@/hooks/useCinematicScroll";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { ButtonLink } from "@/components/ui/CineButton";
import { CINEMATIC_CLIPS, HERO_POSTER } from "@/data/videos";
import { COMPANY } from "@/data/navigation";
import { JOURNEY } from "@/data/industries";
import logo from "@/assets/amoha-logo.png.asset.json";

type Beat = {
  id: string;
  range: [number, number];
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
};

const BEATS: Beat[] = [
  {
    id: "product-reveal",
    range: [0.2, 0.33],
    eyebrow: "The Product",
    title: "Built around\nyour brand.",
    body: "Every programme begins with a product brief and ends with a finished, branded product.",
    align: "left",
  },
  {
    id: "nature",
    range: [0.39, 0.52],
    eyebrow: "Nature",
    title: "From nature\nto formulation.",
    body: "Botanical inputs move into a controlled formulation and development process.",
    align: "left",
  },
  {
    id: "formulation",
    range: [0.57, 0.66],
    eyebrow: "Formulation",
    title: "Concept.\nFormulation.\nDevelopment.",
    body: "Product concepts are developed into workable formulations for your category.",
    align: "left",
  },
  {
    id: "manufacturing",
    range: [0.7, 0.79],
    eyebrow: "Manufacturing",
    title: "Contract\nmanufacturing.",
    body: "Production is carried out under Amoha's contract manufacturing arrangements.",
    align: "left",
  },
  {
    id: "packaging",
    range: [0.83, 0.9],
    eyebrow: "Packaging",
    title: "Your idea.\nOur expertise.",
    body: "Packaging and finishing complete the product's shelf identity.",
    align: "left",
  },
  {
    id: "cta",
    range: [0.94, 1.01],
    eyebrow: "Let's begin",
    title: "Ready to build\nyour brand?",
    align: "center",
  },
];

const beatOpacity = (p: number, [a, b]: [number, number]) => {
  const f = 0.03;
  if (p < a - f || p > b + f) return 0;
  return Math.min(1, Math.max(0, (p - (a - f)) / f), Math.max(0, (b + f - p) / f));
};

export function CinematicJourney({
  pointer,
  isMobile,
  reducedMotion,
}: {
  pointer: { x: number; y: number };
  isMobile: boolean;
  reducedMotion: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);

  const drift = isMobile || reducedMotion ? { x: 0, y: 0 } : { x: pointer.x * 8, y: pointer.y * 6 };
  const heroOpacity = 1 - Math.min(1, progress / 0.1);

  return (
    <section ref={sectionRef} aria-label="Amoha Herbals cinematic journey" className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-charcoal film-grain">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_POSTER})` }}
          aria-hidden="true"
        />
        {CINEMATIC_CLIPS.map((clip, i) => (
          <CinematicVideo key={clip.id} clip={clip} progress={progress} priority={i === 0} />
        ))}

        <div className="absolute inset-0 bg-charcoal/55" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.18 0.008 60 / 0.7) 0%, oklch(0.18 0.008 60 / 0.35) 55%, transparent 100%)",
          }}
        />

        {/* Hero copy */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-5 pb-28 pt-24 text-center cine-fade lg:items-start lg:px-20 lg:text-left"
          style={{
            opacity: heroOpacity,
            pointerEvents: heroOpacity < 0.2 ? "none" : "auto",
            transform: `translate3d(${drift.x}px, ${drift.y}px, 0)`,
          }}
        >
          <img src={logo.url} alt="Amoha Herbals Pvt Ltd" className="h-10 w-auto brightness-0 invert lg:h-14" />
          <h1 className="display mt-8 text-4xl leading-[1.05] text-onDark sm:text-6xl lg:max-w-3xl lg:text-8xl">
            Crafting products.
            <br />
            Building brands.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-onDark/80 sm:text-base">{COMPANY.positioning}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <ButtonLink to="/contact" variant="onFilm">
              Start your brand
            </ButtonLink>
            <ButtonLink to="/products" variant="onFilm">
              Explore products
            </ButtonLink>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center cine-fade lg:hidden"
          style={{ opacity: heroOpacity }}
        >
          <ScrollIndicator />
        </div>

        {/* Scroll beats */}
        {BEATS.map((beat) => {
          const o = beatOpacity(progress, beat.range);
          return (
            <div
              key={beat.id}
              className={`absolute inset-0 flex items-center px-6 pb-28 pt-24 cine-fade lg:px-20 ${
                beat.align === "center" ? "justify-center text-center" : "justify-start"
              }`}
              style={{
                opacity: o,
                pointerEvents: o > 0.5 ? "auto" : "none",
                transform: `translate3d(${drift.x}px, ${drift.y}px, 0)`,
              }}
              aria-hidden={o < 0.5}
            >
              <div className="max-w-xl">
                {beat.eyebrow ? <p className="eyebrow text-onDark/70">{beat.eyebrow}</p> : null}
                <h2 className="display mt-5 whitespace-pre-line text-3xl leading-[1.05] text-onDark sm:text-5xl lg:text-7xl">
                  {beat.title}
                </h2>
                {beat.body ? (
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-onDark/80">{beat.body}</p>
                ) : null}
                {beat.id === "cta" ? (
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <ButtonLink to="/contact" variant="onFilm">
                      Start your project
                    </ButtonLink>
                    <ButtonLink to="/products" variant="onFilm">
                      Explore products
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}

        {/* Journey progress rail */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden w-[60vw] -translate-x-1/2 lg:block" aria-hidden="true">
          <div className="h-px w-full bg-onDark/20">
            <div className="h-px bg-onDark/70" style={{ width: `${progress * 100}%` }} />
          </div>
          <div className="mt-3 flex justify-between text-[0.6rem] uppercase tracking-[0.26em] text-onDark/50">
            {JOURNEY.map((s) => (
              <span key={s.id}>{s.title}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[700vh]" aria-hidden="true" />
    </section>
  );
}
