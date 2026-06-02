import { createFileRoute, Link } from "@tanstack/react-router";
import sedan from "@/assets/fleet-sedan.jpg";
import suv from "@/assets/fleet-suv.jpg";
import cargo from "@/assets/fleet-cargo.jpg";
import transportHero from "@/assets/division-transport.jpg";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Transport — Vanguard" },
      { name: "description", content: "Executive ground fleet, airport transfers, and bonded cargo logistics for discerning clients." },
      { property: "og:title", content: "Transport — Vanguard" },
      { property: "og:description", content: "Executive ground fleet, airport transfers, and bonded cargo logistics." },
      { property: "og:image", content: transportHero },
    ],
  }),
  component: TransportPage,
});

const SERVICES = [
  { tag: "01", title: "Executive Chauffeur", desc: "Hourly and daily luxury ground transport with vetted, multilingual drivers." },
  { tag: "02", title: "Airport Transfers", desc: "Meet-and-greet from over 200 international airports with luggage handling." },
  { tag: "03", title: "Cargo & Freight", desc: "Bonded, insured cargo movement for art, equipment, and high-value goods." },
  { tag: "04", title: "Residential Moves", desc: "White-glove relocation between primary and secondary residences worldwide." },
];

const FLEET = [
  { image: sedan, name: "Executive Sedan", spec: "Mercedes-Maybach S-Class · 1–3 passengers" },
  { image: suv, name: "Luxury SUV", spec: "Range Rover Autobiography · 1–5 passengers" },
  { image: cargo, name: "Cargo Fleet", spec: "Climate-controlled trailers · up to 24t" },
];

function TransportPage() {
  return (
    <>
      <section className="relative bg-navy text-cream py-32 overflow-hidden">
        <img
          src={transportHero}
          alt=""
          width={1920}
          height={800}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
        <div className="relative container-page max-w-3xl">
          <p className="eyebrow text-gold mb-6">Mobility Division</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
            Movement, <span className="italic text-gold">refined</span>.
          </h1>
          <p className="text-cream/70 text-lg max-w-xl">
            A single point of contact for ground, air, and cargo logistics —
            available across our twelve global hubs, 24 hours a day.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-24">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-gold mb-4">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
            Four disciplines, one standard.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {SERVICES.map((s) => (
            <div key={s.tag} className="bg-background p-10 hover:bg-secondary transition-colors">
              <p className="eyebrow text-gold mb-6">Service {s.tag}</p>
              <h3 className="font-serif text-3xl text-navy mb-4">{s.title}</h3>
              <p className="text-navy/60 leading-relaxed max-w-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-secondary py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold mb-4">The Fleet</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
              Maintained to a single specification.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {FLEET.map((v) => (
              <article key={v.name}>
                <img
                  src={v.image}
                  alt={v.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full aspect-[4/3] object-cover mb-5"
                />
                <h3 className="font-serif text-2xl text-navy mb-2">{v.name}</h3>
                <p className="text-xs text-navy/50">{v.spec}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-cream py-24">
        <div className="container-page text-center max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Reserve a <span className="italic text-gold">vehicle</span> or coordinate freight.
          </h2>
          <p className="text-cream/60 mb-10">
            Bookings are coordinated through a dedicated concierge — no public dispatch.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-navy px-10 py-4 eyebrow hover:bg-cream transition-colors"
          >
            Request a Booking
          </Link>
        </div>
      </section>
    </>
  );
}
