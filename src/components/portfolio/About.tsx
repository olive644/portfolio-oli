import { Code2, Gamepad2, Music4 } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { TextReveal } from "@/components/ui/cascade-text";
import { Reveal } from "./Reveal";

const interests = [
  { icon: Code2, label: "Aprender fazendo", text: "Projetos reais, erros reais e evolução constante." },
  { icon: Gamepad2, label: "Criar jogos", text: "Entender os bastidores e construir meus próprios mundos." },
  { icon: Music4, label: "Música sempre", text: "Companhia para estudar, criar e manter o foco." },
];

export function About() {
  return (
    <section id="sobre" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-4 border-b border-border pb-8 sm:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">02 / Sobre</p>
          <TextReveal text="Ambicioso" as="h2" fontSize="clamp(3.8rem, 8vw, 7rem)" staggerDelay={44} duration={380} direction="down" color="#f4f4f1" hoverColor="#777" style={{ fontFamily: "var(--font-display)", fontWeight: 400, textTransform: "none", letterSpacing: "-0.04em" }} />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal><img src={aboutImg} alt="Oliver" className="aspect-[4/5] w-full object-cover grayscale" /></Reveal>
          <div>
            <Reveal>
              <p className="max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">Comecei pela curiosidade: queria saber como sites e jogos saíam de uma ideia e viravam algo que outras pessoas podiam usar. Desde então, estudo por conta própria e testo o que aprendo em projetos de verdade.</p>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">Gosto tanto da parte visual quanto da lógica. Ainda estou no começo, mas levo cada trabalho como uma chance de melhorar o código, o olhar e a forma de resolver problemas.</p>
            </Reveal>
            <div className="mt-12 divide-y divide-border border-y border-border">
              {interests.map((item, index) => <Reveal key={item.label} delay={index * 70}><div className="grid gap-3 py-5 sm:grid-cols-[48px_180px_1fr] sm:items-center"><item.icon size={20} className="text-accent" /><h3 className="text-2xl">{item.label}</h3><p className="text-sm text-muted-foreground">{item.text}</p></div></Reveal>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
