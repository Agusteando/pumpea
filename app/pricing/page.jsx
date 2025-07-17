
"use client";
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
  }
];

export default function Pricing() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 relative">
      <h1 className="text-3xl md:text-4xl font-heading mb-5 text-center bg-gradient-to-r from-primary to-accent-sky inline-block text-transparent bg-clip-text">
        Precios y Paquetes
      </h1>
      <p className="mb-8 text-accent-sky text-center">
        Todos nuestros paquetes se ajustan a tus necesidades y pueden ser personalizados.<br />
        <span className="inline-block font-bold text-primary-dark">¡Cotización sin costo y cita de seguimiento totalmente gratis!</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        {packages.map((p) => (
          <div key={p.title} className="bg-gradient-to-b from-grayKt to-white rounded-xl shadow p-6 flex flex-col justify-between border border-grayKt">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary text-lg"><i className="fa fa-circle mr-2 align-middle" /></span>
              <h2 className="text-xl font-heading">{p.title}</h2>
            </div>
            <div className="text-2xl text-primary font-bold mb-1">{p.price}</div>
            <div className="text-base text-accent-sky">{p.details}</div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-b from-accent-sky/20 to-white rounded-lg shadow px-5 py-8 mb-4">
        <ul className="list-disc pl-6 mb-3 text-accent-sky text-[16px]">
          <li>Todos nuestros paquetes están sujetos a cambios de acuerdo a las necesidades de cada cliente.</li>
          <li>Paquetes a tu medida: <span className="text-primary font-semibold">¡cotiza gratis!</span></li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-3">
          <Link href="/contact" className="cta-button bg-gradient-to-r from-primary to-accent-sky text-white border-none">
            Cotización sin costo
          </Link>
          <a
            href="https://wa.me/5217291065569?text=Hola%20Pumpea%2C%20quiero%20informes%20y%20cotización%20de%20tu%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="button bg-green-500 hover:bg-green-700 border-green-600 flex items-center gap-2 text-white"
            style={{ minWidth: 170 }}
          >
            <i className="fab fa-whatsapp text-lg" /> Cotiza por WhatsApp
          </a>
        </div>
        <p className="mt-5 text-center text-accent-sky/70 text-base">
          Seguimiento de proyecto <b>totalmente gratis</b>. Recibe atención de nuestros expertos en cada etapa.
        </p>
      </div>
      {/* WhatsApp floating CTA */}
      <a
        href="https://wa.me/5217291065569?text=Hola%20Pumpea%2C%20quiero%20informes%20y%20cotización%20de%20tu%20servicio"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-50 flex items-center bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full shadow-lg text-base font-heading gap-2 transition"
        aria-label="WhatsApp Cotiza Ahora"
      >
        <i className="fab fa-whatsapp text-xl" /> Cotiza ahora
      </a>
    </div>
  );
}
