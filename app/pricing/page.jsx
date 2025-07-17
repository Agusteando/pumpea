
"use client";
import WhatsAppCta from "../../components/WhatsAppCta";
import Link from "next/link";

const packages = [
  {
    title: "Sitio web simple",
    price: "Desde $3,500 MXN",
    details: "Pago único + soporte mensual",
  },
  {
    title: "Sitio e-commerce",
    price: "Desde $20,000 MXN",
    details: "Pago único + soporte mensual",
  },
  {
    title: "Bot WhatsApp",
    price: "Desde $3,000 MXN",
    details: "Pro/Empresarial: Cotización personalizada",
  },
  {
    title: "Gestión de redes sociales",
    price: "Desde $1,000 MXN",
    details: "",
  },
  {
    title: "Eventos: Click&Celebrate",
    price: "Bajo Cotización",
    details:
      "StreamYard / OBS / gestión de fotos en tiempo real, invitaciones, itinerarios, cuentas regresivas y más.",
  },
];

export default function Pricing() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 relative">
      <h1 className="text-3xl md:text-4xl font-heading mb-5 text-center text-gradient-main font-extrabold fade-in">
        Precios y Paquetes
      </h1>
      <p className="mb-8 text-accent/90 text-center">
        Todos nuestros paquetes se ajustan a tus necesidades y pueden ser personalizados.<br />
        <span className="inline-block font-bold text-primary">¡Cotización sin costo y cita de seguimiento totalmente gratis!</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        {packages.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between border border-gray-100 hover:scale-[1.025] hover:shadow-blue-200/40 transition group animate-in fade-in"
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-lg ${
                  p.price === "Bajo Cotización"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
                    : "text-green-500"
                }`}
              >
                <i className="fa fa-circle mr-2 align-middle" />
              </span>
              <h2 className="text-xl font-heading font-semibold">{p.title}</h2>
            </div>
            <div
              className={`text-2xl ${
                p.price === "Bajo Cotización"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent font-extrabold"
                  : "text-primary font-bold"
              } mb-1`}
            >
              {p.price}
            </div>
            <div className="text-base text-accent/90">{p.details}</div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-lg shadow px-5 py-8 mb-4 border border-blue-100">
        <ul className="list-disc pl-6 mb-3 text-accent/80 text-[16px]">
          <li>
            Todos nuestros paquetes están sujetos a cambios de acuerdo a las necesidades de cada cliente.
          </li>
          <li>
            Paquetes a tu medida:{" "}
            <span className="text-primary font-semibold">¡cotiza gratis!</span>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-3">
          <Link href="/contact" className="cta-button">
            Cotización sin costo
          </Link>
          <a
            href="https://wa.me/5217293062147?text=Hola%20Pumpea%2C%20quiero%20informes%20y%20cotización%20de%20tu%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="button bg-green-500 hover:bg-green-700 border-green-600 flex items-center gap-2"
            style={{ minWidth: 170 }}
          >
            <i className="fab fa-whatsapp text-lg" /> Cotiza por WhatsApp
          </a>
        </div>
        <p className="mt-5 text-center text-accent/70 text-base">
          Seguimiento de proyecto <b>totalmente gratis</b>. Recibe atención de nuestros expertos en cada etapa.
        </p>
      </div>
      <WhatsAppCta />
    </div>
  );
}
