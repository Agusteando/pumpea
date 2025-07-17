
import GlassPanel from "../../components/GlassPanel";

export const metadata = {
  title: "Click&Celebrate | Pumpea",
  description: "Click&Celebrate: Tecnología para tus eventos, invitaciones, gestión de fotos, streaming y más con Pumpea."
};

export default function ClickCelebratePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <GlassPanel className="mb-8">
        <h1 className="font-heading text-3xl font-bold mb-2 text-gradient-main text-center">Click&Celebrate</h1>
        <p className="text-base md:text-lg text-neutral-700 text-center mb-4">
          Soluciones digitales para eventos inolvidables.<br />
          <span className="inline-block bg-green-50/90 rounded-full px-3 py-1 text-primary font-bold text-[93%] mt-2 mb-1">
            Gestiona, transmite y celebra con tecnología que facilita tu evento.
          </span>
        </p>
        <ul className="list-disc pl-7 text-neutral-700/90 text-base space-y-2 mb-5">
          <li>Invitaciones digitales y RSVP automático</li>
          <li>Galerías interactivas para compartir y gestionar fotos en tiempo real</li>
          <li>Itinerario digital para los asistentes</li>
          <li>Cuentas regresivas y recordatorios</li>
          <li>Transmisión en vivo (OBS & StreamYard, bajo cotización)</li>
        </ul>
        <div className="flex flex-row gap-3 justify-center mt-4">
          <a
            href="https://wa.me/5217293062147?text=%C2%A1Hola!%20Estoy%20interesado%20en%20Click%26Celebrate%20de%20Pumpea"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button text-lg"
          >
            Cotiza tu Evento
          </a>
        </div>
      </GlassPanel>
    </div>
  );
}
