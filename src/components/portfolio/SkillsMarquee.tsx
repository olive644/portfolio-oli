import { LogoMarquee, type Logo } from "@/components/ui/logo-marquee";

const skills: Logo[] = [
  { src: "https://cdn.simpleicons.org/figma", alt: "Figma" },
  { src: "https://cdn.simpleicons.org/javascript", alt: "JavaScript" },
  { src: "https://cdn.simpleicons.org/github/ffffff", alt: "GitHub" },
  { src: "https://cdn.simpleicons.org/gamemaker/ffffff", alt: "GameMaker" },
  { src: "https://cdn.simpleicons.org/git", alt: "Git" },
  { src: "https://cdn.simpleicons.org/python", alt: "Python" },
  { src: "https://cdn.simpleicons.org/html5", alt: "HTML5" },
  { src: "https://cdn.simpleicons.org/css", alt: "CSS3" },
];

export function SkillsMarquee() {
  return (
    <section id="skills" className="border-y border-border bg-[#050505]" aria-label="Ferramentas que utilizo">
      <LogoMarquee logos={skills} />
    </section>
  );
}
