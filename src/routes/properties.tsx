import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Vanguard" },
      { name: "description", content: "Curated luxury properties for sale and rent across the world's most desirable locations." },
      { property: "og:title", content: "Properties — Vanguard" },
      { property: "og:description", content: "Curated luxury properties for sale and rent across the world's most desirable locations." },
      { property: "og:image", content: property1 },
    ],
  }),
  component: PropertiesPage,
});

/**
 * Properties listing page.
 * Data is currently static — replace LISTINGS with a server-fn fetch when
 * connecting the backend. Filter state is local; wire to URL search params
 * if you need shareable filters.
 */

type Listing = {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  type: "Residential" | "Commercial" | "Land";
  status: "For Sale" | "For Rent";
  beds: number;
  area: string;
};

const LISTINGS: Listing[] = [
  { id: "1", image: property1, title: "The Limestone Pavilion", location: "Mallorca, Spain", price: "€18.5M", type: "Residential", status: "For Sale", beds: 6, area: "820 m²" },
  { id: "2", image: property2, title: "One Hyde Observatory", location: "Manhattan, NY", price: "$42.0M", type: "Residential", status: "For Sale", beds: 5, area: "620 m²" },
  { id: "3", image: property3, title: "Summit Chalet IV", location: "Verbier, Switzerland", price: "CHF 12.2M", type: "Residential", status: "For Sale", beds: 7, area: "950 m²" },
  { id: "4", image: property1, title: "Marina Tower Penthouse", location: "Monaco", price: "€32,000 / mo", type: "Residential", status: "For Rent", beds: 4, area: "410 m²" },
  { id: "5", image: property2, title: "Canary Wharf HQ", location: "London, UK", price: "£68.0M", type: "Commercial", status: "For Sale", beds: 0, area: "3,200 m²" },
  { id: "6", image: property3, title: "Lakeside Estate", location: "Lake Como, Italy", price: "€24.5M", type: "Residential", status: "For Sale", beds: 8, area: "1,100 m²" },
];

const STATUSES = ["All", "For Sale", "For Rent"] as const;
const TYPES = ["All", "Residential", "Commercial", "Land"] as const;

function PropertiesPage() {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return LISTINGS.filter((l) => {
      if (status !== "All" && l.status !== status) return false;
      if (type !== "All" && l.type !== type) return false;
      if (q && !`${l.title} ${l.location}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [status, type, q]);

  return (
    <>
      {/* Page header */}
      <section className="bg-navy text-cream py-24">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-gold mb-6">The Collection</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
            Properties of <span className="italic text-gold">Consequence</span>
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            Off-market estates, architectural landmarks, and investment-grade
            holdings — curated by our regional advisors.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container-page py-12 border-b border-border">
        <div className="grid md:grid-cols-4 gap-4">
          <label className="block">
            <span className="eyebrow text-navy/60 mb-2 block">Search</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Title or location"
              className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-navy"
            />
          </label>
          <FilterGroup label="Status" options={STATUSES} value={status} onChange={setStatus} />
          <FilterGroup label="Type" options={TYPES} value={type} onChange={setType} />
          <div className="flex items-end justify-end">
            <span className="eyebrow text-navy/50">
              {filtered.length} listing{filtered.length === 1 ? "" : "s"}
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-page py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-24">
            No properties match your filters.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((l) => (
              <article key={l.id} className="group">
                <div className="overflow-hidden mb-5">
                  <img
                    src={l.image}
                    alt={l.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <p className="eyebrow text-gold mb-1.5">{l.location}</p>
                    <h2 className="font-serif text-2xl text-navy mb-1">{l.title}</h2>
                    <p className="text-xs text-navy/50">
                      {l.status} · {l.type}
                      {l.beds > 0 && ` · ${l.beds} BR`} · {l.area}
                    </p>
                  </div>
                  <span className="font-serif text-lg text-navy whitespace-nowrap">{l.price}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function FilterGroup<T extends string>(props: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <span className="eyebrow text-navy/60 mb-2 block">{props.label}</span>
      <div className="flex flex-wrap gap-2">
        {props.options.map((o) => {
          const active = o === props.value;
          return (
            <button
              key={o}
              type="button"
              onClick={() => props.onChange(o)}
              className={`px-3 py-2 text-xs border transition-colors ${
                active
                  ? "bg-navy text-cream border-navy"
                  : "border-border text-navy/70 hover:border-navy"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}
