"use client";

import { motion } from "framer-motion";
import { User, Award, Zap, Target, Palette, Code, Figma, Layers, Pen, Focus, Users, Briefcase } from "lucide-react";

export default function AboutPage() {
  // Update these with your actual information
  const profile = {
    name: "Hassan Riaz",
    title: "UI/UX Designer & Creative Artist",
    bio: "As a skilled Graphic Designer with a focus on UI/UX, I blend creativity and user-centric design principles to craft visually captivating and intuitively functional digital experiences. My expertise lies in creating aesthetically pleasing user interfaces that seamlessly connect with users, while also considering the practicality and usability that lie at the heart of exceptional user experiences.",
    philosophy: "I believe in the power of good design to solve real-world problems and create meaningful connections between businesses and their users. Every project is an opportunity to push creative boundaries while maintaining practical usability.",
    location: "Faisalabad, Pakistan",
    email: "hassan@example.com",
  };

  const skills = [
    { name: "UI/UX Design", icon: Palette, color: "from-blue-500 to-cyan-500" },
    { name: "Adobe Suite", icon: Pen, color: "from-purple-500 to-pink-500" },
    { name: "Figma", icon: Figma, color: "from-green-500 to-emerald-500" },
    { name: "Web Development", icon: Code, color: "from-orange-500 to-red-500" },
    { name: "Illustration", icon: Layers, color: "from-indigo-500 to-purple-500" },
    { name: "Branding", icon: Focus, color: "from-pink-500 to-rose-500" },
  ];

  const achievements = [
    { icon: Award, value: "12+", label: "Years Experience", description: "Decade of design excellence" },
    { icon: Briefcase, value: "400+", label: "Projects Completed", description: "Successful deliveries" },
    { icon: Target, value: "98%", label: "Client Satisfaction", description: "Happy clients rate" },
    { icon: Users, value: "50+", label: "Happy Clients", description: "Trusted partnerships" },
  ];

  const expertise = [
    { title: "Design Systems", description: "Creating scalable and consistent design systems", icon: Layers },
    { title: "User Research", description: "Deep understanding of user needs and behaviors", icon: Users },
    { title: "Prototyping", description: "Interactive prototypes for better decision making", icon: Figma },
    { title: "Brand Identity", description: "Complete visual identity solutions", icon: Palette },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-64 md:w-96 h-64 md:h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
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
              className="relative w-16 h-16 md:w-20 md:h-20 bg-blue-950 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <User className="text-white" size={32} />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
          >
            About{" "}
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
              Me
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            {profile.title}
          </motion.p>
        </motion.div>

        {/* Achievements Grid - Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {achievements.map(({ icon: Icon, value, label, description }, index) => (
            <motion.div
              key={label}
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
              }}
              className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl text-center border-2 border-blue-100 relative overflow-hidden group"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-blue-950"
              />
              
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-950 rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-lg relative"
              >
                <Icon className="text-white" size={24} />
              </motion.div>
              
              <motion.h3 
                className="text-2xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {value}
              </motion.h3>
              <p className="text-gray-900 text-sm md:text-base font-semibold mb-1">{label}</p>
              <p className="text-gray-500 text-xs md:text-sm">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-2 border-blue-100 relative overflow-hidden"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 right-0 w-32 h-32 bg-blue-950 rounded-full opacity-5 blur-2xl"
              />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-950 relative z-10">
                Who I Am
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed relative z-10">
                {profile.bio}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-2 border-blue-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-950">
                My Philosophy
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {profile.philosophy}
              </p>
            </motion.div>
          </motion.div>

          {/* Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-fit"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ scale: 0, rotateY: -180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border-2 border-blue-100 relative overflow-hidden group"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-950"
                />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-blue-950 rounded-xl mb-3 shadow-lg relative"
                >
                  <item.icon className="text-white" size={20} />
                </motion.div>
                
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 relative">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base relative">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900 text-center">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  rotateY: 10
                }}
                className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl text-center border-2 border-blue-100 relative overflow-hidden group"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-950"
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-950 rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-lg relative"
                >
                  <skill.icon className="text-white" size={24} />
                </motion.div>
                
                <p className="text-gray-900 text-xs md:text-sm font-bold relative">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}