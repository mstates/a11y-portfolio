// src/components/sections/QuoteSection.tsx
'use client';

import { useBrand } from '@/contexts/BrandContext';
import { quoteContent } from '@/data/homeContent';
import { useState, useEffect } from 'react';

export default function QuoteSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Placeholder during hydration
  }

  const content = isAirbnb ? quoteContent.airbnb : quoteContent.default;
  
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <blockquote className="text-center">
          <p className={`text-2xl md:text-3xl font-light italic text-gray-900 dark:text-white max-w-4xl mx-auto ${
            isAirbnb ? 'text-[#484848]' : ''
          }`}>
            "{content.quote}"
          </p>
          {content.attribution && (
            <footer className="mt-4 text-gray-600 dark:text-gray-400">
              {content.attribution}
            </footer>
          )}
        </blockquote>
      </div>
    </section>
  );
}
