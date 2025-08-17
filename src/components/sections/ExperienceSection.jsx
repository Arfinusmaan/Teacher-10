import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { teacherData } from '../../content/teacherData.js';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (cards) {
      // Create a timeline for cards
      gsap.fromTo(cards,
        { 
          opacity: 0, 
          y: 100, 
          rotateX: 45,
          scale: 0.8 
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add pixel-inspired hover effects
      Array.from(cards).forEach((card, index) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.03,
            rotateY: index % 2 === 0 ? 3 : -3,
            z: 30,
            boxShadow: "0 20px 40px rgba(161, 128, 128, 0.3)",
            duration: 0.4,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotateY: 0,
            z: 0,
            boxShadow: "0 10px 30px rgba(161, 128, 128, 0.2)",
            duration: 0.4,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="heading-display text-4xl lg:text-6xl text-gradient-rose">
            Professional Experience
          </h2>
          <p className="text-body text-xl leading-relaxed max-w-3xl mx-auto">
            A dynamic career journey showcasing growth, innovation, and impact in educational leadership
          </p>
        </div>

        {/* Experience Cards */}
        <div ref={cardsRef} className="space-y-8">
          {teacherData.experience.map((exp, index) => (
            <div 
              key={index}
              className="card-elegant bg-card/95 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-primary/20 relative group overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-rose opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  
                  {/* Left: Role & Company Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-rose flex items-center justify-center shadow-elegant">
                        <Briefcase className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Position {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="heading-primary text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{exp.organization}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center: Description */}
                  <div className="space-y-4">
                    <p className="text-body text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right: Achievements */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-primary">
                      <TrendingUp className="w-5 h-5" />
                      <span className="font-semibold">Key Achievements</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-body text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Progress Indicator */}
                <div className="mt-8 flex items-center space-x-2">
                  {teacherData.experience.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i <= index ? 'bg-gradient-rose flex-1' : 'bg-border w-4'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Background Floating Elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 rounded-full bg-primary/10 animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-8 w-12 h-12 rounded-full bg-primary-glow/15 animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default ExperienceSection;