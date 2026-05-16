"use client";

import Link from "next/link";
import PageHero from "../../components/PageHero";
import WhatsAppCta from "../../components/WhatsAppCta";
import { useCalendlyModal } from "../../components/CalendlyModal";

const steps = [
  { icon: "fa-calendar-check", title: "Agenda tu cita", desc: "Reunión presencial o videollamada para entender tu idea y contexto." },
  { icon: "fa-clipboard-list", title: "Propuesta personalizada", desc: "Cotización clara en menos de 2 días hábiles con alcance y prioridades." },
  { icon: "fa-file-signature", title: "Contrato y confidencialidad", desc: "Formalizamos tiempos, entregables y cuidado de información." },
  { icon: "fa-credit-card", title: "Pago inicial", desc: "40% de anticipo para iniciar con equipo y plan de trabajo definido." },
  { icon: "fa-rocket", title: "Desarrollo y entrega", desc: "Beta, versión final, capacitación y acompañamiento de lanzamiento." },
];

export default function AgendaPage() {
  const modal = useCalendlyModal();

  function handleAgendaClick(event) {
    event.preventDefault();
    modal?.showCalendly?.();
  }

  return (
    <div>
      <PageHero kicker="Agenda" title="Estás a un paso de digitalizar tu negocio como se debe.">
        Queremos conocerte, entender tus ideas y ayudarte a convertirlas en soluciones reales. La asesoría inicial no tiene costo.
      </PageHero>

      <section className="pumpea-container pb-20">
        <div className="grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="glass-card reveal-card relative p-6 text-center">
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-400 text-2xl text-white shadow-xl shadow-blue-500/20">
                <i className={`fa ${step.icon}`} />
              </span>
              <span className="font-heading text-sm font-black text-blue-700">Paso {index + 1}</span>
              <h2 className="mt-2 font-heading text-xl font-black text-[#102453]">{step.title}</h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pumpea-container pb-24">
        <div className="texture-panel grid items-center gap-8 p-7 text-white md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <span className="rounded-full bg-white/16 px-4 py-2 text-sm font-black backdrop-blur">Calendly integrado</span>
            <h2 className="mt-6 font-heading text-3xl font-black md:text-5xl">Reserva el horario que mejor te funcione.</h2>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-white/82">
              La cita sirve para definir objetivo, urgencia, recursos disponibles y la primera versión del alcance. Después recibirás una propuesta accionable.
            </p>
          </div>
          <div className="flex min-w-[270px] flex-col gap-3">
            <button type="button" onClick={handleAgendaClick} className="cta-button !bg-white !text-blue-700">
              <i className="fa fa-calendar" /> Abrir agenda
            </button>
            <Link href="/contact" className="button !border-white/30 !bg-white/12 !text-white backdrop-blur-xl">Tengo dudas primero</Link>
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </div>
  );
}
