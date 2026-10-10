import { ArrowDownRight } from "lucide-react";
import profile from "@/assets/profile.png";
import { SocialLinks } from "./SocialLinks";
import { SkillsMarquee } from "./SkillsMarquee";
export function About() {
  return (
    <section id="sobre">
      <div id="inicio" className="profile-card">
        <div className="profile-copy">
          <div className="profile-intro">
            <p className="hello-label">Olá, eu sou</p>
            <h1>
              Oliver
              <br />
              Teixeira<span className="name-dot">.</span>
            </h1>
            <p className="role-label">Desenvolvimento web · UI/UX</p>
          </div>
          <div className="profile-body">
            <h2 className="profile-subtitle">Aprender fazendo.</h2>
            <p className="profile-description">
              Tenho 19 anos e aprendo programação construindo. Gosto de transformar ideias em sites,
              explorar a parte visual e encontrar soluções com código.
            </p>
            <p className="profile-description secondary-copy">
              Sou autodidata e levo cada projeto como uma chance de melhorar o código, o olhar e a
              forma de resolver problemas.
            </p>
            <div className="profile-actions">
              <a className="primary-link" href="#projetos">
                Conheça meu projeto <ArrowDownRight size={20} />
              </a>
              <SocialLinks size="sm" />
            </div>
          </div>
        </div>
        <div className="portrait-stage">
          <span className="portrait-star" aria-hidden="true">
            ✳
          </span>
          <div className="portrait-frame">
            <img src={profile} alt="Oliver Teixeira" />
          </div>
          <span className="portrait-sticker">Curiosidade vira código.</span>
          <span className="portrait-caption">AUTODIDATA / EM CONSTANTE EVOLUÇÃO</span>
        </div>
      </div>
      <div className="tools-card">
        <div className="tools-heading">
          <h2>Minha caixa de ferramentas</h2>
          <p>Ideias, interfaces e código.</p>
        </div>
        <SkillsMarquee />
        <div className="skill-stickers" aria-label="Áreas de interesse">
          <span>UI/UX</span>
          <span>Web Design</span>
          <span>Programação</span>
        </div>
      </div>
    </section>
  );
}
