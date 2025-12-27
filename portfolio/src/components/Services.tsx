"use client";

import { motion } from "framer-motion";
import { Palette, Code, FileText, Layers, Zap, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience",
      tags: ["Figma", "Adobe XD", "Sketch"],
      duration: "2-4 weeks",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "NFT Design",
      description: "Unique and eye-catching NFT artwork and collection design",
      tags: ["Digital Art", "Blockchain", "Collectibles"],
      duration: "1-2 weeks",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Icon Design",
      description: "Custom icon sets and design systems for web and mobile applications",
      tags: ["Vector", "SVG", "Icon Sets"],
      duration: "50+ Icons",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Layers,
      title: "Website Design",
      description: "Responsive and modern website designs that convert visitors to customers",
      tags: ["Landing Pages", "E-commerce", "Portfolios"],
      duration: "3-6 weeks",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "App Design",
      description: "Mobile-first design approach for iOS and Android applications",
      tags: ["iOS", "Android", "Cross-platform"],
      duration: "4-8 weeks",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Branding",
      description: "Complete brand identity including logos, color schemes, and style guides",
      tags: ["Logo", "Identity", "Guidelines"],
      duration: "2-3 weeks",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            whileInView={{ scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
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
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-30 blur-xl"
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <Zap className="text-white" size={40} />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
          >
            My{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto]"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Services
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Transforming ideas into stunning digital experiences with creativity and precision
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 overflow-hidden"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.1 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl`}
              />

              {/* Decorative Corner */}
              <motion.div
                animate={{
                  rotate: [0, 90, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${service.color} opacity-20 rounded-full blur-2xl`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Duration Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-semibold mb-4 shadow-md`}
                >
                  <Zap size={14} />
                  {service.duration}
                </motion.div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0, rotateZ: -180 }}
                      whileInView={{ scale: 1, rotateZ: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Shine Effect */}
              <motion.div
                initial={{ x: "-100%", y: "-100%" }}
                whileHover={{ x: "100%", y: "100%" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                style={{ transform: "translateZ(10px)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}