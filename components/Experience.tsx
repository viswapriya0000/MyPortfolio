
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-white">Professional <span className="gradient-text">Journey</span></h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-10 border-l-2 border-slate-800 group pb-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-950 border-2 border-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              
              <div className="space-y-2 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">{exp.role}</h3>
                  <span className="px-4 py-1.5 bg-slate-900 rounded-xl text-xs font-bold text-slate-400 border border-slate-800 inline-block w-fit whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="text-blue-500 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                  <i className="fa-solid fa-building"></i>
                  {exp.company}
                </div>
              </div>

              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-400 leading-relaxed text-sm md:text-base">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
