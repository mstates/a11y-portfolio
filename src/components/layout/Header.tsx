// src/components/layout/Header.tsx
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';
import BrandThemeSwitcher from '@/components/theme/BrandThemeSwitcher'; // Make sure this is imported
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="relative w-full bg-[#FF5A5F] text-white py-1 text-center text-sm z-50">
  Perfectly aligned with the Staff Web Engineer, Digital Accessibility role
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400" aria-label="Home">
              Michael States
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <BrandThemeSwitcher /> {/* Add this line */}
              <ThemeSwitcher />
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}