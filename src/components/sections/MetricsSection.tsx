'use client';

import { useBrand } from '@/contexts/BrandContext';
import { metricsContent } from '@/data/homeContent';
import { useState, useEffect } from 'react';

export default function MetricsSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Placeholder during hydration
  }

  const content = isAirbnb ? metricsContent.airbnb : metricsContent.default;
  
  return (
    <section className="py-16 bg-indigo-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          {content.heading}
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {content.metrics.map((metric, index) => (
            <div key={index} className="p-6">
              <p className={`text-4xl md:text-5xl font-bold mb-2 ${
                isAirbnb ? 'text-[#FF5A5F]' : 'text-indigo-600 dark:text-indigo-400'
              }`}>
                {metric.number}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
