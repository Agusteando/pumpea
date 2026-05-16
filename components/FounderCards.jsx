const founders = [
  {
    name: "Andros Mendieta",
    role: "Cofundador / Estrategia digital",
    image: "/andros.png",
    bio: (
      <>
        Arquitecto de software, apasionado por la automatización y la IA.
        <br />
        Dirige el desarrollo tecnológico, la calidad de los proyectos y la innovación interna de PUMPEA.
      </>
    ),
    color: "from-[#F8F6FF] via-[#DED5FB] to-[#EBE9FF]",
    border: "border-[#a28cff]/40",
  },
  {
    name: "Alex Jurado",
    role: "Cofundador / Arquitectura de sistemas",
    image: "/alex.png",
    bio: (
      <>
        Ingeniero, visionario y apasionado por el diseño de productos digitales.
        <br />
        Lidera la estrategia de crecimiento y las soluciones integrales de PUMPEA.
      </>
    ),
    color: "from-[#F0F7FF] via-[#CAE7FF] to-[#E8F8FF]",
    border: "border-primary/40",
  },
];

export { founders };

export default function FounderCards({ compact = false }) {
  return (
    <div className={`grid grid-cols-1 ${compact ? "gap-4" : "gap-6"} sm:grid-cols-2`}>
      {founders.map((founder) => (
        <article
          key={founder.name}
          className={`rounded-2xl border ${founder.border} bg-gradient-to-br ${founder.color} shadow-md shadow-blue-200/20 ${
            compact ? "p-5" : "p-6"
          } flex flex-col items-center transition-transform duration-200 hover:-translate-y-1`}
          style={{
            boxShadow: "0 4px 32px #d9eafe1a, 0 1.5px 2.5px rgba(70,90,220,0.09)",
          }}
        >
          <div className="relative mb-3 flex items-center justify-center">
            <img
              src={founder.image}
              alt={founder.name}
              className={`${compact ? "h-28 w-28" : "h-32 w-32"} rounded-full border-4 border-white bg-sky-50 object-cover shadow-xl drop-shadow-2xl transition-transform duration-200 hover:scale-105`}
              loading="lazy"
              style={{
                boxShadow: "0 2px 16px #b5d6f33a",
                background: "linear-gradient(135deg,#d6f2fc,#f6ecff)",
              }}
            />
            <span className="absolute bottom-0 right-2 rounded-xl border border-white/70 bg-gradient-to-tr from-primary to-accent-sky px-2 py-[3px] text-xs font-bold text-white shadow-xl">
              FUNDADOR
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-center font-heading text-lg font-black text-primary md:text-xl">
              {founder.name}
            </div>
            <div className="mb-1 text-center text-sm font-semibold text-primary-dark md:text-base">
              {founder.role}
            </div>
            <div className="mt-1 text-center text-sm leading-relaxed text-neutral-700/90">
              {founder.bio}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
