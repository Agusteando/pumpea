
export const metadata = {
  title: "Nosotros - PUMPEA",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-heading mb-5 text-center bg-gradient-to-r from-primary to-accent-sky text-transparent bg-clip-text">
        Nosotros / Quiénes somos
      </h1>
      <div className="bg-white rounded-lg shadow p-8 text-accent-sky/90 text-lg leading-relaxed space-y-6">
        <p>
          En <b className="text-primary">PUMPEA</b> creemos que los negocios pueden ser más eficientes sin perder su esencia.
          Somos una empresa 100% mexicana, fundada por Alex y Andros, apasionados por el desarrollo digital con propósito.
        </p>
        <p>
          Ofrecemos soluciones tecnológicas reales para empresas que quieren crecer con orden, automatización y equilibrio.<br/>
          Desde plataformas y sistemas a la medida, hasta páginas web que sí venden y bots de WhatsApp que responden por ti — diseñamos herramientas que trabajan contigo y por tu negocio.
        </p>
        <p>
          Creemos que el bienestar y la efectividad pueden ir de la mano. Que crecer no tiene que doler, ni ser un caos.<br/>
          Cada proyecto que hacemos lleva estrategia, creatividad y corazón, porque tu crecimiento también es el nuestro.
        </p>
        <div className="text-primary-dark text-xl font-bold mt-6 text-center">
          PUMPEA tu negocio.<br/>Dale potencia a tus ideas.
        </div>
      </div>
    </div>
  );
}
