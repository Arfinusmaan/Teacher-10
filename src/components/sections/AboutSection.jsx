import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Users, Target, Award } from 'lucide-react';
import { teacherData } from '../../content/teacherData.js';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (cards) {
      gsap.fromTo(cards, 
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="heading-display text-4xl lg:text-6xl text-gradient-rose">
            About Me
          </h2>
          <p className="text-body text-xl leading-relaxed max-w-3xl mx-auto">
            {teacherData.about.intro}
          </p>
        </div>

        {/* Magic Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Large Mission Card */}
          <div className="lg:col-span-2 card-bento bg-gradient-to-br from-primary/10 to-primary-glow/20 min-h-[300px] flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="heading-primary text-2xl lg:text-3xl">My Mission</h3>
              </div>
              <p className="text-body text-lg leading-relaxed">
                {teacherData.about.mission}
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            {teacherData.about.values.slice(0, 2).map((value, index) => (
              <div key={index} className="card-bento bg-card/60 backdrop-blur-sm p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    {index === 0 ? <Heart className="w-4 h-4 text-primary" /> : 
                     <Users className="w-4 h-4 text-primary" />}
                  </div>
                  <span className="text-body font-semibold">{value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Card */}
          <div className="card-bento bg-gradient-to-br from-accent/30 to-primary/20 min-h-[200px] flex flex-col justify-center">
            <div className="text-center space-y-4">
              <Award className="w-12 h-12 text-primary mx-auto" />
              <div>
                <div className="heading-primary text-3xl text-primary">10+</div>
                <div className="text-body">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Remaining Values */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teacherData.about.values.slice(2).map((value, index) => (
              <div key={index + 2} className="card-bento bg-card/60 backdrop-blur-sm p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    {index === 0 ? <Target className="w-5 h-5 text-primary" /> : 
                     <Award className="w-5 h-5 text-primary" />}
                  </div>
                  <span className="text-body font-semibold text-lg">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-primary-glow/10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;