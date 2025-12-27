"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "edencolours3@gmail.com", 
      href: "mailto:edencolours3@gmail.com"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+92 305 7662 662", 
      href: "tel:+923057662662"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Faisalabad, Pakistan", 
      href: "#"
    },
  ];

  const socialLinks = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/hassan-riaz-21249a210/", label: "LinkedIn", color: "hover:text-blue-950" },
    { Icon: FaBehance, href: "https://www.behance.net/iconsstock", label: "Behance", color: "hover:text-blue-950" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-64 md:w-96 h-64 md:h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block relative mb-6"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-blue-400 rounded-2xl opacity-30 blur-xl"
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-16 h-16 md:w-20 md:h-20 bg-blue-950 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <MessageCircle className="text-white" size={32} />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
          >
            Get In{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 bg-[length:200%_auto]"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Touch
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let's work together to create something amazing!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  x: 10,
                  boxShadow: "0 10px 30px rgba(8, 47, 73, 0.15)"
                }}
                className="flex items-center gap-4 p-4 md:p-5 bg-white border-2 border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 md:w-14 md:h-14 bg-blue-950 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <item.icon className="text-white" size={20} />
                </motion.div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-gray-500 font-medium">{item.label}</p>
                  <p className="text-sm md:text-base text-gray-900 font-semibold group-hover:text-blue-950 transition-colors break-words">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-4 md:pt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, rotateZ: -180 }}
                    animate={{ scale: 1, rotateZ: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      y: -5
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white border-2 border-blue-100 rounded-xl flex items-center justify-center text-gray-600 ${color} transition-all shadow-md hover:shadow-xl`}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6 bg-white p-6 md:p-8 rounded-3xl shadow-xl border-2 border-blue-100"
              whileHover={{ scale: 1.01 }}
            >
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 20px rgba(8, 47, 73, 0.15)" }}
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-950 focus:outline-none transition-all bg-white text-sm md:text-base"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 20px rgba(8, 47, 73, 0.15)" }}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-950 focus:outline-none transition-all bg-white text-sm md:text-base"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 20px rgba(8, 47, 73, 0.15)" }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-950 focus:outline-none transition-all bg-white min-h-[120px] md:min-h-[150px] text-sm md:text-base resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(8, 47, 73, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-950 text-white font-bold py-3 md:py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
              >
                <span>Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send size={18} />
                </motion.div>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}