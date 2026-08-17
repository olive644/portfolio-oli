import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollExperience } from "@/components/portfolio/ScrollExperience";

const SITE_URL = "https://portfolio-oli-phi.vercel.app";
export const Route = createFileRoute("/")({ component: Index, head: () => ({ meta: [
  { property: "og:image", content: `${SITE_URL}/og-image.jpg` }, { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "1200" }, { property: "og:url", content: SITE_URL }, { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
] }) });

function Index() {
  return <div className="min-h-screen overflow-clip bg-background"><ScrollExperience /><Navbar /><main><About /><Skills /><Projects /><Contact /></main><Toaster /></div>;
}
