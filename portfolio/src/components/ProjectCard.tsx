"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  tags?: string[];
  index?: number;
  image?: string;
  year?: string;
  featured?: boolean;
};

export default function ProjectCard({ 
  title, 
  description, 
  tags = [], 
  index = 0,
  image = "/placeholder-project.jpg",
  year = "2025",
  featured = false
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {featured && (
            <motion.div
              initial={{ scale: 0, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              className="bg-blue-950 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              Featured
            </motion.div>
          )}
          <motion.div
            initial={{ scale: 0, x: 20 }}
            animate={{ scale: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-lg ml-auto flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {year}
          </motion.div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-950 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 bg-blue-950 text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Live Demo Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02, x: 5 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-blue-950 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
        >
          <ExternalLink size={18} />
          Live Demo
        </motion.a>
      </div>

      {/* Decorative Corner Element */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileHover={{ scale: 1, rotate: 45 }}
        className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-950 opacity-20 rounded-lg"
      />
    </motion.div>
  );
}