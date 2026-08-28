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
    <section className="bg-[#0d1522] px-6 pb-20 md:px-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#dceffd] bg-white p-6 shadow-[0_16px_45px_rgba(20,63,120,0.06)] md:p-8">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-[1.25rem] border border-[#dceffd] bg-[#f5faff] p-5 text-center"
            >
              <p className="text-3xl font-bold text-navy md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600 md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
