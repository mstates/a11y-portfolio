// src/components/sections/CTASection.tsx
'use client';

import Link from 'next/link';
import { useBrand } from '@/contexts/BrandContext';
import { ctaContent } from '@/data/homeContent';
import { useState, useEffect } from 'react';

export default function CTASection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-64 bg-indigo-600 dark:bg-indigo-800"/>; // Placeholder during hydration
  }

  const content = isAirbnb ? ctaContent.airbnb : ctaContent.default;
  
  return (
    <section className={isAirbnb ? 'cta-section cta-section-airbnb' : 'cta-section cta-section-default'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6 content-fade">
          {content.title}
        </h2>
        <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-8 content-fade">
          {content.description}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white shadow-sm text-gray-900"
        >
          {content.buttonText}
        </Link>
      </div>
    </section>
  );
}
