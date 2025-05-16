// src/app/page.tsx
import Link from 'next/link';
import { 
  SunIcon, 
  MoonIcon, 
  ComputerDesktopIcon,
  ChartBarIcon,
  UsersIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 mb-8">
              Accessibility Engineering Leader
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight">
              Crafting Inclusive Systems with Precision and Empathy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Driving Impact for Billions of Users
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
              Leading accessibility transformation at Walmart–where every accessibility enhancement reaches a global audience of unprecedented scale. Building inclusive experiences isn't just about compliance–it's about creating technology that genuinely welcomes everyone.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm"
              >
                My Experience
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-indigo-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Trusted to Lead at Scale
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+ Years</p>
              <p className="text-gray-700 dark:text-gray-300">UX & A11y Engineering</p>
            </div>
            
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">1B+ </p>
              <p className="text-gray-700 dark:text-gray-300">Users Directly Impacted</p>
            </div>
            
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</p>
              <p className="text-gray-700 dark:text-gray-300">Fortune 100 Brands</p>
            </div>
            
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Fortune 1</p>
              <p className="text-gray-700 dark:text-gray-300">Current Leadership – Walmart Global Tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What I'm Looking For
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  I'm seeking a team that values accessibility as a foundational principle—not just a compliance checkbox. An environment where inclusive design drives innovation rather than constraining it.
                </p>
                <p>
                  My current work at walmart spans the entire accessibility ecosystem: from strategic leadership and architectural decisions to hands-on implementation and cultural transformation. I've built systems that scale across thousands of developers and billions of users
                </p>
                <p>
                  I bring executive-level accessibility perspective combined with practical engineering experience—a unique combination that helps organizations embed accessibility into their DNA rather than treating it as a surface-level concern.
                </p>
                <p>
                  Remote or hybrid roles welcome (SF Bay Area available for hybrid). I'm interested in meaningful conversations about building truly inclusive digital products.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I embed accessibility into the DNA of products, teams, and organizations—crafting scalable systems 
                that welcome every user, everywhere with intention and empathy.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <PresentationChartLineIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Strategist</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Embedding accessibility into product foundations by partnering with design systems teams, engineering leaders, and executives. Creating scalable frameworks that make accessibility the path of least resistance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <CodeBracketIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Engineer</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Implementing accessibility across diverse platforms with technical precision. Auditing, automating, and building systems that detect and prevent issues early—shifting accessibility left in the development lifecycle.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                      <UsersIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Culture Builder</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transforming how organizations think about accessibility through hands-on workshops, executive education, and team mentorship. Creating environments where inclusive design becomes intuitive rather than imposed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 dark:bg-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Elevate Your Organization's Accessibility Practice?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Let's discuss how my unique combination of strategic leadership and technical expertise can help your team create digital experiences that truly welcome everyone.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white shadow-sm"
          >
            Start a Conversation
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
