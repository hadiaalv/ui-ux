"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(20,63,120,0.08)] py-3"
          : "bg-white/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/Dreamital Logo 1.svg"
              alt="Dreamital Kogo.ai logo"
              width={56}
              height={56}
              className="h-10 w-auto sm:h-12 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight hidden sm:block">
              <span className="block text-base font-semibold text-[#143f78] tracking-tight">
               
              </span>
              <span className="text-sm font-medium text-gold">
                
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    active
                      ? "text-[#143f78] bg-[#edf5ff]"
                      : "text-[#2b6cb0] hover:text-[#143f78] hover:bg-[#f4f9ff]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 bg-[#143f78] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_12px_24px_rgba(20,63,120,0.18)] hover:bg-[#2b6cb0] transition-all duration-200 group"
            >
              Let&apos;s Talk
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          <button
            className="md:hidden rounded-full p-2 text-[#143f78]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                  className="block px-2 py-3 text-[#2b6cb0] font-semibold hover:text-[#143f78] transition-colors border-b border-[#f3f8ff] last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 bg-[#143f78] text-white font-semibold px-5 py-3 rounded-full"
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
