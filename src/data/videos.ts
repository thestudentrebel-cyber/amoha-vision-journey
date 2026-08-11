import hero from "@/assets/01-hero.mp4.asset.json";
import heroPoster from "@/assets/01-hero-poster.jpg.asset.json";
import reveal from "@/assets/02-product-reveal.mp4.asset.json";
import revealPoster from "@/assets/02-product-reveal-poster.jpg.asset.json";
import botanical from "@/assets/03-botanical-formulation.mp4.asset.json";
import botanicalPoster from "@/assets/03-botanical-formulation-poster.jpg.asset.json";
import manufacturing from "@/assets/04-manufacturing.mp4.asset.json";
import manufacturingPoster from "@/assets/04-manufacturing-poster.jpg.asset.json";
import packaging from "@/assets/05-packaging-final.mp4.asset.json";
import packagingPoster from "@/assets/05-packaging-final-poster.jpg.asset.json";

export type CinematicClip = {
  id: string;
  src: string;
  poster: string;
  /** scroll progress range [in, out] with overlap for crossfades */
  range: [number, number];
  label: string;
};

export const CINEMATIC_CLIPS: CinematicClip[] = [
  { id: "hero", src: hero.url, poster: heroPoster.url, range: [0.0, 0.23], label: "Amoha Herbals opening sequence" },
  {
    id: "product-reveal",
    src: reveal.url,
    poster: revealPoster.url,
    range: [0.18, 0.38],
    label: "Product reveal sequence",
  },
  {
    id: "botanical",
    src: botanical.url,
    poster: botanicalPoster.url,
    range: [0.33, 0.63],
    label: "Botanical to formulation sequence",
  },
  {
    id: "manufacturing",
    src: manufacturing.url,
    poster: manufacturingPoster.url,
    range: [0.58, 0.8],
    label: "Manufacturing sequence",
  },
  {
    id: "packaging",
    src: packaging.url,
    poster: packagingPoster.url,
    range: [0.75, 1.0],
    label: "Packaging and finished product sequence",
  },
];

export const HERO_POSTER = heroPoster.url;
