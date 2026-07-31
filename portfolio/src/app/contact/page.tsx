"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "edencolours3@gmail.com",
    href: "mailto:edencolours3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 305 7662 662",
    href: "tel:+923057662662",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Faisalabad, Pakistan",
    href: "#",
  },
];

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-20 px-6 md:px-16 bg-gradient-to-b from-navy to-navy-dark">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
              Contact
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Let's Start a Project
            </h1>
            <p className="text-blue-100/80 text-lg">
              Have a project in mind? Let's work together to create something
              amazing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-navy mb-4">
              Contact Information
            </h3>

            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-gold" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">
                    {item.label}
                  </p>
                  <p className="text-navy font-semibold break-words">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="pt-4">
              <h4 className="text-sm font-bold text-navy mb-4 uppercase tracking-widest">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-navy hover:bg-navy hover:text-gold transition-colors shadow-sm"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-navy focus:outline-none transition-colors text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-navy focus:outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-navy focus:outline-none transition-colors min-h-[140px] text-sm resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy text-white font-bold py-3.5 px-8 rounded-lg hover:bg-navy-dark transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
