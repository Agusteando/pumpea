"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCalendlyModal } from "./CalendlyModal";

const links = [
  { href: "/", label: "Inicio", match: (p) => p === "/" },
  { href: "/about", label: "Nosotros", match: (p) => p.startsWith("/about") },
  { href: "/#soluciones", label: "Soluciones", icon: "fa-chevron-down", match: () => false },
  { href: "/pricing", label: "Precios", match: (p) => p.startsWith("/pricing") },
  { href: "/aliados-clientes", label: "Casos de éxito", match: (p) => p.startsWith("/aliados-clientes") },
  { href: "/contact", label: "Recursos", icon: "fa-chevron-down", match: (p) => p.startsWith("/contact") },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const modal = useCalendlyModal();

  function handleAgenda() {
    setMenuOpen(false);
    modal?.showCalendly?.();
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div className="glass-nav mx-auto flex h-[82px] w-full max-w-[1376px] items-center justify-between rounded-2xl px-5 md:px-9">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)} aria-label="Ir al inicio de Pumpea">
          <img
            src="/logo-h.png"
            className="h-[46px] w-auto object-contain md:h-[52px]"
            alt="Pumpea Tecnología"
            style={{ filter: "drop-shadow(0 7px 18px rgba(19, 88, 243, .10))" }}
          />
        </Link>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white/75 text-blue-700 shadow-sm md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
          type="button"
        >
          <i className={menuOpen ? "fa fa-times" : "fa fa-bars"} />
        </button>

        <nav
          className={`${
            menuOpen
              ? "absolute left-4 right-4 top-[104px] flex rounded-3xl border border-blue-100 bg-white/95 p-4 shadow-2xl backdrop-blur-xl"
              : "hidden"
          } flex-col items-stretch gap-2 font-heading text-[15px] font-bold md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map((link) => {
            const active = link.match(pathname || "");
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`relative flex items-center justify-between rounded-2xl px-3 py-3 transition md:rounded-none md:px-0 md:py-1 ${
                  active ? "nav-active-line text-blue-700" : "text-slate-700 hover:text-blue-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                {link.icon && <i className={`fa ${link.icon} ml-2 text-[11px] text-slate-400`} />}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleAgenda}
          className="hidden items-center gap-3 rounded-[28px] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-7 py-4 font-heading text-[17px] font-extrabold text-white shadow-[0_18px_38px_rgba(19,88,243,.30)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(19,88,243,.36)] md:inline-flex"
          type="button"
        >
          <i className="fa fa-calendar-days" />
          Agenda tu cita
        </button>
      </div>
    </header>
  );
}
