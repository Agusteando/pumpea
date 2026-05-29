"use client";

import Link from "next/link";
import WhatsAppCta from "../../components/WhatsAppCta";
import { useCalendlyModal } from "../../components/CalendlyModal";

const steps = [
  { icon: "fa-comments", title: "Entendemos el contexto", desc: "Conversamos sobre tu negocio, objetivo, urgencia y herramientas actuales." },
  { icon: "fa-route", title: "Priorizamos la ruta", desc: "Te decimos qué conviene construir primero y qué puede dejarse para después." },
  { icon: "fa-file-lines", title: "Preparamos propuesta", desc: "Si hay encaje, armamos alcance, fases y costo con lenguaje claro." },
  { icon: "fa-handshake", title: "Arrancamos con orden", desc: "Formalizamos tiempos, entregables, anticipo y cuidado de información." },
];

const callNotes = [
  "Duración estimada de 25 a 35 minutos",
  "Asesoría inicial sin costo",
  "Videollamada o seguimiento por WhatsApp",
  "Respuesta con próximos pasos en 24-48 h",
];

export default function AgendaPage() {
  const modal = useCalendlyModal();

  function handleAgendaClick(event) {
    event.preventDefault();
    modal?.showCalendly?.();
  }

  return (
    <div>
      <section className="pumpea-container pb-12 pt-8 md:pb-16 md:pt-16">
        <div className="grid items-center gap-6 rounded-[28px] border border-blue-100/90 bg-white/82 p-5 shadow-[0_28px_90px_rgba(19,88,243,.1)] backdrop-blur-[24px] sm:rounded-[36px] sm:p-7 md:p-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          <div className="max-w-[720px]">
            <span className="section-kicker">Agenda</span>
            <h1 className="mt-5 font-heading text-[32px] font-black leading-[1.08] tracking-[-0.035em] text-[#091126] sm:text-[48px] md:text-[62px]">
              Agenda una llamada clara para decidir el siguiente paso.
            </h1>
            <p className="mt-5 max-w-[650px] text-base font-medium leading-[1.75] text-slate-600 sm:text-lg">
              Revisamos tu idea, detectamos prioridades y te damos una ruta realista. Si Pumpea puede ayudarte, saldrás con una propuesta de alcance por fases.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={handleAgendaClick} className="cta-button min-h-[58px] rounded-[20px] px-7">
                <i className="fa fa-calendar-days" /> Abrir agenda
              </button>
              <Link href="/contact" className="button min-h-[58px] rounded-[20px] px-7">
                Tengo dudas primero
              </Link>
            </div>
          </div>

          <aside className="rounded-[26px] border border-blue-100 bg-[linear-gradient(145deg,#f7fbff,#ffffff)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.96)] sm:p-6">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-400 text-2xl text-white shadow-[0_16px_34px_rgba(19,88,243,.22)]">
                <i className="fa fa-calendar-check" />
              </span>
              <span>
                <span className="block font-heading text-[21px] font-black leading-tight text-[#102453]">Qué esperar</span>
                <span className="mt-1 block text-sm font-semibold text-slate-500">Una conversación práctica, sin compromiso.</span>
              </span>
            </div>
            <ul className="mt-6 grid gap-3">
              {callNotes.map((note) => (
                <li key={note} className="flex items-start gap-3 rounded-2xl border border-blue-50 bg-white/78 px-4 py-3 text-sm font-bold leading-relaxed text-slate-600">
                  <i className="fa fa-check mt-1 text-blue-600" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="pumpea-container pb-20">
        <div className="mb-7 max-w-[760px]">
          <span className="section-kicker">Proceso</span>
          <h2 className="mt-5 font-heading text-[30px] font-black leading-tight tracking-[-0.035em] text-[#102453] sm:text-[42px]">
            Del primer mensaje a un plan que se pueda ejecutar.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="glass-card reveal-card relative p-5 sm:p-6">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-400 text-xl text-white shadow-xl shadow-blue-500/20">
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
        <div className="texture-panel grid items-center gap-6 p-5 text-white sm:p-7 md:grid-cols-[1fr_auto] md:gap-8 md:p-10">
          <div>
            <span className="rounded-full bg-white/16 px-4 py-2 text-sm font-black backdrop-blur">Calendly integrado</span>
            <h2 className="mt-6 font-heading text-[29px] font-black leading-tight sm:text-3xl md:text-5xl">Reserva el horario que mejor te funcione.</h2>
            <p className="mt-5 max-w-3xl text-base font-semibold leading-relaxed text-white/82 sm:text-lg">
              La cita sirve para definir objetivo, recursos disponibles y primera versión del alcance. Después recibirás una ruta accionable, sin promesas infladas.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 md:min-w-[270px]">
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
