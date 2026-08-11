export type Industry = {
  id: string;
  name: string;
  summary: string;
};

/** Categories reflect Amoha Herbals' stated private-label / contract manufacturing scope. */
export const INDUSTRIES: Industry[] = [
  {
    id: "ayurvedic",
    name: "Ayurvedic",
    summary: "Traditional Ayurvedic formulations developed and manufactured for your brand.",
  },
  {
    id: "cosmetics",
    name: "Cosmetics",
    summary: "Skin and beauty care formats developed from concept through finished product.",
  },
  {
    id: "colour-cosmetics",
    name: "Colour Cosmetics",
    summary: "Amoha Colour Cosmetics — colour-led formats with a dedicated development approach.",
  },
  { id: "food", name: "Food", summary: "Food category products manufactured under private label." },
  { id: "home-care", name: "Home Care", summary: "Everyday home-care formats for retail and institutional brands." },
  {
    id: "personal-care",
    name: "Personal Care",
    summary: "Daily personal-care ranges built around your brand positioning.",
  },
];

export type JourneyStage = { id: string; title: string; body: string };

export const JOURNEY: JourneyStage[] = [
  { id: "concept", title: "Concept", body: "Your product idea, category and brand positioning define the brief." },
  { id: "formulation", title: "Formulation", body: "Formulation and development work translates the brief into a product." },
  { id: "manufacturing", title: "Manufacturing", body: "Production is carried out under Amoha's contract manufacturing setup." },
  { id: "packaging", title: "Packaging", body: "Packaging and finishing give the product its shelf identity." },
  { id: "brand", title: "Brand", body: "The finished product ships under your own label." },
];
