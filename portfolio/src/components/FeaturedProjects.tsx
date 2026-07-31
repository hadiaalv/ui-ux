"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "VYB Energy",
    description:
      "A polished ecommerce experience with tighter hierarchy, clearer conversion pathways, and a premium visual language.",
    tags: ["Shopify", "Ecommerce", "Responsive Design"],
    image: "/vyb.png",
    year: "2025",
    liveUrl: "https://vybenergy.com.au/",
  },
  {
    title: "Get Carlo",
    description:
      "A confident digital presence that balances warmth, clarity, and strong brand storytelling for lead generation.",
    tags: ["WordPress", "Custom Theme", "SEO"],
    image: "/hom2.png",
    year: "2025",
    liveUrl: "https://getcarlo.com.au/",
  },
  {
    title: "Tia & Rose",
    description:
      "An elevated fashion-focused interface designed around storytelling, visual rhythm, and a seamless shopping flow.",
    tags: ["Shopify", "Ecommerce", "Responsive Design"],
    image: "/story.png",
    year: "2025",
    liveUrl: "https://tiaandrose.com/",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">Recent Work</p>
            <h2 className="text-3xl font-bold text-[#143f78] md:text-5xl">Featured Projects</h2>
          </div>
          <Link href="/projects" className="hidden items-center gap-2 whitespace-nowrap font-bold text-[#143f78] transition-colors hover:text-[#2b6cb0] md:inline-flex">
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="overflow-hidden rounded-[1.5rem] border border-[#dce9f8] bg-[#f9fcff] shadow-[0_18px_40px_rgba(20,63,120,0.08)]"
            >
              <div className="relative h-56 bg-[#eef6ff]">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#143f78] shadow">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#143f78]">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#4f6382]">{project.description}</p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#2b6cb0]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#143f78] transition-colors hover:text-[#2b6cb0]">
                  <ExternalLink size={16} />
                  Visit Live Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-[#143f78] px-6 py-3 font-bold text-white shadow-lg">
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
