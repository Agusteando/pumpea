import path from "path";
import fs from "fs";
import PageHero from "../../components/PageHero";
import SpriteLogoRail from "../../components/SpriteLogoRail";

export const metadata = {
  title: "Casos de éxito | PUMPEA",
  description: "Aliados, clientes y marcas que han confiado en PUMPEA para su crecimiento digital.",
};

function getAliadosImages() {
  const dir = path.join(process.cwd(), "public", "aliados");
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => `/aliados/${file}`);
  } catch {
    return [];
  }
}

const outcomes = [
  { icon: "fa-window-maximize", title: "Presencia digital clara", desc: "Sitios y páginas que explican la oferta con estructura comercial." },
  { icon: "fa-robot", title: "Procesos automatizados", desc: "Atención, captura de prospectos y seguimiento con menos fricción." },
  { icon: "fa-chart-line", title: "Crecimiento medible", desc: "Decisiones guiadas por objetivos, datos y operación real." },
];

export default function AliadosClientesPage() {
  const aliados = getAliadosImages();

  return (
    <div>
      <PageHero kicker="Casos de éxito" title="Aliados que ya confían en Pumpea para crecer con tecnología.">
        Agradecemos la confianza de cada marca y organización. Su visión, energía y crecimiento forman parte de la historia que seguimos construyendo.
      </PageHero>

      <section className="pumpea-container pb-16">
        <div className="glass-card-strong p-7 md:p-10">
          <div className="mb-8 text-center">
            <span className="section-kicker">Aliados</span>
            <h2 className="mt-5 font-heading text-3xl font-black text-[#102453] md:text-4xl">Marcas y organizaciones que están creciendo con nosotros.</h2>
          </div>
          <SpriteLogoRail compact framed={false} />
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
            {aliados.length === 0 && <p className="col-span-full text-center font-bold text-slate-400">Próximamente…</p>}
            {aliados.map((src, index) => (
              <div key={src} className="glass-card reveal-card flex aspect-square items-center justify-center p-5" title={`Aliado ${index + 1}`}>
                <img src={src} alt={`Aliado ${index + 1}`} className="h-full w-full object-contain" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pumpea-container pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <article key={outcome.title} className="glass-card reveal-card p-7">
              <span className="icon-bubble mb-5"><i className={`fa ${outcome.icon}`} /></span>
              <h3 className="font-heading text-2xl font-black text-[#102453]">{outcome.title}</h3>
              <p className="mt-3 font-medium leading-relaxed text-slate-600">{outcome.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
