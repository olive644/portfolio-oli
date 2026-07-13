import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/olive644",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/josé-gilson-8a0482393/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/oliasmatico/",
    icon: Instagram,
  },
  {
    label: "Email",
    href: "mailto:oliverteixeira122020@gmail.com",
    icon: Mail,
  },
] as const;

interface SocialLinksProps {
  size?: "sm" | "md";
}

export function SocialLinks({ size = "md" }: SocialLinksProps) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const icon = size === "sm" ? 16 : 18;

  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={s.label}
          className={`${box} grid place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary hover:glow-violet`}
        >
          <s.icon size={icon} />
        </a>
      ))}
    </div>
  );
}
