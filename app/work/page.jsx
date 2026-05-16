import Link from "next/link";
import PageHero from "../../components/PageHero";

const steps = [
  { icon: "fa-calendar-check", title: "Agenda tu cita", desc: "Escuchamos tu idea, objetivo y restricciones reales." },
  { icon: "fa-file-alt", title: "Propuesta personalizada", desc: "Traducimos lo conversado en alcance, fases y costo." },
  { icon: "fa-handshake", title: "Contrato y confidencialidad", desc: "Formalizamos responsabilidades y protegemos tu información." },
  { icon: "fa-credit-card", title: "Pago inicial", desc: "Arrancamos con un anticipo y plan de ejecución claro." },
  { icon: "fa-gears", title: "Desarrollo en dos fases", desc: "Beta funcional, ajustes, entrega final, manuales y capacitación." },
];

export default function WorkAgendaPage() {
  return (
    <div>
      <PageHero kicker="Cómo trabajamos" title="Una ruta simple para pasar de idea a entrega funcional.">
        Ordenamos el proyecto por fases para cuidar expectativa, avance, comunicación y calidad de entrega.
      </PageHero>

      <section className="pumpea-container pb-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step.title} className="glass-card reveal-card p-6">
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-400 text-2xl text-white shadow-xl shadow-blue-500/20">
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
        <div className="glass-card-strong grid items-center gap-8 p-7 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <span className="section-kicker">Siguiente paso</span>
            <h2 className="mt-5 font-heading text-3xl font-black text-[#102453] md:text-4xl">Tu próxima gran idea necesita estructura, estrategia y un buen equipo detrás.</h2>
          </div>
          <Link href="/agenda" className="cta-button min-w-[260px]"><i className="fa fa-calendar" /> Agenda gratis</Link>
        </div>
      </section>
    </div>
  );
}
