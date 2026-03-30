'use client';

import { useCallback } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const handleDownloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/Praise Adebayo.pdf';
    link.download = 'Praise Adebayo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleViewProjects = useCallback(() => {
    const element = document.getElementById('experience');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleContactClick = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header onDownloadCV={handleDownloadCV} />
      <Hero
        profileImage="/praise.jpeg"
        onViewProjects={handleViewProjects}
        onContactClick={handleContactClick}
      />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
