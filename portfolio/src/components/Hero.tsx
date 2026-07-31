"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const highlights = [
    "12+ years of design experience",
    "400+ projects delivered",
    "Figma, Adobe XD & Webflow",
  ];

  return (
    <section className="pt-32 md:pt-40 pb-20 px-6 md:px-16 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative z-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/10 text-gold px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10">
            UI/UX Designer & Ecommerce Web Specialist
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Design That Converts.{" "}
            <span className="text-gold">Experiences That Perform.</span>
          </h1>

          <p className="mt-6 text-blue-100/80 text-lg leading-relaxed max-w-xl">
            I'm Hassan Riaz, a UI/UX designer with over a decade of experience
            crafting high-converting ecommerce websites, intuitive product
            interfaces, and complete brand identities for businesses
            worldwide.
          </p>

          <div className="mt-8 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                <span className="text-blue-100/90 text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-3.5 rounded-md font-bold shadow-lg hover:bg-gold-light transition-colors group"
            >
              View My Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-7 py-3.5 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[380px]">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
              <div className="relative w-full h-[420px] md:h-[480px]">
                <Image
                  src="/profile.png"
                  alt="Hassan Riaz - UI/UX Designer"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Stat badges */}
            <div className="absolute -bottom-6 -left-6 bg-white px-5 py-4 rounded-xl shadow-xl">
              <p className="text-2xl font-bold text-navy">12+</p>
              <p className="text-xs text-gray-500 font-medium">
                Years Experience
              </p>
            </div>
            <div className="absolute -top-6 -right-4 bg-white px-5 py-4 rounded-xl shadow-xl">
              <p className="text-2xl font-bold text-navy">400+</p>
              <p className="text-xs text-gray-500 font-medium">
                Projects Delivered
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
