/**
 * /dashboard — placeholder client dashboard.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/config/settings";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: `Dashboard — ${site.name}` },
      { name: "description", content: `Client dashboard for ${site.name}.` },
    ],
  }),
  component: DashboardPage,
});

const tiles = [
  { label: "My Properties", desc: "Saved listings & acquisitions", to: "/properties" as const },
  { label: "My Bookings", desc: "Car rentals, taxi & cargo", to: "/transport" as const },
  { label: "Concierge", desc: "Direct line to your advisor", to: "/contact" as const },
];

function DashboardPage() {
  return (
    <section className="bg-cream min-h-[70vh] py-20">
      <div className="container-page">
        <div className="text-center mb-12">
          <p className="eyebrow text-gold mb-4">Client Dashboard</p>
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-3">Welcome</h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Your private {site.shortName} workspace. Full functionality unlocks with our upcoming client portal launch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {tiles.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="block bg-white border border-navy/10 p-8 hover:border-gold transition-colors group"
            >
              <h3 className="font-serif text-2xl text-navy mb-2 group-hover:text-gold transition-colors">{t.label}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="px-6 py-3 bg-navy text-cream eyebrow hover:bg-gold hover:text-navy transition-colors">
            Go Home
          </Link>
          <Link to="/login" className="px-6 py-3 border border-navy text-navy eyebrow hover:bg-navy hover:text-cream transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
