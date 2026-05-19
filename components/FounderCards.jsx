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
          className={`reveal-card rounded-[24px] border p-5 text-center shadow-[0_24px_75px_rgba(19,88,243,.08)] backdrop-blur-xl sm:p-8 ${
            founder.tone === "violet"
              ? "border-violet-100 bg-gradient-to-br from-[#f9f6ff] to-white"
              : "border-blue-100 bg-gradient-to-br from-[#f3f9ff] to-white"
          }`}
        >
          <div className="relative mx-auto mb-7 h-[138px] w-[138px] sm:h-[170px] sm:w-[170px]">
            <div className="absolute inset-0 rounded-full bg-white/70 blur-2xl" />
            <img
              src={founder.image}
              alt={founder.name}
              className="relative h-[138px] w-[138px] rounded-full border-[7px] border-white object-cover shadow-[0_20px_50px_rgba(35,91,243,.18)] sm:h-[170px] sm:w-[170px] sm:border-[8px]"
              loading="lazy"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400 px-4 py-1.5 text-[12px] font-black tracking-[0.03em] text-white shadow-lg sm:px-5 sm:py-2 sm:text-[14px]">
              FUNDADOR
            </span>
          </div>

          <h3 className="font-heading text-[22px] font-black leading-tight text-[#1971f7] md:text-[27px]">{founder.name}</h3>
          <p className="mt-2 font-heading text-[16px] font-black leading-snug text-[#123b8d] sm:text-[18px]">{founder.role}</p>

          <div className="mx-auto mt-6 max-w-[365px] space-y-4 text-[15px] font-medium leading-[1.7] text-slate-600 sm:mt-8 sm:space-y-6 sm:text-[17px]">
            <p>{founder.bio1}</p>
            <p>{founder.bio2}</p>
          </div>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-blue-100 bg-white/90 px-5 text-[15px] font-bold text-[#2c4b87] shadow-[0_14px_32px_rgba(19,88,243,.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(19,88,243,.12)] sm:mt-10 sm:min-h-[56px] sm:w-auto sm:px-8 sm:text-[17px]"
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
