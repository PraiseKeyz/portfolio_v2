'use client';

import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences?: Experience[];
}

const defaultExperiences: Experience[] = [
  {
    id: '1',
    role: 'Backend Engineer',
    company: 'MyFitHub',
    period: 'Aug 2025 – Present',
    description:
      'Architected the backend from scratch for a Nigerian fitness subscription platform. Built full Paystack subscription flows (recurring billing, webhooks, retries), venue management systems, and secure REST APIs. Stack: Node.js, TypeScript, PostgreSQL, Paystack.',
  },
  {
    id: '2',
    role: 'Backend Engineer',
    company: 'Makeatask',
    period: 'Oct 2025 – Present',
    description:
      'Led backend architecture for a two-sided task marketplace. Integrated Dojah KYC verification pipeline and built scalable APIs for user onboarding, task creation, bidding, and service delivery. Stack: Node.js, TypeScript, PostgreSQL, Dojah.',
  },
  {
    id: '3',
    role: 'Lead Fullstack Developer',
    company: 'Creativity Verse',
    period: 'May 2025 – Dec 2025',
    description:
      'Built the company&apos;s full web presence from scratch — React.js frontend, Node.js/Express backend. Led the dev team, set up CI/CD pipelines and cloud infrastructure. Stack: React.js, Node.js, Express, MongoDB, Tailwind CSS.',
  },
];

export default function ExperienceSection({
  experiences = defaultExperiences,
}: ExperienceSectionProps) {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 md:py-32 bg-[#0a0a0a] border-t border-gray-800"
    >
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
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-secondary max-w-2xl">
            A journey through impactful projects and innovative solutions, working with top-tier teams and technologies.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              index={idx}
            />
          ))}
        </div>

        {/* Timeline accent */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
