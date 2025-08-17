import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Filter, Sparkles } from 'lucide-react';
import { teacherData } from '../../content/teacherData.js';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(teacherData.projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? teacherData.projects 
    : teacherData.projects.filter(p => p.category === filter);

  useEffect(() => {
    const cards = gridRef.current?.children;
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 60, scale: 0.9, rotateX: 30 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [filteredProjects]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="heading-display text-4xl lg:text-6xl text-gradient-rose">
            Curriculum & Projects
          </h2>
          <p className="text-body text-xl leading-relaxed max-w-3xl mx-auto">
            Innovative educational initiatives and technology integrations that transform learning experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category 
                  ? 'btn-rose' 
                  : 'btn-outline-rose hover:scale-105'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="card-elegant bg-card/95 backdrop-blur-md rounded-3xl overflow-hidden border border-primary/20 group hover:shadow-glow transition-all duration-500"
              style={{ perspective: '1000px' }}
            >
              {/* Project Header */}
              <div className="p-8 space-y-6">
                
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-2 text-primary">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-4">
                  <h3 className="heading-primary text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-lg bg-accent/30 text-accent-foreground text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary-glow/20 border border-primary/30">
                  <div className="text-sm font-semibold text-primary mb-2">Impact</div>
                  <div className="text-body text-sm">{project.impact}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-rose text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 group">
                    <Github className="w-5 h-5" />
                    <span className="font-semibold">View Code</span>
                    <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-6 py-3 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-semibold">Live Demo</span>
                  </button>
                </div>
              </div>

              {/* Decorative Bottom Bar */}
              <div className="h-2 bg-gradient-rose transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-primary-glow/30 border border-primary/30">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-body font-semibold">More projects coming soon!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;