import Link from "next/link";
import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Click&Celebrate | Pumpea",
  description: "Click&Celebrate: tecnología para eventos, invitaciones, RSVP, galerías y streaming con Pumpea.",
};

const features = [
  { icon: "fa-envelope-open-text", title: "Invitaciones digitales", desc: "Experiencias elegantes con RSVP instantáneo y datos ordenados." },
  { icon: "fa-images", title: "Galerías compartidas", desc: "Fotos, recuerdos y álbumes para conectar a los asistentes." },
  { icon: "fa-calendar-days", title: "Itinerario y recordatorios", desc: "Cuentas regresivas, agenda del evento y comunicación clara." },
  { icon: "fa-video", title: "Streaming profesional", desc: "Transmisión en vivo con flujo preparado bajo cotización." },
];

export default function ClickCelebratePage() {
  return (
    <div>
      <PageHero kicker="Producto destacado" title="Click&Celebrate convierte tus eventos en experiencias digitales memorables." ctaHref="/contact" ctaLabel="Cotiza tu evento" secondaryHref="/pricing" secondaryLabel="Ver paquetes">
        Invitaciones digitales, RSVP, galerías, recordatorios y streaming en una solución diseñada por Pumpea para que cada momento sea más fácil de gestionar y compartir.
      </PageHero>

      <section className="pumpea-container pb-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="glass-card reveal-card p-7">
              <span className="icon-bubble mb-5"><i className={`fa ${feature.icon}`} /></span>
              <h2 className="font-heading text-2xl font-black text-[#102453]">{feature.title}</h2>
              <p className="mt-3 font-medium leading-relaxed text-slate-600">{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pumpea-container pb-24">
        <div className="texture-panel grid items-center gap-8 p-7 text-white md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <span className="rounded-full bg-white/16 px-4 py-2 text-sm font-black backdrop-blur">Eventos con tecnología</span>
            <h2 className="mt-6 font-heading text-3xl font-black md:text-5xl">Gestiona, transmite y celebra sin perder control.</h2>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-white/82">
              Diseñamos la experiencia visual y operativa alrededor de tus invitados, la logística del evento y la forma en que quieres conservar los recuerdos.
            </p>
          </div>
          <a href="https://wa.me/5217293062147?text=%C2%A1Hola!%20Estoy%20interesado%20en%20Click%26Celebrate%20de%20Pumpea" target="_blank" rel="noopener noreferrer" className="cta-button min-w-[260px] !bg-white !text-blue-700">
            <i className="fab fa-whatsapp" /> Cotizar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
