// src/components/sections/MetricsSection.tsx
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
    return <div className="h-64"/>; // Placeholder during hydration
  }

  const content = isAirbnb ? metricsContent.airbnb : metricsContent.default;
  
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title content-fade">
          {content.heading}
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {content.metrics.map((metric, index) => (
            <div key={index} className="p-6 content-slide" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className={isAirbnb ? 'stat-number-airbnb' : 'stat-number'}>
                {metric.number}
              </p>
              <p className="stat-label">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
