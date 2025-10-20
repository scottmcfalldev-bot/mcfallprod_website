import { lazy, Suspense } from 'react';

// Helper function to create lazy-loaded components with suspense fallback
export function lazyLoad(importFunc: () => Promise<{ default: React.ComponentType<any> }>, fallback: React.ReactNode = null) {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}