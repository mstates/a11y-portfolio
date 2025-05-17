// src/components/sections/HeroSection.tsx
'use client';

import { useBrand } from '@/contexts/BrandContext';
import { heroContent } from '@/data/homeContent';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const { isAirbnb } = useBrand();
  const [mounted, setMounted] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Handle hydration and animation sequence
  useEffect(() => {
    setMounted(true);
    
    // Trigger animations after initial render
    const timer = setTimeout(() => {
      setAnimateContent(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll-based animations (optional)
  useEffect(() => {
    if (!mounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateContent(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [mounted]);

  if (!mounted) {
    return <section aria-hidden="true" className="h-screen" />; // Accessible placeholder during hydration
  }

  const content = isAirbnb ? heroContent.airbnb : heroContent.default;
  
  return (
    <section 
      ref={sectionRef}
      className={`py-20 md:py-32 relative overflow-hidden ${
        isAirbnb 
          ? 'bg-gradient-to-br from-white to-[#FFF8F8] dark:from-gray-900 dark:to-gray-800' 
          : 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'
      } transition-all duration-500`}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0,0,0,0.1) 2%, transparent 0%)',
               backgroundSize: '50px 50px'
             }} 
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <span 
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-8 transform transition-all duration-500 ${
              animateContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            } ${isAirbnb ? 'badge-airbnb' : 'badge-default'}`}
          >
            {content.tagline}
          </span>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight transform transition-all duration-500 delay-100 ${
              animateContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {content.title}
          </h1>
          
          <p 
            className={`text-2xl text-gray-700 dark:text-gray-300 mb-6 transform transition-all duration-500 delay-200 ${
              animateContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {content.subtitle}
          </p>
          
          <p 
            className={`text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl transform transition-all duration-500 delay-300 ${
              animateContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {content.description}
          </p>
           
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
  <Button 
    href="/about" 
    variant="primary" 
    isAirbnb={isAirbnb}
    className="group"
  >
    <span>{isAirbnb ? 'My Accessibility Leadership' : 'My Experience'}</span>
    <svg 
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </Button>
  
  <Button 
    href="/contact" 
    variant="secondary"
  >
    Get In Touch
  </Button>
</div>
        </div>
      </div>
      
      {/* Optional decorative elements that only show at larger screens */}
      <div className="hidden lg:block absolute right-0 bottom-0 opacity-10 dark:opacity-5 pointer-events-none z-0">
        {isAirbnb ? (
          <svg aria-hidden="true" width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill={isAirbnb ? '#FF5A5F' : '#4f46e5'}>
            <path d="M100,20 C140,20 160,40 160,100 C160,180 140,180 100,180 C40,180 20,160 20,100 C20,40 60,20 100,20 Z" />
          </svg>
        ) : (
          <svg aria-hidden="true" width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#4f46e5">
            <path d="M34.5,-47.1C46,-42.5,57.5,-33.7,64.9,-21.3C72.3,-8.9,75.6,7.1,71.5,21.3C67.4,35.5,55.9,47.9,42.2,53.2C28.6,58.5,12.8,56.8,-2.4,60C-17.7,63.1,-32.6,71.2,-41.7,65.4C-50.8,59.7,-54.2,40.1,-61.9,23.6C-69.6,7.1,-81.7,-6.3,-81.4,-19.8C-81.1,-33.4,-68.4,-46.9,-53.3,-51.3C-38.3,-55.7,-21,-50.9,-6.4,-42.8C8.1,-34.8,23,-51.7,34.5,-47.1Z" transform="translate(100 100)" />
          </svg>
        )}
      </div>
    </section>
  );
}