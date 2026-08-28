"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type Service = {
  title: string;
  category: string;
  description: string;
  features: readonly string[];
  tools: readonly string[];
};

const process = [
  ["01", "Discover", "We clarify the audience, ambition, and constraints."],
  ["02", "Strategize", "We turn the brief into a focused direction."],
  ["03", "Design", "We explore, refine, and make the idea tangible."],
  ["04", "Develop", "We build the experience with care and speed."],
  ["05", "Test", "We review the details and remove friction."],
  ["06", "Launch & Optimize", "We help the work perform beyond launch day."],
] as const;

const reasons = ["A strategic point of view", "Direct, transparent communication", "Pixel-aware execution", "Support that continues after launch"];

export default function ServicePageContent({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    `How long does a ${service.title.toLowerCase()} project take?`,
    "What do you need from us to get started?",
    "How involved will we be during the process?",
    "Do you provide ongoing support after launch?",
  ];

  return (
    <main className="bg-[#080d15] text-[#edf5ff]">
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-32 md:px-16 md:pb-32 md:pt-44">
        <div className="pointer-events-none absolute -right-24 top-20 size-80 rounded-full bg-[#2b6cb0]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#78baff]"><Sparkles size={14} /> {service.category}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.03em] md:text-7xl">{service.title}<span className="text-[#78baff]">.</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-7 max-w-2xl text-lg leading-8 text-[#9eb1c9]">{service.description}</motion.p>
            <div className="mt-9 flex flex-wrap gap-4"><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#78baff] px-6 py-3.5 font-bold text-[#07101d] transition-transform hover:-translate-y-1">Start a conversation <ArrowRight size={18} /></Link><Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-[#78baff] hover:text-[#78baff]">See selected work</Link></div>
          </div>
          <div className="relative min-h-64 rounded-[2rem] border border-[#78baff]/25 bg-[#0e1b2d] p-8 shadow-[0_0_70px_rgba(43,108,176,0.16)]"><div className="flex h-full min-h-48 flex-col justify-between"><span className="text-sm text-[#9eb1c9]">Dreamital Web / {service.category}</span><div><p className="mt-3 max-w-xs text-sm leading-6 text-[#9eb1c9]">A design and development partner for ambitious digital work.</p></div></div></div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-16 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#78baff]">The opportunity</p><h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">Make the next interaction feel inevitable.</h2></div><div className="max-w-2xl"><p className="text-lg leading-8 text-[#9eb1c9]">Good {service.title.toLowerCase()} balances a clear business goal with a clear human experience. We bring strategy, craft, and implementation together so the final work is not only beautiful, but useful in the real world.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{reasons.map((reason) => <div key={reason} className="flex items-center gap-3 border-t border-white/10 py-4 text-sm font-semibold"><Check size={17} className="text-[#78baff]" /> {reason}</div>)}</div></div></div></section>
  <section className="bg-[#0d1522] px-6 py-20 md:px-16 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#78baff]">What we do</p><div className="mt-6 grid gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3">{service.features.map((feature, index) => <motion.div key={feature} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="border-b border-white/10 py-6"><span className="mr-4 text-sm text-[#78baff]">0{index + 1}</span><span className="text-lg font-semibold">{feature}</span></motion.div>)}</div></div></section>

      <section className="px-6 py-20 md:px-16 md:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#78baff]">How we work</p><h2 className="mt-4 text-3xl font-bold md:text-5xl">A clear route from brief to better.</h2></div><p className="max-w-sm text-sm leading-6 text-[#9eb1c9]">The rhythm adapts to the service, but the standard stays high.</p></div><div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6">{process.map(([number, title, text]) => <div key={number} className="bg-[#0d1522] p-5"><span className="text-sm text-[#78baff]">{number}</span><h3 className="mt-10 font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#9eb1c9]">{text}</p></div>)}</div></div></section>

      <section className="border-y border-white/10 bg-[#0d1522] px-6 py-16 md:px-16"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#78baff]">Tools we use</p><p className="mt-3 text-[#9eb1c9]">Selected for the job, never for decoration.</p></div><div className="flex flex-wrap gap-3">{service.tools.map((tool) => <span key={tool} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold">{tool}</span>)}</div></div></section>

      <section className="px-6 py-20 md:px-16 md:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#78baff]">Selected work</p><div className="mt-8 grid gap-6 md:grid-cols-3">{["Splashgear", "Future Memories", "Earth Wood Products"].map((project, index) => <Link href="/projects" key={project} className="group min-h-48 rounded-2xl border border-white/10 bg-[#0d1522] p-6 transition-colors hover:border-[#78baff]/50"><span className="text-sm text-[#78baff]">0{index + 1} / CASE STUDY</span><h3 className="mt-16 text-xl font-bold transition-colors group-hover:text-[#78baff]">{project}</h3><p className="mt-2 text-sm text-[#9eb1c9]">E-commerce experience</p></Link>)}</div></div></section>

      <section className="bg-[#0d1522] px-6 py-20 md:px-16"><div className="mx-auto max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#78baff]">Questions</p><h2 className="mt-4 text-3xl font-bold md:text-5xl">Before we begin.</h2><div className="mt-10">{faqs.map((question, index) => <div key={question} className="border-b border-white/10"><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left font-semibold">{question}<ChevronDown size={18} className={`shrink-0 text-[#78baff] transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="pb-6 pr-10 text-sm leading-7 text-[#9eb1c9]">We will shape the scope together, share clear milestones, and keep feedback focused so the work moves forward with confidence.</p>}</div>)}</div></div></section>
      <section className="relative overflow-hidden px-6 py-24 md:px-16 md:py-32"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(43,108,176,0.3),transparent_40%)]" /><div className="relative mx-auto max-w-5xl text-center"><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#78baff]">Ready when you are</p><h2 className="mt-5 text-4xl font-bold md:text-6xl">Have a project in mind?</h2><p className="mx-auto mt-5 max-w-xl text-lg text-[#9eb1c9]">Let&apos;s turn the right idea into a digital experience that stands out.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#78baff] px-7 py-3.5 font-bold text-[#07101d] transition-transform hover:-translate-y-1">Start a project <ArrowRight size={18} /></Link></div></section>
    </main>
  );
}
