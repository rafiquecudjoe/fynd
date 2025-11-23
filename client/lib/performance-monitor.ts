/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals: LCP, FID/INP, CLS
 * Provides actionable insights for performance optimization
 */

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window === 'undefined') return;
    this.initObservers();
  }

  private initObservers() {
    // Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS();
    
    // First Input Delay (FID) / Interaction to Next Paint (INP)
    this.observeINP();
    
    // Long Tasks
    this.observeLongTasks();
  }

  private observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        const value = lastEntry.renderTime || lastEntry.loadTime;
        this.recordMetric('LCP', value, this.rateLCP(value));
      });
      
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      this.observers.push(observer);
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }
  }

  private observeCLS() {
    try {
      let clsValue = 0;
      
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        
        this.recordMetric('CLS', clsValue, this.rateCLS(clsValue));
      });
      
      observer.observe({ type: 'layout-shift', buffered: true });
      this.observers.push(observer);
    } catch (e) {
      console.warn('CLS monitoring not supported');
    }
  }

  private observeINP() {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any) {
          const duration = entry.processingEnd - entry.processingStart;
          this.recordMetric('INP', duration, this.rateINP(duration));
        }
      });
      
      observer.observe({ type: 'event', buffered: true, durationThreshold: 40 } as any);
      this.observers.push(observer);
    } catch (e) {
      // Fallback to FID if INP not available
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entry = list.getEntries()[0] as any;
          const value = entry.processingStart - entry.startTime;
          this.recordMetric('FID', value, this.rateFID(value));
        });
        
        fidObserver.observe({ type: 'first-input', buffered: true });
        this.observers.push(fidObserver);
      } catch (e2) {
        console.warn('INP/FID monitoring not supported');
      }
    }
  }

  private observeLongTasks() {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`, entry);
          }
        }
      });
      
      observer.observe({ type: 'longtask', buffered: true });
      this.observers.push(observer);
    } catch (e) {
      console.warn('Long task monitoring not supported');
    }
  }

  private recordMetric(name: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') {
    const metric: PerformanceMetric = {
      name,
      value,
      rating,
      timestamp: Date.now(),
    };
    
    this.metrics.push(metric);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';
      console.log(`${emoji} ${name}: ${value.toFixed(2)}ms (${rating})`);
    }
    
    // Send to analytics in production
    this.sendToAnalytics(metric);
  }

  private sendToAnalytics(metric: PerformanceMetric) {
    // Integrate with Google Analytics, Sentry, or custom analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.value),
        metric_rating: metric.rating,
        metric_value: metric.value,
      });
    }
  }

  private rateLCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  private rateCLS(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  private rateINP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 200) return 'good';
    if (value <= 500) return 'needs-improvement';
    return 'poor';
  }

  private rateFID(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getLatestMetric(name: string): PerformanceMetric | undefined {
    return [...this.metrics].reverse().find(m => m.name === name);
  }

  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Expose to window for debugging
if (typeof window !== 'undefined') {
  (window as any).__performanceMonitor = performanceMonitor;
}
