"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Splashgear",
      description: "High-performance ecommerce website built on Shopify, enhanced with modern JavaScript frameworks and GSAP animations for smooth user interactions. Integrated multiple global payment gateways, Cloudflare CDN for fast delivery, advanced security with hCaptcha and HSTS, and performance optimizations including lazy loading and Priority Hints.",
      tags: ["Shopify",
  "Ecommerce",
  "JavaScript",
  "GSAP",
  "Cloudflare CDN",
  "Performance Optimization",
  "hCaptcha",
  "Payment Gateway Integration",
  "SEO",
  "Open Graph"],
      image: "/1.png",
      year: "2025",
      featured: true,
      liveUrl: "https://splashgearusa.com/",
    },
    {
      title: "Future Memories",
      description: "Modern ecommerce website designed on Shopify with a strong emphasis on visual appeal, product customization, and user-friendly shopping experience. Enhanced with smooth interactive sliders, personalized product options, and conversion-focused layouts. Optimized for performance, secure transactions, and seamless analytics tracking to support data-driven marketing and business growth.",
      tags: ["UI/UX Design",
  "Shopify",
  "Ecommerce Design",
  "Product Customization",
  "Swiper Slider",
  "Branding",
  "Responsive Design",
  "Conversion Optimization",
  "Google Analytics",
  "Google Tag Manager",
  "Performance Optimization"],
      image: "/2.png",
      liveUrl: "https://futurememories.com/",
    },
    {
      title: "Earth Wood Products",
      description: "Clean and user-friendly ecommerce website designed on BigCommerce with a focus on intuitive navigation, engaging product displays, and seamless shopping experience. Enhanced with interactive sliders, responsive layouts, and smooth performance optimizations. Integrated analytics, live chat support, and A/B testing to improve user engagement and drive conversions.",
      tags: ["UI/UX Design",
  "BigCommerce",
  "Ecommerce Design",
  "Responsive Design",
  "Interactive Sliders",
  "Branding",
  "Conversion Optimization",
  "Google Analytics",
  "Google Tag Manager",
  "Live Chat",
  "A/B Testing",
  "Performance Optimization"],
      image: "/3.png",
      liveUrl: "https://www.earthwoodproducts.com//",
    },
    {
      title: "City of Games",
      description: "Sleek and modern Shopify ecommerce website designed to showcase products with a clean, visually appealing layout and seamless user experience. Features smooth interactions, responsive design, and optimized performance for fast browsing. Integrated multiple payment options, A/B testing for conversion improvements, and visual enhancements to strengthen brand presence and drive customer engagement.",
      tags: ["UI/UX Design",
  "Shopify",
  "Ecommerce Design",
  "Responsive Design",
  "Branding",
  "Conversion Optimization",
  "Payment Integration",
  "A/B Testing",
  "Performance Optimization",
  "Visual Design"],
      image: "/4.png  ",
      liveUrl: "https://www.cityofgames.com.au/",
    },
    {
      title: "Contours RX",
      description: "Sophisticated ecommerce website designed to deliver an engaging shopping experience across Shopify and BigCommerce platforms. Focused on intuitive UI, responsive layouts, and personalized product experiences to maximize customer engagement. Enhanced with interactive sliders, live chat support, robust analytics, marketing automation, and optimized performance for fast, seamless browsing. Integrated multiple secure payment options and review systems to build trust and drive conversions.",
      tags: ["UI/UX Design",
  "Shopify",
  "BigCommerce",
  "Ecommerce Design",
  "Responsive Design",
  "Interactive Sliders",
  "Branding",
  "Conversion Optimization",
  "Marketing Automation",
  "Live Chat",
  "Analytics Integration",
  "Performance Optimization",
  "Product Personalization",
  "Customer Reviews"],
      image: "/5.png",
      liveUrl: "https://contoursrx.com/",
      
    },
    {
      title: "Task Manager Pro",
      description: "Collaborative task management with drag-and-drop functionality and team collaboration features",
      tags: ["React", "DnD", "Redux", "WebSocket"],
      image: "/project6.jpg",
      
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
              className="absolute inset-0 bg-blue-400 rounded-2xl opacity-30 blur-xl"
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-20 h-20 bg-blue-950 rounded-2xl flex items-center justify-center shadow-2xl"
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
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950 bg-[length:200%_auto]"
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