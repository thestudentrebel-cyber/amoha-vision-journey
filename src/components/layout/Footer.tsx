import { Link } from "@tanstack/react-router";
import logo from "@/assets/amoha-logo.png.asset.json";
import { NAV_ITEMS, COMPANY } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <img src={logo.url} alt="Amoha Herbals Pvt Ltd" className="h-10 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{COMPANY.positioning}</p>
          <address className="mt-6 not-italic text-sm leading-relaxed text-muted-foreground">
            {COMPANY.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-muted-foreground">Navigate</p>
          <ul className="mt-6 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-foreground transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-muted-foreground">Get in touch</p>
          <ul className="mt-6 space-y-3 text-sm text-foreground">
            <li>
              <a href={COMPANY.phoneHref} className="transition-colors hover:text-accent">
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={COMPANY.emailHref} className="transition-colors hover:text-accent">
                {COMPANY.email}
              </a>
            </li>
          </ul>
          <p className="eyebrow mt-8 text-muted-foreground">Follow us</p>
          <ul className="mt-4 flex gap-4">
            {COMPANY.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[0.72rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-block text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-accent"
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
