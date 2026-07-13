import { Reveal } from "./Reveal";

const skills = [
  { name: "JavaScript", slug: "javascript" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "Python", slug: "python" },
  { name: "GameMaker", slug: "gamemaker" },
  { name: "Figma", slug: "figma" },
  { name: "Pacote Office", slug: "microsoftoffice" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Skills
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Tecnologias que <span className="text-gradient">uso</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            As ferramentas que fazem parte do meu dia a dia construindo interfaces, lógica e jogos.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 70}>
              <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card/60 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:glow-violet">
                <img
                  src={`https://cdn.simpleicons.org/${skill.slug}/ffffff`}
                  alt={`Logo ${skill.name}`}
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {skill.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
