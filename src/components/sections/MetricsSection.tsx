// src/components/sections/MetricsSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { metricsContent } from '@/data/homeContent';
import { useBrandTheme } from '@/components/theme/BrandThemeProvider';

export default function MetricsSection() {
  const { isAirbnb } = useBrandTheme();
  const [mounted, setMounted] = useState(false);
  const [contentKey, setContentKey] = useState<'default' | 'airbnb'>('default');
  
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
    return <div className="h-64 bg-white dark:bg-gray-800"/>;
  }
  
  const content = metricsContent[contentKey];
  
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 content-fade"
          key={`${contentKey}-heading`}
        >
          {content.heading}
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {content.metrics.map((metric, i) => {
            // Create a unique key that doesn't rely on the array index
            const metricKey = `${contentKey}-${metric.number}-${metric.label}`;
            
            return (
              <div 
                key={metricKey}
                className="p-6 content-slide"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className={`text-4xl md:text-5xl font-bold mb-2 ${
                  isAirbnb ? 'text-[#FF5A5F]' : 'text-indigo-600 dark:text-indigo-400'
                }`}>
                  {metric.number}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}