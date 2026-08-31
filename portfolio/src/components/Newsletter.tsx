"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="px-6 py-16 md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#dfeafc] bg-[linear-gradient(135deg,#f2f8ff_0%,#ffffff_52%,#eef6ff_100%)] shadow-[0_20px_60px_rgba(20,63,120,0.08)]">
        <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-10 lg:px-12">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d6e9ff] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2b6cb0]">
              <Mail size={12} /> Newsletter
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] text-[#0d1b2d] md:text-4xl">
              Design ideas, growth insights, and practical updates.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              Receive concise thinking on branding, UX, websites, and digital growth — curated for founders and teams who want better decisions, not more noise.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[1.5rem] border border-[#dceffd] bg-white p-3 shadow-[0_18px_40px_rgba(20,63,120,0.08)]">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-full border border-[#dceffd] bg-[#f7fbff] px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#7bb6ff] focus:ring-2 focus:ring-[#dfeeff]"
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#143f78] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(20,63,120,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f2f5f]"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
