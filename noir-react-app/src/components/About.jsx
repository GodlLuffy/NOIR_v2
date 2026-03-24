import React from 'react';

const About = () => {
  return (
    <main className="relative animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full opacity-60 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB10u_rgFgkcQcfrJF8-apIzpoM_w48fMeqjOIjPp1SfzPkg89nwc4ftNKhtYaqbqQXjRkHunJlSCGQmtWxYXBvBjir79GFitY3xgbsePizcIK9lPw2B_yiX6cNm9grjszS7gIDjEX4uiMetWDq5Xpv8SYdId56myKC4K0qzWMxQesvB6ra5AJgB6QWj_bTxJoOiYqte8Dd98RtDvU1mVTFFevNYpv_AYEmacdxpS_tFrmJf-hfy6jfOFpl4xFd8Nqxi_2P8Cr-PfQ')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif italic text-[5rem] md:text-[8rem] text-primary leading-tight tracking-tighter drop-shadow-[0_0_15px_rgba(233,193,118,0.3)]">
            Obsidian Luxe
          </h1>
          <p className="font-accent text-on-surface/60 tracking-[0.5em] uppercase text-sm md:text-lg mt-4">
            The Art of The Unseen
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-primary/40">expand_more</span>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-32 px-6 md:px-24 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-8">
            <span className="font-accent text-primary tracking-[0.3em] uppercase text-xs">Chapter I</span>
            <h2 className="font-serif italic text-5xl md:text-6xl text-on-surface leading-tight">
              A Narrative in <br /> <span className="text-primary">Noir</span>
            </h2>
            <p className="font-sans text-on-surface/70 leading-relaxed text-lg max-w-md">
              NOIR was born from a singular obsession: the interplay of absolute darkness and the precious metals that dare to interrupt it. We don't just create luxury; we curate an atmosphere where light is a guest, not a resident.
            </p>
          </div>
          <div className="md:col-span-7 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden glass-panel p-4 border border-white/5">
              <img 
                className="w-full h-full object-cover rounded-lg opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeL6RErsevcR5I-JtI8XCf0D20PJs2mFktklL1aJk09KbFD4eIk8-s1Um26FterSOAkDkbxQ2K--Rmh9gRaoU0c7iRsHfBMHf_ze5mk3hIo41RiglPRk_Mg3XlzhtczP68amFVCMRzBkoalcnvL_AASDtf_CSoKnJNUDsSDhpEExDhC1nyIhJBSjzE1idJkEMXfYVHJnvdGW9dpdKQAMw0-84vcH4k2WsTqnz5w8M5NDg5srbgVEHDhtEwL5XpTks7nCG5NulUIK4" 
                alt="Vision"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-primary/10 blur-[80px]"></div>
          </div>
        </div>
      </section>

      {/* The Craft - Bento Grid */}
      <section className="py-32 px-6 md:px-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="font-serif italic text-4xl md:text-5xl mb-4">Precision of the Shadow</h2>
            <p className="font-accent text-on-surface/50 tracking-widest uppercase text-sm">Crafted for the Eternal Night</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-2 md:row-span-2 glass-panel border border-white/5 p-8 relative group overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-1000">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAob0VdKRVp08VNtFGLT58XyNleTX2gU6GgWWdgs_TgB5spwyKiK2oO_Av2yrAcaT-PbSXduqGXWt-JnQZYyrmfGOYBq1j5l42UwSeauo9Uu13GFJz_P4rzUUwtgNDaQqyhiaS2556jrDf06DbTgMpGioKPWNKrks1e1uNBU9RHVLaLR9Fc-MWKXPbwAvTNhqSuZCFvSOZwzuA-FANRg3fTmmePi2U9E77GyfpL_QtM_HRVdthhMyfdXZY8rbPyAkchC_IqATLKYc" 
                  alt="Liquid Architecture"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="font-serif text-3xl mb-2">Liquid Architecture</h3>
                <p className="font-sans text-sm text-on-surface/60 max-w-xs">Our garments follow the contours of movement, flowing like molten gold through the night.</p>
              </div>
            </div>
            <div className="md:col-span-2 glass-panel border border-white/5 p-8 flex items-center justify-between group">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl">The Obsidian Thread</h3>
                <p className="font-sans text-xs uppercase tracking-widest text-primary">Signature Material v.04</p>
              </div>
              <div className="w-32 h-32 rounded-full overflow-hidden border border-primary/20">
                <img 
                  className="w-full h-full object-cover grayscale brightness-50" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDik7cQTsEqaMgPTAkUOSWf1Ugk3Laq6dyY95eyXM2NVOpK0va5AUlHwBo9gAClcoSH_rvQUkbCIEqYowYAPkW3FHzDVW0IHnEkOkWulVBVxaJeTBHgRMEsygm0ecHFBZQrUVfbi1YYuh2bhN_s80WmCSn_ynzvd8r16wtB52Ed0lavlGS4P5A-XIiUafPFHVNmYQdx2sFvUEgqjZPNpxZ-LpDh0MYIQE2xZYZDHaMC8dYlBjRIhPyVTbMvmyPjRYoB_rxJYfEZXSY" 
                  alt="Obsidian Thread"
                />
              </div>
            </div>
            <div className="glass-panel border border-white/5 p-8 group hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">auto_awesome</span>
              <h4 className="font-accent tracking-widest text-sm mb-2">Purity</h4>
              <p className="font-sans text-[10px] text-on-surface/50 leading-relaxed uppercase">Sourced from the quietest corners of the globe.</p>
            </div>
            <div className="glass-panel border border-white/5 p-8 group hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">history_edu</span>
              <h4 className="font-accent tracking-widest text-sm mb-2">Heritage</h4>
              <p className="font-sans text-[10px] text-on-surface/50 leading-relaxed uppercase">Generations of mastery distilled into every single stitch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="material-symbols-outlined text-primary text-5xl mb-8">format_quote</span>
          <p className="font-serif italic text-3xl md:text-5xl leading-tight text-on-surface mb-12">
            "Luxury is not about being noticed, it is about being remembered in the dark long after the lights have faded."
          </p>
          <div className="w-20 h-px bg-primary mx-auto mb-8"></div>
          <p className="font-accent tracking-[0.4em] uppercase text-xs text-primary">NOIR Founding Principles</p>
        </div>
      </section>
    </main>
  );
};

export default About;
