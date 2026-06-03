/**
 * /login — placeholder sign-in page.
 * Real auth will be wired when Lovable Cloud is enabled.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/config/settings";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: `Sign In — ${site.name}` },
      { name: "description", content: `Client portal sign in for ${site.name}.` },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <section className="bg-cream min-h-[70vh] flex items-center">
      <div className="container-page max-w-md w-full">
        <div className="text-center mb-10">
          <p className="eyebrow text-gold mb-4">Client Portal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-3">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            Access your {site.shortName} concierge dashboard.
          </p>
        </div>

        <form className="space-y-5 bg-white border border-navy/10 p-8 shadow-sm">
          <div>
            <label className="eyebrow text-xs text-navy/70 block mb-2">Email</label>
            <input
              type="email"
              disabled
              placeholder="you@example.com"
              className="w-full border border-navy/20 px-4 py-3 bg-cream/40 text-navy"
            />
          </div>
          <div>
            <label className="eyebrow text-xs text-navy/70 block mb-2">Password</label>
            <input
              type="password"
              disabled
              placeholder="••••••••"
              className="w-full border border-navy/20 px-4 py-3 bg-cream/40 text-navy"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full px-6 py-3 bg-navy/40 text-cream eyebrow cursor-not-allowed"
          >
            Sign In (Coming Soon)
          </button>
          <p className="text-xs text-center text-muted-foreground">
            The client portal is being prepared. Please contact the concierge for assistance.
          </p>
        </form>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link to="/" className="px-6 py-3 bg-navy text-cream eyebrow hover:bg-gold hover:text-navy transition-colors">
            Go Home
          </Link>
          <Link to="/contact" className="px-6 py-3 border border-navy text-navy eyebrow hover:bg-navy hover:text-cream transition-colors">
            Contact Concierge
          </Link>
        </div>
      </div>
    </section>
  );
}
