import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/CineButton";

export function LaunchYourBrand() {
  return (
    <section id="launch" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionHeading
          eyebrow="Private Label"
          title="Launch your brand with Amoha Herbals"
          intro="Launch your brand with Amoha — the expert in private label contract manufacturing for Ayurvedic, cosmetic, colour cosmetic, food and home care products. Whether you are a startup or an established brand, we are your trusted partner in creating high-quality, custom-branded products. With reliable, customer-centric services, Amoha empowers entrepreneurs and businesses to build successful private label lines with authenticity and excellence."
        />

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
          <article className="bg-background p-8 lg:p-12">
            <p className="eyebrow text-accent">Vision</p>
            <p className="display mt-6 text-2xl leading-snug text-foreground lg:text-3xl">
              To be a global leader in contract manufacturing, testing, and research &amp; development of cosmetics,
              Ayurvedic formulations and colour cosmetics.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Delivering innovative, safe and high-quality products that blend traditional wisdom with modern science.
            </p>
          </article>
          <article className="bg-background p-8 lg:p-12">
            <p className="eyebrow text-accent">Mission</p>
            <p className="display mt-6 text-2xl leading-snug text-foreground lg:text-3xl">
              To empower brands worldwide with end-to-end contract manufacturing, precise testing and innovative R&amp;D.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Across cosmetics, Ayurvedic formulations and colour cosmetics — ensuring uncompromising quality,
              compliance and customer satisfaction.
            </p>
          </article>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink to="/contact">Start your brand</ButtonLink>
          <ButtonLink to="/products" variant="ghost">
            Explore products
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
