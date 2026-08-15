import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import { Reveal } from "./Reveal";

const projects = [
  { number: "01", title: "Giselly Victoria Nails", kind: "Site institucional", description: "Site para uma nail designer, com apresentação dos serviços e caminho direto para agendamento.", image: project1, href: "https://gisellynail.vercel.app/", stack: "HTML · CSS · JavaScript" },
  { number: "02", title: "Sono Perfeito em 30 Dias", kind: "Landing page + quiz", description: "Página com um quiz de sete perguntas que organiza o perfil de sono antes da oferta.", image: project2, href: "https://sonoperfeito-em30dias.netlify.app/", stack: "JavaScript · HTML · CSS" },
];

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-6 sm:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">04 / Projetos</p>
          <h2 className="max-w-3xl text-5xl leading-none sm:text-7xl">Trabalhos que já saíram da tela em branco.</h2>
        </Reveal>
        <div className="mt-14 space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <article className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                <a href={project.href} target="_blank" rel="noreferrer" className="block overflow-hidden border border-border bg-card">
                  <img src={project.image} alt={`Tela do projeto ${project.title}`} className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-[1.015]" loading="lazy" />
                </a>
                <div className="border-t border-border pt-5">
                  <div className="flex justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"><span>{project.number}</span><span>{project.kind}</span></div>
                  <h3 className="mt-8 text-4xl leading-none sm:text-5xl">{project.title}</h3>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{project.description}</p>
                  <p className="mt-5 font-mono text-xs text-muted-foreground">{project.stack}</p>
                  <a href={project.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-sm font-semibold">Abrir projeto <ArrowUpRight size={16} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 border-t border-border pt-6 text-right">
          <a href="https://github.com/olive644" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground underline underline-offset-8 hover:text-foreground">Outros experimentos no GitHub</a>
        </Reveal>
      </div>
    </section>
  );
}
