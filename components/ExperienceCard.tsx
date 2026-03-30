'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  index?: number;
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  index = 0,
}: ExperienceCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
    >
      {/* Background accent */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />

      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <FaBriefcase className="text-white text-lg" />
              <h3 className="text-lg sm:text-xl font-bold font-primary text-white">
                {role}
              </h3>
            </div>
            <p className="text-sm sm:text-base font-secondary text-gray-300 font-semibold">
              {company}
            </p>
          </div>
          <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full font-secondary whitespace-nowrap">
            {period}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 font-secondary leading-relaxed">
          {description}
        </p>

        {/* Visual separator */}
        <div className="pt-2 border-t border-gray-800 group-hover:border-gray-700 transition-colors" />
      </div>
    </motion.div>
  );
}
