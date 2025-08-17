import React, { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import heroImage from '../../assets/hero-bg.jpg';
import portraitImage from '../../assets/teacher-portrait.jpg';
import { teacherData } from '../../content/teacherData.js';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const portraitRef = useRef(null);
  const floatingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set([titleRef.current, subtitleRef.current, portraitRef.current], {
      opacity: 0,
      y: 50
    });

    // Animate in sequence
    tl.to(portraitRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.7");

    // Floating animation
    gsap.to(floatingRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

  }, []);

  const scrollToNext = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(161, 128, 128, 0.1), rgba(255, 251, 245, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Elements */}
      <div ref={floatingRef} className="absolute top-20 right-20 hidden lg:block">
        <div className="w-16 h-16 rounded-full bg-gradient-rose opacity-20 animate-float"></div>
      </div>
      
      <div className="absolute top-40 left-20 hidden lg:block">
        <div className="w-12 h-12 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          
          {/* Circular Text Badge */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-rose flex items-center justify-center shadow-glow">
                <Sparkles className="text-white w-8 h-8" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-glow animate-pulse"></div>
            </div>
          </div>

          {/* Split Text Animation */}
          <div ref={titleRef} className="space-y-4">
            <h1 className="heading-display text-5xl lg:text-7xl leading-tight">
              <span className="block text-gradient-rose">{teacherData.hero.welcome}</span>
            </h1>
            <h2 className="heading-primary text-2xl lg:text-3xl text-foreground/80">
              {teacherData.hero.tagline}
            </h2>
          </div>

          {/* Description with Blur Effect */}
          <div ref={subtitleRef} className="space-y-6">
            <p className="text-body text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {teacherData.hero.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
                className="btn-rose px-8 py-4 rounded-full font-semibold text-lg"
              >
                Discover My Journey
              </button>
              <button 
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-rose px-8 py-4 rounded-full font-semibold text-lg"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Portrait Image */}
        <div ref={portraitRef} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-elegant hover-lift">
              <img 
                src={portraitImage} 
                alt="Sarah Johnson - Teacher Portrait"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-rose opacity-80 shadow-glow"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary-glow opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-primary hover:text-primary-glow transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;