import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { ButtonLink } from "@/components/ui/CineButton";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Amoha Herbals" },
      {
        name: "description",
        content: "Notes and updates from Amoha Herbals on private label development and contract manufacturing.",
      },
      { property: "og:title", content: "Blog — Amoha Herbals" },
      { property: "og:description", content: "Editorial notes from Amoha Herbals." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts: { slug: string; title: string; date: string; excerpt: string }[] = [];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Notes from Amoha."
        intro="Articles will appear here once Amoha's editorial content is supplied. Nothing has been written on the brand's behalf."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-28 lg:px-10">
        {posts.length === 0 ? (
          <div className="border border-dashed border-border p-16 text-center">
            <p className="eyebrow text-muted-foreground">No articles published yet</p>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              The editorial layout is ready — supply article content and it will render here as a premium blog index
              with individual article pages.
            </p>
            <div className="mt-10 flex justify-center">
              <ButtonLink to="/contact" variant="ghost">
                Contact us
              </ButtonLink>
            </div>
          </div>
        ) : null}
      </section>
    </SiteLayout>
  );
}
