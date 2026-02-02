// Structured Data generators for JSON-LD

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HaiderTech",
  url: "https://haidertech.com",
  logo: "https://haidertech.com/logo.png",
  description: "Transform your ideas into powerful digital solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Tech Street",
    addressLocality: "Silicon Valley",
    addressRegion: "CA",
    postalCode: "94000",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-234-567-890",
    contactType: "customer service",
    email: "hello@haidertech.com",
  },
  sameAs: [
    "https://twitter.com/haidertech",
    "https://linkedin.com/company/haidertech",
    "https://github.com/haidertech",
  ],
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HaiderTech",
  url: "https://haidertech.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://haidertech.com/blog?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

export const generateServiceSchema = (services: { name: string; description: string; price: string }[]) => ({
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
        name: "HaiderTech",
      },
      offers: {
        "@type": "Offer",
        price: service.price,
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
    name: "HaiderTech",
    logo: {
      "@type": "ImageObject",
      url: "https://haidertech.com/logo.png",
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
  name: "HaiderTech",
  image: "https://haidertech.com/logo.png",
  "@id": "https://haidertech.com",
  url: "https://haidertech.com",
  telephone: "+1-234-567-890",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Tech Street",
    addressLocality: "Silicon Valley",
    addressRegion: "CA",
    postalCode: "94000",
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
    "https://twitter.com/haidertech",
    "https://linkedin.com/company/haidertech",
    "https://github.com/haidertech",
  ],
});
