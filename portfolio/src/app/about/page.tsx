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
      <section className="bg-[linear-gradient(135deg,#143f78_0%,#2b6cb0_100%)] px-6 pb-20 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_60px_rgba(4,18,37,0.25)] backdrop-blur-sm md:p-12"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#dcecfb]">
              About Me
            </p>
            <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              {profile.name}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#e9f4ff]">
              {profile.title}
            </p>
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
                  <item.icon className="text-white" size={20} />
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
                  <skill.icon className="text-white" size={22} />
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
