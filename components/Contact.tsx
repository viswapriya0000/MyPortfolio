
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight">Let's build something <br/><span className="gradient-text">extraordinary</span> together.</h2>
            <p className="text-slate-400 text-lg">Currently open to Java developer roles and collaborative engineering opportunities.</p>
          </div>

          <div className="grid gap-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-all">
                <i className="fa-solid fa-envelope text-blue-500 text-2xl"></i>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email Me</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold hover:text-blue-400 transition-colors">{PERSONAL_INFO.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-600/20 transition-all">
                <i className="fa-solid fa-location-dot text-emerald-500 text-2xl"></i>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-lg font-bold">{PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl space-y-8">
           <h3 className="text-2xl font-bold">Quick Message</h3>
           <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Your Name</label>
                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" placeholder={PERSONAL_INFO.name} />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email Address</label>
                    <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" placeholder={PERSONAL_INFO.email} />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium text-slate-400">Message</label>
                 <textarea rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all" type="button">
                Send Message
              </button>
           </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
