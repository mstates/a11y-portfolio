// src/components/layout/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBrand } from '@/contexts/BrandContext';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const pathname = usePathname();
  const { isAirbnb } = useBrand();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ];
  
  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    
    return `relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive 
        ? isAirbnb 
          ? 'text-[#FF5A5F] dark:text-[#FF5A5F]' 
          : 'text-primary-600 dark:text-primary-400'
        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
    }`;
  };
  
  // Desktop navigation
  return (
    <>
      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-1">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={getLinkClasses(item.href)}
          >
            {item.name}
            {pathname === item.href && (
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                  isAirbnb ? 'bg-[#FF5A5F]' : 'bg-primary-600 dark:bg-primary-400'
                }`} 
                aria-hidden="true"
              />
            )}
          </Link>
        ))}
      </nav>
      
      {/* Mobile navigation */}
      <div className="md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button 
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Main menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
          
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 dark:divide-gray-800 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                {navigationItems.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <Link
                        href={item.href}
                        className={`${
                          active ? 'bg-gray-100 dark:bg-gray-800' : ''
                        } ${
                          pathname === item.href 
                            ? isAirbnb 
                              ? 'text-[#FF5A5F]' 
                              : 'text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}