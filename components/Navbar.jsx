
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <picture>
            <source
              srcSet="/logo-dark.png"
              media="(prefers-color-scheme: dark)"
            />
            <img src="/logo.png" className="h-10 w-auto" alt="Pumpea Logo" />
          </picture>
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
          <Link
            href="/"
            className={`block py-1 ${
              pathname === "/" ? "text-primary font-bold" : "text-neutral-700"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/pricing"
            className={`block py-1 ${
              pathname.startsWith("/pricing")
                ? "text-primary font-bold"
                : "text-neutral-700"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Precios
          </Link>
          <Link
            href="/activate"
            className={`block py-1 ${
              pathname.startsWith("/activate")
                ? "text-primary font-bold"
                : "text-neutral-700"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Activa tu Bot de WhatsApp
          </Link>
          <Link
            href="/contact"
            className={`block py-1 ${
              pathname.startsWith("/contact")
                ? "text-primary font-bold"
                : "text-neutral-700"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
