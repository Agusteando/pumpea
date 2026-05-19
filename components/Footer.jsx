import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-blue-100/80 bg-white/50 backdrop-blur-xl">
      <div className="pumpea-container grid gap-7 py-9 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left">
        <div>
          <img src="/logo-h.png" alt="Pumpea Tecnología" className="mx-auto h-11 w-auto md:mx-0 md:h-12" />
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-slate-600 md:mx-0">
            Sitios web, automatizaciones, bots e integraciones para negocios que necesitan impulso digital con resultados medibles.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-slate-600 md:justify-end">
          <Link href="/about" className="hover:text-blue-700">Nosotros</Link>
          <Link href="/pricing" className="hover:text-blue-700">Precios</Link>
          <Link href="/aliados-clientes" className="hover:text-blue-700">Casos</Link>
          <Link href="/contact" className="hover:text-blue-700">Contacto</Link>
        </div>
      </div>
      <div className="border-t border-blue-100/80 py-5 text-center text-xs font-semibold text-slate-500">
        © 2025 Pumpea. Todos los derechos reservados.
      </div>
    </footer>
  );
}
