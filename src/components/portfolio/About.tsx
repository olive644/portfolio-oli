import { Code2, Gamepad2, Music4, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Programação autodidata",
    text: "Aprendendo na prática, construindo projetos reais e transformando ideias em código.",
  },
  {
    icon: Gamepad2,
    title: "Jogos",
    text: "Apaixonado por jogar e, mais ainda, por imaginar e criar os meus próprios mundos.",
  },
  {
    icon: Music4,
    title: "Música",
    text: "A trilha sonora que embala boa parte do meu processo criativo e mantém o foco.",
  },
  {
    icon: Sparkles,
    title: "Curiosidade",
    text: "Curioso por natureza, sempre buscando o próximo desafio para explorar e resolver.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Sobre mim
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            Curiosidade que vira <span className="text-gradient">código</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-accent opacity-25 blur-2xl" />
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <img
                  src={aboutImg}
                  alt="Retrato artístico de Oliver"
                  className="aspect-square w-full object-cover mix-blend-luminosity contrast-125 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Tenho 19 anos e passo boa parte do meu tempo construindo. Sou estudante
                  autônomo de programação, do tipo que aprende fazendo: pego uma ideia,
                  quebro em pedaços e vou transformando em algo que funciona de verdade.
                </p>
                <p>
                  Sou apaixonado por jogos. Gosto de jogar, mas o que me move mesmo é
                  pensar em como criar os meus próprios. É essa vontade de entender os
                  bastidores que me empurra pra aprender coisas novas todos os dias. E a
                  música está sempre presente, embalando o processo criativo do começo ao fim.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 80}>
                  <div className="group h-full rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <h.icon size={20} />
                    </div>
                    <h3 className="mt-4 text-base font-semibold">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {h.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
