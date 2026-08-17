import { Code2 } from "lucide-react";
import aboutImg from "@/assets/about-color.webp";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="border-b border-border">
      <div id="inicio" className="pt-16 sm:pt-20">
        <Reveal>
          <div data-about-stage className="about-parallax relative isolate flex min-h-[calc(100svh-4rem)] items-end justify-center overflow-hidden">
            <p data-about-word className="about-parallax-word absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans font-black uppercase" aria-hidden="true">Portfolio</p>
            <img data-about-photo src={aboutImg} alt="Oliver Teixeira" className="relative z-20 h-auto max-h-[92%] w-auto max-w-[92%] object-contain object-bottom will-change-transform sm:max-w-[72%] lg:max-w-[58%]" />
            <div className="absolute inset-x-0 bottom-0 z-30 h-28 bg-linear-to-t from-background to-transparent" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="border-b border-border pb-5">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">01 / Sobre</p>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal><p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">Autodidata<br />19 anos<br />Desenvolvedor em formação</p></Reveal>
          <div className="min-w-0">
            <Reveal>
              <p className="max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">Comecei pela curiosidade: queria saber como sites e jogos saíam de uma ideia e viravam algo que outras pessoas podiam usar. Desde então, estudo por conta própria e testo o que aprendo em projetos de verdade.</p>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">Gosto tanto da parte visual quanto da lógica. Ainda estou no começo, mas levo cada trabalho como uma chance de melhorar o código, o olhar e a forma de resolver problemas.</p>
            </Reveal>
            <Reveal className="mt-12 border-y border-border">
              <div className="grid gap-4 py-6 sm:grid-cols-[48px_220px_1fr] sm:items-center">
                <Code2 size={20} className="text-accent" />
                <h3 className="font-sans text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Aprender fazendo</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Projetos reais, erros reais e evolução constante.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
