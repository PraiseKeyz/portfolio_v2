'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGitAlt } from 'react-icons/fa';

interface HeaderProps {
  onDownloadCV?: () => void;
}

export default function Header({ onDownloadCV }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    if (onDownloadCV) {
      onDownloadCV();
    } else {
      // Default download behavior
      const link = document.createElement('a');
      link.href = '/Praise Adebayo.pdf';
      link.download = 'Praise Adebayo.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-2xl shadow-blue-500/10 border-b border-blue-500/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-xl lg:text-2xl font-bold font-primary flex items-center gap-2 cursor-pointer"
        >
          PraiseKeyz
          <span className="text-lg animate-bounce">🎹</span>
        </motion.h2>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-3 sm:px-4 py-2 bg-white text-black text-xs sm:text-sm font-secondary font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-1 cursor-pointer"
          >
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/PraiseKeyz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 border-2 border-white text-xs sm:text-sm font-secondary font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-1"
          >
            <FaGitAlt className="text-sm" />
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
