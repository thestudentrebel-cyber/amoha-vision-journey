import { useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CORE_AREAS = [
  "Contract Manufacturing",
  "Private Label Products",
  "FDA Compliant",
  "FSSAI Compliant",
  "GMP Certified",
  "ISO 9001:2015",
  "Product Development",
  "Regulatory Compliance",
  "Certified Testing Lab",
  "Dermatological Testing Available",
];

/** Core areas rendered as interactive 3D tilt cards. */
export function CoreAreas() {
  return (
    <section id="core-areas" className="bg-charcoal py-24 text-onDark lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Core Areas"
          title="Capability, compliance and craft."
          intro="The core areas that define how Amoha Herbals builds and certifies products for its partner brands."
          onFilm
        />
        <div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          style={{ perspective: "1200px" }}
        >
          {CORE_AREAS.map((area, i) => (
            <TiltCard key={area} label={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ label, index }: { label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: -py * 14, y: px * 16, active: true });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0, active: false })}
      className="group relative rounded-sm border border-onDark/15 bg-onDark/[0.04] p-6 transition-colors duration-500 hover:border-accent/60"
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${tilt.active ? 18 : 0}px)`,
        transition: "transform 350ms cubic-bezier(.2,.7,.2,1), border-color 500ms",
      }}
    >
      <span className="text-[0.62rem] uppercase tracking-[0.26em] text-onDark/40">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="display mt-4 text-xl leading-snug text-onDark">{label}</p>
      <span
        aria-hidden="true"
        className="mt-5 block h-px w-8 bg-accent transition-all duration-500 group-hover:w-full"
      />
    </div>
  );
}
