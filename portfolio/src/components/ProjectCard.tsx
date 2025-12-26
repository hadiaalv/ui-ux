"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tags?: string[];
  index?: number;
};

export default function ProjectCard({ title, description, tags = [], index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl"
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
        >
          <span className="text-2xl">🎨</span>
        </motion.div>

        <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ExternalLink size={18} />
            Live Demo
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold"
          >
            <Github size={18} />
            Code
          </motion.a>
        </div>
      </div>

      {/* Hover Effect Corner */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileHover={{ scale: 1, rotate: 45 }}
        className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 rounded-lg"
      />
    </motion.div>
  );
}