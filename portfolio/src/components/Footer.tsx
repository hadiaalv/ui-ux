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
    <footer className="bg-navy-dark text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <Image
                  src="/Dreamital Logo 1.svg"
                  alt="Dreamital Kogo.ai logo"
                  width={30}
                  height={30}
                  className="h-7 w-auto"
                />
              </div>
              <span className="text-lg font-bold">Dreamital Kogo.ai</span>
            </div>
            <p className="text-blue-100/60 text-sm leading-relaxed mb-5">
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
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-blue-100/60 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:edencolours3@gmail.com"
                  className="flex items-start gap-3 text-blue-100/60 hover:text-gold transition-colors text-sm"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  edencolours3@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923057662662"
                  className="flex items-start gap-3 text-blue-100/60 hover:text-gold transition-colors text-sm"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  +92 305 7662 662
                </a>
              </li>
              <li className="flex items-start gap-3 text-blue-100/60 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Faisalabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100/50 text-sm">
            © {new Date().getFullYear()} Dreamital Kogo.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
