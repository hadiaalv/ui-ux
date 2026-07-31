"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "400+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Happy Clients" },
];

export default function StatsBar() {
  return (
    <section className="bg-[linear-gradient(135deg,#143f78_0%,#2b6cb0_100%)] py-14 px-6 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm"
          >
            <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-[#e9f4ff] md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
