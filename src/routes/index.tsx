import { createFileRoute, Link } from "@tanstack/react-router";
import { Home as HomeIcon, Car, Plane, Package, Building2, KeyRound, Search } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import realtyImg from "@/assets/division-realty.jpg";
import transportImg from "@/assets/division-transport.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import sedan from "@/assets/fleet-sedan.jpg";
import suv from "@/assets/fleet-suv.jpg";
import cargoImg from "@/assets/fleet-cargo.jpg";
import { site, stats } from "@/config/settings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Premium Real Estate & Transport Services` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — Premium Real Estate & Transport Services` },
      { property: "og:description", content: site.description },
      { property: "og:image", content: heroVilla },
    ],
  }),
  component: Home,
});

/**
 * Home page composition (matches spec flow):
 *  1. Hero
 *  2. Choose Your Service (dual premium cards)
 *  3. Real Estate Showcase
 *  4. Transport Showcase
 *  5. Car Rental Showcase
 *  6. Featured Properties
 *  7. Popular Transport Routes
 *  8. Testimonials
 *  9. Contact CTA
 */
function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative h-[85vh] min-h-[600px] bg-navy overflow-hidden">
        <img src={heroVilla} alt="" width={1920} height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/30" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 vg-reveal">
          <p className="eyebrow text-gold mb-6">Real Estate · Transport · Logistics</p>
          <h1 className="font-serif text-5xl md:text-8xl text-cream mb-6 max-w-5xl leading-[0.95] text-balance">
            Two divisions. <span className="italic text-gold">One standard.</span>
          </h1>
          <p className="text-cream/70 max-w-xl text-lg font-light leading-relaxed mb-10 text-pretty">
            {site.tagline} Since {site.foundedYear}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/properties" className="bg-gold text-navy px-10 py-4 eyebrow hover:bg-cream transition-colors">
              View Properties
            </Link>
            <Link to="/transport" className="border border-cream/30 text-cream px-10 py-4 eyebrow hover:bg-cream/10 transition-colors">
              Book Transport
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Choose Your Service */}
      <section className="container-page py-20 md:py-28">
        <div className="text-center mb-16">
          <p className="eyebrow text-gold mb-4">Choose Your Service</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">
            Which division do you need today?
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <ServiceCard
            image={realtyImg}
            emoji="🏠"
            eyebrow="Real Estate Services"
            title="Find your next address."
            description="From off-market trophy estates to commercial headquarters — buy, rent or browse our curated portfolio."
            actions={[
              { label: "View Properties", to: "/properties" },
              { label: "Buy Property", to: "/properties" },
              { label: "Rent Property", to: "/properties" },
            ]}
          />
          <ServiceCard
            image={transportImg}
            emoji="🚗"
            eyebrow="Transport Services"
            title="Move anything, anywhere."
            description="On-demand taxi, daily-to-monthly car rental, airport transfers and bonded cargo — one concierge."
            actions={[
              { label: "Book Transport", to: "/transport" },
              { label: "Car Rental", to: "/car-rental" },
              { label: "Airport Pickup", to: "/taxi" },
              { label: "Cargo Services", to: "/cargo" },
            ]}
          />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy py-16">
        <div className="container-page border-y border-gold/20 py-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-gold text-4xl md:text-5xl font-serif mb-2">{s.value}</p>
              <p className="text-cream/40 eyebrow">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Real Estate Showcase */}
      <Showcase
        eyebrow="Real Estate Showcase"
        title="Curated property portfolio."
        description="Residential, commercial and investment assets in the world's most resilient markets."
        ctaLabel="Explore Real Estate"
        ctaTo="/properties"
        items={[
          { icon: Building2, label: "Residential" },
          { icon: KeyRound, label: "Rentals" },
          { icon: HomeIcon, label: "Commercial" },
          { icon: Search, label: "Off-market" },
        ]}
        image={realtyImg}
      />

      {/* 4. Transport Showcase */}
      <Showcase
        reverse
        background="secondary"
        eyebrow="Transport Showcase"
        title="A complete mobility stack."
        description="Ground, air and cargo — coordinated by a single concierge across twelve global hubs."
        ctaLabel="Open Transport Hub"
        ctaTo="/transport"
        items={[
          { icon: Car, label: "Chauffeur" },
          { icon: Plane, label: "Airport" },
          { icon: Package, label: "Cargo" },
          { icon: KeyRound, label: "Moving" },
        ]}
        image={transportImg}
      />

      {/* 5. Car Rental Showcase */}
      <section className="container-page py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-gold mb-4">Car Rental Showcase</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
              Six categories. <span className="italic">Daily, weekly, monthly.</span>
            </h2>
          </div>
          <Link to="/car-rental" className="eyebrow text-navy border-b border-navy pb-1 hover:text-gold hover:border-gold transition-colors w-fit">
            See all vehicles →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <CarCard image={sedan} category="Sedan" name="Mercedes E-Class" price="from $120/day" />
          <CarCard image={suv} category="SUV" name="Range Rover Sport" price="from $220/day" />
          <CarCard image={cargoImg} category="Bus" name="Executive Coach" price="from $420/day" />
        </div>
      </section>

      {/* 6. Featured Properties */}
      <section className="bg-secondary py-24">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow text-gold mb-4">The Collection</p>
              <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
                Featured Properties
              </h2>
            </div>
            <Link to="/properties" className="eyebrow text-navy border-b border-navy pb-1 hover:text-gold hover:border-gold transition-colors w-fit">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PropertyCard image={property1} location="Mallorca, Spain" title="The Limestone Pavilion" price="€18.5M" />
            <div className="md:mt-16">
              <PropertyCard image={property2} location="Manhattan, NY" title="One Hyde Observatory" price="$42.0M" />
            </div>
            <PropertyCard image={property3} location="Verbier, Switzerland" title="Summit Chalet IV" price="CHF 12.2M" />
          </div>
        </div>
      </section>

      {/* 7. Popular Transport Routes */}
      <section className="container-page py-24">
        <div className="text-center mb-14">
          <p className="eyebrow text-gold mb-4">Popular Transport Routes</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">Most-booked corridors.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {ROUTES.map((r) => (
            <Link key={r.from + r.to_} to="/taxi"
              className="bg-background p-8 hover:bg-secondary transition-colors group">
              <p className="eyebrow text-gold text-xs mb-3">{r.tag}</p>
              <p className="font-serif text-2xl text-navy mb-2">
                {r.from} <span className="text-gold">→</span> {r.to_}
              </p>
              <p className="text-sm text-navy/60">{r.detail}</p>
              <p className="eyebrow text-xs text-navy mt-5 group-hover:text-gold transition-colors">Book this route →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-navy text-cream py-24">
        <div className="container-page">
          <p className="eyebrow text-gold mb-4 text-center">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">In their words.</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border-l-2 border-gold pl-6">
                <blockquote className="font-serif italic text-xl leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <figcaption>
                  <p className="text-gold eyebrow text-xs">{t.name}</p>
                  <p className="text-cream/50 text-xs mt-1">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact CTA */}
      <section className="bg-secondary py-24">
        <div className="container-page text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6 text-balance">
            Begin a <span className="italic text-gold">private consultation</span>.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Whether it's a residence or a fleet — our advisors operate with absolute discretion.
          </p>
          <Link to="/contact" className="inline-block bg-navy text-cream px-10 py-4 eyebrow hover:bg-gold hover:text-navy transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

/* ─── Data ─── */

const ROUTES = [
  { tag: "01", from: "JFK Airport", to_: "Manhattan", detail: "Executive sedan · 45 min · from $180" },
  { tag: "02", from: "Heathrow T5", to_: "Mayfair", detail: "Mercedes S-Class · 55 min · from £210" },
  { tag: "03", from: "Dubai Marina", to_: "DXB Airport", detail: "Range Rover · 35 min · from AED 320" },
  { tag: "04", from: "Geneva Centre", to_: "Verbier Chalets", detail: "SUV transfer · 1h 50m · from CHF 540" },
  { tag: "05", from: "Singapore CBD", to_: "Changi T3", detail: "Maybach · 25 min · from S$280" },
  { tag: "06", from: "Côte d'Azur", to_: "Monaco", detail: "Coastal chauffeur · 40 min · from €260" },
];

const TESTIMONIALS = [
  { name: "Catherine D.", role: "Family Office Principal", quote: "They closed a Mallorca acquisition and coordinated our relocation fleet in the same week. Effortless." },
  { name: "Marcus L.", role: "CEO, Industrial Group", quote: "Bonded cargo across three continents without a single delay. The standard others measure against." },
  { name: "Aanya P.", role: "Private Investor", quote: "Discretion, taste and operational excellence — exactly what was promised." },
];

/* ─── Local components ─── */

function ServiceCard(props: {
  image: string;
  emoji: string;
  eyebrow: string;
  title: string;
  description: string;
  actions: Array<{ label: string; to: "/properties" | "/transport" | "/car-rental" | "/taxi" | "/cargo" }>;
}) {
  return (
    <article className="group bg-cream border border-navy/10 overflow-hidden hover:border-gold transition-colors">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={props.image} alt="" loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-5 left-5 bg-navy text-gold size-14 flex items-center justify-center text-3xl">
          {props.emoji}
        </div>
      </div>
      <div className="p-8">
        <p className="eyebrow text-gold text-xs mb-3">{props.eyebrow}</p>
        <h3 className="font-serif text-3xl text-navy mb-4">{props.title}</h3>
        <p className="text-navy/60 text-sm leading-relaxed mb-7">{props.description}</p>
        <div className="flex flex-wrap gap-3">
          {props.actions.map((a) => (
            <Link key={a.label} to={a.to}
              className="px-5 py-2.5 eyebrow text-xs bg-navy text-cream hover:bg-gold hover:text-navy transition-all">
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function Showcase(props: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: "/properties" | "/transport";
  items: Array<{ icon: typeof HomeIcon; label: string }>;
  image: string;
  reverse?: boolean;
  background?: "default" | "secondary";
}) {
  const bg = props.background === "secondary" ? "bg-secondary" : "bg-background";
  return (
    <section className={`${bg} py-24`}>
      <div className={`container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${props.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <p className="eyebrow text-gold mb-4">{props.eyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-6">{props.title}</h2>
          <p className="text-navy/60 max-w-md mb-8">{props.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-10 max-w-md">
            {props.items.map((i) => (
              <div key={i.label} className="flex items-center gap-3 border border-navy/10 p-4">
                <i.icon className="size-5 text-gold" />
                <span className="eyebrow text-xs text-navy">{i.label}</span>
              </div>
            ))}
          </div>
          <Link to={props.ctaTo} className="inline-block bg-navy text-cream px-8 py-3 eyebrow hover:bg-gold hover:text-navy transition-colors">
            {props.ctaLabel}
          </Link>
        </div>
        <img src={props.image} alt="" loading="lazy"
          className="w-full aspect-[4/5] object-cover" />
      </div>
    </section>
  );
}

function CarCard(props: { image: string; category: string; name: string; price: string }) {
  return (
    <Link to="/car-rental" className="group block bg-cream border border-navy/10 hover:border-gold transition-colors">
      <div className="overflow-hidden aspect-[4/3]">
        <img src={props.image} alt={props.name} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6 flex justify-between items-center">
        <div>
          <p className="eyebrow text-gold text-xs mb-1">{props.category}</p>
          <h3 className="font-serif text-xl text-navy">{props.name}</h3>
        </div>
        <span className="text-sm text-navy/60">{props.price}</span>
      </div>
    </Link>
  );
}

function PropertyCard(props: { image: string; location: string; title: string; price: string }) {
  return (
    <article className="group">
      <div className="overflow-hidden mb-6">
        <img src={props.image} alt={props.title} loading="lazy"
          width={1024} height={1280}
          className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="eyebrow text-gold mb-2">{props.location}</p>
          <h3 className="font-serif text-2xl text-navy">{props.title}</h3>
        </div>
        <span className="font-serif text-lg text-navy whitespace-nowrap">{props.price}</span>
      </div>
    </article>
  );
}
