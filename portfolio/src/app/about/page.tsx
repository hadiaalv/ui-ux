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
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

const profile = {
  name: "Hassan Riaz",
  title: "UI/UX Designer & Creative Artist",
  bio: "As a skilled Graphic Designer with a focus on UI/UX, I blend creativity and user-centric design principles to craft visually captivating and intuitively functional digital experiences. My expertise lies in creating aesthetically pleasing user interfaces that seamlessly connect with users, while also considering the practicality and usability that lie at the heart of exceptional user experiences.",
  philosophy:
    "I believe in the power of good design to solve real-world problems and create meaningful connections between businesses and their users. Every project is an opportunity to push creative boundaries while maintaining practical usability.",
};

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
      <section className="pt-32 md:pt-40 pb-20 px-6 md:px-16 bg-gradient-to-b from-navy to-navy-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.7fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
              About Me
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {profile.name}
            </h1>
            <p className="text-blue-100/80 text-lg">{profile.title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-[220px] mx-auto lg:ml-auto lg:mr-0"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/profile.png"
                alt={profile.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 px-6 md:px-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon className="text-navy" size={22} />
              </div>
              <p className="text-3xl font-bold text-navy">{value}</p>
              <p className="text-gray-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-navy">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-navy">
                My Philosophy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {profile.philosophy}
              </p>
            </div>
          </motion.div>

          {/* Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit"
          >
            {expertise.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-11 h-11 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-gold" size={20} />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <div className="max-w-7xl mx-auto mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy text-center">
            Skills &amp; Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-5 rounded-xl shadow-sm text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mx-auto mb-3">
                  <skill.icon className="text-gold" size={22} />
                </div>
                <p className="text-navy text-sm font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
