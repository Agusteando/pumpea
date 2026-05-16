import FounderCards from "../../components/FounderCards";
import PageHero from "../../components/PageHero";
import SpriteLogoRail from "../../components/SpriteLogoRail";

export const metadata = {
  title: "Nosotros | PUMPEA",
};

const values = [
  { icon: "fa-compass", title: "Estrategia antes que ruido", desc: "Cada decisión visual y técnica debe sostener un objetivo del negocio." },
  { icon: "fa-bolt", title: "Velocidad con estructura", desc: "Construimos con bases claras para lanzar sin perder calidad ni control." },
  { icon: "fa-handshake", title: "Acompañamiento real", desc: "Trabajamos cerca del cliente, explicando decisiones y cuidando la adopción." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero kicker="Nuestra historia" title="Somos Pumpea: tecnología con intención comercial.">
        En PUMPEA creemos que los negocios pueden ser más eficientes sin perder su esencia. Diseñamos sitios, sistemas, automatizaciones y experiencias digitales que convierten ideas en operación real.
      </PageHero>

      <section className="pumpea-container pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="glass-card-strong p-7 md:p-10">
            <span className="section-kicker">Quiénes somos</span>
            <h2 className="mt-5 font-heading text-4xl font-black tracking-tight text-[#101a39]">Un equipo mexicano para negocios que quieren crecer con orden.</h2>
            <div className="mt-6 space-y-5 text-lg font-medium leading-relaxed text-slate-600">
              <p>
                Somos una empresa 100% mexicana fundada por Andros y Alex, apasionados por el desarrollo digital con propósito. Nuestro trabajo une diseño, tecnología, automatización e integración para que las marcas operen mejor.
              </p>
              <p>
                Desde páginas web que sí venden hasta bots de WhatsApp, sistemas a medida y productos digitales, creamos herramientas que trabajan contigo y por tu negocio.
              </p>
              <p className="rounded-3xl bg-blue-50/80 p-5 font-heading text-xl font-black text-blue-700">
                PUMPEA tu negocio. Dale potencia a tus ideas.
              </p>
            </div>
          </div>
          <FounderCards compact />
        </div>
      </section>

      <section className="pumpea-container pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="glass-card reveal-card p-7">
              <span className="icon-bubble mb-5"><i className={`fa ${value.icon}`} /></span>
              <h3 className="font-heading text-2xl font-black text-[#102453]">{value.title}</h3>
              <p className="mt-3 font-medium leading-relaxed text-slate-600">{value.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pumpea-container pb-24">
        <div className="glass-card-strong p-7 md:p-10">
          <div className="mb-7 text-center">
            <span className="section-kicker">Confianza</span>
            <h2 className="mt-5 font-heading text-3xl font-black text-[#102453]">Aliados que ya confían en nosotros</h2>
          </div>
          <SpriteLogoRail compact framed={false} />
        </div>
      </section>
    </div>
  );
}
