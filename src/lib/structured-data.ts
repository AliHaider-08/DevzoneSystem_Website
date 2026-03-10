// Structured Data generators for JSON-LD

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevZone System",
  url: "https://devzonesystem.com",
  logo: "https://devzonesystem.com/logo.png",
  description: "Empowering businesses through innovative software solutions that drive growth and efficiency.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tech Hub",
    addressLocality: "Silicon Valley",
    addressRegion: "CA",
    postalCode: "94025",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    email: "devzonesystem@gmail.com",
  },
  sameAs: [
    "https://twitter.com/devzonesystem",
    "https://linkedin.com/company/devzonesystem",
    "https://github.com/devzonesystem",
  ],
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DevZone System",
  url: "https://devzonesystem.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://devzonesystem.com/blog?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

export const generateServiceSchema = (services: { name: string; description: string; price?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "DevZone System",
      },
      offers: {
        "@type": "Offer",
        price: service.price || "Contact for pricing",
        priceCurrency: "USD",
      },
    },
  })),
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: article.image,
  author: {
    "@type": "Person",
    name: article.author,
  },
  publisher: {
    "@type": "Organization",
    name: "DevZone System",
    logo: {
      "@type": "ImageObject",
      url: "https://devzonesystem.com/logo.png",
    },
  },
  datePublished: article.publishedDate,
  dateModified: article.modifiedDate || article.publishedDate,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url,
  },
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DevZone System",
  image: "https://devzonesystem.com/logo.png",
  "@id": "https://devzonesystem.com",
  url: "https://devzonesystem.com",
  telephone: "+1-555-123-4567",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tech Hub",
    addressLocality: "Silicon Valley",
    addressRegion: "CA",
    postalCode: "94025",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://twitter.com/devzonesystem",
    "https://linkedin.com/company/devzonesystem",
    "https://github.com/devzonesystem",
  ],
});
