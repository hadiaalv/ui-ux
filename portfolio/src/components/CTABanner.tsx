"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-navy-dark py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Have a project in mind?
          </h2>
          <p className="text-blue-100/70">
            Let's talk about how thoughtful design can move your business
            forward.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-3.5 rounded-md font-bold shadow-lg hover:bg-gold-light transition-colors whitespace-nowrap"
        >
          Get a Free Consultation
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
