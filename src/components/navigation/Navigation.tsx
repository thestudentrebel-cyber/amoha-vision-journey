import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/amoha-logo.png.asset.json";
import { NAV_ITEMS } from "@/data/navigation";

export function Navigation({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link to="/" className="shrink-0" aria-label="Amoha Herbals home">
          <img
            src={logo.url}
            alt="Amoha Herbals Pvt Ltd"
            className={`h-8 w-auto transition-all duration-700 lg:h-9 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            width={180}
            height={54}
          />
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full ${
                    scrolled ? "text-foreground hover:text-accent" : "text-onDark/85 hover:text-onDark"
                  }`}
                  activeProps={{ className: "text-accent" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className={`xl:hidden text-[0.68rem] uppercase tracking-[0.24em] ${
            scrolled ? "text-foreground" : "text-onDark"
          }`}
        >
          Menu
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-background transition-opacity duration-500 xl:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <img src={logo.url} alt="Amoha Herbals Pvt Ltd" className="h-8 w-auto" />
        <button
          type="button"
          onClick={onClose}
          className="text-[0.68rem] uppercase tracking-[0.24em] text-foreground"
        >
          Close
        </button>
      </div>
      <nav aria-label="Mobile" className="px-5 pt-8">
        <ul className="space-y-5">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onClose}
                className="display block text-3xl text-foreground"
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
