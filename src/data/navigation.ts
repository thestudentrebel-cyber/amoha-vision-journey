export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Industries", to: "/industries" },
  { label: "Products", to: "/products" },
  { label: "Amoha Colour Cosmetics", to: "/colour-cosmetics" },
  { label: "Catalog", to: "/catalog" },
  { label: "Blog", to: "/blog" },
  { label: "Packaging", to: "/packaging" },
  { label: "Contact Us", to: "/contact" },
];

export const COMPANY = {
  name: "Amoha Herbals Pvt Ltd",
  short: "Amoha Herbals",
  positioning:
    "Premium private label and contract manufacturing solutions for Ayurvedic, cosmetic, colour cosmetic, food and home-care products.",
};
