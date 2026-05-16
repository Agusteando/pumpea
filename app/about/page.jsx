import AboutHero3D from "../../components/AboutHero3D";
import FounderCards from "../../components/FounderCards";

export const metadata = {
  title: "Nosotros | PUMPEA",
};

const stats = [
  { icon: "fa-rocket", value: "+50", label: ["Proyectos", "exitosos"] },
  { icon: "fa-users", value: "+20", label: ["Clientes", "satisfechos"] },
  { icon: "fa-clock", value: "+1,200", label: ["Horas de", "automatización"] },
  { icon: "fa-star", value: "100%", label: ["Comprometidos", "contigo"] },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.95),transparent_32%),radial-gradient(circle_at_72%_22%,rgba(190,229,255,.26),transparent_34%),linear-gradient(180deg,#f9fcff_0%,#f4f8fd_55%,#f7fbff_100%)]" />

      <section className="pumpea-container relative pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,520px)_minmax(0,1fr)] xl:gap-8">
          <div className="relative z-10 max-w-[520px] pt-6 lg:pt-10">
            <span className="inline-flex rounded-full border border-blue-100 bg-white/70 px-5 py-2 text-[13px] font-black tracking-[0.18em] text-blue-700 shadow-[0_14px_35px_rgba(19,88,243,.05)] backdrop-blur-xl">
              NUESTRA ESENCIA
            </span>

            <h1 className="mt-8 font-heading text-[56px] font-black leading-[0.97] tracking-[-0.055em] text-[#324b7a] sm:text-[64px] lg:text-[72px]">
              <span className="block text-[#2b7cff]">Nosotros /</span>
              <span className="block text-[#2d426d]">Quiénes somos</span>
            </h1>

            <div className="mt-10 max-w-[470px] space-y-8 text-[18px] leading-[1.7] text-slate-600 md:text-[20px]">
              <p className="font-semibold text-[#3b4e74]">
                En PUMPEA creemos que los negocios pueden ser más eficientes sin perder su esencia.
              </p>
              <p>
                Somos una empresa 100% mexicana fundada por Andros y Alex, apasionados por el desarrollo digital con propósito.
              </p>
              <p className="font-semibold text-[#57a0ff]">
                Ofrecemos soluciones tecnológicas reales para empresas que quieren crecer con orden, automatización y equilibrio.
              </p>
            </div>
          </div>

          <AboutHero3D />
        </div>
      </section>

      <section className="pumpea-container relative pb-12 md:pb-16">
        <div className="overflow-hidden rounded-[42px] border border-white/70 bg-white/70 shadow-[0_32px_90px_rgba(19,88,243,.08)] backdrop-blur-[18px]">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.value} className="relative flex flex-col items-center px-8 py-10 text-center md:py-12">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-white text-[24px] text-blue-500 shadow-[0_12px_32px_rgba(19,88,243,.07)]">
                  <i className={`fa ${stat.icon}`} />
                </span>
                <span className="mt-7 font-heading text-[34px] font-black tracking-[-0.04em] text-[#2a74f5] md:text-[38px]">{stat.value}</span>
                <span className="mt-2 font-heading text-[18px] font-medium leading-[1.55] text-[#40557e]">
                  {stat.label.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </span>
                {index < stats.length - 1 && (
                  <span className="absolute right-0 top-1/2 hidden h-[58%] w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(55,109,219,.14),transparent)] xl:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pumpea-container relative pb-24">
        <div className="rounded-[44px] border border-white/75 bg-white/72 px-6 py-10 shadow-[0_30px_90px_rgba(19,88,243,.08)] backdrop-blur-[18px] md:px-10 md:py-14 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-[900px] text-center">
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 text-[13px] font-black tracking-[0.18em] text-blue-700 shadow-[0_14px_35px_rgba(19,88,243,.05)]">
              LOS FUNDADORES
            </span>
            <h2 className="mt-7 font-heading text-[40px] font-black leading-[1.08] tracking-[-0.045em] text-[#2b477a] md:text-[58px]">
              Detrás de cada solución,
              <span className="block bg-gradient-to-r from-[#2c78f4] via-[#3c9aff] to-[#58c8ff] bg-clip-text text-transparent">hay personas que se preocupan.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-[20px] leading-[1.65] text-slate-500">
              Nos involucramos como socios estratégicos, no solo como proveedores. Tu crecimiento es también nuestro.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[1150px]">
            <FounderCards />
          </div>
        </div>
      </section>
    </div>
  );
}
