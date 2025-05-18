// src/components/ui/design-system.tsx
  
  // Typography
  export function Heading1({ children, className = '' }) {
    return <h1 className={`text-3xl md:text-4xl font-bold ${className}`}>{children}</h1>;
  }
  
  export function Heading2({ children, className = '' }) {
    return <h2 className={`text-2xl md:text-3xl font-bold ${className}`}>{children}</h2>;
  }
  
  export function Paragraph({ children, className = '' }) {
    return <p className={`text-base leading-relaxed ${className}`}>{children}</p>;
  }
  
  // Spacing
  export function Section({ children, className = '' }) {
    return <section className={`py-12 md:py-16 ${className}`}>{children}</section>;
  }
  
  export function Container({ children, className = '' }) {
    return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
  }
  
  // Layout
  export function Grid({ children, cols = 1, className = '' }) {
    const colsClass = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };
    
    return <div className={`grid gap-6 md:gap-8 ${colsClass[cols]} ${className}`}>{children}</div>;
  }

