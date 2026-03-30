'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/PraiseKeyz',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/praisekeyz',
      label: 'LinkedIn',
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/praisekeyz',
      label: 'Twitter',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:praise@example.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-12"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-primary">PraiseKeyz</h3>
            <p className="text-gray-400 font-secondary max-w-xs">
              Building innovative digital solutions with modern technologies and a passion for excellence.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-sm text-gray-500 font-secondary"
        >
          <p>
            &copy; {currentYear} PraiseKeyz. All rights reserved.
          </p>
          <p>
            Designed & built with <span className="text-blue-400">creativity</span> and{' '}
            <span className="text-blue-400">passion</span>.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
