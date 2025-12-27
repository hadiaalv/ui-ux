"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "VYB Energy",
       description:
  "Designed a clean, conversion-focused ecommerce experience with clear product hierarchy, intuitive navigation, and optimized checkout flow to improve usability and customer confidence across all devices.",
      tags: [
        "Shopify",
        "Ecommerce",
        "Cloudflare",
        "Payment Gateways",
        "HSTS",
        "Google Fonts",
      ],
      image: "/vyb.png",
      year: "2025",
      liveUrl: "https://vybenergy.com.au/",
    },
    {
      title: "Get Carlo",
      description:
        "Crafted a professional and approachable website with strong visual hierarchy, consistent branding, and intuitive content structure to clearly communicate services and encourage lead generation.",
      tags: ["WordPress", "PHP", "Custom Theme", "Responsive Design", "SEO"],
      image: "/hom2.png",
      year: "2025",
      liveUrl: "https://getcarlo.com.au/",
    },
    {
      title: "Tia & Rose",
      description:
        "Designed a modern fashion ecommerce interface emphasizing visual storytelling, seamless product discovery, and a frictionless checkout experience to enhance engagement and conversions.",
      tags: [
        "Shopify",
        "Ecommerce",
        "Facebook Pixel",
        "Styled-Components",
        "Payment Gateways",
        "Cloudflare",
      ],
      image: "/story.png",
      year: "2025",
      liveUrl: "https://tiaandrose.com/",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-blue-950 rounded-2xl flex items-center justify-center shadow-2xl">
              <Briefcase className="text-white" size={40} />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-800">
              Projects
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore some of my recent work showcasing real-world client projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-blue-100"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-950 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo Button */}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-blue-950 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link href="/projects">
            <button className="inline-flex items-center gap-3 bg-blue-950 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition">
              View All Projects
              <ArrowRight size={22} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
