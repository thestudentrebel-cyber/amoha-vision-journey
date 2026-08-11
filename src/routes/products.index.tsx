import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Amoha Herbals Private Label Range" },
      {
        name: "description",
        content:
          "Browse Amoha Herbals product formats across Ayurvedic, cosmetic, colour cosmetic, food, home-care and personal-care categories.",
      },
      { property: "og:title", content: "Products — Amoha Herbals" },
      { property: "og:description", content: "Product formats available for private label development." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const results = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          (p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())),
      ),
    [query, category],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        title="Formats ready for your label."
        intro="Product specifications, ingredients and packaging details are shared directly on enquiry."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-28 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 border-y border-border py-6">
          <div className="flex flex-wrap gap-2">
            {["All", ...PRODUCT_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] transition-colors ${
                  category === c
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3">
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="w-56 border-b border-border bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
            />
          </label>
        </div>

        <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {results.map((product) => (
            <li key={product.slug} className="bg-background">
              <Link
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="group flex h-full flex-col justify-between p-8 transition-colors hover:bg-secondary"
              >
                <div>
                  <p className="eyebrow text-muted-foreground">{product.category}</p>
                  <h2 className="display mt-5 text-3xl group-hover:text-accent">{product.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                </div>
                <span className="mt-10 text-[0.66rem] uppercase tracking-[0.24em] text-foreground">View details</span>
              </Link>
            </li>
          ))}
        </ul>
        {results.length === 0 ? (
          <p className="mt-12 text-sm text-muted-foreground">No products match that search.</p>
        ) : null}
      </section>
    </SiteLayout>
  );
}
