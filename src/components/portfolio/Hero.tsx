import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import profile from "@/assets/profile.png";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-hero" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles size={14} className="text-accent" />
            Estudante autônomo de programação
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-7xl">
            Olá, eu sou <span className="text-gradient">Oliver</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Sempre em busca do próximo desafio pra construir. Transformo curiosidade em
            código, misturando a paixão por jogos e por música em cada projeto que crio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-violet"
            >
              Ver Projetos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Entrar em Contato
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <SocialLinks />
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" /> 19 anos, aprendendo na prática
            </span>
          </div>
        </div>

        <div className="reveal is-visible flex justify-center lg:justify-end">
          <div className="relative animate-float">
            <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-accent opacity-30 blur-3xl" />
            <div className="relative grid h-72 w-72 place-items-center rounded-full border border-border bg-card/40 backdrop-blur-sm sm:h-96 sm:w-96">
              <div className="absolute inset-4 rounded-full border border-primary/30" />
              <img
                src={profile}
                alt="Foto de Oliver"
                className="relative z-10 h-64 w-64 object-contain drop-shadow-2xl sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
