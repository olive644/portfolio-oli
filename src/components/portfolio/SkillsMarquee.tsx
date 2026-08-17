const skills = [
  { mark: "FG", name: "Figma", description: "Protótipos e interfaces antes do código." },
  { mark: "JS", name: "JavaScript", description: "Interações e comportamento para a web." },
  { mark: "GH", name: "GitHub", description: "Projetos, histórico e colaboração em código." },
  { mark: "GM", name: "GameMaker", description: "Criação e lógica de jogos 2D." },
  { mark: "GIT", name: "Git", description: "Controle de versões durante o desenvolvimento." },
  { mark: "PY", name: "Python", description: "Lógica, scripts e automações." },
  { mark: "H5", name: "HTML5", description: "Estrutura semântica para páginas web." },
  { mark: "C3", name: "CSS3", description: "Layout, responsividade e animações visuais." },
];

function SkillGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="skill-strip-group" aria-hidden={duplicate || undefined}>
      {skills.map((skill) => (
        <article key={`${duplicate ? "copy" : "main"}-${skill.name}`} className="skill-strip-item" tabIndex={duplicate ? -1 : 0} aria-label={duplicate ? undefined : `${skill.name}. ${skill.description}`}>
          <span className="skill-strip-mark" aria-hidden="true">{skill.mark}</span>
          <span className="skill-strip-name">{skill.name}</span>
          <p className="skill-strip-description">{skill.description}</p>
        </article>
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section id="skills" className="skill-strip border-y border-border" aria-label="Ferramentas que utilizo">
      <div className="skill-strip-track">
        <SkillGroup />
        <SkillGroup duplicate />
      </div>
    </section>
  );
}
