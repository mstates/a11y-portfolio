// src/components/layout/Header.tsx
import Link from 'next/link';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary" aria-label="Home">
              A11y Portfolio
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors px-1 py-1 text-base font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors px-1 py-1 text-base font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors px-1 py-1 text-base font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                Get In Touch
              </Link>
              
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
