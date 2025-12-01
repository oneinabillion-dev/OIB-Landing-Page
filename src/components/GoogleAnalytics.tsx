import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-20Q4DPZNZX', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;

