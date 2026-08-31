"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const serviceGroups = [
  {
    title: "Design",
    links: [
      { label: "UI/UX Design", slug: "ui-ux-design" },
      { label: "Web Design", slug: "web-design" },
      { label: "Graphic Design", slug: "graphic-design" },
      { label: "Branding & Identity", slug: "branding-and-identity" },
    ],
  },
  {
    title: "Development",
    links: [
      { label: "Website Development", slug: "website-development" },
      { label: "E-commerce Development", slug: "e-commerce-development" },
      { label: "Shopify Development", slug: "shopify-development" },
      { label: "WordPress Development", slug: "wordpress-development" },
    ],
  },
  {
    title: "Digital",
    links: [
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "SEO", slug: "seo" },
      { label: "Social Media Marketing", slug: "social-media-marketing" },
      { label: "Content Creation", slug: "content-creation" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="bg-[#143f78] px-4 py-2 text-center text-[11px] font-medium tracking-[0.28em] text-white uppercase md:text-xs">
        Design . Develop . Dream
      </div>

      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/80 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-white/80 py-4 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-center justify-between gap-4 rounded-full border border-slate-200 bg-white/90 px-3 py-2.5 shadow-[0_12px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl md:px-4">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/Dreamital Logo 1.svg"
                alt="Dreamital Web logo"
                width={74}
                height={74}
                priority
                sizes="(max-width: 768px) 52px, 72px"
                className="h-10 w-auto md:h-12"
              />
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    pathname.startsWith("/services") || isServicesOpen
                      ? "bg-[#eef5ff] text-navy"
                      : "text-slate-700 hover:bg-slate-100 hover:text-navy"
                  }`}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full mt-4 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 rounded-[1.75rem] border border-slate-200 bg-white p-6 text-left shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl"
                    >
                      <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2b6cb0]">Services</p>
                        <span className="text-xs text-slate-500">Design. Develop. Dream.</span>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-3">
                        {serviceGroups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{group.title}</p>
                            <div className="space-y-1">
                              {group.links.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block rounded-xl px-2.5 py-2 text-sm text-slate-700 transition-colors hover:bg-[#f3f8ff] hover:text-navy"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      active ? "bg-[#eef5ff] text-navy" : "text-slate-700 hover:bg-slate-100 hover:text-navy"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link href="/contact" className="primary-button ml-2 px-5 py-2.5 text-sm">
                Let&apos;s Talk
                <ArrowRight size={16} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24 }}
              className="overflow-hidden border-t border-slate-200 bg-white/95 md:hidden backdrop-blur-xl"
            >
              <div className="mx-auto max-w-7xl space-y-1 px-6 py-5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="rounded-2xl border border-slate-200 px-3 py-3">
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen((open) => !open)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-700"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-4">
                          {serviceGroups.map((group) => (
                            <div key={group.title}>
                              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{group.title}</p>
                              <div className="space-y-1">
                                {group.links.map((service) => (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}
                                    className="block rounded-xl px-2 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-navy"
                                  >
                                    {service.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="primary-button mt-2 w-full px-5 py-3"
                >
                  Let&apos;s Talk
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
