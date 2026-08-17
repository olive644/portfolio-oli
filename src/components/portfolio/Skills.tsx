import { useRef, type PointerEvent } from "react";
import { TextReveal } from "@/components/ui/cascade-text";
import { Reveal } from "./Reveal";

const skills = [
  { name: "JavaScript", code: "JS", note: "INTERAÇÃO" }, { name: "HTML", code: "05", note: "ESTRUTURA" },
  { name: "CSS", code: "CSS", note: "INTERFACE" }, { name: "Python", code: "PY", note: "LÓGICA" },
  { name: "GameMaker", code: "GM", note: "JOGOS" }, { name: "Figma", code: "FG", note: "PROTÓTIPO" },
];

function SkillKey({ skill, index }: { skill: (typeof skills)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current?.style.setProperty("--rx", `${y * -13}deg`);
    ref.current?.style.setProperty("--ry", `${x * 16}deg`);
  };
  const reset = () => { ref.current?.style.setProperty("--rx", "0deg"); ref.current?.style.setProperty("--ry", "0deg"); };
  return <div className="skill-scene" data-skill-card><div ref={ref} className="skill-key" onPointerMove={move} onPointerLeave={reset}><span className="skill-key-index">0{index + 1}</span><span className="skill-key-code">{skill.code}</span><span className="skill-key-name">{skill.name}</span><span className="skill-key-note">{skill.note}</span></div></div>;
}

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-8 border-b border-border pb-10 sm:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">02 / Ferramentas</p>
          <div className="min-w-0"><TextReveal text="Skills" as="h2" fontSize="clamp(3.2rem, 16vw, 7.5rem)" staggerDelay={58} duration={400} color="#f4f4f1" hoverColor="#777" className="max-w-full font-sans" /><p className="mt-5 max-w-xl text-muted-foreground">Tecnologias que uso para transformar uma ideia em interface, lógica ou jogo.</p></div>
        </Reveal>
        <div className="skill-grid mt-14">{skills.map((skill, index) => <SkillKey key={skill.name} skill={skill} index={index} />)}</div>
        <p className="mt-10 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Passe o cursor para explorar a profundidade</p>
      </div>
    </section>
  );
}
