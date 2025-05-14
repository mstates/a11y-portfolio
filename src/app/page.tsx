import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Home',
  description: 'Accessibility leader crafting inclusive digital experiences at scale',
};
export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
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
      {/* Philosophy Statement */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-light italic text-gray-900 dark:text-white max-w-4xl mx-auto">
              &quot;Accessibility isn&apos;t a layer to apply at the end—it&apos;s the language we build from the start.&quot;
            </p>
          </blockquote>
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
      {/* What I&apos;m Looking For */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What I&apos;m Looking For
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
                <p>
                  I&apos;m seeking a team that embraces accessibility as a product and cultural priority—not just a compliance box.
                  A company where inclusive design is woven into the creative process, not retrofitted afterward.
                </p>
                <p>
                  At Walmart—the Fortune 1 company—I lead accessibility strategy across web, mobile, and native platforms.
                  My work impacts over a billion users and spans audits, automation, generative AI, and hands-on collaboration
                  with engineers, designers, and execs.
                </p>
                <p>
                  I&apos;m looking to contribute at a high level—driving roadmap decisions, mentoring world-class talent,
                  and helping shape inclusive systems that scale with clarity and compassion.
                </p>
                <p>
                  Remote or hybrid (SF welcome). I&apos;m open to meaningful conversations about building more human-centered digital experiences.
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
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
      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Trusted by Global Leaders in Accessibility and Innovation
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            I currently lead accessibility initiatives at Walmart Global Tech (Fortune 1) and have previously worked
            with some of the world&apos;s most recognized brands to craft scalable, inclusive experiences across web, mobile,
            and native platforms—impacting billions of users worldwide.
          </p>
               {/* Logos placeholder - You would add actual logos here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Logo 1</span>
            </div>
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Logo 2</span>
            </div>
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Logo 3</span>
            </div>
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">Logo 4</span>
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
            Let&apos;s connect and discuss how we can create technology that truly serves everyone.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white shadow-sm"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
