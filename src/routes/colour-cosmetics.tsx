import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { ButtonLink } from "@/components/ui/CineButton";
import revealClip from "@/assets/02-product-reveal.mp4.asset.json";
import revealPoster from "@/assets/02-product-reveal-poster.jpg.asset.json";

export const Route = createFileRoute("/colour-cosmetics")({
  head: () => ({
    meta: [
      { title: "Amoha Colour Cosmetics — Colour-Led Private Label" },
      {
        name: "description",
        content:
          "Amoha Colour Cosmetics is the colour-led division of Amoha Herbals, developing colour cosmetic formats for private label brands.",
      },
      { property: "og:title", content: "Amoha Colour Cosmetics" },
      { property: "og:description", content: "Colour cosmetic development and manufacturing for private label brands." },
    ],
  }),
  component: ColourCosmetics,
});

function ColourCosmetics() {
  return (
    <SiteLayout>
      <section className="relative h-[70vh] overflow-hidden bg-charcoal">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src={revealClip.url}
          poster={revealPoster.url}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-charcoal/55" aria-hidden="true" />
        <div className="relative flex h-full flex-col justify-end px-5 pb-16 lg:px-10">
          <p className="eyebrow text-onDark/70">Amoha Colour Cosmetics</p>
          <h1 className="display mt-6 max-w-3xl text-5xl text-onDark lg:text-7xl">
            Colour, developed
            <br />
            for your brand.
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Amoha Colour Cosmetics is the colour-led part of Amoha Herbals' private label and contract manufacturing
          offer. Shade ranges, formats and finishes are developed against your brief — no standard shade library is
          published here.
        </p>
        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
          {[
            { t: "Pigment", b: "Colour direction defined with your brand's positioning." },
            { t: "Texture", b: "Format and texture developed during the formulation stage." },
            { t: "Presentation", b: "Packaging and finishing aligned to the shelf you're selling into." },
          ].map((item) => (
            <article key={item.t} className="bg-background p-10">
              <h2 className="display text-3xl brand-text">{item.t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.b}</p>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <ButtonLink to="/contact">Start a colour project</ButtonLink>
        </div>
      </section>
    </SiteLayout>
  );
}
