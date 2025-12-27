"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Get Carlo",
      description: "Business website developed using WordPress, focused on professional branding, service presentation, lead generation, and performance optimization with a responsive and user-friendly design.",
      tags: ["WordPress", "PHP", "Custom Theme", "Responsive Design", "SEO"],
      image: "/project1.jpg",
      year: "2025",
      featured: true,
    },
    {
      title: "UniEvent Platform",
      description: "Campus event management platform with real-time updates, event creation, and RSVP system using Next.js & MongoDB",
      tags: ["Next.js", "MongoDB", "TypeScript", "Real-time"],
      image: "/project2.jpg",
      year: "2024",
    },
    {
      title: "Modern Job Board",
      description: "Full-stack job portal with role-based authentication, advanced filtering, and application tracking",
      tags: ["React", "Node.js", "PostgreSQL", "Auth"],
      image: "/project3.jpg",
      year: "2024",
    },
    {
      title: "Finance Tracker Pro",
      description: "Comprehensive finance management with interactive charts, budget planning, and expense categorization",
      tags: ["React", "Chart.js", "Firebase", "Analytics"],
      image: "/project4.jpg",
      year: "2024",
    },
    {
      title: "E-Commerce Store",
      description: "Modern online store with cart, payments, and admin dashboard featuring seamless user experience",
      tags: ["Next.js", "Stripe", "Prisma", "TailwindCSS"],
      image: "/project5.jpg",
      year: "2023",
    },
    {
      title: "Task Manager Pro",
      description: "Collaborative task management with drag-and-drop functionality and team collaboration features",
      tags: ["React", "DnD", "Redux", "WebSocket"],
      image: "/project6.jpg",
      year: "2023",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-16 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
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
              <Briefcase className="text-white" size={40} />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              Projects
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            A collection of my recent work showcasing various technologies and design approaches
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}