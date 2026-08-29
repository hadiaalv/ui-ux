"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "VYB Energy",
    description: "A premium ecommerce experience focused on clearer product storytelling, better conversion flow, and stronger brand trust.",
    tags: ["Shopify", "Ecommerce", "Brand Experience"],
    image: "/vyb.png",
    year: "2025",
    liveUrl: "https://vybenergy.com.au/",
  },
  {
    title: "Get Carlo",
    description: "A more confident digital presence that balances warmth, clarity, and direct lead-generation messaging.",
    tags: ["WordPress", "SEO", "Conversion"],
    image: "/hom2.png",
    year: "2025",
    liveUrl: "https://getcarlo.com.au/",
  },
  {
    title: "Tia & Rose",
    description: "A refined fashion-first storefront built around elevated storytelling and a frictionless shopping journey.",
    tags: ["Shopify", "Branding", "UX"],
    image: "/story.png",
    year: "2025",
    liveUrl: "https://tiaandrose.com/",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Recent work</span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-[#0d1b2d] md:text-5xl">
              Selected projects built for momentum.
            </h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2b6cb0] transition-colors hover:text-[#143f78]">
            Explore all work
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[1.8rem] border border-[#dfeafc] bg-white shadow-[0_22px_60px_rgba(20,63,120,0.08)]"
            >
              <div className="relative h-64 overflow-hidden bg-[#eef5ff]">
                <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }} className="h-full w-full">
                  <Image src={project.image} alt={project.title} fill loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </motion.div>
                <div className="absolute right-4 top-4 rounded-full border border-[#dfeafc] bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#143f78] backdrop-blur-sm">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0d1b2d]">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#dfeafc] bg-[#f7fbff] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2b6cb0]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2b6cb0] transition-colors hover:text-[#143f78]"
                >
                  <ExternalLink size={16} />
                  Visit live site
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
