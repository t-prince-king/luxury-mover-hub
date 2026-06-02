/**
 * Transport Hub — central landing for all mobility services.
 * Routes branch out to: /car-rental, /taxi, /cargo, plus airport & moving (inline).
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Navigation, Truck, Package, Plane } from "lucide-react";
import sedan from "@/assets/fleet-sedan.jpg";
import suv from "@/assets/fleet-suv.jpg";
import cargoImg from "@/assets/fleet-cargo.jpg";
import transportHero from "@/assets/division-transport.jpg";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Transport Hub — Vanguard" },
      { name: "description", content: "Taxi booking, car rental, cargo transport, moving services and airport transfers — one central hub." },
      { property: "og:title", content: "Transport Hub — Vanguard" },
      { property: "og:description", content: "Taxi, car rental, cargo, moving and airport transfers." },
      { property: "og:image", content: transportHero },
    ],
  }),
  component: TransportHub,
});

type ServiceTo = "/taxi" | "/car-rental" | "/cargo" | "/contact";

const SERVICES: Array<{
  icon: typeof Car;
  emoji: string;
  title: string;
  desc: string;
  to: ServiceTo;
  image: string;
}> = [
  { icon: Navigation, emoji: "🚕", title: "Taxi Booking", desc: "On-demand chauffeured rides across all twelve hubs.", to: "/taxi", image: sedan },
  { icon: Car, emoji: "🚗", title: "Car Rental", desc: "Daily, weekly and monthly rentals from economy to luxury.", to: "/car-rental", image: suv },
  { icon: Truck, emoji: "🚚", title: "Cargo Transport", desc: "Bonded, insured freight for art, equipment and high-value goods.", to: "/cargo", image: cargoImg },
  { icon: Package, emoji: "📦", title: "Moving Services", desc: "White-glove relocation between primary and secondary residences.", to: "/contact", image: suv },
  { icon: Plane, emoji: "✈", title: "Airport Transfers", desc: "Meet-and-greet from 200+ international airports.", to: "/contact", image: sedan },
];

function TransportHub() {
  return (
    <>
      <section className="relative bg-navy text-cream py-32 overflow-hidden">
        <img src={transportHero} alt="" width={1920} height={800}
          className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
        <div className="relative container-page max-w-3xl">
          <p className="eyebrow text-gold mb-6">Mobility Division</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
            Choose your <span className="italic text-gold">transport</span>.
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            Five disciplines, one concierge. Select a service to begin a booking.
          </p>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <Link key={s.title} to={s.to} className="group block bg-cream border border-navy/10 hover:border-gold transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-navy text-gold text-2xl size-12 flex items-center justify-center">
                  {s.emoji}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-navy mb-3">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-6">{s.desc}</p>
                <span className="eyebrow text-xs text-navy border-b border-navy pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
                  Open Service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy text-cream py-24">
        <div className="container-page text-center max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Need a custom <span className="italic text-gold">itinerary</span>?
          </h2>
          <p className="text-cream/60 mb-10">
            Our concierge will coordinate every leg — air, ground and freight.
          </p>
          <Link to="/contact" className="inline-block bg-gold text-navy px-10 py-4 eyebrow hover:bg-cream transition-colors">
            Speak to Concierge
          </Link>
        </div>
      </section>
    </>
  );
}
