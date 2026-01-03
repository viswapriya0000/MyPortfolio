import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      style={{ animationDelay: `${index * 150}ms` }}
      className={`group bg-slate-800/30 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 reveal ${isVisible ? 'active' : ''}`}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
           <div className="flex flex-wrap gap-2">
             {project.tech.map((t: string) => (
               <span key={t} className="text-[10px] uppercase tracking-wider font-bold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded backdrop-blur-md">
                 {t}
               </span>
             ))}
           </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
        
        <div className="space-y-3">
          <p className={`text-slate-400 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {project.description}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 transition-colors group/btn"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            <i className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'} transition-transform group-hover/btn:translate-y-px`}></i>
          </button>
        </div>

        <div className="pt-4 flex items-center justify-between border-t border-slate-700/50">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors">
            <i className="fa-brands fa-github text-lg text-blue-500"></i>
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-white">Featured <span className="gradient-text">Projects</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;