"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
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
    <footer className="site-chrome-light bg-[#eef7ff] px-6 pb-8 pt-16 text-navy md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          {/* About */}
          <div className="md:col-span-1">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link href="/#hero" className="mb-4 flex items-center gap-3">
                <Image
                  src="/Dreamital Logo 1.svg"
                  alt="Dreamital Web logo"
                  width={64}
                  height={64}
                  loading="lazy"
                  sizes="64px"
                  className="h-14 w-auto md:h-16"
                />
              </Link>
            </motion.div>
            <p className="mb-5 text-sm leading-relaxed text-slate-600">
              A modern brand and digital studio shaping premium online
              experiences with a bold, cohesive visual identity.
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
                  whileHover={{ y: -5, scale: 1.1, rotate: 10, backgroundColor: "#2b6cb0", color: "white" }}
                  transition={{ delay: index * 0.1, duration: 0.3, type: "spring" }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-navy shadow-sm transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-700">
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
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-gold hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-700">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-600">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-700">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <a
                  href="mailto:edencolours3@gmail.com"
                  className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-gold"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 transition-transform group-hover:scale-1.2" />
                  dreamital.web@gmail.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <a
                  href="tel:+923057662662"
                  className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-gold"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 transition-transform group-hover:scale-1.2" />
                  +92 305 7662 662
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex items-start gap-3 text-sm text-slate-600"
              >
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Faisalabad, Pakistan
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#d8eafc] pt-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
