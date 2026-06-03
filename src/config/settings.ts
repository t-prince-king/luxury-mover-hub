/**
 * GLOBAL SITE CONFIGURATION
 * -------------------------
 * Single source of truth for business information across the entire site.
 * Edit ONLY this file to update company name, contact info, social links,
 * navigation, or address — every page reads from these exports.
 *
 * Add new fields here as needed; do not hard-code business info in components.
 */

export const site = {
  /** Brand name shown in header, footer, meta tags, emails, invoices, etc. */
  name: "KESHA REAL ESTATE & TRANSPORT SERVICES",
  /** Short brand used in compact UI (header logo wordmark) */
  shortName: "KESHA",
  /** Optional sub-line (e.g. legal entity) */
  legalName: "Kesha Real Estate & Transport Services",
  /** Short tagline for hero / SEO */
  tagline: "Premium real estate acquisitions and full-spectrum transport services.",
  /** Long description for meta tags */
  description:
    "Kesha Real Estate & Transport Services — curated properties, executive car rental, taxi booking, and cargo logistics under one trusted brand.",
  /** Founded year (for footer copyright) */
  foundedYear: 1982,
} as const;

/**
 * SITE CREDIT
 * -----------
 * Shown in the footer bottom-left on every page.
 * Edit the label or URL here to update the credit site-wide.
 */
export const credit = {
  prefix: "Site Created By",
  label: "SiteCrafter",
  url: "https://sitecrafter.example", // TODO: replace with your real URL
} as const;

export const contact = {
  phone: "+1 (000) 000-0000",
  email: "concierge@vanguard.example",
  address: {
    line1: "22 Berkeley Square",
    line2: "Mayfair, London W1J 6EB",
    country: "United Kingdom",
  },
  /** Office locations shown in footer / contact page */
  offices: ["London", "New York", "Singapore", "Dubai"],
} as const;

export const social = {
  linkedin: "#",
  instagram: "#",
  twitter: "#",
} as const;

/** Primary navigation (used by header + footer) */
export const nav = [
  { label: "Home", to: "/" as const },
  { label: "Real Estate", to: "/properties" as const },
  { label: "Transport Hub", to: "/transport" as const },
  { label: "Car Rental", to: "/car-rental" as const },
  { label: "Taxi", to: "/taxi" as const },
  { label: "Cargo", to: "/cargo" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

/** Quick-access floating buttons (homepage + sticky) */
export const quickAccess = [
  { label: "Browse Properties", to: "/properties" as const, icon: "Home" },
  { label: "Rent a Car", to: "/car-rental" as const, icon: "Car" },
  { label: "Book Taxi", to: "/taxi" as const, icon: "Navigation" },
  { label: "Cargo Transport", to: "/cargo" as const, icon: "Truck" },
  { label: "Contact Us", to: "/contact" as const, icon: "Phone" },
];

/** Headline statistics on the home Trust Bar — edit values here */
export const stats = [
  { value: "$4.2B", label: "Assets Managed" },
  { value: "12", label: "Global Offices" },
  { value: "24/7", label: "Executive Support" },
  { value: "150+", label: "Corporate Clients" },
];
