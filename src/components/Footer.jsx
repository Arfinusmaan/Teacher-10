import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { teacherData } from '../content/teacherData.js';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-accent/5 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="heading-primary text-2xl text-gradient-rose">
                {teacherData.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {teacherData.title} • {teacherData.subtitle}
              </p>
            </div>
            
            <p className="text-body leading-relaxed max-w-md">
              Transforming education through innovation, empowering students to reach their full potential, 
              and creating lasting impact in classrooms worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="heading-primary text-lg text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {navigationLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="heading-primary text-lg text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <div className="text-body">
                <div className="text-muted-foreground text-sm">Email</div>
                <div className="font-medium">{teacherData.contact.email}</div>
              </div>
              <div className="text-body">
                <div className="text-muted-foreground text-sm">Location</div>
                <div className="font-medium">{teacherData.contact.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border/50 space-y-4 sm:space-y-0">
          
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© 2024 {teacherData.name}. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>for education.</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="text-sm font-medium">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;