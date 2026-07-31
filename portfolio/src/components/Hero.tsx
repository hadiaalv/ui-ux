"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, MonitorPlay } from "lucide-react";

export default function Hero() {
  const cards = [
    { title: "Brand Systems", icon: Sparkles, text: "Identity, tone, and visual direction" },
    { title: "Digital Products", icon: MonitorPlay, text: "Websites and interfaces that convert" },
    { title: "Product Thinking", icon: Layers, text: "Refined flows from first click to action" },
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
          className="rounded-[2.2rem] border border-white/20 bg-white/10 p-8 shadow-[0_24px_70px_rgba(4,18,37,0.24)] backdrop-blur-sm md:p-10 lg:p-12"
        >
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-sm font-semibold text-[#dcecfb]">
              Dreamital Web
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Design that feels
              <span className="mt-2 block text-[#9fd0f8]">calm, refined, and unmistakably premium.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#e9f4ff]">
              I create thoughtful digital experiences with strong brand clarity, elegant interfaces, and a focus on what truly moves people.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy shadow-[0_12px_30px_rgba(10,28,60,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4f9ff]"
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
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-3 md:grid-cols-3">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-[1.25rem] border border-white/20 bg-white/95 p-4 text-left shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6ff] text-navy">
                    <Icon size={16} />
                  </div>
                  <p className="mt-3 font-semibold text-navy">{card.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{card.text}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
