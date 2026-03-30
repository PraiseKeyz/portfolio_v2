'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  icon?: ReactNode;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
  icon,
  index = 0,
}: ProjectCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
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
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden hover:border-white/50 transition-all duration-300"
    >
      {/* Background gradient on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-gray-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
        {/* Header with icon */}
        <div className="flex items-start justify-between mb-4">
          {icon && (
            <div className="text-3xl sm:text-4xl text-white group-hover:scale-110 transition-transform">
              {icon}
            </div>
          )}
        </div>

        {/* Title and Description */}
        <div className="flex-grow space-y-3 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold font-primary text-white">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 font-secondary leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-md font-secondary hover:bg-white/10 hover:text-white transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {(githubLink || liveLink) && (
          <div className="flex gap-4 pt-4 border-t border-gray-800">
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub /> Code
              </motion.a>
            )}
            {liveLink && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <FaExternalLinkAlt /> Live
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
