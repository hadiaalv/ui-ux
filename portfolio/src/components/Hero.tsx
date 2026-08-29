"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, MonitorPlay, Gauge, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const capabilities = [
    { title: "Brand systems", text: "Identity, tone, and conversion-led visual direction" },
    { title: "Digital products", text: "Web experiences built to engage and sell" },
    { title: "Growth thinking", text: "Strategy, UX, and performance in one rhythm" },
  ];

  return (
    <section id="hero" className="relative isolate overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(117,183,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(43,108,176,0.15),transparent_32%)]" />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-80" />

      <div className="relative mx-auto max-w-7xl">
        <div className="section-shell overflow-hidden rounded-[2rem] p-6 md:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <span className="eyebrow">
                <Sparkles size={12} /> Dreamital Web
              </span>

              <h1 className="mt-6 text-4xl font-black leading-[0.92] tracking-[-0.06em] text-[#0d1b2d] md:text-6xl lg:text-[5rem]">
                Design. Develop.
                <span className="block text-[#2b6cb0]">Dream.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                We build premium digital experiences for ambitious brands — blending strategy, design, and engineering into solutions that feel clear, modern, and unmistakably credible.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/projects" className="primary-button px-6 py-3.5 text-sm md:text-base">
                  View case studies
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="secondary-button px-6 py-3.5 text-sm md:text-base">
                  Book a strategy call
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dceffd] bg-white px-3 py-2 shadow-sm">
                  <Gauge size={16} className="text-[#2b6cb0]" />
                  Strategy-led execution
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dceffd] bg-white px-3 py-2 shadow-sm">
                  <MonitorPlay size={16} className="text-[#2b6cb0]" />
                  Web, brand, and UX systems
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-[#a9d3ff]/60 blur-3xl" />
              <div className="absolute -bottom-6 right-3 h-48 w-48 rounded-full bg-[#dfeeff]/80 blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#dfeafc] bg-white p-5 shadow-[0_24px_70px_rgba(20,63,120,0.08)]">
                <div className="rounded-[1.5rem] border border-[#e7f0ff] bg-[#f8fbff] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2b6cb0]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    </div>
                    <span className="rounded-full border border-[#d7ebff] bg-[#eef5ff] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2b6cb0]">
                      Live Brief
                    </span>
                  </div>

                  <div className="rounded-[1.2rem] border border-[#dfeafc] bg-[linear-gradient(135deg,#eff6ff_0%,#f8fbff_100%)] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Campaign</p>
                        <h2 className="mt-2 text-xl font-bold text-[#0d1b2d]">Brand momentum</h2>
                      </div>
                      <div className="rounded-full border border-[#d7ebff] bg-white p-2 text-[#2b6cb0] shadow-sm">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        ["UX systems", "97%"],
                        ["Conversion lift", "+38%"],
                        ["Launch timeline", "5 weeks"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between rounded-2xl border border-[#eaf3ff] bg-white px-3 py-2.5 text-sm shadow-sm">
                          <span className="text-slate-600">{label}</span>
                          <span className="font-bold text-[#0d1b2d]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {capabilities.map((capability, index) => {
                    const Icon = [Sparkles, MonitorPlay, Layers][index];
                    return (
                      <motion.div
                        key={capability.title}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="rounded-[1.2rem] border border-[#eaf3ff] bg-[#f8fbff] p-3 shadow-sm"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf3ff] text-[#2b6cb0]">
                          <Icon size={18} />
                        </div>
                        <p className="mt-3 text-sm font-semibold text-[#0d1b2d]">{capability.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{capability.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
