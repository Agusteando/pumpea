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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 md:px-8 md:pt-4">
      <div className="glass-nav mx-auto flex h-[70px] w-full max-w-[1580px] items-center justify-between rounded-[22px] px-4 sm:h-[76px] md:h-[82px] md:rounded-2xl md:px-9">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)} aria-label="Ir al inicio de Pumpea">
          <img
            src="/logo-h.png"
            className="h-[39px] w-auto object-contain sm:h-[44px] md:h-[52px]"
            alt="Pumpea Tecnología"
            style={{ filter: "drop-shadow(0 7px 18px rgba(19, 88, 243, .10))" }}
          />
        </Link>

        <button
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-blue-100 bg-white/80 text-blue-700 shadow-sm lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
          type="button"
        >
          <i className={menuOpen ? "fa fa-times" : "fa fa-bars"} />
        </button>

        <nav
          className={`${
            menuOpen
              ? "absolute left-3 right-3 top-[84px] flex max-h-[calc(100vh-104px)] overflow-y-auto rounded-[26px] border border-blue-100 bg-white/96 p-3 shadow-2xl backdrop-blur-xl sm:left-4 sm:right-4 sm:top-[92px]"
              : "hidden"
          } flex-col items-stretch gap-2 font-heading text-[15px] font-bold lg:static lg:flex lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-8`}
        >
          {links.map((link) => {
            const active = link.match(pathname || "");
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`relative flex items-center justify-between rounded-[18px] px-4 py-3.5 transition lg:rounded-none lg:px-0 lg:py-1 ${
                  active ? "nav-active-line text-blue-700" : "text-slate-700 hover:text-blue-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                {link.icon && <i className={`fa ${link.icon} ml-2 text-[11px] text-slate-400`} />}
              </Link>
            );
          })}
          <button
            onClick={handleAgenda}
            className="mt-1 inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-[20px] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-5 font-heading text-[15px] font-extrabold text-white shadow-[0_16px_34px_rgba(19,88,243,.24)] lg:hidden"
            type="button"
          >
            <i className="fa fa-calendar-days" />
            Agenda tu cita
          </button>
        </nav>

        <button
          onClick={handleAgenda}
          className="hidden items-center gap-3 rounded-[28px] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-5 py-4 font-heading text-[16px] font-extrabold text-white shadow-[0_18px_38px_rgba(19,88,243,.30)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(19,88,243,.36)] lg:inline-flex xl:px-7 xl:text-[17px]"
          type="button"
        >
          <i className="fa fa-calendar-days" />
          Agenda tu cita
        </button>
      </div>
    </header>
  );
}
