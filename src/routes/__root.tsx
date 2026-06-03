import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingQuickAccess } from "@/components/FloatingQuickAccess";
import { site } from "@/config/settings";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-gold mb-4">Error 404</p>
        <h1 className="font-serif text-6xl text-navy mb-4">Page not found</h1>
        <p className="text-sm text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex px-8 py-3 bg-navy text-cream eyebrow hover:bg-gold hover:text-navy transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-gold mb-4">Unexpected error</p>
        <h1 className="font-serif text-4xl text-navy mb-4">This page didn't load</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Something went wrong. You can try again or return home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-6 py-3 bg-navy text-cream eyebrow hover:bg-gold hover:text-navy transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-navy text-navy eyebrow hover:bg-navy hover:text-cream transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — ${site.tagline}` },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Prestige Connect is a premium, enterprise-level website and management system for real estate and transport services." },
      { property: "og:description", content: "Prestige Connect is a premium, enterprise-level website and management system for real estate and transport services." },
      { name: "twitter:description", content: "Prestige Connect is a premium, enterprise-level website and management system for real estate and transport services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/634fc673-a594-4574-928c-61709969cfb9/id-preview-4b732178--b6985672-4d8f-4bdc-9f77-b07b168afd5b.lovable.app-1780505429923.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/634fc673-a594-4574-928c-61709969cfb9/id-preview-4b732178--b6985672-4d8f-4bdc-9f77-b07b168afd5b.lovable.app-1780505429923.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-dvh flex flex-col">
        <SiteHeader />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <FloatingQuickAccess />
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
