// src/components/sections/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { heroContent } from '@/data/homeContent';
import { useBrandTheme } from '@/components/theme/BrandThemeProvider';

export default function HeroSection() {
  const { isAirbnb } = useBrandTheme();
  const [mounted, setMounted] = useState(false);
  const [contentKey, setContentKey] = useState(isAirbnb ? 'airbnb' : 'default');
  
  // Update content when brand changes
  useEffect(() => {
    if (mounted) {
      setContentKey(isAirbnb ? 'airbnb' : 'default');
    }
  }, [isAirbnb, mounted]);
  
  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div className="h-[600px] bg-gray-50 dark:bg-gray-900"/>;
  }
  
  const content = heroContent[contentKey];
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span 
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-8 ${
              isAirbnb 
                ? 'bg-[#FFEEEF] text-[#FF5A5F] dark:bg-[#661F22] dark:text-[#FF8A8F]' 
                : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
            }`}
            key={`${contentKey}-tagline`}
          >
            {content.tagline}
          </span>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight content-slide"
            key={`${contentKey}-title`}
          >
            {content.title}
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed content-fade"
            key={`${contentKey}-subtitle`}
          >
            {content.subtitle}
          </p>
          
          <p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl content-fade"
            key={`${contentKey}-description`}
          >
            {content.description}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/about"
              className={`btn ${isAirbnb ? 'btn-primary-airbnb' : 'btn-primary'}`}
            >
              My Experience
            </Link>
            
            <Link
              href="/contact"
              className="btn btn-secondary"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}