"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f0f5ff_0%,#fafbff_100%)] px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2b6cb0]">Ready when you are</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-[#0d1b2d]"
        >
          Let&apos;s shape the next step.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg leading-relaxed text-slate-600 max-w-2xl"
        >
          Whether you need a sharper website, clearer UX, or a stronger brand presence, we can turn the brief into something durable and premium.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[#143f78] px-8 py-4 font-semibold text-white shadow-[0_12px_24px_rgba(20,63,120,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f2f5f] hover:shadow-[0_16px_32px_rgba(20,63,120,0.22)]">
            Book a discovery call
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
