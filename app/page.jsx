
import HeroGradientBg from "../components/HeroGradientBg";
import HeroHeadline from "../components/HeroHeadline";
import Typewriter from "../components/Typewriter";
import WhatsAppCta from "../components/WhatsAppCta";
import GlassPanel from "../components/GlassPanel";
import Link from "next/link";
import path from "path";
import fs from "fs";

const services = [
  {
    icon: "fa-globe",
    title: "Sitios Web de Impacto",
    desc: "Desarrollo de sitios web y e-commerce que venden y posicionan tu marca.",
    gradient: "from-cyan-300 via-blue-200 to-sky-400",
  },
  {
    icon: "fa-robot",
    title: "Automatización + Bots",
    desc: "Bots inteligentes para WhatsApp, flujos automatizados y atención 24/7.",
    gradient: "from-lime-200 via-emerald-200 to-green-400",
  },
  {
    icon: "fa-share-nodes",
    title: "Redes + Social Growth",
    desc: "Gestión profesional, diseño y campañas para crecer en redes sociales.",
    gradient: "from-purple-200 via-indigo-200 to-blue-300",
  },
  {
    icon: "fa-plug",
    title: "Integraciones & Sistemas",
    desc: "Plataformas y sistemas a la medida, integración de todo tu ecosistema digital.",
    gradient: "from-pink-200 via-yellow-100 to-rose-200",
  }
];

const steps = [
  {
    icon: "fa-calendar-check",
    title: "Agenda tu cita",
    desc: "Presencial o virtual. Escuchamos tu idea.",
  },
  {
    icon: "fa-clipboard-list",
    title: "Propuesta personalizada",
    desc: "Cotización clara y detallada (24-48h).",
  },
  {
    icon: "fa-file-signature",
    title: "Firma y confidencialidad",
    desc: "Contrato formal y protección de ideas.",
  },
  {
    icon: "fa-credit-card",
    title: "Pago inicial 40%",
    desc: "Arrancamos con enfoque y equipo listo.",
  },
  {
    icon: "fa-rocket",
    title: "Desarrollo + entrega",
    desc: "Fase Beta y Final. Capacitación y acompañamiento.",
  }
];

const founders = [
  {
    name: "Andros Mendieta",
    role: "Co-fundador & CEO / Estrategia Digital",
    image: "/andros.png",
    bio: (
      <>
        Arquitecto de software, fan de la automatización y la IA.<br />
        Dirige el desarrollo tech, la calidad de los proyectos y la innovación interna de PUMPEA.
      </>
    ),
    color: "from-[#F8F6FF] via-[#DED5FB] to-[#EBE9FF]",
    border: "border-[#a28cff]/40"
  },
  {
    name: "Alex Jurado",
    role: "Co-fundador & CTO / Arquitectura de Sistemas",
    image: "/alex.png",
    bio: (
      <>
        Ingeniero, mente visionaria y apasionado del diseño de productos digitales.<br />
        Lidera la visión de PUMPEA, la estrategia de crecimiento de clientes y las soluciones integrales.
      </>
    ),
    color: "from-[#F0F7FF] via-[#CAE7FF] to-[#E8F8FF]",
    border: "border-primary/40"
  }
];

function getAliadosImages() {
  const dir = path.join(process.cwd(), "public", "aliados");
  let files = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) =>
        /\.(png|jpe?g|svg|webp)$/i.test(f)
      )
      .sort((a, b) => a.localeCompare(b));
  } catch (e) {
    return [];
  }
  return files.map((f) => `/aliados/${f}`);
}

export default function Home() {
  const aliados = getAliadosImages();

  return (
    <div>
      <HeroGradientBg>
        <div className="relative z-10 w-full flex flex-col items-center justify-center pt-8 pb-10 px-3">
          <img src="/logo-dark.png" alt="Pumpea Logo" className="w-36 h-36 md:w-48 md:h-48 drop-shadow-2xl mb-2" style={{
            filter: "drop-shadow(0 7px 36px #299dff45)"
          }}/>
          <HeroHeadline gradientClass="text-gradient-main drop-shadow-2xl">
            Tu negocio tiene todo para crecer…
          </HeroHeadline>
          <div className="bg-gradient-to-r from-white/80 via-sky-50/80 to-white/60 rounded-xl px-5 py-3 mb-2
              font-heading text-2xl md:text-3xl font-bold w-full max-w-2xl
              shadow shadow-sky-200/50"
          >
            <span className="text-gradient-main font-extrabold">Tu negocio solo necesita un buen impulso digital.</span>
          </div>
          <div className="mt-2 mb-8">
            <Typewriter
              words={[
                "En PUMPEA la tecnología trabaja contigo. Automatizamos, conectamos y lanzamos tu marca como se debe."
              ]}
              className="text-lg md:text-2xl font-semibold max-w-xl mx-auto text-neutral-700 text-center"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-xl">
            <Link href="/agenda" className="cta-button text-lg shadow-xl">
              Agenda tu cita gratis
            </Link>
            <Link href="/pricing" className="button text-lg bg-white/80 border-white/40 font-bold text-blue-700 hover:text-primary shadow">
              Ver Precios
            </Link>
            <Link href="/contact" className="button bg-white/90 text-primary border-primary hover:bg-blue-50 border font-semibold text-lg shadow">
              Solicita Cotización
            </Link>
          </div>
        </div>
      </HeroGradientBg>

      {/* NUESTRA ESENCIA */}
      <section id="nosotros" className="py-20 px-2 flex flex-col items-center bg-gradient-to-r from-blue-50/70 to-white/95 border-b border-blue-100">
        <GlassPanel className={`max-w-3xl w-full mx-auto`}>
          <h2 className="uppercase font-heading text-gradient-main tracking-widest text-center text-lg md:text-xl font-black mb-2">
            Nosotros / Quiénes Somos
          </h2>
          <p className="text-neutral-700 text-[1.15rem] md:text-xl font-medium mb-6 text-center">
            En <b>PUMPEA</b> creemos que los negocios pueden ser más eficientes sin perder su esencia.<br />
            Somos una empresa 100% mexicana fundada por Andros y Alex, apasionados por el desarrollo digital con propósito.
          </p>
          <div className="flex flex-col gap-4 text-[1.08rem] text-neutral-800/90">
            <p>
              Ofrecemos soluciones tecnológicas reales para empresas que quieren crecer con orden, automatización y equilibrio.
              Desde plataformas y sistemas a la medida, hasta páginas web que sí venden y <b>bots de WhatsApp</b> que responden por ti — diseñamos herramientas que trabajan <span className="text-primary font-bold">contigo</span> y <span className="text-primary font-bold">por tu negocio</span>.
            </p>
            <p>
              Creemos que el bienestar y la efectividad pueden ir de la mano. Que crecer no tiene que doler, ni ser un caos.
              Cada proyecto que hacemos lleva estrategia, creatividad y corazón, porque tu crecimiento también es el nuestro.
            </p>
            <div className="mt-1 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-sky-100/60 text-primary font-bold drop-shadow text-base">PUMPEA tu negocio. Dale potencia a tus ideas.</span>
            </div>
          </div>
          {/* Founders section */}
          <div className="mt-10 flex flex-col items-center gap-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full">
              {founders.map(f => (
                <div
                  key={f.name}
                  className={`rounded-2xl border ${f.border} bg-gradient-to-br ${f.color} shadow-md shadow-blue-200/20 p-6 flex flex-col items-center transition-all`}
                  style={{
                    boxShadow: "0 4px 32px #d9eafe1a, 0 1.5px 2.5px rgba(70,90,220,0.09)"
                  }}
                >
                  <div className="relative mb-3 flex items-center justify-center">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-xl transition-all hover:scale-105
                       bg-sky-50 drop-shadow-2xl"
                      loading="lazy"
                      style={{ boxShadow: "0 2px 16px #b5d6f33a", background: "linear-gradient(135deg,#d6f2fc,#f6ecff)" }}
                    />
                    <span className="absolute bottom-0 right-2 bg-gradient-to-tr from-primary to-accent-sky text-white font-bold text-xs px-2 py-[3px] rounded-xl shadow-xl border border-white/70">
                      FUNDADOR
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="font-heading text-lg md:text-xl text-primary font-black text-center">{f.name}</div>
                    <div className="text-sm md:text-base text-primary-dark font-semibold mb-1 text-center">{f.role}</div>
                    <div className="text-neutral-700/90 text-sm text-center leading-relaxed mt-1">{f.bio}</div>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-neutral-400 text-sm flex items-center gap-2 mt-1">
              <i className="fa fa-star text-accent-sky/80" /> Personas reales, experiencia real, pasión por crecer contigo.
            </span>
          </div>
        </GlassPanel>
      </section>

      {/* Qué hacemos */}
      <section className="py-20 px-2 bg-gradient-to-tr from-white via-sky-100 to-blue-50 border-b border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-heading font-extrabold mb-6 text-gradient-main drop-shadow">
            ¿Qué hacemos?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {services.map(s => (
              <div
                key={s.title}
                className={`
                  group flex flex-col items-center p-7 rounded-2xl shadow-xl hover:scale-105 transition
                  border border-blue-100 bg-gradient-to-br ${s.gradient}
                  from-30% via-white/85 to-white/70
                `}
                style={{ minHeight: 248, boxShadow: "0 4px 32px #eaf6ffb2" }}
              >
                <span className="rounded-full bg-white/80 p-4 mb-2 shadow">
                  <i className={`fa ${s.icon} text-3xl text-blue-700 group-hover:text-primary transition`}></i>
                </span>
                <h3 className="text-lg md:text-xl font-bold font-heading text-blue-700 mb-2">{s.title}</h3>
                <div className="text-accent/85 text-base text-center">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Agenda */}
      <section className="py-20 px-2 bg-gradient-to-br from-blue-50 via-sky-50 to-white/80 border-b border-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-heading font-extrabold mb-9 text-gradient-main drop-shadow">
            Agenda tu cita <span className="text-primary">sin costo</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-2 justify-center relative">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 min-w-[160px] flex flex-col items-center relative">
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-9 h-1 w-full -z-10">
                    <div className="h-full w-full bg-gradient-to-r from-blue-100 via-sky-200 to-cyan-100 rounded opacity-90"></div>
                  </div>
                )}
                <span
                  className="flex items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-blue-50 shadow p-4 border border-blue-200 mb-2"
                  style={{ boxShadow: "0 6px 22px #c4eaff33, 0 1.5px 3.5px #e2effa70" }}
                >
                  <i className={`fa ${step.icon} text-2xl text-gradient-main`}></i>
                </span>
                <span className="text-blue-700 font-heading font-bold mb-0.5 text-[1rem]">{step.title}</span>
                <span className="text-neutral-700/90 text-sm text-center">{step.desc}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-center mt-12 gap-3">
            <Link href="/agenda" className="cta-button text-lg shadow-xl">
              Agenda tu cita ahora
            </Link>
            <a
              href="https://wa.me/5217293062147?text=Hola%20Pumpea%2C%20quiero%20informes%20y%20cotización%20de%20tu%20servicio"
              className="button border-emerald-500 text-emerald-900 font-extrabold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-xl mr-1"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Soluciones y Productos PUMPEA */}
      <section className="mt-20 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-heading mb-5 text-center text-gradient-main drop-shadow">
          Soluciones y productos que impulsan tu evento y tu marca
        </h2>
        <div className="bg-gradient-to-br from-[#EFF6FF] via-white to-[#E6EBF8] rounded-xl p-7 mx-auto space-y-3 shadow-md border border-[#D4E3FA]">
          <h3 className="text-xl font-heading text-primary mb-2 text-center">
            Click&Celebrate
          </h3>
          <p className="text-accent/90 text-center leading-relaxed">
            Eleva tus eventos con tecnología: invitaciones digitales, galerías compartidas, RSVP ágil y streaming, todo en una solución hecha por PUMPEA.<br/>
            Convierte cada momento en una experiencia memorable, desde el primer contacto hasta la gestión de recuerdos y fotos en tiempo real.<br/>
          </p>
          <ul className="list-disc pl-8 text-base text-accent/80 mx-auto text-left max-w-lg">
            <li>Invitaciones digitales con RSVP instantáneo</li>
            <li>Galerías y álbumes para compartir fotos entre asistentes</li>
            <li>Itinerarios digitales, recordatorios y cuentas regresivas</li>
            <li>Streaming en vivo profesional (OBS, StreamYard y más)</li>
          </ul>
          <p className="mt-2 text-center text-neutral-600 text-base">
            ¿Necesitas tecnología para otro reto? Contamos con soluciones a la medida para empresas, marcas y eventos.
          </p>
          <div className="flex justify-center mt-3">
            <Link href="/click-celebrate" className="cta-button text-lg">
              Descubre Click&Celebrate
            </Link>
          </div>
        </div>
      </section>

      {/* Aliados y Clientes Strip Section */}
      <section className="w-full py-16 bg-gradient-to-br from-blue-50/80 via-white to-blue-100/50 border-t border-blue-100 mt-20">
        <div className="max-w-4xl mx-auto px-3">
          <GlassPanel className="mb-9 pb-7">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold mb-3 text-gradient-main text-center drop-shadow">
              Aliados y clientes
            </h2>
            <p className="text-center text-base md:text-lg text-neutral-700 mb-5">
              Agradecemos la confianza que cada aliado y cliente deposita en nosotros. Para nosotros, no son solo nombres o proyectos: su visión, su energía y su crecimiento se han vuelto también parte vital de la historia de PUMPEA.<br className="hidden sm:inline"/>
              Es un privilegio ser parte de su evolución digital y saber que juntos <b>construimos ideas que trascienden</b>. Cada experiencia, cada reto, cada resultado logrado nos inspira a superarnos siempre.
            </p>
            <div className="font-heading text-base text-primary text-center mb-1">
              <span className="font-extrabold text-lg">¡Gracias por confiar en nosotros!</span>
              <div className="flex items-center justify-center gap-2 mt-2 text-primary-dark font-bold">
                <span>Andros Mendieta</span>
                <span className="mx-1">&amp;</span>
                <span>Alex Jurado</span>
              </div>
            </div>
            <div className="mt-8 mb-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center items-center">
                {aliados.length === 0 && (
                  <span className="col-span-full text-center text-gray-400 py-6">Próximamente…</span>
                )}
                {aliados.map((src, i) => (
                  <div
                    key={src}
                    className="flex items-center justify-center bg-gradient-to-br from-white/90 via-blue-50/60 to-blue-100/50 rounded-xl shadow border border-blue-100 w-full aspect-square max-w-[120px] md:max-w-[130px] p-3 transition hover:scale-105 duration-150"
                    style={{
                      boxShadow: "0 4px 18px #a3d1ee21",
                    }}
                    title={`Aliado ${i + 1}`}
                    aria-label={`Aliado logo ${i + 1}`}
                    role="img"
                  >
                    <img
                      src={src}
                      alt={`Aliado logo ${i + 1}`}
                      className="w-full h-full object-contain"
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      <WhatsAppCta />
    </div>
  );
}
