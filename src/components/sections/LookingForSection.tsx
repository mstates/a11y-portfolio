// src/components/sections/LookingForSection.tsx
'use client';

import { useBrand } from '@/contexts/BrandContext';
import { lookingForContent } from '@/data/homeContent';
import { useState, useEffect } from 'react';

export default function LookingForSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const content = isAirbnb ? lookingForContent.airbnb : lookingForContent.default;
  
  const paragraphs = content.content.split('\n\n');
  
  return (
    <div>
      <h2 className={`text-3xl font-bold text-gray-900 dark:text-white mb-6 ${
        isAirbnb ? 'text-[#484848] dark:text-white' : ''
      }`}>
        {content.title}
      </h2>
      <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
