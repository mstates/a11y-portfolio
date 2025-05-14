// src/components/features/HighChart.tsx
  import dynamic from 'next/dynamic';
  
  // Lazy load heavy components
  const ChartComponent = dynamic(() => import('@/components/charts/ChartComponent'), {
    loading: () => <div className="h-96 w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg" />,
    ssr: false, // Disable server-side rendering for client-only components
  });
  
  export function HighChart({ data }: { data: any }) {
    return <ChartComponent data={data} />;
  }
