import { useState, useEffect } from 'react';
import { FaGitAlt } from 'react-icons/fa';
import myResume from '../assets/Praise Adebayo.pdf'
import { motion } from "framer-motion"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = myResume;
      link.download = 'Praise Adebayo.pdf';
      document.body.appendChild(link)
      link.click();
      document.body.removeChild(link);
    }
    return (
        <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-800/80 backdrop-blur-md shadow-lg' : 'bg-slate-800'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <motion.h2 
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold font-primary flex items-center gap-2 text-white"
          >
            PraiseKeyz <span className="text-xl animate-bounce">🎹</span>
          </motion.h2>
          
          <div className='flex items-center gap-2'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-2 sm:px-3 py-1.5 bg-purple-600 text-white text-xs sm:text-sm font-secondary rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center cursor-pointer gap-1"
            >
              <span>Download CV</span>
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
              className="px-2 sm:px-3 py-1.5 border-2 border-purple-600 text-xs sm:text-sm font-secondary rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-1 text-white"
            >
              <FaGitAlt className="text-sm sm:text-base" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
      </motion.header>
    )
}

export default Header