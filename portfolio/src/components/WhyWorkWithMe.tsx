"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, ShieldCheck, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Results-Driven Design",
    description:
      "Every design decision is made with conversion and usability in mind, not just aesthetics.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "You'll always know where your project stands, with regular updates and honest timelines.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "12+ years of experience means realistic scoping and dependable delivery, every time.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Support",
    description:
      "Design isn't finished at launch — I offer post-delivery support to keep your product performing.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
            Why Work With Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            A Design Partner, Not Just a Designer
          </h2>
          <p className="text-gray-600 text-lg">
            A decade of hands-on experience across ecommerce, SaaS, and
            branding projects — built on transparency and measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5">
                <reason.icon className="text-navy" size={24} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
