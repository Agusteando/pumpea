
import GlassPanel from "../../components/GlassPanel";

export const metadata = {
  title: "Aliados y Clientes - PUMPEA",
  description: "Nuestros aliados estratégicos y clientes que han confiado en PUMPEA para potenciar su transformación digital.",
};

const LOGOS = Array.from({ length: 7 }, (_, i) => `/aliados/${i + 1}.png`);

export default function AliadosClientesPage() {
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
            <span>Alex Jurado</span>
            <span className="mx-1">&amp;</span>
            <span>Andros Mendieta</span>
          </div>
        </div>
      </GlassPanel>
      <section>
        <h2 className="text-center text-xl md:text-2xl font-heading font-semibold text-blue-700 mb-6">
          Nuestros aliados estratégicos y clientes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center items-center">
          {LOGOS.map((logo, i) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-gradient-to-br from-white/90 via-blue-50/50 to-blue-100/60 rounded-xl shadow border border-blue-100 w-full aspect-square max-w-[110px] md:max-w-[130px] p-3 transition hover:scale-105 duration-150"
              style={{
                boxShadow: "0 4px 18px #a3d1ee21",
              }}
            >
              <img
                src={logo}
                alt={`Aliado logo ${i + 1}`}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
