import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaLinkedin, FaFacebook, FaTwitter,  FaHandshake, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaBriefcase, FaWhatsapp } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPython, SiMongodb } from 'react-icons/si';
import praise from './assets/praise.jpeg';
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

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-[#efefed]'
      }`}>
        <div className="container mx-auto px-6 py-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">PraiseKeyz <span className="text-2xl">🎹</span></h2>
        </div>
      </header>

      <section className='min-h-screen bg-[#efefed] pt-20 rounded-b-[50px]'>
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-15">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <span className="inline-block text-sm md:text-base bg-black text-white px-4 py-2 rounded-full">
                  Welcome to my portfolio
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Creative Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">Engineer</span>
                </h1>
                <span className="block text-xl md:text-2xl text-black font-medium">Building Digital Excellence</span>
              </div>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                I'm a software engineer with a passion for creating innovative solutions. 
                Specializing in full-stack development, I transform complex problems into 
                elegant, user-friendly applications. With expertise in modern technologies 
                and a keen eye for detail, I bridge the gap between creative design and 
                technical excellence.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <button 
                                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                 className="px-8 py-3 bg-black text-white rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
                  View Projects
                </button>
                <button 
                                  onClick={() => document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-black rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
                  Contact Me
                </button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
                <span className="text-sm text-gray-600">Tech Stack |</span>
                <div className="flex gap-4 text-2xl text-gray-700">
                  <FaReact className="hover:text-blue-500 transition-colors" />
                  <FaNodeJs className="hover:text-green-500 transition-colors" />
                  <SiTypescript className="hover:text-blue-600 transition-colors" />
                  <SiTailwindcss className="hover:text-cyan-500 transition-colors" />
                  <SiMongodb className="hover:text-green-600 transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-black to-gray-500 rounded-bl-[70px] rounded-tr-[80px] blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <img 
                src={praise} 
                alt="Profile" 
                className="relative w-100 max-w-[400px] h-[400px] object-cover rounded-bl-[70px] rounded-tr-[80px] border-2 border-black mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 underline">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
              <div className="text-blue-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-600">
                Crafting responsive and intuitive user interfaces with modern frameworks and pixel-perfect design implementation.
              </p>
            </div>

            {/* Backend Development Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
              <div className="text-green-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
              <p className="text-gray-600">
                Building robust server-side applications with scalable architecture and efficient database management.
              </p>
            </div>

            {/* Full Stack Development Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
              <div className="text-purple-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
              <p className="text-gray-600">
                End-to-end application development combining frontend finesse with backend expertise.
              </p>
            </div>
                        {/* ML Engineering Card */}
                        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
              <div className="text-red-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🧠
              </div>
              <h3 className="text-2xl font-bold mb-4">ML Engineering</h3>
              <p className="text-gray-600">
                Developing intelligent solutions using machine learning algorithms and data-driven approaches to solve complex problems.
              </p>
            </div>

            {/* Cloud Computing Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
              <div className="text-cyan-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                ☁️
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Computing</h3>
              <p className="text-gray-600">
                Architecting and deploying scalable cloud solutions using AWS, Azure, or GCP for optimal performance and reliability.
              </p>
            </div>

            {/* DevOps Card */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
              <div className="text-orange-600 mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                🔄
              </div>
              <h3 className="text-2xl font-['Boldons'] font-bold mb-4">DevOps Engineering</h3>
              <p className="text-gray-600">
                Implementing CI/CD pipelines and automating deployment processes for seamless software delivery and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='projects' className="py-20 px-6 bg-[#efefed] rounded-t-[50px] rounded-b-[50px]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold underline mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
                <a 
                  href="https://project1.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </a>
              </div>
              <p className="text-gray-600 mb-6">A full-stack e-commerce solution with real-time inventory management.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">AI Image Generator</h3>
                <a 
                  href="https://project2.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </a>
              </div>
              <p className="text-gray-600 mb-6">An AI-powered image generation tool using machine learning models.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Flask</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Cloud Dashboard</h3>
                <a 
                  href="https://project3.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  <FaExternalLinkAlt className="w-4 h-4 text-black" />
                </a>
              </div>
              <p className="text-gray-600 mb-6">A comprehensive cloud resource management and monitoring solution.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-[170px] after:bg-gradient-to-r after:from-black after:to-transparent">Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Experience Item 1 */}
            <div className="relative flex flex-col md:flex-row md:justify-between mb-16">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-8 h-8 bg-black rounded-full border-4 border-white z-10"></div>
              
              <div className="hidden md:block w-[45%] text-right pr-8">
                <span className="text-gray-600">2022 - Present</span>
              </div>

              <div className="ml-20 md:ml-8 md:w-[45%] bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-2xl text-black" />
                  <div>
                    <h3 className="text-xl font-bold">Senior Software Engineer</h3>
                    <span className="block md:hidden text-sm text-gray-600 mt-1">2022 - Present</span>
                  </div>
                </div>
                <p className="font-medium text-gray-700 mb-2">Tech Company</p>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Led development of microservices architecture serving 1M+ users</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>

            {/* Copy the same structure for Experience Items 2 and 3 */}
           
          </div>
        </div>
      </section>

      <section id='contacts' className="py-20 px-6 bg-[#efefed] rounded-t-[50px]">
        <div className="container mx-auto max-w-2xl text-center">
          <FaHandshake className="text-6xl mx-auto mb-6 text-black" />
          <h1 className="text-4xl font-bold mb-8">Text me about your next Project</h1>
          
          <button className="px-5 py-3 bg-black text-white rounded-lg transition-colors hover:bg-gray-800 mb-12">
            Say Hello
          </button>

          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-xl text-gray-700" />
              <a href="mailto:praiseoluwatobilobaadebayo@gmail.com" className="text-lg hover:text-gray-600 transition-colors">
                praiseoluwatobilobaadebayo@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaPhone className="text-xl text-gray-700" />
              <a href="tel:+2349075600297" className="text-lg hover:text-gray-600 transition-colors">
                +234 9075600297
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-xl text-gray-700" />
              <span className="text-lg">127.0.0.0</span>
            </div>
          </div>
          
          <hr className="border-gray-300 mb-8" />
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">© 2024 Praisekeyz6</span>
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-700 hover:text-black transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-700 hover:text-black transition-colors">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-700 hover:text-black transition-colors">
                <FaTwitter />
              </a>
              <a href="https://wa.me/2349075600297" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-700 hover:text-black transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App