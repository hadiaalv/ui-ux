"use client";

import ProjectCard from "@/components/ProjectCard";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Schema from "@/components/Schema";

const projects = [
  {
    title: "Splashgear",
    description:
      "High-performance ecommerce website built on Shopify, enhanced with modern JavaScript frameworks and GSAP animations for smooth user interactions. Integrated multiple global payment gateways, Cloudflare CDN for fast delivery, advanced security with hCaptcha and HSTS, and performance optimizations including lazy loading and Priority Hints.",
    tags: [
      "Shopify",
      "Ecommerce",
      "JavaScript",
      "GSAP",
      "Cloudflare CDN",
      "Performance Optimization",
      "hCaptcha",
      "Payment Gateway Integration",
      "SEO",
      "Open Graph",
    ],
    image: "/1.png",
    year: "2025",
    featured: true,
    liveUrl: "https://splashgearusa.com/",
  },
  {
    title: "Future Memories",
    description:
      "Modern ecommerce website designed on Shopify with a strong emphasis on visual appeal, product customization, and user-friendly shopping experience. Enhanced with smooth interactive sliders, personalized product options, and conversion-focused layouts. Optimized for performance, secure transactions, and seamless analytics tracking to support data-driven marketing and business growth.",
    tags: [
      "UI/UX Design",
      "Shopify",
      "Ecommerce Design",
      "Product Customization",
      "Swiper Slider",
      "Branding",
      "Responsive Design",
      "Conversion Optimization",
      "Google Analytics",
      "Google Tag Manager",
      "Performance Optimization",
    ],
    image: "/2.png",
    liveUrl: "https://futurememories.com/",
  },
  {
    title: "Earth Wood Products",
    description:
      "Clean and user-friendly ecommerce website designed on BigCommerce with a focus on intuitive navigation, engaging product displays, and seamless shopping experience. Enhanced with interactive sliders, responsive layouts, and smooth performance optimizations. Integrated analytics, live chat support, and A/B testing to improve user engagement and drive conversions.",
    tags: [
      "UI/UX Design",
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
      "Performance Optimization",
    ],
    image: "/3.png",
    liveUrl: "https://www.earthwoodproducts.com/",
  },
  {
    title: "City of Games",
    description:
      "Sleek and modern Shopify ecommerce website designed to showcase products with a clean, visually appealing layout and seamless user experience. Features smooth interactions, responsive design, and optimized performance for fast browsing. Integrated multiple payment options, A/B testing for conversion improvements, and visual enhancements to strengthen brand presence and drive customer engagement.",
    tags: [
      "UI/UX Design",
      "Shopify",
      "Ecommerce Design",
      "Responsive Design",
      "Branding",
      "Conversion Optimization",
      "Payment Integration",
      "A/B Testing",
      "Performance Optimization",
      "Visual Design",
    ],
    image: "/4.png",
    liveUrl: "https://www.cityofgames.com.au/",
  },
  {
    title: "Contours RX",
    description:
      "Sophisticated ecommerce website designed to deliver an engaging shopping experience across Shopify and BigCommerce platforms. Focused on intuitive UI, responsive layouts, and personalized product experiences to maximize customer engagement. Enhanced with interactive sliders, live chat support, robust analytics, marketing automation, and optimized performance for fast, seamless browsing. Integrated multiple secure payment options and review systems to build trust and drive conversions.",
    tags: [
      "UI/UX Design",
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
      "Customer Reviews",
    ],
    image: "/5.png",
    liveUrl: "https://contoursrx.com/",
  },
  {
    title: "Miss Lola",
    description:
      "Engaging Shopify ecommerce website designed with a strong focus on user experience, interactivity, and brand identity. Features smooth animations, personalized shopping experiences, and intuitive product displays. Optimized for performance, accessibility, and fast browsing with responsive layouts. Integrated secure payment options, analytics tracking, marketing automation, and wishlist functionality to enhance customer engagement and drive conversions.",
    tags: [
      "UI/UX Design",
      "Shopify",
      "Ecommerce Design",
      "Responsive Design",
      "Interactive Animations",
      "Branding",
      "Conversion Optimization",
      "Marketing Automation",
      "Analytics Integration",
      "Wishlist Functionality",
      "Accessibility",
      "Performance Optimization",
    ],
    image: "/6.png",
    liveUrl: "https://www.misslola.com/",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Schema path="/projects" />
      {/* Header */}
      <section className="bg-[linear-gradient(135deg,#143f78_0%,#2b6cb0_100%)] px-6 pb-20 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_60px_rgba(4,18,37,0.25)] backdrop-blur-sm md:p-12"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#dcecfb]">
              Portfolio
            </p>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              My Projects
            </h1>
            <p className="text-lg leading-relaxed text-[#e9f4ff]">
              A collection of recent client work spanning ecommerce, web design, and full-stack platform builds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
