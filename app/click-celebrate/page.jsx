
export default function ClickCelebratePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-heading mb-4 text-center bg-gradient-to-r from-primary to-accent-sky text-transparent bg-clip-text">
        Click<span className="font-normal">&</span>Celebrate
      </h1>
      <div className="rounded-xl shadow-xl bg-gradient-to-br from-primary-light via-accent-sky/10 to-white p-8">
        <h2 className="text-xl font-heading text-primary mb-2 text-center">Soluciones digitales para tu evento</h2>
        <ul className="list-disc pl-6 mb-5 text-accent-sky/90 text-base space-y-1">
          <li>Gestión de fotos y momentos en tiempo real</li>
          <li>Invitaciones digitales personalizadas</li>
          <li>Itinerarios, cuentas regresivas, transmisión en vivo</li>
          <li>Todo lo que tu evento necesita… ¡en una sola plataforma!</li>
        </ul>
        <div className="text-center">
          <a
            href="https://wa.me/5217291065569?text=Hola%20Click%26Celebrate%2C%20quiero%20informes"
            target="_blank" rel="noopener"
            className="cta-button bg-gradient-to-r from-primary to-accent-sky text-white"
          >
            Solicita información
          </a>
        </div>
      </div>
    </div>
  );
}
