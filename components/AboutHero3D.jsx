"use client";

import dynamic from "next/dynamic";

const PumpeaLogoCanvas = dynamic(() => import("./PumpeaLogoCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 rounded-full bg-white/70 shadow-[0_35px_70px_rgba(19,88,243,.08)] backdrop-blur-2xl" />
    </div>
  ),
});

function FloatingBadge({ className = "", icon, title, desc, tone = "blue" }) {
  const iconTone =
    tone === "orange"
      ? "text-orange-400 bg-orange-50"
      : tone === "violet"
        ? "text-violet-400 bg-violet-50"
        : "text-blue-600 bg-blue-50";

  return (
    <div className={`about-hero-badge absolute rounded-[18px] border border-white/80 bg-white/82 px-3 py-2.5 shadow-[0_18px_46px_rgba(19,88,243,.08)] backdrop-blur-[18px] sm:rounded-[24px] sm:px-5 sm:py-4 sm:shadow-[0_24px_65px_rgba(19,88,243,.08)] ${className}`}>
      <div className="flex items-center gap-4">
        <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${iconTone}`}>
          <i className={`fa ${icon} text-sm sm:text-lg`} />
        </span>
        <span>
          <span className="block text-[12px] font-black leading-tight text-[#28426c] sm:text-[15px]">{title}</span>
          <span className="mt-1 block text-[11px] font-medium leading-tight text-slate-400 sm:text-[14px]">{desc}</span>
        </span>
      </div>
    </div>
  );
}

export default function AboutHero3D() {
  return (
    <div className="relative mx-auto h-[390px] w-full max-w-[390px] sm:h-[500px] sm:max-w-[560px] md:h-[580px] md:max-w-[670px] lg:h-[620px]">
      <div className="absolute inset-x-[14%] bottom-[11%] h-[18%] rounded-full bg-[radial-gradient(circle,_rgba(19,88,243,.12),_rgba(19,88,243,0)_68%)] blur-3xl" />
      <div className="absolute left-1/2 top-[62%] h-[104px] w-[270px] -translate-x-1/2 rounded-full border border-blue-100/80 opacity-85 sm:h-[132px] sm:w-[340px] md:h-[148px] md:w-[380px]" />
      <div className="absolute left-1/2 top-[65%] h-[82px] w-[220px] -translate-x-1/2 rounded-full border border-blue-100/70 opacity-85 sm:h-[108px] sm:w-[290px] md:h-[118px] md:w-[314px]" />
      <div className="absolute left-1/2 top-[68%] h-[62px] w-[176px] -translate-x-1/2 rounded-full border border-blue-100/65 opacity-85 sm:h-[82px] sm:w-[230px] md:h-[88px] md:w-[246px]" />

      <FloatingBadge
        className="left-[1%] top-[8%] animate-float-slow sm:left-[5%] sm:top-[9%]"
        icon="fa-bolt"
        title="Automatización"
        desc="Inteligente ⚙️"
        tone="orange"
      />
      <FloatingBadge
        className="right-[0%] top-[18%] animate-float-medium sm:top-[16%]"
        icon="fa-heart"
        title="Pasión por"
        desc="lo que hacemos"
        tone="violet"
      />
      <FloatingBadge
        className="left-[0%] top-[65%] animate-float-medium sm:left-[2%] sm:top-[62%]"
        icon="fa-shield-halved"
        title="Tecnología"
        desc="con propósito"
      />
      <FloatingBadge
        className="bottom-[8%] right-[1%] animate-float-slow sm:bottom-[12%] sm:right-[4%]"
        icon="fa-chart-simple"
        title="Resultados"
        desc="que sí se sienten"
        tone="orange"
      />

      <div className="absolute inset-[2%]">
        <PumpeaLogoCanvas />
      </div>
    </div>
  );
}
