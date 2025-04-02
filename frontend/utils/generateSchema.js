const companyName = 'Dexon Mechanical Solutions'

export const generateContactSchema = (contactData, config) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us",
  "description": contactData?.description || "Contact page for inquiries and support.",
  "url": `${config.public.baseURL}/contact`,
  "provider": {
    "@type": "Organization",
    "name": companyName,
    "logo": {
      "@type": "ImageObject",
      "url": `${config.public.baseURL}/logo.svg`
    }
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": contactData?.phone || "+66-123-4567",
    "contactType": "Customer Support",
    "email": contactData?.email || "info@dexon-technology.com",
    "areaServed": "TH"
  }
});

export const generateHeroSchema = (heroData, route, config) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": heroData?.title || "Hero Section",
  "description": heroData?.description || "Description of the hero section",
  "image": heroData?.media?.filename || '',
  "url": `${config.public.baseURL}${route.fullPath}`,
  "publisher": {
    "@type": "Organization",
    "name": companyName,
    "logo": {
      "@type": "ImageObject",
      "url": `${config.public.baseURL}/logo.svg`
    }
  }
});

export const generateCardSchema = (cardData, route, config) => ({
  "@context": "https://schema.org",
  "@type": cardData.type || "CreativeWork", // สามารถเป็น "Service" หรือ "WebPage" ได้
  "name": cardData.title || "Card Title",
  "description": cardData.description || "Card description",
  "image": cardData.image || '',
  "url": cardData.url || `${config.public.baseURL}${route.fullPath}`,
  "provider": {
    "@type": "Organization",
    "name": companyName,
    "logo": {
      "@type": "ImageObject",
      "url": `${config.public.baseURL}/logo.svg`
    }
  }
});

export const generateJobPostingSchema = (jobData, route, config) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": jobData?.title || '',
  "description": jobData?.description || '',
  "datePosted": jobData?.createdAt || new Date().toISOString(),
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": companyName,
    "sameAs": "https://dexon-solutions.com",
    "logo": {
      "@type": "ImageObject",
      "url": `${config.public.baseURL}/logo.svg`
    }
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thailand",
      "addressCountry": "TH"
    }
  },
  "image": jobData?.image || '',
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "THB",
    "value": {
      "@type": "QuantitativeValue",
      "value":  "Negotiable",
      "unitText": "MONTH"
    }
  },
  "directApply": true,
  "applicationContact": {
    "@type": "ContactPoint",
    "contactType": "HR",
    "email": "hr@dexon-technology.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${config.public.baseURL}${route.fullPath}`,
  },
});

export const generateBannerSchema = (bannerData, config, route) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": bannerData?.title || 'Banner Title',
  "description": bannerData?.description || 'Banner description goes here.',
  "image": '',
  "url": `${config.public.baseURL}${route.fullPath}`,
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${config.public.baseURL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": bannerData?.title || 'Banner',
        "item": `${config.public.baseURL}${route.fullPath}`
      }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": companyName,
    "logo": {
      "@type": "ImageObject",
      "url": `${config.public.baseURL}/logo.svg`
    }
  }
})

export const generateArticleSchema = (articleData, route, config) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": articleData?.title || '',
  "description": articleData?.description || '',
  "image": articleData?.image || '',
  "author": {
    "@type": "Organization",
    "name": companyName,
    "url": config.public.baseURL
  },
  "publisher": {
    "@type": "Organization",
    "name": companyName,
    "logo": {
      "@type": "ImageObject",
      "url": `${config.public.baseURL}/logo.svg`
    },
  },
  "datePublished": articleData?.createdAt || new Date().toISOString(),
  "dateModified": articleData?.updatedAt || articleData?.createdAt || new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${config.public.baseURL}${route.fullPath}`,
  },
})

export const generateNewsCollectionSchema = (newsList, config) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Our News",
  "description": "DMS provides specialized solutions to optimize pipeline performance. Our services include fabrication and installation, pre-commissioining, and repairs and modification.",
  "url": `${config.public.baseURL}/news`,
  "hasPart": newsList.map(news => ({
    "@type": "NewsArticle",
    "headline": news.content?.title || "Untitled News",
    "datePublished": news.content?.created_at || new Date().toISOString(),
    "dateModified": news.content?.updated_at || news.content?.created_at || new Date().toISOString(),
    "url": `${config.public.baseURL}/news/${news.slug}`,
    "image": news.content?.media?.filename || '',
    "author": {
      "@type": "Organization",
      "name": companyName,
      "url": config.public.baseURL
    },
    "publisher": {
      "@type": "Organization",
      "name": companyName,
      "logo": {
        "@type": "ImageObject",
        "url": `${config.public.baseURL}/logo.svg`
      }
    }
  }))
});

export const generateCareerSchema = (jobList, config) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Career Opportunities",
  "description": "Browse available job openings at Dexon Technology.",
  "url": `${config.public.baseURL}/careers`,
  "hasPart": jobList.map(job => ({
    "@type": "JobPosting",
    "title": job.content?.title || "Unknown Position",
    "description": job.content?.description || "Job description not available.",
    "image": job.content.media?.filename || '',
    "datePosted": job.content?.created_at || new Date().toISOString(),
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": companyName,
      "sameAs": config.public.baseURL,
      "logo": `${config.public.baseURL}/logo.svg`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thailand",
        "addressCountry": "TH"
      }
    },
    "directApply": true,
    "applicationContact": {
      "@type": "ContactPoint",
      "contactType": "HR",
      "email": "hr@dexon-technology.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${config.public.baseURL}/careers/positions/${job.slug}`
    }
  }))
});

export const generateOrganizationSchema = (config) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": companyName,
  "url": config.public.baseURL,
  "logo": {
    "@type": "ImageObject",
    "url": `${config.public.baseURL}/logo.svg`
  },
})
