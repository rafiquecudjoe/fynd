import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title = 'Fyndae - Find Lost Items & Verify Information in South Africa',
  description = 'Recover lost items in Cape Town & South Africa with Fyndae. Community-powered platform connecting people with lost belongings. Report missing items, earn rewards for verified tips.',
  keywords = 'lost and found, recover lost items, find missing items, lost property, Cape Town lost and found, South Africa lost items, verify information, community rewards, lost phone, lost wallet, missing pet',
  ogImage = 'https://fyndae.com/og-image.jpg',
  ogType = 'website',
  canonical,
  noindex = false,
}: SEOHeadProps) {
  const location = useLocation();
  const url = `https://fyndae.com${location.pathname}`;
  const canonicalUrl = canonical || url;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    
    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:site_name', 'Fyndae', true);
    updateMeta('og:locale', 'en_ZA', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:site', '@FyndaeInfo');
    updateMeta('twitter:creator', '@FyndaeInfo');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Robots meta
    if (noindex) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }

    // Canonical link
    let linkElement = document.querySelector('link[rel="canonical"]');
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }
    linkElement.setAttribute('href', canonicalUrl);

    // Geo tags for local SEO
    updateMeta('geo.region', 'ZA-WC');
    updateMeta('geo.placename', 'Cape Town');
    updateMeta('geo.position', '-33.9249;18.4241');
    updateMeta('ICBM', '-33.9249, 18.4241');

  }, [title, description, keywords, ogImage, ogType, url, canonicalUrl, noindex]);

  return null;
}
