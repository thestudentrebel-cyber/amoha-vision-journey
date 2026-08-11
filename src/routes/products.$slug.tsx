import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { ButtonLink } from "@/components/ui/CineButton";
import { getProduct, PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Product"} — Amoha Herbals` },
      {
        name: "description",
        content: loaderData?.description ?? "Product details from Amoha Herbals private label range.",
      },
      { property: "og:title", content: `${loaderData?.name ?? "Product"} — Amoha Herbals` },
      { property: "og:description", content: loaderData?.description ?? "Amoha Herbals private label product." },
    ],
  }),
  component: ProductDetail,
});

function ProductDetail() {
  const product = Route.useLoaderData();
  const related = PRODUCTS.filter((p) => p.categoryId === product.categoryId && p.slug !== product.slug);

  return (
    <SiteLayout>
      <PageHero eyebrow={product.category} title={product.name} intro={product.description} />
      <section className="mx-auto max-w-[1400px] px-5 pb-28 lg:px-10">
        <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
          <div className="bg-background p-8">
            <dt className="eyebrow text-muted-foreground">Category</dt>
            <dd className="mt-4 text-lg">{product.category}</dd>
          </div>
          <div className="bg-background p-8">
            <dt className="eyebrow text-muted-foreground">Packaging</dt>
            <dd className="mt-4 text-lg">{product.packaging ?? "Details on request"}</dd>
          </div>
        </dl>
        {product.placeholder ? (
          <p className="mt-8 border-l-2 border-accent pl-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Placeholder entry — full product information to be supplied by Amoha Herbals.
          </p>
        ) : null}
        <div className="mt-12">
          <ButtonLink to="/contact">Enquire about this product</ButtonLink>
        </div>

        {related.length ? (
          <div className="mt-24">
            <h2 className="eyebrow text-muted-foreground">More in {product.category}</h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: r.slug }}
                    className="display block py-6 text-3xl transition-colors hover:text-accent"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
    </SiteLayout>
  );
}
