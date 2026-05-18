import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalendlyProvider from "../components/CalendlyProvider";
import CalendlyModalProvider from "../components/CalendlyModal";
import PageTransitionProvider from "../components/PageTransitionProvider";
import ScrollEffects from "../components/ScrollEffects";

export const metadata = {
  title: "Pumpea | Tecnología que impulsa negocios",
  description:
    "Pumpea diseña sitios web, automatizaciones, bots e integraciones para marcas que necesitan convertir, escalar y operar mejor.",
  keywords:
    "Pumpea, transformación digital, sitios web, automatización, bots, integraciones, desarrollo web México",
  authors: [{ name: "Pumpea" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <div className="pumpea-shell min-h-screen flex flex-col">
          <PageTransitionProvider>
            <CalendlyProvider />
            <ScrollEffects />
            <CalendlyModalProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </CalendlyModalProvider>
            <div id="custom-alert" className="fixed bottom-4 right-4 z-50" />
          </PageTransitionProvider>
        </div>
      </body>
    </html>
  );
}
