import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <div>
          <a href="#inicio" className="font-display text-lg font-bold tracking-tight">
            Oliver<span className="text-gradient">.</span>
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oliver. Todos os direitos reservados Oli - DEV.
          </p>
        </div>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
