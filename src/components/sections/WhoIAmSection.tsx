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
    return <div className="h-96"/>; // Placeholder during hydration
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
    <div className={isAirbnb ? 'card-airbnb' : 'card'}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 content-fade">
        {content.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8 content-fade">
        {content.intro}
      </p>
      
      <div className="space-y-8">
        {content.roles.map((role, i) => (
          <div key={`role-${i}`} className="flex content-slide" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className={isAirbnb ? 'role-icon-container-airbnb' : 'role-icon-container'}>
              {getIcon(role.icon)}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {role.title}
              </h4>
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
