import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "onFilm";

const base =
  "group inline-flex items-center gap-3 px-6 py-3 text-[0.72rem] uppercase tracking-[0.24em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
  ghost: "border border-border text-foreground hover:border-accent hover:text-accent",
  onFilm:
    "border border-onDark/40 text-onDark backdrop-blur-[2px] hover:border-onDark hover:bg-onDark/10",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      <span className="h-px w-4 bg-current transition-all duration-500 group-hover:w-7" />
    </button>
  );
}

export function ButtonLink({
  to,
  variant = "primary",
  className = "",
  children,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span className="h-px w-4 bg-current transition-all duration-500 group-hover:w-7" />
    </Link>
  );
}
