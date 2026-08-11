/**
 * Product catalog data source.
 *
 * NOTE: Amoha did not supply a product export for this build. The entries below
 * are neutral, category-level placeholders (marked `placeholder: true`) so the
 * catalog UI is fully functional. No claims, ingredients, benefits or
 * specifications are invented. Replace with the official catalog / CMS feed.
 */

export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  packaging?: string;
  placeholder?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "ayurvedic-oil-range",
    name: "Ayurvedic Oil Range",
    category: "Ayurvedic",
    categoryId: "ayurvedic",
    description: "Ayurvedic oil formats available for private label development. Product details on request.",
    packaging: "Bottle formats — details on request",
    placeholder: true,
  },
  {
    slug: "ayurvedic-powder-range",
    name: "Ayurvedic Powder Range",
    category: "Ayurvedic",
    categoryId: "ayurvedic",
    description: "Powder formats developed under contract manufacturing. Specifications shared on enquiry.",
    packaging: "Jar / pouch formats — details on request",
    placeholder: true,
  },
  {
    slug: "face-care-range",
    name: "Face Care Range",
    category: "Cosmetics",
    categoryId: "cosmetics",
    description: "Face care formats for cosmetic brands, developed from brief to finished product.",
    packaging: "Tube / jar formats — details on request",
    placeholder: true,
  },
  {
    slug: "body-care-range",
    name: "Body Care Range",
    category: "Cosmetics",
    categoryId: "cosmetics",
    description: "Body care formats available for private label programmes.",
    packaging: "Bottle / tube formats — details on request",
    placeholder: true,
  },
  {
    slug: "lip-range",
    name: "Lip Range",
    category: "Colour Cosmetics",
    categoryId: "colour-cosmetics",
    description: "Colour cosmetic lip formats under the Amoha Colour Cosmetics division.",
    packaging: "Details on request",
    placeholder: true,
  },
  {
    slug: "complexion-range",
    name: "Complexion Range",
    category: "Colour Cosmetics",
    categoryId: "colour-cosmetics",
    description: "Complexion formats developed with a colour-led development approach.",
    packaging: "Details on request",
    placeholder: true,
  },
  {
    slug: "food-products",
    name: "Food Products",
    category: "Food",
    categoryId: "food",
    description: "Food category products manufactured under private label arrangements.",
    packaging: "Details on request",
    placeholder: true,
  },
  {
    slug: "home-care-range",
    name: "Home Care Range",
    category: "Home Care",
    categoryId: "home-care",
    description: "Home care formats for retail and institutional brands.",
    packaging: "Details on request",
    placeholder: true,
  },
  {
    slug: "hair-care-range",
    name: "Hair Care Range",
    category: "Personal Care",
    categoryId: "personal-care",
    description: "Hair care formats developed and manufactured for your label.",
    packaging: "Bottle formats — details on request",
    placeholder: true,
  },
  {
    slug: "daily-personal-care",
    name: "Daily Personal Care",
    category: "Personal Care",
    categoryId: "personal-care",
    description: "Everyday personal care ranges built around your brand positioning.",
    packaging: "Details on request",
    placeholder: true,
  },
];

export const PRODUCT_CATEGORIES = Array.from(new Set(PRODUCTS.map((p) => p.category)));

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
