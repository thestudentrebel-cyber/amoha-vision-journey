import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { Industries as IndustriesSection } from "@/components/sections/Industries";
import { PrivateLabel } from "@/components/sections/PrivateLabel";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Amoha Herbals Manufacturing Categories" },
      {
        name: "description",
        content:
          "Ayurvedic, cosmetics, colour cosmetics, food, home care and personal care — the categories Amoha Herbals manufactures under private label.",
      },
      { property: "og:title", content: "Industries — Amoha Herbals" },
      { property: "og:description", content: "Six categories served under private label and contract manufacturing." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title="Categories we manufacture."
        intro="Amoha Herbals supports brands across six approved categories."
      />
      <IndustriesSection />
      <PrivateLabel />
    </SiteLayout>
  );
}
