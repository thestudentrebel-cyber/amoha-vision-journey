import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { ButtonLink } from "@/components/ui/CineButton";
import packagingClip from "@/assets/05-packaging-final.mp4.asset.json";
import packagingPoster from "@/assets/05-packaging-final-poster.jpg.asset.json";

export const Route = createFileRoute("/packaging")({
  head: () => ({
    meta: [
      { title: "Packaging — Amoha Herbals" },
      {
        name: "description",
        content:
          "Packaging and finishing at Amoha Herbals: bottles, jars, tubes and cartons that give a private label product its shelf identity.",
      },
      { property: "og:title", content: "Packaging — Amoha Herbals" },
      { property: "og:description", content: "Packaging formats and finishing for private label products." },
    ],
  }),
  component: PackagingPage,
});

const FORMATS = ["Bottles", "Jars", "Tubes", "Cartons"];

function PackagingPage() {
  return (
    <SiteLayout>
      <section className="relative h-[70vh] overflow-hidden bg-charcoal">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src={packagingClip.url}
          poster={packagingPoster.url}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-charcoal/50" aria-hidden="true" />
        <div className="relative flex h-full flex-col justify-end px-5 pb-16 lg:px-10">
          <p className="eyebrow text-onDark/70">Packaging</p>
          <h1 className="display mt-6 max-w-3xl text-5xl text-onDark lg:text-7xl">
            The last step before the shelf.
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Packaging completes the private label journey — the point where a formulation becomes a recognisable product.
          Specific packaging options, materials and finishes are confirmed during your project brief.
        </p>
        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FORMATS.map((format) => (
            <li key={format} className="bg-background p-10">
              <h2 className="display text-3xl">{format}</h2>
              <p className="mt-4 text-sm text-muted-foreground">Available formats confirmed on enquiry.</p>
            </li>
          ))}
        </ul>
        <div className="mt-14">
          <ButtonLink to="/contact">Discuss packaging</ButtonLink>
        </div>
      </section>
    </SiteLayout>
  );
}
