// src/components/layout/Header.tsx
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';
import { Bars3Icon } from '@heroicons/react/24/outline'; // For mobile menu button

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400" aria-label="Home">
              A11y Portfolio
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-1 py-1 text-base font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-1 py-1 text-base font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-1 py-1 text-base font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="flex items-center space-x-4">
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
