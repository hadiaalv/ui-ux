"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const highlights = [
    { title: "12+", text: "years of experience" },
    { title: "400+", text: "projects delivered" },
    { title: "100%", text: "thoughtful execution" },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#143f78_0%,#2b6cb0_100%)] px-6 pb-24 pt-32 md:px-16 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(255,255,255,0.35) 0, transparent 35%), radial-gradient(circle at bottom right, rgba(255,255,255,0.25) 0, transparent 30%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_60px_rgba(4,18,37,0.25)] backdrop-blur-sm md:p-12 lg:p-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-sm font-semibold text-[#dcecfb]">
            Dreamital Logo.ai • Brand & Digital Experiences
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl">
            Design that feels
            <span className="block text-[#9fd0f8]">clean, modern, and premium.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e9f4ff]">
            I craft polished web experiences, intuitive product interfaces, and strong brand systems that make businesses feel instantly confident online.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy shadow-[0_12px_30px_rgba(10,28,60,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4f9ff] group"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-white/15"
            >
              Get a Free Consultation
            </Link>
          </div>

          <div className="mt-10 grid gap-3 rounded-[1.5rem] border border-white/20 bg-white/90 p-4 shadow-sm md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[1rem] bg-[#f8fbff] p-4 text-left">
                <div className="flex items-center gap-2 text-navy">
                  <CheckCircle2 size={16} className="text-gold" />
                  <span className="text-lg font-semibold">{item.title}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
