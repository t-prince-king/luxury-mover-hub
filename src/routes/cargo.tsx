/**
 * Cargo Transport — freight quote request and capability overview.
 */
import { createFileRoute } from "@tanstack/react-router";
import { Package, Globe2, ShieldCheck, Thermometer } from "lucide-react";
import cargoImg from "@/assets/fleet-cargo.jpg";

export const Route = createFileRoute("/cargo")({
  head: () => ({
    meta: [
      { title: "Cargo Transport — Vanguard" },
      { name: "description", content: "Bonded, insured cargo and freight transport for art, equipment and high-value goods." },
      { property: "og:title", content: "Cargo Transport — Vanguard" },
      { property: "og:description", content: "Bonded, insured cargo and freight transport." },
      { property: "og:image", content: cargoImg },
    ],
  }),
  component: CargoPage,
});

const CAPABILITIES = [
  { icon: Package, title: "All Cargo Classes", desc: "From parcels to oversize industrial equipment." },
  { icon: Thermometer, title: "Climate-Controlled", desc: "Reefer trailers for pharma, art and perishables." },
  { icon: Globe2, title: "Global Network", desc: "Door-to-door across 12 hubs and 60 partner ports." },
  { icon: ShieldCheck, title: "Bonded & Insured", desc: "Full chain-of-custody with declared-value coverage." },
];

function CargoPage() {
  return (
    <>
      <section className="relative bg-navy text-cream py-32 overflow-hidden">
        <img src={cargoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
        <div className="relative container-page max-w-3xl">
          <p className="eyebrow text-gold mb-6">Cargo & Freight</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
            Freight, <span className="italic text-gold">handled</span>.
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            Bonded transport for high-value, time-sensitive and oversize consignments.
          </p>
        </div>
      </section>

      <section className="container-page py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITIES.map((c) => (
          <div key={c.title} className="bg-cream border border-navy/10 p-6">
            <c.icon className="size-7 text-gold mb-4" />
            <h3 className="font-serif text-xl text-navy mb-2">{c.title}</h3>
            <p className="text-sm text-navy/60">{c.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-gold mb-4 text-center">Quote Request</p>
          <h2 className="font-serif text-4xl text-navy text-center mb-10">Request a freight quote.</h2>
          <form className="grid md:grid-cols-2 gap-6 bg-background border border-navy/10 p-8">
            <In label="Company" />
            <In label="Contact name" />
            <In label="Email" type="email" />
            <In label="Phone" type="tel" />
            <In label="Origin city" />
            <In label="Destination city" />
            <In label="Weight (kg)" type="number" />
            <Sel label="Cargo type" options={["General", "Fragile", "Hazardous", "Perishable", "Art / High-value", "Oversize"]} />
            <div className="md:col-span-2">
              <label className="block eyebrow text-xs text-navy mb-2">Description</label>
              <textarea rows={4} className="w-full border border-navy/20 bg-cream p-3 text-sm" />
            </div>
            <button className="md:col-span-2 bg-navy text-cream py-4 eyebrow hover:bg-gold hover:text-navy transition-colors">
              Request Quote
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function In({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block eyebrow text-xs text-navy mb-2">{label}</label>
      <input type={type} className="w-full border border-navy/20 bg-cream p-3 text-sm" />
    </div>
  );
}

function Sel({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block eyebrow text-xs text-navy mb-2">{label}</label>
      <select className="w-full border border-navy/20 bg-cream p-3 text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
