"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Placeholder testimonials — replace with real client quotes when available.
const testimonials = [
  {
    quote:
      "Add a real client quote here describing the results of your work together — what changed for their business.",
    name: "Client Name",
    role: "Company / Role",
  },
  {
    quote:
      "Add a real client quote here. Specific, measurable outcomes (conversion rate, launch speed, etc.) work best.",
    name: "Client Name",
    role: "Company / Role",
  },
  {
    quote:
      "Add a real client quote here. Keep it short and focused on one clear result or experience.",
    name: "Client Name",
    role: "Company / Role",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
            Client Feedback
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Placeholder testimonials — swap these in with real client quotes
            whenever you have them ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <Quote className="text-gold mb-4" size={28} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
