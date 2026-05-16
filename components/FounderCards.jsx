const founders = [
  {
    name: "Andros Mendieta",
    role: "Cofundador / Estrategia Digital",
    image: "/andros.png",
    bio1: "Arquitecto de software, apasionado por la automatización y la IA.",
    bio2: "Dirige el desarrollo tecnológico, la calidad de los proyectos y la innovación interna de PUMPEA.",
    tone: "blue",
  },
  {
    name: "Alex Jurado",
    role: "Cofundador / Arquitectura de sistemas",
    image: "/alex.png",
    bio1: "Ingeniero, visionario y apasionado por el diseño de sistemas inteligentes.",
    bio2: "Lidera la estrategia de crecimiento y las soluciones integradas de PUMPEA.",
    tone: "violet",
  },
];

export { founders };

export default function FounderCards({ compact = false }) {
  return (
    <div className={`grid grid-cols-1 ${compact ? "gap-5" : "gap-8"} lg:grid-cols-2`}>
      {founders.map((founder) => (
        <article
          key={founder.name}
          className={`reveal-card rounded-[30px] border p-8 text-center shadow-[0_24px_75px_rgba(19,88,243,.08)] backdrop-blur-xl ${
            founder.tone === "violet"
              ? "border-violet-100 bg-gradient-to-br from-[#f9f6ff] to-white"
              : "border-blue-100 bg-gradient-to-br from-[#f3f9ff] to-white"
          }`}
        >
          <div className="relative mx-auto mb-7 h-[170px] w-[170px]">
            <div className="absolute inset-0 rounded-full bg-white/70 blur-2xl" />
            <img
              src={founder.image}
              alt={founder.name}
              className="relative h-[170px] w-[170px] rounded-full border-[8px] border-white object-cover shadow-[0_20px_50px_rgba(35,91,243,.18)]"
              loading="lazy"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400 px-5 py-2 text-[14px] font-black tracking-[0.03em] text-white shadow-lg">
              FUNDADOR
            </span>
          </div>

          <h3 className="font-heading text-[24px] font-black leading-tight text-[#1971f7] md:text-[27px]">{founder.name}</h3>
          <p className="mt-2 font-heading text-[18px] font-black leading-snug text-[#123b8d]">{founder.role}</p>

          <div className="mx-auto mt-8 max-w-[365px] space-y-6 text-[17px] font-medium leading-[1.72] text-slate-600">
            <p>{founder.bio1}</p>
            <p>{founder.bio2}</p>
          </div>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-10 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-blue-100 bg-white/90 px-8 text-[17px] font-bold text-[#2c4b87] shadow-[0_14px_32px_rgba(19,88,243,.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(19,88,243,.12)]"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <i className="fab fa-linkedin text-sm" />
            </span>
            Conectar en Linkedin
          </a>
        </article>
      ))}
    </div>
  );
}
