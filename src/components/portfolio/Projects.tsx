import { ArrowUpRight } from "lucide-react";
import { InteractiveFolderGallery } from "@/components/ui/interactive-folder-gallery";
import olenaImage from "@/assets/olenastudy-original-cover.png";
export function Projects() {
  return (
    <section id="projetos" className="project-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PORTFÓLIO / 01</p>
          <h2>Da ideia à tela.</h2>
        </div>
        <span className="project-label">Projeto em destaque</span>
      </div>
      <article className="study-card">
        <div className="study-folder-panel">
          <p className="folder-intro">Uma pasta, um projeto. Clique para descobrir.</p>
          <InteractiveFolderGallery
            className="study-folder"
            photos={[
              {
                id: "olena",
                image: olenaImage,
                title: "OlenaStudy",
                href: "https://olenastudy.vercel.app",
                imageFit: "contain",
              },
            ]}
            folderName="OlenaStudy.folder"
            dragHintText="Arraste para baixo para guardar"
          />
        </div>
        <div className="study-details">
          <p className="eyebrow">PLATAFORMA DE ESTUDOS</p>
          <h3>OlenaStudy</h3>
          <p>
            Agenda, hábitos, Pomodoro, flashcards e quizzes em um só lugar. Um app gratuito para
            organizar a rotina, manter o foco e aprender com a companhia da Helena.
          </p>
          <div className="project-tags">
            <span>Organização</span>
            <span>Foco</span>
            <span>Aprendizado</span>
          </div>
          <a
            className="primary-link"
            href="https://olenastudy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar OlenaStudy <ArrowUpRight size={20} />
          </a>
        </div>
      </article>
    </section>
  );
}
