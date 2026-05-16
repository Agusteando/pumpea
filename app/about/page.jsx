
import FounderCards from "../../components/FounderCards";
import SpriteLogoRail from "../../components/SpriteLogoRail";

export const metadata = {
  title: "Nosotros - PUMPEA",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <span className="section-kicker">Nuestra historia</span>
        <h1 className="mt-4 font-heading text-3xl text-gradient-main md:text-4xl">
          Nosotros / Quiénes somos
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:items-start">
        <div className="surface-card space-y-6 p-8 text-lg leading-relaxed text-neutral-700">
          <p>
            En <b className="text-primary">PUMPEA</b> creemos que los negocios pueden ser más eficientes
            sin perder su esencia. Somos una empresa 100% mexicana, fundada por Andros y Alex,
            apasionados por el desarrollo digital con propósito.
          </p>
          <p>
            Ofrecemos soluciones tecnológicas reales para empresas que quieren crecer con orden,
            automatización y equilibrio. Desde plataformas y sistemas a la medida, hasta páginas web
            que sí venden y bots de WhatsApp que responden por ti: diseñamos herramientas que trabajan
            contigo y por tu negocio.
          </p>
          <p>
            Creemos que el bienestar y la efectividad pueden ir de la mano. Que crecer no tiene que
            doler, ni ser un caos. Cada proyecto que hacemos lleva estrategia, creatividad y corazón,
            porque tu crecimiento también es el nuestro.
          </p>
          <div className="pt-2 text-center text-xl font-bold text-primary-dark">
            PUMPEA tu negocio.
            <br />
            Dale potencia a tus ideas.
          </div>
        </div>

        <FounderCards compact />
      </div>

      <div className="mt-10">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-blue-700/70">
          Algunos aliados que ya confían en nosotros
        </p>
        <SpriteLogoRail compact />
      </div>
    </div>
  );
}
