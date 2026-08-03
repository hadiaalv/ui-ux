"use client";

import { motion } from "framer-motion";
import {
  Award,
  Target,
  Palette,
  Code,
  Figma,
  Layers,
  Pen,
  Focus,
  Users,
  Briefcase,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

const profile = {
  name: "About Us",
  title: "UI/UX Designer & Creative Artist",
  bio: " Every great brand begins with a dream. At Dreamital Web, that dream was simple yet powerful: to blend creativity with technology and help businesses shine in the digital world.What started as a passion for design soon grew into a full‑scale digital studio, where imagination meets innovation. Guided by our mantra Design. Develop. Dream. we’ve built a space where ideas transform into experiences, and visions become reality.We believe every project tells a story. Whether it’s a website that connects with customers, a UI/UX design that makes interactions effortless, or a graphic identity that captures attention our mission is to craft solutions that inspire, engage, and endure.Over the years, we’ve mastered platforms like Shopify, WordPress, BigCommerce, Magento, and Volusion, ensuring businesses of all sizes can thrive online. But our work doesn’t stop at websites we also empower brands with SEO strategies, data solutions, and AI automation to stay ahead in a fast‑moving digital era.For us, success isn’t just about delivering a project it’s about building trust, creating impact, and helping our clients dream bigger. Dreamital Web is more than a company; it’s a journey of turning imagination into innovation, and innovation into growth.",
};

const services = [
  {
    label: "Graphic design services",
    text: "clean, modern, and impactful visuals.",
  },
  {
    label: "UI/UX design",
    text: "user‑focused interfaces that elevate experiences.",
  },
  {
    label: "Website design & development",
    text: "tailored solutions for Shopify, WordPress, BigCommerce, Magento, Volusion, and more.",
  },
  {
    label: "SEO optimization",
    text: "strategies that drive visibility and results.",
  },
  {
    label: "Data entry & AI automation",
    text: "efficient, smart workflows for modern businesses.",
  },
];

const skills = [
  { name: "UI/UX Design", icon: Palette },
  { name: "Adobe Suite", icon: Pen },
  { name: "Figma", icon: Figma },
  { name: "Web Development", icon: Code },
  { name: "Illustration", icon: Layers },
  { name: "Branding", icon: Focus },
];

const achievements = [
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Briefcase, value: "400+", label: "Projects Completed" },
  { icon: Target, value: "98%", label: "Client Satisfaction" },
  { icon: Users, value: "50+", label: "Happy Clients" },
];

const expertise = [
  {
    title: "Design Systems",
    description: "Creating scalable and consistent design systems",
    icon: Layers,
  },
  {
    title: "User Research",
    description: "Deep understanding of user needs and behaviors",
    icon: Users,
  },
  {
    title: "Prototyping",
    description: "Interactive prototypes for better decision making",
    icon: Figma,
  },
  {
    title: "Brand Identity",
    description: "Complete visual identity solutions",
    icon: Palette,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[linear-gradient(135deg,#143f78_0%,#2b6cb0_100%)] px-6 pb-20 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_60px_rgba(4,18,37,0.25)] backdrop-blur-sm md:p-12"
          >
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#dcecfb]"
            >
            
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-4 text-3xl font-bold text-white md:text-5xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-[#e9f4ff]"
            >
              {profile.title}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 px-6 md:px-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mx-auto mb-3"
              >
                <Icon className="text-navy" size={22} />
              </motion.div>
              <motion.p 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-3xl font-bold text-navy"
              >
                {value}
              </motion.p>
              <p className="text-gray-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(20,63,120,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-navy">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(20,63,120,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-navy">
                About Our Services
              </h3>

              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  At <span className="font-bold text-navy">Dreamital Web</span>,
                  creativity meets technology. Guided by our vision — Design.
                  Develop. Dream — we specialize in crafting digital solutions
                  that empower businesses to grow and stand out.
                </p>

                <p>Our expertise spans across:</p>

                {services.map((service) => (
                  <p key={service.label}>
                    <span className="font-bold text-navy">
                      {service.label}
                    </span>{" "}
                    — {service.text}
                  </p>
                ))}

                <p>
                  We don&apos;t just build websites — we craft digital
                  identities. Whether you&apos;re launching a brand, scaling
                  an online store, or optimizing your presence, Dreamital Web
                  is your trusted partner in turning vision into reality.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit justify-items-center"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 16px 40px rgba(20,63,120,0.12)" }}
                transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center mb-4"
                >
                  <item.icon className="text-white" size={20} />
                </motion.div>
                <motion.h4 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg font-bold text-navy mb-2"
                >
                  {item.title}
                </motion.h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01, boxShadow: "0 20px 45px rgba(20,63,120,0.08)" }}
              transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
              className="sm:col-span-2 bg-[#eef7ff] p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <h4 className="text-lg font-bold text-navy mb-3">Ready to bring this vision to life?</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We can also tie your design system to AI automation workflows, seamless brand activation, and launch-ready digital experiences that keep every part of your business moving forward.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy text-center">
            Skills &amp; Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05, boxShadow: "0 12px 30px rgba(20,63,120,0.1)" }}
                transition={{ delay: index * 0.05, duration: 0.4, type: "spring" }}
                className="bg-white p-5 rounded-xl shadow-sm text-center border border-gray-100 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mx-auto mb-3"
                >
                  <skill.icon className="text-white" size={22} />
                </motion.div>
                <p className="text-navy text-sm font-bold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <CTABanner />
    </>
  );
}