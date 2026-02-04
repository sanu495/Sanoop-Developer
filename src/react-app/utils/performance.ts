// Performance monitoring utilities for Core Web Vitals

export function reportWebVitals() {
  if (typeof window === 'undefined') return;

  // Measure and log Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log to console in development
      if (import.meta.env.DEV) {
        console.log(`[Performance] ${entry.name}:`, entry);
      }
    }
  });

  // Observe various performance metrics
  try {
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  } catch (e) {
    // Ignore if not supported
  }
}

// Lazy load images with Intersection Observer
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px',
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Prefetch on hover for better perceived performance
export function setupPrefetch() {
  const links = document.querySelectorAll('a[data-prefetch]');
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('http')) {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
      }
    }, { once: true });
  });
}

// Debounce utility for performance-sensitive operations
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility for scroll/resize handlers
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
