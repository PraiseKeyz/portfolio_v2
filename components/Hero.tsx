'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';

interface HeroProps {
  profileImage: string;
  onViewProjects?: () => void;
  onContactClick?: () => void;
}

export default function Hero({
  profileImage,
  onViewProjects,
  onContactClick,
}: HeroProps) {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const techStack = [
    { icon: FaNodeJs, color: '#339933', label: 'Node.js' },
    { icon: FaReact, color: '#61DAFB', label: 'React' },
    { icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
    { icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind' },
    { icon: SiPostgresql, color: '#336791', label: 'PostgreSQL' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]"
        >
          {/* Left Content */}
          <motion.div className="flex flex-col justify-center space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.span
                variants={fadeInUp}
                className="inline-block text-sm sm:text-base bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full font-secondary"
              >
                Welcome to my portfolio
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-primary leading-tight tracking-tight"
              >
                Creative Software{' '}
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Engineer
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl sm:text-2xl font-secondary text-gray-300 font-medium"
              >
                Building Scalable Backend Systems
              </motion.p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg text-gray-400 font-secondary leading-relaxed max-w-2xl"
            >
              Specializing in Node.js, TypeScript, and PostgreSQL. I architect robust backend systems,
              design scalable APIs, and integrate payment processors & verification platforms. Passionate
              about clean code, system design, and delivering production-ready solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onViewProjects}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black text-sm sm:text-base font-secondary font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              >
                View Experience
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base font-secondary font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 pt-6 border-t border-gray-800"
            >
              <span className="text-xs sm:text-sm font-secondary text-gray-500">
                Tech Stack
              </span>
              <div className="flex gap-4">
                {techStack.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.3 }}
                      className="relative group"
                    >
                      <Icon className="text-2xl sm:text-3xl text-gray-400 hover:text-white transition-colors" />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative">
              {/* Gradient background blur */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-300" />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full max-w-sm rounded-3xl overflow-hidden border-2 border-gray-800"
              >
                <Image
                  src={profileImage}
                  alt="Praise Adebayo"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
