// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SkipLink from '@/components/a11y/SkipLink';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { BrandProvider } from '@/contexts/BrandContext';

// Load Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Accessibility Portfolio',
    default: 'Accessibility Portfolio',
  },
  description: 'A showcase of accessible web design and development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        {/* Explicit link to ensure CSS is loaded */}
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body className={`min-h-screen flex flex-col ${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BrandProvider>
            <SkipLink />
            <Header />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </BrandProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
