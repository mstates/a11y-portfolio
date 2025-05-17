'use client';

import Link from 'next/link';
import { useBrand } from '@/contexts/BrandContext';
import { heroContent } from '@/data/homeContent';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const content = isAirbnb ? heroContent.airbnb : heroContent.default;
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full dark:bg-indigo-900 dark:text-indigo-200 border mb-6 ${
                isAirbnb 
                  ? 'bg-[#FFF0F0] dark:border-gray-100' 
                  : 'bg-indigo-50'
              } focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
            {content.tagline}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight">
            {content.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {content.subtitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
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
      </div>
    </section>
  );
}
