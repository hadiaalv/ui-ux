"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[linear-gradient(135deg,#0d2b4f_0%,#143f78_100%)] py-16 px-6 md:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">Have a project in mind?</h2>
          <p className="text-[#dcecfb]">Let’s talk about how thoughtful design can move your business forward with clarity and confidence.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 font-bold text-navy shadow-[0_12px_24px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4f9ff]">
          Get a Free Consultation
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
