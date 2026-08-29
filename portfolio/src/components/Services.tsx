"use client";

import { motion } from "framer-motion";
import { Palette, Code, FileText, Layers, Zap, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Research-backed interfaces, sharp visual systems, and conversion-focused product thinking.",
    tags: ["Figma", "UX Research", "Design Systems"],
  },
  {
    icon: Layers,
    title: "Website Design",
    description: "Beautiful, responsive digital experiences designed to feel premium from first scroll to final click.",
    tags: ["Landing Pages", "Brand Sites", "Ecommerce"],
  },
  {
    icon: Smartphone,
    title: "App Design",
    description: "Mobile-first journeys that translate product complexity into effortless experiences.",
    tags: ["Mobile UX", "User Flows", "Prototyping"],
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Fast, polished builds engineered for performance, clarity, and long-term flexibility.",
    tags: ["Next.js", "WordPress", "Shopify"],
  },
  {
    icon: Zap,
    title: "Branding & Identity",
    description: "Distinctive positioning and visual language that makes your business feel instantly credible.",
    tags: ["Logo", "Strategy", "Guidelines"],
  },
  {
    icon: FileText,
    title: "Digital Marketing",
    description: "Campaigns and creative direction built around real growth objectives, not vanity metrics.",
    tags: ["SEO", "Strategy", "Growth"],
  },
];

export default function Services() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-[#0d1b2d] md:text-5xl">
            Strategy, design, and digital execution for modern brands.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#dfeafc] bg-white p-6 shadow-[0_18px_55px_rgba(20,63,120,0.08)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(117,183,255,0.18),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#2b6cb0] ring-1 ring-[#d7ebff]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0d1b2d]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#dfeafc] bg-[#f7fbff] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2b6cb0]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-left md:text-center">
          <Link href="/contact" className="primary-button px-6 py-3.5 text-sm md:text-base">
            Discuss your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
