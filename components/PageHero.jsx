import Link from "next/link";

export default function PageHero({ kicker, title, children, ctaHref = "/agenda", ctaLabel = "Agenda tu cita", secondaryHref, secondaryLabel }) {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="hero-orb one animate-pulse-glow" />
      <div className="pumpea-container">
        <div className="glass-card-strong grid items-center gap-8 p-7 md:p-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            {kicker && <span className="section-kicker">{kicker}</span>}
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-black leading-tight tracking-[-.035em] text-[#091126] md:text-6xl">
              {title}
            </h1>
            {children && <div className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl">{children}</div>}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={ctaHref} className="cta-button"><i className="fa fa-calendar" /> {ctaLabel}</Link>
              {secondaryHref && secondaryLabel && <Link href={secondaryHref} className="button">{secondaryLabel}</Link>}
            </div>
          </div>
          <div className="texture-panel min-h-[300px] p-7 text-white md:min-h-[360px]">
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/24" />
            <div className="absolute right-16 top-16 h-44 w-44 rounded-full border border-white/12" />
            <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-end">
              <span className="w-fit rounded-full bg-white/16 px-4 py-2 text-sm font-black backdrop-blur">Pumpea System</span>
              <p className="mt-5 max-w-md font-heading text-3xl font-black leading-tight">
                Diseño, tecnología y automatización con una misma dirección visual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
