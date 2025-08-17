import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { teacherData } from '../../content/teacherData.js';

gsap.registerPlugin(ScrollTrigger);

const CredentialsSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = timelineRef.current?.children;
    if (items) {
      gsap.fromTo(items,
        { opacity: 0, x: -100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
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
    <section id="credentials" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="heading-display text-4xl lg:text-6xl text-gradient-rose">
            Credentials & Education
          </h2>
          <p className="text-body text-xl leading-relaxed max-w-3xl mx-auto">
            A comprehensive academic and professional journey dedicated to educational excellence
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="space-y-8">
          {teacherData.credentials.map((credential, index) => (
            <div 
              key={index}
              className="card-elegant bg-card/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                
                {/* Icon & Type */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-rose flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300">
                    {credential.type === 'Education' ? 
                      <GraduationCap className="w-8 h-8 text-primary-foreground" /> :
                      <Award className="w-8 h-8 text-primary-foreground" />
                    }
                  </div>
                  <div>
                    <div className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {credential.type}
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{credential.year}</span>
                    </div>
                  </div>
                </div>

                {/* Title & Institution */}
                <div className="lg:col-span-2 space-y-2">
                  <h3 className="heading-primary text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {credential.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{credential.institution}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="text-body leading-relaxed">
                  {credential.description}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 h-1 bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-rose transition-all duration-1000 group-hover:w-full"
                  style={{ width: `${((teacherData.credentials.length - index) / teacherData.credentials.length) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Years Teaching' },
            { number: '500+', label: 'Students Taught' },
            { number: '15+', label: 'Certifications' },
            { number: '95%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2 p-6 card-elegant bg-gradient-to-br from-primary/5 to-primary-glow/10">
              <div className="heading-display text-3xl text-primary">{stat.number}</div>
              <div className="text-body text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;