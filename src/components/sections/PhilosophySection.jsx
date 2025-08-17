import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Heart, Users, Star } from 'lucide-react';
import { teacherData } from '../../content/teacherData.js';

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const iconMap = {
    lightbulb: Lightbulb,
    heart: Heart,
    users: Users,
    star: Star
  };

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 80, rotateX: 45 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
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

      // Hover animations
      Array.from(cards).forEach((card) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            rotateY: 5,
            z: 50,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotateY: 0,
            z: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    }
  }, []);

  return (
    <section 
      id="philosophy" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-background via-accent/10 to-primary/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="heading-display text-4xl lg:text-6xl text-gradient-rose">
            {teacherData.philosophy.title}
          </h2>
          <p className="heading-primary text-xl lg:text-2xl text-foreground/80 max-w-4xl mx-auto">
            {teacherData.philosophy.subtitle}
          </p>
        </div>

        {/* Philosophy Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teacherData.philosophy.core.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            
            return (
              <div 
                key={index}
                className="card-elegant bg-card/90 backdrop-blur-md p-8 rounded-3xl border border-primary/20 relative group overflow-hidden"
                style={{ perspective: '1000px' }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6 text-center">
                  
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-rose flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="heading-primary text-2xl text-primary group-hover:text-primary-glow transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body leading-relaxed text-foreground/80">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-rose scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-primary-glow/15 animate-float opacity-80" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 to-primary-glow/5 blur-3xl"></div>
      </div>
    </section>
  );
};

export default PhilosophySection;