import { useState } from "react";
import { Menu, X } from "lucide-react";
const links = [
  { label: "Perfil", href: "#sobre" },
  { label: "Ferramentas", href: "#skills" },
  { label: "Portfólio", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="portfolio-nav">
      <nav aria-label="Navegação principal" className="nav-inner">
        <a href="#inicio" className="nav-brand">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          oli<span className="sr-only"> — início</span>
        </a>
        <ul className="nav-links">
          {links.map((link, i) => (
            <li key={link.href}>
              <a className={i === 0 ? "nav-profile" : ""} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <span className="nav-spark" aria-hidden="true">
          ✦
        </span>
      </nav>
      {open && (
        <ul id="mobile-navigation" className="mobile-navigation">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
