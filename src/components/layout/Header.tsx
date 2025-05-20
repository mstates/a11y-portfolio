// src/components/layout/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import BrandThemeSwitcher from '@/components/theme/BrandThemeSwitcher';
import { useBrandTheme } from '@/components/theme/BrandThemeProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isAirbnb } = useBrandTheme();
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <header className="h-16 bg-white dark:bg-gray-900"/>;
  }

  // Navigation links - add Resume
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-sm backdrop-blur-sm' 
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Personal Name */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className={"flex items-center transition-colors"}
              aria-label="Michael States - Accessibility Portfolio - Home"
            >
              <span className={`text-xl md:text-2xl font-bold ${
                isAirbnb ? 'text-[#FF5A5F]' : 'text-indigo-600 dark:text-indigo-400'
              }`}>
                Michael States
              </span>
              <span className={`ml-2 text-sm hidden sm:inline-block bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full ${
                isAirbnb ? 'text-[#FF5A5F]' : 'text-gray-600 dark:text-gray-300'
              }`}>
                {isAirbnb ? 'Accessibility Engineer' : 'A11y Portfolio'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            <ul className="flex space-x-1">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className={`transition-colors px-3 py-2 text-sm font-medium rounded-md relative ${
                      pathname === item.href
                        ? isAirbnb 
                          ? 'text-[#FF5A5F] dark:text-[#FF5A5F]' 
                          : 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span 
                        className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                          isAirbnb ? 'bg-[#FF5A5F]' : 'bg-indigo-600 dark:bg-indigo-400'
                        }`} 
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center ml-6 space-x-3">
              <ThemeSwitcher />
              <BrandThemeSwitcher />
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeSwitcher />
            <BrandThemeSwitcher />
            
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-indigo-400"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? isAirbnb
                    ? 'text-[#FF5A5F] bg-gray-50 dark:bg-gray-800 dark:text-[#FF5A5F]'
                    : 'text-indigo-600 bg-gray-50 dark:bg-gray-800 dark:text-indigo-400'
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}