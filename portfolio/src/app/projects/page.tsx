"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "UniEvent",
      description: "Campus event management platform with real-time updates using Next.js & MongoDB",
      tags: ["Next.js", "MongoDB", "TypeScript"],
    },
    {
      title: "Job Board",
      description: "Full-stack job portal with role-based authentication and advanced search",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Finance Tracker",
      description: "Track income & expenses with interactive charts and budget planning",
      tags: ["React", "Chart.js", "Firebase"],
    },
    {
      title: "E-Commerce Store",
      description: "Modern online store with cart, payments, and admin dashboard",
      tags: ["Next.js", "Stripe", "Prisma"],
    },
    {
      title: "Task Manager",
      description: "Collaborative task management with drag-and-drop functionality",
      tags: ["React", "DnD", "Redux"],
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creative professionals",
      tags: ["Next.js", "Sanity", "Tailwind"],
    },
  ];

  return (
    <section className="py-32 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg"
          >
            <Briefcase className="text-white" size={32} />
          </motion.div>

          <h2 className="text-5xl font-bold mb-4 text-gray-900">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and design approaches
          </p>
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