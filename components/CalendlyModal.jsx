"use client";

import { useState, createContext, useContext, useCallback } from "react";

const CalendlyModalContext = createContext(null);

export function useCalendlyModal() {
  return useContext(CalendlyModalContext);
}

export default function CalendlyModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);

  return (
    <CalendlyModalContext.Provider value={{ showCalendly: show, hideCalendly: hide }}>
      {children}
      {open && <CalendlyModal onClose={hide} />}
    </CalendlyModalContext.Provider>
  );
}

function CalendlyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/46 px-4 backdrop-blur-sm">
      <button className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Cerrar agenda" type="button" />
      <div className="glass-card-strong relative z-10 w-full max-w-3xl overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-blue-100 bg-white/74 px-6 py-4">
          <span className="font-heading text-lg font-black text-[#102453]">
            Agenda tu cita con PUMPEA
          </span>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-100 bg-white text-2xl text-blue-700 shadow-sm hover:bg-blue-50"
            aria-label="Cerrar"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>
        <iframe
          src="https://calendly.com/desarrollo-tecnologico-casitaiedis/programa-tu-sesion-con-pumpea?hide_event_type_details=1&primary_color=1358f3"
          className="h-[72vh] min-h-[540px] w-full bg-white"
          style={{ border: "none" }}
          allow="camera; microphone; autoplay; encrypted-media"
          title="Reserva de cita con PUMPEA"
        />
      </div>
    </div>
  );
}
