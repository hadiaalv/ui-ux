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
      "Thoughtful, conversion-led interfaces shaped by research and refined design systems.",
    tags: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    icon: Layers,
    title: "Website Design",
    description:
      "Responsive, elegant experiences for ecommerce, SaaS, and modern service brands.",
    tags: ["Landing Pages", "Ecommerce", "Portfolios"],
  },
  {
    icon: Smartphone,
    title: "App Design",
    description:
      "Mobile-first journeys that feel intuitive, premium, and effortless to use.",
    tags: ["iOS", "Android", "Cross-platform"],
  },
  {
    icon: Code,
    title: "Icon & Asset Design",
    description:
      "Custom icon systems and visual assets that stay consistent across every touchpoint.",
    tags: ["Vector", "SVG", "Icon Sets"],
  },
  {
    icon: Zap,
    title: "Branding & Identity",
    description:
      "Complete identity systems with a confident visual language and clear storytelling.",
    tags: ["Logo", "Identity", "Guidelines"],
  },
  {
    icon: FileText,
    title: "NFT & Digital Art",
    description:
      "High-end digital artwork and collectible-ready visual concepts with standout presence.",
    tags: ["Digital Art", "Collectibles"],
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#f4f8fe]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">
            What I Offer
          </p>
          <h2 className="mb-4 text-3xl font-bold text-[#143f78] md:text-5xl">
            Services shaped for modern brands
          </h2>
          <p className="text-lg text-[#4f6382]">
            From strategy to launch, We build polished digital products that are both beautiful and highly effective.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="group rounded-[1.5rem] border border-[#dce9f8] bg-white/90 p-8 shadow-[0_18px_45px_rgba(20,63,120,0.08)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#143f78] to-[#2b6cb0] shadow-md">
                <service.icon className="text-white" size={26} />
              </div>

              <h3 className="mb-2 text-xl font-bold text-[#143f78]">{service.title}</h3>

              <p className="mb-5 text-sm leading-relaxed text-[#4f6382] md:text-base">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#eef6ff] px-3 py-1 text-xs font-medium text-[#2b6cb0]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-[#143f78] transition-colors hover:text-[#2b6cb0]">
            Discuss your project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
