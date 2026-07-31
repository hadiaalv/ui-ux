"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "VYB Energy",
    description:
      "Designed a clean, conversion-focused ecommerce experience with clear product hierarchy, intuitive navigation, and an optimized checkout flow.",
    tags: ["Shopify", "Ecommerce", "Responsive Design"],
    image: "/vyb.png",
    year: "2025",
    liveUrl: "https://vybenergy.com.au/",
  },
  {
    title: "Get Carlo",
    description:
      "A professional, approachable website with strong visual hierarchy and consistent branding to encourage lead generation.",
    tags: ["WordPress", "Custom Theme", "SEO"],
    image: "/hom2.png",
    year: "2025",
    liveUrl: "https://getcarlo.com.au/",
  },
  {
    title: "Tia & Rose",
    description:
      "A modern fashion ecommerce interface emphasizing visual storytelling and a frictionless checkout experience.",
    tags: ["Shopify", "Ecommerce", "Responsive Design"],
    image: "/story.png",
    year: "2025",
    liveUrl: "https://tiaandrose.com/",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
              Recent Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors whitespace-nowrap"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-navy shadow">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy font-bold text-sm hover:text-gold transition-colors"
                >
                  <ExternalLink size={16} />
                  Visit Live Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-md font-bold"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
