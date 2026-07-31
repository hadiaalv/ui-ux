"use client";

import { motion } from "framer-motion";
import { Palette, Code, FileText, Layers, Zap, Smartphone } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive, user-centered interfaces backed by research and best-practice design systems.",
    tags: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    icon: Layers,
    title: "Website Design",
    description:
      "Responsive, conversion-focused website designs for ecommerce, SaaS, and service brands.",
    tags: ["Landing Pages", "Ecommerce", "Portfolios"],
  },
  {
    icon: Smartphone,
    title: "App Design",
    description:
      "Mobile-first design for iOS and Android apps that feel native and easy to use.",
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    icon: Code,
    title: "Icon & Asset Design",
    description:
      "Custom icon sets and visual asset libraries built for consistency at scale.",
    tags: ["Vector", "SVG", "Icon Sets"],
  },
  {
    icon: Zap,
    title: "Branding & Identity",
    description:
      "Complete brand identity systems — logo, palette, typography, and guidelines.",
    tags: ["Logo", "Identity", "Guidelines"],
  },
  {
    icon: FileText,
    title: "NFT & Digital Art",
    description:
      "Unique, collectible-ready digital artwork and NFT collection design.",
    tags: ["Digital Art", "Collectibles"],
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Services Built to Grow Your Brand
          </h2>
          <p className="text-gray-600 text-lg">
            From first wireframe to launch-ready design, I help businesses
            turn ideas into polished, high-performing digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-gold" size={26} />
              </div>

              <h3 className="text-xl font-bold text-navy mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors"
          >
            Discuss your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
