import { Code2, Instagram } from "lucide-react";
import portfolioBackground from "@/assets/portfolio-bg.webp";
import portfolioIcons from "@/assets/portfolio-icons.webp";
import portfolioPerson from "@/assets/portfolio-person.webp";
import { Reveal } from "./Reveal";
import { SkillsMarquee } from "./SkillsMarquee";

export function About() {
  return (
    <section id="sobre" className="border-b border-border">
      <div id="inicio" className="pt-16 sm:pt-20">
        <Reveal>
          <div data-about-stage className="about-parallax relative isolate flex h-[clamp(300px,56.25vw,900px)] items-end justify-center overflow-hidden">
            <img data-about-bg src={portfolioBackground} alt="" className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center will-change-transform" aria-hidden="true" />
            <p data-about-word className="about-parallax-word pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans font-black uppercase" aria-hidden="true">Portfolio</p>
            <img data-about-icons src={portfolioIcons} alt="" className="pointer-events-none absolute inset-0 z-20 h-full w-full object-contain object-center will-change-transform" aria-hidden="true" />
            <img data-about-person src={portfolioPerson} alt="Oliver Teixeira apresentando seu perfil de desenvolvedor" className="absolute inset-0 z-30 h-full w-full object-contain object-center will-change-transform" />
            <div className="pointer-events-none absolute inset-0 z-40 bg-[linear-gradient(180deg,rgba(5,5,5,.08),transparent_28%,transparent_76%,#050505_100%)]" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
      <SkillsMarquee />
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="border-b border-border pb-5">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">01 / Sobre</p>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">Autodidata<br />19 anos<br />Desenvolvedor em formação</p>
            <a href="https://www.instagram.com/galeria.oli/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none">
              <Instagram size={15} aria-hidden="true" /> @galeria.oli
            </a>
          </Reveal>
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
