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
    <div className={`absolute rounded-[24px] border border-white/80 bg-white/80 px-5 py-4 shadow-[0_24px_65px_rgba(19,88,243,.08)] backdrop-blur-[18px] ${className}`}>
      <div className="flex items-center gap-4">
        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${iconTone}`}>
          <i className={`fa ${icon} text-lg`} />
        </span>
        <span>
          <span className="block text-[15px] font-black leading-tight text-[#28426c]">{title}</span>
          <span className="mt-1 block text-[14px] font-medium leading-tight text-slate-400">{desc}</span>
        </span>
      </div>
    </div>
  );
}

export default function AboutHero3D() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[670px] md:h-[580px] lg:h-[620px]">
      <div className="absolute inset-x-[14%] bottom-[11%] h-[18%] rounded-full bg-[radial-gradient(circle,_rgba(19,88,243,.12),_rgba(19,88,243,0)_68%)] blur-3xl" />
      <div className="absolute left-1/2 top-[62%] h-[148px] w-[380px] -translate-x-1/2 rounded-full border border-blue-100/80 opacity-85" />
      <div className="absolute left-1/2 top-[65%] h-[118px] w-[314px] -translate-x-1/2 rounded-full border border-blue-100/70 opacity-85" />
      <div className="absolute left-1/2 top-[68%] h-[88px] w-[246px] -translate-x-1/2 rounded-full border border-blue-100/65 opacity-85" />

      <FloatingBadge
        className="left-[5%] top-[9%] animate-float-slow"
        icon="fa-bolt"
        title="Automatización"
        desc="Inteligente ⚙️"
        tone="orange"
      />
      <FloatingBadge
        className="right-[0%] top-[16%] animate-float-medium"
        icon="fa-heart"
        title="Pasión por"
        desc="lo que hacemos"
        tone="violet"
      />
      <FloatingBadge
        className="left-[2%] top-[62%] animate-float-medium"
        icon="fa-shield-halved"
        title="Tecnología"
        desc="con propósito"
      />
      <FloatingBadge
        className="bottom-[12%] right-[4%] animate-float-slow"
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
