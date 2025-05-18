// src/app/page.tsx
import Link from 'next/link';
import {  SunIcon, MoonIcon, ComputerDesktopIcon, ChartBarIcon, UsersIcon, AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import HeroSection from '@/components/sections/HeroSection';
import MetricsSection from '@/components/sections/MetricsSection';
import CompanyLogosSection from '@/components/sections/CompanyLogosSection';
import QuoteSection from '@/components/sections/QuoteSection';
import LookingForSection from '@/components/sections/LookingForSection';
import WhoIAmSection from '@/components/sections/WhoIAmSection';
import CTASection from '@/components/sections/CTASection';


export default function HomePage() {
  return (
    <div className="flex flex-col">
      <>
      <HeroSection />
      <MetricsSection />
      <CompanyLogosSection />
      <QuoteSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-gray-800">
        <LookingForSection />
        <WhoIAmSection />
      </div>
      <CTASection />
      </>
    </div>
  );
}
