import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export const socials = [
  { label: "GitHub", href: "https://github.com/olive644", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/josé-gilson-8a0482393/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/galeria.oli/", icon: Instagram },
  { label: "Email", href: "mailto:oliverteixeira122020@gmail.com", icon: Mail },
] as const;

interface SocialLinksProps { size?: "sm" | "md" }

export function SocialLinks({ size = "md" }: SocialLinksProps) {
  const iconSize = size === "sm" ? 15 : 17;
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      {socials.map((social) => (
        <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-accent">
          <social.icon size={iconSize} /><span>{social.label}</span>
        </a>
      ))}
    </div>
  );
}
