import './globals.css';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Healthcare Club - Your Personal Health & Wellness Hub',
  description: 'Manage medical records, track vitals, link family accounts, and access emergency health info — all in one secure app.',
  keywords: 'healthcare app, medical records, vitals tracking, family health, emergency access',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
