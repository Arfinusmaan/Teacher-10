import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from 'lucide-react';
import { teacherData } from '../../content/teacherData.js';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="heading-display text-4xl lg:text-6xl text-gradient-rose">
            Let's Connect
          </h2>
          <p className="text-body text-xl leading-relaxed max-w-3xl mx-auto">
            Ready to collaborate, share ideas, or discuss innovative educational approaches? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div ref={formRef} className="card-elegant bg-card/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Header */}
              <div className="space-y-2 mb-8">
                <h3 className="heading-primary text-2xl text-foreground">Send a Message</h3>
                <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground resize-none"
                  placeholder="Tell me more about your project or inquiry..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-rose px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <div className="card-elegant bg-card/90 backdrop-blur-md rounded-3xl p-8 border border-primary/20">
              <h3 className="heading-primary text-2xl text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-rose flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground font-medium">{teacherData.contact.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-rose flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="text-foreground font-medium">{teacherData.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-rose flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground font-medium">{teacherData.contact.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card-elegant bg-card/90 backdrop-blur-md rounded-3xl p-8 border border-primary/20">
              <h3 className="heading-primary text-2xl text-foreground mb-6">Follow My Journey</h3>
              
              <div className="flex space-x-4">
                {Object.entries(teacherData.contact.social).map(([platform, url]) => {
                  const IconComponent = socialIcons[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-rose flex items-center justify-center text-primary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="card-elegant bg-gradient-to-br from-primary/10 to-primary-glow/20 rounded-3xl p-8 border border-primary/30">
              <h3 className="heading-primary text-xl text-primary mb-4">Current Availability</h3>
              <p className="text-body leading-relaxed">
                I'm currently available for educational consulting, workshop facilitation, and collaborative projects. Let's discuss how we can work together to transform education.
              </p>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-primary/10 animate-float opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-primary-glow/15 animate-float opacity-80" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default ContactSection;