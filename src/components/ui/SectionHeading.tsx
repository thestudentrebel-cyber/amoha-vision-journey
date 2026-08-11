import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onFilm = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  onFilm?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${
        onFilm ? "text-onDark" : "text-foreground"
      }`}
    >
      {eyebrow ? (
        <p className={`eyebrow mb-6 ${onFilm ? "text-onDark/70" : "text-muted-foreground"}`}>{eyebrow}</p>
      ) : null}
      <Tag className="display text-4xl sm:text-5xl lg:text-6xl">{title}</Tag>
      {intro ? (
        <p
          className={`mt-6 max-w-xl text-sm leading-relaxed sm:text-base ${
            align === "center" ? "mx-auto" : ""
          } ${onFilm ? "text-onDark/75" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
