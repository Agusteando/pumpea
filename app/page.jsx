import Link from "next/link";
import SpriteLogoRail from "../components/SpriteLogoRail";
import WhatsAppCta from "../components/WhatsAppCta";

const services = [
  {
    icon: "fa-globe",
    title: "Sitios web",
    desc: "Diseño moderno y optimizado para convertir.",
  },
  {
    icon: "fa-robot",
    title: "Automatización + bots",
    desc: "Procesos inteligentes que ahorran tiempo y dinero.",
  },
  {
    icon: "fa-diagram-project",
    title: "Integraciones",
    desc: "Conectamos tus herramientas y plataformas favoritas.",
  },
];

const automationStats = [
  { icon: "fa-chart-line", label: "Leads captados", value: "1,248", change: "+32%" },
  { icon: "fa-arrows-rotate", label: "Procesos automatizados", value: "24", change: "+18%" },
  { icon: "fa-clock", label: "Tiempo ahorrado", value: "120 h", change: "+40%" },
];

const metrics = [
  { icon: "fa-robot", value: "+30 proyectos", label: "exitosos", desc: "en diferentes industrias", tone: "blue" },
  { icon: "fa-gear", value: "100% soluciones", label: "a medida", desc: "alineadas a tus objetivos", tone: "cyan" },
  { icon: "fa-crosshairs", value: "Atención cercana", label: "y experta", desc: "acompañamiento real", tone: "violet" },
];

const process = [
  "Diagnóstico y mapa de oportunidad",
  "Diseño del sistema y experiencia",
  "Desarrollo, integración y automatización",
  "Lanzamiento, medición y mejora continua",
];

function BrowserMockup() {
  return (
    <div className="relative mx-auto min-h-[540px] w-full max-w-[700px] lg:min-h-[610px]">
      <div className="absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/70 opacity-80" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/60 opacity-80" />
      <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/50 opacity-80" />

      <div className="texture-panel absolute left-[8%] top-[6%] h-[350px] w-[76%] rounded-[24px] p-7 text-white md:p-8">
        <div className="mb-12 flex items-center justify-between text-[11px] font-bold">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-full bg-white/10 p-1" />
            <span>Pumpea</span>
          </div>
          <div className="hidden gap-7 md:flex">
            <span>Inicio</span>
            <span>Servicios</span>
            <span>Nosotros</span>
            <span>Contacto</span>
          </div>
          <span className="rounded-full bg-white px-4 py-2 text-[10px] font-black text-blue-700">Cotizar proyecto</span>
        </div>
        <h3 className="max-w-[330px] font-heading text-[30px] font-black leading-[1.04] md:text-[34px]">
          Impulsamos marcas con tecnología, creatividad y datos.
        </h3>
        <p className="mt-6 max-w-[310px] text-sm font-semibold leading-relaxed text-white/88">
          Soluciones digitales a la medida para automatizar, conectar y escalar tu negocio.
        </p>
        <button className="mt-6 rounded-full bg-white px-5 py-3 text-xs font-black text-blue-700 shadow-xl">
          Hablemos de tu proyecto <i className="fa fa-arrow-right ml-2" />
        </button>
      </div>

      <div className="float-card animate-float-medium absolute right-[2%] top-[13%] w-[196px] p-6">
        <p className="text-sm font-black text-slate-700">Rendimiento general</p>
        <div className="mt-3 flex items-center gap-2 text-3xl font-black text-emerald-500">
          <i className="fa fa-arrow-up text-lg" /> 48%
        </div>
        <p className="mt-1 text-[11px] font-semibold text-slate-500">vs. mes anterior</p>
        <svg viewBox="0 0 160 58" className="mt-2 h-[52px] w-full" aria-hidden>
          <polyline points="4,48 22,44 38,34 54,28 72,40 88,32 104,14 122,25 138,12 156,6" fill="none" stroke="#1358f3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="float-card animate-float-slow absolute bottom-[11%] left-[3%] w-[246px] p-5">
        <p className="mb-4 font-heading text-[15px] font-black text-slate-800">Automatizaciones activas</p>
        <div className="space-y-3">
          {automationStats.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-2xl border border-blue-50 bg-white/72 px-3 py-3 shadow-sm">
              <span className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-blue-700">
                  <i className={`fa ${item.icon} text-xs`} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold text-slate-500">{item.label}</span>
                  <span className="block text-[15px] font-black text-slate-900">{item.value}</span>
                </span>
              </span>
              <span className="text-[11px] font-black text-emerald-500">{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[18%] h-[330px] w-[178px] rounded-[34px] border-[4px] border-slate-900 bg-slate-950 p-2 shadow-[0_26px_60px_rgba(15,23,42,.32)]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-950" />
        <div className="h-full overflow-hidden rounded-[26px] bg-white">
          <div className="flex items-center justify-between border-b border-blue-50 px-3 py-4">
            <span className="flex items-center gap-1 text-[10px] font-black text-slate-800">
              <img src="/logo.png" alt="" className="h-5 w-5" /> Pumpea
            </span>
            <i className="fa fa-bars text-slate-800" />
          </div>
          <div className="p-4">
            <h4 className="font-heading text-[20px] font-black leading-[1.03] text-slate-900">
              Soluciones digitales que hacen crecer tu negocio
            </h4>
            <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-[10px] font-black text-white shadow-lg">Solicitar asesoría</button>
            <div className="mt-9 overflow-hidden rounded-2xl border border-blue-100 bg-sky-50 p-2">
              <div className="h-20 rounded-xl bg-gradient-to-br from-sky-200 via-white to-blue-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-[43%] grid w-[242px] gap-3">
        {services.map((service) => (
          <div key={service.title} className="float-card flex items-center gap-4 p-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <i className={`fa ${service.icon} text-xl`} />
            </span>
            <span>
              <span className="block font-heading text-[17px] font-black text-blue-700">{service.title}</span>
              <span className="block text-[12px] font-semibold leading-snug text-slate-500">{service.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlliancePanel() {
  return (
    <section className="pumpea-container relative -mt-2 pb-14 md:pb-20">
      <div className="glass-card-strong p-6 md:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[220px_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-black leading-tight text-[#162a59]">
              Aliados que ya confían en Pumpea
            </h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
              Marcas y organizaciones que están creciendo con nosotros.
            </p>
          </div>
          <SpriteLogoRail compact framed={false} className="w-full" />
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[22px] border border-blue-100 bg-white/66 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={metric.value} className="flex items-center gap-5 p-6 md:px-8">
              <span className={`metric-icon ${metric.tone === "cyan" ? "!bg-gradient-to-br !from-cyan-500 !to-teal-400" : metric.tone === "violet" ? "!bg-gradient-to-br !from-violet-600 !to-blue-500" : ""}`}>
                <i className={`fa ${metric.icon} text-xl`} />
              </span>
              <span>
                <span className="block font-heading text-xl font-black leading-tight text-blue-700">{metric.value}</span>
                <span className="block font-heading text-xl font-black leading-tight text-[#162a59]">{metric.label}</span>
                <span className="mt-1 block text-sm font-semibold text-slate-500">{metric.desc}</span>
              </span>
              {index < metrics.length - 1 && <span className="ml-auto hidden h-12 w-px bg-blue-100 md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ icon, title, desc, children }) {
  return (
    <article className="glass-card reveal-card flex h-full flex-col p-7">
      <span className="icon-bubble mb-6"><i className={`fa ${icon} text-xl`} /></span>
      <h3 className="font-heading text-2xl font-black text-[#142653]">{title}</h3>
      <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">{desc}</p>
      {children}
    </article>
  );
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-20 md:pb-20 md:pt-24">
        <div className="hero-orb one animate-pulse-glow" />
        <div className="hero-orb two animate-pulse-glow" />
        <div className="pumpea-container grid items-center gap-10 lg:grid-cols-[minmax(0,560px)_minmax(620px,1fr)]">
          <div className="relative z-10">
            <div className="badge-pill px-5 py-3 text-[15px] font-bold">
              <span className="text-xl">🇲🇽</span>
              <span>Transformación digital <b className="text-blue-700">hecha en México</b></span>
            </div>
            <h1 className="mt-8 max-w-[650px] font-heading text-[46px] font-black leading-[1.12] tracking-[-0.045em] text-[#090d1d] md:text-[64px] lg:text-[68px]">
              Tu negocio necesita más que presencia digital:
              <span className="block bg-gradient-to-r from-[#1358f3] via-[#1f7fff] to-[#20cfe8] bg-clip-text text-transparent">
                necesita impulso que convierta.
              </span>
            </h1>
            <p className="mt-6 max-w-[640px] text-[19px] font-medium leading-[1.75] text-slate-600 md:text-[21px]">
              Diseñamos sitios web, automatizamos procesos, integramos herramientas y desarrollamos productos digitales que conectan tecnología con resultados reales para hacer crecer tu marca.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/agenda" className="cta-button">
                <i className="fa fa-calendar" /> Agenda una asesoría gratis <i className="fa fa-arrow-right" />
              </Link>
              <Link href="#soluciones" className="button">
                <i className="fa fa-play" /> Ver soluciones
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-600">
              <span><i className="fa fa-bolt mr-2 text-slate-900" />Respuesta en 24h</span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <span><i className="fa fa-shield-halved mr-2 text-slate-900" />Sin costo inicial de asesoría</span>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <span><i className="fa fa-lock mr-2 text-slate-900" />Confidencialidad garantizada</span>
            </div>
          </div>
          <BrowserMockup />
        </div>
      </section>

      <AlliancePanel />

      <section id="soluciones" className="pumpea-container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Soluciones diseñadas para convertir</span>
          <h2 className="mt-5 font-heading text-4xl font-black tracking-tight text-[#101a39] md:text-5xl">
            El patrón visual también es el patrón operativo: claro, conectado y medible.
          </h2>
          <p className="mt-5 text-lg font-medium leading-relaxed text-slate-600">
            Cada solución combina estrategia, diseño, automatización y datos para que el sitio no solo se vea bien: debe explicar, vender, captar y operar mejor.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <SolutionCard icon="fa-window-maximize" title="Webs que venden" desc="Landing pages, sitios corporativos y experiencias comerciales con arquitectura de conversión.">
            <ul className="mt-6 space-y-2 text-sm font-bold text-slate-600">
              <li><i className="fa fa-check mr-2 text-blue-600" />Diseño responsive premium</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />SEO técnico base</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />CTA y captura de leads</li>
            </ul>
          </SolutionCard>
          <SolutionCard icon="fa-robot" title="Bots y automatización" desc="Flujos para WhatsApp, atención, seguimiento, recordatorios y tareas repetibles.">
            <ul className="mt-6 space-y-2 text-sm font-bold text-slate-600">
              <li><i className="fa fa-check mr-2 text-blue-600" />Respuestas 24/7</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />Calificación de prospectos</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />Procesos documentados</li>
            </ul>
          </SolutionCard>
          <SolutionCard icon="fa-plug" title="Integraciones" desc="Conectamos formularios, CRMs, hojas de cálculo, pagos, correos y operación interna.">
            <ul className="mt-6 space-y-2 text-sm font-bold text-slate-600">
              <li><i className="fa fa-check mr-2 text-blue-600" />Menos captura manual</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />Datos centralizados</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />Reportes claros</li>
            </ul>
          </SolutionCard>
          <SolutionCard icon="fa-cubes" title="Productos digitales" desc="Sistemas a medida, portales, herramientas internas y experiencias para eventos.">
            <ul className="mt-6 space-y-2 text-sm font-bold text-slate-600">
              <li><i className="fa fa-check mr-2 text-blue-600" />MVP funcional</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />Escalabilidad progresiva</li>
              <li><i className="fa fa-check mr-2 text-blue-600" />Capacitación de entrega</li>
            </ul>
          </SolutionCard>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pumpea-container grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="texture-panel min-h-[480px] p-8 text-white md:p-10">
            <span className="rounded-full bg-white/16 px-4 py-2 text-sm font-black backdrop-blur">User journey</span>
            <h2 className="mt-8 max-w-[560px] font-heading text-4xl font-black leading-tight md:text-5xl">
              De una idea suelta a una experiencia digital completa.
            </h2>
            <p className="mt-6 max-w-[560px] text-lg font-semibold leading-relaxed text-white/84">
              Pumpea traduce el alcance comercial en una ruta clara: atraer, explicar, capturar, automatizar y medir. El usuario siempre sabe dónde está, qué gana y qué sigue.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {process.map((item, index) => (
                <div key={item} className="rounded-3xl border border-white/18 bg-white/12 p-5 backdrop-blur-xl">
                  <span className="text-sm font-black text-cyan-100">0{index + 1}</span>
                  <p className="mt-3 font-heading text-lg font-black leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <div className="glass-card-strong p-7 md:p-9">
              <span className="section-kicker">Método Pumpea</span>
              <h3 className="mt-5 font-heading text-3xl font-black text-[#101a39]">Diseñamos para que tu operación se vea y funcione mejor.</h3>
              <p className="mt-4 text-lg font-medium leading-relaxed text-slate-600">
                La estética del home se replica en todo el sitio con tarjetas de valor, jerarquía clara, microinteracciones, textura tecnológica y CTAs recurrentes. Eso mantiene consistencia y reduce fricción.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="glass-card p-6">
                <span className="icon-bubble mb-5"><i className="fa fa-bullseye" /></span>
                <h4 className="font-heading text-xl font-black text-[#101a39]">Conversión</h4>
                <p className="mt-2 font-medium leading-relaxed text-slate-600">Cada sección sostiene una acción siguiente: agenda, cotiza, explora o contacta.</p>
              </div>
              <div className="glass-card p-6">
                <span className="icon-bubble mb-5"><i className="fa fa-layer-group" /></span>
                <h4 className="font-heading text-xl font-black text-[#101a39]">Escala visual</h4>
                <p className="mt-2 font-medium leading-relaxed text-slate-600">El sistema se aplica a servicios, precios, casos, contacto y eventos sin perder identidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pumpea-container pb-24 pt-10">
        <div className="glass-card-strong grid items-center gap-8 p-7 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <span className="section-kicker">Siguiente paso</span>
            <h2 className="mt-5 font-heading text-3xl font-black tracking-tight text-[#101a39] md:text-5xl">
              Hagamos que tu presencia digital empiece a convertir.
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-600">
              Agenda una asesoría gratuita y te ayudamos a mapear el sitio, la automatización o el producto digital que más impacto puede generar ahora.
            </p>
          </div>
          <div className="flex min-w-[280px] flex-col gap-3">
            <Link href="/agenda" className="cta-button"><i className="fa fa-calendar" /> Agenda tu cita</Link>
            <Link href="/pricing" className="button"><i className="fa fa-tags" /> Ver precios</Link>
          </div>
        </div>
      </section>

      <WhatsAppCta text="Cotiza por WhatsApp" />
    </div>
  );
}
