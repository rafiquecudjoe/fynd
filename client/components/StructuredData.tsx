import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'LocalBusiness' | 'Service';
  data?: Record<string, any>;
}

export default function StructuredData({ type = 'Organization', data }: StructuredDataProps) {
  useEffect(() => {
    const getSchemaData = () => {
      const baseUrl = 'https://fyndae.com';

      switch (type) {
        case 'Organization':
          return {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Fyndae',
            legalName: 'Fyndae Pty Ltd',
            url: baseUrl,
            logo: `${baseUrl}/favicon.svg`,
            description: 'Community-powered platform for recovering lost items and verifying information in South Africa',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '151 King Edward Street',
              addressLocality: 'Parow',
              postalCode: '7500',
              addressRegion: 'Western Cape',
              addressCountry: 'ZA',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -33.9249,
              longitude: 18.4241,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+27-782-027-076',
              email: 'info@fyndae.com',
              contactType: 'Customer Service',
              areaServed: 'ZA',
              availableLanguage: ['English', 'Afrikaans'],
            },
            sameAs: [
              'https://www.instagram.com/fyndae_world/',
              'https://www.linkedin.com/company/fyndae01',
              'https://x.com/FyndaeInfo',
            ],
            foundingDate: '2024',
            founders: [{
              '@type': 'Person',
              name: 'Fyndae Team',
            }],
            ...data,
          };

        case 'LocalBusiness':
          return {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${baseUrl}/#localbusiness`,
            name: 'Fyndae',
            image: `${baseUrl}/favicon.svg`,
            url: baseUrl,
            telephone: '+27-782-027-076',
            email: 'info@fyndae.com',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '151 King Edward Street',
              addressLocality: 'Parow',
              addressRegion: 'Western Cape',
              postalCode: '7500',
              addressCountry: 'ZA',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -33.9249,
              longitude: 18.4241,
            },
            openingHoursSpecification: [{
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            }],
            areaServed: {
              '@type': 'City',
              name: 'Cape Town',
            },
            ...data,
          };

        case 'WebSite':
          return {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${baseUrl}/#website`,
            url: baseUrl,
            name: 'Fyndae',
            description: 'Find lost items and verify information in South Africa',
            publisher: {
              '@type': 'Organization',
              name: 'Fyndae',
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/search?q={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
            inLanguage: 'en-ZA',
            ...data,
          };

        case 'Service':
          return {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Lost and Found Service',
            provider: {
              '@type': 'Organization',
              name: 'Fyndae',
              url: baseUrl,
            },
            areaServed: {
              '@type': 'Country',
              name: 'South Africa',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Lost Item Recovery Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Lost Item Reporting',
                    description: 'Report lost items with reward offers',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Community Tip Rewards',
                    description: 'Earn rewards for verified tips on lost items',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Information Verification',
                    description: 'Verify people and organizations',
                  },
                },
              ],
            },
            ...data,
          };

        case 'WebPage':
        default:
          return {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${baseUrl}${window.location.pathname}#webpage`,
            url: `${baseUrl}${window.location.pathname}`,
            name: document.title,
            description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
            publisher: {
              '@type': 'Organization',
              name: 'Fyndae',
            },
            inLanguage: 'en-ZA',
            ...data,
          };
      }
    };

    const schema = getSchemaData();
    const scriptId = `schema-${type.toLowerCase()}`;
    
    // Remove existing script if present
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new script
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}
