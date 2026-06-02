/**
 * Taxi Booking — on-demand ride booking with class selection.
 */
import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, ShieldCheck } from "lucide-react";
import sedan from "@/assets/fleet-sedan.jpg";
import suv from "@/assets/fleet-suv.jpg";

export const Route = createFileRoute("/taxi")({
  head: () => ({
    meta: [
      { title: "Book a Taxi — Vanguard" },
      { name: "description", content: "On-demand chauffeured taxi booking — standard, premium and executive classes." },
      { property: "og:title", content: "Book a Taxi — Vanguard" },
      { property: "og:description", content: "On-demand chauffeured taxi booking." },
      { property: "og:image", content: sedan },
    ],
  }),
  component: TaxiPage,
});

const CLASSES = [
  { name: "Standard", car: "Toyota Camry", per_km: 1.4, img: sedan },
  { name: "Premium", car: "Mercedes E-Class", per_km: 2.6, img: sedan },
  { name: "Executive", car: "Maybach S-Class", per_km: 5.2, img: suv },
];

function TaxiPage() {
  return (
    <>
      <section className="relative bg-navy text-cream py-32 overflow-hidden">
        <img src={sedan} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
        <div className="relative container-page max-w-3xl">
          <p className="eyebrow text-gold mb-6">Taxi Booking</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
            A ride, on <span className="italic text-gold">demand</span>.
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            Vetted drivers, transparent fares, dispatched in under 5 minutes.
          </p>
        </div>
      </section>

      {/* Booking */}
      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <form className="bg-cream border border-navy/10 p-8 space-y-5">
            <h2 className="font-serif text-3xl text-navy mb-2">Request a taxi</h2>
            <div>
              <label className="block eyebrow text-xs text-navy mb-2">Pickup location</label>
              <input type="text" placeholder="Hotel, airport, address…" className="w-full border border-navy/20 bg-background p-3 text-sm" />
            </div>
            <div>
              <label className="block eyebrow text-xs text-navy mb-2">Destination</label>
              <input type="text" className="w-full border border-navy/20 bg-background p-3 text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block eyebrow text-xs text-navy mb-2">Date</label>
                <input type="date" className="w-full border border-navy/20 bg-background p-3 text-sm" />
              </div>
              <div>
                <label className="block eyebrow text-xs text-navy mb-2">Time</label>
                <input type="time" className="w-full border border-navy/20 bg-background p-3 text-sm" />
              </div>
            </div>
            <div>
              <label className="block eyebrow text-xs text-navy mb-2">Class</label>
              <select className="w-full border border-navy/20 bg-background p-3 text-sm">
                {CLASSES.map((c) => <option key={c.name}>{c.name}</option>)}
              </select>
            </div>
            <button className="w-full bg-navy text-cream py-4 eyebrow hover:bg-gold hover:text-navy transition-colors">
              Confirm Booking
            </button>
          </form>

          <div className="space-y-6">
            {CLASSES.map((c) => (
              <article key={c.name} className="flex gap-5 bg-cream border border-navy/10 p-5 hover:border-gold transition-colors">
                <img src={c.img} alt={c.car} className="w-32 h-24 object-cover" />
                <div className="flex-1">
                  <p className="eyebrow text-xs text-gold mb-1">{c.name}</p>
                  <h3 className="font-serif text-xl text-navy mb-1">{c.car}</h3>
                  <p className="text-xs text-navy/60">${c.per_km.toFixed(2)} per km · ETA 4–7 min</p>
                </div>
              </article>
            ))}

            <div className="grid grid-cols-3 gap-3 pt-4">
              <Trust icon={Clock} label="24/7 service" />
              <Trust icon={MapPin} label="GPS tracked" />
              <Trust icon={ShieldCheck} label="Fully insured" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Trust({ icon: Icon, label }: { icon: typeof Clock; label: string }) {
  return (
    <div className="text-center p-4 border border-navy/10">
      <Icon className="size-5 text-gold mx-auto mb-2" />
      <p className="eyebrow text-[10px] text-navy">{label}</p>
    </div>
  );
}
