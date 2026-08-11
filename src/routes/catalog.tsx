import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { ButtonLink } from "@/components/ui/CineButton";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog — Amoha Herbals Product Categories" },
      {
        name: "description",
        content: "The Amoha Herbals catalog, organised by manufacturing category. Request the full catalog on enquiry.",
      },
      { property: "og:title", content: "Catalog — Amoha Herbals" },
      { property: "og:description", content: "Product categories available for private label manufacturing." },
    ],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Catalog"
        title="The full range, by category."
        intro="The downloadable catalog file will be published here once supplied by Amoha Herbals."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-28 lg:px-10">
        <div className="space-y-16">
          {PRODUCT_CATEGORIES.map((category) => (
            <div key={category}>
              <h2 className="display border-b border-border pb-4 text-3xl">{category}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PRODUCTS.filter((p) => p.category === category).map((p) => (
                  <li key={p.slug} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="text-foreground">{p.name}</span>
                    <br />
                    {p.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <ButtonLink to="/contact">Request the catalog</ButtonLink>
        </div>
      </section>
    </SiteLayout>
  );
}
