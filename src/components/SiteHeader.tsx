/**
 * SiteHeader — global navigation bar.
 * Reads brand + nav items from src/config/settings.ts.
 * Renders as a sticky navy bar with gold accents.
 */
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/config/settings";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-navy text-cream border-b border-gold/20">
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <span
            className="w-8 h-8 border border-gold flex items-center justify-center font-serif italic text-gold text-lg"
            aria-hidden
          >
            V
          </span>
          <span className="font-serif text-xl tracking-[0.25em] uppercase">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 eyebrow text-cream/80" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex px-6 py-2 border border-gold text-gold eyebrow hover:bg-gold hover:text-navy transition-all"
        >
          Inquire
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-cream"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav
          className="md:hidden border-t border-gold/20 bg-navy"
          aria-label="Mobile"
        >
          <ul className="container-page py-6 flex flex-col gap-5 eyebrow text-cream/80">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block hover:text-gold transition-colors"
                  activeProps={{ className: "text-gold" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-navy transition-all"
              >
                Inquire
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
