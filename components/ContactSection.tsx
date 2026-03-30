'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

interface ContactLink {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string;
}

interface ContactSectionProps {
  email?: string;
  phone?: string;
  location?: string;
}

export default function ContactSection({
  email = 'praise@example.com',
  phone = '+234 (0) XXX-XXXX',
  location = 'Lagos, Nigeria',
}: ContactSectionProps) {
  const contactLinks: ContactLink[] = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: phone,
      href: `tel:${phone}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: location,
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/PraiseKeyz', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/praisekeyz', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/praisekeyz', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-t border-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-3xl mx-auto space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary tracking-tight">
              Let&apos;s <span className="text-white">Connect</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 font-secondary max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Details Grid */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <Icon className="text-3xl text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-secondary text-gray-400 mb-2">{link.label}</h3>
                  <p className="text-white font-medium text-sm sm:text-base break-all">
                    {link.value}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center pt-6">
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-blue-500 text-white font-secondary font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Send me an Email
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 pt-8 border-t border-gray-800">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
