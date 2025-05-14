  // src/components/layout/Navigation.tsx
  import Link from 'next/link';
  
  export function Navigation() {
    return (
      <nav>
        <Link href="/" prefetch>Home</Link>
        <Link href="/about" prefetch>About</Link>
        <Link href="/contact" prefetch>Contact</Link>
      </nav>
    );
  }
