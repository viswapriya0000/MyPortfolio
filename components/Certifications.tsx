import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  // Mapping certifications to icons for better visual representation
  const getCertIcon = (title: string) => {
    if (title.includes('Azure')) return { icon: 'fa-brands fa-microsoft', color: 'text-blue-400', bg: 'bg-blue-500/10' };
    if (title.includes('Google') || title.includes('GCP')) return { icon: 'fa-brands fa-google', color: 'text-emerald-400', bg: 'bg-emerald-500/10' };
    return { icon: 'fa-solid fa-certificate', color: 'text-amber-400', bg: 'bg-amber-500/10' };
  };

  return (
    <section id="certifications" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => {
            const theme = getCertIcon(cert.title);
            return (
              <a 
                key={idx} 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 rounded-3xl group hover:border-blue-500/50 transition-all duration-500 flex items-center gap-6 relative overflow-hidden block hover:-translate-y-1"
              >
                {/* Background Large Icon Decor */}
                <div className={`absolute -right-4 -bottom-4 text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity ${theme.color}`}>
                   <i className={theme.icon}></i>
                </div>

                {/* External Link Icon indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs text-white"></i>
                </div>
                
                {/* Brand Icon */}
                <div className={`w-16 h-16 ${theme.bg} rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <i className={`${theme.icon} ${theme.color} text-3xl`}></i>
                </div>
                
                {/* Content */}
                <div className="space-y-1 relative z-10 pr-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certified</p>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;