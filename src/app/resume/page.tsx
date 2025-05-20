// src/app/resume/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Resume | Michael States',
  description: 'Professional experience and qualifications in accessibility engineering and leadership',
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Resume</h1>
          <Link 
            href="/Michael_States_Resume.pdf" 
            target="_blank"
            className="inline-flex items-center px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            Download PDF
          </Link>
        </div>
        
        {/* Resume content will go here, styled appropriately */}
        <ResumeContent />
      </div>
    </div>
  );
}

// This would be in a separate component file in practice
function ResumeContent() {
  return (
    <div className="space-y-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Professional Summary
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Experienced accessibility engineering leader with 20+ years in UX and accessibility. 
          Currently leading accessibility strategy at Walmart—the Fortune 1 company—where I shape 
          scalable, inclusive experiences across web, mobile, and native platforms, impacting over 
          a billion users globally.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
          Experience
        </h2>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-1">
              <h3 className="font-bold">Accessibility Engineering Lead</h3>
              <span className="text-gray-600 dark:text-gray-400">2020 - Present</span>
            </div>
            <div className="font-semibold mb-2">Walmart Global Tech</div>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              <li>Lead accessibility strategy across web, mobile, and native platforms</li>
              <li>Developed enterprise-wide accessibility standards and guidelines</li>
              <li>Conducted accessibility audits and remediation plans for critical products</li>
              <li>Mentored engineering teams on implementing accessible solutions</li>
              <li>Collaborated with design systems teams to embed accessibility into component libraries</li>
            </ul>
          </div>
          
          {/* Add more experience items as needed */}
        </div>
      </section>
      
      {/* Add Skills, Education, Certifications sections as needed */}
    </div>
  );
}