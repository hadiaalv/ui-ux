"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Sparkles, Code, Palette, ArrowRight } from "lucide-react";

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
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-16 relative overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"
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
            initial={{ scale: 0, rotateZ: -180 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border-2 border-blue-200 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} />
            </motion.div>
            UI/UX Designer & Creative Artist
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm{" "}
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
              Hassan Riaz
            </motion.span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-gray-600 text-lg leading-relaxed"
          >
            A seasoned <motion.span
              className="font-semibold text-blue-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              UI/UX graphic designer
            </motion.span> with over 10 years of experience.
            I specialize in creating stunning websites, intuitive icons, and a
            wide range of graphic elements using Adobe Illustrator, Adobe XD,
            and Photoshop.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all group"
            >
              <Code size={20} />
              View Projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgb(37, 99, 235)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold transition-all"
            >
              <Palette size={20} />
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              { Icon: FaGithub, href: "#", color: "hover:bg-gray-100" },
              { Icon: FaLinkedin, href: "#", color: "hover:bg-blue-50" },
              { Icon: FaTwitter, href: "#", color: "hover:bg-sky-50" },
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-gray-600 hover:text-blue-600 transition-all p-3 rounded-full ${color} border-2 border-transparent hover:border-blue-200 shadow-md`}
              >
                <Icon size={24} />
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
            style={{ perspective: "1000px" }}
          >
            {/* 3D Rotating Ring */}
            <motion.div
              animate={{
                rotateY: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-50"
              style={{ transformStyle: "preserve-3d" }}
            />
            
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-2xl"
            />
            
            <motion.div
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/profile.png"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full border-8 border-blue-500 shadow-2xl relative z-10 bg-white"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Floating Icons with 3D effect */}
          {[
            { Icon: Code, position: "top-0 left-0", delay: 0, color: "from-blue-500 to-blue-600" },
            { Icon: Palette, position: "top-0 right-0", delay: 0.5, color: "from-purple-500 to-purple-600" },
            { Icon: Sparkles, position: "bottom-0 left-0", delay: 1, color: "from-pink-500 to-pink-600" },
          ].map(({ Icon, position, delay, color }, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotateZ: -180 }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                y: [0, -10, 0],
              }}
              transition={{
                delay,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.3, zIndex: 50 }}
              className={`absolute ${position} bg-gradient-to-br ${color} p-4 rounded-2xl shadow-2xl cursor-pointer border-2 border-white`}
              style={{ 
                transform: "translateZ(50px)",
                transformStyle: "preserve-3d",
              }}
            >
              <Icon className="text-white" size={28} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}