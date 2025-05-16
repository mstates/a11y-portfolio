// src/components/sections/WhoIAmSection.tsx
'use client';

import { useBrand } from '@/contexts/BrandContext';
import { whoIAmContent } from '@/data/homeContent';
import { useState, useEffect } from 'react';
import { 
  ChartBarIcon, 
  CodeBracketIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

export default function WhoIAmSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Placeholder during hydration
  }

  const content = isAirbnb ? whoIAmContent.airbnb : whoIAmContent.default;
  
  // Function to get the icon component based on the icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ChartBarIcon':
        return <ChartBarIcon className="h-6 w-6" />;
      case 'CodeBracketIcon':
        return <CodeBracketIcon className="h-6 w-6" />;
      case 'UserGroupIcon':
        return <UserGroupIcon className="h-6 w-6" />;
      default:
        return <ChartBarIcon className="h-6 w-6" />;
    }
  };
  
  return (
    <div className={`bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg ${
      isAirbnb ? 'border border-[#FF5A5F]' : ''
    }`}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{content.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {content.intro}
      </p>
      
      <div className="space-y-8">
        {content.roles.map((role, i) => (
          <div key={`role-${i}-${role.title}`} className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isAirbnb 
                  ? 'bg-[#FFEEEF] dark:bg-[#661F22] text-[#FF5A5F] dark:text-[#FF8A8F]' 
                  : 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
              }`}>
                {getIcon(role.icon)}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{role.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {role.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
