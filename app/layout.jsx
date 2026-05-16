import './globals.css';

export const metadata = {
  title: 'Pumpea | Websites that sell. Systems that run the business.',
  description: 'Pumpea designs and builds conversion-focused websites, internal systems, automations, dashboards, approval flows, and PDF/document software.',
  keywords: ['Pumpea', 'website studio', 'internal systems', 'automation', 'dashboards', 'document workflows'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
