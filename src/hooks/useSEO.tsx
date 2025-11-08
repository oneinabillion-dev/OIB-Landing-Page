import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const useSEO = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  breadcrumbs
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
      
      // Update meta title tag
      let metaTitle = document.querySelector('meta[name="title"]');
      if (!metaTitle) {
        metaTitle = document.createElement('meta');
        metaTitle.setAttribute('name', 'title');
        document.head.appendChild(metaTitle);
      }
      metaTitle.setAttribute('content', title);
    }

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph tags
    if (ogTitle) {
      let ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (!ogTitleTag) {
        ogTitleTag = document.createElement('meta');
        ogTitleTag.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleTag);
      }
      ogTitleTag.setAttribute('content', ogTitle);
    }

    if (ogDescription) {
      let ogDescTag = document.querySelector('meta[property="og:description"]');
      if (!ogDescTag) {
        ogDescTag = document.createElement('meta');
        ogDescTag.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescTag);
      }
      ogDescTag.setAttribute('content', ogDescription);
    }

    if (ogImage) {
      let ogImageTag = document.querySelector('meta[property="og:image"]');
      if (!ogImageTag) {
        ogImageTag = document.createElement('meta');
        ogImageTag.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageTag);
      }
      ogImageTag.setAttribute('content', ogImage);
    }

    // Add breadcrumb structured data
    if (breadcrumbs && breadcrumbs.length > 0) {
      // Remove existing breadcrumb schema
      const existingBreadcrumb = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      const breadcrumbList = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb', 'true');
      script.textContent = JSON.stringify(breadcrumbList);
      document.head.appendChild(script);

      return () => {
        const breadcrumbScript = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
        if (breadcrumbScript) {
          breadcrumbScript.remove();
        }
      };
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, breadcrumbs]);
};

