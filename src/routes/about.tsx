import { createFileRoute } from "@tanstack/react-router";
import realty from "@/assets/division-realty.jpg";
import { site, stats } from "@/config/settings";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vanguard" },
      { name: "description", content: "Vanguard is a private partnership operating in real estate acquisition and global transport since 1982." },
      { property: "og:title", content: "About — Vanguard" },
      { property: "og:description", content: "Vanguard is a private partnership operating in real estate acquisition and global transport since 1982." },
      { property: "og:image", content: realty },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "1982", text: "Founded in Mayfair, London as a single-office real estate consultancy." },
  { year: "1996", text: "Opened New York office; entered commercial real estate advisory." },
  { year: "2008", text: "Mobility Division launched — private aviation and chauffeur." },
  { year: "2017", text: "Expanded into Singapore and Dubai; cargo logistics arm formed." },
  { year: "2024", text: "Twelve offices, $4.2B in assets under management." },
];

function AboutPage() {
  return (
    <>
      <section className="container-page py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow text-gold mb-6">Est. {site.foundedYear}</p>
          <h1 className="font-serif text-5xl md:text-7xl text-navy leading-[1.05] mb-8">
            A private partnership, <span className="italic text-gold">quietly built</span>.
          </h1>
          <p className="text-navy/70 leading-relaxed mb-4">
            Vanguard was founded on a single conviction: that the acquisition
            of a property — and the movement to and from it — should be handled
            by the same trusted hand.
          </p>
          <p className="text-navy/70 leading-relaxed">
            Four decades on, that conviction now governs twelve offices and a
            client roster we will not name.
          </p>
        </div>
        <img
          src={realty}
          alt="Vanguard interior with navy and gold furnishings"
          loading="lazy"
          width={800}
          height={1000}
          className="w-full aspect-[4/5] object-cover"
        />
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-navy text-cream py-24">
        <div className="container-page grid md:grid-cols-3 gap-12">
          {[
            { label: "Mission", title: "Stewardship over salesmanship.", body: "We are paid to protect, not to push. Every recommendation passes a stewardship test." },
            { label: "Vision", title: "One trusted hand.", body: "A single counterparty for the entire arc — from acquisition through transit and ownership." },
            { label: "Values", title: "Discretion. Patience. Precision.", body: "We move slowly when it serves the client, and decisively when it doesn't." },
          ].map((v) => (
            <div key={v.label}>
              <p className="eyebrow text-gold mb-6">{v.label}</p>
              <h3 className="font-serif text-3xl mb-4">{v.title}</h3>
              <p className="text-cream/60 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-24">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow text-gold mb-4">A brief history</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight">
            Forty-two years, in five lines.
          </h2>
        </div>
        <ol className="border-l border-gold/40">
          {TIMELINE.map((t) => (
            <li key={t.year} className="pl-8 pb-10 last:pb-0 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 bg-gold rounded-full" aria-hidden />
              <p className="font-serif text-3xl text-navy mb-2">{t.year}</p>
              <p className="text-navy/60 max-w-lg">{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-20">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-navy text-4xl md:text-5xl font-serif mb-2">{s.value}</p>
              <p className="text-navy/50 eyebrow">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
