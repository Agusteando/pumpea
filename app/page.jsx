import Link from "next/link";
import Image from "next/image";
import SpriteLogoRail from "../components/SpriteLogoRail";
import AboutHero3D from "../components/AboutHero3D";
import FounderCards from "../components/FounderCards";
import WhatsAppCta from "../components/WhatsAppCta";
import EcosystemCubesCanvas from "../components/EcosystemCubesCanvas";

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

const aboutStats = [
  { icon: "fa-rocket", value: "+50", label: "Proyectos exitosos" },
  { icon: "fa-users", value: "+20", label: "Clientes satisfechos" },
  { icon: "fa-clock", value: "+1,200", label: "Horas automatizadas" },
  { icon: "fa-star", value: "100%", label: "Compromiso cercano" },
];


const solutionCards = [
  {
    tone: "blue",
    icon: "fa-globe",
    title: "Sitios Web de Impacto",
    desc: "Desarrollo de sitios web modernos, rápidos y optimizados que venden y posicionan tu marca.",
    bullets: ["Diseño responsivo", "SEO técnico", "Velocidad ultrarrápida"],
  },
  {
    tone: "green",
    icon: "fa-robot",
    title: "Automatización + Bots",
    desc: "Bots inteligentes para WhatsApp, flujos automatizados y atención 24/7 que convierten.",
    bullets: ["Bots para WhatsApp", "Flujos automatizados", "Atención 24/7"],
  },
  {
    tone: "violet",
    icon: "fa-share-nodes",
    title: "Redes + Crecimiento",
    desc: "Gestión profesional de redes sociales y campañas que conectan y convierten.",
    bullets: ["Estrategia de contenido", "Publicidad pagada", "Análisis y reportes"],
  },
  {
    tone: "orange",
    icon: "fa-plug",
    title: "Integraciones & Sistemas",
    desc: "Plataformas y sistemas a la medida, integrados para escalar tu ecosistema digital.",
    bullets: ["Desarrollo a la medida", "Integraciones API", "Escalabilidad garantizada"],
  },
];

const workSteps = [
  { icon: "fa-calendar-check", number: "01", title: "Agenda tu cita", desc: "Presencial o virtual. Escuchamos tu idea." },
  { icon: "fa-file-lines", number: "02", title: "Propuesta personalizada", desc: "Cotización clara y detallada (24-48h)." },
  { icon: "fa-file-signature", number: "03", title: "Firma y confidencialidad", desc: "Contrato formal y protección de tu información." },
  { icon: "fa-credit-card", number: "04", title: "Pago inicial 40%", desc: "Arrancamos con enfoque y equipo listo." },
  { icon: "fa-rocket", number: "05", title: "Desarrollo + entrega", desc: "Fase Beta y Final. Capacitación y acompañamiento." },
];

const eventFeatures = [
  "Invitaciones digitales con RSVP instantáneo",
  "Galerías y álbumes para compartir fotos entre asistentes",
  "Itinerarios digitales, recordatorios y cuentas regresivas",
  "Streaming en vivo profesional (OBS, StreamYard y más)",
];

function PhoneMockup() {
  return (
    <div className="phone-frame-stage absolute bottom-[3.5%] left-[56.5%] z-30 w-[clamp(250px,35%,310px)] -translate-x-1/2">
      <div className="phone-screen absolute">
        <div className="phone-screen-inner">
          <div className="flex items-center justify-between px-[9%] pb-[4.5%] pt-[9%]">
            <span className="flex items-center gap-[5px] text-[9px] font-black text-slate-800">
              <img src="/logo.png" alt="" className="h-[14px] w-[14px]" />
              Pumpea
            </span>
            <i className="fa fa-bars text-[12px] text-slate-800" />
          </div>
          <div className="px-[9%]">
            <h4 className="font-heading text-[clamp(13px,1.05vw,15px)] font-black leading-[1.12] tracking-[-0.035em] text-slate-900">
              Soluciones digitales que hacen crecer tu negocio
            </h4>
            <button className="mt-[8%] rounded-[8px] bg-blue-600 px-[10%] py-[4.8%] text-[8px] font-black text-white shadow-lg">
              Solicitar asesoría
            </button>
            <div className="mt-[12%] overflow-hidden rounded-[15px] border border-blue-100 bg-sky-50 p-[4%]">
              <div className="h-[70px] rounded-[11px] bg-[linear-gradient(135deg,#d7ecff_0%,#ffffff_55%,#e4f5ff_100%)] p-2">
                <div className="h-full rounded-[9px] bg-[radial-gradient(circle_at_24%_34%,rgba(90,169,255,.30),transparent_28%),linear-gradient(135deg,rgba(19,88,243,.22),rgba(36,209,246,.28))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src="/mobile-frame.png" alt="Marco de teléfono" width={1024} height={1536} priority className="relative z-10 h-auto w-full select-none pointer-events-none" />
    </div>
  );
}

function MobileHeroVisual() {
  return (
    <div className="hero-mobile-cockpit mx-auto w-full max-w-[430px] p-4 sm:p-5 md:hidden">
      <div className="hero-mobile-panel min-h-[245px] p-5 text-white">
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 text-[12px] font-black">
            <img src="/logo.png" alt="" className="h-7 w-7 rounded-full bg-white/12 p-1" />
            Pumpea
          </span>
          <span className="rounded-full bg-white px-3 py-2 text-[10px] font-black text-blue-700">Cotizar</span>
        </div>
        <h3 className="mt-8 max-w-[290px] font-heading text-[29px] font-black leading-[1.08]">
          Impulso digital claro, medible y listo para vender.
        </h3>
        <p className="mt-4 max-w-[300px] text-[14px] font-semibold leading-[1.6] text-white/86">
          Sitios, automatizaciones e integraciones con una ruta sencilla para tu equipo.
        </p>
        <div className="mt-7 grid grid-cols-1 gap-2 min-[360px]:grid-cols-3">
          {automationStats.map((item) => (
            <span key={item.label} className="rounded-2xl bg-white/14 px-3 py-3 backdrop-blur">
              <b className="block text-[16px] leading-none">{item.value}</b>
              <small className="mt-1 block text-[9px] font-bold leading-tight text-white/72">{item.label}</small>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {services.map((service) => (
          <div key={service.title} className="hero-mobile-service flex items-center gap-4 rounded-[20px] p-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <i className={`fa ${service.icon}`} />
            </span>
            <span>
              <span className="block font-heading text-[15px] font-black leading-tight text-blue-700">{service.title}</span>
              <span className="mt-1 block text-[12px] font-semibold leading-snug text-slate-500">{service.desc}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="hero-mobile-stat mt-4 flex items-center justify-between gap-4 rounded-[22px] p-4">
        <span>
          <span className="block text-[13px] font-black text-slate-700">Rendimiento general</span>
          <span className="mt-1 block text-[11px] font-semibold text-slate-500">vs. mes anterior</span>
        </span>
        <span className="flex items-center gap-2 text-[34px] font-black leading-none text-emerald-500">
          <i className="fa fa-arrow-up text-base" /> 48%
        </span>
      </div>
    </div>
  );
}

function BrowserMockup() {
  return (
    <>
    <MobileHeroVisual />
    <div className="hero-visual relative mx-auto hidden w-full max-w-[780px] aspect-[780/620] md:block lg:justify-self-end">
      <div className="absolute left-[14%] top-[2%] h-[67%] w-[66%] rounded-full border border-cyan-100/80" />
      <div className="absolute left-[21%] top-[8%] h-[55%] w-[54%] rounded-full border border-cyan-100/70" />
      <div className="absolute left-[8%] top-[20%] h-[52%] w-[83%] rounded-full bg-[radial-gradient(circle,_rgba(58,210,230,0.13),_transparent_68%)] blur-3xl" />

      <div className="texture-panel absolute left-[17%] top-[10%] h-[50.6%] w-[66.4%] rounded-[24px] px-[4.5%] py-[4.7%] text-white">
        <div className="mb-[8.5%] flex items-center justify-between font-bold">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="h-7 w-7 rounded-full bg-white/10 p-1" />
            <span className="text-[12px]">Pumpea</span>
          </div>
          <div className="hidden gap-5 text-[10px] md:flex">
            <span>Inicio</span>
            <span>Servicios</span>
            <span>Nosotros</span>
            <span>Contacto</span>
          </div>
          <span className="rounded-full bg-white px-4 py-2 text-[10px] font-black text-blue-700">Cotizar proyecto</span>
        </div>
        <h3 className="max-w-[68%] font-heading text-[clamp(24px,2.15vw,35px)] font-black leading-[1.06] tracking-[-0.035em]">
          Impulsamos marcas con tecnología, creatividad y datos.
        </h3>
        <p className="mt-[5%] max-w-[64%] text-[clamp(10px,.78vw,13px)] font-semibold leading-[1.55] text-white/88">
          Soluciones digitales a la medida para automatizar, conectar y escalar tu negocio.
        </p>
        <button className="mt-[5.5%] rounded-full bg-white px-5 py-3 text-[11px] font-black text-blue-700 shadow-xl">
          Hablemos de tu proyecto <i className="fa fa-arrow-right ml-2" />
        </button>
      </div>

      <div className="float-card absolute right-[1.5%] top-[18%] z-20 w-[27.5%] min-w-[176px] rounded-[22px] px-5 py-5">
        <p className="text-[15px] font-black leading-tight text-slate-700">Rendimiento general</p>
        <div className="mt-3 flex items-center gap-2 text-[42px] font-black leading-none text-emerald-500">
          <i className="fa fa-arrow-up text-lg" /> 48%
        </div>
        <p className="mt-1 text-[11px] font-semibold text-slate-500">vs. mes anterior</p>
        <svg viewBox="0 0 160 58" className="mt-2 h-[50px] w-full" aria-hidden>
          <polyline points="4,48 22,44 38,34 54,28 72,40 88,32 104,14 122,25 138,12 156,6" fill="none" stroke="#1358f3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="float-card absolute bottom-[18%] left-[12%] z-20 w-[31.5%] min-w-[230px] rounded-[24px] p-5">
        <p className="mb-4 font-heading text-[15px] font-black leading-tight text-slate-800">Automatizaciones activas</p>
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

      <PhoneMockup />

      <div className="absolute right-[0%] top-[50%] z-30 grid w-[26.5%] min-w-[214px] gap-3">
        {services.map((service) => (
          <div key={service.title} className="float-card flex items-center gap-4 rounded-[20px] p-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <i className={`fa ${service.icon} text-lg`} />
            </span>
            <span>
              <span className="block font-heading text-[16px] font-black leading-tight text-blue-700">{service.title}</span>
              <span className="mt-1 block text-[12px] font-semibold leading-snug text-slate-500">{service.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}


function HomeAboutSection() {
  return (
    <section id="nosotros" className="relative overflow-hidden pb-12 pt-4 md:pb-20 md:pt-6">
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,.95),transparent_34%),radial-gradient(circle_at_78%_24%,rgba(190,229,255,.28),transparent_36%),linear-gradient(180deg,#f8fbff_0%,#f4f8fd_58%,rgba(248,251,255,0)_100%)]" />
      <div className="pumpea-container">
        <div className="grid items-center gap-6 rounded-[28px] border border-white/75 bg-white/62 px-5 py-7 shadow-[0_34px_100px_rgba(19,88,243,.08)] backdrop-blur-[18px] sm:rounded-[36px] md:gap-8 md:px-8 md:py-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:rounded-[44px] lg:px-12 lg:py-12">
          <div className="relative z-10 max-w-[540px]">
            <span className="section-kicker">Nosotros</span>
            <h2 className="mt-5 font-heading text-[34px] font-black leading-[1.06] tracking-[-0.05em] text-[#2d426d] sm:text-[42px] md:mt-6 md:text-[58px]">
              <span className="block text-[#2b7cff]">Quiénes somos</span>
              <span className="block">y por qué lo hacemos.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base font-medium leading-[1.72] text-slate-600 sm:text-[18px] md:mt-7 md:space-y-5">
              <p className="font-semibold text-[#334b78]">
                En PUMPEA creemos que los negocios pueden ser más eficientes sin perder su esencia.
              </p>
              <p>
                Somos una empresa 100% mexicana fundada por Andros y Alex, apasionados por el desarrollo digital con propósito.
              </p>
              <p className="font-semibold text-[#57a0ff]">
                Creamos soluciones tecnológicas reales para empresas que quieren crecer con orden, automatización y equilibrio.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="cta-button justify-center rounded-[20px] px-7 py-4 text-[16px]">
                Conoce al equipo <i className="fa fa-arrow-right" />
              </Link>
              <Link href="/agenda" className="button justify-center rounded-[20px] px-7 py-4 text-[16px]">
                Agenda una asesoría
              </Link>
            </div>
          </div>

          <AboutHero3D />
        </div>

        <div className="mt-6 overflow-hidden rounded-[24px] border border-white/75 bg-white/72 shadow-[0_28px_80px_rgba(19,88,243,.07)] backdrop-blur-[18px] md:mt-8 md:rounded-[34px]">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {aboutStats.map((stat, index) => (
              <div key={stat.value} className="relative flex items-center gap-4 px-5 py-6 sm:gap-5 sm:px-7 sm:py-7">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-[22px] text-blue-500 shadow-[0_12px_32px_rgba(19,88,243,.07)]">
                  <i className={`fa ${stat.icon}`} />
                </span>
                <span>
                  <span className="block font-heading text-[30px] font-black tracking-[-0.04em] text-[#2a74f5]">{stat.value}</span>
                  <span className="block text-[15px] font-bold leading-snug text-[#40557e]">{stat.label}</span>
                </span>
                {index < aboutStats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-[58%] w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(55,109,219,.14),transparent)] xl:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[26px] border border-white/75 bg-white/68 px-5 py-7 shadow-[0_30px_90px_rgba(19,88,243,.075)] backdrop-blur-[18px] md:mt-8 md:rounded-[40px] md:px-8 md:py-10 lg:px-12">
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]">
            <div>
              <span className="section-kicker">Los fundadores</span>
              <h3 className="mt-5 font-heading text-3xl font-black tracking-[-0.04em] text-[#101a39] md:text-5xl">
                Personas detrás de cada solución.
              </h3>
            </div>
            <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              Nos involucramos como socios estratégicos, no solo como proveedores. Tu crecimiento es también nuestro.
            </p>
          </div>
          <div className="mt-9">
            <FounderCards />
          </div>
        </div>
      </div>
    </section>
  );
}

function AlliancePanel() {
  return (
    <section className="pumpea-container relative pb-14 md:pb-20">
      <div className="glass-card-strong p-5 sm:p-6 md:p-10">
        <div className="grid items-center gap-6 lg:grid-cols-[220px_1fr] lg:gap-8">
          <div>
            <h2 className="font-heading text-[24px] font-black leading-tight text-[#162a59]">
              Aliados que ya confían en Pumpea
            </h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
              Marcas y organizaciones que están creciendo con nosotros.
            </p>
          </div>
          <SpriteLogoRail compact framed={false} className="w-full" />
        </div>

        <div className="mt-6 grid overflow-hidden rounded-[20px] border border-blue-100 bg-white/66 md:mt-8 md:grid-cols-3 md:rounded-[22px]">
          {metrics.map((metric, index) => (
            <div key={metric.value} className="flex items-center gap-4 p-5 sm:gap-5 sm:p-6 md:px-8">
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

function SoftSolutionCard({ item, index }) {
  const toneClasses = {
    blue: "from-[#eef8ff] to-white text-[#155fff] border-blue-100/90",
    green: "from-[#effced] to-white text-[#51c94f] border-green-100/90",
    violet: "from-[#f6efff] to-white text-[#9c73ff] border-violet-100/90",
    orange: "from-[#fff3ef] to-white text-[#ff9943] border-orange-100/90",
  };

  const checkClasses = {
    blue: "bg-blue-100 text-blue-500",
    green: "bg-green-100 text-green-500",
    violet: "bg-violet-100 text-violet-500",
    orange: "bg-orange-100 text-orange-500",
  };

  const titleParts = item.title.split(" ");
  const titleMid = Math.ceil(titleParts.length / 2);

  return (
    <article className={`scroll-reveal service-card-ref group bg-gradient-to-br ${toneClasses[item.tone]}`} style={{ transitionDelay: `${index * 75}ms` }}>
      <span className="service-icon-ref">
        <i className={`fa ${item.icon}`} />
      </span>
      <h3 className="mt-6 font-heading text-[22px] font-black leading-[1.08] tracking-[-0.035em] text-[#0d4ee7] sm:mt-8 sm:text-[24px]">
        <span className="block">{titleParts.slice(0, titleMid).join(" ")}</span>
        <span className="block">{titleParts.slice(titleMid).join(" ")}</span>
      </h3>
      <p className="mx-auto mt-5 max-w-[260px] text-center text-[14px] font-medium leading-[1.72] text-slate-600 sm:mt-7 sm:max-w-[230px]">
        {item.desc}
      </p>
      <ul className="mt-6 space-y-3 text-left text-[13px] font-semibold text-slate-500 sm:mt-8">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-3">
            <span className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${checkClasses[item.tone]}`}>
              <i className="fa fa-check text-[10px]" />
            </span>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

function CubesIllustration() {
  return <EcosystemCubesCanvas />;
}


function WorkTimeline() {
  return (
    <section className="section-transition workflow-card-ref mt-10 px-4 py-9 sm:mt-14 sm:px-8 sm:py-12 md:px-12 md:py-14">
      <div className="text-center">
        <span className="section-kicker !px-4 !py-1.5 !text-[11px] !tracking-[0.24em]">CÓMO TRABAJAMOS</span>
        <h3 className="mt-5 font-heading text-[30px] font-black tracking-[-0.045em] text-[#142653] sm:mt-6 sm:text-[36px] lg:text-[clamp(30px,2.25vw,44px)]">
          Agenda tu cita <span className="text-gradient-main">sin costo</span>
        </h3>
      </div>

      <div className="workflow-track-ref stagger-reveal mt-9 grid gap-7 sm:grid-cols-2 md:mt-12 lg:grid-cols-5 lg:gap-4">
        {workSteps.map((step) => (
          <article key={step.number} className="relative text-center">
            <span className="workflow-icon-ref"><i className={`fa ${step.icon}`} /></span>
            <span className="workflow-number-ref">{step.number}</span>
            <h4 className="mt-5 font-heading text-[17px] font-black leading-tight text-[#0c4be6]">{step.title}</h4>
            <p className="mx-auto mt-3 max-w-[210px] text-[13px] font-medium leading-[1.55] text-slate-500 lg:max-w-[170px]">{step.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-11 sm:flex-row sm:gap-4">
        <Link href="/agenda" className="cta-button min-h-[58px] w-full rounded-full sm:w-auto sm:min-w-[280px]"><i className="fa fa-calendar-days" /> Agenda tu cita ahora</Link>
        <a href="https://wa.me/528113520984" target="_blank" rel="noopener noreferrer" className="button min-h-[58px] w-full rounded-full sm:w-auto sm:min-w-[220px]"><i className="fab fa-whatsapp text-lg" /> WhatsApp</a>
      </div>
    </section>
  );
}

function ProductSpotlight() {
  return (
    <section className="section-transition product-card-ref mt-10 px-4 py-9 sm:mt-14 sm:px-8 sm:py-10 md:px-12 md:py-12">
      <div className="text-center">
        <span className="section-kicker !px-4 !py-1.5 !text-[11px] !tracking-[0.22em]">PRODUCTO DESTACADO</span>
        <h3 className="mx-auto mt-5 max-w-[1000px] font-heading text-[27px] font-black leading-tight tracking-[-0.035em] text-[#142653] sm:mt-6 sm:text-[32px] lg:text-[clamp(27px,2vw,38px)]">
          Soluciones y productos que <span className="text-gradient-main">impulsan tu evento y tu marca</span>
        </h3>
      </div>

      <div className="mx-auto mt-7 grid max-w-[1160px] overflow-hidden rounded-[22px] border border-blue-100 bg-white/72 shadow-[0_24px_80px_rgba(19,88,243,.09)] backdrop-blur-xl sm:mt-9 sm:rounded-[28px] lg:grid-cols-[1fr_0.78fr]">
        <div className="p-5 text-center sm:p-7 md:p-10">
          <h4 className="font-heading text-[22px] font-black text-[#0d61f2]">Click&amp;Celebrate</h4>
          <p className="mx-auto mt-5 max-w-[640px] text-[14px] font-medium leading-[1.8] text-slate-600">
            Eleva tus eventos con tecnología: invitaciones digitales, galerías compartidas, RSVP ágil y streaming, todo en una solución hecha por PUMPEA.
          </p>
          <p className="mx-auto mt-4 max-w-[620px] text-[14px] font-medium leading-[1.8] text-slate-600">
            Convierte cada momento en una experiencia memorable, desde el primer contacto hasta la gestión de recuerdos y fotos en tiempo real.
          </p>
          <ul className="mx-auto mt-7 max-w-[600px] space-y-2.5 text-left text-[13px] font-semibold leading-relaxed text-slate-500">
            {eventFeatures.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500"><i className="fa fa-check text-[10px]" /></span>
                {feature}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-7 max-w-[620px] text-[13px] font-medium leading-[1.8] text-slate-500">
            ¿Necesitas tecnología para otro reto? Contamos con soluciones a la medida para empresas, marcas y eventos.
          </p>
          <Link href="/click-celebrate" className="cta-button mt-8 w-full rounded-full px-8 py-3.5 text-sm sm:w-auto sm:min-w-[270px]">Descubre Click&amp;Celebrate</Link>
        </div>

        <div className="event-phone-stage relative min-h-[390px] overflow-hidden bg-[radial-gradient(circle_at_60%_50%,rgba(174,120,255,.22),transparent_28%),radial-gradient(circle_at_45%_82%,rgba(36,209,246,.18),transparent_32%),linear-gradient(135deg,rgba(239,248,255,.62),rgba(255,255,255,.82))] sm:min-h-[460px]">
          <div className="event-chip-ref left-[7%] top-[22%]"><i className="fa fa-users text-emerald-500" /><span><b>RSVP</b><small>Confirmado</small></span></div>
          <div className="event-chip-ref right-[7%] top-[36%]"><i className="fa fa-image text-blue-500" /><span><b>Galería</b><small>128 fotos</small></span></div>
          <div className="event-chip-ref bottom-[24%] right-[8%]"><i className="fa fa-video text-rose-500" /><span><b>Streaming</b><small>En vivo</small></span></div>
          <div className="event-phone-ref">
            <div className="event-notch-ref" />
            <div className="event-phone-screen-ref">
              <div className="text-[13px] font-black tracking-[0.16em] text-white/80">M&amp;R</div>
              <div className="mt-10 font-serif text-[32px] italic leading-[1.08] text-white">Mariana<br />&amp;<br />Roberto</div>
              <div className="mt-6 text-[9px] font-black tracking-[0.18em] text-white/78">SÁBADO 24 DE AGOSTO, 2025</div>
              <div className="mt-7 grid grid-cols-3 gap-2 text-white">
                {[["120", "Días"], ["14", "Horas"], ["30", "Min"]].map(([value, label]) => (
                  <span key={label} className="rounded-xl bg-white/12 px-2 py-2 backdrop-blur"><b className="block text-[16px]">{value}</b><small className="text-[8px] text-white/68">{label}</small></span>
                ))}
              </div>
              <button className="mt-6 rounded-full bg-white/14 px-5 py-2 text-[10px] font-black text-white backdrop-blur">Confirmar asistencia</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsShowcase() {
  return (
    <section id="soluciones" className="section-transition relative overflow-hidden py-12 md:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_50%_0%,rgba(199,234,255,.42),transparent_36%),linear-gradient(180deg,rgba(238,248,255,.76),rgba(255,255,255,0))]" />
      <div className="pumpea-container">
        <div className="mx-auto max-w-[840px] text-center scroll-reveal">
          <span className="section-kicker !px-5 !py-2 !text-[12px] !tracking-[0.20em]">SOLUCIONES</span>
          <h2 className="mt-5 font-heading text-[36px] font-black tracking-[-0.055em] text-[#182a56] sm:mt-6 sm:text-[42px] lg:text-[clamp(40px,3vw,58px)]">
            ¿Qué <span className="text-gradient-main">hacemos?</span>
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-slate-600 sm:mt-5 sm:text-[18px] lg:text-[clamp(17px,1.06vw,20px)]">
            Tecnología, estrategia y creatividad para <b className="font-black text-blue-600">hacer crecer tu negocio.</b>
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-7 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {solutionCards.map((item, index) => <SoftSolutionCard key={item.title} item={item} index={index} />)}
        </div>

        <div className="section-transition ecosystem-banner-ref mt-10 grid min-h-[300px] items-center gap-4 overflow-hidden px-5 py-7 text-center sm:mt-12 sm:gap-8 sm:px-6 sm:py-8 md:grid-cols-[0.9fr_1.45fr] md:px-10 md:text-left lg:px-16">
          <CubesIllustration />
          <div className="relative z-10 scroll-reveal">
            <h3 className="mx-auto max-w-[680px] font-heading text-[29px] font-black leading-[1.1] tracking-[-0.04em] text-[#162a59] sm:text-[34px] md:mx-0 lg:text-[clamp(30px,2.35vw,46px)]">
              Todo lo que tu negocio necesita,
              <span className="block text-gradient-main">en un solo lugar.</span>
            </h3>
            <p className="mx-auto mt-5 max-w-[650px] text-[15px] font-medium leading-[1.75] text-slate-600 sm:text-[16px] md:mx-0 md:mt-6">
              Un ecosistema digital completo para atraer, convertir y fidelizar clientes.<br className="hidden md:block" />
              Sin complicaciones. Sin rodeos. <b className="text-slate-800">Solo resultados.</b>
            </p>
          </div>
        </div>

        <WorkTimeline />
        <ProductSpotlight />
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden pb-10 pt-8 sm:pt-12 md:pb-16 md:pt-[72px] lg:pb-12 xl:pb-16">
        <div className="hero-orb one animate-pulse-glow" />
        <div className="hero-orb two animate-pulse-glow" />
        <div className="pumpea-container grid items-center gap-8 lg:grid-cols-[minmax(540px,0.92fr)_minmax(560px,1.08fr)] lg:gap-10 xl:gap-12">
          <div className="relative z-10 pt-1 text-center lg:text-left">
            <div className="badge-pill px-4 py-3 text-[14px] font-bold sm:px-6 sm:text-[15px]">
              <span className="text-xl">🇲🇽</span>
              <span>Transformación digital <b className="text-blue-700">hecha en México</b></span>
            </div>

            <h1 className="mx-auto mt-7 max-w-[650px] font-heading text-[40px] font-black leading-[1.06] tracking-[-0.055em] text-[#090d1d] sm:text-[48px] lg:mx-0 lg:mt-8 lg:text-[clamp(48px,3.65vw,68px)]">
              <span className="block">Tu negocio necesita</span>
              <span className="block">más que presencia digital:</span>
              <span className="mt-2 block bg-gradient-to-r from-[#1358f3] via-[#1f7fff] to-[#20cfe8] bg-clip-text text-transparent">necesita impulso</span>
              <span className="block bg-gradient-to-r from-[#1358f3] via-[#1f7fff] to-[#20cfe8] bg-clip-text text-transparent">que convierta.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[650px] text-base font-medium leading-[1.7] text-slate-600 sm:text-[18px] lg:mx-0 lg:mt-6 lg:text-[clamp(17px,1.06vw,20px)]">
              Diseñamos sitios web, automatizamos procesos, integramos herramientas y desarrollamos productos digitales que conectan tecnología con resultados reales para hacer crecer tu marca.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Link href="/agenda" className="cta-button min-h-[58px] min-w-[284px] justify-center rounded-[20px] px-7 py-4 text-[16px]">
                <i className="fa fa-calendar" /> Agenda una asesoría gratis <i className="fa fa-arrow-right" />
              </Link>
              <Link href="#soluciones" className="button min-h-[58px] min-w-[210px] justify-center rounded-[20px] px-7 py-4 text-[16px]">
                <i className="fa fa-play" /> Ver soluciones
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-semibold text-slate-600 lg:justify-start lg:gap-x-7">
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

      <HomeAboutSection />

      <AlliancePanel />

      <SolutionsShowcase />

      <section className="pumpea-container pb-24 pt-10">
        <div className="glass-card-strong grid items-center gap-6 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:gap-8 md:p-10">
          <div>
            <span className="section-kicker">Siguiente paso</span>
            <h2 className="mt-5 font-heading text-[29px] font-black tracking-tight text-[#101a39] sm:text-3xl md:text-5xl">
              Hagamos que tu presencia digital empiece a convertir.
            </h2>
            <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              Agenda una asesoría gratuita y te ayudamos a mapear el sitio, la automatización o el producto digital que más impacto puede generar ahora.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 md:min-w-[280px]">
            <Link href="/agenda" className="cta-button"><i className="fa fa-calendar" /> Agenda tu cita</Link>
            <Link href="/pricing" className="button"><i className="fa fa-tags" /> Ver precios</Link>
          </div>
        </div>
      </section>

      <WhatsAppCta text="Cotiza por WhatsApp" className="bottom-4 right-4 px-4 py-3 text-sm xl:bottom-6 xl:right-6 xl:px-5 xl:py-3.5" />
    </div>
  );
}
