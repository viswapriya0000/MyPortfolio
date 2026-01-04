import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold leading-tight">Let's build something <br/><span className="gradient-text">extraordinary</span> together.</h2>
          <p className="text-slate-400 text-lg">Currently open to Java developer roles and collaborative engineering opportunities.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl group flex flex-col items-center text-center gap-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-all">
              <i className="fa-solid fa-envelope text-blue-500 text-2xl"></i>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-1">Email Me</p>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold hover:text-blue-400 transition-colors break-all">{PERSONAL_INFO.email}</a>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl group flex flex-col items-center text-center gap-6 hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-600/20 transition-all">
              <i className="fa-solid fa-location-dot text-emerald-500 text-2xl"></i>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg font-bold">{PERSONAL_INFO.location}</p>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl group flex flex-col items-center text-center gap-6 hover:border-amber-500/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-600/20 transition-all">
              <i className="fa-solid fa-phone text-amber-500 text-2xl"></i>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-1">Call Me</p>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-bold hover:text-amber-400 transition-colors">{PERSONAL_INFO.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;