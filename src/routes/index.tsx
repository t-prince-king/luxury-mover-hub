import { createFileRoute, Link } from "@tanstack/react-router";
import heroVilla from "@/assets/hero-villa.jpg";
import realtyImg from "@/assets/division-realty.jpg";
import transportImg from "@/assets/division-transport.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import { site, stats } from "@/config/settings";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Premium Real Estate & Global Transport` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — Premium Real Estate & Global Transport` },
      { property: "og:description", content: site.description },
      { property: "og:image", content: heroVilla },
    ],
  }),
  component: Home,
});

/**
 * Home page composition:
 *  1. Cinematic hero (centered, dual CTA)
 *  2. Two-pillar services (Realty / Transport)
 *  3. Trust bar (stats from config/settings.ts)
 *  4. Featured properties (zigzag grid)
 *  5. Final CTA strip
 */
function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[600px] bg-navy overflow-hidden">
        <img
          src={heroVilla}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/30" />
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 vg-reveal">
          <p className="eyebrow text-gold mb-6">Estate · Aviation · Logistics</p>
          <h1 className="font-serif text-5xl md:text-8xl text-cream mb-6 max-w-5xl leading-[0.95] text-balance">
            The Architecture of{" "}
            <span className="italic text-gold">Distinction</span>
          </h1>
          <p className="text-cream/70 max-w-xl text-lg font-light leading-relaxed mb-10 text-pretty">
            {site.tagline} For the discerning enterprise, since {site.foundedYear}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/properties"
              className="bg-gold text-navy px-10 py-4 eyebrow hover:bg-cream transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              to="/transport"
              className="border border-cream/30 text-cream px-10 py-4 eyebrow hover:bg-cream/10 transition-colors"
            >
              Private Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* ── Two Pillars ──────────────────────────────────────── */}
      <section className="container-page py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <PillarCard
            eyebrow="Asset Division"
            title="Premier Realty"
            description="Securing trophy assets across major global financial hubs — from residential estates to commercial headquarters and off-market opportunities."
            image={realtyImg}
            alt="Luxury interior with navy and gold furnishings"
            cta="Explore Estates"
            to="/properties"
          />
          <PillarCard
            eyebrow="Mobility Division"
            title="Global Logistics"
            description="Seamless transit via our exclusive fleet of private aviation, chauffeured ground transport, and bonded cargo services worldwide."
            image={transportImg}
            alt="Black luxury sedan and private jet at sunset"
            cta="View The Fleet"
            to="/transport"
          />
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="container-page border-y border-gold/20 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-gold text-4xl md:text-5xl font-serif mb-2">{s.value}</p>
              <p className="text-cream/40 eyebrow">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Properties ──────────────────────────────── */}
      <section className="container-page py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow text-gold mb-4">The Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
              Featured Portfolio
            </h2>
          </div>
          <Link
            to="/properties"
            className="eyebrow text-navy border-b border-navy pb-1 hover:text-gold hover:border-gold transition-colors w-fit"
          >
            View All Holdings →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PropertyCard
            image={property1}
            location="Mallorca, Spain"
            title="The Limestone Pavilion"
            price="€18.5M"
          />
          <div className="md:mt-16">
            <PropertyCard
              image={property2}
              location="Manhattan, NY"
              title="One Hyde Observatory"
              price="$42.0M"
            />
          </div>
          <PropertyCard
            image={property3}
            location="Verbier, Switzerland"
            title="Summit Chalet IV"
            price="CHF 12.2M"
          />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="bg-secondary py-24">
        <div className="container-page text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6 text-balance">
            Begin a <span className="italic text-gold">private consultation</span>.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Our advisors operate with absolute discretion. Reach us by appointment
            from any of our global offices.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-navy text-cream px-10 py-4 eyebrow hover:bg-gold hover:text-navy transition-colors"
          >
            Request an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}

/* ── Local components ──────────────────────────────────────── */

function PillarCard(props: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  to: "/properties" | "/transport";
}) {
  return (
    <Link to={props.to} className="group block">
      <div className="relative overflow-hidden mb-8">
        <img
          src={props.image}
          alt={props.alt}
          loading="lazy"
          width={800}
          height={1000}
          className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-navy text-cream p-6">
          <p className="eyebrow text-gold mb-2">{props.eyebrow}</p>
          <h3 className="font-serif text-3xl">{props.title}</h3>
        </div>
      </div>
      <p className="text-navy/60 leading-relaxed mb-6 max-w-md">{props.description}</p>
      <span className="eyebrow text-navy border-b border-navy pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
        {props.cta}
      </span>
    </Link>
  );
}

function PropertyCard(props: {
  image: string;
  location: string;
  title: string;
  price: string;
}) {
  return (
    <article className="group">
      <div className="overflow-hidden mb-6">
        <img
          src={props.image}
          alt={props.title}
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
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
