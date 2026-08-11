import { Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/CineButton";

/** Editorial, layered product presentation (not a grid). */
export function ProductUniverse() {
  const featured = PRODUCTS.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Product Universe"
          title="A product range shaped around your label."
          intro="Formats across Ayurvedic, cosmetic, colour cosmetic, food, home-care and personal-care categories. Detailed specifications are shared on enquiry."
        />

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {featured.map((product, i) => (
            <li key={product.slug}>
              <Link
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="group flex flex-wrap items-baseline justify-between gap-4 py-8 transition-colors hover:text-accent"
              >
                <span className="flex items-baseline gap-6">
                  <span className="text-[0.66rem] tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-3xl sm:text-4xl lg:text-5xl">{product.name}</span>
                </span>
                <span className="eyebrow text-muted-foreground group-hover:text-accent">{product.category}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <ButtonLink to="/catalog" variant="ghost">
            View full catalog
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
