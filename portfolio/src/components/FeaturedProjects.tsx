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
    <section className="bg-[#f5faff] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">Recent Work</p>
            <h2 className="text-3xl font-bold text-[#143f78] md:text-5xl">Featured Projects</h2>
          </div>
          
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 2, rotateY: 2 }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="group overflow-hidden rounded-[1.5rem] border border-[#dceffd] bg-white shadow-[0_18px_40px_rgba(20,63,120,0.08)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(20,63,120,0.15)]"
            >
              <div className="relative h-56 bg-[#eef6ff] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full"
                >
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#143f78] shadow"
                >
                  {project.year}
                </motion.div>
              </div>

              <div className="p-6">
                <motion.h3 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mb-2 text-xl font-bold text-[#143f78]"
                >
                  {project.title}
                </motion.h3>
                <p className="mb-4 text-sm leading-relaxed text-[#4f6382]">{project.description}</p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span 
                      key={tag}
                      whileHover={{ scale: 1.1, backgroundColor: "#2b6cb0", color: "white" }}
                      transition={{ duration: 0.2 }}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#2b6cb0] cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#143f78] transition-colors hover:text-[#2b6cb0]"
                >
                  <ExternalLink size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  Visit Live Site
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full bg-[#143f78] px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#1d6fd3] hover:shadow-xl hover:-translate-y-1">
            View All Projects
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
