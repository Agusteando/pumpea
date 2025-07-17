
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCalendlyModal } from "./CalendlyModal";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { showCalendly } = useCalendlyModal();

  const links = [
    { href: "/", label: "Inicio", match: (p) => p === "/" },
    { href: "/pricing", label: "Precios", match: (p) => p.startsWith("/pricing") },
    { href: "/click-celebrate", label: "Click&Celebrate", match: (p) => p.startsWith("/click-celebrate") },
    { href: "/contact", label: "Contacto", match: (p) => p.startsWith("/contact") },
  ];

  function handleAgenda() {
    setMenuOpen(false);
    showCalendly();
  }

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.png"
            className="h-10 w-auto"
            alt="Pumpea Logo"
            style={{ filter: "drop-shadow(0 4px 10px #2180df22)" }}
          />
        </Link>
        <button
          className="sm:hidden p-2 text-primary"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <i className={menuOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </button>
        <nav
          className={`flex-col sm:flex-row sm:flex items-center gap-6 font-heading text-base ${
            menuOpen
              ? "flex absolute bg-white shadow left-0 right-0 top-16 z-40 px-4 py-3"
              : "hidden sm:flex"
          }`}
        >
          {links.map((l) => (
            <Link
              href={l.href}
              key={l.href}
              className={`block py-1 ${
                l.match(pathname) ? "text-primary font-bold" : "text-neutral-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={handleAgenda}
            className="cta-button py-2 px-6 text-base ml-2 font-bold shadow border-2 border-blue-400 hover:brightness-105"
            style={{ minWidth: 145 }}
            type="button"
          >
            Agenda tu cita
          </button>
        </nav>
      </div>
    </header>
  );
}
