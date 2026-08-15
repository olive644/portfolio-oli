import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">© {new Date().getFullYear()} Oliver Teixeira</p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
