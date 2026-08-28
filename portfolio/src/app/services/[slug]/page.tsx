import ServicePageContent from "@/components/ServicePageContent";

export const services = {
  "ui-ux-design": { title: "UI/UX Design", category: "Design", description: "Interfaces that make complex products feel clear, capable, and easy to use.", features: ["UX Research", "User Flows", "Wireframing", "UI Design", "Prototyping", "Design Systems", "Usability Testing"], tools: ["Figma", "Adobe XD", "Sketch"] },
  "web-design": { title: "Web Design", category: "Design", description: "Distinctive digital experiences that give modern brands a sharper point of view.", features: ["Art Direction", "Information Architecture", "Responsive Layouts", "Visual Systems", "Interaction Design", "Conversion Paths"], tools: ["Figma", "Adobe XD", "Webflow"] },
  "graphic-design": { title: "Graphic Design", category: "Design", description: "Visual assets with the clarity and consistency to make every touchpoint count.", features: ["Campaign Creative", "Marketing Assets", "Social Graphics", "Icon Systems", "Illustration", "Print Collateral"], tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"] },
  "branding-and-identity": { title: "Branding & Identity", category: "Design", description: "A memorable identity system built to stay coherent as your business grows.", features: ["Brand Strategy", "Naming Direction", "Logo Systems", "Typography", "Colour Direction", "Brand Guidelines"], tools: ["Figma", "Adobe Illustrator", "Adobe InDesign"] },
  "website-development": { title: "Website Development", category: "Development", description: "Fast, accessible websites engineered around your customers and business goals.", features: ["Frontend Development", "Backend Development", "CMS Development", "API Integration", "Performance Optimization", "Maintenance"], tools: ["JavaScript", "Next.js", "WordPress"] },
  "e-commerce-development": { title: "E-commerce Development", category: "Development", description: "Commerce experiences that remove friction from discovery through checkout.", features: ["Store Architecture", "Product Experiences", "Payment Integration", "Conversion Paths", "Analytics Setup", "Performance Optimization"], tools: ["Shopify", "BigCommerce", "Google Analytics"] },
  "shopify-development": { title: "Shopify Development", category: "Development", description: "Flexible Shopify stores shaped around your catalogue, brand, and growth plan.", features: ["Theme Development", "Custom Sections", "App Integration", "Product Customization", "Payments", "Store Optimization"], tools: ["Shopify", "Liquid", "JavaScript"] },
  "wordpress-development": { title: "WordPress Development", category: "Development", description: "Maintainable WordPress builds that keep publishing simple and performance strong.", features: ["Custom Themes", "CMS Architecture", "Plugin Integration", "Migration", "SEO Foundations", "Ongoing Support"], tools: ["WordPress", "PHP", "JavaScript"] },
  "digital-marketing": { title: "Digital Marketing", category: "Digital", description: "Focused campaigns that turn attention into meaningful, measurable momentum.", features: ["Campaign Strategy", "Audience Research", "Channel Planning", "Landing Pages", "Analytics", "Optimization"], tools: ["Google Analytics", "Google Tag Manager", "Meta"] },
  seo: { title: "SEO", category: "Digital", description: "Search foundations and content direction that help the right people find you.", features: ["Technical Audits", "Keyword Research", "On-page SEO", "Content Direction", "Schema Markup", "Performance"], tools: ["Google Search Console", "Google Analytics", "Google Tag Manager"] },
  "social-media-marketing": { title: "Social Media Marketing", category: "Digital", description: "A considered social presence that builds recognition, trust, and conversation.", features: ["Content Strategy", "Editorial Planning", "Creative Direction", "Platform Optimization", "Community Content", "Reporting"], tools: ["Meta", "Adobe Creative Suite", "Canva"] },
  "content-creation": { title: "Content Creation", category: "Digital", description: "Useful, on-brand content that gives your audience a reason to keep coming back.", features: ["Content Strategy", "Web Copy", "Campaign Concepts", "Social Content", "Visual Storytelling", "Content Systems"], tools: ["Figma", "Adobe Creative Suite", "WordPress"] },
} as const;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services] ?? services["ui-ux-design"];
  return <ServicePageContent service={service} />;
}
