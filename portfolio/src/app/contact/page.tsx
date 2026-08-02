"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Schema from "@/components/Schema";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dreamital.web@gmail.com",
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

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };

  return (
    <>
      <Schema path="/contact" />
      {/* Header */}
      <section className="bg-[linear-gradient(135deg,#143f78_0%,#2b6cb0_100%)] px-6 pb-20 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_60px_rgba(4,18,37,0.25)] backdrop-blur-sm md:p-12"
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#dcecfb]"
            >
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 text-3xl font-bold text-white md:text-5xl"
            >
              Let&apos;s Start a Project
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg leading-relaxed text-[#e9f4ff]"
            >
              Have a project in mind? Let&apos;s work together to create something amazing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-navy mb-4">
              Contact Information
            </h3>

            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 12px 30px rgba(20,63,120,0.12)" }}
                transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                className="group flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <item.icon className="text-white" size={20} />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">
                    {item.label}
                  </p>
                  <motion.p
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="text-navy font-semibold break-words"
                  >
                    {item.value}
                  </motion.p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-4"
            >
              <h4 className="text-sm font-bold text-navy mb-4 uppercase tracking-widest">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.1, rotate: 10, boxShadow: "0 8px 20px rgba(20,63,120,0.15)" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4, type: "spring" }}
                    className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-navy hover:bg-navy hover:text-gold transition-colors shadow-sm"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              whileHover={{ boxShadow: "0 16px 40px rgba(20,63,120,0.1)" }}
              transition={{ duration: 0.3 }}
              className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "#2b6cb0" }}
                  transition={{ duration: 0.2 }}
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-navy focus:outline-none transition-all duration-200 text-sm"
                  placeholder="Your Name"
                  required
                  aria-label="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, borderColor: "#2b6cb0" }}
                  transition={{ duration: 0.2 }}
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-navy focus:outline-none transition-all duration-200 text-sm"
                  placeholder="your@email.com"
                  required
                  aria-label="Your email"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: "#2b6cb0" }}
                  transition={{ duration: 0.2 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-navy focus:outline-none transition-all duration-200 min-h-[140px] text-sm resize-none"
                  placeholder="Your message..."
                  required
                  aria-label="Your message"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(20,63,120,0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="submit"
                disabled={status === "sending"}
                className="group w-full bg-navy text-white font-bold py-3.5 px-8 rounded-lg hover:bg-navy-dark transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                {status !== "sending" && (
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-medium text-green-600"
                >
                  <CheckCircle size={16} /> Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-medium text-red-600"
                >
                  <AlertCircle size={16} /> Something went wrong. Please try again.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
}