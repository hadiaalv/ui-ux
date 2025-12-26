"use client";

import { motion } from "framer-motion";
import { User, Award, Zap, Target } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { name: "UI/UX Design", level: 95, icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { name: "Adobe Suite", level: 90, icon: "🖌️", color: "from-purple-500 to-pink-500" },
    { name: "Figma", level: 88, icon: "📐", color: "from-green-500 to-emerald-500" },
    { name: "Web Development", level: 85, icon: "💻", color: "from-orange-500 to-red-500" },
    { name: "Illustration", level: 92, icon: "✏️", color: "from-indigo-500 to-purple-500" },
    { name: "Branding", level: 87, icon: "🎯", color: "from-pink-500 to-rose-500" },
  ];

  const achievements = [
    { icon: Award, value: "10+", label: "Years Experience", color: "from-yellow-400 to-orange-500" },
    { icon: Zap, value: "200+", label: "Projects Completed", color: "from-blue-400 to-cyan-500" },
    { icon: Target, value: "98%", label: "Client Satisfaction", color: "from-green-400 to-emerald-500" },
    { icon: User, value: "50+", label: "Happy Clients", color: "from-purple-400 to-pink-500" },
  ];

  return (
    <section className="py-32 px-6 md:px-16 min-h-screen bg-white relative overflow-hidden">
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
          className="absolute top-20 right-20 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-50 rounded-full opacity-50 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-30 blur-xl"
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <User className="text-white" size={40} />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
          >
            About{" "}
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
              Me
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="mb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl border border-blue-100 relative overflow-hidden"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-2xl"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-4 relative z-10">
            I'm a passionate <span className="font-semibold text-blue-600">full-stack developer</span> and <span className="font-semibold text-purple-600">UI/UX designer</span> with over 10 years of experience 
            in creating beautiful, functional, and user-centered digital experiences. My expertise spans 
            across modern web technologies including Next.js, React, TypeScript, and the complete Adobe Creative Suite.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed relative z-10">
            I believe in the power of good design to solve real-world problems and create meaningful 
            connections between businesses and their users. Every project is an opportunity to push 
            creative boundaries while maintaining practical usability.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map(({ icon: Icon, value, label, color }, index) => (
            <motion.div
              key={label}
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 10
              }}
              className="bg-white p-6 rounded-2xl shadow-xl text-center border-2 border-blue-100 relative overflow-hidden group"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10`}
              />
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${color} rounded-xl mb-3 shadow-lg relative`}
              >
                <Icon className="text-white" size={28} />
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {value}
              </motion.h3>
              <p className="text-gray-600 text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Skills & Expertise</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <motion.span 
                      className="text-2xl"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      {skill.icon}
                    </motion.span>
                    {skill.name}
                  </span>
                  <motion.span 
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${skill.color} font-bold text-lg`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner relative">
                  <motion.div
                    initial={{ width: 0, x: -10 }}
                    animate={{ width: `${skill.level}%`, x: 0 }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.7 + index * 0.1, 
                      ease: "easeOut" 
                    }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}