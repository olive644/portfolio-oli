import { Reveal } from "./Reveal";

const skills = ["JavaScript", "HTML & CSS", "Python", "GameMaker", "Figma"];

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-6 sm:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">03 / Ferramentas</p>
          <div>
            <h2 className="text-5xl sm:text-7xl">O que uso hoje</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">Uma lista direta do que já faz parte da minha rotina de estudo e criação.</p>
          </div>
        </Reveal>
        <div className="mt-12 border-t border-border">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={index * 55}>
              <div className="group grid grid-cols-[56px_1fr_auto] items-center border-b border-border py-5 transition-colors hover:text-accent sm:py-7">
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                <span className="font-display text-3xl sm:text-5xl">{skill}</span>
                <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
