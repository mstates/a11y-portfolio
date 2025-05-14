import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about my background and commitment to web accessibility',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Background</h2>
            <p className="text-lg text-gray-700 mb-4">
              I&apos;m a passionate web developer dedicated to creating digital experiences that are accessible to everyone. 
              My journey in accessibility began when I realized how many users were being excluded from the digital world due to preventable barriers.
            </p>
            <p className="text-lg text-gray-700">
              With over X years of experience in front-end development, I&apos;ve worked with organizations to implement 
              WCAG standards and create truly inclusive web applications.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Approach to Accessibility</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Designing with accessibility in mind from the start, not as an afterthought</li>
              <li>Testing with real users and assistive technologies</li>
              <li>Following WCAG 2.1 AA standards as a minimum baseline</li>
              <li>Continuous learning and staying up-to-date with best practices</li>
            </ul>
          </section>
        </div>
        
        <div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">HTML5</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">CSS3/Tailwind</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript/TypeScript</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">React/Next.js</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">ARIA</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">WCAG 2.1</span>
              </li>
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Screen Reader Testing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
