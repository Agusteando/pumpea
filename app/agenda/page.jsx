
"use client";
import WhatsAppCta from "../../components/WhatsAppCta";
import Link from "next/link";
import { useCalendlyModal } from "../../components/CalendlyModal";

const steps = [
  {
    icon: "fa-calendar-check",
    title: "Agenda tu cita",
    desc: "Reunión presencial o videollamada. ¡Queremos conocer tu idea!",
  },
  {
    icon: "fa-clipboard-list",
    title: "Propuesta personalizada",
    desc: "Cotización clara y detallada en menos de 2 días hábiles.",
  },
  {
    icon: "fa-file-signature",
    title: "Firma de contrato y confidencialidad",
    desc: "Tu privacidad, formalidad y NDA incluidos.",
  },
  {
    icon: "fa-credit-card",
    title: "Pago inicial",
    desc: "40% de anticipo para arrancar, equipo a tu disposición.",
  },
  {
    icon: "fa-tools",
    title: "Desarrollo y entrega",
    desc: "Fase Beta + Fase Final. Sistema funcionando y capacitación.",
  },
];

export default function AgendaPage() {
  const { showCalendly } = useCalendlyModal();

  const handleAgendaClick = (e) => {
    e.preventDefault();
    showCalendly();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading mb-4 text-gradient-main text-center font-bold animate-in fade-in slide-in-from-top duration-1000">
        ¡Estás a un paso de digitalizar <span className="whitespace-nowrap">tu negocio como se debe!</span>
      </h1>
      <p className="text-base md:text-lg text-accent/90 mb-7 text-center">
        En <b>PUMPEA</b> queremos conocerte, entender tus ideas y ayudarte a convertirlas en soluciones reales que impulsen tu proyecto. Así es como trabajamos:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-5 mb-8">
        {steps.map((step, i) => (
          <StepBox key={i} step={i+1} {...step} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          type="button"
          onClick={handleAgendaClick}
          className="cta-button text-base animate-in fade-in duration-700 delay-700"
        >
          Agenda ahora en línea
        </button>
        <div className="mt-2 flex flex-col items-center gap-1">
          <span className="text-accent/70 text-sm">
            ¿Tienes dudas? <Link href="/contact" className="text-primary underline">Contáctanos</Link> y un experto PUMPEA te ayuda.
          </span>
        </div>
      </div>
      <WhatsAppCta className="right-5 bottom-5" />
    </div>
  );
}
function StepBox({ step, icon, title, desc }) {
  return (
    <div className="flex flex-col items-center rounded-xl p-4 bg-gradient-to-br from-[#FAFCFF] via-[#E7F0FD] to-[#DFE7F2] border border-[#C2D7F5] text-center shadow animate-in fade-in duration-700 delay-150"
      style={{ minHeight: 192 }}
    >
      <span className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 mb-2 text-primary text-2xl shadow font-heading">
        <i className={`fa ${icon}`}></i>
      </span>
      <span className="font-bold text-[#2341A5] mb-1">Paso {step}</span>
      <h4 className="text-[1rem] font-semibold mb-1">{title}</h4>
      <div className="text-accent/90 text-sm">{desc}</div>
    </div>
  );
}
