"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The new site feels like us now: clear, confident, and so much easier for our customers to navigate.",
    name: "Maya Chen",
    city: "Melbourne, VIC",
    initials: "MC",
    color: "#d5e8dc",
  },
  {
    quote:
      "Every detail was considered, and the whole process felt calm, collaborative, and genuinely enjoyable.",
    name: "Jordan Ellis",
    city: "Brisbane, QLD",
    initials: "JE",
    color: "#f4d7c8",
  },
  {
    quote:
      "We launched with a brand presence that finally matches the quality of the work we do behind the scenes.",
    name: "Sofia Patel",
    city: "Sydney, NSW",
    initials: "SP",
    color: "#d9ddf3",
  },
  {
    quote:
      "The new design made our offer feel instantly more premium. We noticed the difference in enquiries right away.",
    name: "Liam Brooks",
    city: "Adelaide, SA",
    initials: "LB",
    color: "#f1e4b8",
  },
  {
    quote:
      "Thoughtful, responsive, and sharp. We now have a digital experience we are proud to send people to.",
    name: "Amelia Ross",
    city: "Perth, WA",
    initials: "AR",
    color: "#d4e7e7",
  },
];

export default function Testimonials() {
  const cards = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-[#f7fbff] py-10 md:py-12" aria-labelledby="testimonials-heading">
      <div className="mx-auto mb-8 max-w-7xl px-6 text-center md:mb-10 md:px-16">
        <motion.h2
          id="testimonials-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-[-0.06em] text-[#0d1b2d] md:text-6xl"
        >
          What people are saying
        </motion.h2>
      </div>

      <div className="marquee-shell" role="region" aria-label="Customer testimonials">
        <div className="marquee-track">
          {cards.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              aria-hidden={index >= testimonials.length}
              className="flex w-[min(78vw,300px)] shrink-0 flex-col rounded-2xl border border-[#e2ebfb] bg-white p-6 shadow-[0_18px_45px_rgba(20,63,120,0.06)] sm:w-[min(42vw,320px)] lg:w-[min(21vw,316px)]"
            >
              <div className="mb-5 flex gap-1 text-[#e2ad39]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} className="fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mb-7 min-h-[88px] flex-1 text-[15px] leading-7 text-slate-600">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-3 border-t border-[#edf3ff] pt-5">
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#143f78]"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="font-bold text-[#0d1b2d]">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.city}</p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] font-bold tracking-[0.12em] text-[#2f7a5d]">
                    <Check size={12} strokeWidth={3} aria-hidden="true" /> VERIFIED BUYER
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
