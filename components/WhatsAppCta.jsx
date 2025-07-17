
"use client";
import { useEffect, useRef } from "react";

export default function WhatsAppCta({ text = "¡Cotiza por WhatsApp!", className = "" }) {
  const pulseRef = useRef();
  useEffect(() => {
    if (!pulseRef.current) return;
    pulseRef.current.animate(
      [
        { boxShadow: "0 0 0 0 #34d39955", opacity: 0.9 },
        { boxShadow: "0 0 0 21px #10b98122", opacity: 0.35 },
        { boxShadow: "0 0 0 0 #34d39900", opacity: 0.9 },
      ],
      { duration: 2100, iterations: Infinity }
    );
  }, []);
  return (
    <a
      href="https://wa.me/5217293062147?text=Hola%20Pumpea%2C%20quiero%20informes%20y%20cotización%20de%20tu%20servicio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotiza por WhatsApp"
      className={
        `fixed bottom-5 right-5 z-50 flex items-center gap-2 px-6 py-3 font-extrabold font-heading rounded-full
         bg-gradient-to-tr from-green-500 via-emerald-500 to-teal-400 text-white text-[1.18rem]
         shadow-2xl shadow-green-400/35 hover:from-green-600 hover:to-green-400
         active:scale-[0.97] transition-all duration-200 border-2 border-green-200
         hover:ring-4 hover:ring-green-200/25 ring-emerald-400/15
         ${className}
        `
      }
      style={{
        minWidth: 178,
        fontWeight: 800,
        letterSpacing: "-0.025em"
      }}
    >
      <span ref={pulseRef} className="absolute inset-0 rounded-full z-0 pointer-events-none"></span>
      <i className="fab fa-whatsapp text-2xl drop-shadow"></i>
      <span className="pl-1">{text}</span>
    </a>
  );
}
