"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, ShieldCheck, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Results-Driven Design",
    description:
      "Every decision is made with conversion, clarity, and user confidence in mind.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "You’ll always know where the project stands with honest updates and steady momentum.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Realistic planning and strong experience keep launches smooth and dependable.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support",
    description:
      "Design continues beyond launch, with thoughtful follow-through and practical support.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="bg-[#f5faff] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">Why Work With Us</p>
          <h2 className="mb-4 text-3xl font-bold text-[#143f78] md:text-5xl">A design partner built around momentum</h2>
          <p className="text-lg text-[#4f6382]">A decade of experience across ecommerce, SaaS, and branding — grounded in clarity, quality, and calm execution.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 20px 40px rgba(20,63,120,0.12)" }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="rounded-[1.5rem] border border-[#dceffd] bg-white p-7 shadow-[0_16px_35px_rgba(20,63,120,0.06)] transition-all duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#143f78] to-[#2b6cb0]"
              >
                <reason.icon className="text-white" size={24} />
              </motion.div>
              <motion.h3 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="mb-2 text-lg font-bold text-[#143f78]"
              >
                {reason.title}
              </motion.h3>
              <p className="text-sm leading-relaxed text-[#4f6382]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
