import React from 'react';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury interior" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2000ms] scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIP9ykhokFbPthTXjxYb_CGGCjF5WbilyZCFYmZMU3bzYYvrtiX-O6wyd4tyXg9l2a-4msQByjp1Hc2IGL6ZhzxicIQSOVZoQkiI62grZnM1mNYcFQQzYxnFOxXZTIzLvPgzZQCI3L3rF5jFLwFY6bZTIlspE3uoJyDS-lK2XWSa6TCkunKdERFU4mZDorzAO6pHo50om4EJSO4423bb-RVQ5kx8hngm0nYtY41ZHbmraLw4DT-cbcKfcqk8R-uuGej7760umcBmQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-primary font-label tracking-[0.4em] text-sm animate-pulse">ESTABLISHED MCMLXXXIV</h2>
            <h1 className="text-7xl md:text-9xl font-headline italic leading-[0.9] text-on-background tracking-tighter">
              The Art of <br /> <span className="text-primary ml-12 md:ml-24">Presence.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl font-body leading-relaxed">
              Where liquid gold meets eternal shadow. Explore our curated collection of cinematic essentials designed for the discerning individual.
            </p>
            <div className="flex items-center space-x-8 pt-8">
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-5 rounded-full font-label tracking-widest text-sm hover:scale-105 transition-all duration-500 liquid-gold-glow">
                EXPLORE COLLECTION
              </button>
              <button className="flex items-center space-x-4 group">
                <span className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary">play_arrow</span>
                </span>
                <span className="font-label tracking-widest text-xs">WATCH FILM</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 hidden md:block">
          <div className="flex flex-col items-end space-y-4">
            <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
            <span className="font-label tracking-[0.5em] text-[10px] rotate-180 [writing-mode:vertical-lr]">SCROLL TO DISCOVER</span>
          </div>
        </div>
      </section>

      {/* Featured Products (Bento Grid) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-label tracking-widest text-xs uppercase">Curated Selects</span>
              <h3 className="text-5xl font-headline italic">The Noir Registry</h3>
            </div>
            <p className="max-w-xs text-on-surface-variant text-sm font-body leading-relaxed">
              Pieces that define an atmosphere. Meticulously crafted using rare materials and artisanal techniques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Large Feature */}
            <div className="md:col-span-8 group relative overflow-hidden glass-card neon-edge rounded-xl transition-all duration-700 hover:scale-[1.01]">
              <img 
                alt="Premium product" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgmg6_6KJuuTJuD04r40F9wANVpZL0-0o9nGRuEKeFF7Cfd5S3CQzAv0vUPb1NyBV_E9VuSiySEd_A2A7zWK-Ms91kppIqmjFtHX5ClqsyeDBcVGTS3G2X4DaC1o0_fQMOR5uOkm8prSiXpyOYu5I2J1iMY1VWdHXlkFXdH6fnCWwV9ywF06ulnV67tTppz2WXBJMg_rlWCfJwclvNSspLaolefp1RKBGkh9Yf1ZeL1FZwspAwdryIyP2FrCbPGSjUgJFHQuAEhjY"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-primary font-label tracking-widest text-xs mb-2">LIMITED EDITION</span>
                <h4 className="text-4xl font-headline italic mb-4">Obsidian Chronograph</h4>
                <p className="text-on-surface-variant max-w-sm mb-8">Swiss movement encased in carbon-treated titanium. A silent statement of precision.</p>
                <button className="w-fit text-primary font-label tracking-widest text-sm border-b border-primary/30 pb-1 hover:border-primary transition-all">VIEW DETAILS</button>
              </div>
            </div>
            {/* Side Grid Items */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="group relative overflow-hidden glass-card neon-edge rounded-xl transition-all duration-700 hover:scale-[1.01]">
                <img 
                  alt="Luxury scent" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-x0KdHra3o-omg_r_pAJ_ClWAtTiALeV21ZQu4edNIyDIZKcgeenaAyMlc2vQkUFtd6b_C2IMx482U-yMYLQJwRD71FQSC8SPG7dhHPyXiZq89LrqfYzfjnDO3ow_cRg3t7DVmqJ2cVB-nNXLYIXban-W62drBNd788OZFrkfUpOIx7o35aAmbyW-cQOOT1xAQNJyf35yC5oxFmd-zuQixBYIV4mVKci9hIvYJvxKYE8nAlKgDSl9ZdgG0niXdJ-KAaqGB7wgcHs"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background/80 to-transparent">
                  <h4 className="text-2xl font-headline italic mb-2">Midnight Scent No. 4</h4>
                  <span className="text-primary font-label tracking-widest text-xs">$240.00</span>
                </div>
              </div>
              <div className="group relative overflow-hidden glass-card neon-edge rounded-xl transition-all duration-700 hover:scale-[1.01]">
                <img 
                  alt="Designer leather" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmjTnJtllAkM6UazhOw3_aynIaeYyeeh8_QRt43i3zw1ySacKgqVOmErZcDU1fhJkszls1Yso_GG-6Mr6fOSIDM_gTB0362V-LZLttTw09VsyBtA4siYZH4TpsxQBLaL3xfzYRubEakK06c0Jhyktvmm1E_gRz2JeSk1Dwqog0RD21oLYrUS8fK9oHZTnn__pA9Co9hpdGzf4ijnJJmRoTK-iCyUvNt2lEZopx4mkoXGsNv5DrACPqDQcxsvng6sZWbb1mtCZWtrw"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background/80 to-transparent">
                  <h4 className="text-2xl font-headline italic mb-2">Architect Folio</h4>
                  <span className="text-primary font-label tracking-widest text-xs">$890.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-40 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="absolute -top-20 -left-20 text-[20rem] font-headline italic text-white/[0.02] select-none pointer-events-none">NOIR</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img 
                  alt="Artisan process" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE25QZMzbQuZgUd4NNM7OP8u6PktiSo7Z5BOKXyI_cLEdlgQjyEyeUeInIoJUJIR08oK_AEmIG0CQbO0KH_z5awH_PVaIasYtS_9Jjcr7rU9ZZ4he9r4iK1ZdnvuAlNqolbM6oD_S57IIOXbPmrYtgtKbWU8TJ0fzJ1UZ0TNx8pm-kZowXNiO8lYfEtIXbhIGfbayaIRBZ46OBzBWZ_8LPYTuJBdEIpwjYWLjQjnepnx-WZDkdkfjvLN0cMApJgTtuB7KJYQBJ8ns"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card p-8 neon-edge hidden md:block">
                <p className="font-headline italic text-2xl text-primary">"Beauty is found in <br /> the absence of light."</p>
              </div>
            </div>
            <div className="space-y-12 order-1 md:order-2">
              <div className="space-y-4">
                <span className="text-primary font-label tracking-widest text-xs uppercase">The Philosophy</span>
                <h3 className="text-6xl font-headline italic leading-tight">Mastering the <br /> Cinema of Life.</h3>
              </div>
              <div className="space-y-6 text-on-surface-variant font-body leading-loose text-lg">
                <p>We believe that luxury isn't about being noticed; it's about being remembered. Our design language speaks in whispers, utilizing the highest tier of tonal depth and negative space to frame what truly matters.</p>
                <p>Every NOIR piece undergoes a rigorous curation process, ensuring that only objects with a soul make it to your collection. We don't follow trends; we create legacies.</p>
              </div>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-outline-variant/30">
                <div>
                  <h5 className="text-on-background font-label tracking-widest mb-2 text-sm">CRAFTMANSHIP</h5>
                  <p className="text-xs text-on-surface-variant uppercase tracking-tighter">100% Hand-finished materials</p>
                </div>
                <div>
                  <h5 className="text-on-background font-label tracking-widest mb-2 text-sm">EXCLUSIVITY</h5>
                  <p className="text-xs text-on-surface-variant uppercase tracking-tighter">Small batch production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-8 text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-5xl font-headline italic">Join the Inner Circle.</h3>
            <p className="text-on-surface-variant font-body">Subscribers receive private access to seasonal drops and cinematic events.</p>
          </div>
          <div className="relative group">
            <input 
              className="w-full bg-transparent border-b border-outline-variant py-6 text-on-background font-label tracking-widest focus:outline-none focus:border-primary transition-all text-center" 
              placeholder="YOUR EMAIL ADDRESS" 
              type="email"
            />
            <button className="mt-8 text-primary font-label tracking-[0.3em] text-xs hover:text-white transition-colors duration-500">SUBSCRIBE NOW</button>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-1000"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
