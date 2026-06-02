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
  /** Brand name shown in header, footer, meta tags */
  name: "Vanguard",
  /** Optional sub-line (e.g. legal entity) */
  legalName: "Vanguard Sovereign Group",
  /** Short tagline for hero / SEO */
  tagline: "Bespoke real estate acquisitions and global transport logistics.",
  /** Long description for meta tags */
  description:
    "Premium real estate and transport services for discerning enterprise clients. Curated properties, executive fleet, and 24/7 concierge.",
  /** Founded year (for footer copyright) */
  foundedYear: 1982,
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
  { label: "Properties", to: "/properties" as const },
  { label: "Transport", to: "/transport" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

/** Headline statistics on the home Trust Bar — edit values here */
export const stats = [
  { value: "$4.2B", label: "Assets Managed" },
  { value: "12", label: "Global Offices" },
  { value: "24/7", label: "Executive Support" },
  { value: "150+", label: "Corporate Clients" },
];
