import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = PERSONAL_INFO.designation;

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId: number;

    const type = () => {
      const current = fullText.slice(0, index);
      setTypedText(current);

      if (!isDeleting && index < fullText.length) {
        index++;
        timeoutId = window.setTimeout(type, 70);
      } else if (!isDeleting && index === fullText.length) {
        timeoutId = window.setTimeout(() => {
          isDeleting = true;
          type();
        }, 3000);
      } else if (isDeleting && index > 0) {
        index--;
        timeoutId = window.setTimeout(type, 30);
      } else {
        isDeleting = false;
        index = 0;
        timeoutId = window.setTimeout(type, 500);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [fullText]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="profile" className="min-h-screen flex items-center pt-28 pb-12 px-6 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto w-full text-center space-y-10 animate-fade-in-up">
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mx-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Open for Opportunities</span>
        </div>
        
        {/* Main Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <div className="min-h-[40px]">
            <h2 className="text-2xl md:text-4xl font-bold gradient-text inline">
              {typedText}
              <span className="ml-1 inline-block w-[2px] h-[1em] bg-blue-500 animate-pulse align-middle"></span>
            </h2>
          </div>
        </div>

        {/* Console Interface Window */}
        <div className="max-w-3xl mx-auto text-left glass rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group hover:border-blue-500/30 transition-all duration-500">
          <div className="bg-slate-900/90 px-4 py-2 flex items-center justify-between border-b border-slate-800">
             <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/60 shadow-sm shadow-rose-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/60 shadow-sm shadow-amber-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/60 shadow-sm shadow-emerald-500/20"></div>
             </div>
             <div className="flex items-center gap-2">
                <i className="fa-solid fa-terminal text-[10px] text-blue-400"></i>
                <span className="text-[10px] text-slate-300 font-mono font-semibold uppercase tracking-wider">Debug Console</span>
             </div>
             <div className="flex gap-4">
                <i className="fa-solid fa-play text-[10px] text-emerald-500/50"></i>
                <i className="fa-solid fa-arrows-rotate text-[10px] text-slate-600"></i>
             </div>
          </div>

          <div className="p-6 md:p-8 font-mono text-[11px] md:text-sm leading-relaxed bg-slate-950/40">
             <div className="flex items-start gap-2 mb-4">
                <span className="text-blue-500/60 font-bold shrink-0">[INFO]</span>
                <span className="text-slate-400">Initializing ViswaPriyaApplication...</span>
             </div>
             
             <div className="space-y-4">
               <div className="text-slate-200 border-l-2 border-emerald-500/40 pl-4 py-1 bg-emerald-500/5 rounded-r-lg">
                  {PERSONAL_INFO.bio}
               </div>
               
               <div className="flex items-start gap-2 opacity-60">
                  <span className="text-blue-500/40 font-bold shrink-0">[INFO]</span>
                  <span className="text-slate-500 italic">Runtime: OpenJDK 17.0.2 - Memory: 512MB</span>
               </div>
               
               <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">[SUCCESS]</span>
                  <span className="text-slate-300">Application deployed successfully to production.</span>
               </div>
             </div>
             
             <div className="mt-6 flex items-center gap-2">
                <span className="text-slate-600">user@portfolio:~$</span>
                <span className="w-2 h-4 bg-blue-500/50 animate-pulse"></span>
             </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <a 
            href={PERSONAL_INFO.resumeUrl} 
            target="_blank"
            rel="noopener noreferrer"
            download="Viswa_Priya_Resume.pdf"
            className="w-full sm:w-auto bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 hover:scale-105 transition-all flex items-center justify-center space-x-3 shadow-xl active:scale-95 cursor-pointer text-base"
          >
            <i className="fa-solid fa-download"></i>
            <span>Download Resume</span>
          </a>
        </div>

        {/* Tech Stack Icons */}
        <div className="pt-8 flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           <i className="fa-brands fa-java text-3xl md:text-4xl" title="Java"></i>
           <i className="fa-solid fa-leaf text-3xl md:text-4xl" title="Spring Boot"></i>
           <i className="fa-brands fa-docker text-3xl md:text-4xl" title="Docker"></i>
           <i className="fa-solid fa-database text-3xl md:text-4xl" title="PostgreSQL"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;