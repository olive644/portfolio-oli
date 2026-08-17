import { Instagram, Linkedin, Github } from "lucide-react";

export const socials = [
  { label: "LinkedIn", tooltip: "LinkedIn", href: "https://www.linkedin.com/in/josé-gilson-8a0482393/", social: "linkedin", icon: Linkedin },
  { label: "GitHub", tooltip: "GitHub", href: "https://github.com/olive644", social: "github", icon: Github },
  { label: "Instagram WebDesigner", tooltip: "WebDesigner", href: "https://www.instagram.com/galeria.oli/", social: "instagram", icon: Instagram },
  { label: "Instagram pessoal", tooltip: "Pessoal", href: "https://www.instagram.com/oliasmatico/", social: "instagram", icon: Instagram },
] as const;

interface SocialLinksProps { size?: "sm" | "md" }

export function SocialLinks({ size = "md" }: SocialLinksProps) {
  const iconSize = size === "sm" ? 22 : 27;
  return (
    <ul className={`social-links ${size === "sm" ? "social-links-sm" : ""}`} aria-label="Redes sociais">
      {socials.map((social) => (
        <li key={social.label} className="social-icon-content">
          <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} data-social={social.social}>
            <span className="social-filled" aria-hidden="true" />
            <social.icon size={iconSize} aria-hidden="true" />
          </a>
          <span className="social-tooltip" role="tooltip">{social.tooltip}</span>
        </li>
      ))}
    </ul>
  );
}
