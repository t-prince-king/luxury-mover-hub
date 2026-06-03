/**
 * SiteFooter — global footer with divisions, corporate links, copyright.
 * Edit company copy via src/config/settings.ts.
 */
import { Link } from "@tanstack/react-router";
import { contact, credit, site } from "@/config/settings";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream/70 pt-20 pb-10 mt-24">
      <div className="container-page grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-6 h-6 border border-gold flex items-center justify-center font-serif italic text-gold text-xs"
              aria-hidden
            >
              K
            </span>
            <span className="font-serif text-sm tracking-[0.2em] uppercase text-cream leading-tight">
              {site.name}
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/50">
            {site.description}
          </p>
        </div>

        <div>
          <h4 className="text-cream eyebrow mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/properties" className="hover:text-gold transition-colors">Real Estate</Link></li>
            <li><Link to="/transport" className="hover:text-gold transition-colors">Transport Hub</Link></li>
            <li><Link to="/car-rental" className="hover:text-gold transition-colors">Car Rental</Link></li>
            <li><Link to="/taxi" className="hover:text-gold transition-colors">Taxi Booking</Link></li>
            <li><Link to="/cargo" className="hover:text-gold transition-colors">Cargo Transport</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream eyebrow mb-6">Corporate</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Legacy</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><a href={`mailto:${contact.email}`} className="hover:text-gold transition-colors">{contact.email}</a></li>
          </ul>
        </div>
      </div>

      {/*
        FOOTER BOTTOM BAR
        -----------------
        Left:  SiteCrafter credit (edit text/URL in src/config/settings.ts → `credit`)
        Right: copyright + office cities
      */}
      <div className="container-page pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
        <p className="order-2 md:order-1">
          <span className="opacity-70">{credit.prefix} </span>
          <a
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold tracking-wide text-gold hover:text-cream transition-colors"
          >
            {credit.label}
          </a>
        </p>
        <div className="order-1 md:order-2 flex flex-col md:flex-row items-center gap-3 md:gap-8 eyebrow text-cream/40">
          <span>&copy; {year} {site.legalName}</span>
          <div className="flex gap-6">
            {contact.offices.map((o) => (
              <span key={o}>{o}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
