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
      className="bg-[linear-gradient(135deg,#0d2b4f_0%,#143f78_100%)] py-16 px-6 md:px-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">Have a project in mind?</h2>
          <p className="text-[#dcecfb]">Let's talk about how thoughtful design can move your business forward with clarity and confidence.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/contact" className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 font-bold text-navy shadow-[0_12px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f4f9ff] hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)]">
            Get a Free Consultation
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
