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
    <section className="bg-navy py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-gold">
              {stat.value}
            </p>
            <p className="text-blue-100/70 text-sm md:text-base mt-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
