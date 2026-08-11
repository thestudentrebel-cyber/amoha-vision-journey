import { Link } from "@tanstack/react-router";
import logo from "@/assets/amoha-logo.png.asset.json";
import { NAV_ITEMS, COMPANY } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 lg:grid-cols-3 lg:px-10">
        <div>
          <img src={logo.url} alt="Amoha Herbals Pvt Ltd" className="h-10 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {COMPANY.positioning}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow text-muted-foreground">Navigate</p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow text-muted-foreground">Enquiries</p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Contact details to be supplied by Amoha Herbals.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent"
          >
            Start your project
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground lg:px-10">
          <span>© {new Date().getFullYear()} {COMPANY.name}</span>
          <span>Private Label &amp; Contract Manufacturing</span>
        </div>
      </div>
    </footer>
  );
}
