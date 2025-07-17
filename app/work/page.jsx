
import Link from "next/link";

const pasos = [
  {
    icon: "fa-calendar-check",
    title: "Paso 1: Agenda tu cita (¡totalmente gratis!)",
    desc: "Elige si prefieres una reunión presencial o videollamada. Nos encanta escuchar nuevas ideas y descubrir cómo podemos ayudarte.",
  },
  {
    icon: "fa-file-alt",
    title: "Paso 2: Propuesta personalizada",
    desc: "Con base en lo que nos cuentes, te enviaremos una cotización clara y detallada en máximo 2 días hábiles.",
  },
  {
    icon: "fa-handshake",
    title: "Paso 3: Firma de contrato + confidencialidad",
    desc: "Firmamos un contrato formal y un acuerdo de confidencialidad para que tus ideas siempre estén protegidas.",
  },
  {
    icon: "fa-credit-card",
    title: "Paso 4: Pago inicial",
    desc: "Solicitamos un anticipo del 40% para comenzar con el desarrollo. ¡Aquí empieza la magia!",
  },
  {
    icon: "fa-gears",
    title: "Paso 5: Desarrollo en dos fases",
    desc: (
      <>
        <b>Fase Beta:</b> Recibes un primer avance funcional de tu sistema o producto.<br/>
        <b>Fase Final:</b> Entrega completa del proyecto + manuales y capacitación.
      </>
    ),
  },
];

export default function WorkAgendaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-heading text-center mb-4 bg-gradient-to-r from-primary to-accent-sky text-transparent bg-clip-text">
        ¡Estás a un paso de digitalizar tu negocio como se debe!
      </h1>
      <p className="text-accent-sky text-center mb-8">
        En <b>PUMPEA</b> queremos conocerte y ayudarte a transformar tus ideas en sistemas, plataformas o soluciones reales que impulsen tu proyecto.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pasos.map((p, i) => (
          <div key={i} className="rounded-xl p-6 shadow-lg bg-gradient-to-br from-primary-light via-accent-sky/20 to-grayKt border border-accent-sky flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <i className={`fa ${p.icon} text-2xl text-primary`} />
              <h2 className="font-heading text-base md:text-lg text-primary-dark">{p.title}</h2>
            </div>
            <div className="text-accent-sky text-sm leading-relaxed">{p.desc}</div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-xl text-center text-primary-dark font-heading font-bold">
        ¿Listo para transformar tu negocio?<br/>
        Haz clic abajo y agenda tu cita hoy mismo.
      </p>
      <div className="flex justify-center mt-4">
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ogTtHKoE4rEOuBF-JXZgsNdvXjuJxv13aTyVdxQ9dDA3L5rFitNPaVNWT0jbceWMdC0vjlAlO?pli=1"
          target="_blank"
          rel="noopener"
          className="cta-button bg-gradient-to-r from-primary to-accent-sky text-white font-bold border-none"
        >
          Agenda tu cita gratis
        </a>
      </div>
      <div className="mt-6 text-center text-accent-sky/80 text-sm font-light">
        Tu próxima gran idea necesita estructura, estrategia… y un buen equipo detrás. <br/>
        <b>PUMPEA tu negocio. Dale potencia a tus ideas.</b>
      </div>
    </div>
  );
}
