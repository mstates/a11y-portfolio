'use client';

import { useBrand } from '@/contexts/BrandContext';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { heroContent } from '@/data/homeContent';

export default function HeroSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen"/>;
  }

  const content = isAirbnb ? heroContent.airbnb : heroContent.default;
  
  return (
    <section className="hero-section bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-xl dark:bg-indigo-900 dark:text-white border mb-6 ${
                isAirbnb 
                  ? 'bg-[#FFF0F0] dark:border-gray-100' 
                  : 'bg-indigo-50'
              } focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
            {content.tagline}
          </span>
          <h1>
            {content.title}
          </h1>
          <h2>
            {content.subtitle}
          </h2>
          <p>
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/about"
              className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white focus:outline-none shadow-sm ${
                isAirbnb 
                  ? 'bg-[#FF385B] hover:bg-[#FF385E]' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isAirbnb ? 'focus:ring-[#FF5A5F]' : 'focus:ring-indigo-500'
              }`}
            >
              {isAirbnb ? 'My Accessibility Leadership' : 'My Experience'}
            </Link>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm ${
                isAirbnb 
                  ? 'border-gray-900 dark:border-gray-100' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isAirbnb ? 'focus:ring-[#FF5A5F]' : 'focus:ring-indigo-500'
              }`}
            >
              Get In Touch
            </Link>
          </div>
      </div>
    </section>
  );
}
