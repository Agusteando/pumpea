const founders = [
  {
    name: "Andros Mendieta",
    role: "Cofundador / Estrategia digital",
    image: "/andros.png",
    bio: "Arquitectura de soluciones, automatización e innovación interna para convertir ideas en sistemas reales.",
  },
  {
    name: "Alex Jurado",
    role: "Cofundador / Arquitectura de sistemas",
    image: "/alex.png",
    bio: "Diseño de producto, crecimiento y experiencias digitales integrales enfocadas en negocio.",
  },
];

export { founders };

export default function FounderCards({ compact = false }) {
  return (
    <div className={`grid grid-cols-1 ${compact ? "gap-5" : "gap-6"} sm:grid-cols-2`}>
      {founders.map((founder) => (
        <article key={founder.name} className="glass-card reveal-card p-6 text-center">
          <div className="relative mx-auto mb-5 h-32 w-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-300 blur-xl opacity-25" />
            <img
              src={founder.image}
              alt={founder.name}
              className="relative h-32 w-32 rounded-full border-[5px] border-white bg-sky-50 object-cover shadow-2xl"
              loading="lazy"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 px-3 py-1 text-[10px] font-black text-white shadow-lg">
              FUNDADOR
            </span>
          </div>
          <h3 className="font-heading text-xl font-black text-[#102453]">{founder.name}</h3>
          <p className="mt-1 text-sm font-black text-blue-700">{founder.role}</p>
          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">{founder.bio}</p>
        </article>
      ))}
    </div>
  );
}
