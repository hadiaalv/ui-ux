import Script from "next/script";
import {
  buildBreadcrumbSchema,
  buildContactPageSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildServiceSchema,
  buildWebPageSchema,
  buildWebsiteSchema,
} from "@/lib/seo";

export default function Schema({ path = "/" }: { path?: string }) {
  const organization = buildOrganizationSchema();
  const website = buildWebsiteSchema();
  const page = buildWebPageSchema(path);
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: "https://dreamital.com/" },
    { name: path === "/" ? "Home" : path.replace(/\//g, " ").trim(), url: `https://dreamitalweb.com${path}` },
  ]);
  const localBusiness = buildLocalBusinessSchema();
  const service = buildServiceSchema();
  const contact = buildContactPageSchema();

  return (
    <>
      <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organization)}
      </Script>
      <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(website)}
      </Script>
      <Script id="webpage-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(page)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(localBusiness)}
      </Script>
      <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(service)}
      </Script>
      <Script id="contact-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(contact)}
      </Script>
    </>
  );
}
