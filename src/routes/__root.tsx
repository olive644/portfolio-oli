import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return <div className="grid min-h-screen place-items-center px-5"><div><p className="font-mono text-xs text-accent">ERRO 404</p><h1 className="mt-3 text-6xl">Página não encontrada.</h1><Link to="/" className="mt-8 inline-block border-b-2 border-accent pb-1">Voltar ao início</Link></div></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return <div className="grid min-h-screen place-items-center px-5"><div><p className="font-mono text-xs text-accent">ALGO DEU ERRADO</p><h1 className="mt-3 text-6xl">Esta página não carregou.</h1><button onClick={() => { router.invalidate(); reset(); }} className="mt-8 border-b-2 border-accent pb-1">Tentar novamente</button></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oliver PORTFOLIO" },
      { name: "description", content: "Portfólio de Oliver Teixeira: projetos web, estudos de programação e criação de jogos." },
      { name: "author", content: "Oliver Teixeira" }, { property: "og:title", content: "Oliver PORTFOLIO" },
      { property: "og:description", content: "Projetos web, estudos de programação e criação de jogos." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss }, { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" },
    ],
  }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}
