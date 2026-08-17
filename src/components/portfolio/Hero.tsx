import { ArrowDownRight } from "lucide-react";
import profile from "@/assets/profile.png";
import { TextReveal } from "@/components/ui/cascade-text";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden border-b border-border pt-28 sm:pt-36">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-6xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:pb-24">
        <div>
          <p data-hero-kicker className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-accent">Oliver Teixeira · Desenvolvedor em formação</p>
          <div className="overflow-hidden py-2 [perspective:900px]">
            <div data-hero-title><TextReveal text="Portfolio" as="h1" fontSize="clamp(3rem, 15vw, 9.5rem)" staggerDelay={38} duration={360} easing="cubic-bezier(0.22, 1, 0.36, 1)" color="#f4f4f1" hoverColor="#858585" className="max-w-full font-sans sm:max-w-4xl" /></div>
          </div>
          <div data-hero-copy className="mt-10 grid max-w-3xl gap-8 border-t border-border pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Tenho 19 anos e aprendo programação construindo. Aqui estão os projetos, ferramentas e interesses que formam meu caminho até agora.</p>
            <a href="#projetos" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-accent decoration-2 underline-offset-8">Explorar projetos <ArrowDownRight size={17} /></a>
          </div>
          <div data-hero-copy className="mt-10"><SocialLinks /></div>
        </div>
        <div className="lg:justify-self-end"><figure data-hero-portrait className="relative ml-auto max-w-sm overflow-hidden border-l border-t border-border bg-secondary pt-5 pl-5 will-change-transform"><span className="absolute left-0 top-0 z-10 bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground">SUBJECT / 01</span><img src={profile} alt="Oliver Teixeira" className="aspect-[4/5] w-full object-contain object-bottom" /></figure></div>
      </div>
    </section>
  );
}
