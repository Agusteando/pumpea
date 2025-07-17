
import GlassPanel from "../../components/GlassPanel";
import path from "path";
import fs from "fs";

export const metadata = {
  title: "Aliados y Clientes - PUMPEA",
  description: "Nuestros aliados estratégicos y clientes que han confiado en PUMPEA para potenciar su transformación digital.",
};

function getAliadosImages() {
  // Server-side: Read image files from /public/aliados
  const dir = path.join(process.cwd(), "public", "aliados");
  let files = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) =>
        /\.(png|jpe?g|svg|webp)$/i.test(f)
      )
      .sort((a, b) => a.localeCompare(b)); // alphabetical order
  } catch (e) {
    // Could not read; return empty array
    return [];
  }
  return files.map((f) => `/aliados/${f}`);
}

export default function AliadosClientesPage() {
  const aliados = getAliadosImages();
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <GlassPanel className="mb-10">
        <h1 className="text-3xl md:text-4xl font-heading text-gradient-main text-center mb-4 font-extrabold drop-shadow">
          Aliados y clientes
        </h1>
        <p className="text-center text-lg text-neutral-700 mb-7">
          Agradecemos la confianza que cada aliado y cliente deposita en nosotros. Para nosotros, no son solo nombres o proyectos: su visión, su energía y su crecimiento se han vuelto también parte vital de la historia de PUMPEA.<br className="hidden sm:inline"/>
          Es un privilegio ser parte de su evolución digital y saber que juntos <b>construimos ideas que trascienden</b>. Cada experiencia, cada reto, cada resultado logrando nos inspira a superarnos siempre.
        </p>
        <div className="font-heading text-base text-primary text-center">
          <span className="font-extrabold text-lg">¡Gracias por confiar en nosotros!</span>
          <div className="flex items-center justify-center gap-2 mt-2 text-primary-dark font-bold">
            <span>Andros Mendieta</span>
            <span className="mx-1">&amp;</span>
            <span>Alex Jurado</span>
          </div>
        </div>
      </GlassPanel>
      <section>
        <h2 className="text-center text-xl md:text-2xl font-heading font-semibold text-blue-700 mb-6">
          Nuestros aliados estratégicos y clientes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center items-center">
          {aliados.length === 0 && (
            <span className="col-span-full text-center text-gray-400 py-6">Próximamente…</span>
          )}
          {aliados.map((src, i) => (
            <div
              key={src}
              className="flex items-center justify-center bg-gradient-to-br from-white/90 via-blue-50/50 to-blue-100/60 rounded-xl shadow border border-blue-100 w-full aspect-square max-w-[120px] md:max-w-[130px] p-3 transition hover:scale-105 duration-150"
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
      </section>
    </div>
  );
}
