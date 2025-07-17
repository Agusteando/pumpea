
"use client";
import WhatsAppCta from "../../components/WhatsAppCta";
import Link from "next/link";
import { useState } from "react";

const packages = [
  {
    title: "Sitio Web Simple",
    price: "$3,500 MXN",
    badge: "Ahorro",
    category: "web",
    popular: false,
    perks: [
      "Dominio y hosting 1 año gratis",
      "Diseño responsive a tu marca",
      "Formulario de contacto básico",
      "Soporte por correo",
    ],
    details: "Ideal para presentar servicios y captar prospectos sin complicaciones.",
  },
  {
    title: "Sitio E-commerce",
    price: "$20,000 MXN",
    badge: "¡Más vendido!",
    category: "web",
    popular: true,
    perks: [
      "Carrito, pagos y catálogo",
      "Integración con WhatsApp y email",
      "Panel de administración simple",
      "Capacitación inicial sin costo",
    ],
    details: "Vende productos en línea y gestiona tus pedidos fácilmente.",
  },
  {
    title: "Bot WhatsApp",
    price: "$3,000 MXN",
    badge: "Automatización",
    category: "bot",
    popular: false,
    perks: [
      "Respuestas automáticas personalizadas",
      "Disponible 24/7 para tus clientes",
      "Envío de menús, catálogos, citas y más",
      "Incluye manual de uso",
    ],
    details: "Atiende a tus clientes 24/7 y olvida los mensajes repetidos.",
  },
  {
    title: "Gestión de Redes Sociales",
    price: "$1,000 MXN",
    badge: "Tu presencia",
    category: "social",
    popular: false,
    perks: [
      "Facebook e Instagram",
      "5 publicaciones semanales",
      "Calendario mensual + insights",
      "Diseños gráficos incluidos",
    ],
    details: "Haz crecer tu comunidad y mantente vigente con contenido profesional.",
  },
  {
    title: "Click&Celebrate (Eventos)",
    price: "Cotización personalizada",
    badge: "¡Eventos únicos!",
    category: "evento",
    popular: true,
    perks: [
      "Invitaciones digitales con RSVP",
      "Galería de fotos en tiempo real",
      "Página personalizada de tu evento",
      "Opcional: streaming y recordatorios",
    ],
    details: "La suite más completa para eventos modernos. Cuéntanos tus ideas.",
  },
];

function highlightColor(pkg) {
  if (pkg.popular) return "from-primary via-cyan-200 to-primary-light";
  if (pkg.category === "evento") return "from-rose-200 via-pink-100 to-cyan-100";
  if (pkg.category === "web") return "from-sky-100 via-white to-blue-50";
  if (pkg.category === "bot") return "from-green-100 via-green-50 to-white";
  if (pkg.category === "social") return "from-indigo-100 via-purple-50 to-white";
  return "from-white";
}

function getCta(pkg) {
  if (pkg.category === "evento" || pkg.price.includes("Cotización"))
    return (
      <a
        href="https://wa.me/5217293062147?text=Quiero%20cotizar%20Click%26Celebrate%20o%20solicitar%20más%20info%20de%20eventos."
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button w-full mt-3"
      >
        Cotiza tu evento
      </a>
    );
  if (pkg.category === "bot")
    return (
      <a
        href="https://wa.me/5217293062147?text=Me%20interesa%20un%20Bot%20de%20WhatsApp%20para%20mi%20negocio"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button w-full mt-3"
      >
        Solicitar demo
      </a>
    );
  if (pkg.category === "web")
    return (
      <Link href="/contact" className="cta-button w-full mt-3">
        Solicitar cotización
      </Link>
    );
  if (pkg.category === "social")
    return (
      <a
        href="https://wa.me/5217293062147?text=Quiero%20informes%20de%20gesti%C3%B3n%20de%20redes%20sociales"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button w-full mt-3"
      >
        Agenda asesoría gratis
      </a>
    );
}

export default function Pricing() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <h1 className="text-3xl md:text-4xl font-heading mb-6 text-center text-gradient-main font-extrabold fade-in">
        Paquetes y Precios <span className="block text-lg mt-2 font-normal text-accent/80">Servicios que impulsan tu negocio</span>
      </h1>
      <p className="mb-8 text-accent/90 text-center">
        Selecciona la solución ideal para ti o agenda una cita para armar tu propio paquete. <span className="font-semibold text-primary">¡Cita y diagnóstico gratis!</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 items-stretch mb-14">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className={`
              relative flex flex-col bg-gradient-to-br ${highlightColor(pkg)}
              border border-blue-100 rounded-2xl shadow-xl px-6 pt-6 pb-7
              transition hover:scale-[1.026] hover:shadow-blue-300/30
              min-h-[400px]
              ${pkg.popular ? "ring-2 ring-primary" : ""}
            `}
          >
            {pkg.badge && (
              <div className={`absolute -top-3 left-4 rounded px-3 py-[4px] text-xs font-extrabold tracking-wide shadow
                ${pkg.popular
                  ? "bg-primary text-white"
                  : "bg-blue-500/10 text-primary"
                }
              `}>
                {pkg.badge}
              </div>
            )}
            <div className="flex flex-col flex-grow">
              <h2 className={`text-xl font-heading font-bold mb-1 mt-2 ${pkg.popular ? "text-primary" : "text-blue-700"}`}>{pkg.title}</h2>
              <div className={`mb-2 text-2xl font-extrabold ${
                pkg.price.includes("Cotización")
                ? "bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                : pkg.popular ? "text-primary" : "text-green-600"
              }`}>
                {pkg.price}
              </div>
              <p className="text-accent/90 text-[15px] mb-3">{pkg.details}</p>
              <ul className="flex-1 flex flex-col gap-2 list-disc pl-5 text-neutral-800/90 text-base pb-1 mt-1">
                {pkg.perks.slice(0, showMore || pkg.perks.length <= 3 ? pkg.perks.length : 3).map((perk, i) => (
                  <li key={i}>{perk}</li>
                ))}
              </ul>
              {pkg.perks.length > 3 && !showMore && (
                <button
                  className="text-primary mt-1 text-sm underline"
                  tabIndex={0}
                  onClick={() => setShowMore(true)}
                >
                  Ver más
                </button>
              )}
            </div>
            {getCta(pkg)}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50/85 via-white to-blue-100 rounded-lg shadow px-5 py-8 mb-7 border border-blue-100">
        <div className="sm:flex flex-row items-center justify-between mb-3">
          <div className="font-heading font-bold text-lg text-primary flex items-center gap-2 mb-2 sm:mb-0">
            <i className="fa fa-lightbulb text-primary" /> ¿No ves tu proyecto?
          </div>
          <span className="text-accent/90">
            Cotizamos soluciones a la medida y acompañamos tu transformación digital.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-3">
          <Link href="/contact" className="cta-button min-w-[160px]">
            Pide Tu Cotización
          </Link>
          <a
            href="https://wa.me/5217293062147?text=Hola%20Pumpea%2C%20quiero%20informes%20y%20cotización%20de%20tu%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="button bg-green-500 hover:bg-green-700 border-green-600 flex items-center gap-2 min-w-[170px]"
          >
            <i className="fab fa-whatsapp text-lg" /> Cotiza por WhatsApp
          </a>
        </div>
        <p className="mt-5 text-center text-accent/70 text-base">
          Todos los paquetes pueden personalizarse; recibe asesoría directa de nuestros expertos.
        </p>
        <ul className="list-disc pl-6 mt-3 text-accent/70 text-[15px]">
          <li>Precios de referencia; pueden variar según requerimientos o personalizaciones.</li>
          <li>Incluyen cita y diagnóstico inicial gratis.</li>
          <li>Pago en dos partes: 40% de anticipo y el resto a la entrega.</li>
        </ul>
      </div>
      <WhatsAppCta />
    </div>
  );
}
