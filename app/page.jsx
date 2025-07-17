
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center space-y-8">
        <div>
          <img src="/logo.png" alt="Pumpea Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading mb-2 leading-[1.15]">
            Transformación Digital<br />de Clase Mundial
          </h1>
          <p className="text-lg md:text-xl text-accent/90 max-w-xl mx-auto">
            Te ayudamos a transformar tu negocio con soluciones digitales, automatización y tecnología a tu medida. Agenda tu cita gratuita y cotiza sin costo con los expertos de Pumpea en México.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-2">
          <Link href="/pricing" className="cta-button text-lg">
            Ver Precios
          </Link>
          <Link href="/contact" className="button text-lg">
            Solicita Cotización Sin Costo
          </Link>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="/digital-transformation.png"
            alt="Transformación Digital"
            className="rounded-xl w-full h-auto shadow-lg border"
            style={{ background: "#eee" }}
          />
        </div>
        <div>
          <h2 className="text-2xl font-heading mb-2">¿Qué hacemos?</h2>
          <ul className="list-disc pl-6 space-y-1 text-accent/90 text-base">
            <li>Desarrollo de sitios web y e-commerce</li>
            <li>Implementación de bots inteligentes para WhatsApp</li>
            <li>Gestión eficiente de redes sociales</li>
            <li>Automatización de procesos y flujos de ventas</li>
            <li>Integraciones avanzadas y sistemas personalizados</li>
            <li>Soporte y acompañamiento mensual</li>
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <span className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium w-fit">
              Paquetes flexibles y a tu medida
            </span>
            <span className="inline-block rounded-full px-3 py-1 bg-green-500/10 text-green-600 text-sm font-medium w-fit">
              Agenda tu cita gratis
            </span>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-center text-lg font-heading mb-4">
          Todos nuestros paquetes son personalizables. <br />
          Cotización sin costo y cita de seguimiento totalmente gratis.
        </h2>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/contact" className="cta-button">
            Agenda tu cita
          </Link>
          <Link href="/pricing" className="button">
            Más información
          </Link>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="mt-20">
        <h2 className="text-2xl font-heading mb-5 text-center">
          Finalmente, agrega en nuestros Productos:
        </h2>
        <div className="bg-gray-50 rounded-xl p-7 max-w-2xl mx-auto space-y-3 shadow-md">
          <h3 className="text-xl font-heading text-primary mb-2 text-center">Click&Celebrate</h3>
          <p className="text-accent/90 text-center">
            Productos para tu evento, gestión de fotos y momentos en tiempo real, invitaciones, itinerarios, cuentas regresivas, transmisiones en vivo.
          </p>
        </div>
      </section>
    </div>
  );
}
