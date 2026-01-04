import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative selection:bg-blue-500 selection:text-white bg-slate-950 min-h-screen">
      {/* Background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <Navigation />
      
      <main>
        <Hero />
        
        <Skills />
        
        <Experience />

        <Projects />

        <Certifications />

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto glass p-12 rounded-3xl border border-blue-500/20 text-center space-y-8">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 text-3xl">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
            </div>
            <div className="space-y-2">
               <h2 className="text-3xl font-bold text-white">Education</h2>
               <p className="text-slate-400 font-medium">{PERSONAL_INFO.education.degree}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-300">
               <div className="flex items-center gap-2">
                 <i className="fa-solid fa-university text-blue-500"></i>
                 <span>{PERSONAL_INFO.education.college}</span>
               </div>
               <div className="w-1.5 h-1.5 bg-slate-700 rounded-full hidden md:block"></div>
               <div className="flex items-center gap-2">
                 <i className="fa-solid fa-star text-blue-500"></i>
                 <span>CGPA: {PERSONAL_INFO.education.cgpa}</span>
               </div>
               <div className="w-1.5 h-1.5 bg-slate-700 rounded-full hidden md:block"></div>
               <div className="flex items-center gap-2 text-slate-500">
                 <i className="fa-solid fa-calendar text-blue-500"></i>
                 <span>{PERSONAL_INFO.education.period}</span>
               </div>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-900 text-center space-y-6">
        <div className="flex justify-center space-x-8">
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-white transition-all duration-300 hover:animate-bounce hover:scale-110 inline-block"
            title="GitHub"
          >
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a 
            href={PERSONAL_INFO.linkedin || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-white transition-all duration-300 hover:animate-bounce hover:scale-110 inline-block"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="text-slate-500 hover:text-white transition-all duration-300 hover:animate-bounce hover:scale-110 inline-block"
            title="Email"
          >
            <i className="fa-solid fa-envelope text-2xl"></i>
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Spring Boot mindset and React efficiency.
        </p>
      </footer>
    </div>
  );
};

export default App;