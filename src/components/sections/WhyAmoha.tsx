import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    title: "Private label",
    body: "Products developed and manufactured for brands to sell under their own label.",
  },
  {
    title: "Contract manufacturing",
    body: "Manufacturing carried out to your product brief across approved categories.",
  },
  {
    title: "Category breadth",
    body: "Ayurvedic, cosmetics, colour cosmetics, food, home care and personal care.",
  },
  {
    title: "End-to-end support",
    body: "From concept and formulation through to manufacturing and packaging.",
  },
];

export function WhyAmoha() {
  return (
    <section className="bg-charcoal py-24 text-onDark lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Why Amoha"
          title="A manufacturing partner, not a supplier."
          intro="The capabilities below reflect Amoha Herbals' stated scope of work. Detailed capability information is shared directly on enquiry."
          onFilm
        />
        <div className="mt-16 grid gap-px border border-onDark/15 bg-onDark/15 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="bg-charcoal p-8">
              <h3 className="display text-2xl text-onDark">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-onDark/70">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
