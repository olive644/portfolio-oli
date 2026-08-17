import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import { InteractiveFolderGallery, type GalleryPhoto } from "@/components/ui/interactive-folder-gallery";
import { TextReveal } from "@/components/ui/cascade-text";
import { Reveal } from "./Reveal";

const projects = [
  { number: "01", title: "Giselly Victoria Nails", kind: "Site institucional", description: "Site para uma nail designer, com apresentação dos serviços e caminho direto para agendamento.", image: project1, href: "https://gisellynail.vercel.app/" },
  { number: "02", title: "Sono Perfeito em 30 Dias", kind: "Landing page + quiz", description: "Página com um quiz de sete perguntas que organiza o perfil de sono antes da oferta.", image: project2, href: "https://sonoperfeito-em30dias.netlify.app/" },
];
const galleryPhotos: GalleryPhoto[] = projects.map((project) => ({ id: project.number, image: project.image, title: project.title, href: project.href }));

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-6 sm:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">03 / Projetos</p>
          <div className="min-w-0"><TextReveal text="Projetos" as="h2" fontSize="clamp(3.2rem, 16vw, 7.5rem)" staggerDelay={44} duration={380} direction="down" color="#f4f4f1" hoverColor="#777" className="max-w-full font-sans" /><p className="mt-5 max-w-xl text-muted-foreground">Clique para espalhar os projetos. Arraste uma imagem para baixo para guardar tudo novamente.</p></div>
        </Reveal>
        <Reveal className="mt-4" delay={100}><InteractiveFolderGallery photos={galleryPhotos} folderName="Meus projetos.folder" dragHintText="Arraste uma imagem para baixo para fechar" /></Reveal>
        <div className="divide-y divide-border border-y border-border">
          {projects.map((project) => <Reveal key={project.number}><a href={project.href} target="_blank" rel="noreferrer" className="group grid gap-4 py-6 sm:grid-cols-[64px_1fr_1fr_auto] sm:items-center"><span className="font-mono text-xs text-muted-foreground">{project.number}</span><div><h3 className="text-3xl leading-none">{project.title}</h3><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{project.kind}</p></div><p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p><ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a></Reveal>)}
        </div>
        <Reveal className="mt-10 text-right"><a href="https://github.com/olive644" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground underline underline-offset-8 hover:text-foreground">Outros experimentos no GitHub</a></Reveal>
      </div>
    </section>
  );
}
