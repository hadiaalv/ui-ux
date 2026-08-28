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
    links: ["UI/UX Design", "Web Design", "Graphic Design", "Branding & Identity"],
  },
  {
    title: "Development",
    links: ["Website Development", "E-commerce Development", "Shopify Development", "WordPress Development"],
  },
  {
    title: "Digital",
    links: ["Digital Marketing", "SEO", "Social Media Marketing", "Content Creation"],
  },
];

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`site-chrome-light fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f7fbff]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(20,63,120,0.12)] py-3"
          : "bg-[#f7fbff]/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
           <Link href="/" className="flex items-center gap-3 group ">
  <Image
    src="/Dreamital Logo 1.svg"
    alt="Dreamital Web logo"
    width={74}
    height={74}
    priority
    sizes="(max-width: 768px) 48px, 64px"
    className="h-12 w-auto sm:h-14 md:h-16 transition-transform duration-300 group-hover:scale-105"
  />
</Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      active
                        ? "nav-link-light nav-link-active"
                        : "nav-link-light"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                type="button"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                onClick={() => setIsServicesOpen((open) => !open)}
                className={`nav-link-light inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${pathname.startsWith("/services") || isServicesOpen ? "nav-link-active" : ""}`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </motion.button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="nav-dropdown absolute right-0 top-full mt-3 w-[min(680px,calc(100vw-3rem))] rounded-2xl border border-[#dceffd] bg-white p-7 shadow-[0_20px_50px_rgba(20,63,120,0.14)]"
                  >
                    <div className="mb-6 flex items-center justify-between border-b border-[#edf3fa] pb-4">
                      <p className="nav-dropdown-title text-xs font-bold uppercase tracking-[0.24em]">Services</p>
                      <span className="text-xs text-slate-400">Design. Develop. Dream.</span>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-3">
                      {serviceGroups.map((group) => (
                        <div key={group.title}>
                          <p className="nav-dropdown-category mb-3 text-[11px] font-bold uppercase tracking-[0.2em]">{group.title}</p>
                          <div className="space-y-1">
                            {group.links.map((service) => (
                              <Link
                                key={service}
                                href={`/services/${slugify(service)}`}
                                className="nav-dropdown-link block rounded-lg px-2 py-2 text-sm transition-all duration-200"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {service}
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
            <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/contact"
                className="nav-cta ml-4 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_12px_24px_rgba(20,63,120,0.18)] transition-all duration-200 group"
              >
                Let&apos;s Talk
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="md:hidden rounded-full p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-[#eaf3ff] bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-mobile-link block px-2 py-3 font-semibold transition-colors border-b border-[#f3f8ff] last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-b border-[#f3f8ff]">
                <button
                  type="button"
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen((open) => !open)}
                  className="nav-mobile-link flex w-full items-center justify-between px-2 py-3 text-left font-semibold transition-colors"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pb-3 pl-2"
                    >
                      {serviceGroups.map((group) => (
                        <div key={group.title} className="mb-4 last:mb-0">
                          <p className="nav-dropdown-category mb-1 text-[10px] font-bold uppercase tracking-[0.2em]">{group.title}</p>
                          {group.links.map((service) => (
                            <Link
                              key={service}
                              href={`/services/${slugify(service)}`}
                              onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}
                              className="nav-dropdown-link block rounded-md px-2 py-2 text-sm transition-colors"
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="nav-cta mt-3 flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-full"
              >
                Let&apos;s Talk
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
