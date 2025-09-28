// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure and track performance metrics
  measure(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    this.metrics.set(name, end - start);
  }

  // Get performance metrics
  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }

  // Report metrics to analytics
  reportMetrics(): void {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      this.metrics.forEach((value, key) => {
        (window as any).gtag('event', 'performance_metric', {
          metric_name: key,
          metric_value: Math.round(value),
          custom_parameter: 'performance_monitoring'
        });
      });
    }
  }
}

// Web Vitals monitoring
export const measureWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Measure LCP (Largest Contentful Paint)
  const measureLCP = () => {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry) {
        const lcp = lastEntry.startTime;
        console.log('LCP:', lcp);
        
        if ('gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: Math.round(lcp),
            metric_rating: lcp < 2500 ? 'good' : lcp < 4000 ? 'needs_improvement' : 'poor'
          });
        }
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  };

  // Measure FID (First Input Delay)
  const measureFID = () => {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime;
        console.log('FID:', fid);
        
        if ('gtag' in window) {
          (window as any).gtag('event', 'web_vitals', {
            metric_name: 'FID',
            metric_value: Math.round(fid),
            metric_rating: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor'
          });
        }
      });
    }).observe({ entryTypes: ['first-input'] });
  };

  // Measure CLS (Cumulative Layout Shift)
  const measureCLS = () => {
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      
      console.log('CLS:', clsValue);
      
      if ('gtag' in window) {
        (window as any).gtag('event', 'web_vitals', {
          metric_name: 'CLS',
          metric_value: Math.round(clsValue * 1000) / 1000,
          metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
        });
      }
    }).observe({ entryTypes: ['layout-shift'] });
  };

  // Initialize all measurements
  measureLCP();
  measureFID();
  measureCLS();
};

// Resource loading optimization
export const optimizeResourceLoading = () => {
  if (typeof window === 'undefined') return;

  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalImages = [
      '/lovable-uploads/hero-1-trimmings.webp',
      '/lovable-uploads/hero-1-trimmings.png'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  };

  // Defer non-critical resources
  const deferNonCriticalResources = () => {
    const nonCriticalSelectors = [
      'link[rel="stylesheet"]:not([media="print"])',
      'script:not([defer]):not([async])'
    ];

    nonCriticalSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        if (element instanceof HTMLLinkElement) {
          element.media = 'print';
          element.onload = () => {
            element.media = 'all';
          };
        } else if (element instanceof HTMLScriptElement) {
          element.defer = true;
        }
      });
    });
  };

  // Initialize optimizations
  preloadCriticalResources();
  deferNonCriticalResources();
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      measureWebVitals();
      optimizeResourceLoading();
    });
  } else {
    measureWebVitals();
    optimizeResourceLoading();
  }
};
