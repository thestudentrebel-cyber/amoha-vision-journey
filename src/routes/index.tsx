import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CinematicJourney } from "@/components/sections/CinematicJourney";
import { LaunchYourBrand } from "@/components/sections/LaunchYourBrand";
import { CoreAreas } from "@/components/sections/CoreAreas";
import { Industries } from "@/components/sections/Industries";
import { ProductUniverse } from "@/components/sections/ProductUniverse";
import { PrivateLabel } from "@/components/sections/PrivateLabel";
import { WhyAmoha } from "@/components/sections/WhyAmoha";

import { ButtonLink } from "@/components/ui/CineButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCinematicScroll } from "@/hooks/useCinematicScroll";
import { usePointerParallax, useResponsive } from "@/hooks/useResponsive";
import logo from "@/assets/amoha-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amoha Herbals — Private Label & Contract Manufacturing" },
      {
        name: "description",
        content:
          "Amoha Herbals Pvt Ltd: private label and contract manufacturing for Ayurvedic, cosmetic, colour cosmetic, food and home-care products.",
      },
      { property: "og:title", content: "Amoha Herbals — Crafting Products. Building Brands." },
      {
        property: "og:description",
        content:
          "A cinematic journey through Amoha Herbals: nature, formulation, manufacturing, packaging and brand.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { isMobile, reducedMotion } = useResponsive();
  const globalProgress = useCinematicScroll();
  const pointer = usePointerParallax(!isMobile && !reducedMotion);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-background">
      <LoadingScreen done={loaded} />
      <Navigation scrolled={globalProgress > 0.12} />
      <main>
        <CinematicJourney pointer={pointer} isMobile={isMobile} reducedMotion={reducedMotion} />
        <LaunchYourBrand />
        <Industries />
        <ProductUniverse />
        <PrivateLabel />
        <CoreAreas />
        <WhyAmoha />

        <section className="bg-background py-24 lg:py-36">
          <div className="mx-auto max-w-[1400px] px-5 text-center lg:px-10">
            <SectionHeading
              align="center"
              eyebrow="Let's build your brand"
              title="Ready to build your brand?"
              intro="Share your product category and requirement — we'll take it from concept to finished product."
            />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink to="/contact">Start your project</ButtonLink>
              <ButtonLink to="/products" variant="ghost">
                Explore products
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function LoadingScreen({ done }: { done: boolean }) {
  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img src={logo.url} alt="" className="h-12 w-auto" />
      <span className="mt-8 block h-px w-24 overflow-hidden bg-border">
        <span className="block h-px w-full origin-left animate-[load_1.1s_ease-in-out_infinite] bg-accent" />
      </span>
      <style>{`@keyframes load{0%{transform:scaleX(0)}60%{transform:scaleX(1)}100%{transform:scaleX(1)}}`}</style>
    </div>
  );
}
