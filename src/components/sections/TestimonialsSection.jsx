import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';
import { teacherData } from '../../content/teacherData.js';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const mosaicRef = useRef(null);

  useEffect(() => {
    const cards = mosaicRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.8,
          rotation: (i) => (i % 2 === 0 ? -5 : 5)
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add floating animation
      Array.from(cards).forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -10 : 10,
          duration: 3 + (index * 0.5),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.3
        });
      });
    }
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="heading-display text-4xl lg:text-6xl text-gradient-rose">
            What Others Say
          </h2>
          <p className="text-body text-xl leading-relaxed max-w-3xl mx-auto">
            Testimonials from colleagues, students, and parents who have experienced the impact of innovative education
          </p>
        </div>

        {/* Testimonial Mosaic */}
        <div ref={mosaicRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teacherData.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`card-elegant bg-card/90 backdrop-blur-md rounded-3xl p-8 border border-primary/20 relative group overflow-hidden ${
                index === 0 ? 'lg:col-span-2' : ''
              } ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Background Quote */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-body text-lg leading-relaxed mb-8 relative z-10">
                <span className="text-primary text-3xl font-serif absolute -top-2 -left-2">"</span>
                {testimonial.message}
                <span className="text-primary text-3xl font-serif absolute -bottom-4 right-0">"</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="heading-primary text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-rose scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '98%', label: 'Student Satisfaction' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '200+', label: 'Positive Reviews' },
            { number: '15+', label: 'Awards Received' }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2 p-6 card-elegant bg-gradient-to-br from-primary/10 to-primary-glow/20 hover-lift">
              <div className="heading-display text-3xl text-primary">{stat.number}</div>
              <div className="text-body text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/10 animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-primary-glow/15 animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/5 to-primary-glow/5 blur-2xl"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;