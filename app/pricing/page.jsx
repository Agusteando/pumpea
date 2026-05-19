"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import WhatsAppCta from "../../components/WhatsAppCta";

const packages = [
  {
    title: "Impulso Web",
    price: "Desde $8,500 MXN",
    badge: "Inicio sólido",
    desc: "Landing page o sitio simple con identidad clara, copy comercial y estructura lista para captar prospectos.",
    perks: ["Diseño responsive premium", "Secciones comerciales clave", "Formulario o WhatsApp CTA", "SEO técnico base", "Entrega y capacitación"],
  },
  {
    title: "Conversión Pro",
    price: "Desde $18,500 MXN",
    badge: "Más solicitado",
    popular: true,
    desc: "Sitio multipágina con estrategia de conversión, analítica, contenido más robusto y experiencia visual completa.",
    perks: ["Arquitectura de navegación", "Diseño 1:1 con sistema visual", "Integración de analítica", "Optimización de rendimiento", "Componentes reutilizables", "Acompañamiento de lanzamiento"],
  },
  {
    title: "Automatización",
    price: "Desde $12,000 MXN",
    badge: "Ahorro operativo",
    desc: "Flujos, bots, formularios, CRM ligero e integraciones para reducir trabajo manual y acelerar respuesta.",
    perks: ["Bot o flujo de atención", "Captura de leads ordenada", "Integraciones con herramientas", "Notificaciones y seguimiento", "Documentación del proceso"],
  },
  {
    title: "Sistema a medida",
    price: "Cotización personalizada",
    badge: "Escala completa",
    desc: "Producto digital, portal, plataforma interna o sistema especializado diseñado alrededor de tu operación.",
    perks: ["Descubrimiento funcional", "Diseño de producto", "MVP o versión completa", "Base de datos e integraciones", "Manual y capacitación", "Roadmap evolutivo"],
  },
];

export default function PricingPage() {
  const [expanded, setExpanded] = useState({});

  return (
    <div>
      <PageHero kicker="Paquetes y precios" title="Soluciones digitales con alcance claro y posibilidad de escalar.">
        Selecciona una base de trabajo o agenda una asesoría para armar un paquete a medida. La primera conversación es sin costo y nos ayuda a definir qué conviene construir primero.
      </PageHero>

      <section className="pumpea-container pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => {
            const showAll = expanded[pkg.title];
            const perks = showAll ? pkg.perks : pkg.perks.slice(0, 4);
            return (
              <article key={pkg.title} className={`glass-card reveal-card relative flex flex-col p-5 sm:p-7 md:min-h-[520px] ${pkg.popular ? "ring-2 ring-blue-500/30" : ""}`}>
                <div className={`mb-5 w-fit rounded-full px-4 py-2 text-xs font-black ${pkg.popular ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-700"}`}>
                  {pkg.badge}
                </div>
                <h2 className="font-heading text-2xl font-black text-[#102453]">{pkg.title}</h2>
                <p className="mt-3 font-heading text-[27px] font-black leading-tight text-blue-700 sm:text-3xl">{pkg.price}</p>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">{pkg.desc}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm font-bold text-slate-600">
                  {perks.map((perk) => (
                    <li key={perk} className="flex gap-3"><i className="fa fa-check mt-1 text-blue-600" /> <span>{perk}</span></li>
                  ))}
                </ul>
                {pkg.perks.length > 4 && !showAll && (
                  <button type="button" className="mt-4 text-left text-sm font-black text-blue-700" onClick={() => setExpanded((v) => ({ ...v, [pkg.title]: true }))}>
                    Ver alcance completo
                  </button>
                )}
                <Link href="/agenda" className={pkg.popular ? "cta-button mt-7" : "button mt-7"}>
                  {pkg.price.includes("Cotización") ? "Solicitar diagnóstico" : "Agendar asesoría"}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pumpea-container pb-24">
        <div className="glass-card-strong grid items-center gap-6 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:gap-8 md:p-10">
          <div>
            <span className="section-kicker">Proyecto a medida</span>
            <h2 className="mt-5 font-heading text-[29px] font-black leading-tight text-[#102453] sm:text-3xl md:text-4xl">¿No ves tu caso exacto?</h2>
            <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              Cotizamos soluciones por alcance real. Podemos iniciar con una landing, conectar automatizaciones o diseñar un producto completo por fases.
            </p>
            <ul className="mt-5 grid gap-3 text-sm font-bold text-slate-600 sm:grid-cols-3">
              <li><i className="fa fa-check mr-2 text-blue-600" />Diagnóstico inicial gratis</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />Anticipo de arranque 40%</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />Entrega con capacitación</li>
            </ul>
          </div>
          <div className="flex w-full flex-col gap-3 md:min-w-[270px]">
            <Link href="/contact" className="cta-button">Pedir cotización</Link>
            <a href="https://wa.me/5217293062147?text=Hola%20Pumpea%2C%20quiero%20informes%20y%20cotización%20de%20tu%20servicio" target="_blank" rel="noopener noreferrer" className="button !text-emerald-700">
              <i className="fab fa-whatsapp" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </div>
  );
}
