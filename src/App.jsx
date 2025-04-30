import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaLinkedin, FaFacebook, FaTwitter,  FaHandshake, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaBriefcase, FaWhatsapp } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPython, SiMongodb } from 'react-icons/si';
import praise from './assets/praise.jpeg';
import { motion } from 'framer-motion';
import myResume from './assets/myresume.pdf'
import './App.css'

function App() {
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

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-[#efefed]'
        }`}
      >
        <div className="container mx-auto px-3 py-3 flex justify-between items-center">
          <motion.h2 
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold font-primary flex items-center gap-2"
          >
            PraiseKeyz <span className="text-xl animate-bounce">🎹</span>
          </motion.h2>
          
          <div className='flex items-center gap-2'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-2 sm:px-3 py-1.5 bg-black text-white text-xs sm:text-sm font-secondary rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center cursor-pointer gap-1"
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
              className="px-2 sm:px-3 py-1.5 border-2 border-black text-xs sm:text-sm font-secondary rounded-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-1"
            >
              <FaGitAlt className="text-sm sm:text-base" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </div>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='min-h-screen bg-[#efefed] pt-16 sm:pt-20 rounded-b-[50px]'
      >
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-15"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex-1 space-y-6 sm:space-y-8 text-left"
            >
              <div className="space-y-3 sm:space-y-4">
                <motion.span 
                  variants={fadeInUp}
                  className="inline-block text-sm font-secondary md:text-base bg-black text-white px-4 py-2 rounded-full"
                >
                  Welcome to my portfolio
                </motion.span>
                <motion.h1 
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-primary leading-tight tracking-tight"
                >
                  Creative Software{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-500 animate-gradient">
                    Engineer
                  </span>
                </motion.h1>
                <motion.span 
                  variants={fadeInUp}
                  className="block text-lg sm:text-xl font-secondary md:text-2xl text-black font-medium"
                >
                  Building Digital Excellence
                </motion.span>
              </div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg text-gray-700 font-secondary leading-relaxed max-w-2xl text-left"
              >
                I'm a software engineer with a passion for creating innovative solutions. 
                Specializing in full-stack development, I transform complex problems into 
                elegant, user-friendly applications. With expertise in modern technologies 
                and a keen eye for detail, I bridge the gap between creative design and 
                technical excellence.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap items-start gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-sm sm:text-base font-secondary rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  View Projects
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-black text-sm sm:text-base font-secondary rounded-lg transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Contact Me
                </motion.button>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-4 sm:gap-6 pt-4"
              >
                <span className="text-sm font-secondary text-gray-600">Tech Stack |</span>
                <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl text-gray-700">
                  <motion.div whileHover={{ scale: 1.2, color: '#61DAFB' }}>
                    <FaReact className="transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: '#339933' }}>
                    <FaNodeJs className="transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: '#3178C6' }}>
                    <SiTypescript className="transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: '#06B6D4' }}>
                    <SiTailwindcss className="transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: '#47A248' }}>
                    <SiMongodb className="transition-colors" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative mt-8 md:mt-0"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-black to-gray-500 rounded-bl-[50px] sm:rounded-bl-[70px] rounded-tr-[50px] sm:rounded-tr-[80px] blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={praise} 
                alt="Profile" 
                className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-auto aspect-square object-cover rounded-bl-[50px] sm:rounded-bl-[70px] rounded-tr-[50px] sm:rounded-tr-[80px] border-2 border-black mx-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        className="py-20 px-6 "
      >
        <div className="container mx-auto">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="text-4xl font-primary font-bold mb-12"
          >
            My Services
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Frontend Development Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="text-blue-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-600 font-secondary">
                Crafting responsive and intuitive user interfaces with modern frameworks and pixel-perfect design implementation.
              </p>
            </motion.div>

            {/* Backend Development Card */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="text-green-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                ⚙️
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4">Backend Development</h3>
              <p className="text-gray-600 font-secondary">
                Building robust server-side applications with scalable architecture and efficient database management.
              </p>
            </motion.div>

            {/* Full Stack Development Card */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="text-purple-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4">Full Stack Development</h3>
              <p className="text-gray-600 font-secondary">
                End-to-end application development combining frontend finesse with backend expertise.
              </p>
            </motion.div>

            {/* ML Engineering Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="text-red-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🧠
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4">ML Engineering</h3>
              <p className="text-gray-600 font-secondary">
                Developing intelligent solutions using machine learning algorithms and data-driven approaches to solve complex problems.
              </p>
            </motion.div>

            {/* Cloud Computing Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="text-cyan-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                ☁️
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4">Cloud Computing</h3>
              <p className="text-gray-600 font-secondary">
                Architecting and deploying scalable cloud solutions using AWS, Azure, or GCP for optimal performance and reliability.
              </p>
            </motion.div>

            {/* DevOps Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="text-orange-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🔄
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4">DevOps Engineering</h3>
              <p className="text-gray-600 font-secondary">
                Implementing CI/CD pipelines and automating deployment processes for seamless software delivery and operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        id='projects'
        className="py-20 px-6 bg-[#efefed] rounded-t-[50px] rounded-b-[50px]"
      >
        <div className="container mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-primary font-bold mb-12"
          >
            Projects
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Project Card 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-primary font-bold">Learn Whitehouse</h3>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="www.learnwhitehouse.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 font-secondary">An interactive learning platform with course management, student tracking, and real-time assessment features.</p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">React</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">TailwindCSS</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">MongoDB</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Node.Js</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Express.Js</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">AI model</motion.span>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-primary font-bold">PaySub VTU Platform</h3>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://pay-sub.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 font-secondary">A virtual top-up platform for airtime, data bundles, and utility bill payments with secure payment integration.</p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">React</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Node.js</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">MongoDB</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Express</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">TailwindCSS</motion.span>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-primary font-bold">Bookstore API</h3>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://documenter.getpostman.com/view/28772794/2s9YsT5TDQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 font-secondary">A RESTful API for managing bookstore operations with authentication, CRUD operations, and comprehensive documentation.</p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Node.js</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Express</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">MongoDB</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">JWT</motion.span>
              </div>
            </motion.div>

                        {/* Project card 4 */}
                        <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-primary font-bold">Text-to-Speech App</h3>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://text-to-speech-app-praisekeys.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 font-secondary">A web application that converts text input into natural-sounding speech with multiple voice options and language support.</p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">React</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Web Speech API</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">CSS</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">JavaScript</motion.span>
              </div>
            </motion.div>

            {/* Project card 5 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-primary font-bold">RAG-Enhanced LLM</h3>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/PraiseKeyz/Electron" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 font-secondary">A fine-tuned language model enhanced with Retrieval Augmented Generation for improved context-aware responses and domain-specific knowledge.</p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Python</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Fast API</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Sentence Transformer</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">sklearn</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Gemini</motion.span>
              </div>
            </motion.div>

            {/* Project card 6 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-primary font-bold">Color Guessing Game</h3>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://hngfrontendstage1.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 font-secondary">An interactive RGB color guessing game with multiple difficulty levels and score tracking.</p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">HTML5</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">CSS3</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">JavaScript</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">DOM Manipulation</motion.span>
              </div>
            </motion.div>

            {/* Project card 7 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-primary font-bold">My Profile Card</h3>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://hngfrontendstage0.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 font-secondary">A responsive profile card component with modern design, animations, and social media integration.</p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">HTML5</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">CSS3</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">Flexbox</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">CSS Grid</motion.span>
              </div>
            </motion.div>

            {/* Project card 8 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-primary font-bold">React Todo App</h3>
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href="https://todo-app-praisekeys.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </motion.a>
              </div>
              <p className="text-gray-600 mb-6 font-secondary">A feature-rich todo application with task management, categories, and local storage persistence.</p>
              <div className="flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">React</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-secondary">TailwindCSS</motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        className="py-20 px-6"
      >
        <div className="container mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-primary font-bold mb-12 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-[170px] after:bg-gradient-to-r after:from-black after:to-transparent"
          >
            Experience
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Experience Item 1 */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="relative flex flex-col md:flex-row md:justify-between mb-16"
            >
              <motion.div 
                whileHover={{ scale: 1.2 }}
                initial="initial"
                whileInView="animate"
                viewport={{ margin: "-100px" }}
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-8 h-8 bg-black rounded-full border-4 border-white z-10"
              />
              
              <motion.div 
                variants={fadeInUp}
                className="hidden md:block w-[45%] text-right pr-8"
              >
                <span className="text-gray-600 font-secondary">2022 - Present</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ml-20 md:ml-8 md:w-[45%] bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-2xl text-black" />
                  <div>
                    <h3 className="text-xl font-primary font-bold">Software Engineer</h3>
                    <span className="block md:hidden text-sm text-gray-600 font-secondary mt-1">2022 - Present</span>
                  </div>
                </div>
                <p className="font-medium font-secondary text-gray-700 mb-2">Tech Company</p>
                <ul className="space-y-2 text-gray-600 font-secondary list-disc list-inside">
                  <li>Led development of microservices architecture serving 1M+ users</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
              className="relative flex flex-col md:flex-row md:justify-between mb-16"
            >
              <motion.div 
                whileHover={{ scale: 1.2 }}
                initial="initial"
                whileInView="animate"
                viewport={{ margin: "-100px" }}
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-8 h-8 bg-black rounded-full border-4 border-white z-10"
              />
              
              <motion.div 
                variants={fadeInUp}
                className="hidden md:block w-[45%] text-right pr-8"
              >
                <span className="text-gray-600 font-secondary">2020 - 2022</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ml-20 md:ml-8 md:w-[45%] bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-2xl text-black" />
                  <div>
                    <h3 className="text-xl font-primary font-bold">Software Developer</h3>
                    <span className="block md:hidden text-sm text-gray-600 font-secondary mt-1">2020 - 2022</span>
                  </div>
                </div>
                <p className="font-medium font-secondary text-gray-700 mb-2">Tech Startup</p>
                <ul className="space-y-2 text-gray-600 font-secondary list-disc list-inside">
                  <li>Developed and maintained multiple web applications</li>
                  <li>Implemented responsive designs and optimized performance</li>
                  <li>Collaborated with cross-functional teams on project deliverables</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        id='contacts' 
        className="py-20 px-6 bg-[#efefed] rounded-t-[50px]"
      >
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <FaHandshake className="text-6xl mx-auto mb-6 text-black" />
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-primary font-bold mb-8"
          >
            Text me about your next Project
          </motion.h1>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 bg-black text-white rounded-lg transition-colors hover:bg-gray-800 mb-12 font-secondary"
          >
            Say Hello
          </motion.button>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="space-y-6 mb-12"
          >
            <motion.div variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ margin: "-100px" }}
             className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-xl text-gray-700" />
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="mailto:praiseoluwatobilobaadebayo@gmail.com" 
                className="text-lg hover:text-gray-600 transition-colors font-secondary"
              >
                praiseoluwatobilobaadebayo@gmail.com
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
              <FaPhone className="text-xl text-gray-700" />
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="tel:+2349075600297" 
                className="text-lg hover:text-gray-600 transition-colors font-secondary"
              >
                +234 9075600297
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-xl text-gray-700" />
              <motion.span 
                whileHover={{ scale: 1.02 }}
                className="text-lg font-secondary"
              >
                127.0.0.0
              </motion.span>
            </motion.div>
          </motion.div>
          
          <motion.hr variants={fadeInUp} className="border-gray-300 mb-8" />
          
          <motion.div
            variants={fadeInUp}
            className="flex justify-between items-center"
          >
            <span className="text-gray-600 font-secondary">© 2024 Praisekeyz6</span>
            <div className="flex gap-6">
              <motion.a 
                whileHover={{ scale: 1.2, color: '#0077B5' }}
                href="https://www.linkedin.com/in/adebayo-praise-oluwatobiloba-89b81228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-gray-700 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: '#1877F2' }}
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-gray-700 transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: '#1DA1F2' }}
                href="https://twitter.com/@AdebayoPraise02"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-gray-700 transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: '#25D366' }}
                href="https://wa.me/2349075600297" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-gray-700 transition-colors"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default App