// src/components/layout/AirbnbModeCTA.tsx
'use client';

import { useState, useEffect, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useBrandTheme } from '@/components/theme/BrandThemeProvider';

export default function AirbnbModeCTA() {
  const { isAirbnb } = useBrandTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isShown, setIsShown] = useState(false);
  
  // Show the CTA after a slight delay for better UX
  useEffect(() => {
    if (mounted && !isAirbnb) {
      const timer = setTimeout(() => {
        setIsShown(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [mounted, isAirbnb]);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted || isAirbnb) return null;
  
  return (
    <Transition
      show={isShown}
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0 translate-y-4"
      enterTo="transform opacity-100 translate-y-0"
      leave="transition ease-in duration-200"
      leaveFrom="transform opacity-100 translate-y-0"
      leaveTo="transform opacity-0 translate-y-4"
    >
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="/?for=airbnb"
          className="group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          <div className={`
            flex items-center gap-2 
            ${isHovered ? 'pl-3 pr-4' : 'pl-3 pr-3'}
            py-2 rounded-full shadow-lg
            ${isHovered ? 'bg-[#FF5A5F] text-white' : 'bg-white text-[#FF5A5F] border border-[#FF5A5F]/20'}
            transition-all duration-300 ease-in-out
          `}>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill={isHovered ? "#FFFFFF" : "#FF5A5F"} 
              aria-hidden="true"
              className="transition-colors duration-300"
            >
              <path d="M11.9839 2C10.32 2 8.64905 2.0115 6.97719 2.0115C6.97719 3.1245 6.97719 4.2375 6.97719 5.3527C7.15613 5.3527 7.32396 5.3527 7.4929 5.3527C7.4929 9.215 7.4929 13.0795 7.4929 16.944C7.32396 16.944 7.15613 16.944 6.97719 16.944C6.97719 18.5719 6.97719 20.1986 6.97719 21.8265C8.64096 21.8265 10.3082 21.8265 11.9743 21.8265C11.9743 20.1986 11.9743 18.5719 11.9743 16.944C11.8078 16.944 11.64 16.944 11.4722 16.944C11.4722 13.0795 11.4722 9.215 11.4722 5.3527C11.6512 5.3527 11.819 5.3527 11.9862 5.3527C11.9862 4.2375 11.9839 3.1245 11.9839 2Z"/>
              <path d="M19.9793 6.12909C19.6861 5.5764 19.1311 5.34145 18.5279 5.33685C17.9247 5.33225 17.3651 5.55989 17.0638 6.11989C16.0781 7.92929 15.0989 9.74099 14.1231 11.5527C14.0391 11.7156 13.9597 11.8785 13.8699 12.0507C13.7091 12.0368 13.5714 12.0254 13.4291 12.0116C13.4291 10.0565 13.4291 8.1037 13.4291 6.15059C12.9508 6.15059 12.4794 6.15059 12.0126 6.15059C12.0126 10.0565 12.0126 14.9578 12.0126 19.8637C12.4909 19.8637 12.9622 19.8637 13.4291 19.8637C13.4291 17.898 13.4291 15.94 13.4291 13.99C13.5806 13.9739 13.7183 13.9602 13.8515 13.9464C13.9481 14.1254 14.0436 14.3067 14.1416 14.4857C15.1184 16.2837 16.0975 18.0794 17.0766 19.875C17.403 20.4681 17.9673 20.6683 18.5981 20.6499C19.2267 20.6316 19.7589 20.3898 20.0062 19.7968C20.0682 19.6684 20.0406 19.5768 19.9672 19.4508C19.9672 19.4508 19.9672 19.4508 19.9661 19.4485C19.0187 17.6528 18.0712 15.8571 17.1238 14.0614C17.0397 13.9007 16.9532 13.7401 16.8575 13.5657C16.9311 13.5171 17.0048 13.4662 17.1017 13.3998C17.4052 13.8152 17.7087 14.2398 18.021 14.6736C18.0623 14.6759 18.1037 14.6782 18.1454 14.6805C19.0905 16.4785 20.038 18.2742 20.9878 20.0699C20.9878 20.0699 20.9878 20.0699 20.989 20.0722C21.2362 20.5219 21.6594 20.6707 22.152 20.6499C22.6538 20.6293 23.0472 20.3968 23.286 19.9492C21.5167 16.6759 19.7474 13.4008 17.978 10.1276C18.6444 8.79459 19.3063 7.46619 19.9658 6.13599C19.9793 6.13254 19.9816 6.13024 19.9793 6.12909Z"/>
            </svg>
            
            <Transition
              show={isHovered}
              enter="transition-all duration-300 ease-in-out"
              enterFrom="opacity-0 translate-x-[-10px]"
              enterTo="opacity-100 translate-x-0"
              leave="transition-all duration-200 ease-in-out"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-[-10px]"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">Airbnb Recruiter?</span>
                <span className="text-xs">View tailored version</span>
              </div>
            </Transition>
          </div>
        </Link>
      </div>
    </Transition>
  );
}