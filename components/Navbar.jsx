
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function scrollToId(id) {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionLinks = [
    { id: "hero", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "proceso", label: "Cómo trabajamos" },
  ];
  const pageLinks = [
    { href: "/pricing", label: "Precios" },
    { href: "/click-celebrate", label: "Click&Celebrate" },
    { href: "/about", label: "Nosotros" },
    { href: "/contact", label: "Contacto" },
  ];
  const agendaLink = {
    href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ogTtHKoE4rEOuBF-JXZgsNdvXjuJxv13aTyVdxQ9dDA3L5rFitNPaVNWT0jbceWMdC0vjlAlO?pli=1",
    label: "Agenda tu cita",
    external: true,
  };

  function handleSectionClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  }

  return (
    <header className="nav-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2 group" tabIndex={0}>
          <picture>
            <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
            <source srcSet="/logo-h.png" media="(min-width: 640px)" />
            <img
              src="/logo-dark.png"
              className="h-10 w-auto transition group-hover:scale-105 drop-shadow-lg"
              alt="Pumpea Logo"
            />
          </picture>
        </Link>
        <button
          className="sm:hidden p-2 text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <i className={menuOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </button>
        <nav
          className={`flex-col sm:flex-row sm:flex items-center gap-6 font-heading text-base ${
            menuOpen
              ? "flex absolute bg-gradient-to-b from-primary/90 via-primary-light/90 to-accent-sky/90 left-0 right-0 top-16 z-40 px-4 py-4 shadow-2xl"
              : "hidden sm:flex"
          }`}
        >
          {sectionLinks.map(s =>
            pathname === "/" ? (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="nav-link block py-1 hover:text-accent-sky transition-colors"
                onClick={e => handleSectionClick(e, s.id)}
              >
                {s.label}
              </a>
            ) : (
              <Link
                key={s.id}
                href={`/#${s.id}`}
                className="nav-link block py-1 hover:text-accent-sky transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </Link>
            )
          )}
          {pageLinks.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link block py-1 transition-colors ${
                pathname === item.href
                  ? "text-accent-sky font-bold"
                  : "hover:text-accent-sky"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={agendaLink.href}
            className="nav-cta block py-1 px-3 rounded-full bg-gradient-to-r from-primary-light to-accent-sky shadow-md font-bold border-0 focus:outline-none focus:ring-2 focus:ring-accent-sky hover:from-accent-sky hover:to-primary-light transition"
            target="_blank"
            rel="noopener"
            onClick={() => setMenuOpen(false)}
          >
            {agendaLink.label}
            <i className="fa fa-arrow-up-right-from-square ml-2 text-xs" />
          </a>
        </nav>
      </div>
    </header>
  );
}
