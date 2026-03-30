'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { FaReact, FaNodeJs } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  icon?: React.ComponentType<any>;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'MyFitHub Platform',
    description:
      'A comprehensive Nigerian fitness subscription platform with integrated payment processing, venue management, and subscription management.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Paystack', 'React'],
    icon: FaReact,
  },
  {
    id: '2',
    title: 'Makeatask Marketplace',
    description:
      'Two-sided task marketplace with KYC verification, user onboarding, task creation, bidding, and service delivery workflows.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Dojah', 'React'],
    icon: FaNodeJs,
  },
  {
    id: '3',
    title: 'Creativity Verse',
    description:
      'Full-stack web presence with team collaboration features, CI/CD pipelines, and cloud infrastructure setup.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    icon: FaReact,
  },
];

export default function ProjectsSection({
  projects = defaultProjects,
}: ProjectsSectionProps) {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={titleVariants}
          className="mb-12 sm:mb-16 md:mb-20 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary tracking-tight">
            Featured <span className="text-white">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-secondary max-w-2xl">
            A selection of key projects that showcase my expertise in backend architecture, integrations, and full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              icon={
                project.icon ? (
                  <project.icon className="text-3xl sm:text-4xl" />
                ) : undefined
              }
              index={idx}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 font-secondary mb-6">
            Interested in seeing more? Check out my GitHub for additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/PraiseKeyz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gray-800 text-white font-secondary font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
