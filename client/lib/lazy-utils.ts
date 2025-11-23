import { lazy, ComponentType, LazyExoticComponent } from 'react';

/**
 * Enhanced lazy loading with retry logic
 * Handles network failures and provides better UX
 */

interface RetryOptions {
  maxRetries?: number;
  retryDelay?: number;
}

export function lazyWithRetry<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: RetryOptions = {}
): LazyExoticComponent<T> {
  const { maxRetries = 3, retryDelay = 1000 } = options;

  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      let retries = 0;

      const attemptImport = () => {
        importFunc()
          .then(resolve)
          .catch((error) => {
            if (retries < maxRetries) {
              retries++;
              console.warn(`Retry ${retries}/${maxRetries} for lazy component`, error);
              setTimeout(attemptImport, retryDelay * retries);
            } else {
              console.error('Failed to load component after retries', error);
              reject(error);
            }
          });
      };

      attemptImport();
    });
  });
}

/**
 * Preload a lazy component
 * Useful for prefetching routes or components before they're needed
 */
export function preloadComponent<T extends ComponentType<any>>(
  Component: LazyExoticComponent<T>
): void {
  // Access the _payload to trigger loading
  // This is an internal React API but widely used
  const payload = (Component as any)._payload;
  if (payload && payload._status === -1) {
    payload._result();
  }
}

/**
 * Create a lazy component with prefetch on hover
 */
export function lazyWithPrefetch<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) {
  let componentModule: Promise<{ default: T }> | null = null;

  const prefetch = () => {
    if (!componentModule) {
      componentModule = importFunc();
    }
    return componentModule;
  };

  const LazyComponent = lazy(() => {
    if (!componentModule) {
      componentModule = importFunc();
    }
    return componentModule;
  });

  return { Component: LazyComponent, prefetch };
}
