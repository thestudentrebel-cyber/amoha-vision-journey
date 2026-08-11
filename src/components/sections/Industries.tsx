import { useRef, useState } from "react";
import { INDUSTRIES } from "@/data/industries";
import { useSectionProgress } from "@/hooks/useCinematicScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Premium orbital ecosystem: scroll rotates the orbit, hover/click activates a category. */
export function Industries() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSectionProgress(ref);
  const [hovered, setHovered] = useState<string | null>(null);

  const count = INDUSTRIES.length;
  const auto = Math.round(progress * (count - 0.001) * 1) % count;
  const fallback = INDUSTRIES[0] as (typeof INDUSTRIES)[number];
  const activeId = hovered ?? INDUSTRIES[auto]?.id ?? fallback.id;
  const active = INDUSTRIES.find((i) => i.id === activeId) ?? fallback;

  return (
    <section ref={ref} id="industries" className="relative bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Industries"
          title="One partner. Six categories."
          intro="Amoha Herbals develops and manufactures across the categories below under private label and contract manufacturing arrangements."
        />

        <div className="mt-16 grid items-center gap-16 lg:mt-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[12%] rounded-full border border-border" aria-hidden="true" />
            <div className="absolute inset-[26%] rounded-full border border-border/70" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="display text-3xl tracking-[0.14em]">AMOHA</span>
            </div>
            <ul
              className="absolute inset-0"
              style={{ transform: `rotate(${progress * 120}deg)`, transition: "transform 200ms linear" }}
            >
              {INDUSTRIES.map((industry, i) => {
                const angle = (i / count) * Math.PI * 2;
                const x = (50 + Math.cos(angle) * 42).toFixed(3);
                const y = (50 + Math.sin(angle) * 42).toFixed(3);
                const isActive = industry.id === activeId;
                return (
                  <li
                    key={industry.id}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setHovered(industry.id)}
                      onFocus={() => setHovered(industry.id)}
                      onMouseLeave={() => setHovered(null)}
                      onBlur={() => setHovered(null)}
                      aria-pressed={isActive}
                      className={`whitespace-nowrap rounded-full border px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] transition-all duration-500 ${
                        isActive
                          ? "scale-110 border-accent bg-accent text-accent-foreground"
                          : "border-border bg-card text-muted-foreground opacity-70 hover:opacity-100"
                      }`}
                      style={{ transform: `rotate(${-progress * 120}deg)` }}
                    >
                      {industry.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Selected category</p>
            <h3 className="display mt-5 text-4xl lg:text-5xl">{active.name}</h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{active.summary}</p>
            <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id} className="bg-background px-5 py-4 text-xs uppercase tracking-[0.18em]">
                  {industry.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
