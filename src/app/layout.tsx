// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { BrandThemeProvider } from '@/components/theme/BrandThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BrandIndicator from '@/components/layout/BrandIndicator'; 
import AirbnbModeCTA from '@/components/layout/AirbnbModeCTA'; 
import SkipLink from '@/components/a11y/SkipLink';

// Load Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

// src/app/layout.tsx (partial update for metadata)
export const metadata: Metadata = {
  title: {
    template: '%s | Michael States',
    default: 'Michael States | Accessibility Engineering Leader',
  },
  description: 'Accessibility engineering leader with expertise in creating inclusive digital experiences that scale across web, mobile, and native platforms.',
  keywords: ['accessibility', 'a11y', 'WCAG', 'inclusive design', 'engineering', 'leadership'],
  authors: [{ name: 'Michael States' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://michaelstates.com',
    siteName: 'Michael States',
    title: 'Michael States | Accessibility Engineering Leader',
    description: 'Accessibility engineering leader with expertise in creating inclusive digital experiences that scale.',
    images: [
      {
        url: 'https://michaelstates.com/og-image.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: 'Michael States - Accessibility Engineering Leader'
      }
    ]
  }
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className={`min-h-screen font-sans antialiased bg-white dark:bg-gray-950 dark:text-gray-100 ${poppins.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BrandThemeProvider>
            <SkipLink />
            <Header />
            <main id="main-content">
              {children}
            </main>
            <Footer />
            <BrandIndicator />
            <AirbnbModeCTA />
          </BrandThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
