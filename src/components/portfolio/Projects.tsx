import { ArrowUpRight, ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Giselly Victoria Nails",
    tag: "Site institucional",
    description:
      "Site institucional para uma nail designer, com identidade visual acolhedora e agendamento online. Foco em elegância, técnica e conversão.",
    image: project1,
    href: "https://gisellynails.vercel.app/",
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Sono Perfeito em 30 Dias",
    tag: "Landing page",
    description:
      "Landing page com quiz interativo que diagnostica o perfil de sono do usuário em 7 perguntas. Interface imersiva em tema noturno.",
    image: project2,
    href: "https://sonoperfeito-em30dias.netlify.app/",
    stack: ["JavaScript", "HTML5", "CSS3"],
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Projetos
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Ideias que virei <span className="text-gradient">realidade</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Uma seleção de projetos que construí colocando a mão no código do início ao fim.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-card">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-70" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {project.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-violet"
                  >
                    Ver Projeto
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href="https://github.com/olive644"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Ver mais no GitHub
            <ExternalLink size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
