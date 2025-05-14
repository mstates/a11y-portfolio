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
              Driving Impact for Over a Billion Users
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
              Currently leading accessibility strategy at Walmart—the Fortune 1 company—where I shape scalable, 
              inclusive experiences across web, mobile, and native platforms.
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
              <p className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+</p>
              <p className="text-gray-700 dark:text-gray-300">Years in UX & A11y Engineering</p>
            </div>
            
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">1B+</p>
              <p className="text-gray-700 dark:text-gray-300">Users Impacted</p>
            </div>
            
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</p>
              <p className="text-gray-700 dark:text-gray-300">Fortune 100 Brands Advised</p>
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
                  I'm seeking a team that embraces accessibility as a product and cultural priority—not just a compliance box. 
                  A company where inclusive design is woven into the creative process, not retrofitted afterward.
                </p>
                <p>
                  At Walmart—the Fortune 1 company—I lead accessibility strategy across web, mobile, and native platforms. 
                  My work impacts over a billion users and spans audits, automation, generative AI, and hands-on collaboration 
                  with engineers, designers, and execs.
                </p>
                <p>
                  I'm looking to contribute at a high level—driving roadmap decisions, mentoring world-class talent, 
                  and helping shape inclusive systems that scale with clarity and compassion.
                </p>
                <p>
                  Remote or hybrid (SF welcome). I'm open to meaningful conversations about building more human-centered digital experiences.
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
                      Embedding accessibility into scalable foundations by partnering with design systems, 
                      frameworks, and leadership across global platforms.
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
                      Auditing, coding, and testing accessibility across web, mobile, and native platforms—with a 
                      focus on precision, empathy, and shift-left best practices.
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
                      Mentoring world-class teams, leading accessibility workshops, and fostering a culture 
                      where inclusion is a default, not an afterthought.
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
            Ready to Build More Inclusive Digital Experiences?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Let's connect and discuss how we can create technology that truly serves everyone.
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
