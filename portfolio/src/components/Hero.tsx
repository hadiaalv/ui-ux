"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Sparkles, Code, Palette } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl relative z-10"
      >
        {/* LEFT TEXT */}
        <motion.div variants={itemVariants} className="md:w-1/2 space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold"
          >
            <Sparkles size={16} className="animate-pulse" />
            UI/UX Designer & Creative Artist
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold"
          >
            Hi, I'm{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Hassan Riaz
            </motion.span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
            A seasoned UI/UX graphic designer with over 10 years of experience.
            I specialize in creating stunning websites, intuitive icons, and a
            wide range of graphic elements using Adobe Illustrator, Adobe XD,
            and Photoshop.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 items-center">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              <Code size={20} />
              View Projects
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              <Palette size={20} />
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              { Icon: FaGithub, href: "#" },
              { Icon: FaLinkedin, href: "#" },
              { Icon: FaTwitter, href: "#" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={itemVariants}
          className="md:w-1/2 flex justify-center relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 blur-2xl"
            />
            <Image
              src="/profile.png"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-full border-8 border-blue-500 shadow-2xl relative z-10"
              priority
            />
          </motion.div>

          {/* Floating Icons */}
          {[
            { Icon: Code, position: "top-0 left-0", delay: 0 },
            { Icon: Palette, position: "top-0 right-0", delay: 0.5 },
            { Icon: Sparkles, position: "bottom-0 left-0", delay: 1 },
          ].map(({ Icon, position, delay }, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                delay,
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`absolute ${position} bg-white p-3 rounded-full shadow-lg`}
            >
              <Icon className="text-blue-600" size={24} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}