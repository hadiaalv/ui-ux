"use client";

import { motion } from "framer-motion";
import { User, Award, Zap, Target } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { name: "UI/UX Design", level: 95, icon: "🎨" },
    { name: "Adobe Suite", level: 90, icon: "🖌️" },
    { name: "Figma", level: 88, icon: "📐" },
    { name: "Web Development", level: 85, icon: "💻" },
    { name: "Illustration", level: 92, icon: "✏️" },
    { name: "Branding", level: 87, icon: "🎯" },
  ];

  const achievements = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Zap, value: "200+", label: "Projects Completed" },
    { icon: Target, value: "98%", label: "Client Satisfaction" },
    { icon: User, value: "50+", label: "Happy Clients" },
  ];

  return (
    <section className="py-32 px-6 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg"
          >
            <User className="text-white" size={32} />
          </motion.div>

          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I'm a passionate full-stack developer and UI/UX designer with over 10 years of experience 
            in creating beautiful, functional, and user-centered digital experiences. My expertise spans 
            across modern web technologies including Next.js, React, TypeScript, and the complete Adobe Creative Suite.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
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
          {achievements.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center border-2 border-blue-100"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-3"
              >
                <Icon className="text-white" size={24} />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
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
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}