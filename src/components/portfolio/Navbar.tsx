import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Ferramentas", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="font-mono text-xs font-bold uppercase tracking-[0.2em]">OLI / DEV</a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => <li key={link.href}><a href={link.href} className="text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground">{link.label}</a></li>)}
        </ul>
        <a href="#contato" className="hidden border-b-2 border-accent pb-1 text-xs font-semibold uppercase tracking-[0.12em] md:block">Falar comigo</a>
        <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)} className="md:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {open && <ul className="border-t border-border bg-background px-5 py-4 md:hidden">{links.map((link) => <li key={link.href}><a href={link.href} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-sm">{link.label}</a></li>)}</ul>}
    </header>
  );
}
