// src/components/layout/Header.tsx
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400" aria-label="Home">
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
            
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
