import type { MetadataRoute } from "next";

const serviceSlugs = [
  "ui-ux-design",
  "web-design",
  "graphic-design",
  "branding-and-identity",
  "website-development",
  "e-commerce-development",
  "shopify-development",
  "wordpress-development",
  "digital-marketing",
  "seo",
  "social-media-marketing",
  "content-creation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dreamitalweb.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
