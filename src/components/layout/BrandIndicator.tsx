'use client';

import { useBrand } from '@/contexts/BrandContext';
import { useState, useEffect } from 'react';

export default function BrandIndicator() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isAirbnb) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-full px-3 py-1 text-sm flex items-center z-50">
      <span className="w-2 h-2 bg-[#FF5A5F] rounded-full mr-2" />
      <span className="text-black font-semibold">Crafted for Airbnb</span>
    </div>
  );
}
