import { JOURNEY } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRef } from "react";
import { useSectionProgress } from "@/hooks/useCinematicScroll";

/** Signature private-label transformation: idea → formulation → branding → packaging → finished product. */
export function PrivateLabel() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSectionProgress(ref);
  const activeIndex = Math.min(JOURNEY.length - 1, Math.floor(progress * JOURNEY.length));

  return (
    <section ref={ref} className="relative bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Private Label"
          title={
            <>
              Your idea.
              <br />
              Our expertise.
            </>
          }
          intro="Amoha Herbals takes a product concept through formulation, manufacturing and packaging so it can reach the market under your own brand."
        />

        <ol className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-5">
          {JOURNEY.map((stage, i) => {
            const isActive = i <= activeIndex;
            return (
              <li
                key={stage.id}
                className={`bg-background p-8 transition-all duration-700 ${
                  isActive ? "opacity-100" : "opacity-45"
                }`}
              >
                <span className="text-[0.66rem] tracking-[0.24em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`display mt-6 text-2xl ${isActive ? "text-accent" : "text-foreground"}`}>
                  {stage.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
