import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaLinkedin, FaFacebook, FaTwitter,  FaHandshake, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaBriefcase, FaWhatsapp } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPython, SiMongodb } from 'react-icons/si';
import praise from './assets/praise.jpeg';
import { motion } from 'framer-motion';
import Header from './components/header';
import './App.css'
import projectsData from './data/projects.json'; // Import your project data

function App() {
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
    <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='min-h-screen bg-slate-800 pt-16 sm:pt-20 rounded-b-[50px] text-gray-100' // Changed to bg-slate-800
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
                  className="inline-block text-sm font-secondary md:text-base bg-purple-600 text-white px-4 py-2 rounded-full"
                >
                  Welcome to my portfolio
                </motion.span>
                <motion.h1 
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-primary leading-tight tracking-tight text-white"
                >
                  Creative Software{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    Engineer
                  </span>
                </motion.h1>
                <motion.span 
                  variants={fadeInUp}
                  className="block text-lg sm:text-xl font-secondary md:text-2xl text-purple-300 font-medium"
                >
                  Building Digital Excellence
                </motion.span>
              </div>
              
              <motion.p 
                variants={fadeInUp}
                className="text-sm sm:text-base md:text-lg text-gray-300 font-secondary leading-relaxed max-w-2xl text-left"
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
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-purple-600 text-white text-sm sm:text-base font-secondary rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-purple-700"
                >
                  View Projects
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-purple-600 text-sm sm:text-base font-secondary rounded-lg transition-all duration-300 hover:bg-purple-600 hover:text-white text-white"
                >
                  Contact Me
                </motion.button>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex items-start gap-4 sm:gap-6 pt-4"
              >
                <span className="text-sm font-secondary text-gray-400">Tech Stack |</span>
                <div className="flex gap-3 sm:gap-4 text-xl sm:text-2xl text-gray-300">
                  <motion.div whileHover={{ scale: 1.2, color: '#61DAFB' }}>
                    <FaReact className="transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: '#90EE90' }}>
                    <FaNodeJs className="transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: '#87CEEB' }}>
                    <SiTypescript className="transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: '#00BFFF' }}>
                    <SiTailwindcss className="transition-colors" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2, color: '#7CFC00' }}>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-800 to-gray-700 rounded-bl-[50px] sm:rounded-bl-[70px] rounded-tr-[50px] sm:rounded-tr-[80px] blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={praise} 
                alt="Profile" 
                className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-auto aspect-square object-cover rounded-bl-[50px] sm:rounded-bl-[70px] rounded-tr-[50px] sm:rounded-tr-[80px] border-2 border-purple-600 mx-auto"
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
        className="py-20 px-6 bg-slate-900 text-gray-100" // Changed to bg-slate-900
      >
        <div className="container mx-auto">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-100px" }}
            className="text-4xl font-primary font-bold mb-12 text-white"
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
              className="group bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700"
            >
              <div className="text-blue-400 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4 text-white">Frontend Development</h3>
              <p className="text-gray-300 font-secondary">
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
              className="group bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700"
            >
              <div className="text-green-400 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                ⚙️
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4 text-white">Backend Development</h3>
              <p className="text-gray-300 font-secondary">
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
              className="group bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700"
            >
              <div className="text-purple-400 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4 text-white">Full Stack Development</h3>
              <p className="text-gray-300 font-secondary">
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
              className="group bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700"
            >
              <div className="text-red-400 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🧠
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4 text-white">ML Engineering</h3>
              <p className="text-gray-300 font-secondary">
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
              className="group bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700"
            >
              <div className="text-cyan-400 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                ☁️
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4 text-white">Cloud Computing</h3>
              <p className="text-gray-300 font-secondary">
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
              className="group bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-700"
            >
              <div className="text-orange-400 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🔄
              </div>
              <h3 className="text-2xl font-primary font-bold mb-4 text-white">DevOps Engineering</h3>
              <p className="text-gray-300 font-secondary">
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
        className="py-20 px-6 bg-slate-800 rounded-t-[50px] rounded-b-[50px] text-gray-100" // Changed to bg-slate-800
      >
        <div className="container mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-primary font-bold mb-12 text-white"
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
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                initial="initial"
                whileInView="animate"
                viewport={{ margin: "-100px" }}
                className="group bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300" // Darker card background
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-primary font-bold text-white">{project.name}</h3>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-all text-white"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
                <p className="text-gray-300 mb-6 font-secondary">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      whileHover={{ scale: 1.05 }} 
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm font-secondary text-gray-100"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        className="py-20 px-6 bg-slate-900 text-gray-100" // Changed to bg-slate-900
      >
        <div className="container mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-primary font-bold mb-12 relative after:content-[\'\'] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-[170px] after:bg-gradient-to-r after:from-purple-600 after:to-transparent text-white"
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
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-700"></div>

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
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-8 h-8 bg-purple-600 rounded-full border-4 border-slate-900 z-10"
              />
              
              <motion.div 
                variants={fadeInUp}
                className="hidden md:block w-[45%] text-right pr-8"
              >
                <span className="text-gray-400 font-secondary">April 2025 - May 2025</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ml-20 md:ml-8 md:w-[45%] bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-2xl text-purple-400" />
                  <div>
                    <h3 className="text-xl font-primary font-bold text-white">Backend Engineer</h3>
                    <span className="block md:hidden text-sm text-gray-400 font-secondary mt-1">2022 - Present</span>
                  </div>
                </div>
                <p className="font-medium font-secondary text-gray-300 mb-2">BlackSolvent</p>
                <ul className="space-y-2 text-gray-400 font-secondary list-disc list-inside">
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
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-8 h-8 bg-purple-600 rounded-full border-4 border-slate-900 z-10"
              />
              
              <motion.div 
                variants={fadeInUp}
                className="hidden md:block w-[45%] text-right pr-8"
              >
                <span className="text-gray-400 font-secondary">March 2025 - April 2025</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ml-20 md:ml-8 md:w-[45%] bg-slate-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-2xl text-purple-400" />
                  <div>
                    <h3 className="text-xl font-primary font-bold text-white">Fullstack Developer</h3>
                    <span className="block md:hidden text-sm text-gray-400 font-secondary mt-1">2020 - 2022</span>
                  </div>
                </div>
                <p className="font-medium font-secondary text-gray-300 mb-2">Crativity Verse</p>
                <ul className="space-y-2 text-gray-400 font-secondary list-disc list-inside">
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
        className="py-20 px-6 bg-slate-800 rounded-t-[50px] text-gray-100" // Changed to bg-slate-800
      >
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <FaHandshake className="text-6xl mx-auto mb-6 text-purple-600" />
          </motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-primary font-bold mb-8 text-white"
          >
            Text me about your next Project
          </motion.h1>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 bg-purple-600 text-white rounded-lg transition-colors hover:bg-purple-700 mb-12 font-secondary"
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
              <FaEnvelope className="text-xl text-gray-300" />
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="mailto:praiseoluwatobilobaadebayo@gmail.com" 
                className="text-lg hover:text-gray-400 transition-colors font-secondary text-gray-100"
              >
                praiseoluwatobilobaadebayo@gmail.com
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
              <FaPhone className="text-xl text-gray-300" />
              <motion.a 
                whileHover={{ scale: 1.02 }}
                href="tel:+2349075600297" 
                className="text-lg hover:text-gray-400 transition-colors font-secondary text-gray-100"
              >
                +234 9075600297
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-xl text-gray-300" />
              <motion.span 
                whileHover={{ scale: 1.02 }}
                className="text-lg font-secondary text-gray-100"
              >
                127.0.0.0
              </motion.span>
            </motion.div>
          </motion.div>
          
          <motion.hr variants={fadeInUp} className="border-gray-700 mb-8" />
          
          <motion.div
            variants={fadeInUp}
            className="flex justify-between items-center"
          >
            <span className="text-gray-400 font-secondary">© 2024 Praisekeyz6</span>
            <div className="flex gap-6">
              <motion.a 
                whileHover={{ scale: 1.2, color: '#0077B5' }}
                href="https://www.linkedin.com/in/adebayo-praise-oluwatobiloba-89b81228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-gray-300 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: '#1877F2' }}
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-gray-300 transition-colors"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: '#1DA1F2' }}
                href="https://twitter.com/@AdebayoPraise02"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-gray-300 transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: '#25D366' }}
                href="https://wa.me/2349075600297" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl text-gray-300 transition-colors"
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