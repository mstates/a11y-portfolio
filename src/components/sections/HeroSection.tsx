// src/components/sections/HeroSection.tsx
'use client';

import { useBrand } from '@/contexts/BrandContext';
import { heroContent } from '@/data/homeContent';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen"/>; // Placeholder during hydration
  }

  const content = isAirbnb ? heroContent.airbnb : heroContent.default;
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-content">
      <div className="section-container">
        <span className={isAirbnb ? 'badge badge-airbnb' : 'badge badge-default'}>
          {content.tagline}
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight content-slide">
          {content.title}
        </h1>
        
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 content-fade">
          {content.subtitle}
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl content-fade">
          {content.description}
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/about"
            className={isAirbnb ? 'btn-primary-airbnb' : 'btn-primary'}
          >
            {isAirbnb ? 'My Accessibility Leadership' : 'My Experience'}
          </Link>
          <Link
            href="/contact"
            className="btn-secondary"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
