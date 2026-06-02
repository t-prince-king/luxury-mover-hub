/**
 * Car Rental — vehicle categories, pricing tiers, gallery, booking form.
 * Vehicle list lives in VEHICLES constant — edit to add/remove inventory.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ShieldCheck, UserRound } from "lucide-react";
import sedan from "@/assets/fleet-sedan.jpg";
import suv from "@/assets/fleet-suv.jpg";
import cargoImg from "@/assets/fleet-cargo.jpg";

export const Route = createFileRoute("/car-rental")({
  head: () => ({
    meta: [
      { title: "Car Rental — Vanguard" },
      { name: "description", content: "Daily, weekly and monthly car rentals — economy to luxury, with optional driver and full insurance." },
      { property: "og:title", content: "Car Rental — Vanguard" },
      { property: "og:description", content: "Premium car rentals with daily, weekly and monthly pricing." },
      { property: "og:image", content: suv },
    ],
  }),
  component: CarRentalPage,
});

const CATEGORIES = ["Economy", "Sedan", "SUV", "Luxury", "Van", "Bus"] as const;
type Category = typeof CATEGORIES[number];

const VEHICLES: Array<{
  name: string;
  category: Category;
  image: string;
  daily: number;
  weekly: number;
  monthly: number;
  seats: number;
}> = [
  { name: "Toyota Corolla", category: "Economy", image: sedan, daily: 45, weekly: 280, monthly: 980, seats: 5 },
  { name: "Mercedes E-Class", category: "Sedan", image: sedan, daily: 120, weekly: 780, monthly: 2800, seats: 5 },
  { name: "Range Rover Sport", category: "SUV", image: suv, daily: 220, weekly: 1450, monthly: 5200, seats: 5 },
  { name: "Maybach S-Class", category: "Luxury", image: sedan, daily: 480, weekly: 3100, monthly: 11500, seats: 4 },
  { name: "Mercedes V-Class", category: "Van", image: suv, daily: 180, weekly: 1180, monthly: 4200, seats: 8 },
  { name: "Executive Coach", category: "Bus", image: cargoImg, daily: 420, weekly: 2700, monthly: 9800, seats: 30 },
];

function CarRentalPage() {
  const [category, setCategory] = useState<Category | "All">("All");
  const filtered = category === "All" ? VEHICLES : VEHICLES.filter((v) => v.category === category);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-cream py-32 overflow-hidden">
        <img src={suv} alt="" width={1920} height={800}
          className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
        <div className="relative container-page max-w-3xl">
          <p className="eyebrow text-gold mb-6">Car Rental</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
            Drive in <span className="italic text-gold">comfort</span>.
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            Six categories, transparent pricing, optional chauffeur and comprehensive insurance.
          </p>
        </div>
      </section>

      {/* Categories filter */}
      <section className="container-page py-16">
        <p className="eyebrow text-gold mb-4">Vehicle Categories</p>
        <div className="flex flex-wrap gap-3 mb-12">
          <CategoryPill active={category === "All"} onClick={() => setCategory("All")}>All</CategoryPill>
          {CATEGORIES.map((c) => (
            <CategoryPill key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </CategoryPill>
          ))}
        </div>

        {/* Vehicle gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((v) => (
            <article key={v.name} className="bg-cream border border-navy/10 group">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={v.image} alt={v.name} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="eyebrow text-gold text-xs mb-2">{v.category} · {v.seats} seats</p>
                <h3 className="font-serif text-2xl text-navy mb-4">{v.name}</h3>
                <dl className="grid grid-cols-3 gap-2 mb-5 border-y border-navy/10 py-4">
                  <Price label="Daily" value={v.daily} />
                  <Price label="Weekly" value={v.weekly} />
                  <Price label="Monthly" value={v.monthly} />
                </dl>
                <Link to="/contact" className="eyebrow text-xs text-navy border-b border-navy pb-1 hover:text-gold hover:border-gold transition-colors">
                  Reserve →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Driver / Insurance */}
      <section className="bg-secondary py-20">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <Feature icon={UserRound} title="Optional Chauffeur"
            desc="Add a vetted, multilingual driver for $90/day. Available on all categories.">
            <li>Background-checked professionals</li>
            <li>Up to 12-hour daily window</li>
            <li>Overnight accommodation on long journeys</li>
          </Feature>
          <Feature icon={ShieldCheck} title="Insurance Coverage"
            desc="Comprehensive cover included on every rental — third-party, collision and theft.">
            <li>$2M third-party liability</li>
            <li>Zero deductible on Premium tier</li>
            <li>24/7 roadside assistance globally</li>
          </Feature>
        </div>
      </section>

      {/* Booking form */}
      <section className="container-page py-24">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow text-gold mb-4 text-center">Booking Form</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy text-center mb-12">
            Reserve your vehicle.
          </h2>
          <form className="grid md:grid-cols-2 gap-6 bg-cream border border-navy/10 p-8">
            <Field label="Full name" type="text" />
            <Field label="Email" type="email" />
            <Field label="Phone" type="tel" />
            <Select label="Vehicle category" options={CATEGORIES as readonly string[]} />
            <Field label="Pickup date" type="date" />
            <Field label="Return date" type="date" />
            <Field label="Pickup location" type="text" />
            <Select label="Driver option" options={["Self-drive", "With chauffeur"]} />
            <div className="md:col-span-2">
              <label className="block eyebrow text-xs text-navy mb-2">Notes</label>
              <textarea rows={4} className="w-full border border-navy/20 bg-background p-3 text-sm" />
            </div>
            <button type="submit" className="md:col-span-2 bg-navy text-cream py-4 eyebrow hover:bg-gold hover:text-navy transition-colors">
              Submit Reservation
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function CategoryPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick}
      className={`px-5 py-2 eyebrow text-xs border transition-colors ${active ? "bg-navy text-cream border-navy" : "bg-transparent text-navy border-navy/30 hover:border-navy"}`}>
      {children}
    </button>
  );
}

function Price({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <dt className="eyebrow text-[10px] text-navy/50 mb-1">{label}</dt>
      <dd className="font-serif text-lg text-navy">${value}</dd>
    </div>
  );
}

function Feature({ icon: Icon, title, desc, children }: { icon: typeof Check; title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="bg-background p-8 border border-navy/10">
      <Icon className="size-8 text-gold mb-4" />
      <h3 className="font-serif text-2xl text-navy mb-3">{title}</h3>
      <p className="text-navy/60 text-sm mb-5">{desc}</p>
      <ul className="space-y-2 text-sm text-navy/70">
        {Array.isArray(children) ? null : null}
        {/* render children as styled list items */}
        <ListWithChecks>{children}</ListWithChecks>
      </ul>
    </div>
  );
}

function ListWithChecks({ children }: { children: React.ReactNode }) {
  return (
    <>
      {(Array.isArray(children) ? children : [children]).map((c, i) => (
        <li key={i} className="flex gap-2"><Check className="size-4 text-gold shrink-0 mt-0.5" />{c}</li>
      ))}
    </>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block eyebrow text-xs text-navy mb-2">{label}</label>
      <input type={type} className="w-full border border-navy/20 bg-background p-3 text-sm" />
    </div>
  );
}

function Select({ label, options }: { label: string; options: readonly string[] }) {
  return (
    <div>
      <label className="block eyebrow text-xs text-navy mb-2">{label}</label>
      <select className="w-full border border-navy/20 bg-background p-3 text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
