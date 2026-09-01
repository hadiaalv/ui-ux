"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/hassan-riaz-21249a210/",
    label: "LinkedIn",
  },
  {
    Icon: FaBehance,
    href: "https://www.behance.net/iconsstock",
    label: "Behance",
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "UI/UX Design",
  "Website Design",
  "App Design",
  "Branding & Identity",
  "AI Automation",
];

export default function Footer() {
  return (
    <footer className="bg-[#081827] px-6 pb-6 pt-10 text-white md:px-16 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Link href="/" className="mb-4 flex items-center gap-3">
                <Image
                  src="/Dreamital Logo 1.svg"
                  alt="Dreamital Web logo"
                  width={64}
                  height={64}
                  loading="lazy"
                  sizes="64px"
                  className="logo-invert h-14 w-auto md:h-16"
                />
              </Link>
            </motion.div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-slate-300">
              A premium digital studio shaping memorable online experiences with strategy, clarity, and craftsmanship.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.08, rotate: 8 }}
                  transition={{ delay: index * 0.08, duration: 0.25, type: "spring" }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:border-[#8ec6ff] hover:bg-[#143f78]"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link href={link.href} className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white">
                    <ArrowUpRight size={14} className="text-[#8ec6ff]" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.3 }}>
                <a href="mailto:dreamital.web@gmail.com" className="group flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-white">
                  <Mail size={16} className="mt-0.5 shrink-0 text-[#8ec6ff] transition-transform group-hover:scale-110" />
                  dreamital.web@gmail.com
                </a>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.3 }}>
                <a href="tel:+923057662662" className="group flex items-start gap-3 text-sm text-slate-300 transition-colors hover:text-white">
                  <Phone size={16} className="mt-0.5 shrink-0 text-[#8ec6ff] transition-transform group-hover:scale-110" />
                  +92 305 7662 662
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Dreamital Web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
