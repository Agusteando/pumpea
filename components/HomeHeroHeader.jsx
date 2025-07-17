
"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Typewriter from "./Typewriter";
import Link from "next/link";
import AnimatedGradientBg from "./AnimatedGradientBg";

const AnimatedLogo = dynamic(() => import("./AnimatedLogo"), { ssr: false });

export default function HomeHeroHeader() {
  return (
    <AnimatedGradientBg className="w-full relative overflow-hidden pb-12 pt-24 sm:pt-28" style={{
      minHeight: "440px",
    }}>
      {/* Glass blur overlay */}
      <div className="absolute inset-0 bg-blue-300 bg-opacity-25 backdrop-blur-xl z-0" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <Suspense
          fallback={
            <img src="/logo.png" alt="Pumpea Logo" className="h-18 mx-auto mb-5" />
          }
        >
          <AnimatedLogo className="mx-auto mb-6 h-22 w-auto" />
        </Suspense>

        <h1 className="text-3xl md:text-5xl font-extrabold font-heading mb-4 max-w-3xl tracking-tight drop-shadow-lg text-white animate-in fade-in duration-1000 delay-200">
          Tu negocio tiene todo para crecer…
          <br className="hidden sm:block" />
          <span className="text-gradient-main block whitespace-nowrap leading-tight -mt-2 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            solo necesita un buen impulso digital.
          </span>
        </h1>

        <div className="mb-9 opacity-95">
          <Typewriter
            className="text-lg md:text-2xl font-semibold text-white tracking-tight shadow-xl block max-w-xl mx-auto bg-gradient-to-r from-white/5 to-blue-200/10 rounded-lg px-2"
            words={[
              "En PUMPEA hacemos que la tecnología trabaje contigo:",
              "Automatizamos, conectamos, diseñamos y construimos lo que tu negocio necesita…",
              "… para despegar (sin que te explote la cabeza en el intento).",
            ]}
          />
        </div>
        <div className="flex flex-col xs:flex-row gap-5 justify-center w-full animate-in fade-in duration-700 delay-700">
          <Link href="/agenda" className="cta-button text-lg shadow-xl">
            Agenda tu cita gratis
          </Link>
          <Link href="/pricing" className="button text-lg bg-white/80 border-white/40 font-bold text-blue-700 hover:text-primary shadow">
            Ver Precios
          </Link>
          <Link href="/contact" className="button bg-white/95 text-primary border-primary hover:bg-blue-50 border font-semibold text-lg shadow">
            Solicita Cotización
          </Link>
        </div>
      </div>
    </AnimatedGradientBg>
  );
}
