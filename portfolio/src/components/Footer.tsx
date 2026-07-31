"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

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
];

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-8 pt-16 text-navy md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          {/* About */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/Dreamital Logo 1.svg"
                alt="Dreamital Logo.ai logo"
                width={64}
                height={64}
                className="h-14 w-auto md:h-16"
              />
            </div>
            <p className="mb-5 text-sm leading-relaxed text-slate-600">
              A modern brand and digital studio shaping premium online
              experiences with a bold, cohesive visual identity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f4f8fe] text-navy transition-colors hover:bg-gold hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-700">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-gold"
                  >
                    {link.name}
                  </Link>
                </li>
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
              <li>
                <a
                  href="mailto:edencolours3@gmail.com"
                  className="flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-gold"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  edencolours3@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923057662662"
                  className="flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-gold"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  +92 305 7662 662
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Faisalabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
