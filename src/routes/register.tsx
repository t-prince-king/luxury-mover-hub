/**
 * /register — placeholder account creation page.
 */
import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/config/settings";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: `Create Account — ${site.name}` },
      { name: "description", content: `Register for the ${site.name} client portal.` },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <section className="bg-cream min-h-[70vh] flex items-center">
      <div className="container-page max-w-md w-full">
        <div className="text-center mb-10">
          <p className="eyebrow text-gold mb-4">Become A Client</p>
          <h1 className="font-serif text-4xl md:text-5xl text-navy mb-3">Create Account</h1>
          <p className="text-sm text-muted-foreground">
            Join the {site.shortName} private client roster.
          </p>
        </div>

        <form className="space-y-5 bg-white border border-navy/10 p-8 shadow-sm">
          <div>
            <label className="eyebrow text-xs text-navy/70 block mb-2">Full Name</label>
            <input disabled placeholder="Jane Doe" className="w-full border border-navy/20 px-4 py-3 bg-cream/40" />
          </div>
          <div>
            <label className="eyebrow text-xs text-navy/70 block mb-2">Email</label>
            <input type="email" disabled placeholder="you@example.com" className="w-full border border-navy/20 px-4 py-3 bg-cream/40" />
          </div>
          <div>
            <label className="eyebrow text-xs text-navy/70 block mb-2">Password</label>
            <input type="password" disabled placeholder="••••••••" className="w-full border border-navy/20 px-4 py-3 bg-cream/40" />
          </div>
          <button type="button" disabled className="w-full px-6 py-3 bg-navy/40 text-cream eyebrow cursor-not-allowed">
            Register (Coming Soon)
          </button>
          <p className="text-xs text-center text-muted-foreground">
            Registration opens with our private client launch. Contact us to be added to the waitlist.
          </p>
        </form>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
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
