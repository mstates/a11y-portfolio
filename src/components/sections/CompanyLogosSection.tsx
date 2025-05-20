'use client';

import Image from 'next/image';
import { useBrand } from '@/contexts/BrandContext';
import { companyLogosContent } from '@/data/homeContent';
import { useState, useEffect } from 'react';

export default function CompanyLogosSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Placeholder during hydration
  }

  const content = isAirbnb ? companyLogosContent.airbnb : companyLogosContent.default;
  
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {content.heading}
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {content.companies.map((company) => (
            <div 
              key={company.name} 
              className="w-32 h-16 relative filter grayscale hover:grayscale-0 dark:fill-white transition-all"
              aria-label={company.name}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
