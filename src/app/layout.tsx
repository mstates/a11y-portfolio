// src/app/layout.tsx
import { poppins } from '@/lib/fonts';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { ThemeScript } from '@/components/common/ThemeScript';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SkipLink from '@/components/a11y/SkipLink';

export const metadata: Metadata = {
  title: {
    template: '%s | Michael States',
    default: 'Michael States - Accessibility Portfolio',
  },
  description: 'A showcase of accessible web design and development by Michael States',
  metadataBase: new URL('https://michaelstates.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className='min-h-screen flex flex-col font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200'>
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        >
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
