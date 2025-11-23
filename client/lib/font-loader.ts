/**
 * Font Loading Optimization
 * Loads Google Fonts with font-display: swap to prevent FOIT (Flash of Invisible Text)
 * Improves First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
 */

export function loadOptimizedFonts() {
  // Check if fonts are already loaded
  if (document.querySelector('link[href*="fonts.googleapis.com"]')) {
    return;
  }

  // Create font stylesheet with optimized parameters
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
  
  // Add to head
  document.head.appendChild(fontLink);
}

// Auto-load fonts when module is imported
if (typeof window !== 'undefined') {
  // Use requestIdleCallback for non-critical font loading
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadOptimizedFonts);
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(loadOptimizedFonts, 1);
  }
}
