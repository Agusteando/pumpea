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
  { icon: "fa-shield-halved", value: "+50", label: "Proyectos exitosos" },
  { icon: "fa-users", value: "+20", label: "Clientes satisfechos" },
  { icon: "fa-star", value: "100%", label: "Comprometidos contigo" },
  { icon: "fa-bolt", value: "Resultados", label: "que se sienten" },
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

const testimonials = [
  {
    quote: "PUMPEA entendió perfectamente nuestras necesidades y las transformó en resultados medibles. Su acompañamiento ha sido clave para nuestro crecimiento digital.",
    name: "Andros Mendieta",
    role: "Cofundador / Estrategia Digital",
    avatar: "/andros.png",
  },
  {
    quote: "Profesionales, creativos y siempre dispuestos a ir un paso adelante. Una forma de trabajar clara, cercana y orientada a resultados.",
    name: "Alex Jurado",
    role: "Cofundador / Arquitectura de Sistemas",
    avatar: "/alex.png",
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

      <section className="pumpea-container pt-16 md:pt-20">
        <div className="mx-auto max-w-[820px] text-center scroll-reveal">
          <SectionKicker>CONFIANZA</SectionKicker>
          <h1 className="mt-6 font-heading text-[clamp(42px,3.2vw,64px)] font-black leading-[1.08] tracking-[-0.055em] text-[#182a56]">
            Aliados y clientes
            <span className="block text-gradient-main">que creen en lo que hacemos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[750px] text-[clamp(17px,1.08vw,20px)] font-medium leading-[1.75] text-slate-600">
            Trabajamos con empresas y organizaciones que comparten nuestra visión: usar la tecnología y la creatividad para generar impacto real.
          </p>
        </div>

        <div className="mx-auto mt-11 grid max-w-[1080px] overflow-hidden rounded-[32px] border border-blue-100/85 bg-white/74 shadow-[0_24px_82px_rgba(19,88,243,.09)] backdrop-blur-[22px] md:grid-cols-2 xl:grid-cols-4">
          {trustStats.map((stat, index) => (
            <div key={stat.value + stat.label} className="relative flex items-center gap-5 px-7 py-7 md:px-8">
              <span className="inline-flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-[24px] text-blue-500 shadow-[0_16px_36px_rgba(19,88,243,.10)]">
                <i className={`fa ${stat.icon}`} />
              </span>
              <span>
                <span className="block font-heading text-[31px] font-black leading-none tracking-[-0.04em] text-[#2277ff]">{stat.value}</span>
                <span className="mt-2 block max-w-[130px] text-[15px] font-bold leading-[1.35] text-[#314a78]">{stat.label}</span>
              </span>
              {index < trustStats.length - 1 && <span className="absolute right-0 top-1/2 hidden h-[52%] w-px -translate-y-1/2 bg-blue-100 xl:block" />}
            </div>
          ))}
        </div>
      </section>

      <section className="pumpea-container mt-10">
        <div className="rounded-[34px] border border-blue-100/85 bg-white/78 px-6 py-10 shadow-[0_28px_90px_rgba(19,88,243,.085)] backdrop-blur-[22px] md:px-10 lg:px-14">
          <div className="flex items-center gap-8">
            <span className="hidden h-px flex-1 bg-blue-100 md:block" />
            <h2 className="text-center font-heading text-[clamp(24px,1.65vw,32px)] font-black tracking-[-0.035em] text-[#182a56]">
              Empresas que han confiado en nosotros
            </h2>
            <span className="hidden h-px flex-1 bg-blue-100 md:block" />
          </div>

          <div className="mt-9 grid grid-cols-2 items-center gap-x-8 gap-y-9 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {aliados.length === 0 && <p className="col-span-full text-center font-bold text-slate-400">Próximamente…</p>}
            {aliados.map((src, index) => (
              <div key={src} className="flex min-h-[92px] items-center justify-center rounded-2xl bg-white/40 px-3 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_18px_42px_rgba(19,88,243,.09)]" title={`Aliado ${index + 1}`}>
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

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {platformStack.map((platform) => (
              <article key={platform.name} className="group rounded-[24px] border border-blue-100/90 bg-white/80 p-6 shadow-[0_18px_52px_rgba(19,88,243,.07)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_72px_rgba(19,88,243,.12)]">
                <div className="flex items-center gap-5">
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
        <div className="relative overflow-hidden rounded-[34px] border border-blue-100/85 bg-white/72 px-5 py-10 shadow-[0_28px_90px_rgba(19,88,243,.08)] backdrop-blur-[22px] md:px-10 lg:px-14">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_50%,rgba(147,124,255,.12),transparent_32%),radial-gradient(circle_at_28%_25%,rgba(117,210,255,.16),transparent_32%)]" />
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.5fr]">
            <div className="scroll-reveal">
              <SectionKicker>LO QUE DICEN</SectionKicker>
              <h2 className="mt-6 font-heading text-[clamp(30px,2.1vw,42px)] font-black leading-[1.16] tracking-[-0.045em] text-[#182a56]">
                Nuestros clientes,
                <span className="block text-gradient-main">nuestro mejor respaldo</span>
              </h2>
              <p className="mt-6 max-w-[360px] text-[17px] font-medium leading-[1.75] text-slate-600">
                Cada proyecto es una relación a largo plazo basada en confianza, resultados y comunicación.
              </p>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 font-heading text-[16px] font-black text-blue-600 hover:text-blue-700">
                Ver más testimonios <i className="fa fa-arrow-right text-sm" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((item, index) => (
                <article key={item.name} className={`rounded-[28px] border border-blue-100 bg-white/82 p-8 text-center shadow-[0_22px_68px_rgba(19,88,243,.08)] backdrop-blur-xl ${index === 1 ? "md:mt-5" : ""}`}>
                  <i className="fa fa-quote-left text-[34px] text-blue-500/70" />
                  <p className="mx-auto mt-7 max-w-[360px] text-[15px] font-medium leading-[1.8] text-slate-600">{item.quote}</p>
                  <div className="mt-8 flex items-center justify-center gap-4 text-left">
                    <img src={item.avatar} alt={item.name} className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-[0_12px_28px_rgba(19,88,243,.14)]" loading="lazy" decoding="async" />
                    <span>
                      <span className="block font-heading text-[17px] font-black text-blue-600">{item.name}</span>
                      <span className="mt-1 block text-[11px] font-black text-[#203864]">{item.role}</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pumpea-container mt-10">
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-7 shadow-[0_28px_80px_rgba(19,88,243,.22)] md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
            <span className="inline-flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white/92 text-[36px] text-blue-600 shadow-[0_22px_52px_rgba(7,33,90,.18)]">
              <i className="fa fa-calendar-check" />
            </span>
            <div>
              <h2 className="font-heading text-[clamp(28px,2vw,38px)] font-black tracking-[-0.045em] text-white">¿Listo para impulsar tu marca?</h2>
              <p className="mt-3 max-w-[620px] text-[17px] font-medium leading-[1.7] text-white/90">Hablemos de tu proyecto y descubramos juntos todo lo que podemos lograr.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
              <Link href="/agenda" className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-white px-7 font-heading text-[15px] font-black text-blue-700 shadow-[0_18px_38px_rgba(7,33,90,.18)]">
                <i className="fa fa-calendar-days" /> Agenda tu cita ahora
              </Link>
              <a href="https://wa.me/528113520984" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/40 px-7 font-heading text-[15px] font-black text-white backdrop-blur-xl transition hover:bg-white/10">
                <i className="fab fa-whatsapp" /> Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
