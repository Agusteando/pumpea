"use client";

import { useEffect, useRef } from "react";

export default function WhatsAppCta({ text = "Cotiza por WhatsApp", className = "" }) {
  const pulseRef = useRef(null);
  useEffect(() => {
    if (!pulseRef.current) return;
    const animation = pulseRef.current.animate(
      [
        { boxShadow: "0 0 0 0 rgba(16,185,129,.36)", opacity: 0.9 },
        { boxShadow: "0 0 0 22px rgba(16,185,129,.02)", opacity: 0.35 },
        { boxShadow: "0 0 0 0 rgba(16,185,129,0)", opacity: 0.9 },
      ],
      { duration: 2200, iterations: Infinity }
    );
    return () => animation.cancel();
  }, []);

  return (
    <a
      href="https://wa.me/5217293062147?text=Hola%20Pumpea%2C%20quiero%20informes%20y%20cotización%20de%20tu%20servicio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotiza por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 hidden items-center justify-center gap-3 rounded-[22px] border border-emerald-200/80 bg-gradient-to-r from-emerald-500 to-teal-400 font-heading text-base font-black text-white shadow-[0_20px_48px_rgba(16,185,129,.28)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(16,185,129,.34)] lg:flex lg:px-5 lg:py-4 ${className}`}
    >
      <span ref={pulseRef} className="absolute inset-0 rounded-[24px] pointer-events-none" />
      <i className="fab fa-whatsapp text-2xl" />
      <span>{text}</span>
    </a>
  );
}
