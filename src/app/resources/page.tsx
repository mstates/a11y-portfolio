  // src/app/resources/page.tsx
  import { Metadata } from 'next';
  import Link from 'next/link';
  import { BookOpenIcon, AcademicCapIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
  
  export const metadata: Metadata = {
    title: 'Accessibility Resources',
    description: 'Learn about web accessibility standards, best practices, and tools',
  };
  
  const resources = [
    {
      title: 'WCAG Guidelines Explained',
      description: 'A simplified explanation of the Web Content Accessibility Guidelines',
      icon: DocumentTextIcon,
      link: '/resources/wcag',
    },
    {
      title: 'Accessibility Fundamentals',
      description: 'Learn the basics of web accessibility and why it matters',
      icon: AcademicCapIcon,
      link: '/resources/fundamentals',
    },
    {
      title: 'Developer Handbook',
      description: 'Practical techniques for building accessible websites',
      icon: BookOpenIcon,
      link: '/resources/handbook',
    },
  ];
  
  export default function ResourcesPage() {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Accessibility Resources
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Expand your understanding of accessibility with these guides, tutorials, and references.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.link}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                  <resource.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
