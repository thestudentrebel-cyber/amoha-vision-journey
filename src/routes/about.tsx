import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { WhyAmoha } from "@/components/sections/WhyAmoha";
import { ButtonLink } from "@/components/ui/CineButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Amoha Herbals — Who We Are" },
      {
        name: "description",
        content:
          "Amoha Herbals Pvt Ltd works with brands as a private label and contract manufacturing partner across Ayurvedic, cosmetic, food and home-care categories.",
      },
      { property: "og:title", content: "About Amoha Herbals" },
      { property: "og:description", content: "Who we are, what we do and how we help brands." },
    ],
  }),
  component: About,
});

const BLOCKS = [
  {
    title: "Who we are",
    body: "Amoha Herbals Pvt Ltd is a private label and contract manufacturing company working across Ayurvedic, cosmetic, colour cosmetic, food, home-care and personal-care categories.",
  },
  {
    title: "What we do",
    body: "We develop and manufacture products to a brand's brief — covering concept, formulation, development, manufacturing and packaging.",
  },
  {
    title: "How we help brands",
    body: "Brands come to us with an idea or a category; they leave with a finished product ready to sell under their own label.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Crafting products. Building brands."
        intro="Company history, facility and certification details will be published here from Amoha's official information."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 lg:px-10">
        <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
          {BLOCKS.map((block) => (
            <article key={block.title} className="bg-background p-10">
              <h2 className="display text-3xl">{block.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{block.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <ButtonLink to="/contact">Work with us</ButtonLink>
        </div>
      </section>
      <WhyAmoha />
    </SiteLayout>
  );
}
