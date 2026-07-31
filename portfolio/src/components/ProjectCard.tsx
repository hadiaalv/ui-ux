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
  featured?: boolean;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tags = [],
  index = 0,
  image = "/placeholder-project.jpg",
  featured = false,
  liveUrl = "#",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold shadow">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-navy">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 5).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live Demo Button */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-navy-dark transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
