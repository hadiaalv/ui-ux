"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { Heart, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    // { Icon: FaGithub, href: "#", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/hassan-riaz-21249a210/", label: "LinkedIn" },
    // { Icon: FaTwitter, href: "#", label: "Twitter" },
    // { Icon: FaDribbble, href: "#", label: "Dribbble" },
  ];

  return (
    <footer className="bg-blue-950 text-white py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4"
            >
              Hassan Riaz
            </motion.h3>
            <p className="text-blue-200 leading-relaxed">
              UI/UX Designer & Creative Artist with 10+ years of experience in
              creating beautiful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-4"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors inline-block hover:translate-x-2 transform duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-4"
            >
              Get In Touch
            </motion.h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:hassan@example.com"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <Mail size={18} />
                edencolours3@gmail.com
              </motion.a>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {socialLinks.map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ scale: 0, rotateZ: -180 }}
                    whileInView={{ scale: 1, rotateZ: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-white hover:text-blue-950 transition-all"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-blue-200 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Hassan Riaz. 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {/* <Heart size={16} className="text-red-400 fill-red-400" /> */}
            </motion.span>
          </p>
          <p className="text-blue-200 text-sm">
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}