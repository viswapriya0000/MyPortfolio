
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-white">Technical <span className="gradient-text">Skillset</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl group hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-3xl -z-10 group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
                <i className={`fa-solid ${cat.icon} text-blue-500 text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800/80 rounded-xl text-xs font-semibold text-slate-300 border border-slate-700/50 group-hover:border-slate-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
