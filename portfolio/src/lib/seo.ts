import type { Metadata } from "next";

export const siteConfig = {
  name: "Dreamital Web",
  title: "Dreamital Web | UI/UX Design, Creative Strategy & Digital Experiences",
  description:
    "Dreamital Web creates premium UI/UX design systems, digital experiences, and polished brand-led websites for modern businesses.",
  url: "https://dreamitalweb.com",
  locale: "en_US",
  keywords: [
    "UI/UX design",
    "web design",
    "creative strategy",
    "brand systems",
    "digital experiences",
    "portfolio",
  ],
  image: "/Dreamital Logo 1.svg",
};

export function constructMetadata(overrides: Metadata = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    applicationName: siteConfig.name,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.image],
    },
    icons: {
      icon: "/favicon.jpeg",
      shortcut: "/favicon.jpeg",
      apple: "/favicon.jpeg",
    },
    ...overrides,
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/Dreamital%20Logo%201.svg`,
    sameAs: [
      "https://www.linkedin.com/in/hassan-riaz-21249a210/",
      "https://www.behance.net/iconsstock",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "dreamital.web@gmail.com",
        telephone: "+923057662662",
        areaServed: "PK",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildWebPageSchema(path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.name,
    url: `${siteConfig.url}${path}`,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/Dreamital%20Logo%201.svg`,
    url: siteConfig.url,
    telephone: "+923057662662",

    areaServed: "Pakistan",
    priceRange: "$$",
    sameAs: [
      "https://www.linkedin.com/in/hassan-riaz-21249a210/",
      "https://www.behance.net/iconsstock",
    ],
  };
}

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "UI/UX Design, Digital Experience Design, and AI Automation",
    provider: siteConfig.name,
    areaServed: "Pakistan",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteConfig.url}/contact`,
    },
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${siteConfig.name} Contact Page`,
    url: `${siteConfig.url}/contact`,
    description: "Contact Dreamital Web for design consultations and digital project inquiries.",
  };
}
