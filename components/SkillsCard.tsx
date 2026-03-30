'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillsCardProps {
  category: string;
  skills: string[];
  icon?: ReactNode;
  index?: number;
}

export default function SkillsCard({
  category,
  skills,
  icon,
  index = 0,
}: SkillsCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="text-2xl text-blue-400">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-bold font-primary text-white">
            {category}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full font-secondary hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
