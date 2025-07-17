
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalendlyProvider from "../components/CalendlyProvider";
import CalendlyModalProvider from "../components/CalendlyModal";

export const metadata = {
  title: "Pumpea - Transformación Digital de Clase Mundial",
  description: "Pumpea: Líderes en innovación digital, automatización y transformación digital para tu negocio.",
  keywords: "Pumpea, servicios digitales, automatización, IA, desarrollo software, páginas web",
  authors: [{ name: "Pumpea" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Montserrat:wght@600;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans antialiased">
        <CalendlyProvider />
        <CalendlyModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CalendlyModalProvider>
        <div id="custom-alert" className="fixed bottom-4 right-4 z-50"></div>
      </body>
    </html>
  );
}
