import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  // Mapping certifications to icons for better visual representation
  const getCertIcon = (cert: string) => {
    if (cert.includes('Azure')) return { icon: 'fa-brands fa-microsoft', color: 'text-blue-400', bg: 'bg-blue-500/10' };
    if (cert.includes('Google') || cert.includes('GCP')) return { icon: 'fa-brands fa-google', color: 'text-emerald-400', bg: 'bg-emerald-500/10' };
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
            const theme = getCertIcon(cert);
            return (
              <div 
                key={idx} 
                className="glass p-8 rounded-3xl group hover:border-blue-500/50 transition-all duration-500 flex items-center gap-6 relative overflow-hidden"
              >
                <div className={`absolute -right-4 -bottom-4 text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity ${theme.color}`}>
                   <i className={theme.icon}></i>
                </div>
                
                <div className={`w-16 h-16 ${theme.bg} rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <i className={`${theme.icon} ${theme.color} text-3xl`}></i>
                </div>
                
                <div className="space-y-1 relative z-10">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certified</p>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {cert}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;