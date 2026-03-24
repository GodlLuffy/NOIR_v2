import React from 'react';

const Contact = () => {
  return (
    <main className="pt-40 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-primary font-accent tracking-[0.3em] text-xs uppercase">Get in Touch</span>
            <h1 className="text-6xl md:text-8xl font-serif italic text-on-background leading-none">
              The Private <br /><span className="text-primary/80">Consultation</span>
            </h1>
          </div>
          <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-md">
            For bespoke inquiries, bridal consultations, or private viewing requests, please leave your details below. Our concierge will respond within 24 cinematic hours.
          </p>
          <div className="space-y-6 pt-8 border-t border-outline-variant/20">
            <div className="flex items-center space-x-6">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <h4 className="font-accent tracking-widest text-sm text-on-background uppercase">The Atelier</h4>
                <p className="text-xs text-outline uppercase tracking-tighter">12 Via Montenapoleone, Milan</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="material-symbols-outlined text-primary">mail</span>
              <div>
                <h4 className="font-accent tracking-widest text-sm text-on-background uppercase">Electronic Correspondence</h4>
                <p className="text-xs text-outline uppercase tracking-tighter">concierge@noir-cinematic.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-10 md:p-16 rounded-xl noir-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl"></div>
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label uppercase tracking-widest text-[10px] text-outline">Full Name</label>
                <input className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-2 outline-none transition-all" type="text" placeholder="ALEXANDER VANE" />
              </div>
              <div className="space-y-2">
                <label className="font-label uppercase tracking-widest text-[10px] text-outline">Email Address</label>
                <input className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-2 outline-none transition-all" type="email" placeholder="ALEXANDER@VOYAGE.COM" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label uppercase tracking-widest text-[10px] text-outline">Subject of Inquiry</label>
              <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-2 outline-none transition-all uppercase text-[10px] tracking-widest bg-background">
                <option>Bespoke Collection</option>
                <option>Private Viewing</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label uppercase tracking-widest text-[10px] text-outline">Message</label>
              <textarea className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-2 outline-none transition-all resize-none" rows="4" placeholder="HOW MAY WE ASSIST YOUR NARRATIVE?"></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 font-accent tracking-[0.3em] uppercase rounded hover:shadow-[0_0_30px_rgba(233,193,118,0.3)] transition-all duration-500 hover:scale-[1.02]">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
