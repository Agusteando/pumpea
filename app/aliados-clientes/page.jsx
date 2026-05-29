import path from "path";
import fs from "fs";
import Link from "next/link";

export const metadata = {
  title: "Aliados y clientes | PUMPEA",
  description: "Empresas, clientes y herramientas reales que forman parte del ecosistema operativo de PUMPEA.",
};

function getAliadosImages() {
  const dir = path.join(process.cwd(), "public", "aliados");
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/aliados/${file}`);
  } catch {
    return [];
  }
}

const trustStats = [
  { icon: "fa-handshake", value: "8", label: "Aliados visibles" },
  { icon: "fa-layer-group", value: "12+", label: "Proyectos acompañados" },
  { icon: "fa-arrows-rotate", value: "6", label: "Flujos automatizados" },
  { icon: "fa-clock", value: "24-48 h", label: "Respuesta inicial" },
];

const platformStack = [
  {
    name: "Google Workspace",
    eyebrow: "Operación y colaboración",
    desc: "Correo, documentos, reuniones y archivos compartidos para operar con orden.",
    icon: "workspace",
  },
  {
    name: "GitHub",
    eyebrow: "Código y control de cambios",
    desc: "Repositorios, versiones, revisión técnica y trazabilidad del desarrollo.",
    icon: "github",
  },
  {
    name: "Vercel",
    eyebrow: "Deploy y performance",
    desc: "Publicación, previews y entrega rápida de experiencias web modernas.",
    icon: "vercel",
  },
];

const relationshipPrinciples = [
  {
    icon: "fa-magnifying-glass-chart",
    title: "Diagnóstico honesto",
    desc: "Antes de vender una solución, ubicamos qué problema conviene resolver primero y qué puede esperar.",
  },
  {
    icon: "fa-list-check",
    title: "Alcance claro",
    desc: "Trabajamos por fases, con entregables entendibles y decisiones documentadas para evitar sorpresas.",
  },
  {
    icon: "fa-comments",
    title: "Acompañamiento cercano",
    desc: "El trato es directo con el equipo fundador para mantener contexto, velocidad y responsabilidad.",
  },
];

function SectionKicker({ children }) {
  return <span className="section-kicker !px-5 !py-2 !text-[12px] !tracking-[0.24em]">{children}</span>;
}

function WorkspaceLogo() {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-[13px] bg-white shadow-[0_10px_24px_rgba(19,88,243,.12)]">
      <span className="absolute left-[8px] top-[8px] h-[10px] w-[10px] rounded-full bg-[#4285f4]" />
      <span className="absolute right-[8px] top-[8px] h-[10px] w-[10px] rounded-full bg-[#34a853]" />
      <span className="absolute bottom-[8px] left-[8px] h-[10px] w-[10px] rounded-full bg-[#fbbc05]" />
      <span className="absolute bottom-[8px] right-[8px] h-[10px] w-[10px] rounded-full bg-[#ea4335]" />
    </span>
  );
}

function PlatformIcon({ type }) {
  if (type === "github") {
    return <i className="fab fa-github text-[38px] text-[#111827]" />;
  }
  if (type === "vercel") {
    return <span className="inline-block h-0 w-0 border-x-[21px] border-b-[36px] border-x-transparent border-b-[#111827]" aria-hidden />;
  }
  return <WorkspaceLogo />;
}

export default function AliadosClientesPage() {
  const aliados = getAliadosImages();

  return (
    <div className="relative overflow-hidden pb-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_50%_0%,rgba(205,235,255,.54),transparent_40%),linear-gradient(180deg,#f6fbff_0%,#f9fcff_62%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute left-0 top-[260px] -z-10 h-[520px] w-[38vw] bg-[radial-gradient(circle,rgba(120,200,255,.15),transparent_64%)]" />
      <div className="pointer-events-none absolute right-0 top-[260px] -z-10 h-[540px] w-[40vw] bg-[radial-gradient(circle,rgba(150,218,255,.15),transparent_66%)]" />

      <section className="pumpea-container pt-10 md:pt-20">
        <div className="mx-auto max-w-[820px] text-center scroll-reveal">
          <SectionKicker>CONFIANZA</SectionKicker>
          <h1 className="mt-5 font-heading text-[36px] font-black leading-[1.1] tracking-[-0.055em] text-[#182a56] sm:mt-6 sm:text-[44px] lg:text-[clamp(42px,3.2vw,64px)]">
            Aliados y clientes
            <span className="block text-gradient-main">que creen en lo que hacemos</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[750px] text-base font-medium leading-[1.75] text-slate-600 sm:mt-6 sm:text-[18px] lg:text-[clamp(17px,1.08vw,20px)]">
            Trabajamos con empresas y organizaciones que comparten nuestra visión: usar la tecnología y la creatividad para generar impacto real.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1080px] overflow-hidden rounded-[24px] border border-blue-100/85 bg-white/74 shadow-[0_24px_82px_rgba(19,88,243,.09)] backdrop-blur-[22px] sm:mt-11 sm:rounded-[32px] md:grid-cols-2 xl:grid-cols-4">
          {trustStats.map((stat, index) => (
            <div key={stat.value + stat.label} className="relative flex items-center gap-3 px-4 py-6 sm:gap-5 sm:px-7 sm:py-7 md:px-8">
              <span className="inline-flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-[22px] text-blue-500 shadow-[0_16px_36px_rgba(19,88,243,.10)] sm:h-[66px] sm:w-[66px] sm:text-[24px]">
                <i className={`fa ${stat.icon}`} />
              </span>
              <span>
                <span className="block font-heading text-[28px] font-black leading-none tracking-[-0.04em] text-[#2277ff] sm:text-[31px]">{stat.value}</span>
                <span className="mt-2 block max-w-[130px] text-[14px] font-bold leading-[1.35] text-[#314a78] sm:text-[15px]">{stat.label}</span>
              </span>
              {index < trustStats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-[52%] w-px -translate-y-1/2 bg-blue-100 xl:block" />}
            </div>
          ))}
        </div>
      </section>

      <section className="pumpea-container mt-10">
        <div className="rounded-[24px] border border-blue-100/85 bg-white/78 px-5 py-8 shadow-[0_28px_90px_rgba(19,88,243,.085)] backdrop-blur-[22px] sm:rounded-[34px] sm:px-6 sm:py-10 md:px-10 lg:px-14">
          <div className="flex items-center gap-8">
            <span className="hidden h-px flex-1 bg-blue-100 md:block" />
            <h2 className="text-center font-heading text-[clamp(24px,1.65vw,32px)] font-black tracking-[-0.035em] text-[#182a56]">
              Empresas que han confiado en nosotros
            </h2>
            <span className="hidden h-px flex-1 bg-blue-100 md:block" />
          </div>

          <div className="mt-7 grid grid-cols-2 items-center gap-x-4 gap-y-6 sm:mt-9 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-4 xl:grid-cols-8">
            {aliados.length === 0 && <p className="col-span-full text-center font-bold text-slate-400">Próximamente…</p>}
            {aliados.map((src, index) => (
              <div key={src} className="flex min-h-[84px] items-center justify-center rounded-2xl bg-white/40 px-3 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_18px_42px_rgba(19,88,243,.09)] sm:min-h-[92px]" title={`Aliado ${index + 1}`}>
                <img src={src} alt={`Aliado ${index + 1}`} className="max-h-[72px] max-w-[130px] object-contain" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>

          <div className="mt-14 flex items-center gap-8">
            <span className="hidden h-px flex-1 bg-blue-100 md:block" />
            <h2 className="text-center font-heading text-[clamp(24px,1.65vw,32px)] font-black tracking-[-0.035em] text-[#182a56]">
              Herramientas probadas que usamos
            </h2>
            <span className="hidden h-px flex-1 bg-blue-100 md:block" />
          </div>

          <div className="mt-7 grid gap-5 sm:mt-9 sm:gap-6 md:grid-cols-3">
            {platformStack.map((platform) => (
              <article key={platform.name} className="group rounded-[22px] border border-blue-100/90 bg-white/80 p-5 shadow-[0_18px_52px_rgba(19,88,243,.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_72px_rgba(19,88,243,.12)] sm:rounded-[24px] sm:p-6">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <span className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[22px] border border-blue-100 bg-white shadow-[0_16px_38px_rgba(19,88,243,.08)]">
                    <PlatformIcon type={platform.icon} />
                  </span>
                  <span>
                    <span className="block text-[12px] font-black uppercase tracking-[0.18em] text-blue-500">{platform.eyebrow}</span>
                    <span className="mt-2 block font-heading text-[22px] font-black leading-tight text-[#172b59]">{platform.name}</span>
                  </span>
                </div>
                <p className="mt-5 text-[15px] font-medium leading-[1.72] text-slate-600">{platform.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pumpea-container mt-10">
        <div className="rounded-[24px] border border-blue-100/85 bg-white/76 px-5 py-8 shadow-[0_28px_90px_rgba(19,88,243,.08)] backdrop-blur-[22px] sm:rounded-[34px] sm:py-10 md:px-10 lg:px-14">
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.5fr]">
            <div className="scroll-reveal">
              <SectionKicker>RELACIÓN</SectionKicker>
              <h2 className="mt-6 font-heading text-[clamp(30px,2.1vw,42px)] font-black leading-[1.16] tracking-[-0.045em] text-[#182a56]">
                Cómo cuidamos
                <span className="block text-gradient-main">cada proyecto</span>
              </h2>
              <p className="mt-5 max-w-[390px] text-base font-medium leading-[1.75] text-slate-600 sm:mt-6 sm:text-[17px]">
                Preferimos promesas concretas: entender el contexto, definir prioridades y acompañar la implementación con comunicación clara.
              </p>
              <Link href="/agenda" className="mt-7 inline-flex items-center gap-2 font-heading text-[16px] font-black text-blue-600 hover:text-blue-700">
                Agendar diagnóstico <i className="fa fa-arrow-right text-sm" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {relationshipPrinciples.map((item) => (
                <article key={item.title} className="rounded-[22px] border border-blue-100 bg-white/82 p-5 shadow-[0_18px_56px_rgba(19,88,243,.07)] backdrop-blur-xl sm:rounded-[26px] sm:p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[20px] text-blue-600">
                    <i className={`fa ${item.icon}`} />
                  </span>
                  <h3 className="mt-5 font-heading text-[19px] font-black leading-tight text-[#172b59]">{item.title}</h3>
                  <p className="mt-3 text-[14px] font-medium leading-[1.7] text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pumpea-container mt-10">
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-7 shadow-[0_28px_80px_rgba(19,88,243,.22)] md:p-10">
          <div className="grid items-center gap-5 text-center md:grid-cols-[auto_1fr_auto] md:gap-6 md:text-left">
            <span className="mx-auto inline-flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white/92 text-[30px] text-blue-600 shadow-[0_22px_52px_rgba(7,33,90,.18)] md:mx-0 md:h-[96px] md:w-[96px] md:text-[36px]">
              <i className="fa fa-calendar-check" />
            </span>
            <div>
              <h2 className="font-heading text-[clamp(28px,2vw,38px)] font-black tracking-[-0.045em] text-white">¿Listo para impulsar tu marca?</h2>
              <p className="mx-auto mt-3 max-w-[620px] text-base font-medium leading-[1.7] text-white/90 md:mx-0 md:text-[17px]">Hablemos de tu proyecto y descubramos juntos todo lo que podemos lograr.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
              <Link href="/agenda" className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-white px-7 font-heading text-[15px] font-black text-blue-700 shadow-[0_18px_38px_rgba(7,33,90,.18)] sm:w-auto">
                <i className="fa fa-calendar-days" /> Agenda tu cita ahora
              </Link>
              <a href="https://wa.me/528113520984" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full border border-white/40 px-7 font-heading text-[15px] font-black text-white backdrop-blur-xl transition hover:bg-white/10 sm:w-auto">
                <i className="fab fa-whatsapp" /> Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
