import React, { useEffect } from 'react';
import Navigation from '../components/Navigation.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import PhilosophySection from '../components/sections/PhilosophySection.jsx';
import CredentialsSection from '../components/sections/CredentialsSection.jsx';
import ExperienceSection from '../components/sections/ExperienceSection.jsx';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll-based animations trigger
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <CredentialsSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
