import './globals.css';
import CalendlyProvider from '../components/CalendlyProvider';
import CalendlyModalProvider from '../components/CalendlyModal';

export const metadata = {
  title: 'Pumpea | Websites that sell. Systems that run the business.',
  description:
    'Pumpea designs and builds conversion-focused websites, internal systems, automations, dashboards, approval flows, and PDF/document software.',
  keywords: ['Pumpea', 'website studio', 'internal systems', 'automation', 'dashboards', 'document workflows'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <CalendlyProvider />
        <CalendlyModalProvider>{children}</CalendlyModalProvider>
      </body>
    </html>
  );
}
