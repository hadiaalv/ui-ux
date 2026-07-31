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
    <section className="relative overflow-hidden pt-32 pb-24 px-6 md:px-16 md:pt-40 bg-linear-to-br from-navy to-gold">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top left, rgba(255,255,255,0.35) 0, transparent 35%), radial-gradient(circle at bottom right, rgba(255,255,255,0.25) 0, transparent 30%)" }} />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-[#dcecfb] border border-white/20">
            Dreamital Logo.ai • Brand & Digital Experiences
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white">
            Design that feels
            <span className="block text-[#9fd0f8]">clean, modern, and premium.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#e9f4ff]">
            I craft polished web experiences, intuitive product interfaces, and strong brand systems that make businesses feel instantly confident online.
          </p>

          <div className="mt-8 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#9fd0f8] shrink-0" />
                <span className="text-sm md:text-base text-[#eff7ff]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#143f78] shadow-[0_12px_30px_rgba(10,28,60,0.2)] hover:-translate-y-0.5 hover:bg-[#f4f9ff] transition-all duration-200 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white hover:bg-white/15 transition-all duration-200"
            >
              Get a Free Consultation
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-95">
            <div className="absolute -inset-4 rounded-[2rem] bg-white/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(4,18,37,0.25)] backdrop-blur-sm">
              <div className="relative h-105 w-full md:h-120">
                {/* <Image
                  src="/profile.png"
                  alt="Hassan Riaz - UI/UX Designer"
                  fill
                  priority
                  className="object-contain"
                /> */}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-2xl font-bold text-[#143f78]">12+</p>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6b7b91]">Years Experience</p>
            </div>
            <div className="absolute -top-6 -right-4 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-2xl font-bold text-[#143f78]">400+</p>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6b7b91]">Projects Delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
