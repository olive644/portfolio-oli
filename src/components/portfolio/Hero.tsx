import { ArrowDownRight } from "lucide-react";
import profile from "@/assets/profile.png";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="inicio" className="min-h-[92vh] border-b border-border pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:pb-24">
        <div className="reveal is-visible">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Oliver Teixeira · Desenvolvedor em formação
          </p>
          <h1 className="max-w-4xl text-[clamp(4.2rem,11vw,9rem)] leading-[0.78] tracking-[-0.055em]">
            Código, jogos <span className="italic text-accent">&</span> curiosidade.
          </h1>
          <div className="mt-10 grid max-w-3xl gap-8 border-t border-border pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tenho 19 anos e aprendo programação construindo. Aqui estão os projetos,
              ferramentas e interesses que formam meu caminho até agora.
            </p>
            <a href="#projetos" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-8">
              Ver o que fiz <ArrowDownRight size={17} />
            </a>
          </div>
          <div className="mt-10"><SocialLinks /></div>
        </div>

        <div className="reveal is-visible lg:justify-self-end">
          <figure className="relative ml-auto max-w-sm border-l border-t border-border bg-secondary pt-5 pl-5">
            <span className="absolute -left-3 -top-3 bg-background px-2 font-mono text-xs text-muted-foreground">01 / OLI</span>
            <img src={profile} alt="Oliver Teixeira" className="aspect-[4/5] w-full object-contain object-bottom" />
          </figure>
        </div>
      </div>
    </section>
  );
}
