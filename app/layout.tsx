import type { Metadata, Viewport } from 'next';
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'PraiseKeyz - Backend & Fullstack Engineer',
  description: 'Creative software engineer specializing in Node.js, TypeScript, and scalable backend systems. Building digital excellence with modern technologies.',
  keywords: 'Backend Engineer, Fullstack Developer, Node.js, TypeScript, PostgreSQL, React',
  authors: [{ name: 'Praise Adebayo' }],
  openGraph: {
    type: 'website',
    url: 'https://praisekeyz.dev',
    title: 'PraiseKeyz - Backend & Fullstack Engineer',
    description: 'Creative software engineer specializing in Node.js, TypeScript, and scalable backend systems.',
    images: [
      {
        url: '/praise.jpeg',
        width: 1200,
        height: 630,
        alt: 'Praise Adebayo',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0a0a0a] text-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
