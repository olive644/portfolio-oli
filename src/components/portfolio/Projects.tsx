import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import { InteractiveFolderGallery, type GalleryPhoto } from "@/components/ui/interactive-folder-gallery";
import { TextReveal } from "@/components/ui/cascade-text";
import { Reveal } from "./Reveal";

const massagePreview = "data:image/svg+xml," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#1f1712"/><stop offset="1" stop-color="#6b4b32"/></linearGradient>
      <linearGradient id="card" x1="0" x2="1"><stop stop-color="#f4dfc6"/><stop offset="1" stop-color="#c69061"/></linearGradient>
    </defs>
    <rect width="1200" height="900" fill="url(#bg)"/>
    <circle cx="1020" cy="120" r="250" fill="#edcaa9" opacity=".15"/>
    <path d="M-40 770C230 555 470 980 720 707s370-157 520 30v90H-40z" fill="#f2d4b4" opacity=".14"/>
    <rect x="92" y="105" width="1016" height="650" rx="35" fill="#fff7ef" opacity=".95"/>
    <rect x="150" y="168" width="400" height="44" rx="22" fill="#6b4b32"/>
    <text x="150" y="305" fill="#261a14" font-family="Georgia, serif" font-size="90">Lucas Silva</text>
    <text x="154" y="367" fill="#906341" font-family="Arial, sans-serif" font-size="29" letter-spacing="8">MASSOTERAPEUTA</text>
    <text x="154" y="463" fill="#5d4433" font-family="Arial, sans-serif" font-size="32">Cuidado que acolhe.</text>
    <text x="154" y="510" fill="#5d4433" font-family="Arial, sans-serif" font-size="32">Bem-estar que transforma.</text>
    <rect x="154" y="579" width="284" height="77" rx="38" fill="#6b4b32"/>
    <text x="198" y="628" fill="#fffaf4" font-family="Arial, sans-serif" font-size="25">AGENDAR SESSÃO</text>
    <path d="M743 268c40-77 96-111 166-111 83 0 151 66 151 151 0 163-143 261-267 313-61-95-58-229-50-353z" fill="url(#card)"/>
    <path d="M778 565c62-119 143-167 242-142 58 15 82 70 48 111-58 72-196 92-290 31z" fill="#d8a779"/>
    <circle cx="883" cy="271" r="37" fill="#fff7ef" opacity=".9"/>
    <path d="M813 370c56 58 111 61 164 1" fill="none" stroke="#fff7ef" stroke-width="18" stroke-linecap="round"/>
    <circle cx="1034" cy="680" r="55" fill="#e9c49f"/><circle cx="942" cy="696" r="36" fill="#f3ddc5"/>
  </svg>`);

const oliPreview = "data:image/svg+xml," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#071d20"/><stop offset="1" stop-color="#103a3d"/></linearGradient>
      <linearGradient id="bar" x1="0" y1="1" x2="0" y2="0"><stop stop-color="#157a73"/><stop offset="1" stop-color="#56dfc7"/></linearGradient>
    </defs>
    <rect width="1200" height="900" fill="url(#bg)"/>
    <circle cx="1030" cy="80" r="260" fill="#41cfba" opacity=".10"/>
    <rect x="79" y="86" width="1042" height="728" rx="30" fill="#0a282b" stroke="#2a6966" stroke-width="2"/>
    <rect x="119" y="128" width="962" height="55" rx="12" fill="#103639"/>
    <circle cx="152" cy="155" r="13" fill="#52d7be"/><text x="184" y="164" fill="#e4fffa" font-family="Arial, sans-serif" font-size="26" font-weight="700">Oli Qualidade</text>
    <rect x="806" y="140" width="225" height="29" rx="14" fill="#1e5653"/><text x="836" y="162" fill="#a8d9d1" font-family="Arial, sans-serif" font-size="17">ANÁLISE INTELIGENTE</text>
    <rect x="120" y="224" width="274" height="162" rx="17" fill="#0e3538"/><text x="147" y="267" fill="#9ccfc8" font-family="Arial, sans-serif" font-size="19">CONFORMIDADE</text><text x="147" y="339" fill="#effffb" font-family="Arial, sans-serif" font-size="66" font-weight="700">94%</text>
    <rect x="420" y="224" width="274" height="162" rx="17" fill="#0e3538"/><text x="447" y="267" fill="#9ccfc8" font-family="Arial, sans-serif" font-size="19">ITENS ANALISADOS</text><text x="447" y="339" fill="#effffb" font-family="Arial, sans-serif" font-size="66" font-weight="700">1.248</text>
    <rect x="720" y="224" width="361" height="162" rx="17" fill="#0e3538"/><text x="747" y="267" fill="#9ccfc8" font-family="Arial, sans-serif" font-size="19">STATUS</text><rect x="747" y="300" width="173" height="42" rx="21" fill="#176b62"/><text x="773" y="328" fill="#d3fff6" font-family="Arial, sans-serif" font-size="20">EM CONFORMIDADE</text>
    <rect x="120" y="415" width="639" height="346" rx="17" fill="#0d3235"/><text x="150" y="460" fill="#d9fffa" font-family="Arial, sans-serif" font-size="23" font-weight="700">Indicadores por período</text>
    <path d="M157 678H713M157 585H713M157 492H713" stroke="#2b5b5d" stroke-width="2"/>
    <rect x="193" y="574" width="54" height="104" rx="8" fill="url(#bar)"/><rect x="297" y="526" width="54" height="152" rx="8" fill="url(#bar)"/><rect x="401" y="460" width="54" height="218" rx="8" fill="url(#bar)"/><rect x="505" y="501" width="54" height="177" rx="8" fill="url(#bar)"/><rect x="609" y="430" width="54" height="248" rx="8" fill="url(#bar)"/>
    <rect x="786" y="415" width="295" height="346" rx="17" fill="#0e3538"/><circle cx="934" cy="548" r="95" fill="none" stroke="#1e5653" stroke-width="35"/><path d="M934 453A95 95 0 1 1 854 600" fill="none" stroke="#57dfc7" stroke-width="35"/><text x="892" y="558" fill="#ecfffb" font-family="Arial, sans-serif" font-size="39" font-weight="700">72%</text><text x="836" y="685" fill="#9ccfc8" font-family="Arial, sans-serif" font-size="18">Meta atingida</text>
  </svg>`);

const projects = [
  { number: "01", title: "Giselly Victoria Nails", kind: "Site institucional", description: "Site para uma nail designer, com apresentação dos serviços e caminho direto para agendamento.", image: project1, href: "https://gisellynail.vercel.app/" },
  { number: "02", title: "Sono Perfeito em 30 Dias", kind: "Landing page + quiz", description: "Página com um quiz de sete perguntas que organiza o perfil de sono antes da oferta.", image: project2, href: "https://sonoperfeito-em30dias.netlify.app/" },
  { number: "03", title: "Lucas Silva Massoterapeuta", kind: "Site institucional", description: "Presença digital para massoterapia, com serviços, apresentação profissional e acesso direto ao agendamento.", image: massagePreview, href: "https://lucassilva-massoterapeuta.lucassilvamassoterapeuta.workers.dev/" },
  { number: "04", title: "Oli Qualidade", kind: "Plataforma web", description: "Plataforma inteligente que transforma planilhas em relatórios, indicadores e dashboards interativos.", image: oliPreview, href: "https://oliqualidade.vercel.app/" },
];
const galleryPhotos: GalleryPhoto[] = projects.map((project) => ({ id: project.number, image: project.image, title: project.title, href: project.href }));

export function Projects() {
  return (
    <section id="projetos" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-6 sm:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">04 / Projetos</p>
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
