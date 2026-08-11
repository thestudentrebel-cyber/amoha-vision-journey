import { useEffect, useState, type ReactNode } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/layout/Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(true);
  useEffect(() => {
    setScrolled(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrolled={scrolled} />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
      <p className="eyebrow text-muted-foreground">{eyebrow}</p>
      <h1 className="display mt-6 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
      {intro ? <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{intro}</p> : null}
    </section>
  );
}
