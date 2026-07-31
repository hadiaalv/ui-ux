"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The experience felt thoughtful from start to finish; the new site immediately gave the brand a more premium and polished presence.",
    name: "Client Name",
    role: "Brand Director",
  },
  {
    quote:
      "The design system made everything feel more coherent, and the launch happened with clarity and confidence.",
    name: "Client Name",
    role: "Founder",
  },
  {
    quote:
      "Every interaction felt intentional, and the final result elevated both trust and conversion.",
    name: "Client Name",
    role: "Marketing Lead",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f4f8fe] py-24 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">Client Feedback</p>
          <h2 className="mb-4 text-3xl font-bold text-[#143f78] md:text-5xl">What clients say</h2>
          <p className="text-lg text-[#4f6382]">A calm, collaborative process that leaves brands feeling more confident online.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: 2 }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="flex flex-col rounded-[1.5rem] border border-[#dce9f8] bg-white p-8 shadow-[0_16px_40px_rgba(20,63,120,0.06)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(20,63,120,0.12)]"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                <Quote className="mb-4 text-[#2b6cb0]" size={28} />
              </motion.div>
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Star size={16} className="fill-[#2b6cb0] text-[#2b6cb0]" />
                  </motion.div>
                ))}
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[#4f6382]">"{t.quote}"</p>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-bold text-[#143f78]">{t.name}</p>
                <p className="text-sm text-[#6b7b91]">{t.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
