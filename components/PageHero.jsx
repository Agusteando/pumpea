import Link from "next/link";

export default function PageHero({ kicker, title, children, ctaHref = "/agenda", ctaLabel = "Agenda tu cita", secondaryHref, secondaryLabel }) {
  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      <div className="hero-orb one animate-pulse-glow" />
      <div className="pumpea-container">
        <div className="glass-card-strong grid items-center gap-6 p-5 sm:p-7 md:gap-8 md:p-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            {kicker && <span className="section-kicker">{kicker}</span>}
            <h1 className="mt-5 max-w-4xl font-heading text-[34px] font-black leading-[1.08] tracking-[-.035em] text-[#091126] sm:text-4xl md:text-6xl">
              {title}
            </h1>
            {children && <div className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg md:text-xl">{children}</div>}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={ctaHref} className="cta-button"><i className="fa fa-calendar" /> {ctaLabel}</Link>
              {secondaryHref && secondaryLabel && <Link href={secondaryHref} className="button">{secondaryLabel}</Link>}
            </div>
          </div>
          <div className="texture-panel min-h-[220px] p-5 text-white sm:min-h-[280px] sm:p-7 md:min-h-[360px]">
            <div className="absolute right-5 top-5 h-24 w-24 rounded-full border border-white/24 sm:right-8 sm:top-8 sm:h-28 sm:w-28" />
            <div className="absolute right-12 top-14 h-36 w-36 rounded-full border border-white/12 sm:right-16 sm:top-16 sm:h-44 sm:w-44" />
            <div className="relative z-10 flex h-full min-h-[180px] flex-col justify-end sm:min-h-[240px] md:min-h-[260px]">
              <span className="w-fit rounded-full bg-white/16 px-4 py-2 text-xs font-black backdrop-blur sm:text-sm">Pumpea System</span>
              <p className="mt-5 max-w-md break-words font-heading text-[21px] font-black leading-tight sm:text-3xl">
                Diseño, tecnología y automatización con una misma dirección visual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
