'use client';

import { motion } from 'framer-motion';
import SkillsCard from './SkillsCard';
import { FaNodeJs, FaReact, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiDocker, SiGit } from 'react-icons/si';

interface SkillCategory {
  category: string;
  skills: string[];
  icon?: React.ComponentType<any>;
}

interface SkillsSectionProps {
  skillCategories?: SkillCategory[];
}

const defaultSkills: SkillCategory[] = [
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'Real-time Systems'],
    icon: <FaNodeJs />,
  },
  {
    category: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'SWR'],
    icon: <FaReact />,
  },
  {
    category: 'Databases & Tools',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Git', 'CI/CD'],
    icon: <FaDatabase />,
  },
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML/CSS', 'Shell'],
    icon: <SiTypescript />,
  },
  {
    category: 'Integrations',
    skills: ['Paystack', 'Dojah KYC', 'Payment Processing', 'Webhooks', 'APIs', 'Third-party SDKs'],
    icon: <FaReact />,
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Vercel', 'Git', 'GitHub Actions', 'Cloud Infrastructure', 'Deployment'],
    icon: <SiDocker />,
  },
];

export default function SkillsSection({
  skillCategories = defaultSkills,
}: SkillsSectionProps) {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#0a0a0a] border-t border-gray-800">
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
            Skills &{' '}
            <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-secondary max-w-2xl">
            A comprehensive toolkit of technologies, frameworks, and methodologies that power my development approach.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((skillGroup, idx) => (
            <SkillsCard
              key={idx}
              category={skillGroup.category}
              skills={skillGroup.skills}
              icon={skillGroup.icon}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
