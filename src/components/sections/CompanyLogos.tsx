// src/components/sections/CompanyLogos.tsx
import Image from 'next/image';

export default function CompanyLogos() {
  const companies = [
    { name: 'Walmart', logo: '/images/logos/walmart.png', alt: 'Walmart logo' },
    { name: 'Nike', logo: '/images/logos/nike.png', alt: 'Nike logo' },
    { name: 'Netflix', logo: '/images/logos/netflix.png', alt: 'Netflix logo' },
    { name: 'Wells Fargo', logo: '/images/logos/wells-fargo.png', alt: 'Wells Fargo logo' },
    { name: 'AT&T', logo: '/images/logos/att.png', alt: 'AT&T logo' },
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Companies I've Worked With</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {companies.map((company) => (
          <div key={company.name} className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src={company.logo}
              alt={company.alt}
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
