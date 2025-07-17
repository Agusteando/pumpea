
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
    <div className="fixed inset-0 z-[120] bg-black/40 flex items-center justify-center">
      <div className="absolute inset-0" onClick={onClose} role="presentation" />
      <div className="relative z-10 bg-white rounded-xl max-w-2xl w-full shadow-xl">
        <div className="flex justify-between items-center px-6 py-3 border-b">
          <span className="font-heading text-lg font-bold text-blue-700">
            Agenda tu cita con PUMPEA
          </span>
          <button
            className="text-2xl text-blue-700 hover:text-blue-900 px-2"
            aria-label="Cerrar"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>
        <div className="p-0 w-full" style={{ minHeight: "540px" }}>
          {/* Calendly inline embed */}
          <iframe
            src="https://calendly.com/desarrollo-tecnologico-casitaiedis/programa-tu-sesion-con-pumpea?hide_event_type_details=1&primary_color=50678b"
            className="w-full min-h-[540px] rounded-xl"
            style={{ border: "none" }}
            allow="camera; microphone; autoplay; encrypted-media"
            title="Calendly appointment booking"
          />
        </div>
      </div>
    </div>
  );
}
