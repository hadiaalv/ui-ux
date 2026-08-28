import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const services = {
  "ui-ux-design": { title: "UI/UX Design", category: "Design", description: "Thoughtful, conversion-led interfaces shaped by research and refined design systems." },
  "web-design": { title: "Web Design", category: "Design", description: "Responsive, elegant experiences for modern brands, products, and online stores." },
  "graphic-design": { title: "Graphic Design", category: "Design", description: "Clear, memorable visual assets that give every customer touchpoint more impact." },
  "branding-and-identity": { title: "Branding & Identity", category: "Design", description: "Distinctive identity systems with a confident visual language and clear storytelling." },
  "website-development": { title: "Website Development", category: "Development", description: "Fast, accessible websites built around your goals, content, and customers." },
  "e-commerce-development": { title: "E-commerce Development", category: "Development", description: "Flexible shopping experiences designed to make discovery and checkout effortless." },
  "shopify-development": { title: "Shopify Development", category: "Development", description: "Conversion-focused Shopify stores tailored to your products and brand." },
  "wordpress-development": { title: "WordPress Development", category: "Development", description: "Maintainable WordPress websites that give your team control without sacrificing polish." },
  "digital-marketing": { title: "Digital Marketing", category: "Digital", description: "Practical digital campaigns that build visibility, trust, and sustainable growth." },
  seo: { title: "SEO", category: "Digital", description: "Search strategies that help the right people discover your business." },
  "social-media-marketing": { title: "Social Media Marketing", category: "Digital", description: "Consistent, purposeful social content that turns attention into connection." },
  "content-creation": { title: "Content Creation", category: "Digital", description: "Useful, on-brand content that keeps your audience engaged across every channel." },
} as const;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services] ?? services["ui-ux-design"];

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#143f78_0%,#2b6cb0_100%)] px-6 pb-24 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#dcecfb]">{service.category}</p>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">{service.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#e9f4ff]">{service.description}</p>
        </div>
      </section>
      <section className="bg-[#f5faff] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-lg leading-relaxed text-[#4f6382]">Let&apos;s shape a digital experience that feels clear, considered, and unmistakably yours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold text-white transition-colors hover:bg-gold">
            Discuss your project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <CTABanner />
    </>
  );
}